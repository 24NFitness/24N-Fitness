import { Metadata } from 'next';
import { gymConfig } from '@/lib/gym-config';

export const metadata: Metadata = {
  title: `Class Schedule - ${gymConfig.name}`,
  description: `View our full class schedule including CrossFit, Olympic Weightlifting, Strength Training, and more at ${gymConfig.name}. Expert coaching for all levels.`,
  keywords: [
    'class schedule',
    'crossfit classes',
    'olympic weightlifting',
    'strength training',
    'mobility workshop',
    'team workouts',
    'fitness classes london',
    'gym classes ec2',
    ...gymConfig.seo.keywords
  ],
  openGraph: {
    title: `Class Schedule - ${gymConfig.name}`,
    description: `View our full class schedule including CrossFit, Olympic Weightlifting, Strength Training, and more at ${gymConfig.name}. Expert coaching for all levels.`,
    url: `${gymConfig.urls.website}/class-schedule`,
    siteName: gymConfig.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Class Schedule - ${gymConfig.name}`,
    description: `View our full class schedule including CrossFit, Olympic Weightlifting, Strength Training, and more at ${gymConfig.name}. Expert coaching for all levels.`,
  },
  alternates: {
    canonical: `${gymConfig.urls.website}/class-schedule`,
  },
};

export default function ClassScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
