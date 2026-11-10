import { siteConfig } from "@/config/site";
import type { ContactFormInput, AppointmentFormInput } from "@/lib/contact-schema";

/**
 * Generates an elegant, beautifully structured WhatsApp message
 * that a customer sends to Antonio Gutama (+1 973-820-5130).
 */
export function generateContactWhatsAppMessage(data: ContactFormInput): string {
  const fullName = `${data.fn} ${data.ln}`.trim();
  const phone = data.ph ? data.ph.trim() : "Not provided";
  const email = data.em.trim();
  const service = data.service;
  const details = data.msg ? data.msg.trim() : "No additional details entered.";

  return [
    `🏠 *GUTAMA HOME IMPROVEMENT*`,
    `📋 *NEW ESTIMATE REQUEST*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👋 *Hello Antonio,*`,
    `I just filled out the estimate form on your website. Here are my project details:`,
    ``,
    `👤 *Name:* ${fullName}`,
    `📞 *Phone:* ${phone}`,
    `✉️ *Email:* ${email}`,
    `🔨 *Service:* ${service}`,
    ``,
    `📝 *Project Details:*`,
    `"${details}"`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📍 *Region:* Essex County, NJ`,
    `📸 _(I can send photos of my roof / exterior in this chat)_`,
  ].join("\n");
}

export function generateAppointmentWhatsAppMessage(data: AppointmentFormInput): string {
  const fullName = `${data.fn} ${data.ln}`.trim();
  const phone = data.ph ? data.ph.trim() : "Not provided";
  const email = data.em.trim();
  const service = data.service;
  const date = data.appointmentDate;
  const details = data.msg ? data.msg.trim() : "No additional notes entered.";

  return [
    `🏠 *GUTAMA HOME IMPROVEMENT*`,
    `📅 *ONLINE APPOINTMENT REQUEST*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👋 *Hello Antonio,*`,
    `I would like to schedule an on-site consultation for my property:`,
    ``,
    `👤 *Name:* ${fullName}`,
    `📅 *Preferred Date:* ${date}`,
    `📞 *Phone:* ${phone}`,
    `✉️ *Email:* ${email}`,
    `🔨 *Service Needed:* ${service}`,
    ``,
    `📝 *Project Notes:*`,
    `"${details}"`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📍 *Region:* Essex County, NJ`,
    `Please confirm if this date works for your team!`,
  ].join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.phones.whatsapp}?text=${encodeURIComponent(message)}`;
}

