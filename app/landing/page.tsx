'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin, Users, Target, Zap, Star, Award, Shield, Dumbbell, Heart, Clock, CheckCircle } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';

export default function LandingPage() {
    useEffect(() => {
        // Fire Meta Pixel custom event for Landing Page
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', 'Landing_Page_View');
        }

        // Optimized intersection observer for element-level animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // Add stagger animation to child elements with optimized timing
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

    const handleTrialClick = (trialType: string) => {
        // Fire Meta Pixel custom event for trial clicks
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', `${trialType}_Trial_Click`);
        }
        // Payment link will be provided later
        // For now, we'll use a placeholder
        console.log(`${trialType} trial clicked - payment link to be added`);
    };

    return (
        <div className="min-h-screen overflow-hidden bg-black text-white hero-section">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
                <div className="content-width container-padding">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex items-center justify-center w-full">
                            <div className="w-24 h-24 relative">
                                <Image
                                    src={gymConfig.assets.logo}
                                    alt={`${gymConfig.name} Logo`}
                                    fill
                                    className="object-contain drop-shadow-lg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-32 sm:pt-40">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                        {/* Fallback image if video fails to load */}
                        <Image
                            src={gymConfig.assets.heroImage}
                            alt="24N Fitness background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                </div>

                <div className="relative z-20 content-width container-padding text-center">
                    <div className="max-w-5xl mx-auto">

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight hero-animate"
                        >
                            Experience Premium Fitness
                            <br />
                            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#00def5] via-[#00b8cc] to-[#0099b3] bg-clip-text text-transparent">
                                Your Way
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium sm:mb-16 mb-8 hero-animate"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)', '--animation-delay': '0.1s' } as React.CSSProperties}>
                            Train in a sleek, modern fitness space built for performance and recovery
                        </p>

                        {/* Location Info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 hero-animate" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
                            <div className="flex items-center gap-2 text-lg text-gray-300">
                                <MapPin className="w-5 h-5 text-[#00def5]" />
                                <span>24N Liverpool Street</span>
                            </div>
                            <div className="flex items-center gap-2 text-lg text-gray-300">
                                <Star className="w-5 h-5 text-[#00def5]" />
                                <span>Premium Equipment & Facilities</span>
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <div className="flex justify-center mb-16 hero-animate" style={{ '--animation-delay': '0.3s' } as React.CSSProperties}>
                            <p className="text-lg text-gray-300 animate-pulse">
                                Choose your trial below ↓
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trial Options Section */}
            <section className="py-20 bg-white">
                <div className="content-width container-padding">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-[#111827] to-[#01BEE4] bg-clip-text text-transparent font-bold text-center mb-16 fade-in-up">
                            Choose Your 2-Week Trial
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Health Club Trial */}
                            <div className="bg-gradient-to-br from-black via-black/90 to-[#01839d] rounded-3xl p-8 lg:p-10 animate-on-scroll flex flex-col">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-[#00def5]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <Dumbbell className="w-8 h-8 text-[#00def5]" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">2-Week Health Club Trial</h3>
                                    <div className="text-5xl font-black text-[#00def5] mb-4">£69</div>
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        24N Fitness features premium BLK BOX, Spirit and Concept2 equipment, plus everything you need to mix up your training — from yoga to free weights.
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <h4 className="text-xl font-bold text-white mb-4">What's included:</h4>
                                    {[
                                        'Unlimited gym floor access',
                                        'Mind & Body Studio + all classes',
                                        'Luxury changing facilities',
                                        'Sauna & ice bath access'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#00def5] flex-shrink-0" />
                                            <span className="text-white">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-200 mb-8 text-center">
                                    Experience the full Health Club — no limits, no compromises, for two weeks.
                                </p>

                                <div className="text-center mt-auto">
                                    <Button 
                                        variant="primary" 
                                        size="lg" 
                                        className="w-full"
                                        onClick={() => handleTrialClick('HealthClub')}
                                    >
                                        Start trial
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* CrossFit Trial */}
                            <div className="bg-gradient-to-br from-black via-black/90 to-[#01839d] rounded-3xl p-8 lg:p-10 animate-on-scroll flex flex-col">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-[#00def5]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <Zap className="w-8 h-8 text-[#00def5]" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">2-Week Unlimited CrossFit</h3>
                                    <div className="text-5xl font-black text-[#00def5] mb-4">£99</div>
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        Housed beneath 24N Fitness, this one-of-a-kind CrossFit box features a custom BLK BOX rig, ceiling-mounted gymnastic rings, full free-weight setup and space built for serious performance.
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <h4 className="text-xl font-bold text-white mb-4">Your membership includes:</h4>
                                    {[
                                        'Unlimited CrossFit classes',
                                        'Open gym access in the CrossFit box',
                                        'Professional coaching',
                                        'Performance tracking'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#00def5] flex-shrink-0" />
                                            <span className="text-white">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-200 mb-8 text-center">
                                    Train harder, recover better, and experience CrossFit without limits.
                                </p>

                                <div className="text-center mt-auto">
                                    <Button 
                                        variant="primary" 
                                        size="lg" 
                                        className="w-full"
                                        onClick={() => handleTrialClick('CrossFit')}
                                    >
                                        Claim pass
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose 24N Section */}
            <section className="py-20 bg-gradient-radial from-[#01bee4]/30 via-[#015060] to-[#01bee4]/30">
                <div className="content-width container-padding">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white fade-in-up">
                            Why Choose 24N Fitness?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Premium Equipment",
                                    description: "State-of-the-art BLK BOX, Spirit, and Concept2 equipment for optimal performance and results."
                                },
                                {
                                    icon: Heart,
                                    title: "Recovery Focused",
                                    description: "Luxury sauna and ice bath facilities to enhance recovery and maximize your training benefits."
                                },
                                {
                                    icon: Clock,
                                    title: "Flexible Access",
                                    description: "Train on your schedule with unlimited access to our premium facilities and classes."
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center animate-on-scroll">
                                    <div className="w-16 h-16 bg-[#00def5]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <item.icon className="w-8 h-8 text-[#00def5]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                    <p className="text-gray-200 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            {/* <section className="py-20 bg-gradient-radial from-[#01bee4]/30 via-[#015060] to-[#01bee4]/30">
                <div className="content-width container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="glass-effect p-8 sm:p-12 rounded-2xl border border-[#00def5]/30 bg-[#00def5]/5 backdrop-blur-md animate-on-scroll">
                            <div className="flex justify-center mb-6">
                                <div className="flex text-[#00def5]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <blockquote className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-relaxed">
                                "The facilities are incredible and the community is so welcoming. Best decision I've made for my health."
                            </blockquote>
                            <div className="space-y-4">
                                <p className="text-xl text-gray-200 font-semibold">Sarah, Health Club Member</p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Transformed her fitness journey with our premium facilities and expert guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-radial from-[#01bee4]/30 via-[#015060] to-[#01bee4]/30">
                <div className="content-width container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="glass-effect p-8 sm:p-12 rounded-2xl border border-[#00def5]/30 bg-[#00def5]/5 backdrop-blur-md animate-on-scroll">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Ready to Transform Your Fitness?
                            </h2>
                            <p className="text-xl text-gray-200 leading-relaxed mb-8">
                                Choose your 2-week trial and experience what makes 24N Fitness the premier destination for health and performance in Liverpool Street.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    variant="primary" 
                                    size="lg"
                                    onClick={() => handleTrialClick('HealthClub')}
                                >
                                    Health Club Trial - £69
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button 
                                    variant="primary" 
                                    size="lg"
                                    onClick={() => handleTrialClick('CrossFit')}
                                >
                                    CrossFit Trial - £99
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                            <p className="text-sm text-gray-400 mt-6">
                                Questions? Contact us at info@24nfitness.com or
                                <a
                                    href="https://www.instagram.com/24nfitness"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00def5] hover:text-[#00b8cc] transition-colors duration-300 underline decoration-1 underline-offset-2 ml-1"
                                >
                                    @24nfitness
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
