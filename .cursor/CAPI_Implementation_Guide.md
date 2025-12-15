# Meta Conversion API (CAPI) Implementation Guide

This guide shows how to implement Meta Conversion API for form submissions with proper deduplication between server-side and client-side events.

## Overview

The implementation consists of:
1. **API Route** - Server-side CAPI event firing
2. **Form Component** - Calls CRM webhook + CAPI route
3. **Thank You Page** - Fires client-side Pixel event with deduplication

## Files Structure

```
app/
├── api/
│   └── capi-lead/
│       └── route.ts          # CAPI API route
├── apply/
│   └── thank-you/
│       └── page.tsx          # Thank you page with Pixel event
components/
└── ApplyForm.tsx             # Form component
.env.local                    # Environment variables
```

## Implementation Steps

### 1. Environment Variables

Add to your `.env.local`:

```bash
# Meta Conversion API Configuration
META_PIXEL_ID=your_pixel_id_here
META_ACCESS_TOKEN=your_access_token_here
```

**How to get these:**
- **Pixel ID**: Meta Events Manager → Your Pixel → Settings
- **Access Token**: Meta Business Manager → System Users → Create token with `ads_management` permission

### 2. API Route (`app/api/capi-lead/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
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
  };
}

function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

function normalizePhone(phone: string): string {
  // Remove all non-digit characters and add country code if missing
  const cleaned = phone.replace(/\D/g, '');
  // If it starts with 0, replace with +44 (UK) - ADJUST FOR YOUR COUNTRY
  if (cleaned.startsWith('0')) {
    return '+44' + cleaned.substring(1);
  }
  // If it doesn't start with +, assume UK and add +44 - ADJUST FOR YOUR COUNTRY
  if (!cleaned.startsWith('44')) {
    return '+44' + cleaned;
  }
  return '+' + cleaned;
}

export async function POST(request: NextRequest) {
  try {
    const { first_name, last_name, email, phone }: FormData = await request.json();

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

    // Get client IP and User Agent for better matching
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || '';
    const clientUserAgent = request.headers.get('user-agent') || '';

    // Extract Facebook cookies from request
    const cookies = request.cookies;
    const fbp = cookies.get('_fbp')?.value;
    const fbc = cookies.get('_fbc')?.value;

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
      event_name: 'Lead', // CHANGE THIS FOR DIFFERENT EVENTS
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: request.headers.get('referer') || 'https://yourdomain.com', // CHANGE DOMAIN
      action_source: 'website',
      user_data: userData,
      custom_data: {
        content_name: 'Lead Form Submission', // CUSTOMIZE THIS
        content_category: 'Lead Generation',   // CUSTOMIZE THIS
      },
    };

    // Send to Meta Conversion API
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
```

### 3. Form Component Pattern

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // First, send to CRM webhook (REPLACE WITH YOUR CRM URL)
    const crmResponse = await fetch('YOUR_CRM_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone
      })
    });

    if (!crmResponse.ok) {
      console.error('CRM submission failed:', crmResponse.statusText);
      alert('There was an error submitting your form. Please try again.');
      return;
    }

    console.log('CRM submission successful');

    // Then, send to Meta Conversion API
    try {
      const capiResponse = await fetch('/api/capi-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone
        })
      });

      const capiResult = await capiResponse.json();
      
        if (capiResponse.ok) {
          console.log('CAPI submission successful:', capiResult);
          // CAPI-only tracking - no need to store event_id for deduplication
        } else {
        console.error('CAPI submission failed:', capiResult);
        // Don't block the user flow if CAPI fails
      }
    } catch (capiError) {
      console.error('CAPI request error:', capiError);
      // Don't block the user flow if CAPI fails
    }

    // Success - proceed to thank you page
    setIsSubmitted(true);
    router.push('/thank-you'); // CHANGE TO YOUR THANK YOU PAGE

  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error submitting your form. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4. Thank You Page Pattern (CAPI-Only Recommended)

```typescript
useEffect(() => {
  // CAPI-only approach: Clean up sessionStorage
  // No Pixel Lead event needed - CAPI already captured it server-side
  sessionStorage.removeItem('capi_event_id');
  
  // Optional: Fire other Pixel events (PageView, etc.) but not Lead
  // if (typeof window !== 'undefined' && (window as any).fbq) {
  //   (window as any).fbq('track', 'PageView');
  // }
}, []);
```

**Why CAPI-Only for Lead Events?**
- ✅ Only counts successful form submissions
- ✅ Ad-blocker proof (server-side tracking)
- ✅ No duplicate events or deduplication complexity
- ✅ More reliable attribution

## Customization Points

### For Different Projects:

1. **Event Type**: Change `'Lead'` to `'Purchase'`, `'CompleteRegistration'`, etc.
2. **Phone Normalization**: Update country code logic in `normalizePhone()`
3. **Domain**: Update `event_source_url` fallback domain
4. **Custom Data**: Modify `content_name` and `content_category`
5. **CRM Webhook**: Replace with your CRM endpoint
6. **Thank You Page**: Update redirect path

### For Different Event Types:

```typescript
// Purchase Event
event_name: 'Purchase',
custom_data: {
  content_name: 'Product Purchase',
  content_category: 'ecommerce',
  value: 99.99,
  currency: 'USD'
}

// Registration Event
event_name: 'CompleteRegistration',
custom_data: {
  content_name: 'User Registration',
  content_category: 'registration'
}
```

## Testing & Verification

### 1. Browser Console Logs
Look for:
- `CRM submission successful`
- `CAPI submission successful: { success: true, event_id: "..." }`

### 2. Meta Events Manager
- Go to Events Manager → Your Pixel → Test Events
- Submit a test form
- Check for events from both "Browser" and "Server"
- Deduplication rate should be ~50%

### 3. Common Issues

| Issue | Solution |
|-------|----------|
| `action_source` missing | Ensure it's set to `'website'` |
| Events not deduplicating | Check `event_id` is same for both events |
| CAPI events rejected | Verify access token has `ads_management` permission |
| Phone format errors | Update `normalizePhone()` for your country |

## Security Notes

- PII data is automatically hashed with SHA-256
- Access tokens should be System User tokens (not personal)
- Never expose access tokens in client-side code
- Use environment variables for sensitive data

## Performance Notes

- CAPI calls don't block user flow (errors are logged but don't stop form submission)
- CRM webhook is called first (business critical)
- CAPI is called second (tracking/analytics)
- **CAPI-only approach**: No client-side Lead events needed

## CAPI-Only vs Dual Tracking

### CAPI-Only (Recommended)
- ✅ Only successful form submissions counted
- ✅ Ad-blocker proof
- ✅ Simpler implementation
- ✅ No deduplication complexity

### Dual Tracking (CAPI + Pixel)
- ✅ Redundancy if CAPI fails
- ✅ Better ML signals for Meta
- ❌ More complex deduplication
- ❌ Potential duplicate events

---

This implementation provides robust server-side conversion tracking that's ad-blocker proof and only counts genuine form submissions.
