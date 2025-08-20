import { Metadata } from 'next';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `CrossFit Services & Classes | ${gymConfig.name} - Group Training & Personal Coaching`,
  description: `Discover our CrossFit services: Group Training, Personal Training, Open Gym & Olympic Weightlifting. Expert coaching for all fitness levels. From £49/month.`,
  openGraph: {
    title: `CrossFit Services & Classes | ${gymConfig.name}`,
    description: `Discover our CrossFit services: Group Training, Personal Training, Open Gym & Olympic Weightlifting.`,
    url: `${gymConfig.urls.website}/services`,
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}