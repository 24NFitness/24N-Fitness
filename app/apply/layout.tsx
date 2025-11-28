import { Metadata } from 'next';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `Apply to ${gymConfig.name} | Free Training for Professionals`,
  description: `Apply for free training at ${gymConfig.name}. Only 10 spots available for busy Liverpool Street professionals. Transform your health in 2026.`,
  openGraph: {
    title: `Apply to ${gymConfig.name} | Free Training for Professionals`,
    description: `Apply for free training at ${gymConfig.name}. Only 10 spots available for busy Liverpool Street professionals.`,
    url: `${gymConfig.urls.website}/apply`,
  },
  alternates: {
    canonical: '/apply',
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
