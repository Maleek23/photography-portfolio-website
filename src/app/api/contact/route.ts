import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log("Contact form submission:", { name, email, phone, message });

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Leekshotit Portfolio <onboarding@resend.dev>', // Update with your verified domain
          to: ['leekshotit@gmail.com'],
          replyTo: email,
          subject: `New Contact Form: ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563EB; border-bottom: 3px solid #2563EB; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              </div>
              <div style="margin: 20px 0;">
                <h3 style="color: #333;">Message:</h3>
                <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>This email was sent from your Leekshotit Photography portfolio contact form.</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
        // Continue even if email fails - form data is still logged
      }
    } else {
      console.warn("RESEND_API_KEY not configured - email not sent");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
