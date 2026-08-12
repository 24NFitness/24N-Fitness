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

  // Memberships
  memberships: Array<{
    category: string;
    name: string;
    description: string;
    link: string;
    price: string;
    type: 'health-club' | 'crossfit' | 'class-pack' | 'transformation';
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

  // Class Schedule
  classSchedule: Array<{
    name: string;
    description: string;
    duration: string;
    focus: string[];
    difficulty: string;
  }>;

  // Facilities
  facilities: Array<{
    name: string;
    description: string;
    image: string;
  }>;
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
    whatsapp: '+44 7533 974442',
    address: {
      street: '9 Devonshire Square',
      city: 'London',
      postcode: 'EC2M 4WY',
      country: 'UK',
      full: '9 Devonshire Square, London, EC2M 4WY'
    }
  },

  // Map
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7938151137305!2d-0.0788387!3d51.5169986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d19eec0e50d%3A0xc0c425de939aadf9!2s24N%20Fitness%20%26%20Liverpool%20St.%20CrossFit!5e0!3m2!1sen!2sGB!4v1757609367564!5m2!1sen!2sGB',

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
    // dont need this anymore 
    consultation: 'https://api.gymgrow.app/widget/bookings/24ncalendar',
    services: '/services',
    about: '/about',
    contact: '/contact-us'
  },

  // Social Media Links
  social: {
    instagram: 'https://www.instagram.com/24nfitness'
  },

  // Brand Assets
  assets: {
    logo: '/24nLogo.png',
    horizontalLogo: '/24nLogo.png',
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
    quote: 'More than a gym - a hub for high performers.'
  },

  // Story
  story: {
    title: 'Our Story',
    content: [
      'At 24N Fitness, we strive to deliver a comprehensive, high-quality fitness experience under one roof. By doing so, we have exceeded industry standards, offering the premium facilities of a luxury gym combined with the tight-knit community atmosphere of a local CrossFit affiliate. Nowhere in London is better equipped to provide such a well-rounded fitness experience.',
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
  },

  // Class Schedule
  classSchedule: [
    {
      name: 'Gymnastics & Threshold',
      description: 'Typically, a 30-35 min workout focusing on improving our Upper body strength, Skill, and Threshold in CrossFit. Gymnastics focused movements, such as HSPU and RMU etc., giving you time to practice and learn high skill movements, or improving those skills to be used in a higher intensity workout.',
      duration: '30-35 min',
      focus: ['Upper Body Strength', 'Gymnastics Skills', 'HSPU', 'Ring Muscle Ups'],
      difficulty: 'Intermediate to Advanced'
    },
    {
      name: 'CrossBuilding',
      description: 'CrossFit and Bodybuilding combined into one workout. The first part of the session will be Upper-Body Strength training, with a particular focus on Muscle Building, using mainly Dumbbells and Kettlebells. This will be followed by a classic, short, and high intensity CrossFit workout.',
      duration: '60 min',
      focus: ['Muscle Building', 'Upper Body Strength', 'High Intensity', 'Dumbbells & Kettlebells'],
      difficulty: 'All Levels'
    },
    {
      name: 'Team WOD',
      description: 'Typically, a pairs workout consisting of DB/KB’s, CrossFit bodyweight movements like TTB and conditioning on the ergs, lasting for up to 36-40 minutes, usually with a partner/team-oriented focus, for example completing a buy in on the ergs and then completing max reps of 2 or 3 movements in a YGIG format.',
      duration: '36-40 min',
      focus: ['Partner Work', 'Teamwork', 'Dumbbells/Kettlebells', 'Bodyweight Movements'],
      difficulty: 'All Levels'
    },
    {
      name: 'Olympic Weightlifting',
      description: 'Our Olympic Weightlifting class provides progressive programming for the mastery of the highly technical Olympic Lifts (Barbell Snatch and Clean & Jerk) and their precursory movements, through complexes and max testing. Each coach-led session is 60 minutes long and is perfect for anyone looking to diversify their current strength training or compliment their training of the CrossFit programme',
      duration: '60 min',
      focus: ['Olympic Lifts', 'Snatch', 'Clean & Jerk', 'Technical Skills'],
      difficulty: 'All Levels'
    },
    {
      name: 'Strength & Threshold',
      description: 'Like strength and power, split into two parts. The strength component will last between 16-20 minutes, strength exercises will mainly consist of upper body strength movements such as Bench press, Dip, Pull up, Chin up, Over Head Press etc. With the second part or Threshold workout being slightly longer than power at around 14-18 mins and not interval based, usually in a more CrossFit style in an AMRAP or for time, the goal being to maintain a max sustainable pace throughout.',
      duration: '30-38 min',
      focus: ['Upper Body Strength', 'Bench Press', 'Pull Ups', 'Threshold Training'],
      difficulty: 'All Levels'
    },
    {
      name: 'Strength & Benchmark',
      description: 'Like strength and Threshold in terms of format, this time however the strength component will typically be a heavy lift, building up to a heavy single, double, or triple of a lower body strength movement that isn\'t currently on Monday\'s strength cycle. The Benchmark workout will be a workout we’ve created or a benchmark from CrossFit, this is more of a test of our fitness and is repeated every 5-6 months to see if we’ve improved our time from last time and got ‘fitter’.',
      duration: '45-50 min',
      focus: ['Heavy Singles', 'Lower Body', 'Benchmark Testing', 'Fitness Assessment'],
      difficulty: 'Intermediate to Advanced'
    },
    {
      name: 'Barbell Strength & Conditioning',
      description: 'Expect a high intensity workout consisting of a Heavy lift of either the Snatch or Clean and Jerk, followed lightweight barbell Cycling alongside any or all of the Concept 2 Cardio equipment, Row, Bike & Ski Ergs',
      duration: '45-50 min',
      focus: ['Heavy Lifting', 'Barbell Cycling', 'Cardio', 'Row/Bike/Ski Ergs'],
      difficulty: 'Intermediate'
    },
    {
      name: 'Strength & Power',
      description: 'Usually a 16–20-minute strength workout, followed by short and high intensity intervals that last around 12-15 minutes. The strength component will be more lower body bias to improve our Strength in for example: Back Squat, Over Head Squat, Front Squat, Deadlift, etc. With the power intervals accompanying that with full body functional movements biased towards improving our Power Output.',
      duration: '30-35 min',
      focus: ['Lower Body Strength', 'Back Squat', 'Deadlift', 'Power Intervals'],
      difficulty: 'All Levels'
    },
    {
      name: 'Mobility Workshop',
      description: 'This 45min mobility and movement workshop is the perfect tool to learn and start laying a solid foundation for those looking to improve their Hip, upper back and spine stability and range. Whether you are looking to improve your performance in Olympic lifting, gain more freedom in your gymnastics practice or simply want to learn how to prevent common injuries from putting you on the sidelines once again, this can help! You will learn how to strengthen your spine, find new range in your hips and shoulders as well as understand how much more your body can truly achieve! All ages and levels welcome!',
      duration: '45 min',
      focus: ['Hip Mobility', 'Spine Stability', 'Injury Prevention', 'Movement Quality'],
      difficulty: 'All Levels'
    }
  ],

  // Facilities
  facilities: [
    {
      name: '24N Health Club',
      description: 'Featuring a wide array of equipment, it\'s a perfect mix of the conventional and functional aspects of gym culture. All types of cardio, resistance and weightlifting machines, alongside a comprehensive range of free-weights, including heavy duty squat racks, a turf track with weighted sleds, and of course a huge selection of Dumbbells. From casual gym goers, to serious athletes, this space offers something for everyone.',
      image: '/facilities/health.webp'
    },
    {
      name: 'Liverpool Street CrossFit',
      description: '24N Fitness is home to one of the largest CrossFit affiliated gyms located in Central London, with only the best equipment, handpicked for the space. Owned and housed by 24N Fitness, sits below the Health Club. The CrossFit box is unlike anything of its kind, merging CrossFit with high end luxury fitness. In this remarkable space sits a full, custom built BLK BOX rig, accompanied by ceiling mounted gymnastic rings, a full range of free weights and much more. The Liverpool Street CrossFit memberships provide access to all areas in the 24N Fitness Health Club, as well as, unlimited CrossFit classes and open gym in the CrossFit space.',
      image: '/facilities/crossfit.webp'
    },
    {
      name: 'Sauna',
      description: 'Detox after a hard training session in our bespoke, custom made sauna. Research shows spending time in a sauna daily can improve health dramatically, finding results of, increased metabolism, fat loss, improved cardiovascular and immune functions. Our beautiful Oceanic sauna is the perfect place for you to relax and recover after your workout.',
      image: '/facilities/sauna.webp'
    },
    {
      name: 'Ice Bath',
      description: 'Break the ice and climb into our crystal clear, Ice Bath, handcrafted to the highest standard, using UV technology, offering members the most luxurious cold water therapy experience. The perfect way to destress and improve your wellbeing by spending time in our ice bath, located in our recovery suite, which is large enough to comfortably accommodate two people, meaning you can enjoy taking a cold plunge with a friend or by yourself.',
      image: '/facilities/ice-bath.webp'
    }
  ],

  // Memberships
  memberships: [
    // Health Club Memberships
    {
      category: 'Health Club',
      name: 'Monthly Membership',
      description: 'Our facility is home to a range of premium BLK BOX, Spirit and Concept 2 equipment. 24N Fitness houses all the facilities to diversify your workouts. From yoga to free weights, the gym floor provides customers with a sleek, modern training space. Included in the Health Club membership is unlimited access to gym floor, mind and body studio, including all classes, changing facilities, sauna and ice bath.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Plan-12109',
      type: 'health-club'
    },
    {
      category: 'Health Club',
      name: 'Annual Membership',
      description: 'Save with our annual Health Club membership. Get all the benefits of monthly membership with better value for a full year commitment.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Plan-12883',
      type: 'health-club'
    },
    // CrossFit Memberships
    {
      category: 'CrossFit',
      name: 'Monthly Membership',
      description: 'Liverpool Street CrossFit, owned and housed by 24N Fitness, sits below the Health Club. The CrossFit box is unlike anything of its kind, merging CrossFit with high end luxury fitness. In this remarkable space sits a full, custom built BLK BOX rig, accompanied by ceiling mounted gymnastic rings, a full range of free weights and much more. The Liverpool Street CrossFit memberships provide access to all areas in the 24N Fitness Health Club, as well as, unlimited CrossFit classes and open gym in the CrossFit space.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Plan-12062',
      type: 'crossfit'
    },
    {
      category: 'CrossFit',
      name: 'Annual Membership',
      description: 'Flexible monthly CrossFit membership with no long-term commitment. Perfect for those who want to try CrossFit or have changing schedules.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Plan-12882',
      type: 'crossfit'
    },
    {
      category: 'CrossFit',
      name: '12 Month Commitment',
      description: 'Flexible monthly CrossFit membership with no long-term commitment. Perfect for those who want to try CrossFit or have changing schedules.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Plan-12958',
      type: 'crossfit'
    },
    // Class Packs
    {
      category: 'Class Packs',
      name: 'Day Pass',
      description: 'Try us out with a single day pass. Perfect for visitors or those wanting to experience our facilities before committing to membership.',
      price: '£30',
      link: ' https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Pass-6684',
      type: 'class-pack'
    },
    {
      category: 'Class Packs',
      name: '10 Class Pack',
      description: 'Great value class pack for regular attendees. Includes access to CrossFit classes and Health Club facilities.',
      price: '£270',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Pass-7207',
      type: 'class-pack'
    },
    {
      category: 'Class Packs',
      name: '20 Class Pack',
      description: 'Best value class pack for committed fitness enthusiasts. Maximum savings per class with extended validity.',
      price: '£480',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?purchasable=Pass-7208',
      type: 'class-pack'
    },
    // Transformation Program
    {
      category: 'Transformation',
      name: '6 Week Transformation Program',
      description: 'Comprehensive 6-week program designed to help you lose weight, tone up, and feel stronger and more energised. Build improved confidence, self-esteem, and overall health while establishing a solid foundation of knowledge, habits, and routines to maintain your progress long after the program ends.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?code=951649c6ceea346c&purchasable=Plan-13008',
      type: 'transformation'
    },
    {
      category: 'Transformation',
      name: '8 Week Transformation Program',
      description: 'Comprehensive 8-week program designed to help you lose weight, tone up, and feel stronger and more energised. Build improved confidence, self-esteem, and overall health while establishing a solid foundation of knowledge, habits, and routines to maintain your progress long after the program ends.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?code=12a775d07805800a&purchasable=Plan-13009',
      type: 'transformation'
    },
    {
      category: 'Transformation',
      name: '12 Week Transformation Program',
      description: 'Comprehensive 12-week program designed to help you lose weight, tone up, and feel stronger and more energised. Build improved confidence, self-esteem, and overall health while establishing a solid foundation of knowledge, habits, and routines to maintain your progress long after the program ends.',
      price: 'Contact for pricing',
      link: 'https://www.wodboard.com/locations/877/signup/6399895bde?code=40fa9c7d6fb6f7a8&purchasable=Plan-13010',
      type: 'transformation'
    }
  ]
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