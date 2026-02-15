"use server";

import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

if (!process.env.CONTACT_FROM_EMAIL) {
  throw new Error("Missing CONTACT_FROM_EMAIL environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Prevent HTML injection
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  try {
    await resend.emails.send({
      from: "LumaRose Wellness <no-reply@lumarosewellness.com>",
      to: process.env.CONTACT_FROM_EMAIL!,
      replyTo: email,
      subject: `New Inquiry From: ${safeName}`,
      html: `
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8; padding:20px 0; font-family:Arial, sans-serif;">
            <tr>
              <td align="center">

                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;">
                  
                  <!-- Navbar Header -->
                  <tr>
                    <td style="padding:20px 30px; border-bottom:1px solid #eeeeee;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          
                          <td align="left" valign="middle" width="60">
                            <img 
                              src="https://lumarosewellness.com/images/logo.png" 
                              alt="LumaRose Health & Wellness" 
                              width="45" 
                              style="display:block; border:0; outline:none; text-decoration:none;"
                            />
                          </td>

                          <td align="left" valign="middle" style="font-size:18px; font-weight:bold;">
                            LumaRose <span style="color:#94526E">Health &amp; Wellness</span>
                          </td>

                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding:30px 30px 10px 30px;">
                      <h2 style="margin:0; color:#94526E; font-size:20px;">
                        New Website Inquiry
                      </h2>
                    </td>
                  </tr>

                  <!-- Intro -->
                  <tr>
                    <td style="padding:0 30px 20px 30px; font-size:14px; color:#555555;">
                      You received a new contact form submission:
                    </td>
                  </tr>

                  <!-- Content Box -->
                  <tr>
                    <td style="padding:0 30px 30px 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9f9f9; border:1px solid #eeeeee;">
                        <tr>
                          <td style="padding:20px; font-size:14px; color:#333333;">

                            <p style="margin:0 0 10px 0;">
                              <strong>Name:</strong> ${safeName}
                            </p>

                            <p style="margin:0 0 10px 0;">
                              <strong>Email:</strong> ${safeEmail}
                            </p>

                            <p style="margin:15px 0 5px 0;">
                              <strong>Message:</strong>
                            </p>

                            <p style="margin:0; white-space:pre-line;">
                              ${safeMessage}
                            </p>

                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 30px; font-size:12px; color:#888888; border-top:1px solid #eeeeee;">
                      <p style="margin:0 0 5px 0;">
                        Reply directly to this email to respond to the client.
                      </p>
                      <p style="margin:0;">
                        This is an automated message from your website contact form.
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>
                `
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send message" };
  }
}
