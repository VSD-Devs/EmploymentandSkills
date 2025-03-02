import { SectorData } from '../types/sector';

export const sectorData: SectorData = {
  'healthcare': {
    slug: 'healthcare',
    title: 'Health and social care',
    category: 'health',
    description: 'The health and social care sector focuses on providing physical, emotional and social help to support people\'s health.',
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
    }
  },
  'digital-tech': {
    slug: 'digital-tech',
    title: 'Digital & Technology',
    category: 'digital',
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
    }
  },
  'manufacturing': {
    slug: 'manufacturing',
    title: 'Advanced Manufacturing',
    category: 'engineering',
    description: `Yorkshire's manufacturing sector combines traditional expertise with cutting-edge technology and sustainable practices.`,
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
    }
  },
  'construction': {
    slug: 'construction',
    title: 'Construction & Infrastructure',
    category: 'construction',
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
    }
  },
  'logistics-transport': {
    slug: 'logistics-transport',
    title: 'Logistics & Transport',
    category: 'business',
    description: `Yorkshire's strategic location makes it a hub for logistics and transport, connecting businesses across the UK and beyond.`,
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
    }
  },
  'creative-media': {
    slug: 'creative-media',
    title: 'Creative & Digital Media',
    category: 'creative',
    description: `Yorkshire's creative sector is thriving with opportunities in film, television, gaming, and digital content creation.`,
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
    }
  },
  'hospitality-tourism': {
    slug: 'hospitality-tourism',
    title: 'Hospitality & Tourism',
    category: 'hospitality',
    description: `Yorkshire's tourism and hospitality sector offers exciting careers in hotels, restaurants, events, and visitor attractions.`,
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
    }
  },
  'business-finance': {
    slug: 'business-finance',
    title: 'Business & Professional Services',
    category: 'business',
    description: 'Yorkshire\'s business sector offers diverse opportunities in consulting, finance, management, and professional services, with strong growth in fintech and digital transformation.',
    stats: [
      {
        icon: 'building',
        number: '3,500+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '65,000+',
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
          roles: ['Business Development Executive', 'Marketing Assistant', 'Project Coordinator']
        },
        {
          title: 'Intermediate',
          roles: ['Account Manager', 'Business Analyst', 'Operations Manager']
        },
        {
          title: 'Advanced level',
          roles: ['Head of Operations', 'Commercial Director', 'Management Consultant']
        }
      ]
    },
    skills: {
      general: [
        'Strategic thinking',
        'Project management',
        'Communication',
        'Leadership',
        'Problem solving'
      ],
      specialist: [
        'Data analysis',
        'Digital marketing',
        'Financial planning',
        'Risk management',
        'Business strategy'
      ]
    }
  },
  'clean-energy': {
    slug: 'clean-energy',
    title: 'Clean Energy & Environmental',
    category: 'engineering',
    description: 'A rapidly growing sector in Yorkshire, focusing on renewable energy, sustainability, and environmental services.',
    stats: [
      {
        icon: 'building',
        number: '800+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '25,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£40,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Renewable Energy Technician', 'Environmental Officer', 'Sustainability Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Energy Consultant', 'Environmental Specialist', 'Sustainability Coordinator']
        },
        {
          title: 'Advanced level',
          roles: ['Renewable Energy Manager', 'Environmental Director', 'Head of Sustainability']
        }
      ]
    },
    skills: {
      general: [
        'Project management',
        'Data analysis',
        'Communication',
        'Problem solving',
        'Research'
      ],
      specialist: [
        'Renewable technologies',
        'Environmental assessment',
        'Carbon management',
        'Energy efficiency',
        'Environmental legislation'
      ]
    }
  },
  'education': {
    slug: 'education',
    title: 'Education & Training',
    category: 'education',
    description: 'The education sector in Yorkshire provides opportunities in schools, colleges, universities, and training organisations.',
    stats: [
      {
        icon: 'building',
        number: '1,200+',
        label: 'Institutions'
      },
      {
        icon: 'users',
        number: '95,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£34,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Teaching Assistant', 'Learning Support', 'Training Administrator']
        },
        {
          title: 'Intermediate',
          roles: ['Teacher', 'Trainer', 'Education Coordinator']
        },
        {
          title: 'Advanced level',
          roles: ['Head Teacher', 'Education Manager', 'Training Director']
        }
      ]
    },
    skills: {
      general: [
        'Communication',
        'Organisation',
        'Leadership',
        'Problem solving',
        'Time management'
      ],
      specialist: [
        'Pedagogy',
        'Curriculum development',
        'Assessment',
        'Special education',
        'Educational technology'
      ]
    }
  },
  'financial-services': {
    slug: 'financial-services',
    title: 'Financial Services',
    category: 'business',
    description: `Yorkshire's financial sector offers careers in banking, insurance, accounting, and fintech.`,
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
        number: '£45,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Finance Assistant', 'Junior Accountant', 'Banking Administrator']
        },
        {
          title: 'Intermediate',
          roles: ['Financial Advisor', 'Accountant', 'Investment Analyst']
        },
        {
          title: 'Advanced level',
          roles: ['Finance Director', 'Senior Accountant', 'Investment Manager']
        }
      ]
    },
    skills: {
      general: [
        'Numeracy',
        'Analysis',
        'Problem solving',
        'Communication',
        'Attention to detail'
      ],
      specialist: [
        'Financial analysis',
        'Accounting standards',
        'Risk assessment',
        'Investment management',
        'Financial software'
      ]
    }
  },
  'public-services': {
    slug: 'public-services',
    title: 'Public Services',
    category: 'business',
    description: 'Careers in local government, emergency services, and public sector organisations across Yorkshire.',
    stats: [
      {
        icon: 'building',
        number: '500+',
        label: 'Organisations'
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
          roles: ['Administrative Officer', 'Customer Service Officer', 'Support Worker']
        },
        {
          title: 'Intermediate',
          roles: ['Policy Officer', 'Project Manager', 'Service Manager']
        },
        {
          title: 'Advanced level',
          roles: ['Senior Manager', 'Head of Service', 'Director']
        }
      ]
    },
    skills: {
      general: [
        'Communication',
        'Organisation',
        'Problem solving',
        'Team working',
        'Public service'
      ],
      specialist: [
        'Policy development',
        'Public administration',
        'Stakeholder management',
        'Service delivery',
        'Governance'
      ]
    }
  },
  'plumbing-heating': {
    slug: 'plumbing-heating',
    title: 'Plumbing & Heating',
    category: 'trades',
    description: 'A vital sector providing essential services in domestic and commercial plumbing, heating systems, and renewable energy installations.',
    stats: [
      {
        icon: 'building',
        number: '1,200+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '15,000+',
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
          roles: ['Plumbing Apprentice', 'Heating Engineer Assistant', 'Installation Helper']
        },
        {
          title: 'Intermediate',
          roles: ['Qualified Plumber', 'Heating Engineer', 'Gas Safe Engineer']
        },
        {
          title: 'Advanced level',
          roles: ['Master Plumber', 'Renewable Energy Specialist', 'Plumbing Business Owner']
        }
      ]
    },
    skills: {
      general: [
        'Problem solving',
        'Customer service',
        'Time management',
        'Mathematics',
        'Physical fitness'
      ],
      specialist: [
        'Pipe fitting',
        'Heating systems',
        'Gas safety',
        'Renewable technologies',
        'Building regulations'
      ]
    }
  },
  'electrical': {
    slug: 'electrical',
    title: 'Electrical',
    category: 'trades',
    description: 'A dynamic sector covering domestic, commercial and industrial electrical installations, maintenance and renewable energy systems.',
    stats: [
      {
        icon: 'building',
        number: '1,500+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '18,000+',
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
          roles: ['Electrical Apprentice', 'Electrical Mate', 'Installation Assistant']
        },
        {
          title: 'Intermediate',
          roles: ['Qualified Electrician', 'Maintenance Electrician', 'Installation Electrician']
        },
        {
          title: 'Advanced level',
          roles: ['Master Electrician', 'Electrical Contractor', 'Electrical Business Owner']
        }
      ]
    },
    skills: {
      general: [
        'Problem solving',
        'Attention to detail',
        'Safety awareness',
        'Mathematics',
        'Communication'
      ],
      specialist: [
        'Circuit testing',
        'Electrical regulations',
        'Smart systems',
        'Renewable integration',
        'Fault finding'
      ]
    }
  },
  'automotive': {
    slug: 'automotive',
    title: 'Automotive',
    category: 'trades',
    description: 'A sector combining traditional vehicle maintenance with cutting-edge electric and hybrid vehicle technology.',
    stats: [
      {
        icon: 'building',
        number: '900+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '12,000+',
        label: 'Employee jobs'
      },
      {
        icon: 'banknote',
        number: '£30,000',
        label: 'Average earnings'
      }
    ],
    careerProgression: {
      title: 'Career progression',
      levels: [
        {
          title: 'Entry level',
          roles: ['Mechanic Apprentice', 'Service Technician', 'Parts Advisor']
        },
        {
          title: 'Intermediate',
          roles: ['Qualified Mechanic', 'Diagnostic Technician', 'MOT Tester']
        },
        {
          title: 'Advanced level',
          roles: ['Master Technician', 'Workshop Manager', 'Garage Owner']
        }
      ]
    },
    skills: {
      general: [
        'Problem solving',
        'Customer service',
        'Technical knowledge',
        'Attention to detail',
        'Digital literacy'
      ],
      specialist: [
        'Diagnostics',
        'Electric vehicles',
        'Engine management',
        'Hybrid systems',
        'Vehicle electronics'
      ]
    }
  },
  'agriculture': {
    slug: 'agriculture',
    title: 'Agriculture & Horticulture',
    category: 'trades',
    description: 'A diverse sector combining traditional farming with modern agricultural technology and sustainable practices.',
    stats: [
      {
        icon: 'building',
        number: '2,500+',
        label: 'Businesses'
      },
      {
        icon: 'users',
        number: '22,000+',
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
          roles: ['Farm Worker', 'Horticulture Assistant', 'Agricultural Operative']
        },
        {
          title: 'Intermediate',
          roles: ['Skilled Farm Worker', 'Crop Specialist', 'Livestock Manager']
        },
        {
          title: 'Advanced level',
          roles: ['Farm Manager', 'Agricultural Consultant', 'Farm Business Owner']
        }
      ]
    },
    skills: {
      general: [
        'Physical stamina',
        'Problem solving',
        'Business awareness',
        'Environmental awareness',
        'Technology skills'
      ],
      specialist: [
        'Crop management',
        'Animal husbandry',
        'Machinery operation',
        'Sustainable farming',
        'Precision agriculture'
      ]
    }
  }
}; 