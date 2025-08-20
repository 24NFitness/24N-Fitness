'use client';

import { useState, useEffect } from 'react';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gymConfig } from '@/lib/gym-config';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';


export default function TestimonialsPage() {

  
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
    <div className="min-h-screen bg-white section-container">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white relative overflow-hidden section-container">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="content-width container-padding">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20 scale-in">
              <span className="caption-lg text-white">Success Stories</span>
            </div>
            
            <h1 className="display-lg text-white mb-6 fade-in-up">
              Success Stories
            </h1>
            <p className="body-lg text-gray-300 max-w-2xl mx-auto fade-in-up">
              Real transformations from real people. See how {gymConfig.displayName} members have 
              changed their lives through fitness, community, and expert coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials Component */}
      <Testimonials />  

      {/* Stats Section */}
      <section className="section-padding bg-black text-white section-container">
        <div className="content-width container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 fade-in-up">
              The Numbers Don't Lie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 slide-in-left">
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold mb-4">{gymConfig.stats.members}</div>
              <div className="text-gray-300">Happy Members</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold mb-4">{gymConfig.stats.rating}</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold mb-4">{gymConfig.stats.successRate}</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold mb-4">{gymConfig.stats.yearsOfExperience}</div>
              <div className="text-gray-300">{gymConfig.stats.experience}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white relative overflow-hidden section-container">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-5"></div>
        </div>
        
        <div className="content-width container-padding">
          <div className="text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20 scale-in">
              <Star className="w-5 h-5 text-yellow-400 mr-3" />
              <span className="caption-lg text-white">Join Our Success Stories</span>
            </div>
            
            <h2 className="display-lg text-white mb-8 fade-in-up">
              Ready to Write Your Success Story?
            </h2>
            <p className="body-xl text-gray-300 mb-12 max-w-3xl mx-auto fade-in-up">
              Join over {gymConfig.stats.members.replace('+', '')} members who have transformed their lives at {gymConfig.name}. 
              Your transformation journey starts with a single step – and we're here to guide you every step of the way.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto slide-in-left">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-on-scroll">
                <div className="display-sm text-white mb-2">{gymConfig.stats.members}</div>
                <div className="body-md text-gray-300">Success Stories</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-on-scroll">
                <div className="display-sm text-white mb-2">{gymConfig.stats.rating}</div>
                <div className="body-md text-gray-300">Average Rating</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-on-scroll">
                <div className="display-sm text-white mb-2">{gymConfig.stats.successRate}</div>
                <div className="body-md text-gray-300">Success Rate</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 fade-in-up">
              <Link href="/join" className="inline-block">
                <Button variant="primary" size="default" className="min-w-[200px]">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" className="inline-block">
                <Button variant="secondary" size="default" className="min-w-[200px]">
                  View Services
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 fade-in-up">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No joining fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>7-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}