'use client';

import { useState, useEffect } from 'react';
import { Target, Users, Heart, Award, Zap, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gymConfig } from '@/lib/gym-config';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {


  // Build image path from gym-config's member.image if provided, otherwise fallback to Michael D
  const getCoachImageSrc = (member: { image?: string }) => {
    const fileBase = member.image && member.image.trim() ? member.image.trim() : '';
    return `/coaches/${fileBase}.webp`;
  };

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
    <div className="min-h-screen bg-white">
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
              <span className="caption-lg text-white">Our Story</span>
            </div>

            <h1 className="display-lg flex flex-wrap justify-center items-center gap-4 text-white mb-6 fade-in-up">
              About  {gymConfig.name}
            </h1>
            <p className="body-lg text-gray-300 max-w-2xl mx-auto fade-in-up">
              Discover the story behind {gymConfig.name} premier community and the passionate team
              dedicated to transforming lives through fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white section-container">
        <div className="content-width container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Story Content */}
            <div className="slide-in-left">
              <h2 className="display-md text-black mb-8 fade-in-up">
                {gymConfig.story.title}
              </h2>

              <div className="space-y-6">
                {gymConfig.story.content.map((paragraph, index) => (
                  <p key={index} className="body-lg text-gray-600 fade-in-up">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 fade-in-up">
                <blockquote className="text-2xl font-semibold text-black italic border-l-4 border-black pl-6">
                  "{gymConfig.mission.quote}"
                </blockquote>
              </div>
            </div>

            {/* Story Image */}
            <div className="slide-in-right">
              <div className="relative w-full h-[550px]">
                <Image
                  src={gymConfig.assets.aboutImage}
                  alt="24N gym interior"
                  fill
                  className="object-cover rounded-3xl shadow-2xl scale-in"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50 section-container">
        <div className="content-width container-padding">
          <div className="text-center mb-16">
            <h2 className="display-md text-black mb-8 fade-in-up">
              {gymConfig.mission.title}
            </h2>
            <p className="body-xl text-gray-600 max-w-4xl mx-auto fade-in-up">
              {gymConfig.mission.statement} As a proud CrossFit affiliate and HYROX official partner,
              we maintain the highest standards of coaching and training excellence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-on-scroll">
              <div className="display-md text-black mb-2">{gymConfig.stats.members}</div>
              <div className="body-md text-gray-600">Happy Members</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-on-scroll">
              <div className="display-md text-black mb-2">{gymConfig.stats.rating}</div>
              <div className="body-md text-gray-600">Average Rating</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-on-scroll">
              <div className="display-md text-black mb-2">{gymConfig.stats.successRate}</div>
              <div className="body-md text-gray-600">Success Rate</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-on-scroll">
              <div className="display-md text-black mb-2">{gymConfig.stats.yearsOfExperience}</div>
              <div className="body-md text-gray-600">{gymConfig.stats.experience}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white section-container">
        <div className="content-width container-padding">
          <div className="text-center mb-16">
            <h2 className="display-md text-black mb-8 fade-in-up">
              Our Values
            </h2>
            <p className="body-xl text-gray-600 max-w-3xl mx-auto fade-in-up">
              These core values guide everything we do and shape the culture of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gymConfig.values.map((value, index) => {
              const icons = [Target, Users, Heart, Award];
              const IconComponent = icons[index];

              return (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 scale-in">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-xl text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="body-md text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 section-container">
        <div className="content-width container-padding">
          <div className="text-center mb-16">
            <h2 className="display-md text-black mb-8 fade-in-up">
              Meet Our Team
            </h2>
            <p className="body-xl text-gray-600 max-w-3xl mx-auto fade-in-up">
              Our expert coaches are passionate about helping you achieve your fitness goals
              and becoming the best version of yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gymConfig.team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 animate-on-scroll"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={getCoachImageSrc(member)}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="heading-xl text-black mb-1">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 px-3 py-1 mb-4">
                    <span className="caption-lg">{member.role}</span>
                  </div>
                  <p className="body-sm text-gray-600">
                    {member.bio}
                  </p>
                  {/* <div className="space-y-1 mt-4">
                    {member.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="caption-lg text-gray-600">{cert}</span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white relative overflow-hidden section-container">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="content-width container-padding">
          <div className="text-center relative z-10">
            <h2 className="display-lg text-white mb-8 fade-in-up">
              Ready to Join Our Community?
            </h2>
            <p className="body-xl text-gray-300 mb-12 max-w-3xl mx-auto fade-in-up">
              Experience the {gymConfig.displayName} difference with a complimentary trial session.
              Join over {gymConfig.stats.members.replace('+', '')} members who have transformed their lives with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 fade-in-up">
              <Link href="/join">
                <Button variant="primary" size="lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  View Services
                </Button>
              </Link>
            </div>

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