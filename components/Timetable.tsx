'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';
import Image from 'next/image';

export default function Timetable() {
  // For single location, remove timetable functionality entirely or add a placeholder
  // Since 24N doesn't have a timetable URL in the knowledge base, we'll create a simple placeholder

  return (
    <section id="timetable" className="section-padding bg-black relative overflow-hidden section-container">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/hero-image.webp"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      <div className="content-width container-padding relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 mb-8 rounded-full border border-white/20 scale-in">
            <Calendar className="w-5 h-5 text-white mr-3" />
            <span className="caption-lg text-white">Class Schedule</span>
          </div>
          <h2 className="display-lg text-white mb-8 fade-in-up">
            Your Training Schedule
          </h2>
          <p className="body-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
            Book your training sessions and join our high-performance community.
          </p>
        </div>

        {/* Schedule Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 p-6 border-b border-white/10">
            <div className="text-center">
              <h3 className="display-sm text-white mb-2">
                Ready to Start Training?
              </h3>
              <p className="body-md text-gray-300">
                Book your consultation to discuss your goals and get started
              </p>
            </div>
          </div>
          
          {/* Booking section */}
          <div className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="body-lg text-white mb-8">
                Our expert coaches will work with you to create a personalized training plan that fits your schedule and goals.
              </p>
              <a
                href={gymConfig.urls.consultation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg group"
              >
                Book Your Consultation
                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="mt-16 fade-in-up">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="heading-xl text-white mb-2">No Joining Fees</h3>
                  <p className="body-md text-gray-300">Start your fitness journey without upfront costs</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="heading-xl text-white mb-2">No Cancellation Fees</h3>
                  <p className="body-md text-gray-300">Flexible membership with no hidden charges</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="body-xl text-white">
                  {gymConfig.mission.statement}
                </p>
                <p className="body-lg text-gray-300">
                  No complicated contracts. No hidden fees. Just results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}