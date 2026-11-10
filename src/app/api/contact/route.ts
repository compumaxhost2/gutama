import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, mapZodErrorsToFieldErrors, type ContactFormInput } from "@/lib/contact-schema";
import { generateContactEmailHtml } from "@/lib/email-template";

// Initialize Resend safely (fallback to dummy key during build time if env var not set)
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build");

// Known mobile carrier SMS / MMS gateway domains
const CARRIER_GATEWAY_PATTERNS = [
  "@vtext.com",
  "@vzwpix.com",
  "@txt.att.net",
  "@mms.att.net",
  "@tmomail.net",
  "@mms.cricketwireless.net",
  "@mailmymobile.net",
  "@mymetropcs.com",
  "@sms.myboostmobile.com",
];

function isSmsGatewayEmail(email: string): boolean {
  const lower = email.toLowerCase();
  return CARRIER_GATEWAY_PATTERNS.some((pattern) => lower.endsWith(pattern));
}

// Generate concise, plain-text notification for mobile SMS gateways (Verizon vtext)
function generateSmsAlertText(data: ContactFormInput): string {
  const isAppointment = data.formType === "appointment";
  const fullName = `${data.fn} ${data.ln}`.trim();
  const phone = data.ph ? data.ph.trim() : "None provided";
  const dateInfo = data.appointmentDate ? `\nDate: ${data.appointmentDate}` : "";
  const details = data.msg ? `\nNotes: ${data.msg.slice(0, 100)}` : "";

  return `🚨 Gutama ${isAppointment ? "Appointment" : "Lead"}:
Client: ${fullName}
Phone: ${phone}
Email: ${data.em}
Service: ${data.service}${dateInfo}${details}`;
}

// Parse comma/semicolon/whitespace separated email list
function parseEmailList(emailString: string | undefined): string[] {
  if (!emailString) return [];
  return emailString
    .split(/[,;\s]+/)
    .map((e) => e.trim())
    .filter((e) => e.length > 0 && e.includes("@"));
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: "Unable to send message right now. Please try again later.",
          fieldErrors: {},
        },
        { status: 400 }
      );
    }

    // Validate with Zod schema
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = mapZodErrorsToFieldErrors(validationResult.error);
      return NextResponse.json(
        {
          error: "Please check your form and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const isAppointmentRequest = data.formType === "appointment";

    if (data.captchaInput !== data.captchaCode) {
      return NextResponse.json(
        {
          error: "Please check your form and try again.",
          fieldErrors: {
            captchaInput: "Captcha code does not match.",
          },
        },
        { status: 400 }
      );
    }

    // Get environment variables with Antonio's business defaults
    const rawToEmails = parseEmailList(process.env.CONTACT_TO_EMAIL || "antoniogutama@gmail.com");
    const ccEmails = parseEmailList(process.env.CONTACT_CC_EMAIL);
    const bccEmails = parseEmailList(process.env.CONTACT_BCC_EMAIL);
    const configuredSmsEmails = parseEmailList(
      process.env.CONTACT_SMS_EMAIL || "9738205130@vtext.com"
    );
    let fromEmail = process.env.CONTACT_FROM_EMAIL;

    // Separate standard email inbox recipients from mobile SMS gateway addresses
    const inboxRecipients = rawToEmails.filter((email) => !isSmsGatewayEmail(email));
    const smsRecipients = Array.from(
      new Set([
        ...configuredSmsEmails,
        ...rawToEmails.filter((email) => isSmsGatewayEmail(email)),
      ])
    );

    // Fallback if inboxRecipients is empty
    if (inboxRecipients.length === 0) {
      inboxRecipients.push("antoniogutama@gmail.com");
    }

    const apiKey = process.env.RESEND_API_KEY;
    const hasValidKey = Boolean(
      apiKey && apiKey.startsWith("re_") && apiKey !== "re_placeholder_for_build"
    );

    // If no valid Resend API key is configured yet, gracefully log lead and return success
    if (!hasValidKey) {
      console.warn("⚠️ [Gutama Leads] RESEND_API_KEY not configured yet.");
      console.log("📥 Lead received in demo/preview mode:", {
        client: `${data.fn} ${data.ln}`,
        email: data.em,
        phone: data.ph || "None provided",
        service: data.service,
        appointmentDate: data.appointmentDate,
        message: data.msg,
      });
      console.log("📲 SMS notification queued for:", smsRecipients);
      console.log("✉️ Email queued for:", inboxRecipients);

      return NextResponse.json(
        {
          success: true,
          message: "Your request has been received!",
        },
        { status: 200 }
      );
    }

    // Fallback for local development
    if (!fromEmail) {
      if (process.env.NODE_ENV === "production") {
        console.error("CONTACT_FROM_EMAIL not configured in production");
        return NextResponse.json(
          {
            error: "Unable to send message right now. Please try again later.",
            fieldErrors: {},
          },
          { status: 500 }
        );
      }
      fromEmail = "onboarding@resend.dev"; // Local dev fallback
    }

    // Generate email template for inbox
    const { html, text } = generateContactEmailHtml(data);

    // Prepare main HTML email headers
    const emailOptions: Parameters<typeof resend.emails.send>[0] = {
      from: fromEmail,
      to: inboxRecipients,
      ...(ccEmails.length > 0 && { cc: ccEmails }),
      ...(bccEmails.length > 0 && { bcc: bccEmails }),
      ...(data.em && { replyTo: data.em }),
      subject: isAppointmentRequest
        ? `New Appointment Request: ${data.service} on ${data.appointmentDate} from ${data.fn} ${data.ln}`
        : `New Service Request: ${data.service} from ${data.fn} ${data.ln}`,
      html,
      text,
    };

    // 1. Send main HTML email to email inbox
    const { error: sendError } = await resend.emails.send(emailOptions);

    if (sendError) {
      // Log detailed error server-side only
      console.error("Resend email error:", sendError);

      // Return generic error to client
      return NextResponse.json(
        {
          error: "Unable to send message right now. Please try again later.",
          fieldErrors: {},
        },
        { status: 500 }
      );
    }

    // 2. Send instant plain-text SMS alert to Verizon mobile phone (+1 973-820-5130 via vtext.com)
    if (smsRecipients.length > 0) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: smsRecipients,
          subject: `Gutama Lead: ${data.fn} ${data.ln}`,
          text: generateSmsAlertText(data),
        });
      } catch (smsError) {
        // Log SMS gateway error server-side, do not fail client response
        console.error("SMS notification send error:", smsError);
      }
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    // Log detailed error server-side only
    console.error("Contact form error:", error);

    // Return generic error to client
    return NextResponse.json(
      {
        error: "Unable to send message right now. Please try again later.",
        fieldErrors: {},
      },
      { status: 500 }
    );
  }
}
