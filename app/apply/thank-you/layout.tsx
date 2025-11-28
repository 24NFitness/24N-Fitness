import { Metadata } from 'next';
import Script from 'next/script';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `Application Submitted | ${gymConfig.name}`,
  description: `Thank you for applying to ${gymConfig.name}. We'll contact you within 10 minutes to discuss your application.`,
  openGraph: {
    title: `Application Submitted | ${gymConfig.name}`,
    description: `Thank you for applying to ${gymConfig.name}. We'll contact you within 10 minutes.`,
    url: `${gymConfig.urls.website}/apply/thank-you`,
  },
  alternates: {
    canonical: '/apply/thank-you',
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="meta-pixel-lead" strategy="afterInteractive">
        {`
          fbq('track', 'Lead');
        `}
      </Script>
      {children}
    </>
  );
}
