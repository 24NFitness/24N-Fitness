import { Metadata } from 'next';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `Success Stories & Reviews | ${gymConfig.name} - Real Member Transformations`,
  description: `Read inspiring success stories from ${gymConfig.name} members. Real transformations, weight loss, strength gains, and life changes. 4.9/5 rating from 400+ members.`,
  openGraph: {
    title: `Success Stories & Reviews | ${gymConfig.name}`,
    description: `Read inspiring success stories from ${gymConfig.name} members. Real transformations, weight loss, strength gains.`,
    url: `${gymConfig.urls.website}/testimonials`,
  },
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}