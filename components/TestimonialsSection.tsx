'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';

const testimonials = [
  {
    name: 'Paloma Vera',
    // role: 'Software Engineer',
    // image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: `Going to ${gymConfig.displayName} is the best part of the day!! Good laugh, good workouts, lots of support from both staff and everyone else. No matter how big or little you lift, or if you are half way dead after a good workout, you always leave the place with a big smile, even in a shitty day!`,
    // results: 'Improved strength by 40%'
  },
  {
    name: 'Emma Hampsey',
    // role: 'Business Owner',
    // image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: `Since joining ${gymConfig.displayName} I've felt so much fitter and healthier than before. Such a welcoming group of people and the coaches are brilliant that are always happy to help!`,
    // results: 'Best shape of my life at 45'
  },
  {
    name: 'Grace Naylor',
    // role: 'Teacher',
    // image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: `I absolutely love the classes at ${gymConfig.displayName}! While the classes may seem tough, the hardest part is showing up for yourself. The team are super supportive and friendly which helps to keep you motivated and on track. Every class is a different workout, and you can scale and tailor each exercise to your needs without any judgment. 10/10 would recommend :)`,
    // results: 'Complete lifestyle transformation'
  },
  {
    name: 'Abi Hampsey',
    // role: 'Marketing Manager',
    // image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: "I love that I can just show up, I don't have to plan anything, I don't have to wait for equipment, I don't ever have a disappointing workout due to overcrowdedness or time of day. The group sizes are small, supportive and cover every size, shape and ability you could imagine. Any fear around not “looking” like someone who could go to hyrox or cross fit just goes out the window. The coaches foster an environment in which you want to push yourself. I have ran consistently for a few years and tried to gym on and off, to no avail. Yet in just 3 months  I have felt such quick and yet super comfortable progress in myself, my stamina and my overall strength. Improving my 5 and 10K PB by 3 minutes! I couldn't recommend more to those with a busy lifestyle but the drive to do better for themselves. Just show up.",
    // results: 'Lost 25lbs, gained muscle'
  },
];

export default function TestimonialsSection() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50 section-container">
      <div className="content-width container-padding">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full mb-8 scale-in">
            <Star className="w-4 h-4 mr-2" />
            <span className="caption-lg text-white">Member Success Stories</span>
          </div>
          
          <h2 className="display-lg text-black mb-10 fade-in-up">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Real People</span>
          </h2>
          
          <p className="body-xl text-gray-600 max-w-4xl mx-auto fade-in-up">
            Don't just take our word for it. Hear from our members who have transformed their lives at {gymConfig.displayName}.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16 slide-in-left">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="heading-xl text-gray-800 text-center mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Member Info */}
              <div className="flex items-center justify-center space-x-6">
                {/* <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-200"
                  loading="lazy"
                /> */}
                <div className="text-center">
                  <h4 className="heading-xl text-black">
                    {testimonials[currentIndex].name}
                  </h4>
                  {/* <p className="body-md text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="caption-lg text-green-600 mt-1">
                    {testimonials[currentIndex].results}
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-right">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="display-md text-black mb-2">{gymConfig.stats.members}</div>
            <div className="body-md text-gray-600">Happy Members</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="display-md text-black mb-2">{gymConfig.stats.rating}</div>
            <div className="body-md text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="display-md text-black mb-2">{gymConfig.stats.successRate}</div>
            <div className="body-md text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}