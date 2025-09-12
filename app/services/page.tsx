'use client';

import { Users, Zap, Target, Dumbbell, Heart, CheckCircle, ArrowRight, Calendar, CreditCard, Trophy, Flame, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gymConfig } from '@/lib/gym-config';


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

// Icon mapping for different membership types
const getMembershipIcon = (membershipName: string, type: string) => {
  const iconMap: { [key: string]: any } = {
    // Health Club
    'Monthly Membership': Calendar,
    'Annual Membership': Star,
    // CrossFit
    '12 Month Membership': Trophy,
    'Monthly Rolling': Flame,
    'Annual Membership_crossfit': Target,
    // Class Packs
    'Day Pass': Clock,
    '10 Classes': CreditCard,
    '20 Classes': Zap,
  };

  const key = type === 'crossfit' && membershipName === 'Annual Membership'
    ? 'Annual Membership_crossfit'
    : membershipName;

  return iconMap[key] || Dumbbell;
};

export default function ProgramsPage() {

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
              Memberships
            </h1>
            <p className="body-lg text-gray-300 max-w-2xl mx-auto fade-in-up">
              View our full list of memberships from the Health Club, CrossFit and Class Packs.
              Choose the perfect membership option designed to meet your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="section-padding bg-white section-container">
        <div className="content-width container-padding">
          {/* Health Club Memberships */}
          <div className="mb-20">
            <div className="text-center mb-12 fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-6 py-3 rounded-full mb-6">
                <Dumbbell className="w-5 h-5 mr-2" />
                <span className="font-semibold">Health Club</span>
              </div>
              <h2 className="display-md text-black mb-6">Health Club Memberships</h2>
              <p className="body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our facility is home to a range of premium BLK BOX, Spirit and Concept 2 equipment. 24N Fitness houses all the facilities to diversify your workouts. From yoga to free weights, the gym floor provides customers with a sleek, modern training space. Included in the Health Club membership is unlimited access to gym floor, mind and body studio, including all classes, changing facilities, sauna and ice bath.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 slide-in-left">
              {gymConfig.memberships.filter(m => m.type === 'health-club').map((membership, index) => {
                const IconComponent = getMembershipIcon(membership.name, membership.type);

                return (
                  <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-on-scroll">
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {membership.name}
                        </h3>
                      </div>

                      {/* CTA Button */}
                      <Link href={membership.link} target="_blank">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 transform hover:scale-105">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CrossFit Memberships */}
          <div className="mb-20">
            <div className="text-center mb-12 fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-red-50 text-red-800 px-6 py-3 rounded-full mb-6">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-semibold">CrossFit</span>
              </div>
              <h2 className="display-md text-black mb-6">CrossFit Memberships</h2>
              <p className="body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Liverpool Street CrossFit, owned and housed by 24N Fitness, sits below the Health Club. The CrossFit box is unlike anything of its kind, merging CrossFit with high end luxury fitness. In this remarkable space sits a full, custom built BLK BOX rig, accompanied by ceiling mounted gymnastic rings, a full range of free weights and much more. The Liverpool Street CrossFit memberships provide access to all areas in the 24N Fitness Health Club, as well as, unlimited CrossFit classes and open gym in the CrossFit space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-right">
              {gymConfig.memberships.filter(m => m.type === 'crossfit').map((membership, index) => {
                const IconComponent = getMembershipIcon(membership.name, membership.type);

                return (
                  <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-on-scroll">
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {membership.name}
                        </h3>
                      </div>

                      {/* CTA Button */}
                      <Link href={membership.link} target="_blank">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 transform hover:scale-105">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Class Packs */}
          <div className="mb-20">
            <div className="text-center mb-12 fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-6 py-3 rounded-full mb-6">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Class Packs</span>
              </div>
              <h2 className="display-md text-black mb-6">Class Packs</h2>
              <p className="body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Liverpool Street CrossFit, owned and housed by 24N Fitness, sits below the Health Club. The CrossFit box is unlike anything of its kind, merging CrossFit with high end luxury fitness. In this remarkable space sits a full, custom built BLK BOX rig, accompanied by ceiling mounted gymnastic rings, a full range of free weights and much more. The Liverpool Street CrossFit memberships provide access to all areas in the 24N Fitness Health Club, as well as, unlimited CrossFit classes and open gym in the CrossFit space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-left">
              {gymConfig.memberships.filter(m => m.type === 'class-pack').map((membership, index) => {
                const IconComponent = getMembershipIcon(membership.name, membership.type);

                return (
                  <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-on-scroll">
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {membership.name}
                        </h3>
                        <div className="text-3xl font-bold text-black mb-2">{membership.price}</div>
                      </div>

                      {/* CTA Button */}
                      <Link href={membership.link} target="_blank">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 transform hover:scale-105">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8 Weeks Transformation Program */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 section-container">
        <div className="content-width container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="display-lg text-white mb-8">
                JOIN OUR 8 WEEKS{' '}
                <span className="bg-gradient-to-r from-[#5c7893] to-[#e6e6e6] bg-clip-text text-transparent">
                  TRANSFORMATION
                </span>{' '}
                PROGRAM
              </h2>

              {gymConfig.memberships.filter(m => m.type === 'transformation').map((program, index) => (
                <div key={index} className="slide-in-up">
                  <p className="body-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    {program.description}
                  </p>

                  {/* CTA */}
                  <div className="text-center">
                    <Link href={program.link} target="_blank">
                      <Button className="text-xl px-12 py-4 bg-[#5c7893]">
                        SIGN UP NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
              You're joining a comprehensive fitness ecosystem with premium facilities and expert support.
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
            Ready to start your fitness journey?
          </p>
          <Link href="/join">
            <Button variant="outline" size="lg" className="fade-in-up">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}