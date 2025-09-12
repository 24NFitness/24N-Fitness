'use client';

import Image from 'next/image';
import { Dumbbell } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';

export default function FacilitiesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 section-container">
      <div className="content-width container-padding">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 scale-in">
            <Dumbbell className="w-4 h-4 mr-2" />
            <span className="caption-lg text-white">World-Class Facilities</span>
          </div>
          
          <h2 className="display-lg text-white mb-10 fade-in-up">
            Everything You Need{' '}
            <span className="bg-gradient-to-r from-[#5c7893] to-[#e6e6e6] bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>
          
          <p className="body-xl text-gray-300 max-w-4xl mx-auto fade-in-up">
            Experience premium fitness facilities designed for every aspect of your wellness journey. From cutting-edge equipment to recovery amenities, we've created the ultimate training environment.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {gymConfig.facilities.map((facility, index) => (
            <div
              key={facility.name}
              className={`modern-card group cursor-pointer ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-t-xl">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="heading-xl text-white mb-2 group-hover:text-[#5c7893] transition-colors duration-300">
                    {facility.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="body-md text-gray-300 leading-relaxed">
                  {facility.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#5c7893] to-[#e6e6e6] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
