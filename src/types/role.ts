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
};

export type RoleData = Record<string, Role>; 