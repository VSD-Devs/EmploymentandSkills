import { RoleData } from '@/types/role';

export const hospitalityRoles: RoleData = {
  'events-coordinator': {
    title: 'Events Coordinator',
    slug: 'events-coordinator',
    description: 'Events Coordinators plan and organise events, conferences, and functions, ensuring smooth delivery and client satisfaction.',
    salary: {
      entry: '£20,000',
      experienced: '£28,000',
      senior: '£35,000'
    },
    paths: {
      university: {
        title: 'Events Management Degree',
        description: 'A degree covering event planning, hospitality management, and business principles.',
        requirements: [
          'A-levels or equivalent',
          'GCSE English and Mathematics at grade C/4 or above',
          'Good organisational skills'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'Leeds Beckett University',
          'Sheffield Hallam University',
          'York St John University'
        ]
      },
      apprenticeship: {
        title: 'Events Assistant Apprenticeship',
        description: 'Learn events management while working in hotels, venues, or events companies.',
        requirements: [
          'GCSEs including English and Mathematics',
          'Good communication skills',
          'Customer service focus'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 3',
        providers: [
          'Hotels and venues',
          'Events companies',
          'Training providers'
        ]
      }
    },
    skills: [
      'Event Planning',
      'Customer Service',
      'Budget Management',
      'Problem Solving',
      'Negotiation',
      'Time Management'
    ],
    dayToDay: [
      'Planning event logistics',
      'Client meetings',
      'Supplier coordination',
      'Budget tracking',
      'On-site management',
      'Post-event evaluation'
    ],
    workEnvironment: 'Work in hotels, conference centres, or events venues. Involves some evening and weekend work for events.',
    futureProspects: [
      'Senior Events Manager',
      'Venue Manager',
      'Wedding Planner',
      'Conference Director'
    ],
    requiredQualifications: [
      'Events management qualification',
      'Customer service experience',
      'Health and safety awareness'
    ],
    desiredQualifications: [
      'Professional events certifications',
      'First aid qualification',
      'Marketing qualifications'
    ],
    industryTrends: [
      'Virtual and hybrid events',
      'Sustainable events',
      'Technology integration',
      'Experiential events'
    ],
    toolsAndTech: [
      'Event management software',
      'Booking systems',
      'Social media platforms',
      'Project management tools',
      'Audio-visual equipment'
    ],
    workSchedule: 'Flexible hours including evenings and weekends',
    remoteWorkOptions: 'Hybrid working possible with on-site presence for events',
    careerPathway: {
      nextSteps: [
        'Senior Events Coordinator',
        'Events Manager',
        'Venue Coordinator'
      ],
      potentialRoles: [
        'Events Director',
        'Venue Manager',
        'Operations Manager'
      ]
    }
  },
  'hospitality-manager': {
    title: 'Hospitality Manager',
    slug: 'hospitality-manager',
    description: 'Hospitality Managers oversee the operations of hotels, restaurants, or leisure facilities, ensuring excellent service and business success.',
    salary: {
      entry: '£25,000',
      experienced: '£35,000',
      senior: '£45,000'
    },
    paths: {
      university: {
        title: 'Hospitality Management Degree',
        description: 'A degree covering all aspects of hospitality operations and management.',
        requirements: [
          'A-levels or equivalent',
          'GCSE English and Mathematics at grade C/4 or above',
          'Customer service experience preferred'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'Sheffield Hallam University',
          'Leeds Beckett University',
          'University of Huddersfield'
        ]
      },
      apprenticeship: {
        title: 'Hospitality Manager Apprenticeship',
        description: 'Develop management skills while working in the hospitality industry.',
        requirements: [
          'GCSEs including English and Mathematics',
          'Customer service experience',
          'Leadership potential'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 4',
        providers: [
          'Hotels and resorts',
          'Restaurant groups',
          'Hospitality companies'
        ]
      }
    },
    skills: [
      'Operations Management',
      'Customer Service',
      'Staff Leadership',
      'Financial Management',
      'Problem Solving',
      'Quality Control'
    ],
    dayToDay: [
      'Managing staff rotas',
      'Handling customer feedback',
      'Monitoring budgets',
      'Training team members',
      'Ensuring service standards',
      'Supplier management'
    ],
    workEnvironment: 'Work in hotels, restaurants, or leisure facilities. Involves regular interaction with staff and customers.',
    futureProspects: [
      'General Manager',
      'Operations Director',
      'Area Manager',
      'Business Owner'
    ],
    requiredQualifications: [
      'Hospitality management qualification',
      'Food safety certification',
      'First aid certificate'
    ],
    desiredQualifications: [
      'Wine and beverage certifications',
      'Revenue management qualification',
      'Leadership training'
    ],
    industryTrends: [
      'Digital guest experiences',
      'Sustainable practices',
      'Personalised service',
      'Health and wellness focus'
    ],
    toolsAndTech: [
      'Property management systems',
      'Point of sale systems',
      'Revenue management software',
      'Staff scheduling tools',
      'Customer feedback platforms'
    ],
    workSchedule: 'Flexible hours including evenings, weekends and holidays',
    remoteWorkOptions: 'Limited - role requires regular on-site presence',
    careerPathway: {
      nextSteps: [
        'Senior Manager',
        'Operations Manager',
        'Area Manager'
      ],
      potentialRoles: [
        'General Manager',
        'Regional Director',
        'Business Owner'
      ]
    }
  }
}; 