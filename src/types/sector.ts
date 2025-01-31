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

export interface GreenJobs {
  title: string;
  description: string;
  roles: string[];
}

export interface Sector {
  title: string;
  description: string;
  stats: Stat[];
  careerProgression: CareerProgression;
  skills: Skills;
  greenJobs: GreenJobs;
}

export interface SectorData {
  [key: string]: Sector;
} 