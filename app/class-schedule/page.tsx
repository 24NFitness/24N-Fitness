'use client';

import { useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { gymConfig } from '@/lib/gym-config';
import Link from 'next/link';

export default function ClassSchedulePage() {

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

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'all levels':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'intermediate':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'intermediate to advanced':
                return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            case 'advanced':
                return 'bg-red-500/20 text-red-400 border-red-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

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
                            <Calendar className="w-5 h-5 text-white mr-2" />
                            <span className="caption-lg text-white">Class Schedule</span>
                        </div>

                        <h1 className="display-lg text-white mb-6 fade-in-up">
                            Class Schedule
                        </h1>
                        <p className="body-lg text-gray-300 max-w-2xl mx-auto fade-in-up">
                            View our full class schedule and discover our comprehensive range of training programs
                            designed to challenge you at every level.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full Visible Timetable */}
            <section className="bg-white">
                {/* <iframe
                    src="https://www-24nfitness-com.filesusr.com/html/2cbc82_b2f32bc7cdedce3116b26c43fd044d8e.html"
                    className="w-full"
                    style={{
                        border: 'none',
                        width: '100vw',
                        height: '200vh',
                        display: 'block'
                    }}
                    title="24N Fitness Weekly Timetable"
                    loading="eager"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    scrolling="no"
                    frameBorder="0"
                /> */}

                <div className="p-4">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www-24nfitness-com.filesusr.com/html/2cbc82_b2f32bc7cdedce3116b26c43fd044d8e.html"
                            width="100%"
                            height="600"
                            style={{ border: 'none', minHeight: '600px' }}
                            title="CrossFit Kernow Class Timetable"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Class Schedule Section - Dark Theme */}
            <section className="section-padding bg-black relative overflow-hidden section-container">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
                </div>

                <div className="content-width container-padding relative z-10">
                    <div className="text-center mb-16 fade-in-up">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 mb-8 rounded-full border border-white/20 scale-in">
                            <Calendar className="w-5 h-5 text-white mr-3" />
                            <span className="caption-lg text-white">Our Training Programs</span>
                        </div>
                        <h2 className="display-lg text-white mb-8 fade-in-up">
                            Class Descriptions
                        </h2>
                        <p className="body-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
                            Discover our comprehensive range of classes designed to challenge you at every level.
                            From Olympic Weightlifting to High-Intensity CrossFit workouts.
                        </p>
                    </div>

                    {/* Class Schedule Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gymConfig.classSchedule.map((classItem, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                            >
                                {/* Class Header */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="heading-lg text-white group-hover:text-gray-100">
                                            {classItem.name}
                                        </h3>
                                    </div>

                                    <div className="flex items-center space-x-4 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            <span className="caption-md text-gray-400">{classItem.duration}</span>
                                        </div>
                                        <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getDifficultyColor(classItem.difficulty)}`}>
                                            {classItem.difficulty}
                                        </div>
                                    </div>
                                </div>

                                {/* Class Description */}
                                <p className="body-sm text-gray-300 mb-4 group-hover:text-gray-200 leading-relaxed">
                                    {classItem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
