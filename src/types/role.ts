export type CareerPath = {
  title: string;
  description: string;
  requirements: string[];
  duration: string;
  qualificationLevel: string;
  providers?: string[];
};

export type Role = {
  title: string;
  slug: string;
  description: string;
  salary: {
    entry: string;
    experienced: string;
    senior: string;
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
  industryTrends: string[];
  toolsAndTech: string[];
  workSchedule: string;
  remoteWorkOptions: string;
  careerPathway: {
    nextSteps: string[];
    potentialRoles: string[];
  };
};

export type RoleData = Record<string, Role>; 