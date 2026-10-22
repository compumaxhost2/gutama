import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, mapZodErrorsToFieldErrors } from "@/lib/contact-schema";
import { generateContactEmailHtml } from "@/lib/email-template";

// Initialize Resend safely (fallback to dummy key during build time if env var not set)
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build");

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

    // Get environment variables
    const toEmails = parseEmailList(process.env.CONTACT_TO_EMAIL);
    const ccEmails = parseEmailList(process.env.CONTACT_CC_EMAIL);
    const bccEmails = parseEmailList(process.env.CONTACT_BCC_EMAIL);
    let fromEmail = process.env.CONTACT_FROM_EMAIL;

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

    // Validate that we have at least one recipient
    if (toEmails.length === 0) {
      console.error("No CONTACT_TO_EMAIL recipients configured");
      return NextResponse.json(
        {
          error: "Unable to send message right now. Please try again later.",
          fieldErrors: {},
        },
        { status: 500 }
      );
    }

    // Generate email template
    const { html, text } = generateContactEmailHtml(data);

    // Prepare email headers
    const emailOptions: Parameters<typeof resend.emails.send>[0] = {
      from: fromEmail,
      to: toEmails,
      ...(ccEmails.length > 0 && { cc: ccEmails }),
      ...(bccEmails.length > 0 && { bcc: bccEmails }),
      ...(data.em && { replyTo: data.em }),
      subject: isAppointmentRequest
        ? `New Appointment Request: ${data.service} on ${data.appointmentDate} from ${data.fn} ${data.ln}`
        : `New Service Request: ${data.service} from ${data.fn} ${data.ln}`,
      html,
      text,
    };

    // Send email via Resend
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
