export type CareerPath = {
  title: string;
  description: string;
  requirements: string[];
  duration: string;
  qualificationLevel: string;
  providers?: string[];
};

export interface Testimonial {
  imageUrl?: string;
  name: string;
  role: string;
  quote: string;
}

export type Role = {
  title: string;
  slug: string;
  category?: string;
  description: string;
  featured?: boolean;
  salary: {
    entry: string;
    experienced: string;
    senior: string;
    averageByRegion?: {
      [region: string]: string;
    };
    additionalInfo?: string;
  };
  paths: {
    university: CareerPath;
    apprenticeship: CareerPath;
  };
  skills: string[];
  dayToDay: string[];
  workEnvironment: string;
  futureProspects: string[];
  requiredQualifications: string[];
  desiredQualifications: string[];
  industryTrends: {
    trend: string;
    impact: string;
    opportunity: string;
  }[];
  toolsAndTech: string[];
  workSchedule: string;
  remoteWorkOptions: string;
  careerPathway: {
    nextSteps: string[];
    potentialRoles: string[];
  };
  testimonials?: Testimonial[];
  localEmployers?: string[];
  videoUrl?: string;
};

export type RoleData = Record<string, Role>; 