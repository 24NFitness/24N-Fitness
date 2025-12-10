'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';

export default function ThankYouPage() {
  useEffect(() => {
    // Clean up sessionStorage (CAPI-only tracking, no Pixel Lead event needed)
    sessionStorage.removeItem('capi_event_id');
    sessionStorage.removeItem('ab_variant');

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

      {/* Thank You Section */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#00def5] rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#00def5] rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00def5] rounded-full blur-3xl"></div>
        </div>
        
        <div className="content-width container-padding w-full">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 border-2 border-green-500 rounded-full mb-8 scale-in">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up">
              Application Submitted!
            </h1>
            
            <div className="bg-gradient-to-r from-[#00def5]/10 to-[#0099b3]/10 border border-[#00def5]/20 rounded-2xl p-8 mb-8 fade-in-up">
              <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-medium">
                Thank you for applying for our free training program!
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Please book a meeting with one of our coaches below
              </p>
            </div>

            {/* Embedded Calendar */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 fade-in-up">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Book Your Consultation</h2>
                <p className="text-gray-600 text-center mt-2">Select a time that works for you</p>
              </div>
              <div className="h-[600px] w-full">
                <iframe
                  src={gymConfig.urls.consultation}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Book your consultation"
                  className="w-full h-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center fade-in-up">
              <p className="text-gray-400 mb-4">
                Questions while you wait? Contact us:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#00def5]">
                <a
                  href="https://www.instagram.com/24nfitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00b8cc] transition-colors duration-300 underline decoration-1 underline-offset-2"
                >
                  @24nfitness on Instagram
                </a>
                <span className="hidden sm:inline text-gray-500">|</span>
                <a
                  href="mailto:info@24nfitness.com"
                  className="hover:text-[#00b8cc] transition-colors duration-300 underline decoration-1 underline-offset-2"
                >
                  info@24nfitness.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
