'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gymConfig } from '@/lib/gym-config';

interface ApplyFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  theme?: 'light' | 'dark';
  size?: 'default' | 'lg';
}

export default function ApplyForm({ 
  title = "Apply for Free Training",
  description = "Fill out the form below and we'll contact you within 10 minutes",
  buttonText = "Submit Application",
  theme = 'dark',
  size = 'default'
}: ApplyFormProps) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Helper function to get cookie value
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get A/B variant from cookie for tracking
    const abVariant = getCookie('ab-variant') || 'unknown';

    try {
      // First, send to CRM webhook (include variant for CRM tracking)
      const crmResponse = await fetch('https://services.leadconnectorhq.com/hooks/pdNVeOQrokwprvPa1qJp/webhook-trigger/iJZ6nowhoKTMV8NEfZrV', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          ab_variant: abVariant // Track which variant the lead came from
        })
      });

      if (!crmResponse.ok) {
        console.error('CRM submission failed:', crmResponse.statusText);
        alert('There was an error submitting your form. Please try again.');
        return;
      }

      console.log('CRM submission successful');

      // Then, send to Meta Conversion API (include variant for Meta tracking)
      try {
        const capiResponse = await fetch('/api/capi-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone: formData.phone,
            ab_variant: abVariant // Track which variant the lead came from
          })
        });

        const capiResult = await capiResponse.json();
        
        if (capiResponse.ok) {
          console.log('CAPI submission successful:', capiResult);
          // Store event_id and variant in sessionStorage for thank-you page deduplication
          if (capiResult.event_id) {
            sessionStorage.setItem('capi_event_id', capiResult.event_id);
            sessionStorage.setItem('ab_variant', abVariant);
          }
        } else {
          console.error('CAPI submission failed:', capiResult);
          // Don't block the user flow if CAPI fails
        }
      } catch (capiError) {
        console.error('CAPI request error:', capiError);
        // Don't block the user flow if CAPI fails
      }

      // Success - proceed to thank you page
      setIsSubmitted(true);
      router.push('/apply/thank-you');

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isLight = theme === 'light';
  const textColor = isLight ? 'text-black' : 'text-white';
  const inputBg = isLight ? 'bg-white' : 'bg-white/10';
  const inputBorder = isLight ? 'border-gray-300' : 'border-white/20';
  const inputFocus = isLight ? 'focus:border-black focus:ring-black/20' : 'focus:border-white focus:ring-white/20';
  const inputText = isLight ? 'text-black' : 'text-white';
  const inputPlaceholder = isLight ? 'placeholder-gray-500' : 'placeholder-gray-400';
  const labelColor = isLight ? 'text-black' : 'text-white';
  const successTextColor = isLight ? 'text-green-600' : 'text-green-400';

  return (
    <div>
      <div className="text-center mb-8">
        {/* <h3 className={`${isLight ? 'display-sm' : 'text-3xl font-bold'} ${textColor} mb-4 fade-in-up`}>
          {title}
        </h3>
        <p className={`${isLight ? 'body-md text-gray-600' : 'text-gray-400'} fade-in-up`}>
          {description}
        </p> */}
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
          <div className={`flex items-center justify-center gap-2 ${successTextColor}`}>
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Success! Redirecting to confirmation page...</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first_name" className={`block ${isLight ? 'caption-lg' : 'text-sm font-medium'} ${labelColor} mb-2`}>
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              value={formData.first_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl ${inputText} ${inputPlaceholder} ${inputFocus} focus:outline-none focus:ring-2 transition-all duration-300`}
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="last_name" className={`block ${isLight ? 'caption-lg' : 'text-sm font-medium'} ${labelColor} mb-2`}>
              Last Name *
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              value={formData.last_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl ${inputText} ${inputPlaceholder} ${inputFocus} focus:outline-none focus:ring-2 transition-all duration-300`}
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={`block ${isLight ? 'caption-lg' : 'text-sm font-medium'} ${labelColor} mb-2`}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl ${inputText} ${inputPlaceholder} ${inputFocus} focus:outline-none focus:ring-2 transition-all duration-300`}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className={`block ${isLight ? 'caption-lg' : 'text-sm font-medium'} ${labelColor} mb-2`}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl ${inputText} ${inputPlaceholder} ${inputFocus} focus:outline-none focus:ring-2 transition-all duration-300`}
            placeholder="Enter your phone number"
          />
        </div>

        <Button 
          type="submit"
          variant="primary"
          size={size}
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : buttonText}
          {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
        </Button>
      </form>

      <div className="text-center mt-6">
        <p className={`${isLight ? 'caption-md text-gray-500' : 'text-sm text-gray-400'}`}>
          By submitting this form, you agree to receive communications from {gymConfig.name}. 
          You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
