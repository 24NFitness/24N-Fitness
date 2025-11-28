'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ApplyForm from '@/components/ApplyForm';
import { gymConfig } from '@/lib/gym-config';

export default function ApplyPage() {
  useEffect(() => {
    // Optimized intersection observer for element-level animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Add stagger animation to child elements
          const staggerElements = entry.target.querySelectorAll('.animate-on-scroll');
          staggerElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('is-visible');
            }, index * 150);
          });
          
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .animate-on-scroll');
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="content-width container-padding">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center lg:flex-1">
              <Link
                href="/"
                className="flex items-center group"
              >
                <div className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={gymConfig.assets.logo}
                    alt={`${gymConfig.name} Logo`}
                    fill
                    className="object-contain drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 bg-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="content-width container-padding">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20 scale-in">
              <span className="caption-lg text-white">Apply Now</span>
            </div>
            
            <h1 className="display-sm text-white mb-6 fade-in-up">
              Apply for Free Training in 2026
            </h1>
            {/* <p className="body-lg text-gray-300 max-w-2xl mx-auto mb-6 fade-in-up">
              Only 10 spots available for busy Liverpool Street professionals. 
              Transform your health without the gym intimidation.
            </p> */}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section>
        <div className="content-width container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 scale-in">
              <ApplyForm 
                title="Submit Your Application"
                description="Fill out the form below and we'll contact you within 10 minutes to discuss your goals"
                buttonText="Submit Application"
                theme="dark"
                size="default"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
