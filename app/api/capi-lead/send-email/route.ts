import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { first_name, last_name, email, phone } = body;

    await resend.emails.send({
      from: 'Website Enquiry <onboarding@resend.dev>',
      to: 'info@24nfitness.com',
      subject: 'New Website Enquiry',
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}