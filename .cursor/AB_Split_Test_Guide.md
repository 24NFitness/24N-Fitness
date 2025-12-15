# A/B Split Test Implementation Guide

Quick reference for implementing A/B split tests with Meta Pixel tracking in Next.js App Router.

## File Structure

```
middleware.ts              ← A/B routing (in project root)
/app/page-name/
├── page.tsx               ← Fallback (returns null)
├── a/
│   └── page.tsx           ← Variant A
└── b/
    └── page.tsx           ← Variant B
```

## 1. Middleware (`middleware.ts` in project root)

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only handle /page-name route
  if (request.nextUrl.pathname === '/page-name') {
    const existingVariant = request.cookies.get('ab-variant')?.value;

    // If user already has a variant, redirect to it
    if (existingVariant === 'a' || existingVariant === 'b') {
      return NextResponse.redirect(new URL(`/page-name/${existingVariant}`, request.url));
    }

    // Randomly assign variant A or B
    const variant = Math.random() < 0.5 ? 'a' : 'b';

    // Create redirect response
    const response = NextResponse.redirect(new URL(`/page-name/${variant}`, request.url));

    // Set cookie for future visits
    response.cookies.set('ab-variant', variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/page-name'
};
```

## 1b. Fallback Page (`/page-name/page.tsx`)

```typescript
// A/B routing is handled by middleware.ts
export default function PageRouter() {
  return null;
}
```

## 2. Variant Pages (`/page-name/a/page.tsx` & `/page-name/b/page.tsx`)

```typescript
'use client';

import { useEffect } from 'react';

export default function VariantA() { // or VariantB
  useEffect(() => {
    // Fire Meta Pixel custom event for variant tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'PageName_LP_A_View'); // Change A to B for variant B
    }

    // Your existing page logic...
  }, []);

  return (
    // Your page content - duplicate and modify as needed
  );
}
```

## 3. Form Component Updates

### Add Cookie Helper:
```typescript
// Helper function to get cookie value
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};
```

### Update Form Submission:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  // Get A/B variant from cookie for tracking
  const abVariant = getCookie('ab-variant') || 'unknown';

  // CRM webhook - include variant
  const crmResponse = await fetch('YOUR_CRM_WEBHOOK', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // ... your form fields
      ab_variant: abVariant // Track which variant the lead came from
    })
  });

  // CAPI call - include variant
  const capiResponse = await fetch('/api/capi-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // ... your form fields
      ab_variant: abVariant // Track which variant the lead came from
    })
  });

  // CAPI-only tracking - no need to store event_id
  // Lead events only fire from server-side for accuracy
};
```

## 4. CAPI Route Updates (`/api/capi-lead/route.ts`)

### Update Interfaces:
```typescript
interface FormData {
  // ... existing fields
  ab_variant?: string;
}

interface CapiEventData {
  // ... existing fields
  custom_data?: {
    content_name?: string;
    content_category?: string;
    ab_variant?: string; // Add this
  };
}
```

### Update Handler:
```typescript
export async function POST(request: NextRequest) {
  const { /* existing fields */, ab_variant }: FormData = await request.json();

  const eventData: CapiEventData = {
    // ... existing fields
    custom_data: {
      content_name: 'Your Content Name',
      content_category: 'Lead Generation',
      ab_variant: ab_variant || 'unknown', // Add this
    },
  };
  
  // ... rest of handler
}
```

## 5. Thank You Page Updates (CAPI-Only)

```typescript
useEffect(() => {
  // Clean up sessionStorage (CAPI-only tracking, no Pixel Lead event needed)
  // Only CAPI fires Lead events - more accurate, ad-blocker proof
  sessionStorage.removeItem('capi_event_id');
  sessionStorage.removeItem('ab_variant');
}, []);
```

**Why CAPI-Only?**
- ✅ Only counts successful form submissions
- ✅ Ad-blocker proof (server-side)
- ✅ No duplicate events
- ✅ Cleaner implementation

## Customization Checklist

- [ ] Replace `page-name` with your actual page name in middleware matcher
- [ ] Update Meta Pixel event names (`PageName_LP_A_View`, `PageName_LP_B_View`)
- [ ] Modify variant content (usually just hero section)
- [ ] Update CRM webhook URL
- [ ] Update CAPI `content_name` and `content_category`
- [ ] Test cookie assignment and persistence
- [ ] Add environment variables: `META_PIXEL_ID` and `META_ACCESS_TOKEN`

## Meta Events Manager Tracking

You'll see these events:
- `PageName_LP_A_View` - Variant A page views
- `PageName_LP_B_View` - Variant B page views  
- `Lead` with `ab_variant: "a"` or `ab_variant: "b"` - Conversions by variant

## Conversion Rate Calculation

```
Variant A Rate = (Lead events with ab_variant="a") / (PageName_LP_A_View events)
Variant B Rate = (Lead events with ab_variant="b") / (PageName_LP_B_View events)
```
