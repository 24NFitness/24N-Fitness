// Gym Configuration File
// Single location configuration for 24N Liverpool Street

export interface GymConfig {
  // Basic Information
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
    address: {
      street: string;
      city: string;
      postcode: string;
      country: string;
      full: string;
    };
  };

  // Map
  mapEmbedUrl: string;
  
  // Operating Hours
  hours: {
    weekdays: string;
    friday: string;
    saturday: string;
    sunday: string;
    detailed: {
      [key: string]: string;
    };
  };
  
  // Website URLs
  urls: {
    website: string;
    booking: string;
    consultation: string;
    services: string;
    about: string;
    contact: string;
  };
  
  // Social Media Links
  social: {
    instagram: string;
  };
  
  // Brand Assets
  assets: {
    logo: string;
    horizontalLogo: string;
    heroImage: string;
    aboutImage: string;
  };
  
  // Statistics
  stats: {
    members: string;
    rating: string;
    successRate: string;
    yearsOfExperience: string;
    experience: string;
  };
  
  // Programs/Services
  programs: Array<{
    name: string;
    description: string;
    duration: string;
    intensity: string;
    maxParticipants: string;
    price: string;
    features?: string[];
  }>;
  
  // Team Members
  team: Array<{
    name: string;
    role: string;
    image: string;
    bio: string;
  }>;
  
  // Company Values
  values: Array<{
    title: string;
    description: string;
  }>;
  
  // Mission Statement
  mission: {
    title: string;
    statement: string;
    quote: string;
  };

  // Story
  story: {
    title: string;
    content: string[];
  };
  
  // SEO/Meta Information
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Main gym configuration
export const gymConfig: GymConfig = {
  // Basic Information
  name: '24N Liverpool Street',
  displayName: '24N Fitness',
  tagline: 'Peak Performance Hub',
  description: 'Empower busy professionals and fitness enthusiasts to achieve peak performance through world-class training, cutting-edge equipment, and a results-driven approach.',

  // Contact Information
  contact: {
    phone: '+44 20 4553 3997',
    email: 'info@24nfitness.com',
    whatsapp: '+44 20 4553 3997',
    address: {
      street: '9 Devonshire Square',
      city: 'London',
      postcode: 'EC2M 7PY',
      country: 'UK',
      full: '9 Devonshire Square, London, EC2M 7PY'
    }
  },

  // Map
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.892315799386!2d-0.08206612347633983!3d51.517020711828765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760352cd5fb6a5%3A0xf1c8c1c8c1c8c1c8!2s9%20Devonshire%20Square%2C%20London%20EC2M%207PY%2C%20UK!5e0!3m2!1sen!2suk!4v1642094800000!5m2!1sen!2suk',

  // Operating Hours
  hours: {
    weekdays: '6:00 AM - 9:00 PM',
    friday: '6:00 AM - 8:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
    detailed: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '9:00 AM - 2:00 PM',
      'Sunday': 'Closed'
    }
  },

  // Website URLs
  urls: {
    website: 'https://24nfitness.co.uk',
    booking: '/join',
    consultation: 'https://api.gymgrow.app/widget/bookings/24ncalendar',
    services: '/services',
    about: '/about',
    contact: '/contact'
  },

  // Social Media Links
  social: {
    instagram: 'https://www.instagram.com/24nfitness'
  },

  // Brand Assets
  assets: {
    logo: '/24n-logo.png',
    horizontalLogo: '/24n-horizontal-logo.svg',
    heroImage: '/hero-image.webp',
    aboutImage: '/about-image.webp'
  },

  // Statistics
  stats: {
    members: '200+',
    rating: '4.9/5',
    successRate: '98%',
    yearsOfExperience: '5+',
    experience: 'Years of Excellence'
  },

  // Programs/Services
  programs: [
    {
      name: 'Group Functional Training',
      description: 'High-energy sessions blending strength, conditioning, and endurance suitable for beginners and advanced athletes.',
      duration: '60 min',
      intensity: 'High',
      maxParticipants: '12',
      price: 'From £89/month',
      features: [
        'Strength & conditioning focus',
        'Suitable for all levels',
        'Expert coaching',
        'Community atmosphere'
      ]
    },
    {
      name: '1-to-1 Personal Coaching',
      description: 'Fully customized training plans aligned to individual goals with flexible scheduling and expert coaches.',
      duration: '60 min',
      intensity: 'Custom',
      maxParticipants: '1',
      price: 'From £75/session',
      features: [
        'Personalized programs',
        'Flexible scheduling',
        'Goal-specific training',
        'Expert guidance'
      ]
    },
    {
      name: 'HYROX & Performance Coaching',
      description: 'Dedicated programming for HYROX athletes focusing on speed, endurance, and event-specific skill development.',
      duration: '90 min',
      intensity: 'High',
      maxParticipants: '8',
      price: 'From £120/month',
      features: [
        'HYROX-specific training',
        'Performance optimization',
        'Event preparation',
        'Competitive edge'
      ]
    },
    {
      name: 'Open Gym Access',
      description: 'Premium equipment and free weights suitable for personal training sessions or solo workouts.',
      duration: 'Flexible',
      intensity: 'Self-Paced',
      maxParticipants: 'Unlimited',
      price: 'Included with membership',
      features: [
        'Premium equipment',
        'Flexible timing',
        'Solo or PT sessions',
        'Full facility access'
      ]
    }
  ],

  // Team Members (placeholder - update with actual team)
  team: [
    {
      name: 'Team Member',
      role: 'Head Coach',
      image: 'member',
      bio: 'Experienced fitness professional dedicated to helping members achieve their peak performance goals.'
    }
  ],

  // Company Values
  values: [
    {
      title: 'Peak Performance',
      description: 'We are committed to helping every member achieve their highest potential through expert coaching and proven methodologies.'
    },
    {
      title: 'Community',
      description: 'We believe fitness is better together. Our supportive community motivates and inspires each member to succeed.'
    },
    {
      title: 'Excellence',
      description: 'We maintain elite coaching standards while creating a welcoming environment for all fitness levels.'
    },
    {
      title: 'Results-Driven',
      description: 'Every program and session is designed with measurable results in mind, ensuring progress toward your goals.'
    }
  ],

  // Mission Statement
  mission: {
    title: 'Our Mission',
    statement: 'To empower busy professionals and fitness enthusiasts to achieve peak performance through world-class training, cutting-edge equipment, and a results-driven approach.',
    quote: 'More than a gym—a hub for high performers.'
  },

  // Story
  story: {
    title: 'Our Story',
    content: [
      '24N Liverpool Street was born from a vision to create the ultimate performance hub for London\'s busy professionals.',
      'Located in the heart of the financial district, we understand the demands of high-performance careers and the need for efficient, effective training.',
      'Our state-of-the-art facility combines cutting-edge equipment with expert coaching to deliver results that fit your schedule and exceed your expectations.'
    ]
  },

  // SEO/Meta Information
  seo: {
    title: '24N Liverpool Street - Premium Fitness & Performance Hub | London',
    description: 'Achieve peak performance at 24N Liverpool Street. Expert coaching, HYROX training, group classes & personal training in the heart of London. Book consultation today!',
    keywords: [
      '24n liverpool street',
      'london gym',
      'hyrox training london',
      'personal training london',
      'functional fitness london',
      'group training classes',
      'performance coaching',
      'city gym london',
      'ec2 gym',
      'devonshire square gym',
      'crossfit london',
      'fitness center london',
      'premium gym london',
      'workout classes london'
    ]
  }
};

// Helper function to get specific config values
export const getConfig = (path: string) => {
  const keys = path.split('.');
  let value: any = gymConfig;

  for (const key of keys) {
    value = value[key];
    if (!value) return null;
  }

  return value;
};