import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // In development, log the email instead of sending if no API key is provided
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.log('📧 Email would be sent (Development Mode):');
      console.log('From: Facite Synergy Contact Form <noreply@facitesynergy.com>');
      console.log('To:', process.env.CONTACT_EMAIL || 'Facitesynergy@gmail.com');
      console.log('Subject: New Contact Form Submission from', name);
      console.log('Content:', { name, email, phone, message });
      
      return NextResponse.json({ 
        message: 'Message received successfully! (Development mode - check console)' 
      });
    }

    // Send email using Resend (Production)
    const { error } = await resend.emails.send({
      from: 'Facite Synergy Contact Form <noreply@facitesynergy.com>', // Using your verified domain
      to: [process.env.CONTACT_EMAIL || 'Facitesynergy@gmail.com'], // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 14px; text-align: center;">
            This email was sent from your website's contact form.
          </p>
        </div>
      `,
      // Optional: Send a copy to the customer
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to customer
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await resend.emails.send({
        from: 'Facite Synergy <noreply@facitesynergy.com>',
        to: [email],
        subject: 'Thank you for contacting Facite Synergy',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #007bff;">Thank You for Contacting Us!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Facite Synergy. We have received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4>Your Message:</h4>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>Best regards,<br>The Facite Synergy Team</p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
