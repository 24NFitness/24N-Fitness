'use client';

import { useEffect } from 'react';
import { Users, CreditCard, Pause, Calendar, Shield, Award, Scale, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gymConfig } from '@/lib/gym-config';

export default function TermsOfServicePage() {


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
      icon: Users,
      title: "Eligibility",
      content: [
        "You must be at least 18 years old to hold a membership, or have parental/guardian consent if under 18.",
        "You must complete any required health questionnaires or waivers before participating in classes or training."
      ]
    },
    {
      icon: CreditCard,
      title: "Membership & Payment",
      content: [
        "Membership fees are payable in advance on a recurring basis.",
        "Payments are handled via WodBoard and Gym Grow.",
        "Any changes to membership (upgrade, downgrade, cancellation) must be requested via email or WhatsApp."
      ]
    },
    {
      icon: Pause,
      title: "Pausing & Cancelling Membership",
      content: [
        "Pausing: Membership can be paused for a minimum duration of one full calendar month.",
        "Requests to pause must be made before the pause period begins.",
        "Cancelling: Membership cancellation requires one full calendar month's notice.",
        "Notice must be given via email."
      ]
    },
    {
      icon: Calendar,
      title: "Class Booking & Attendance",
      content: [
        "All classes must be booked in advance through WodBoard.",
        "A valid membership or payment is required to attend."
      ]
    },
    {
      icon: Shield,
      title: "Health & Safety",
      content: [
        "You agree that you are medically fit and able to participate in physical activity.",
        "You must notify a coach before a session if you have any injuries, conditions, or concerns.",
        "Participation is at your own risk, and you assume full responsibility for your health and wellbeing during sessions."
      ]
    },
    {
      icon: Award,
      title: "Code of Conduct",
      content: [
        "All members and visitors are expected to behave respectfully and safely.",
        "We reserve the right to suspend or terminate your access for conduct deemed unsafe, abusive, or inappropriate."
      ]
    },
    {
      icon: Scale,
      title: "Liability",
      content: [
        "We are not liable for any injury, loss, or damage resulting from your participation in our classes or use of our facilities, except in cases of proven negligence.",
        "You are advised to consult a medical professional before beginning any fitness programme.",
        "We are not responsible for any loss, theft, or damage to personal belongings brought into the facility."
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
              <Scale className="w-5 h-5 text-white mr-2" />
              <span className="caption-lg text-white">Terms & Conditions</span>
            </div>
            
            <h1 className="display-lg text-white mb-6 fade-in-up">
              Terms of Service
            </h1>
            <p className="body-lg text-gray-300 max-w-2xl mx-auto mb-6 fade-in-up">
              These terms set out the conditions under which you may use the services, website, and facilities of {gymConfig.name}.
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
                These Terms & Conditions ("Terms") set out the terms under which you may use the services, website, and facilities of {gymConfig.name} ("we", "us", "our"). By using our services, you agree to be bound by these Terms.
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
                          {item.includes(':') && !item.startsWith('Pausing:') && !item.startsWith('Cancelling:') ? (
                            <div>
                              <strong className="text-black">{item.split(':')[0]}:</strong>
                              <span>{item.split(':').slice(1).join(':')}</span>
                            </div>
                          ) : item.startsWith('Pausing:') || item.startsWith('Cancelling:') ? (
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
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="display-sm text-black mb-6">
                      8. Intellectual Property
                    </h2>
                  </div>
                </div>
                <div className="ml-16">
                  <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                    All content on our website and within our facility (e.g., logos, photos, videos, programming) remains the intellectual property of {gymConfig.name} and may not be reproduced without permission.
                  </p>
                </div>
              </div>

              <div className="slide-in-left">
                <div className="flex items-start space-x-4 mb-6 animate-on-scroll">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 scale-in">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="display-sm text-black mb-6">
                      9. Privacy & Data Protection
                    </h2>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="space-y-4">
                    <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                      We process your personal data in accordance with applicable data protection laws. See our Privacy Policy for more information.
                    </p>
                    <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                      By signing up or using our services, you consent to the collection and processing of your data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="slide-in-left">
                <div className="flex items-start space-x-4 mb-6 animate-on-scroll">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 scale-in">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="display-sm text-black mb-6">
                      10. Changes to Terms
                    </h2>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="space-y-4">
                    <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                      These Terms may be updated periodically. Any changes will be published on our website.
                    </p>
                    <p className="body-md text-gray-700 leading-relaxed animate-on-scroll">
                      Continued use of our services after any updates indicates your acceptance of the revised Terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-20 bg-gray-50 rounded-3xl p-8 scale-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="display-sm text-black mb-4">
                  Questions About These Terms?
                </h3>
                <p className="body-md text-gray-600 mb-6">
                  For any queries or support regarding these Terms, please contact:
                </p>
                <div className="space-y-2">
                  <p className="body-md text-black">
                    <strong>Email:</strong> {gymConfig.contact.email}
                  </p>
                  <p className="body-md text-black">
                    <strong>Phone:</strong> {gymConfig.contact.phone}
                  </p>
                  <p className="body-md text-black">
                    <strong>Address:</strong> {gymConfig.contact.address.full}
                  </p>
                  <p className="body-md text-black">
                    <strong>Website:</strong> {gymConfig.urls.website}
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