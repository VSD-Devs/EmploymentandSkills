import { RoleData } from '@/types/role';

export const businessRoles: RoleData = {
  'team-leader': {
    title: 'Team Leader',
    slug: 'team-leader',
    description: 'A Team Leader manages and motivates a team to achieve business objectives, ensuring efficient operations and high performance.',
    salary: {
      entry: '£25,000',
      experienced: '£35,000',
      senior: '£45,000'
    },
    paths: {
      university: {
        title: 'Business Management Degree',
        description: 'A degree in Business Management, Leadership, or related field provides theoretical knowledge and practical management skills.',
        requirements: [
          '3 A-levels (or equivalent)',
          'GCSE English and Mathematics at grade C/4 or above',
          'Good communication and leadership potential'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Sheffield',
          'Leeds Beckett University',
          'York St John University'
        ]
      },
      apprenticeship: {
        title: 'Team Leader/Supervisor Apprenticeship',
        description: 'Develop leadership skills while working, combining practical experience with management theory.',
        requirements: [
          '5 GCSEs including English and Mathematics at grade C/4 or above',
          'Strong communication skills',
          'Leadership potential'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 3',
        providers: [
          'Sheffield Chamber of Commerce',
          'Leeds City College',
          'Barnsley College'
        ]
      }
    },
    skills: [
      'Leadership',
      'Communication',
      'Problem Solving',
      'Project Management',
      'Team Building',
      'Performance Management'
    ],
    dayToDay: [
      'Managing team performance and productivity',
      'Conducting team meetings and briefings',
      'Setting goals and objectives',
      'Providing coaching and support',
      'Monitoring KPIs and targets',
      'Handling team issues and conflicts'
    ],
    workEnvironment: 'Team Leaders typically work in office environments or operational settings, with regular interaction with team members and other departments. The role may involve some evening or weekend work depending on the business sector.',
    futureProspects: [
      'Operations Manager',
      'Department Head',
      'Regional Manager',
      'Business Unit Director'
    ],
    requiredQualifications: [
      'GCSE English and Mathematics at grade C/4 or above',
      'Previous supervisory experience preferred'
    ],
    desiredQualifications: [
      'Business Management qualification',
      'Leadership and Management certification',
      'Industry-specific qualifications'
    ],
    industryTrends: [
      'Increasing focus on remote team management',
      'Growing importance of digital skills',
      'Emphasis on emotional intelligence and soft skills',
      'Rising demand for data-driven decision making'
    ],
    toolsAndTech: [
      'Project management software',
      'Communication platforms',
      'Performance tracking tools',
      'Microsoft Office Suite',
      'Team collaboration software'
    ],
    workSchedule: 'Standard business hours with some flexibility required for team needs',
    remoteWorkOptions: 'Hybrid working available in many organisations, combining office and remote management',
    careerPathway: {
      nextSteps: [
        'Senior Team Leader',
        'Operations Manager',
        'Department Manager'
      ],
      potentialRoles: [
        'Business Unit Manager',
        'Regional Director',
        'Operations Director'
      ]
    }
  },
  'financial-advisor': {
    title: 'Financial Advisor',
    slug: 'financial-advisor',
    description: 'A Financial Advisor helps individuals and businesses make informed decisions about their finances, investments, and financial planning.',
    salary: {
      entry: '£25,000',
      experienced: '£45,000',
      senior: '£65,000'
    },
    paths: {
      university: {
        title: 'Finance or Economics Degree',
        description: 'A degree in Finance, Economics, or related field provides essential knowledge of financial markets and planning.',
        requirements: [
          '3 A-levels (or equivalent) including Mathematics',
          'GCSE English and Mathematics at grade B/6 or above',
          'Strong analytical skills'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Sheffield',
          'University of Leeds',
          'University of York'
        ]
      },
      apprenticeship: {
        title: 'Financial Services Professional Apprenticeship',
        description: 'Learn while working in a financial services environment, gaining qualifications and practical experience.',
        requirements: [
          '5 GCSEs including English and Mathematics at grade B/6 or above',
          'Good numerical and analytical skills',
          'Strong communication abilities'
        ],
        duration: '24-36 months',
        qualificationLevel: 'Level 6',
        providers: [
          'Kaplan Financial',
          'BPP Professional Education',
          'First Intuition'
        ]
      }
    },
    skills: [
      'Financial Analysis',
      'Risk Assessment',
      'Communication',
      'Problem Solving',
      'Regulatory Knowledge',
      'Customer Service'
    ],
    dayToDay: [
      'Meeting with clients to discuss financial goals',
      'Analyzing financial information and market trends',
      'Creating financial plans and recommendations',
      'Monitoring client portfolios',
      'Ensuring compliance with regulations',
      'Maintaining client relationships'
    ],
    workEnvironment: 'Financial Advisors typically work in office environments, with regular client meetings either in person or virtually. The role may involve some evening appointments to accommodate client schedules.',
    futureProspects: [
      'Senior Financial Advisor',
      'Wealth Manager',
      'Financial Planning Manager',
      'Independent Financial Advisor'
    ],
    requiredQualifications: [
      'Level 4 Diploma in Financial Planning',
      'FCA registration',
      'GCSE English and Mathematics at grade B/6 or above'
    ],
    desiredQualifications: [
      'Chartered Financial Planner status',
      'Additional specialist certifications',
      'Degree in Finance or related field'
    ],
    industryTrends: [
      'Growing importance of ESG investing',
      'Increasing use of financial technology',
      'Rising demand for retirement planning',
      'Focus on ethical investing'
    ],
    toolsAndTech: [
      'Financial planning software',
      'Investment platforms',
      'CRM systems',
      'Risk analysis tools',
      'Portfolio management software'
    ],
    workSchedule: 'Standard business hours with flexibility for client meetings',
    remoteWorkOptions: 'Hybrid working available, combining office-based and virtual client meetings',
    careerPathway: {
      nextSteps: [
        'Senior Financial Advisor',
        'Wealth Manager',
        'Team Leader'
      ],
      potentialRoles: [
        'Head of Financial Planning',
        'Regional Director',
        'Practice Owner'
      ]
    }
  }
}; 