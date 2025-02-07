import { LucideIcon } from 'lucide-react';

export interface Stat {
  icon: string;
  number: string;
  label: string;
}

export interface CareerLevel {
  title: string;
  roles: string[];
}

export interface CareerProgression {
  title: string;
  levels: CareerLevel[];
}

export interface Skills {
  general: string[];
  specialist: string[];
}

export interface Sector {
  slug: string;
  title: string;
  description: string;
  stats: Stat[];
  careerProgression: CareerProgression;
  skills: Skills;
}

export interface SectorData {
  [key: string]: Sector;
} 