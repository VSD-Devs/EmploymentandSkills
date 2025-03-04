export interface Career {
  title: string;
  description: string;
  salary: string;
  demand: string;
  progression: {
    entry: string;
    mid: string;
    senior: string;
  };
  localOpportunities: {
    employers: string[];
    courses: {
      provider: string;
      location: string;
      type: string;
    }[];
  };
}

export interface CareerPath {
  title: string;
  description: string;
  careers: Career[];
  traits: string[];
}

export interface Skill {
  name: string;
  description: string;
  learning_resources: string[];
}

export interface CareerProfile {
  description: string;
  recommendedSectors: string[];
  traits: string[];
  careers: Career[];
  skills: Skill[];
}

export interface CareerProfiles {
  [key: string]: CareerProfile;
}

export interface QuizOption {
  id: string;
  text: string;
  paths: string[];
}

export interface QuizQuestion {
  id: number;
  stage: number;
  question: string;
  options: QuizOption[];
}

// Quiz questions data
export const quizQuestions: QuizQuestion[] = [
  // Stage 1 Questions (1-5)
  {
    id: 1,
    stage: 1,
    question: "Which statement best describes your approach to work?",
    options: [
      { id: 'a', text: "I rely on data and careful analysis", paths: ["digital-tech", "business-finance", "manufacturing"] },
      { id: 'b', text: "I rely on creativity and thinking outside the box", paths: ["creative-media", "digital-tech", "business-finance"] },
      { id: 'c', text: "I trust my instincts and make quick decisions", paths: ["hospitality-tourism", "business-finance", "healthcare"] },
      { id: 'd', text: "I consult others and seek different perspectives", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'e', text: "I prefer following established processes", paths: ["logistics-transport", "manufacturing", "healthcare"] },
      { id: 'f', text: "I experiment and try different hands-on methods", paths: ["construction", "manufacturing", "creative-media"] }
    ]
  },
  {
    id: 2,
    stage: 1,
    question: "Which of these sounds like your dream job?",
    options: [
      { id: 'a', text: "Managing a business or leading a team", paths: ["business-finance", "hospitality-tourism", "logistics-transport"] },
      { id: 'b', text: "Designing or creating new products", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'c', text: "Helping others improve their wellbeing", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'd', text: "Working with technology and data", paths: ["digital-tech", "manufacturing", "business-finance"] },
      { id: 'e', text: "Working with practical trades", paths: ["construction", "manufacturing", "logistics-transport"] },
      { id: 'f', text: "Planning and organising", paths: ["hospitality-tourism", "business-finance", "logistics-transport"] }
    ]
  },
  {
    id: 3,
    stage: 1,
    question: "What kind of challenges do you enjoy most?",
    options: [
      { id: 'a', text: "Negotiating and persuading others", paths: ["business-finance", "creative-media", "hospitality-tourism"] },
      { id: 'b', text: "Designing or improving systems", paths: ["digital-tech", "manufacturing", "logistics-transport"] },
      { id: 'c', text: "Finding creative solutions", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'd', text: "Helping people and making an impact", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'e', text: "Managing multiple tasks", paths: ["logistics-transport", "business-finance", "hospitality-tourism"] },
      { id: 'f', text: "Learning new technical skills", paths: ["digital-tech", "construction", "manufacturing"] }
    ]
  },
  {
    id: 4,
    stage: 1,
    question: "How do you feel about working with others?",
    options: [
      { id: 'a', text: "I love working in a team", paths: ["creative-media", "business-finance", "hospitality-tourism"] },
      { id: 'b', text: "I prefer working independently", paths: ["digital-tech", "manufacturing", "construction"] },
      { id: 'c', text: "I enjoy a mix of both", paths: ["manufacturing", "digital-tech", "logistics-transport"] },
      { id: 'd', text: "I like leading teams", paths: ["business-finance", "hospitality-tourism", "healthcare"] },
      { id: 'e', text: "I prefer small group interactions", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'f', text: "I like creative collaboration", paths: ["creative-media", "digital-tech", "manufacturing"] }
    ]
  },
  {
    id: 5,
    stage: 1,
    question: "What's your biggest motivation when choosing a career?",
    options: [
      { id: 'a', text: "Financial success", paths: ["digital-tech", "business-finance", "manufacturing"] },
      { id: 'b', text: "Creative freedom", paths: ["creative-media", "digital-tech", "hospitality-tourism"] },
      { id: 'c', text: "Job security", paths: ["logistics-transport", "healthcare", "manufacturing"] },
      { id: 'd', text: "Making a difference", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'e', text: "Exciting work environment", paths: ["construction", "hospitality-tourism", "creative-media"] },
      { id: 'f', text: "Continuous learning", paths: ["digital-tech", "manufacturing", "business-finance"] }
    ]
  },
  // Stage 2 Questions (6-10)
  {
    id: 6,
    stage: 2,
    question: "What type of work environment do you prefer?",
    options: [
      { id: 'a', text: "Modern office with latest technology", paths: ["digital-tech", "business-finance", "creative-media"] },
      { id: 'b', text: "Dynamic, varied locations", paths: ["construction", "hospitality-tourism", "creative-media"] },
      { id: 'c', text: "Structured, professional setting", paths: ["healthcare", "business-finance", "manufacturing"] },
      { id: 'd', text: "Creative, collaborative space", paths: ["creative-media", "digital-tech", "hospitality-tourism"] },
      { id: 'e', text: "Hands-on workshop or facility", paths: ["manufacturing", "construction", "logistics-transport"] },
      { id: 'f', text: "Community-focused environment", paths: ["healthcare", "hospitality-tourism", "creative-media"] }
    ]
  },
  {
    id: 7,
    stage: 2,
    question: "Which skill would you most like to develop?",
    options: [
      { id: 'a', text: "Digital and technical skills", paths: ["digital-tech", "manufacturing", "creative-media"] },
      { id: 'b', text: "Leadership and management", paths: ["business-finance", "hospitality-tourism", "healthcare"] },
      { id: 'c', text: "Creative and design skills", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'd', text: "Problem-solving abilities", paths: ["digital-tech", "business-finance", "manufacturing"] },
      { id: 'e', text: "Communication and teamwork", paths: ["hospitality-tourism", "healthcare", "business-finance"] },
      { id: 'f', text: "Practical and technical expertise", paths: ["construction", "manufacturing", "logistics-transport"] }
    ]
  },
  {
    id: 8,
    stage: 2,
    question: "How do you handle change and uncertainty?",
    options: [
      { id: 'a', text: "I see it as an opportunity to innovate", paths: ["digital-tech", "creative-media", "business-finance"] },
      { id: 'b', text: "I prefer stability and structure", paths: ["manufacturing", "healthcare", "logistics-transport"] },
      { id: 'c', text: "I adapt quickly to new situations", paths: ["hospitality-tourism", "creative-media", "digital-tech"] },
      { id: 'd', text: "I like planning for different scenarios", paths: ["business-finance", "manufacturing", "logistics-transport"] },
      { id: 'e', text: "I focus on practical solutions", paths: ["construction", "manufacturing", "healthcare"] },
      { id: 'f', text: "I seek guidance from others", paths: ["healthcare", "hospitality-tourism", "business-finance"] }
    ]
  },
  {
    id: 9,
    stage: 2,
    question: "What interests you most about technology?",
    options: [
      { id: 'a', text: "Creating digital solutions", paths: ["digital-tech", "creative-media", "manufacturing"] },
      { id: 'b', text: "Using it to help others", paths: ["healthcare", "business-finance", "hospitality-tourism"] },
      { id: 'c', text: "Improving efficiency", paths: ["manufacturing", "logistics-transport", "business-finance"] },
      { id: 'd', text: "Creative applications", paths: ["creative-media", "digital-tech", "hospitality-tourism"] },
      { id: 'e', text: "Learning new systems", paths: ["digital-tech", "manufacturing", "business-finance"] },
      { id: 'f', text: "Practical applications", paths: ["construction", "manufacturing", "logistics-transport"] }
    ]
  },
  {
    id: 10,
    stage: 2,
    question: "Where do you see yourself in 5 years?",
    options: [
      { id: 'a', text: "Leading a team or business", paths: ["business-finance", "hospitality-tourism", "digital-tech"] },
      { id: 'b', text: "Mastering a specialist skill", paths: ["digital-tech", "manufacturing", "creative-media"] },
      { id: 'c', text: "Making a difference in healthcare", paths: ["healthcare", "business-finance", "hospitality-tourism"] },
      { id: 'd', text: "Creating innovative solutions", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'e', text: "Building or making things", paths: ["construction", "manufacturing", "creative-media"] },
      { id: 'f', text: "Growing in a stable career", paths: ["logistics-transport", "healthcare", "business-finance"] }
    ]
  }
];

// Map sectors to role slugs
export const sectorToRoles: { [key: string]: string[] } = {
  'digital-tech': [
    'junior-developer',
    'data-analyst',
    'software-developer',
    'digital-project-manager'
  ],
  'healthcare': [
    'healthcare-assistant',
    'care-worker',
    'support-worker',
    'registered-nurse',
    'specialist-practitioner'
  ],
  'plumbing-heating': [
    'qualified-plumber',
    'heating-engineer',
    'gas-safe-engineer',
    'renewable-energy-specialist'
  ],
  'electrical': [
    'qualified-electrician',
    'electrical-contractor',
    'installation-manager',
    'electrical-designer'
  ],
  'automotive': [
    'qualified-mechanic',
    'diagnostic-technician',
    'master-technician',
    'workshop-manager'
  ],
  'agriculture': [
    'farm-worker',
    'crop-specialist',
    'livestock-manager',
    'farm-manager'
  ],
  'business-finance': [
    'team-leader',
    'financial-advisor'
  ],
  'manufacturing': [
    'manufacturing-technician',
    'production-supervisor',
    'manufacturing-engineer'
  ],
  'construction': [
    'site-supervisor',
    'project-manager',
    'construction-manager'
  ],
  'creative-media': [
    'digital-designer',
    'content-creator'
  ],
  'hospitality-tourism': [
    'events-coordinator',
    'hospitality-manager'
  ]
};

// Update career profiles to include role references
export const careerProfiles: { [key: string]: CareerProfile } = {
  analytical: {
    description: "You excel at logical thinking and data-driven decision making.",
    recommendedSectors: ['digital-tech', 'business-finance', 'manufacturing'],
    traits: [
      'Analytical mindset',
      'Detail-oriented',
      'Problem-solving focus'
    ],
    careers: [{
      title: 'Data Analyst',
      description: 'Analyze complex data sets to inform business decisions',
      salary: '£25,000 - £45,000',
      demand: 'High',
      progression: {
        entry: 'Junior Analyst',
        mid: 'Senior Analyst',
        senior: 'Lead Analyst'
      },
      localOpportunities: {
        employers: ['NHS', 'Financial Services'],
        courses: [{
          provider: 'University of Leeds',
          location: 'Leeds',
          type: 'Data Analytics'
        }]
      }
    }],
    skills: [{
      name: 'Data Analysis',
      description: 'Strong ability to analyze and interpret data',
      learning_resources: [
        'Take online courses in data analysis tools',
        'Practice with real datasets',
        'Learn SQL and data visualization'
      ]
    }]
  },
  caring: {
    description: "You have a natural ability to support and care for others.",
    recommendedSectors: ['healthcare', 'care', 'education'],
    traits: [
      'Empathy',
      'Patient-focused',
      'Supportive nature'
    ],
    careers: [{
      title: 'Healthcare Assistant',
      description: 'Support healthcare professionals in patient care',
      salary: '£20,000 - £28,000',
      demand: 'Very High',
      progression: {
        entry: 'Healthcare Assistant',
        mid: 'Senior Healthcare Assistant',
        senior: 'Team Leader'
      },
      localOpportunities: {
        employers: ['NHS', 'Care Homes'],
        courses: [{
          provider: 'Leeds City College',
          location: 'Leeds',
          type: 'Health & Social Care'
        }]
      }
    }],
    skills: [{
      name: 'Patient Care',
      description: 'Excellence in providing patient-centered care',
      learning_resources: [
        'Complete first aid certification',
        'Study healthcare best practices',
        'Practice communication skills'
      ]
    }]
  },
  leadership: {
    description: "You show strong leadership and management potential.",
    recommendedSectors: ['business-finance', 'healthcare', 'hospitality-tourism'],
    traits: [
      'Leadership skills',
      'Decision making',
      'Team management'
    ],
    careers: [{
      title: 'Team Leader',
      description: 'Lead and manage teams across various sectors',
      salary: '£28,000 - £40,000',
      demand: 'High',
      progression: {
        entry: 'Team Leader',
        mid: 'Department Manager',
        senior: 'Operations Manager'
      },
      localOpportunities: {
        employers: ['Various Sectors'],
        courses: [{
          provider: 'Sheffield Hallam',
          location: 'Sheffield',
          type: 'Leadership & Management'
        }]
      }
    }],
    skills: [{
      name: 'Team Leadership',
      description: 'Proven ability to lead and motivate teams',
      learning_resources: [
        'Take leadership training courses',
        'Volunteer for team lead roles',
        'Study management techniques'
      ]
    }]
  },
  practical: {
    description: "You excel at hands-on, practical work.",
    recommendedSectors: ['construction', 'manufacturing', 'care'],
    traits: [
      'Practical skills',
      'Technical aptitude',
      'Physical capability'
    ],
    careers: [{
      title: 'Construction Worker',
      description: 'Build and maintain infrastructure',
      salary: '£22,000 - £35,000',
      demand: 'High',
      progression: {
        entry: 'Apprentice',
        mid: 'Skilled Worker',
        senior: 'Site Supervisor'
      },
      localOpportunities: {
        employers: ['Construction Companies'],
        courses: [{
          provider: 'Leeds College of Building',
          location: 'Leeds',
          type: 'Construction Skills'
        }]
      }
    }],
    skills: [{
      name: 'Technical Skills',
      description: 'Strong practical and technical abilities',
      learning_resources: [
        'Complete hands-on training',
        'Practice with industry tools',
        'Study technical documentation'
      ]
    }]
  },
  creative: {
    description: "You have strong creative and innovative tendencies.",
    recommendedSectors: ['creative-media', 'digital-tech', 'education'],
    traits: [
      'Creative thinking',
      'Innovation',
      'Design skills'
    ],
    careers: [{
      title: 'Digital Designer',
      description: 'Create engaging digital content and experiences',
      salary: '£25,000 - £40,000',
      demand: 'High',
      progression: {
        entry: 'Junior Designer',
        mid: 'Senior Designer',
        senior: 'Creative Director'
      },
      localOpportunities: {
        employers: ['Digital Agencies'],
        courses: [{
          provider: 'Leeds Arts University',
          location: 'Leeds',
          type: 'Digital Design'
        }]
      }
    }],
    skills: [{
      name: 'Creative Design',
      description: 'Excellence in creative and innovative design',
      learning_resources: [
        'Build a design portfolio',
        'Learn design software',
        'Study design principles'
      ]
    }]
  }
};

// Career paths and their associated careers will be defined here
export const careerPaths: { [key: string]: CareerPath } = {
  // Add career paths here
}; 