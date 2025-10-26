import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // TODO: Set up email service integration
    // For now, we'll just return success
    // Later: Use Resend, SendGrid, or Replit Mail to send emails
    
    console.log("Contact form submission:", { name, email, phone, message });

    // Placeholder - replace with actual email sending logic
    // Example with Resend/SendGrid:
    // await sendEmail({
    //   to: 'leekshotit@gmail.com',
    //   subject: `New Contact Form: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
