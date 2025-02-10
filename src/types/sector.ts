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

export interface CareerProgressionLevel {
  title: string;
  roles: string[];
}

export interface CareerProgression {
  title: string;
  levels: CareerProgressionLevel[];
}

export interface Skills {
  general: string[];
  specialist: string[];
}

export interface Sector {
  slug: string;
  title: string;
  description: string;
  category: string;
  stats: Stat[];
  skills: Skills;
  careerProgression: CareerProgression;
  traits?: string[];
}

export interface SectorData {
  [key: string]: Sector;
} 