import { Metadata } from 'next';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `2-Week Trials - ${gymConfig.name}`,
  description: 'Experience premium fitness with our 2-week trials. Choose between Health Club (£69) or CrossFit (£99) access at 24N Fitness Liverpool Street.',
  keywords: [
    '24N fitness trial',
    'gym trial London',
    'CrossFit trial',
    'health club trial',
    'Liverpool Street gym',
    'fitness membership trial',
    'premium gym London',
    'BLK BOX equipment',
    'sauna ice bath London'
  ].join(', '),
  openGraph: {
    title: `2-Week Fitness Trials - ${gymConfig.name}`,
    description: 'Experience premium fitness with our 2-week trials. Health Club £69 or CrossFit £99. Premium equipment, luxury facilities, expert coaching.',
    url: `${gymConfig.urls.website}/landing`,
    siteName: gymConfig.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `2-Week Fitness Trials - ${gymConfig.name}`,
    description: 'Experience premium fitness with our 2-week trials. Health Club £69 or CrossFit £99.',
  },
  alternates: {
    canonical: '/landing',
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
