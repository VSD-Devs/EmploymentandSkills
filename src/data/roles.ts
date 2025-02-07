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
  },
  'care-worker': {
    title: 'Care Worker',
    slug: 'care-worker',
    description: 'Care workers provide hands-on care and support to people who need help with their daily lives, whether in their own homes, care homes, or community settings.',
    salary: {
      entry: '£18,000',
      experienced: '£22,000',
      senior: '£25,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'While a degree is not required, you can study health and social care at university to enhance your career prospects.',
        requirements: [
          '2-3 A-levels or equivalent',
          'Degree in Health and Social Care or related field',
          'Enhanced DBS check'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Care Worker Apprenticeship',
        description: 'Learn while working in a care setting through an apprenticeship programme.',
        requirements: [
          'GCSEs in English and Maths (Grade 4/C or above)',
          'Enhanced DBS check',
          'Good communication skills'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 2/3',
        providers: [
          'Local care homes',
          'NHS trusts',
          'Care agencies'
        ]
      }
    },
    skills: [
      'Personal care',
      'Communication',
      'Empathy',
      'Physical stamina',
      'Patience',
      'Record keeping',
      'Health and safety awareness'
    ],
    dayToDay: [
      'Helping with personal care needs',
      'Supporting with meals and medication',
      'Assisting with mobility',
      'Recording care activities',
      'Supporting social activities',
      'Monitoring health and wellbeing'
    ],
    workEnvironment: 'Work can be in care homes, private homes, or community settings. Involves shift work including evenings, weekends, and possibly nights. Physical work with a focus on personal care and support.'
  },
  'healthcare-assistant': {
    title: 'Healthcare Assistant',
    slug: 'healthcare-assistant',
    description: 'Healthcare assistants work in hospitals or community settings, supporting nurses and other healthcare professionals to provide patient care.',
    salary: {
      entry: '£18,500',
      experienced: '£23,000',
      senior: '£28,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'While not required, you can study healthcare-related courses to progress to nursing or other healthcare professions.',
        requirements: [
          '2-3 A-levels or equivalent',
          'Degree in Health Studies or related field',
          'Enhanced DBS check'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Healthcare Assistant Apprenticeship',
        description: 'Gain qualifications while working in a healthcare setting.',
        requirements: [
          'GCSEs in English and Maths (Grade 4/C or above)',
          'Enhanced DBS check',
          'Good communication skills'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 2/3',
        providers: [
          'NHS trusts',
          'Private healthcare providers',
          'Community healthcare services'
        ]
      }
    },
    skills: [
      'Clinical skills',
      'Patient care',
      'Communication',
      'Teamwork',
      'Record keeping',
      'Infection control',
      'Health and safety'
    ],
    dayToDay: [
      'Taking patient observations',
      'Assisting with personal care',
      'Supporting medical procedures',
      'Maintaining patient records',
      'Sterilising equipment',
      'Supporting ward activities'
    ],
    workEnvironment: 'Usually hospital-based but can work in clinics or community settings. Involves shift work including nights and weekends. Physical work with direct patient contact in a clinical setting.'
  },
  'support-worker': {
    title: 'Support Worker',
    slug: 'support-worker',
    description: 'Support workers help vulnerable people to live independently, providing emotional support and practical assistance with daily activities.',
    salary: {
      entry: '£18,500',
      experienced: '£23,000',
      senior: '£27,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'A degree can help progression to senior roles or specialised support work.',
        requirements: [
          '2-3 A-levels or equivalent',
          'Degree in Social Work, Psychology, or related field',
          'Enhanced DBS check'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Support Worker Apprenticeship',
        description: 'Learn while working with vulnerable individuals or groups.',
        requirements: [
          'GCSEs in English and Maths (Grade 4/C or above)',
          'Enhanced DBS check',
          'Good communication skills'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 2/3',
        providers: [
          'Care providers',
          'Charities',
          'Local authorities'
        ]
      }
    },
    skills: [
      'Person-centred support',
      'Communication',
      'Problem solving',
      'Emotional resilience',
      'Safeguarding',
      'Risk assessment',
      'First aid'
    ],
    dayToDay: [
      'Supporting daily living activities',
      'Providing emotional support',
      'Accompanying to appointments',
      'Developing support plans',
      'Liaising with other professionals',
      'Recording activities and progress'
    ],
    workEnvironment: 'Can work in supported living settings, community centres, or clients\' homes. May involve shift work and lone working. Emotionally demanding but rewarding work.'
  },
  'senior-care-worker': {
    title: 'Senior Care Worker',
    slug: 'senior-care-worker',
    description: 'Senior care workers lead teams of care workers, ensuring high standards of care while providing direct support to service users.',
    salary: {
      entry: '£23,000',
      experienced: '£28,000',
      senior: '£32,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'A degree can support progression to management roles in care settings.',
        requirements: [
          'Experience as a care worker',
          'Degree in Health and Social Care or related field',
          'Leadership qualification (Level 3+)'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Senior Care Worker Apprenticeship',
        description: 'Progress from care worker through higher level apprenticeship.',
        requirements: [
          'Experience as a care worker',
          'Level 3 qualification in care',
          'Leadership potential'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 4',
        providers: [
          'Care homes',
          'NHS trusts',
          'Private healthcare providers'
        ]
      }
    },
    skills: [
      'Leadership',
      'Care planning',
      'Staff supervision',
      'Quality assurance',
      'Risk management',
      'Clinical skills',
      'Communication'
    ],
    dayToDay: [
      'Supervising care staff',
      'Creating care plans',
      'Conducting assessments',
      'Managing medications',
      'Liaising with healthcare professionals',
      'Ensuring compliance with regulations'
    ],
    workEnvironment: 'Based in care homes or community settings with regular hours but may include some shifts. Combines hands-on care with leadership responsibilities.'
  },
  'team-leader': {
    title: 'Team Leader',
    slug: 'team-leader',
    description: 'Team leaders in healthcare manage groups of care workers or healthcare assistants, ensuring effective service delivery and staff development.',
    salary: {
      entry: '£25,000',
      experienced: '£30,000',
      senior: '£35,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'Higher education can support progression to senior management roles.',
        requirements: [
          'Significant care experience',
          'Degree in Health and Social Care Management',
          'Leadership qualifications'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Team Leader Apprenticeship',
        description: 'Develop leadership skills while working in a healthcare setting.',
        requirements: [
          'Experience in healthcare',
          'Level 3 qualification',
          'Management potential'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 5',
        providers: [
          'NHS Leadership Academy',
          'Healthcare providers',
          'Training organisations'
        ]
      }
    },
    skills: [
      'People management',
      'Performance monitoring',
      'Resource allocation',
      'Problem solving',
      'Quality assurance',
      'Policy implementation',
      'Staff development'
    ],
    dayToDay: [
      'Managing staff rotas',
      'Conducting team meetings',
      'Handling complaints',
      'Supporting staff development',
      'Ensuring service quality',
      'Managing budgets'
    ],
    workEnvironment: 'Office-based with regular hours but may require flexible working to support team operations. Involves both administrative work and hands-on support.'
  },
  'registered-nurse': {
    title: 'Registered Nurse',
    slug: 'registered-nurse',
    description: 'Registered nurses provide and supervise care for patients in hospitals, care homes, and community settings, using clinical expertise and leadership skills.',
    salary: {
      entry: '£27,055',
      experienced: '£40,000',
      senior: '£55,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'Nursing degree required for registration with the Nursing and Midwifery Council (NMC).',
        requirements: [
          '3 A-levels including Biology or Health Science',
          'Nursing degree (BNurs)',
          'NMC registration'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Degree)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Nursing Degree Apprenticeship',
        description: 'Earn while you learn pathway to becoming a registered nurse.',
        requirements: [
          'A-levels or equivalent',
          'Employment in healthcare setting',
          'Support from employer'
        ],
        duration: '4 years',
        qualificationLevel: 'Level 6',
        providers: [
          'NHS trusts',
          'Partner universities',
          'Healthcare providers'
        ]
      }
    },
    skills: [
      'Clinical assessment',
      'Medicine management',
      'Leadership',
      'Critical thinking',
      'Patient care',
      'Communication',
      'Decision making'
    ],
    dayToDay: [
      'Assessing patient needs',
      'Administering medications',
      'Planning care',
      'Supervising staff',
      'Managing emergencies',
      'Documentation'
    ],
    workEnvironment: 'Can work in hospitals, care homes, or community settings. Involves shift work including nights and weekends. Physically and emotionally demanding but highly rewarding.'
  },
  'care-manager': {
    title: 'Care Manager',
    slug: 'care-manager',
    description: 'Care managers oversee the operation of care services, ensuring high-quality care delivery while managing staff and resources.',
    salary: {
      entry: '£35,000',
      experienced: '£45,000',
      senior: '£60,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'Degree in healthcare management or related field, plus significant experience.',
        requirements: [
          'Degree in Health Management or related field',
          'Significant care experience',
          'Management qualifications'
        ],
        duration: '3 years + experience',
        qualificationLevel: 'Level 6/7',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Healthcare Management Apprenticeship',
        description: 'Progress to management through higher apprenticeship route.',
        requirements: [
          'Extensive care experience',
          'Level 5 qualification',
          'Leadership experience'
        ],
        duration: '24-30 months',
        qualificationLevel: 'Level 7',
        providers: [
          'NHS Leadership Academy',
          'Care providers',
          'Training organisations'
        ]
      }
    },
    skills: [
      'Strategic planning',
      'Budget management',
      'Staff leadership',
      'Quality assurance',
      'Regulatory compliance',
      'Change management',
      'Stakeholder engagement'
    ],
    dayToDay: [
      'Managing service delivery',
      'Developing policies',
      'Managing budgets',
      'Leading staff development',
      'Ensuring compliance',
      'Liaising with stakeholders'
    ],
    workEnvironment: 'Office-based with regular hours but requires flexibility. Involves strategic planning, staff management, and ensuring regulatory compliance.'
  },
  'specialist-practitioner': {
    title: 'Specialist Practitioner',
    slug: 'specialist-practitioner',
    description: 'Specialist practitioners provide expert care in specific areas such as mental health, learning disabilities, or elderly care.',
    salary: {
      entry: '£33,000',
      experienced: '£45,000',
      senior: '£58,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'Advanced degree in specialist area plus professional registration.',
        requirements: [
          'Nursing degree or equivalent',
          "Master's in specialist area",
          'Professional registration'
        ],
        duration: '5-6 years total',
        qualificationLevel: 'Level 7 (Masters)',
        providers: [
          'Sheffield Hallam University',
          'University of Sheffield',
          'Leeds University'
        ]
      },
      apprenticeship: {
        title: 'Advanced Clinical Practitioner Apprenticeship',
        description: 'Develop specialist skills while working in healthcare setting.',
        requirements: [
          'Professional qualification',
          'Current registration',
          'Relevant experience'
        ],
        duration: '24-36 months',
        qualificationLevel: 'Level 7',
        providers: [
          'NHS trusts',
          'Specialist units',
          'Training providers'
        ]
      }
    },
    skills: [
      'Advanced clinical skills',
      'Specialist knowledge',
      'Research abilities',
      'Leadership',
      'Training delivery',
      'Service development',
      'Clinical governance'
    ],
    dayToDay: [
      'Providing specialist care',
      'Training staff',
      'Conducting assessments',
      'Developing care protocols',
      'Research participation',
      'Service improvement'
    ],
    workEnvironment: 'Can work in specialist units, hospitals, or community settings. May involve regular hours or shifts depending on speciality. Requires continuous professional development.'
  }
}; 