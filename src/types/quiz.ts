export interface CareerPath {
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
}

export interface CareerProgression {
  level: string;
  salary: string;
  description?: string;
}

export interface SectorSkills {
  general: string[];
  technical: string[];
}

export interface SectorStat {
  number: string | number;
  label: string;
}

export interface SectorInsights {
  description: string;
  stats: SectorStat[];
  skills: SectorSkills;
  careerProgression: CareerProgression[];
}

export interface CareerRecommendations {
  matchedPaths: CareerPath[];
  dominantTraits: string[];
  keyStrengths: string[];
  sectorInsights: SectorInsights;
} 