'use client';

import { Clock, Users, Zap, Target, Dumbbell, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gymConfig } from '@/lib/gym-config';

const programIcons = [Dumbbell, Target, Zap, Heart];
const programFeatures = [
  [
    'Expert coaching and form correction',
    'Scalable workouts for all fitness levels',
    'Motivating group atmosphere',
    'Varied daily workouts (WODs)',
    'Progress tracking and benchmarks'
  ],
  [
    'Completely personalized programming',
    'Undivided attention from expert coaches',
    'Flexible scheduling',
    'Faster goal achievement',
    'Injury prevention and rehabilitation'
  ],
  [
    'Full access to premium equipment',
    'Flexible training times',
    'Perfect for skill practice',
    'Supplement your group classes',
    'Coach supervision available'
  ],
  [
    'Technical skill development',
    'Competition preparation',
    'Video analysis and feedback',
    'Progressive programming',
    'Small class sizes for attention'
  ]
];
// This will be moved inside the component where gymConfig is available
const getProgramSchedules = (gymConfig: any) => [
  'Mon-Sun: Multiple times daily',
  'By appointment',
  'Daily: Check timetable for times',
  'Tue, Thu, Sat: 7:00 PM'
];

const included = [
  {
    icon: Users,
    title: 'Expert Coaching',
    description: 'All our coaches are certified and experienced in helping you reach your goals safely and effectively.'
  },
  {
    icon: Heart,
    title: 'Supportive Community',
    description: 'Join a welcoming community that celebrates your victories and supports you through challenges.'
  },
  {
    icon: Target,
    title: 'Personalized Approach',
    description: 'Every workout can be scaled to your fitness level, ensuring you\'re always challenged appropriately.'
  },
  {
    icon: Zap,
    title: 'Nutrition Guidance',
    description: 'Access to nutrition coaching and meal planning to fuel your performance and recovery.'
  }
];

export default function ProgramsPage() {


  const programSchedules = getProgramSchedules(gymConfig);

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
              <Target className="w-5 h-5 text-white mr-3" />
              <span className="caption-lg text-white">Our Services</span>
            </div>

            <h1 className="display-lg text-white mb-6 fade-in-up">
              Find Your Perfect Program
            </h1>
            <p className="body-lg text-gray-300 max-w-2xl mx-auto fade-in-up">
              Choose from our comprehensive range of programs designed to meet you
              wherever you are in your fitness journey. As a CrossFit affiliate and HYROX official partner, 
              we deliver world-class training standards.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding bg-white section-container">
        <div className="content-width container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-left">
            {gymConfig.programs.slice(0, 3).map((program, index) => {
              const IconComponent = programIcons[index];
              return (
                <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-gray-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-on-scroll">

                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {program.name}
                    </h3>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {program.duration}
                      </span>
                      <span className="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {program.intensity}
                      </span>
                      <span className="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-medium">
                        Max {program.maxParticipants}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Key Features (Top 3) */}
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {programFeatures[index].slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Schedule */}
                    {/* <div className="mb-8 p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-black">{program.price}</span>
                      <span className="text-sm text-gray-500">Starting from</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{programSchedules[index]}</span>
                    </div>
                  </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-gray-50 section-container">
        <div className="content-width container-padding">
          <div className="text-center mb-16">
            <h2 className="display-lg text-black mb-8 fade-in-up">
              What's Included
            </h2>
            <p className="body-xl text-gray-600 max-w-3xl mx-auto fade-in-up">
              Every {gymConfig.displayName} membership includes more than just access to equipment.
              You're joining a comprehensive fitness ecosystem backed by our CrossFit affiliation 
              and HYROX partnership standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 slide-in-right">
            {included.map((item, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 scale-in">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-xl text-black mb-4">
                  {item.title}
                </h3>
                <p className="body-md text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* View All Programs Link */}
        <div className="text-center mt-24">
          <p className="text-gray-600 mb-4 fade-in-up">
            Want to learn more about our services?
          </p>
          <Link href="/join">
            <Button variant="outline" size="lg" className="fade-in-up">
              Find out more
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}