'use client';

import { Users, Award, Zap } from 'lucide-react';
import TrialForm from '@/components/TrialForm';
import { gymConfig } from '@/lib/gym-config';

const benefits = [
  {
    icon: Users,
    title: 'Free Fitness Assessment',
    description: 'Get a complete evaluation of your current fitness level'
  },
  {
    icon: Award,
    title: 'Personalized Training Plan',
    description: 'Receive a custom workout plan tailored to your goals'
  },
  {
    icon: Zap,
    title: 'No Commitment Required',
    description: 'Try us out with no strings attached'
  }
];

export default function LeadCaptureForm() {

  return (
    <section className="section-padding bg-black section-container">
      <div className="content-width container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Benefits */}
          <div className="slide-in-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20 scale-in">
              <span className="caption-lg text-white">Start Your Journey</span>
            </div>
            
            <h2 className="display-lg text-white mb-8 fade-in-up">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your Life?</span>
            </h2>
            
            <p className="body-xl text-gray-300 mb-12 fade-in-up">
              Join our high-performance community and discover what makes {gymConfig.name} different.
              Book your consultation and start your transformation today.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 animate-on-scroll">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-lg text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="body-md text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="slide-in-right">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
              <TrialForm 
                title="Claim Your Free Trial"
                description="Fill out the form below and we'll contact you within 10 minutes"
                buttonText="Claim Your Free Trial"
                theme="dark"
                size="default"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}