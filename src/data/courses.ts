import { Course } from '@/types/funding'

export const courses: Course[] = [
  {
    id: '1',
    title: 'Digital Marketing Essentials',
    provider: 'Sheffield College',
    level: 'Level 3',
    duration: '12 weeks',
    fundingType: 'Fully Funded',
    startDate: '1 September 2024',
    location: 'Sheffield City Campus',
    description: 'Master the fundamentals of digital marketing, including social media, content creation, and analytics.',
    qualifications: ['Digital Marketing Certificate', 'Google Analytics Certification'],
    sectors: ['Digital', 'Marketing', 'Business']
  },
  {
    id: '2',
    title: 'Healthcare Support Worker',
    provider: 'Barnsley College',
    level: 'Level 2',
    duration: '16 weeks',
    fundingType: 'Fully Funded',
    startDate: '15 September 2024',
    location: 'Barnsley Main Campus',
    description: 'Develop essential skills for working in healthcare settings, including patient care and medical terminology.',
    qualifications: ['Healthcare Support Certificate', 'First Aid Certificate'],
    sectors: ['Healthcare', 'Social Care']
  },
  {
    id: '3',
    title: 'Sustainable Construction Practices',
    provider: 'Rotherham College',
    level: 'Level 3',
    duration: '24 weeks',
    fundingType: 'Co-Funded',
    startDate: '1 October 2024',
    location: 'Rotherham Construction Centre',
    description: 'Learn modern construction techniques with a focus on sustainability and environmental considerations.',
    qualifications: ['Sustainable Construction Certificate', 'Site Safety Passport'],
    sectors: ['Construction', 'Environmental']
  },
  {
    id: '4',
    title: 'Advanced Manufacturing Technologies',
    provider: 'Doncaster College',
    level: 'Level 4',
    duration: '20 weeks',
    fundingType: 'Advanced Learner Loan',
    startDate: '15 October 2024',
    location: 'Doncaster AMRC',
    description: 'Explore cutting-edge manufacturing technologies including robotics and automation.',
    qualifications: ['Advanced Manufacturing Certificate', 'CAD/CAM Certification'],
    sectors: ['Manufacturing', 'Engineering', 'Technology']
  }
] 