import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Resend API Key is missing' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, company, message } = await req.json();

    const data = await resend.emails.send({
      from: 'NexusNao Contact <onboarding@resend.dev>',
      to: ['nexusnaopk@gmail.com'],
      replyTo: email, // Allow replying directly to the sender
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB;">New Contact Message</h2>
          <p>You have received a new inquiry from the NexusNao website.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            
            <div style="margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e5e7eb;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    // Attempt to send Auto-Reply to the visitor
    try {
      await resend.emails.send({
        from: 'NexusNao Team <onboarding@resend.dev>',
        to: [email],
        subject: 'We received your message!',
        html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #2563EB;">Thanks for contacting NexusNao!</h2>
                        <p>Hi ${name},</p>
                        <p>We've received your message and will get back to you as soon as possible.</p>
                        <p>Best regards,<br>The NexusNao Team</p>
                    </div>
                `,
      });
    } catch (autoReplyError) {
      console.error("Auto-reply failed (requires verified domain in Resend):", autoReplyError);
      // We don't block the success response if auto-reply fails
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
