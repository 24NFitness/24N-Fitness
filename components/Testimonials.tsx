'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { gymConfig } from '@/lib/gym-config';

const testimonials = [
  {
    id: 1,
    name: 'SARAH',
    role: `${gymConfig.displayName} Member`,
    location: 'Lancaster',
    videoSrc: '/testimonials/Sarah.mp4',
    posterImage: '/testimonials/Sarah.png',
    quote: `${gymConfig.displayName} transformed my fitness journey completely.`,
  },
  {
    id: 2,
    name: 'RACHEL',
    role: `${gymConfig.displayName} Member`,
    location: 'Heysham',
    videoSrc: '/testimonials/Rachel.mp4',
    posterImage: '/testimonials/Rachel.png',
    quote: 'The community and coaching here is incredible.',
  },
  {
    id: 3,
    name: 'KRISTY',
    role: `${gymConfig.displayName} Member`,
    location: 'Lancaster',
    videoSrc: '/testimonials/Kristy.mp4',
    posterImage: '/testimonials/Kristy.png',
    quote: 'Best fitness decision I ever made.',
  },
  {
    id: 4,
    name: 'JULIE',
    role: `${gymConfig.displayName} Member`,
    location: 'Heysham',
    videoSrc: '/testimonials/Julie.mp4',
    posterImage: '/testimonials/Julie.png',
    quote: `${gymConfig.displayName} helped me achieve goals I never thought possible.`,
  },
  {
    id: 5,
    name: 'HANNAH',
    role: `${gymConfig.displayName} Member`,
    location: 'Lancaster',
    videoSrc: '/testimonials/Hannah.mp4',
    posterImage: '/testimonials/Hannah.png',
    quote: 'The atmosphere and results speak for themselves.',
  },
  {
    id: 6,
    name: 'DASA',
    role: `${gymConfig.displayName} Member`,
    location: 'Heysham',
    videoSrc: '/testimonials/Dasa.mp4',
    posterImage: '/testimonials/Dasa.png',
    quote: 'Life-changing experience with amazing coaches.',
  },
  {
    id: 7,
    name: 'AIDEN',
    role: `${gymConfig.displayName} Member`,
    location: 'Lancaster',
    videoSrc: '/testimonials/Aiden.mp4',
    posterImage: '/testimonials/aiden.png',
    quote: `${gymConfig.displayName} gave me the strength and confidence I needed.`,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Trigger stagger animations for testimonial cards
            const testimonialCards = entry.target.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('is-visible');
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.children[0]?.clientWidth || 0;
      const gap = 24; // 1.5rem gap
      container.scrollTo({
        left: index * (itemWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(prevIndex);
  };

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingVideo === index) {
      // Pause the current video
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
      }
      // Play the new video
      video.play();
      setPlayingVideo(index);
    }
  };

  const handleVideoEnded = (index: number) => {
    setPlayingVideo(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className={`section-padding bg-white section-container transition-all duration-1000 ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="content-width container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black px-6 py-3 rounded-full mb-6">
            <Quote className="w-5 h-5 text-white mr-3" aria-hidden="true" />
            <span className="text-white font-medium uppercase tracking-wide">What Our Members Say</span>
          </div>
          <h2 className="display-lg text-black mb-8 fade-in-up">
            Real Results from Real Members
          </h2>
        </div>

        {/* Video Testimonials Scroll */}
        <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 hover:border-black text-black hover:text-black w-12 h-12 backdrop-blur-sm transition-all duration-300 z-10 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 hover:border-black text-black hover:text-black w-12 h-12 backdrop-blur-sm transition-all duration-300 z-10 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </Button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-64 group cursor-pointer testimonial-card"
                onClick={() => scrollToIndex(index)}
              >
                {/* Video Container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                  {/* Poster Image - shows when video is not playing */}
                  {playingVideo !== index && (
                    <div className="relative w-full h-80">
                      <Image
                        src={testimonial.posterImage}
                        alt={`${testimonial.name} from ${testimonial.location}`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="256px"
                        priority={index < 3}
                      />
                    </div>
                  )}
                  
                  {/* Video - shows when playing */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={`w-full h-80 object-contain transition-transform duration-500 group-hover:scale-105 ${
                      playingVideo === index ? 'block' : 'hidden'
                    }`}
                    preload="metadata"
                    playsInline
                    muted={playingVideo !== index}
                    onEnded={() => handleVideoEnded(index)}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVideo(index);
                    }}
                    aria-label={`Video testimonial from ${testimonial.name}`}
                  >
                    <source src={testimonial.videoSrc} type="video/mp4" />
                    <track kind="captions" label="English captions" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play/Pause Button Overlay */}
                  {playingVideo !== index && (
                    <div 
                      className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVideo(index);
                      }}
                    >
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Pause Button for Playing Video */}
                  {playingVideo === index && (
                    <div 
                      className="absolute top-4 right-4 bg-black/60 rounded-full p-2 cursor-pointer hover:bg-black/80 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVideo(index);
                      }}
                    >
                      <Pause className="w-5 h-5 text-white" />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="heading-lg text-black mb-2">
                    {testimonial.name}
                  </h3>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}