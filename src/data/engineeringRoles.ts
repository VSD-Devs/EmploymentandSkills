import { RoleData } from '@/types/role';

export const engineeringRoles: RoleData = {
  'manufacturing-technician': {
    title: 'Manufacturing Technician',
    slug: 'manufacturing-technician',
    description: 'Manufacturing Technicians operate and maintain production equipment, ensuring efficient and safe manufacturing processes.',
    salary: {
      entry: '£22,000',
      experienced: '£32,000',
      senior: '£40,000'
    },
    paths: {
      university: {
        title: 'Manufacturing Engineering Degree',
        description: 'A degree focusing on manufacturing processes, technology, and engineering principles.',
        requirements: [
          'A-levels including Mathematics and Science',
          'GCSE English and Mathematics at grade C/4 or above',
          'Technical aptitude'
        ],
        duration: '3-4 years',
        qualificationLevel: 'Level 6 (Bachelor\'s Degree)',
        providers: [
          'University of Sheffield',
          'Leeds University',
          'Sheffield Hallam University'
        ]
      },
      apprenticeship: {
        title: 'Manufacturing Technician Apprenticeship',
        description: 'Hands-on training in manufacturing processes and equipment maintenance.',
        requirements: [
          'GCSEs including Mathematics and Science',
          'Technical mindset',
          'Good problem-solving skills'
        ],
        duration: '36-48 months',
        qualificationLevel: 'Level 3-4',
        providers: [
          'Manufacturing companies',
          'Training centres',
          'Local colleges'
        ]
      }
    },
    skills: [
      'Equipment Operation',
      'Technical Problem-Solving',
      'Quality Control',
      'Health and Safety',
      'Process Improvement',
      'Maintenance'
    ],
    dayToDay: [
      'Operating production equipment',
      'Performing quality checks',
      'Maintaining machinery',
      'Following safety procedures',
      'Recording production data',
      'Troubleshooting issues'
    ],
    workEnvironment: 'Work in manufacturing facilities with modern production equipment. May involve shift work and standing for long periods.',
    futureProspects: [
      'Senior Technician',
      'Production Supervisor',
      'Manufacturing Engineer',
      'Technical Specialist'
    ],
    requiredQualifications: [
      'Level 3 qualification in engineering/manufacturing',
      'Health and safety certification',
      'Equipment operation certificates'
    ],
    desiredQualifications: [
      'Higher level technical qualifications',
      'Specialist equipment certifications',
      'Quality control certification'
    ],
    industryTrends: [
      'Automation and robotics',
      'Smart manufacturing',
      'Sustainable production',
      'Digital monitoring systems'
    ],
    toolsAndTech: [
      'Production machinery',
      'Testing equipment',
      'Monitoring systems',
      'Maintenance tools',
      'Quality control software'
    ],
    workSchedule: 'Shift patterns including days, nights, and weekends',
    remoteWorkOptions: 'Limited - role requires on-site presence',
    careerPathway: {
      nextSteps: [
        'Senior Technician',
        'Team Leader',
        'Quality Specialist'
      ],
      potentialRoles: [
        'Production Manager',
        'Technical Manager',
        'Operations Supervisor'
      ]
    }
  },
  'process-engineer': {
    title: 'Process Engineer',
    slug: 'process-engineer',
    description: 'Process Engineers design, implement and optimise manufacturing processes to improve efficiency, quality and sustainability.',
    salary: {
      entry: '£28,000',
      experienced: '£45,000',
      senior: '£60,000'
    },
    paths: {
      university: {
        title: 'Chemical/Process Engineering Degree',
        description: 'A degree covering process engineering principles, design, and optimisation.',
        requirements: [
          'A-levels including Mathematics and Chemistry',
          'GCSE English and Mathematics at grade B/6 or above',
          'Strong analytical skills'
        ],
        duration: '4 years',
        qualificationLevel: 'Level 6 (Master\'s Degree)',
        providers: [
          'University of Sheffield',
          'University of Leeds',
          'University of Bradford'
        ]
      },
      apprenticeship: {
        title: 'Process Engineering Degree Apprenticeship',
        description: 'Combine work and study to gain practical experience and academic qualifications.',
        requirements: [
          'A-levels including Mathematics and Science',
          'Strong problem-solving abilities',
          'Technical mindset'
        ],
        duration: '48-60 months',
        qualificationLevel: 'Level 6-7',
        providers: [
          'Manufacturing companies',
          'Engineering firms',
          'Partner universities'
        ]
      }
    },
    skills: [
      'Process Design',
      'Project Management',
      'Technical Analysis',
      'Problem Solving',
      'Quality Management',
      'Risk Assessment'
    ],
    dayToDay: [
      'Analysing production processes',
      'Implementing improvements',
      'Managing projects',
      'Conducting trials',
      'Writing technical reports',
      'Collaborating with teams'
    ],
    workEnvironment: 'Work in manufacturing facilities, laboratories, and offices. Involves site visits and project meetings.',
    futureProspects: [
      'Senior Process Engineer',
      'Technical Manager',
      'Project Manager',
      'Consulting Engineer'
    ],
    requiredQualifications: [
      'Engineering degree or equivalent',
      'Professional registration (working towards)',
      'Health and safety certifications'
    ],
    desiredQualifications: [
      'Chartered Engineer status',
      'Project management qualifications',
      'Specialist technical certificates'
    ],
    industryTrends: [
      'Industry 4.0 integration',
      'Sustainable processing',
      'Digital twin technology',
      'Clean manufacturing'
    ],
    toolsAndTech: [
      'Process simulation software',
      'CAD systems',
      'Project management tools',
      'Data analysis software',
      'Quality control systems'
    ],
    workSchedule: 'Regular business hours with occasional evening/weekend work',
    remoteWorkOptions: 'Hybrid working possible with some site presence required',
    careerPathway: {
      nextSteps: [
        'Senior Process Engineer',
        'Project Manager',
        'Technical Specialist'
      ],
      potentialRoles: [
        'Engineering Manager',
        'Technical Director',
        'Consulting Engineer'
      ]
    }
  }
}; 