import { Course } from '@/types/funding'

export const courses: Course[] = [
  {
    id: '1',
    title: 'Digital Marketing Essentials',
    provider: 'Sheffield College',
    fundingModel: 'Fully Funded',
    type: 'Digital Skills',
    category: 'Digital Marketing',
    level: 'Level 3',
    description: 'Master the fundamentals of digital marketing, including social media, content creation, and analytics.',
    location: 'Sheffield City Campus',
    duration: '12 weeks',
    startDate: '1 September 2024',
    deliveryMethod: 'Face to Face',
    fundingInfo: 'This course is fully funded through the South Yorkshire Mayoral Combined Authority',
    whatYoullLearn: [
      'Social media marketing',
      'Content creation',
      'Digital analytics',
      'SEO fundamentals',
      'Email marketing'
    ],
    careerOpportunities: [
      'Digital Marketing Executive',
      'Social Media Manager',
      'Content Strategist',
      'Marketing Coordinator'
    ],
    qualifications: ['Digital Marketing Certificate', 'Google Analytics Certification'],
    sectors: ['Digital', 'Marketing', 'Business'],
    slug: 'digital-marketing-essentials',
    fundingType: 'Fully Funded'
  },
  {
    id: '2',
    title: 'Healthcare Support Worker',
    provider: 'Barnsley College',
    fundingModel: 'Fully Funded',
    type: 'Healthcare',
    category: 'Healthcare Support',
    level: 'Level 2',
    description: 'Develop essential skills for working in healthcare settings, including patient care and medical terminology.',
    location: 'Barnsley Main Campus',
    duration: '16 weeks',
    startDate: '15 September 2024',
    deliveryMethod: 'Face to Face',
    fundingInfo: 'This course is fully funded through the South Yorkshire Mayoral Combined Authority',
    whatYoullLearn: [
      'Patient care fundamentals',
      'Medical terminology',
      'Health and safety',
      'Communication skills'
    ],
    careerOpportunities: [
      'Healthcare Support Worker',
      'Care Assistant',
      'Medical Administrator'
    ],
    qualifications: ['Healthcare Support Certificate', 'First Aid Certificate'],
    sectors: ['Healthcare', 'Social Care'],
    slug: 'healthcare-support-worker',
    fundingType: 'Fully Funded'
  },
  {
    id: '3',
    title: 'Sustainable Construction Practices',
    provider: 'Rotherham College',
    fundingModel: 'Co-Funded',
    type: 'Construction',
    category: 'Sustainable Construction',
    level: 'Level 3',
    description: 'Learn modern construction techniques with a focus on sustainability and environmental considerations.',
    location: 'Rotherham Construction Centre',
    duration: '24 weeks',
    startDate: '1 October 2024',
    deliveryMethod: 'Blended',
    fundingInfo: 'This course is co-funded with employer contribution required',
    whatYoullLearn: [
      'Sustainable building methods',
      'Environmental regulations',
      'Green materials',
      'Energy efficiency'
    ],
    careerOpportunities: [
      'Sustainable Construction Manager',
      'Environmental Consultant',
      'Green Building Specialist'
    ],
    qualifications: ['Sustainable Construction Certificate', 'Site Safety Passport'],
    sectors: ['Construction', 'Environmental'],
    slug: 'sustainable-construction-practices',
    fundingType: 'Co-Funded'
  },
  {
    id: '4',
    title: 'Advanced Manufacturing Technologies',
    provider: 'Doncaster College',
    fundingModel: 'Advanced Learner Loan',
    type: 'Manufacturing',
    category: 'Advanced Manufacturing',
    level: 'Level 4',
    description: 'Explore cutting-edge manufacturing technologies including robotics and automation.',
    location: 'Doncaster AMRC',
    duration: '20 weeks',
    startDate: '15 October 2024',
    deliveryMethod: 'Face to Face',
    fundingInfo: 'This course is eligible for Advanced Learner Loan funding',
    whatYoullLearn: [
      'Robotics and automation',
      'CAD/CAM systems',
      'Quality control',
      'Process optimization'
    ],
    careerOpportunities: [
      'Manufacturing Engineer',
      'Process Engineer',
      'Automation Specialist'
    ],
    qualifications: ['Advanced Manufacturing Certificate', 'CAD/CAM Certification'],
    sectors: ['Manufacturing', 'Engineering', 'Technology'],
    slug: 'advanced-manufacturing-technologies',
    fundingType: 'Advanced Learner Loan'
  }
] 