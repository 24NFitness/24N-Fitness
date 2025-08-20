import { Metadata } from 'next';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `About ${gymConfig.name} - Our Story & Team | Premium Gym`,
  description: `Learn about ${gymConfig.name}'s mission, values, and expert coaching team. Founded in 2018, we've helped 400+ members transform their lives through fitness.`,
  openGraph: {
    title: `About ${gymConfig.name} - Our Story & Team`,
    description: `Learn about ${gymConfig.name}'s mission, values, and expert coaching team.`,
    url: `${gymConfig.urls.website}/about`,
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}