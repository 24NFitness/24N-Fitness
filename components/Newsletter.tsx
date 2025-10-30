'use client';

import { useState } from 'react';
import { Mail, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gymConfig } from '@/lib/gym-config';

export default function Newsletter() {
  const [newsletterForm, setNewsletterForm] = useState({
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/pdNVeOQrokwprvPa1qJp/webhook-trigger/c2389e4f-1f88-4650-ae8a-5423ed4af57b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: newsletterForm.name,
          email: newsletterForm.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setNewsletterForm({ name: '', email: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error('Newsletter submission failed:', response.statusText);
        alert('There was an error subscribing. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      alert('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="section-padding bg-white section-container">
      <div className="content-width container-padding">
        {/* Newsletter Signup Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
            </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <h2 className="display-md lg:display-lg text-white mb-4">
                Join Our Newsletter
              </h2>
              <p className="body-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Get exclusive workout tips, nutrition advice, and be the first to know about special offers and events at {gymConfig.displayName}.
              </p>

              {/* Success Banner (TrialForm style) */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Success! You&apos;re subscribed.</span>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleNewsletterSubmit} className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <input
                      type="text"
                      placeholder="Your first name"
                      value={newsletterForm.name}
                      onChange={(e) => setNewsletterForm({ ...newsletterForm, name: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:border-white focus:outline-none rounded-xl backdrop-blur-sm transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={newsletterForm.email}
                      onChange={(e) => setNewsletterForm({ ...newsletterForm, email: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:border-white focus:outline-none rounded-xl backdrop-blur-sm transition-all duration-300"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="default" 
                  className="w-full md:w-auto px-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </Button>
              </form>

              {/* Privacy Note */}
              <p className="text-sm text-gray-400 mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}