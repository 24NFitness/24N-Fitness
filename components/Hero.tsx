'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gymConfig } from '@/lib/gym-config';

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <Image
            src={gymConfig.assets.heroImage}
            alt="Fitness background"
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>
      
      <div className="relative z-20 text-center pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="display-2xl text-white hero-animate" style={{ '--animation-delay': '0s' } as React.CSSProperties}>
              Push Your{' '}
              <br />
              <span className="bg-gradient-to-r from-[#5c7893] to-[#e6e6e6] bg-clip-text text-transparent">
                Limits with Us
              </span>
            </h1>

            {/* Subheading */}
            <p className="body-xl text-gray-200 max-w-2xl mx-auto hero-animate" style={{ '--animation-delay': '0.1s' } as React.CSSProperties}>
            Gym Floor • Yoga Studio • CrossFit Box • Sauna • Ice Bath
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-animate" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
            <Link href="/join">
              <Button variant="primary" size="lg" className="min-w-[200px]">
                Find out more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            {/* <Link href="/class-schedule">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                Join Newsletter
              </Button>
            </Link> */}
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 hero-animate" style={{ '--animation-delay': '0.3s' } as React.CSSProperties}>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">
                {gymConfig.stats.rating} rating
              </span>
            </div>
            
            <div className="h-12 w-px bg-gray-600"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {gymConfig.stats.members}
              </div>
              <span className="text-sm text-gray-300">
                Active Members
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}