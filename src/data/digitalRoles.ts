import { RoleData } from '@/types/role';

export const digitalRoles: RoleData = {
  'junior-developer': {
    title: 'Junior Developer',
    slug: 'junior-developer',
    description: 'A Junior Developer role is an entry-level position focused on learning and contributing to software development projects under the guidance of more experienced developers.',
    salary: {
      entry: '£22,000',
      experienced: '£28,000',
      senior: '£35,000'
    },
    paths: {
      university: {
        title: 'University Degree',
        description: 'A degree in Computer Science, Software Engineering, or related field provides a strong theoretical foundation and practical programming skills.',
        requirements: [
          '3 A-levels (or equivalent) including Mathematics',
          'GCSE English and Mathematics at grade C/4 or above',
          'Strong problem-solving abilities'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Leeds',
          'University of York',
          'Sheffield Hallam University'
        ]
      },
      apprenticeship: {
        title: 'Software Developer Apprenticeship',
        description: 'Learn whilst working in a real development team, combining practical experience with theoretical knowledge.',
        requirements: [
          '5 GCSEs including English and Mathematics at grade C/4 or above',
          'Strong interest in technology and coding',
          'Good problem-solving skills'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 4',
        providers: [
          'QA Apprenticeships',
          'Baltic Training',
          'Manchester Digital'
        ]
      }
    },
    skills: [
      'HTML/CSS',
      'JavaScript',
      'Version Control (Git)',
      'Basic Programming Concepts',
      'Problem Solving',
      'Communication'
    ],
    dayToDay: [
      'Writing and testing code',
      'Fixing bugs and issues',
      'Participating in code reviews',
      'Attending team meetings',
      'Learning from senior developers',
      'Contributing to documentation'
    ],
    workEnvironment: 'Modern office environment with the latest development tools and technologies. Typically working in an agile team with opportunities for both collaborative and independent work.',
    futureProspects: [
      'Progress to Mid-level Developer',
      'Specialise in Front-end or Back-end Development',
      'Move into Mobile App Development',
      'Transition to DevOps'
    ],
    requiredQualifications: [
      'A degree in Computer Science or related field, OR',
      'Completion of a coding bootcamp, OR',
      'Level 4 Software Developer Apprenticeship'
    ],
    desiredQualifications: [
      'Additional programming certifications',
      'Cloud platform certifications (AWS/Azure)',
      'Agile/Scrum certifications'
    ],
    industryTrends: [
      'Increasing demand for full-stack capabilities',
      'Growing importance of cloud technologies',
      'Rise of low-code/no-code platforms',
      'Focus on cybersecurity awareness'
    ],
    toolsAndTech: [
      'Visual Studio Code',
      'Git/GitHub',
      'JavaScript/TypeScript',
      'React/Angular/Vue',
      'Node.js',
      'SQL Databases'
    ],
    workSchedule: 'Standard 37.5 hour week, typically 9-5 with flexible hours available',
    remoteWorkOptions: 'Hybrid working common, with 2-3 days in office for collaboration and mentoring',
    careerPathway: {
      nextSteps: [
        'Take on more complex coding tasks',
        'Lead small features or projects',
        'Mentor new junior developers',
        'Specialise in a specific technology stack'
      ],
      potentialRoles: [
        'Mid-level Developer',
        'Front-end Specialist',
        'Back-end Developer',
        'Full-stack Developer'
      ]
    }
  },

  'software-developer': {
    title: 'Software Developer',
    slug: 'software-developer',
    description: 'A Software Developer designs, builds, and maintains software applications, working across the full development lifecycle from planning to deployment.',
    salary: {
      entry: '£35,000',
      experienced: '£45,000',
      senior: '£65,000'
    },
    paths: {
      university: {
        title: 'University Degree',
        description: 'A degree provides comprehensive knowledge of computer science principles and software engineering practices.',
        requirements: [
          'Bachelor\'s degree in Computer Science or related field',
          'Strong programming fundamentals',
          'Understanding of software design patterns'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Leeds',
          'University of Sheffield',
          'York St John University'
        ]
      },
      apprenticeship: {
        title: 'Digital and Technology Solutions Professional',
        description: 'Higher apprenticeship combining work experience with degree-level study.',
        requirements: [
          'A-levels in STEM subjects',
          'Strong analytical skills',
          'Programming experience'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6',
        providers: [
          'Ada National College for Digital Skills',
          'Manchester Metropolitan University',
          'Leeds Beckett University'
        ]
      }
    },
    skills: [
      'Advanced Programming',
      'System Design',
      'Database Management',
      'API Development',
      'Testing and Debugging',
      'DevOps Practices'
    ],
    dayToDay: [
      'Developing new features',
      'Reviewing code',
      'Debugging issues',
      'Writing technical documentation',
      'Collaborating with team members',
      'Participating in agile ceremonies'
    ],
    workEnvironment: 'Modern tech office with latest development tools and collaborative spaces. Agile environment with regular team interactions and opportunities for innovation.',
    futureProspects: [
      'Senior Developer',
      'Technical Lead',
      'Solutions Architect',
      'DevOps Engineer'
    ],
    requiredQualifications: [
      'Degree in Computer Science or related field',
      'Proven software development experience',
      'Strong portfolio of projects'
    ],
    desiredQualifications: [
      'Master\'s degree in Computer Science',
      'Cloud certifications',
      'Specialised framework certifications'
    ],
    industryTrends: [
      'Microservices architecture',
      'Containerisation and orchestration',
      'AI/ML integration',
      'Edge computing'
    ],
    toolsAndTech: [
      'Advanced IDEs',
      'Docker/Kubernetes',
      'CI/CD tools',
      'Cloud platforms',
      'Testing frameworks',
      'Monitoring tools'
    ],
    workSchedule: '37.5 hour week with flexible arrangements',
    remoteWorkOptions: 'Hybrid or fully remote options available, depending on company policy',
    careerPathway: {
      nextSteps: [
        'Lead development teams',
        'Architect solutions',
        'Mentor junior developers',
        'Specialise in emerging technologies'
      ],
      potentialRoles: [
        'Senior Developer',
        'Technical Lead',
        'Solutions Architect',
        'Development Manager'
      ]
    }
  },

  'technical-architect': {
    title: 'Technical Architect',
    slug: 'technical-architect',
    description: 'A Technical Architect designs and oversees the technical vision of software systems, ensuring they meet business requirements while maintaining scalability, security, and performance.',
    salary: {
      entry: '£60,000',
      experienced: '£80,000',
      senior: '£100,000+'
    },
    paths: {
      university: {
        title: 'Advanced Education',
        description: 'Advanced degree in Computer Science or Software Engineering, focusing on system design and architecture.',
        requirements: [
          'Master\'s degree in Computer Science or related field',
          'Extensive software development experience',
          'Strong system design knowledge'
        ],
        duration: '5-6 years total education',
        qualificationLevel: 'Level 7 (Master\'s Degree)',
        providers: [
          'University of Leeds',
          'University of York',
          'University of Sheffield'
        ]
      },
      apprenticeship: {
        title: 'Technical Architect Progression',
        description: 'Progress through software development roles with additional architectural training and certifications.',
        requirements: [
          'Significant development experience',
          'Leadership capabilities',
          'System design expertise'
        ],
        duration: '5+ years experience',
        qualificationLevel: 'Level 7',
        providers: [
          'Industry certifications',
          'Professional development programmes',
          'Vendor-specific training'
        ]
      }
    },
    skills: [
      'System Architecture Design',
      'Technical Leadership',
      'Cloud Architecture',
      'Security Design',
      'Performance Optimisation',
      'Stakeholder Management'
    ],
    dayToDay: [
      'Designing system architecture',
      'Leading technical decisions',
      'Reviewing design proposals',
      'Mentoring development teams',
      'Evaluating new technologies',
      'Ensuring best practices'
    ],
    workEnvironment: 'Mix of collaborative spaces for team discussions and quiet areas for focused work. Regular interaction with various stakeholders across the organisation.',
    futureProspects: [
      'Chief Technical Officer',
      'Head of Architecture',
      'Technical Director',
      'Solution Architecture Consultant'
    ],
    requiredQualifications: [
      'Advanced degree in Computer Science',
      'Extensive development experience',
      'Architecture certifications'
    ],
    desiredQualifications: [
      'MBA or business qualifications',
      'Cloud architecture certifications',
      'Security certifications'
    ],
    industryTrends: [
      'Zero-trust architecture',
      'Serverless computing',
      'Event-driven architecture',
      'Green IT practices'
    ],
    toolsAndTech: [
      'Architecture modelling tools',
      'Cloud platforms',
      'Enterprise integration tools',
      'Performance monitoring systems',
      'Security frameworks'
    ],
    workSchedule: 'Full-time with flexible arrangements',
    remoteWorkOptions: 'Hybrid working with regular office presence for key meetings and workshops',
    careerPathway: {
      nextSteps: [
        'Lead enterprise architecture',
        'Develop architecture strategies',
        'Guide digital transformation',
        'Mentor future architects'
      ],
      potentialRoles: [
        'Chief Architect',
        'CTO',
        'Enterprise Architect',
        'Architecture Consultant'
      ]
    }
  },

  'data-analyst': {
    title: 'Data Analyst',
    slug: 'data-analyst',
    description: 'A Data Analyst collects, processes, and analyses data to help organisations make better business decisions through insights and visualisations.',
    salary: {
      entry: '£25,000',
      experienced: '£35,000',
      senior: '£50,000'
    },
    paths: {
      university: {
        title: 'University Degree',
        description: 'A degree in Data Science, Statistics, Mathematics, or related field provides essential analytical and technical skills.',
        requirements: [
          'A-levels including Mathematics',
          'Strong analytical abilities',
          'Interest in data and statistics'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Leeds',
          'University of Sheffield',
          'University of York'
        ]
      },
      apprenticeship: {
        title: 'Data Analyst Apprenticeship',
        description: 'Learn data analysis skills while working with real business data and projects.',
        requirements: [
          'GCSEs including Mathematics and English',
          'Analytical mindset',
          'Basic IT skills'
        ],
        duration: '18-24 months',
        qualificationLevel: 'Level 4',
        providers: [
          'QA Apprenticeships',
          'Baltic Training',
          'BPP'
        ]
      }
    },
    skills: [
      'SQL',
      'Data Visualisation',
      'Statistical Analysis',
      'Excel Advanced',
      'Python/R',
      'Business Intelligence Tools'
    ],
    dayToDay: [
      'Collecting and cleaning data',
      'Creating reports and dashboards',
      'Analysing trends and patterns',
      'Presenting findings to stakeholders',
      'Maintaining data quality',
      'Collaborating with teams'
    ],
    workEnvironment: 'Modern office setting with powerful computing resources and data analysis tools. Collaborative environment with regular interaction with various business units.',
    futureProspects: [
      'Senior Data Analyst',
      'Data Scientist',
      'Business Intelligence Manager',
      'Analytics Consultant'
    ],
    requiredQualifications: [
      'Degree in relevant field',
      'SQL proficiency',
      'Data analysis experience'
    ],
    desiredQualifications: [
      'Data science certifications',
      'Business intelligence certifications',
      'Statistical analysis qualifications'
    ],
    industryTrends: [
      'Machine learning integration',
      'Real-time analytics',
      'Data privacy regulations',
      'Automated reporting'
    ],
    toolsAndTech: [
      'SQL Databases',
      'Python/R',
      'Tableau/Power BI',
      'Excel/Google Sheets',
      'Statistical tools',
      'ETL tools'
    ],
    workSchedule: 'Standard business hours with flexible arrangements',
    remoteWorkOptions: 'Hybrid working common, with some office presence for team collaboration',
    careerPathway: {
      nextSteps: [
        'Develop advanced analytics skills',
        'Lead data projects',
        'Specialise in specific industries',
        'Learn machine learning'
      ],
      potentialRoles: [
        'Senior Data Analyst',
        'Data Scientist',
        'Analytics Manager',
        'BI Consultant'
      ]
    }
  },

  'digital-project-manager': {
    title: 'Digital Project Manager',
    slug: 'digital-project-manager',
    description: 'A Digital Project Manager leads and coordinates digital projects, ensuring they are delivered on time, within budget, and to the required quality standards.',
    salary: {
      entry: '£30,000',
      experienced: '£45,000',
      senior: '£60,000'
    },
    paths: {
      university: {
        title: 'University Degree',
        description: 'A degree in Project Management, Business, or related field provides foundation knowledge of project management principles.',
        requirements: [
          'Bachelor\'s degree in relevant field',
          'Understanding of digital technologies',
          'Strong organisational skills'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'Leeds Beckett University',
          'Sheffield Hallam University',
          'University of Huddersfield'
        ]
      },
      apprenticeship: {
        title: 'Project Management Apprenticeship',
        description: 'Learn project management while working on real digital projects.',
        requirements: [
          'A-levels or equivalent',
          'Good communication skills',
          'Basic understanding of digital technology'
        ],
        duration: '24 months',
        qualificationLevel: 'Level 4',
        providers: [
          'QA Apprenticeships',
          'Firebrand Training',
          'Learning People'
        ]
      }
    },
    skills: [
      'Project Management',
      'Agile Methodologies',
      'Stakeholder Management',
      'Risk Management',
      'Budgeting',
      'Digital Technology Understanding'
    ],
    dayToDay: [
      'Planning project timelines',
      'Managing team resources',
      'Conducting status meetings',
      'Managing stakeholder expectations',
      'Monitoring project progress',
      'Risk assessment and mitigation'
    ],
    workEnvironment: 'Fast-paced office environment with regular team interactions. Mix of independent work and collaborative sessions.',
    futureProspects: [
      'Senior Project Manager',
      'Programme Manager',
      'Digital Delivery Director',
      'Agile Coach'
    ],
    requiredQualifications: [
      'Project management certification (e.g., PRINCE2, PMP)',
      'Agile certifications',
      'Relevant degree or experience'
    ],
    desiredQualifications: [
      'Scrum Master certification',
      'Digital technology certifications',
      'Leadership qualifications'
    ],
    industryTrends: [
      'Remote project management',
      'AI-powered project tools',
      'Hybrid project methodologies',
      'Sustainable project practices'
    ],
    toolsAndTech: [
      'Project management software',
      'Collaboration tools',
      'Agile management platforms',
      'Resource planning tools',
      'Documentation systems'
    ],
    workSchedule: 'Full-time with some flexibility required for project deadlines',
    remoteWorkOptions: 'Hybrid working with regular team face-to-face meetings',
    careerPathway: {
      nextSteps: [
        'Lead larger digital projects',
        'Manage multiple project streams',
        'Develop programme management skills',
        'Specialise in transformation projects'
      ],
      potentialRoles: [
        'Head of Project Management',
        'Programme Director',
        'Digital Transformation Lead',
        'Portfolio Manager'
      ]
    }
  },

  'it-support': {
    title: 'IT Support',
    slug: 'it-support',
    description: 'An IT Support professional provides technical assistance and maintains IT systems, ensuring smooth operation of technology infrastructure and supporting users.',
    salary: {
      entry: '£20,000',
      experienced: '£28,000',
      senior: '£35,000'
    },
    paths: {
      university: {
        title: 'University Degree',
        description: 'A degree in IT, Computer Science, or related field provides technical knowledge and problem-solving skills.',
        requirements: [
          'A-levels or equivalent',
          'Interest in technology',
          'Good communication skills'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'Leeds City College',
          'Sheffield Hallam University',
          'York College'
        ]
      },
      apprenticeship: {
        title: 'IT Support Apprenticeship',
        description: 'Learn IT support skills while working in a real technical support environment.',
        requirements: [
          'GCSEs including English and Maths',
          'Basic IT knowledge',
          'Customer service skills'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 3',
        providers: [
          'Baltic Training',
          'QA Apprenticeships',
          'Estio Training'
        ]
      }
    },
    skills: [
      'Technical Support',
      'Problem Solving',
      'Customer Service',
      'Network Basics',
      'Hardware Knowledge',
      'Software Troubleshooting'
    ],
    dayToDay: [
      'Responding to support tickets',
      'Troubleshooting technical issues',
      'Setting up new equipment',
      'Maintaining IT systems',
      'User training',
      'Documentation'
    ],
    workEnvironment: 'Mix of desk-based work and on-site support. Modern office environment with latest IT equipment.',
    futureProspects: [
      'Senior IT Support',
      'System Administrator',
      'IT Infrastructure Engineer',
      'Service Desk Manager'
    ],
    requiredQualifications: [
      'IT Support qualification',
      'CompTIA A+',
      'Basic networking knowledge'
    ],
    desiredQualifications: [
      'Microsoft certifications',
      'ITIL certification',
      'Network+ certification'
    ],
    industryTrends: [
      'Cloud support',
      'Remote support tools',
      'Automation',
      'Cybersecurity awareness'
    ],
    toolsAndTech: [
      'Remote support software',
      'Ticketing systems',
      'Monitoring tools',
      'Active Directory',
      'Office 365 admin'
    ],
    workSchedule: 'Various shifts available, including standard office hours',
    remoteWorkOptions: 'Mix of remote and on-site support, depending on role',
    careerPathway: {
      nextSteps: [
        'Specialise in specific technologies',
        'Move into system administration',
        'Lead support teams',
        'Focus on infrastructure'
      ],
      potentialRoles: [
        'IT Support Manager',
        'System Administrator',
        'Network Engineer',
        'Infrastructure Specialist'
      ]
    }
  }
}; 