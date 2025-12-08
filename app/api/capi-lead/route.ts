import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  ab_variant?: string;
}

interface CapiEventData {
  event_name: string;
  event_time: number;
  event_id: string;
  event_source_url: string;
  action_source: string;
  user_data: {
    em?: string[];
    ph?: string[];
    fn?: string[];
    ln?: string[];
    fbp?: string;
    fbc?: string;
    client_ip_address?: string;
    client_user_agent?: string;
  };
  custom_data?: {
    content_name?: string;
    content_category?: string;
    ab_variant?: string;
  };
}

function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

function normalizePhone(phone: string): string {
  // Remove all non-digit characters and add country code if missing
  const cleaned = phone.replace(/\D/g, '');
  // If it starts with 0, replace with +44 (UK)
  if (cleaned.startsWith('0')) {
    return '+44' + cleaned.substring(1);
  }
  // If it doesn't start with +, assume UK and add +44
  if (!cleaned.startsWith('44')) {
    return '+44' + cleaned;
  }
  return '+' + cleaned;
}

export async function POST(request: NextRequest) {
  try {
    const { first_name, last_name, email, phone, ab_variant }: FormData = await request.json();

    // Validate required fields
    if (!first_name || !last_name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      console.error('Missing Meta Pixel ID or Access Token in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Generate unique event ID for deduplication
    const eventId = crypto.randomUUID();

    // Extract Facebook cookies from request
    const cookies = request.cookies;
    const fbp = cookies.get('_fbp')?.value;
    const fbc = cookies.get('_fbc')?.value;

    // Get client IP and User Agent for better matching
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || '';
    const clientUserAgent = request.headers.get('user-agent') || '';

    // Prepare user data with hashed PII
    const userData: CapiEventData['user_data'] = {
      em: [hashData(email)],
      ph: [hashData(normalizePhone(phone))],
      fn: [hashData(first_name)],
      ln: [hashData(last_name)],
    };

    // Add Facebook cookies if available
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    // Add client info for better event matching
    if (clientIp) userData.client_ip_address = clientIp;
    if (clientUserAgent) userData.client_user_agent = clientUserAgent;

    // Prepare the event data
    const eventData: CapiEventData = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: request.headers.get('referer') || 'https://24nfitness.co.uk/apply',
      action_source: 'website',
      user_data: userData,
      custom_data: {
        content_name: 'Free Training Application',
        content_category: 'Lead Generation',
        ab_variant: ab_variant || 'unknown',
      },
    };

    // Send to Meta Conversion API (using latest stable API version)
    const capiUrl = `https://graph.facebook.com/v21.0/${pixelId}/events`;
    
    const capiPayload = {
      data: [eventData],
      access_token: accessToken,
    };

    const capiResponse = await fetch(capiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(capiPayload),
    });

    const capiResult = await capiResponse.json();

    if (!capiResponse.ok) {
      console.error('Meta CAPI Error:', capiResult);
      return NextResponse.json(
        { error: 'Failed to send conversion event', details: capiResult },
        { status: 500 }
      );
    }

    console.log('Meta CAPI Success:', capiResult);

    // Return success with event_id for client-side deduplication
    return NextResponse.json({
      success: true,
      event_id: eventId,
      capi_response: capiResult,
    });

  } catch (error) {
    console.error('CAPI Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}



