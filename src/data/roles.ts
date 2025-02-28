import { RoleData } from '@/types/role';
import { digitalRoles } from './digitalRoles';
import { businessRoles } from './businessRoles';
import { healthcareRoles } from './healthcareRoles';
import { creativeRoles } from './creativeRoles';
import { engineeringRoles } from './engineeringRoles';
import { hospitalityRoles } from './hospitalityRoles';

// Common category themes for UI consistency
export const categoryThemes = {
  digital: {
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-700'
  },
  business: {
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-700'
  },
  healthcare: {
    color: 'rose',
    gradient: 'from-rose-600 to-pink-700'
  },
  creative: {
    color: 'purple',
    gradient: 'from-purple-600 to-violet-700'
  },
  engineering: {
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600'
  },
  hospitality: {
    color: 'cyan',
    gradient: 'from-cyan-600 to-sky-700'
  },
  construction: {
    color: 'yellow',
    gradient: 'from-yellow-500 to-amber-600'
  }
};

export const roleData: RoleData = {
  ...digitalRoles,
  ...businessRoles,
  ...healthcareRoles,
  ...creativeRoles,
  ...engineeringRoles,
  ...hospitalityRoles,
  
  'qualified-plumber': {
    title: 'Qualified Plumber',
    slug: 'qualified-plumber',
    description: 'A skilled professional who installs, maintains and repairs water, heating and drainage systems in homes and commercial buildings.',
    category: 'construction',
    featured: true,
    salary: {
      entry: '£25,000',
      experienced: '£35,000',
      senior: '£45,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'While less common, you can study building services engineering at university.',
        requirements: [
          '2-3 A levels including maths or physics',
          'UCAS points: 96-120',
          'Related BTEC qualifications may be accepted'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6',
        providers: [
          'Leeds Beckett University',
          'Sheffield Hallam University'
        ]
      },
      apprenticeship: {
        title: 'Plumbing Apprenticeship',
        description: 'Learn through a combination of on-the-job training and classroom study.',
        requirements: [
          'GCSEs grade 9-4 (A*-C) in English and maths',
          'Good physical fitness',
          'Ability to work at heights and in confined spaces'
        ],
        duration: '4 years',
        qualificationLevel: 'Level 3',
        providers: [
          'Leeds College of Building',
          'Sheffield College',
          'Barnsley College'
        ]
      }
    },
    skills: [
      'Pipe fitting and installation',
      'Problem solving',
      'Technical drawing interpretation',
      'Health and safety awareness',
      'Customer service'
    ],
    dayToDay: [
      'Installing water and heating systems',
      'Maintaining and repairing plumbing systems',
      'Emergency call-outs',
      'Working with gas appliances (if Gas Safe registered)',
      'Providing quotes for work'
    ],
    workEnvironment: 'Varied working environments including homes, construction sites, and commercial buildings. The work can be physically demanding and may involve working in confined spaces.',
    futureProspects: [
      'Specialise in renewable energy systems',
      'Start your own plumbing business',
      'Move into project management',
      'Train apprentices',
      'Specialise in commercial installations'
    ],
    requiredQualifications: [
      'Level 3 NVQ Diploma in Plumbing and Heating',
      'Level 3 Diploma in Plumbing Studies',
      'Gas Safe registration (for gas work)'
    ],
    desiredQualifications: [
      'Water regulations certification',
      'Unvented hot water systems qualification',
      'Energy efficiency certification',
      'Renewable energy systems qualification'
    ],
    industryTrends: [
      'Growing demand for renewable heating systems',
      'Increasing use of smart home technology',
      'Focus on water conservation',
      'Integration of sustainable materials',
      'Rising importance of energy efficiency'
    ],
    toolsAndTech: [
      'Hand tools and power tools',
      'Pipe bending equipment',
      'Testing equipment',
      'Digital diagnostic tools',
      'CAD software for planning'
    ],
    workSchedule: 'Standard working hours with on-call and emergency work often required. Weekend work may be necessary.',
    remoteWorkOptions: 'Limited - most work requires physical presence on site.',
    careerPathway: {
      nextSteps: [
        'Gain Gas Safe registration',
        'Specialise in renewable technologies',
        'Move into supervision or management',
        'Start own business'
      ],
      potentialRoles: [
        'Heating Engineer',
        'Gas Safe Engineer',
        'Renewable Energy Specialist',
        'Plumbing Business Owner'
      ]
    },
    testimonials: [
      {
        name: "James Wilson",
        role: "Plumbing Business Owner",
        quote: "I started as an apprentice plumber and now run my own successful business with five employees. The skills I learned have been invaluable, and there's always work available in this trade.",
        imageUrl: "/images/testimonials/plumber-1.jpg"
      }
    ],
    localEmployers: [
      "Sheffield Heating Solutions",
      "Yorkshire Water Services",
      "Barnsley Building Services",
      "Rotherham Council Maintenance"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example-plumber"
  },
  
  'qualified-electrician': {
    title: 'Qualified Electrician',
    slug: 'qualified-electrician',
    description: 'A certified professional who installs, maintains and repairs electrical systems in domestic, commercial and industrial settings.',
    category: 'construction',
    featured: true,
    salary: {
      entry: '£25,000',
      experienced: '£38,000',
      senior: '£50,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'Study electrical engineering or building services engineering at university.',
        requirements: [
          '2-3 A levels including maths and physics',
          'UCAS points: 96-120',
          'Related BTEC qualifications may be accepted'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6',
        providers: [
          'University of Sheffield',
          'Leeds Beckett University'
        ]
      },
      apprenticeship: {
        title: 'Electrical Installation Apprenticeship',
        description: 'Combine practical work with study to gain industry-recognised qualifications.',
        requirements: [
          'GCSEs grade 9-4 (A*-C) in English, maths and science',
          'Good colour vision',
          'Physical fitness'
        ],
        duration: '4 years',
        qualificationLevel: 'Level 3',
        providers: [
          'Leeds College of Building',
          'Sheffield College',
          'Rotherham College'
        ]
      }
    },
    skills: [
      'Electrical installation and maintenance',
      'Circuit testing and fault finding',
      'Technical drawing interpretation',
      'Problem solving',
      'Health and safety awareness'
    ],
    dayToDay: [
      'Installing electrical systems',
      'Testing installations',
      'Fault diagnosis and repair',
      'Reading technical drawings',
      'Working with smart technology'
    ],
    workEnvironment: 'Various settings including homes, construction sites, and industrial premises. Work may involve working at height and in confined spaces.',
    futureProspects: [
      'Specialise in renewable energy',
      'Start own electrical business',
      'Move into electrical design',
      'Become an electrical inspector',
      'Train apprentices'
    ],
    requiredQualifications: [
      'Level 3 NVQ Diploma in Installing Electrotechnical Systems',
      'BS7671 Wiring Regulations qualification',
      'ECS card'
    ],
    desiredQualifications: [
      'Testing and inspection qualification',
      'Electric vehicle charging point installation',
      'Solar PV installation',
      'Smart home technology certification'
    ],
    industryTrends: [
      'Growth in renewable energy systems',
      'Increasing demand for EV charging points',
      'Smart home technology integration',
      'Focus on energy efficiency',
      'Development of battery storage systems'
    ],
    toolsAndTech: [
      'Hand tools and power tools',
      'Testing equipment',
      'Circuit testing devices',
      'CAD software',
      'Smart system programming tools'
    ],
    workSchedule: 'Usually standard working hours with some emergency call-outs and weekend work.',
    remoteWorkOptions: 'Limited - most work requires on-site presence.',
    careerPathway: {
      nextSteps: [
        'Gain additional certifications',
        'Specialise in specific areas',
        'Move into supervision',
        'Start own business'
      ],
      potentialRoles: [
        'Electrical Contractor',
        'Installation Manager',
        'Electrical Designer',
        'Business Owner'
      ]
    },
    testimonials: [
      {
        name: "Sarah Thompson",
        role: "Commercial Electrician",
        quote: "The electrical industry is constantly evolving with new technologies. I love that every day brings new challenges and learning opportunities, especially in renewable energy systems.",
        imageUrl: "/images/testimonials/electrician-1.jpg"
      }
    ],
    localEmployers: [
      "Yorkshire Electrical Contractors",
      "Sheffield City Council",
      "South Yorkshire Renewables",
      "Doncaster Building Services"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example-electrician"
  },
  
  'qualified-mechanic': {
    title: 'Qualified Mechanic',
    slug: 'qualified-mechanic',
    description: 'A skilled automotive professional who diagnoses, repairs and maintains vehicles, including modern hybrid and electric vehicles.',
    category: 'engineering',
    featured: true,
    salary: {
      entry: '£22,000',
      experienced: '£32,000',
      senior: '£40,000+'
    },
    paths: {
      university: {
        title: 'University Route',
        description: 'Study automotive engineering at university level.',
        requirements: [
          '2-3 A levels including maths and physics',
          'UCAS points: 96-120',
          'Related BTEC qualifications may be accepted'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6',
        providers: [
          'Sheffield Hallam University',
          'University of Bradford'
        ]
      },
      apprenticeship: {
        title: 'Motor Vehicle Service and Maintenance Apprenticeship',
        description: 'Learn through hands-on experience while studying for recognised qualifications.',
        requirements: [
          'GCSEs grade 9-4 (A*-C) in English and maths',
          'Interest in vehicle technology',
          'Good problem-solving skills'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 3',
        providers: [
          'Sheffield College',
          'Doncaster College',
          'Rotherham College'
        ]
      }
    },
    skills: [
      'Vehicle diagnostics',
      'Repair and maintenance',
      'Problem solving',
      'Technical knowledge',
      'Customer service'
    ],
    dayToDay: [
      'Diagnosing vehicle faults',
      'Carrying out repairs',
      'Performing routine maintenance',
      'Working with diagnostic equipment',
      'Advising customers'
    ],
    workEnvironment: 'Usually in a garage or workshop environment. Work can be physically demanding and may involve working in confined spaces.',
    futureProspects: [
      'Specialise in electric vehicles',
      'Become a master technician',
      'Move into management',
      'Start own garage',
      'Train apprentices'
    ],
    requiredQualifications: [
      'Level 3 Diploma in Vehicle Maintenance and Repair',
      'MOT testing certification (optional)',
      'Manufacturer-specific certifications'
    ],
    desiredQualifications: [
      'Electric/Hybrid Vehicle qualifications',
      'Diagnostic specialist certification',
      'Management qualifications',
      'Advanced driver assistance systems training'
    ],
    industryTrends: [
      'Growth in electric and hybrid vehicles',
      'Increasing vehicle technology complexity',
      'Focus on environmental regulations',
      'Digital diagnostic systems',
      'Connected car technology'
    ],
    toolsAndTech: [
      'Hand tools and specialist tools',
      'Diagnostic equipment',
      'Computer-based testing systems',
      'Electric vehicle safety equipment',
      'Workshop machinery'
    ],
    workSchedule: 'Usually standard working hours with some overtime and weekend work possible.',
    remoteWorkOptions: 'Limited - most work requires physical presence in workshop.',
    careerPathway: {
      nextSteps: [
        'Gain electric vehicle certification',
        'Become MOT tester',
        'Move into supervision',
        'Start own business'
      ],
      potentialRoles: [
        'Master Technician',
        'Workshop Manager',
        'Garage Owner',
        'Technical Trainer'
      ]
    },
    testimonials: [
      {
        name: "Michael Roberts",
        role: "Master Technician",
        quote: "The transition to electric vehicles has completely transformed our industry. Getting qualified in EV maintenance early on has given me a competitive edge in the job market.",
        imageUrl: "/images/testimonials/mechanic-1.jpg"
      }
    ],
    localEmployers: [
      "South Yorkshire Motors",
      "Sheffield Autos",
      "Rotherham Vehicle Services",
      "Barnsley Automotive Ltd"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example-mechanic"
  }
}; 