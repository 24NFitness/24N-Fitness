import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only handle /beginners route - always redirect to version A
  if (request.nextUrl.pathname === '/beginners') {
    // Always redirect to version A
    return NextResponse.redirect(new URL('/beginners/a', request.url));

    /* OLD A/B TESTING LOGIC - COMMENTED OUT FOR FUTURE USE
    const existingVariant = request.cookies.get('ab-variant')?.value;

    // If user already has a variant, redirect to it
    if (existingVariant === 'a' || existingVariant === 'b') {
      return NextResponse.redirect(new URL(`/beginners/${existingVariant}`, request.url));
    }

    // Randomly assign variant A or B
    const variant = Math.random() < 0.5 ? 'a' : 'b';

    // Create redirect response
    const response = NextResponse.redirect(new URL(`/beginners/${variant}`, request.url));

    // Set cookie for future visits
    response.cookies.set('ab-variant', variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });

    return response;
    */
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/beginners'
};
