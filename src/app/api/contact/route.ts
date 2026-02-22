import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 200) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (phone && (typeof phone !== "string" || phone.length > 30)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 5000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Sanitize inputs for email HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = phone ? escapeHtml(phone.trim()) : "Not provided";
    const safeMessage = escapeHtml(message.trim());

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Leekshotit Portfolio <onboarding@resend.dev>',
          to: ['leekshotit@gmail.com'],
          replyTo: email.trim(),
          subject: `New Contact Form: ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563EB; border-bottom: 3px solid #2563EB; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                <p style="margin: 10px 0;"><strong>Phone:</strong> ${safePhone}</p>
              </div>
              <div style="margin: 20px 0;">
                <h3 style="color: #333;">Message:</h3>
                <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>This email was sent from your Leekshotit Photography portfolio contact form.</p>
              </div>
            </div>
          `,
        });
      } catch {
        // Continue even if email fails - form data is still logged
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
