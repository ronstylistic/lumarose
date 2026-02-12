"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    await resend.emails.send({
      from: "LumaRose Wellness <no-reply@lumarosewellnes.com>",

      to: [`${process.env.CONTACT_FROM_EMAIL}`],

      replyTo: email,

      subject: `New Inquiry From: ${name}`,


      html: `
          <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
            
            <h2 style="color:#2c7a7b;">New Website Inquiry</h2>
            
            <p>You received a new contact form submission:</p>

            <div style="
              background:#f9f9f9;
              padding:20px;
              border-radius:8px;
              border:1px solid #eee;
            ">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>

              <p><strong>Message:</strong></p>
              <p style="white-space:pre-line;">${message}</p>
            </div>

            <br/>

            <p>
              Reply directly to this email to respond to the client.
            </p>

            <hr/>

            <small style="color:#888;">
              This is an automated message from your website contact form.
            </small>

          </div>`
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send message" };
  }
}
