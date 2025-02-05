import { RoleData } from '@/types/role';

export const roleData: RoleData = {
  'financial-advisor': {
    title: 'Financial Advisor',
    slug: 'financial-advisor',
    description: 'Financial advisors help individuals and organisations make informed decisions about their money, investments, and financial planning.',
    salary: {
      entry: '£25,000',
      experienced: '£45,000',
      senior: '£75,000+'
    },
    paths: {
      university: {
        title: 'University Degree Route',
        description: 'Obtain a degree in finance, economics, business, or a related field, followed by professional qualifications.',
        requirements: [
          '3 A-levels or equivalent (including Maths)',
          'Undergraduate degree in relevant subject',
          'Professional qualifications (e.g., Diploma in Regulated Financial Planning)'
        ],
        duration: '3-4 years + 1 year for professional qualifications',
        qualificationLevel: 'Level 6 (Degree) + Level 4 (Professional)',
        providers: [
          'University of Sheffield',
          'Sheffield Hallam University',
          'University of Leeds'
        ]
      },
      apprenticeship: {
        title: 'Financial Advisor Apprenticeship',
        description: 'Earn while you learn through a financial services apprenticeship programme.',
        requirements: [
          '5 GCSEs at grades 9-4 (A*-C) including English and Maths',
          'Level 3 apprenticeship in a related field',
          'Willingness to study for professional qualifications'
        ],
        duration: '24-36 months',
        qualificationLevel: 'Level 4/6',
        providers: [
          'Kaplan Financial',
          'BPP Professional Education',
          'Local financial services firms'
        ]
      }
    },
    skills: [
      'Financial analysis',
      'Communication',
      'Problem-solving',
      'Attention to detail',
      'Regulatory knowledge',
      'Customer service',
      'Numeracy'
    ],
    dayToDay: [
      'Meeting with clients to discuss financial goals',
      'Analysing financial information and market trends',
      'Creating financial plans and investment strategies',
      'Maintaining client relationships and providing ongoing advice',
      'Keeping up with financial regulations and market changes',
      'Completing regulatory paperwork and maintaining records'
    ],
    workEnvironment: 'Office-based with client meetings, some remote work possible. Regular working hours with occasional evening meetings to accommodate clients.'
  },
  'data-analyst': {
    title: 'Data Analyst',
    slug: 'data-analyst',
    description: 'Data analysts collect, process, and analyse large sets of data to identify trends and patterns that help organisations make better decisions.',
    salary: {
      entry: '£25,000',
      experienced: '£40,000',
      senior: '£60,000+'
    },
    paths: {
      university: {
        title: 'University Degree Route',
        description: 'Study for a degree in data science, statistics, mathematics, or a related field.',
        requirements: [
          '3 A-levels or equivalent (including Maths)',
          'Degree in relevant subject',
          'Optional postgraduate qualification'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'University of Sheffield',
          'Sheffield Hallam University',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Data Analyst Apprenticeship',
        description: 'Combine work and study through a data analyst apprenticeship programme.',
        requirements: [
          '5 GCSEs at grades 9-4 (A*-C) including English and Maths',
          'Good analytical skills',
          'Interest in technology and data'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 4',
        providers: [
          'QA Apprenticeships',
          'Baltic Training',
          'Local tech companies'
        ]
      }
    },
    skills: [
      'Data analysis',
      'Statistical methods',
      'SQL',
      'Python or R',
      'Data visualisation',
      'Problem-solving',
      'Communication'
    ],
    dayToDay: [
      'Collecting and cleaning data',
      'Creating and maintaining databases',
      'Analysing data sets to identify trends',
      'Creating visualisations and reports',
      'Presenting findings to stakeholders',
      'Collaborating with teams to understand data needs'
    ],
    workEnvironment: 'Office-based or remote work. Regular working hours with flexibility common in many organisations.'
  }
}; 