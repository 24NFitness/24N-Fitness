'use client';

import { gymConfig } from '@/lib/gym-config';
import { Target, Users, Zap, Award, Heart, Clock } from 'lucide-react';
import Image from 'next/image';

const usps = [
  {
    icon: Target,
    title: 'Expert Coaching',
    description: 'Certified trainers with 10+ years of experience guide you through every workout with personalized attention and proper form correction.',
    color: 'from-blue-500  to-blue-600'
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Join a motivating community of like-minded individuals who celebrate your victories and support you through challenges.',
  },
  {
    icon: Zap,
    title: 'Proven Results',
    description: 'Our scientifically-backed training methodology has helped over 400 members achieve their fitness goals and transform their lives.',
  },
  {
    icon: Award,
    title: 'Premium Equipment',
    description: 'Train with state-of-the-art equipment in our modern facility, featuring the latest in fitness technology and safety standards.',
  },
  {
    icon: Heart,
    title: 'Holistic Approach',
    description: 'We focus on your complete wellness journey, combining fitness, nutrition guidance, and mental health support.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Train on your terms with extended hours, multiple class times, and open gym access that fits your busy lifestyle.',
  }
];

export default function USPSection() {
  return (
    <section className="section-padding bg-white section-container">
      <div className="content-width container-padding">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full mb-8 scale-in">
            <span className="caption-lg text-white">What Makes Us Different</span>
          </div>

          <h2 className="display-lg flex flex-wrap items-center justify-center gap-4 text-black mb-10 fade-in-up">
            Why Choose {gymConfig.name}
          </h2>

          <p className="body-xl text-gray-600 max-w-4xl mx-auto fade-in-up">
            We're not just another gym. We're a community dedicated to helping you achieve extraordinary results through proven methods and unwavering support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="group relative animate-on-scroll">
              <div className="bg-white border-2 border-gray-200 hover:border-gray-300 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">

                {/* Background effect on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-black hover:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <usp.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {usp.title}
                  </h3>

                  <p className="body-md text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {usp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}