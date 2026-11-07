"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";
import { contactForm } from "@/lib/content";

/** Result of a contact form submission, shown under the form. */
export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Server Action: validates the contact form and emails it to the site owner via Resend. */
export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("company"))
    return { status: "success", message: contactForm.success };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message || !EMAIL_RE.test(email) || message.length > 5000) {
    return { status: "error", message: contactForm.invalid };
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: site.email,
    replyTo: email,
    subject: `Portfolio enquiry from ${name}`,
    text: `${message}\n\n— ${name} (${email})`,
  });

  if (error) {
    console.error("Resend error:", error);
    return { status: "error", message: contactForm.failed };
  }
  return { status: "success", message: contactForm.success };
}
