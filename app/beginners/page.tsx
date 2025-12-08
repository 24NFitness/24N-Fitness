import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function BeginnersRouter() {
  const cookieStore = await cookies();
  const existingVariant = cookieStore.get('ab-variant')?.value;

  // If user already has a variant assigned, redirect to it
  if (existingVariant === 'a' || existingVariant === 'b') {
    redirect(`/beginners/${existingVariant}`);
  }

  // Randomly assign variant A or B
  const variant = Math.random() < 0.5 ? 'a' : 'b';
  
  // Set cookie for future visits
  cookieStore.set('ab-variant', variant, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: false, // Allow client-side access if needed
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });
  
  // Redirect to the assigned variant
  redirect(`/beginners/${variant}`);
}
