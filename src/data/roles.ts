import { Role, RoleData, CareerPath, Testimonial } from '@/types/role';

// Define common themes for categories to ensure consistent color schemes
export const categoryThemes = {
  digital: {
    color: 'bg-blue-500',
    textColor: 'text-blue-500',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-700',
    borderColor: 'border-blue-500',
    hoverBg: 'hover:bg-blue-600',
  },
  business: {
    color: 'bg-emerald-500',
    textColor: 'text-emerald-500',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-700',
    borderColor: 'border-emerald-500',
    hoverBg: 'hover:bg-emerald-600',
  },
  healthcare: {
    color: 'bg-red-500',
    textColor: 'text-red-500',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-700',
    borderColor: 'border-red-500',
    hoverBg: 'hover:bg-red-600',
  },
  creative: {
    color: 'bg-purple-500',
    textColor: 'text-purple-500',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-700',
    borderColor: 'border-purple-500',
    hoverBg: 'hover:bg-purple-600',
  },
  engineering: {
    color: 'bg-amber-500',
    textColor: 'text-amber-500',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-700',
    borderColor: 'border-amber-500',
    hoverBg: 'hover:bg-amber-600',
  },
  hospitality: {
    color: 'bg-pink-500',
    textColor: 'text-pink-500',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-700',
    borderColor: 'border-pink-500',
    hoverBg: 'hover:bg-pink-600',
  }
};

// Create dummy career path for our placeholder data
const dummyCareerPath: CareerPath = {
  title: "Dummy Path",
  description: "Placeholder career path description",
  requirements: ["Requirement 1", "Requirement 2"],
  duration: "3-4 years",
  qualificationLevel: "Level 4",
  providers: ["Provider 1", "Provider 2"]
};

// Create a dummy Role structure to satisfy TypeScript
const createDummyRole = (roleSlug: string): Role => ({
  title: roleSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  slug: roleSlug,
  description: `This is a placeholder description for ${roleSlug}`,
  salary: {
    entry: "£20,000",
    experienced: "£30,000",
    senior: "£40,000",
    averageByRegion: {
      "South Yorkshire": "£30,000"
    }
  },
  paths: {
    university: dummyCareerPath,
    apprenticeship: dummyCareerPath
  },
  skills: ["Communication", "Teamwork", "Problem Solving"],
  dayToDay: ["Task 1", "Task 2", "Task 3"],
  workEnvironment: "Office-based with some remote work options",
  futureProspects: ["Advancement opportunity 1", "Advancement opportunity 2"],
  requiredQualifications: ["Qualification 1", "Qualification 2"],
  desiredQualifications: ["Qualification 3", "Qualification 4"],
  industryTrends: [
    {
      trend: "Industry trend 1",
      impact: "Impact description",
      opportunity: "Opportunity description"
    }
  ],
  toolsAndTech: ["Tool 1", "Tool 2"],
  workSchedule: "Monday to Friday, 9am-5pm",
  remoteWorkOptions: "Hybrid working available",
  careerPathway: {
    nextSteps: ["Next step 1", "Next step 2"],
    potentialRoles: ["Potential role 1", "Potential role 2"]
  },
  testimonials: [
    {
      name: "John Doe",
      role: "Senior Professional",
      quote: "Placeholder testimonial quote"
    }
  ],
  localEmployers: ["Employer 1", "Employer 2"],
  videoUrl: ""
});

// Create dummy roleData with entries for all the keys used in the application
export const roleData: Record<string, Role> = {
  'financial-advisor': createDummyRole('financial-advisor'),
  'data-analyst': createDummyRole('data-analyst'),
  'healthcare-assistant': createDummyRole('healthcare-assistant'),
  'care-worker': createDummyRole('care-worker'),
  'registered-nurse': createDummyRole('registered-nurse'),
  'specialist-practitioner': createDummyRole('specialist-practitioner'),
  'team-leader': createDummyRole('team-leader'),
  'support-worker': createDummyRole('support-worker'),
  'senior-care-worker': createDummyRole('senior-care-worker'),
  'care-manager': createDummyRole('care-manager'),
  'hospitality-manager': createDummyRole('hospitality-manager'),
  'events-coordinator': createDummyRole('events-coordinator'),
  'junior-developer': createDummyRole('junior-developer'),
  'software-developer': createDummyRole('software-developer'),
  'technical-architect': createDummyRole('technical-architect'),
  'digital-designer': createDummyRole('digital-designer'),
  'content-creator': createDummyRole('content-creator'),
  'manufacturing-technician': createDummyRole('manufacturing-technician'),
  'process-engineer': createDummyRole('process-engineer')
}; 