'use client';

import { useEffect } from 'react';
import { Shield, Eye, Users, FileText, Lock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gymConfig } from '@/lib/gym-config';

export default function PrivacyPolicyPage() {


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

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal Information: such as your name, email address, phone number, and payment details when you sign up for a class, contact us, or purchase a membership.",
        "Usage Data: including IP address, browser type, operating system, referring URLs, pages visited, and the time/date of your visit.",
        "Cookies: We use cookies to enhance your user experience, track website analytics, and deliver targeted advertisements."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and manage services and memberships.",
        "Send emails or texts related to classes, bookings, or updates.",
        "Improve our website and services.",
        "Comply with legal obligations."
      ]
    },
    {
      icon: Users,
      title: "Sharing Your Information",
      content: [
        "We do not sell your personal data. However, we may share your information with:",
        "Service providers (e.g., website hosting, CRM platforms, payment processors).",
        "Legal authorities if required by law or to protect our legal rights."
      ]
    },
    {
      icon: Shield,
      title: "Third-Party Services",
      content: [
        "We may use third-party platforms such as:",
        "Booking platforms: Gym Grow, WodBoard.",
        "Analytics and ads tools: Google Analytics, Facebook Pixel, etc.",
        "These services may collect data independently according to their own privacy policies."
      ]
    },
    {
      icon: Lock,
      title: "Your Rights (UK GDPR)",
      content: [
        "You have the right to:",
        "Access or request a copy of your data.",
        "Correct inaccurate information.",
        "Request deletion of your data.",
        "Withdraw consent for processing.",
        `To exercise your rights, contact us at: ${gymConfig.contact.email}`
      ]
    }
  ];

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
              <Shield className="w-5 h-5 text-white mr-2" />
              <span className="caption-lg text-white">Your Privacy Matters</span>
            </div>
            
            <h1 className="display-lg text-white mb-6 fade-in-up">
              Privacy Policy
            </h1>
            <p className="body-lg text-gray-300 max-w-2xl mx-auto mb-6 fade-in-up">
              {gymConfig.name} is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
            </p>
            <div className="caption-md text-gray-400 fade-in-up">
              Effective Date: August 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white section-container">
        <div className="content-width container-padding">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 slide-in-left">
              <p className="body-xl text-gray-700 leading-relaxed">
                24N Fitness ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website {gymConfig.urls.website}, and use our services.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="slide-in-left">
                  <div className="flex items-start space-x-4 mb-6 animate-on-scroll">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 scale-in">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="display-sm text-black mb-6">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="ml-16">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                          {item.includes(':') ? (
                            <div>
                              <strong className="text-black">{item.split(':')[0]}:</strong>
                              <span>{item.split(':').slice(1).join(':')}</span>
                            </div>
                          ) : (
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-black rounded-full mt-3 mr-3 flex-shrink-0"></span>
                              <span>{item}</span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Additional Sections */}
              <div className="slide-in-left">
                <div className="flex items-start space-x-4 mb-6 animate-on-scroll">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 scale-in">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="display-sm text-black mb-6">
                      6. Data Retention
                    </h2>
                  </div>
                </div>
                <div className="ml-16">
                  <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                    We retain your data only for as long as necessary to provide services and fulfil legal obligations.
                  </p>
                </div>
              </div>

              <div className="slide-in-left">
                <div className="flex items-start space-x-4 mb-6 animate-on-scroll">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 scale-in">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="display-sm text-black mb-6">
                      7. Security
                    </h2>
                  </div>
                </div>
                <div className="ml-16">
                  <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                    We take reasonable measures to protect your data but cannot guarantee absolute security of information transmitted online.
                  </p>
                </div>
              </div>

              <div className="slide-in-left">
                <div className="flex items-start space-x-4 mb-6 animate-on-scroll">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 scale-in">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="display-sm text-black mb-6">
                      8. Changes to This Policy
                    </h2>
                  </div>
                </div>
                <div className="ml-16">
                  <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                    We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-20 bg-gray-50 rounded-3xl p-8 scale-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="display-sm text-black mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="body-md text-gray-600 mb-6">
                  For any privacy-related questions or concerns, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="body-md text-black">
                    <strong>Email:</strong> {gymConfig.contact.email}
                  </p>
                  <p className="body-md text-black">
                    <strong>Address:</strong> {gymConfig.contact.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}