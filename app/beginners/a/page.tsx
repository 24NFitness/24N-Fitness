'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin, Users, Target, Zap, Star, Award, Shield } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';

export default function FreeTrainingPageVariantA() {
    useEffect(() => {
        // Fire Meta Pixel custom event for Variant A
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', 'Beginner_LP_A_View');
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

    return (
        <div className="min-h-screen overflow-hidden bg-black text-white hero-section">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
                <div className="content-width container-padding">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex items-center lg:flex-1">
                            <Link
                                href="/beginners"
                                className="flex items-center group"
                            >
                                <div className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={gymConfig.assets.logo}
                                        alt={`${gymConfig.name} Logo`}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
                        </div>

                        <Link href="/apply">
                            <Button
                                variant="primary" size="default"
                            >
                                <span className="relative z-10">Apply Now</span>
                            </Button>
                        </Link>
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
                            Train in 2026 for
                            <br />
                            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#00def5] via-[#00b8cc] to-[#0099b3] bg-clip-text text-transparent">
                                FREE
                            </span>&nbsp;at 24N Gym
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium sm:mb-16 mb-8 hero-animate"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)', '--animation-delay': '0.1s' } as React.CSSProperties}>
                            But Only If You Qualify and Are Willing to Prove You're Serious
                        </p>


                        <div className="flex items-center justify-center gap-3 mb-8 hero-animate" style={{ '--animation-delay': '0.15s' } as React.CSSProperties}>
                            <p className="text-lg sm:text-xl text-red-400 font-bold  tracking-wide">
                                10 Liverpool Street Professionals Will Get This Chance to Transform Their Health in 2026
                            </p>
                        </div>

                        {/* Event Details */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 hero-animate" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
                            <div className="flex items-center gap-2 text-lg text-gray-300">
                                <Users className="w-5 h-5 text-[#00def5]" />
                                <span>10 Spots Available</span>
                            </div>
                            <div className="flex items-center gap-2 text-lg text-gray-300">
                                <Calendar className="w-5 h-5 text-[#00def5]" />
                                <span>Deadline: December 15th</span>
                            </div>
                            <div className="flex items-center gap-2 text-lg text-gray-300">
                                <MapPin className="w-5 h-5 text-[#00def5]" />
                                <span>24N Liverpool Street</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 hero-animate" style={{ '--animation-delay': '0.3s' } as React.CSSProperties}>
                            <Link href="/apply">
                                <Button variant="primary" size="lg">
                                    Apply Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>


                        {/* Urgency Badge */}


                        {/* Event Description */}
                        {/* <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed animate-on-scroll">
                            This isn't another generic business event. This is an intimate, high-level mastermind designed for gym owners who are done with revenue plateaus and ready to build a business that grows without burning out.
                        </p> */}

                    </div>
                </div>
            </section>

            {/* Four Key Points */}
            <section className="py-20 bg-white">
                <div className="content-width container-padding">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-[#111827] to-[#01BEE4] bg-clip-text text-transparent font-bold text-center mb-16 fade-in-up">
                            Why Busy Professionals Choose 24N
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Personalized Coaching",
                                    description: "Busy professionals finally getting results without living in the gym — with coaching tailored to your schedule, experience level, and goals."
                                },
                                {
                                    icon: Shield,
                                    title: "No More Intimidation or Confusion",
                                    description: "No more being thrown into random classes and left to guess. We coach you step-by-step so you feel confident, supported, and never out of your depth."
                                },
                                {
                                    icon: Zap,
                                    title: "Reclaim Your Energy and Vitality",
                                    description: "Stop trading your health for your career. Build strength, fitness, and energy that helps you perform better at work and enjoy life outside of it."
                                },
                                {
                                    icon: Award,
                                    title: "Commitment That Gets Results",
                                    description: "Yes, this offer is free — but we only want busy professionals who are serious about showing up consistently and sticking with the process long term."
                                },

                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-black via-black/80 to-[#01839d] animate-on-scroll">
                                    <div className="flex flex-col lg:flex-row items-start gap-6">
                                        <div className="w-16 h-16 bg-[#00def5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-8 h-8 text-[#00def5]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                            <p className="text-white leading-relaxed text-lg">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Julia Testimonial */}
            <section className="py-20 bg-gradient-radial from-[#01bee4]/30 via-[#015060] to-[#01bee4]/30">
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
                                "I have never enjoyed training so much and I look better now than how I looked 10 years ago."
                            </blockquote>
                            <div className="space-y-4">
                                <p className="text-xl text-gray-200 font-semibold">Julia, Busy Professional</p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Julia had no time to train. Now she's excited by health and fitness and looks better than she did a decade ago.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 animate-on-scroll">
                            <p className="text-xl text-white mb-8">
                                Apply now for your consultation. Only 10 spots. Deadline: December 15th.
                            </p>
                            <p className="text-lg text-gray-200 mb-8">
                                If you're accepted, you'll work directly with our coaching team to build a custom plan that fits your life - not someone else's idea of what fitness "should" look like.
                            </p>
                            <Link href="/apply">
                                <Button variant="primary" size="lg">
                                    Apply Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="section-padding bg-white section-container">
                <div className="content-width container-padding">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-[#111827] to-[#01BEE4] bg-clip-text text-transparent font-bold fade-in-up">
                            Here's What Happens Next
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                {
                                    step: "1",
                                    title: "Submit your details",
                                    description: "You fill out a short application to see if you're a good fit."
                                },
                                {
                                    step: "2",
                                    title: "Book Consultation",
                                    description: "If accepted, you book a consultation with our team."
                                },
                                {
                                    step: "3",
                                    title: "Meet your coach",
                                    description: "In that meeting, we'll discuss your goals, your schedule, your challenges, and build a custom plan."
                                },
                                {
                                    step: "4",
                                    title: "Start Training",
                                    description: "You start training in 2026 with personalized coaching, custom workout plans, nutrition guidance, and weekly check-ins."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-6 animate-on-scroll">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#00def5] to-[#0099b3] rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">{item.step}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center animate-on-scroll">
                            <div className="bg-gradient-to-r from-[#00def5]/10 to-[#0099b3]/10 border border-[#00def5]/20 rounded-xl p-8">
                                <p className="text-xl font-bold text-gray-800 mb-4">
                                    Deadline: December 15th | Spots: Only 10
                                </p>
                                <p className="text-lg text-gray-600 mb-6">
                                    This is your chance to stop putting it off. To stop feeling guilty about neglecting your health. To finally have the energy, confidence, and vitality you deserve.
                                </p>
                                <Link href="/apply" className="text-xl font-bold text-[#00def5] hover:text-[#00b8cc] transition-colors duration-300 underline decoration-2 underline-offset-4">
                                    Apply now.
                                </Link>
                            </div>
                        </div>

                        {/* <div className="mt-8 text-center animate-on-scroll">
                            <div className="flex items-center gap-3 text-[#00def5] font-semibold text-lg justify-center">
                                <span>Follow us:</span>
                                <a
                                    href="https://www.instagram.com/24nfitness"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#00b8cc] transition-colors duration-300 underline decoration-2 underline-offset-4"
                                >
                                    @24nfitness
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>


            {/* Main Body Copy */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
                <div className="content-width container-padding">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-12 lg:p-16 animate-on-scroll">
                            <div className="prose prose-lg max-w-none">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                        Let me be blunt.
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-[#00def5] to-[#0099b3] mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-6 text-center sm:text-left">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        You're sacrificing your health for your career. You know it. I know it. And every time you look in the mirror or feel that 3pm energy crash, your body reminds you.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        You're working 60-hour weeks. Endless Zoom calls. Client demands. Deadlines. Commutes. By the time you get home, you're exhausted. The idea of walking into a gym filled with people who seem to know exactly what they're doing feels overwhelming. Maybe even humiliating.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        So you tell yourself: "I'll start next month." "I'll start after this project." "I'll start when things calm down."
                                    </p>

                                    <p className="text-xl text-gray-800 font-bold text-center py-4">
                                        But things never calm down, do they?
                                    </p>

                                    <div className="bg-gradient-to-r from-[#00def5]/10 to-[#0099b3]/10 border-l-4 border-[#00def5] p-6 rounded-r-xl my-8">
                                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                            Here's what nobody tells you: The problem isn't that you're too busy. The problem is that every gym you've considered treats you like a faceless member, not a human being with a unique situation.
                                        </p>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        They hand you a generic program. They throw you into group classes where you're either completely lost or bored out of your mind. There's no accountability. No one checking in. No one who actually knows your name or cares whether you show up.
                                    </p>

                                    <div className="text-center py-6">
                                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00def5] to-[#0099b3] bg-clip-text text-transparent">
                                            That's why 24N exists.
                                        </h3>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We've helped over 10,000 people in the last three years transform their lives, not by giving them cookie-cutter programs, but by meeting them exactly where they are and building a plan that fits their real life.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Whether you've never stepped foot in a gym or you used to train but life got in the way, we work with you. One-on-one or in small groups. You work directly with our coaching team. They know your name. They know your schedule. They know your goals.
                                    </p>

                                    <div className="bg-gradient-to-r from-[#00def5]/10 via-[#00b8cc]/10 to-[#0099b3]/10 border border-[#00def5]/20 rounded-2xl p-6 my-8">
                                        <p className="text-lg text-gray-800 leading-relaxed text-center font-medium">
                                            And here's the secret that makes all the difference: <span className="font-bold text-[#00def5] text-xl">accountability</span>.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed text-center mt-4">
                                            Not the fake kind. The real kind. The kind where someone actually cares if you show up, checks in with you, adjusts your plan when life gets crazy, and keeps you moving forward even when motivation fades.
                                        </p>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        She had no time. She was intimidated. She didn't know where to start.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Now? She's excited by health and fitness. She has energy. She feels confident.
                                    </p>

                                    <p className="text-xl text-gray-800 font-bold text-center py-4">
                                        And you can too.
                                    </p>

                                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
                                        <p className="text-lg text-red-800 leading-relaxed font-semibold text-center">
                                            But here's the thing: This opportunity is only available to 10 people.
                                        </p>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We're opening up 10 spots to train in 2026 for free. But there's a catch - and it's intentional.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        You have to apply. You have to get on a call with us. And if you're accepted, you have to pay a commitment fee upfront (which you get back as store credit).
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Why? Because we only want people who are serious. People who are ready to actually show up and do the work.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        If you're just "thinking about it" or "might start someday," this isn't for you.
                                    </p>

                                    <div className="text-center py-6">
                                        <p className="text-xl text-gray-800 font-bold">
                                            But if you're tired of sacrificing your health for your career... if you're frustrated by not knowing where to start... if you want a gym that actually treats you like a human being and not a membership number...
                                        </p>
                                        <Link href="/apply" className="inline-block mt-4">
                                            <span className="text-xl font-bold text-[#00def5] hover:text-[#00b8cc] transition-colors duration-300 underline decoration-2 underline-offset-4">
                                                Then apply now.
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* What Makes This Different */}

            <div className="bg-gradient-radial from-[#01bee4]/30  via-[#015060] to-[#01bee4]/30">
                {/* Final CTA Section */}
                <section id="apply-section" className="pb-20 pt-16 animate-on-scroll">
                    <div className="content-width container-padding">
                        <div className="max-w-5xl mx-auto">
                            <div className="glass-effect p-8 sm:p-12 rounded-2xl border border-[#00def5]/30 bg-[#00def5]/5 backdrop-blur-md animate-on-scroll">
                                <div className="text-center space-y-8">
                                    <p className="text-2xl sm:text-3xl font-bold text-white">
                                        Deadline: December 15th | Only 10 Liverpool Street Professionals
                                    </p>
                                    <p className="text-xl text-gray-200 leading-relaxed">
                                        This is your chance to transform your health in 2026 without the usual gym intimidation, confusion, or generic programs that don't fit your busy professional life.
                                    </p>
                                    <div className="pt-8">
                                        <Link href="/apply" className="inline-block">
                                            <Button variant="primary" size="lg">
                                                Apply Now
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </Link>
                                    </div>

                                    <p className="text-sm text-gray-400">
                                        Questions? DM us
                                        <a
                                            href="https://www.instagram.com/24nfitness"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#00def5] hover:text-[#00b8cc] transition-colors duration-300 underline decoration-1 underline-offset-2 ml-1"
                                        >
                                            @24nfitness
                                        </a> or email us at info@24nfitness.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
