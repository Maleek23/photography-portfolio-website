import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, sessionType, packageTier, preferredDate, message } = body;

    // TODO: Set up email service integration
    // For now, we'll just log and return success
    
    console.log("Booking request:", { 
      name, 
      email, 
      phone, 
      sessionType, 
      packageTier, 
      preferredDate, 
      message 
    });

    // Placeholder - replace with actual email sending logic
    // Example email template:
    // await sendEmail({
    //   to: 'leekshotit@gmail.com',
    //   subject: `New Booking Request: ${sessionType} - ${packageTier}`,
    //   html: `
    //     <h2>New Photography Booking Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Session Type:</strong> ${sessionType}</p>
    //     <p><strong>Package:</strong> ${packageTier}</p>
    //     <p><strong>Preferred Date:</strong> ${preferredDate}</p>
    //     <p><strong>Additional Details:</strong><br>${message || 'None provided'}</p>
    //   `
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking request error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
