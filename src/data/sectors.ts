import { SectorData } from '../types/sector';

export const sectorData: SectorData = {
  'healthcare': {
    title: 'Health and social care',
    description: 'The health and social care sector focuses on providing physical, emotional and social help to support people&apos;s health.',
    stats: [
      {
        icon: 'building',
        number: '2,000+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '90,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£28,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Care Worker', 'Healthcare Assistant', 'Support Worker']
        },
        {
          title: 'Intermediate',
          roles: ['Senior Care Worker', 'Team Leader', 'Specialist Support']
        },
        {
          title: 'Advanced level',
          roles: ['Registered Nurse', 'Care Manager', 'Specialist Practitioner']
        }
      ]
    },
    skills: {
      general: [
        'Communications',
        'Customer service',
        'Planning',
        'Management',
        'Leadership'
      ],
      specialist: [
        'Nursing',
        'Personal Care',
        'Midwifery',
        'Mental Health',
        'Surgery'
      ]
    },
    greenJobs: {
      title: 'Green health and social care',
      description: 'Many health and social care companies are working to become more sustainable. There are new pathways beginning to take root including:',
      roles: [
        'Public health practitioner',
        'Environmental health inspector'
      ]
    }
  },
  'digital-tech': {
    title: 'Digital & Technology',
    description: 'The digital sector is one of the fastest-growing sectors in Yorkshire, offering diverse opportunities in software, data, and digital transformation.',
    stats: [
      {
        icon: 'building',
        number: '1,500+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '45,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£42,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Junior Developer', 'IT Support', 'Digital Marketing Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Software Developer', 'Data Analyst', 'Digital Project Manager']
        },
        {
          title: 'Advanced level',
          roles: ['Technical Architect', 'Lead Developer', 'Head of Digital']
        }
      ]
    },
    skills: {
      general: [
        'Problem solving',
        'Communication',
        'Project management',
        'Teamwork',
        'Attention to detail'
      ],
      specialist: [
        'Programming',
        'Web Development',
        'Data Analysis',
        'Cybersecurity',
        'Cloud Computing'
      ]
    },
    greenJobs: {
      title: 'Green technology',
      description: 'The digital sector is playing a crucial role in sustainability through green technology initiatives:',
      roles: [
        'Green IT Specialist',
        'Sustainability Software Developer',
        'Clean Tech Project Manager'
      ]
    }
  },
  'manufacturing': {
    title: 'Advanced Manufacturing',
    description: 'Yorkshire&apos;s manufacturing sector combines traditional expertise with cutting-edge technology and sustainable practices.',
    stats: [
      {
        icon: 'building',
        number: '3,000+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '110,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£35,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Production Operative', 'Quality Inspector', 'Manufacturing Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Production Supervisor', 'Manufacturing Technician', 'Quality Controller']
        },
        {
          title: 'Advanced level',
          roles: ['Production Manager', 'Manufacturing Engineer', 'Operations Director']
        }
      ]
    },
    skills: {
      general: [
        'Health and safety',
        'Quality control',
        'Problem solving',
        'Team leadership',
        'Process improvement'
      ],
      specialist: [
        'CAD/CAM',
        'Lean Manufacturing',
        'Robotics',
        'CNC Operation',
        'Industrial Automation'
      ]
    },
    greenJobs: {
      title: 'Sustainable Manufacturing',
      description: 'Manufacturing is evolving to meet environmental challenges with new roles in sustainable production:',
      roles: [
        'Sustainable Production Engineer',
        'Clean Technology Specialist',
        'Circular Economy Manager'
      ]
    }
  },
  'construction': {
    title: 'Construction & Infrastructure',
    description: 'The construction sector in Yorkshire is vital for building sustainable communities and modern infrastructure, offering diverse career paths from trades to project management.',
    stats: [
      {
        icon: 'building',
        number: '4,500+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '75,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£32,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Apprentice Builder', 'Construction Labourer', 'Trade Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Skilled Tradesperson', 'Site Supervisor', 'Building Technician']
        },
        {
          title: 'Advanced level',
          roles: ['Project Manager', 'Construction Manager', 'Civil Engineer']
        }
      ]
    },
    skills: {
      general: [
        'Health and safety',
        'Problem solving',
        'Team working',
        'Communication',
        'Project planning'
      ],
      specialist: [
        'Building techniques',
        'Blueprint reading',
        'Site management',
        'Equipment operation',
        'Quality control'
      ]
    },
    greenJobs: {
      title: 'Sustainable Construction',
      description: 'The construction industry is embracing sustainable building practices and green technologies:',
      roles: [
        'Sustainable Building Specialist',
        'Green Building Consultant',
        'Environmental Compliance Manager'
      ]
    }
  },
  'logistics-transport': {
    title: 'Logistics & Transport',
    description: 'Yorkshire&apos;s strategic location makes it a hub for logistics and transport, connecting businesses across the UK and beyond.',
    stats: [
      {
        icon: 'building',
        number: '2,800+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '65,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£29,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Warehouse Operative', 'Delivery Driver', 'Transport Clerk']
        },
        {
          title: 'Intermediate',
          roles: ['Team Leader', 'Fleet Coordinator', 'Transport Planner']
        },
        {
          title: 'Advanced level',
          roles: ['Logistics Manager', 'Supply Chain Manager', 'Operations Director']
        }
      ]
    },
    skills: {
      general: [
        'Organisation',
        'Time management',
        'Communication',
        'Problem solving',
        'Customer service'
      ],
      specialist: [
        'Route planning',
        'Inventory management',
        'Supply chain operations',
        'Transport regulations',
        'Fleet management'
      ]
    },
    greenJobs: {
      title: 'Green Logistics',
      description: 'The logistics sector is transforming to reduce environmental impact through sustainable practices:',
      roles: [
        'Sustainable Transport Manager',
        'Electric Fleet Coordinator',
        'Green Supply Chain Specialist'
      ]
    }
  },
  'creative-media': {
    title: 'Creative & Digital Media',
    description: 'Yorkshire&apos;s creative sector is thriving with opportunities in film, television, gaming, and digital content creation.',
    stats: [
      {
        icon: 'building',
        number: '1,800+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '35,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£31,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Junior Designer', 'Content Creator', 'Production Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Graphic Designer', 'Video Editor', 'Digital Producer']
        },
        {
          title: 'Advanced level',
          roles: ['Creative Director', 'Head of Production', 'Studio Manager']
        }
      ]
    },
    skills: {
      general: [
        'Creativity',
        'Communication',
        'Project management',
        'Time management',
        'Collaboration'
      ],
      specialist: [
        'Design software',
        'Video production',
        'Animation',
        'Social media',
        'Content strategy'
      ]
    },
    greenJobs: {
      title: 'Sustainable Media',
      description: 'The creative sector is embracing sustainable production methods and eco-friendly practices:',
      roles: [
        'Sustainable Production Manager',
        'Eco-friendly Design Specialist',
        'Green Screen Production Coordinator'
      ]
    }
  },
  'hospitality-tourism': {
    title: 'Hospitality & Tourism',
    description: 'Yorkshire&apos;s tourism and hospitality sector offers exciting careers in hotels, restaurants, events, and visitor attractions.',
    stats: [
      {
        icon: 'building',
        number: '3,200+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '85,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£26,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Front Desk Agent', 'Server', 'Kitchen Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Team Leader', 'Chef', 'Events Coordinator']
        },
        {
          title: 'Advanced level',
          roles: ['Hotel Manager', 'Restaurant Manager', 'Tourism Director']
        }
      ]
    },
    skills: {
      general: [
        'Customer service',
        'Communication',
        'Team working',
        'Problem solving',
        'Organisation'
      ],
      specialist: [
        'Food safety',
        'Booking systems',
        'Event management',
        'Revenue management',
        'Foreign languages'
      ]
    },
    greenJobs: {
      title: 'Sustainable Tourism',
      description: 'The hospitality sector is developing sustainable tourism practices and eco-friendly operations:',
      roles: [
        'Sustainable Tourism Manager',
        'Eco-Hotel Coordinator',
        'Green Events Specialist'
      ]
    }
  }
}; 