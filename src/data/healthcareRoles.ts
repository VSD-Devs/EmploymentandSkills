import { RoleData } from '@/types/role';

export const healthcareRoles: RoleData = {
  'healthcare-assistant': {
    title: 'Healthcare Assistant',
    slug: 'healthcare-assistant',
    description: 'Healthcare Assistants provide essential support to medical professionals and patients, delivering hands-on care and assistance in healthcare settings.',
    salary: {
      entry: '£18,000',
      experienced: '£24,000',
      senior: '£28,000'
    },
    paths: {
      university: {
        title: 'Health and Social Care Degree',
        description: 'A degree providing comprehensive understanding of healthcare practices and patient care.',
        requirements: [
          '2-3 A-levels or equivalent',
          'GCSE English and Mathematics at grade C/4 or above',
          'Good communication skills'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'Sheffield Hallam University',
          'Leeds Beckett University',
          'University of Huddersfield'
        ]
      },
      apprenticeship: {
        title: 'Healthcare Support Worker Apprenticeship',
        description: 'Learn while working in a healthcare setting, gaining practical experience and qualifications.',
        requirements: [
          'GCSEs in English and Mathematics at grade C/4 or above',
          'Caring and compassionate nature',
          'Good communication skills'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 2-3',
        providers: [
          'NHS Trusts',
          'Local colleges',
          'Healthcare training providers'
        ]
      }
    },
    skills: [
      'Patient Care',
      'Communication',
      'Teamwork',
      'Observation',
      'Record Keeping',
      'Infection Control'
    ],
    dayToDay: [
      'Assisting patients with personal care',
      'Taking and recording vital signs',
      'Helping with mobility and comfort',
      'Supporting medical procedures',
      'Maintaining hygiene standards',
      'Recording patient information'
    ],
    workEnvironment: 'Work takes place in hospitals, clinics, care homes or community settings. The role involves shift work including nights, weekends and bank holidays.',
    futureProspects: [
      'Senior Healthcare Assistant',
      'Nursing Associate',
      'Registered Nurse (with further training)',
      'Specialist Healthcare Assistant'
    ],
    requiredQualifications: [
      'Care Certificate',
      'Level 2 Diploma in Healthcare Support',
      'Basic Life Support'
    ],
    desiredQualifications: [
      'Level 3 Diploma in Healthcare Support',
      'Specialist clinical skills certificates',
      'Mental health awareness training'
    ],
    industryTrends: [
      'Growing demand due to aging population',
      'Increased focus on community care',
      'Integration of digital health records',
      'Enhanced infection control measures'
    ],
    toolsAndTech: [
      'Patient monitoring equipment',
      'Electronic health records',
      'Communication devices',
      'Moving and handling equipment',
      'Clinical software systems'
    ],
    workSchedule: 'Shift work including early, late and night shifts, weekends and bank holidays',
    remoteWorkOptions: 'Limited - role requires in-person patient care, though some community-based positions available',
    careerPathway: {
      nextSteps: [
        'Senior Healthcare Assistant',
        'Team Leader',
        'Nursing Associate'
      ],
      potentialRoles: [
        'Registered Nurse',
        'Specialist Healthcare Assistant',
        'Department Coordinator'
      ]
    }
  },
  'care-worker': {
    title: 'Care Worker',
    slug: 'care-worker',
    description: 'Care Workers provide essential support to people who need help with daily living, enabling them to maintain their independence and quality of life.',
    salary: {
      entry: '£17,000',
      experienced: '£22,000',
      senior: '£26,000'
    },
    paths: {
      university: {
        title: 'Health and Social Care Degree',
        description: 'A degree providing theoretical knowledge and practical skills in care work.',
        requirements: [
          '2-3 A-levels or equivalent',
          'GCSE English and Mathematics at grade C/4 or above',
          'Caring and empathetic nature'
        ],
        duration: '3 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'Sheffield Hallam University',
          'Leeds Beckett University',
          'York St John University'
        ]
      },
      apprenticeship: {
        title: 'Adult Care Worker Apprenticeship',
        description: 'Gain practical experience while working towards care qualifications.',
        requirements: [
          'GCSEs in English and Mathematics preferred',
          'Caring and compassionate nature',
          'Good communication skills'
        ],
        duration: '12-18 months',
        qualificationLevel: 'Level 2-3',
        providers: [
          'Care homes',
          'Local colleges',
          'Care training providers'
        ]
      }
    },
    skills: [
      'Personal Care',
      'Communication',
      'Empathy',
      'Safety Awareness',
      'Record Keeping',
      'First Aid'
    ],
    dayToDay: [
      'Supporting personal care needs',
      'Helping with mobility',
      'Preparing meals',
      'Administering medication',
      'Social activities support',
      'Recording care notes'
    ],
    workEnvironment: 'Work takes place in care homes, supported living facilities or clients\' homes. Involves regular movement and physical assistance.',
    futureProspects: [
      'Senior Care Worker',
      'Care Coordinator',
      'Team Leader',
      'Specialist Care Worker'
    ],
    requiredQualifications: [
      'Care Certificate',
      'Level 2 Diploma in Care',
      'First Aid Certificate'
    ],
    desiredQualifications: [
      'Level 3 Diploma in Adult Care',
      'Medication administration certificate',
      'Specialist care certificates'
    ],
    industryTrends: [
      'Increasing demand for home care',
      'Focus on person-centered care',
      'Digital care planning systems',
      'Enhanced infection control protocols'
    ],
    toolsAndTech: [
      'Care planning software',
      'Moving and handling equipment',
      'Communication devices',
      'Medical equipment',
      'Digital record systems'
    ],
    workSchedule: 'Flexible shifts including early, late and weekend work',
    remoteWorkOptions: 'Limited - role requires in-person care delivery',
    careerPathway: {
      nextSteps: [
        'Senior Care Worker',
        'Care Coordinator',
        'Team Leader'
      ],
      potentialRoles: [
        'Care Manager',
        'Specialist Care Worker',
        'Training Coordinator'
      ]
    }
  },
  'registered-nurse': {
    title: 'Registered Nurse',
    slug: 'registered-nurse',
    description: 'Registered Nurses provide and coordinate patient care, educate patients about health conditions, and provide advice and emotional support.',
    salary: {
      entry: '£25,000',
      experienced: '£35,000',
      senior: '£45,000'
    },
    paths: {
      university: {
        title: 'Nursing Degree',
        description: 'A degree combining theoretical study with practical placements in healthcare settings.',
        requirements: [
          '3 A-levels including a science subject',
          'GCSE English, Mathematics and Science at grade C/4 or above',
          'Good communication and caring nature'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Sheffield',
          'University of Leeds',
          'Sheffield Hallam University'
        ]
      },
      apprenticeship: {
        title: 'Registered Nurse Degree Apprenticeship',
        description: 'Earn while you learn, combining work with study towards a nursing degree.',
        requirements: [
          'Level 3 qualification in a healthcare-related subject',
          'GCSE English, Mathematics and Science at grade C/4 or above',
          'Current healthcare experience'
        ],
        duration: '4 years',
        qualificationLevel: 'Level 6',
        providers: [
          'NHS Trusts',
          'Partner universities',
          'Healthcare providers'
        ]
      }
    },
    skills: [
      'Clinical Skills',
      'Patient Assessment',
      'Medicine Management',
      'Communication',
      'Critical Thinking',
      'Leadership'
    ],
    dayToDay: [
      'Assessing patient needs',
      'Administering medications',
      'Performing clinical procedures',
      'Coordinating care plans',
      'Supervising healthcare assistants',
      'Documentation and reporting'
    ],
    workEnvironment: 'Work in hospitals, clinics, community settings or specialist units. Involves shift work and can be physically and emotionally demanding.',
    futureProspects: [
      'Specialist Nurse',
      'Ward Manager',
      'Advanced Nurse Practitioner',
      'Clinical Nurse Specialist'
    ],
    requiredQualifications: [
      'Registered Nurse qualification',
      'NMC registration',
      'Basic Life Support'
    ],
    desiredQualifications: [
      'Specialist nursing qualifications',
      'Prescribing qualification',
      'Leadership and management training'
    ],
    industryTrends: [
      'Advanced practice roles',
      'Digital health technologies',
      'Integrated care systems',
      'Specialist nursing pathways'
    ],
    toolsAndTech: [
      'Clinical equipment',
      'Electronic patient records',
      'Medical devices',
      'Communication systems',
      'Clinical software'
    ],
    workSchedule: 'Shift patterns including nights, weekends and bank holidays',
    remoteWorkOptions: 'Limited - some roles in telephone triage or virtual consultations',
    careerPathway: {
      nextSteps: [
        'Senior Staff Nurse',
        'Specialist Nurse',
        'Ward Manager'
      ],
      potentialRoles: [
        'Advanced Nurse Practitioner',
        'Nurse Consultant',
        'Clinical Lead'
      ]
    }
  },
  'specialist-practitioner': {
    title: 'Specialist Practitioner',
    slug: 'specialist-practitioner',
    description: 'Specialist Practitioners are experienced healthcare professionals who provide expert care in specific areas of practice.',
    salary: {
      entry: '£35,000',
      experienced: '£45,000',
      senior: '£55,000'
    },
    paths: {
      university: {
        title: 'Specialist Practice Degree',
        description: 'Advanced study in a specific area of healthcare practice.',
        requirements: [
          'Registered healthcare professional qualification',
          'Current professional registration',
          'Relevant clinical experience'
        ],
        duration: '1-2 years',
        qualificationLevel: 'Level 7 (Master\'s Degree)',
        providers: [
          'University of Sheffield',
          'University of Leeds',
          'Sheffield Hallam University'
        ]
      },
      apprenticeship: {
        title: 'Advanced Clinical Practitioner Apprenticeship',
        description: 'Develop advanced skills while working in a specialist role.',
        requirements: [
          'Current professional registration',
          'Relevant degree',
          'Significant clinical experience'
        ],
        duration: '2-3 years',
        qualificationLevel: 'Level 7',
        providers: [
          'NHS Trusts',
          'Specialist healthcare providers',
          'Training institutions'
        ]
      }
    },
    skills: [
      'Advanced Clinical Skills',
      'Specialist Knowledge',
      'Leadership',
      'Research',
      'Teaching',
      'Service Development'
    ],
    dayToDay: [
      'Providing specialist assessments',
      'Developing treatment plans',
      'Leading specialist clinics',
      'Teaching and mentoring',
      'Service improvement',
      'Research activities'
    ],
    workEnvironment: 'Work in specialist units, clinics or community settings. May involve travel between sites and regular professional development.',
    futureProspects: [
      'Consultant Practitioner',
      'Clinical Lead',
      'Service Manager',
      'Research Lead'
    ],
    requiredQualifications: [
      'Professional registration',
      'Specialist qualification',
      'Advanced practice certification'
    ],
    desiredQualifications: [
      'Master\'s degree',
      'Research qualifications',
      'Teaching qualifications'
    ],
    industryTrends: [
      'Advanced practice expansion',
      'Integrated care delivery',
      'Digital health innovation',
      'Research-based practice'
    ],
    toolsAndTech: [
      'Specialist clinical equipment',
      'Advanced diagnostic tools',
      'Research software',
      'Teaching technology',
      'Clinical systems'
    ],
    workSchedule: 'Usually regular hours with some on-call responsibilities',
    remoteWorkOptions: 'Some virtual consultations and remote working possible',
    careerPathway: {
      nextSteps: [
        'Consultant Practitioner',
        'Clinical Lead',
        'Research Lead'
      ],
      potentialRoles: [
        'Service Director',
        'Clinical Academic',
        'Professional Lead'
      ]
    }
  }
}; 