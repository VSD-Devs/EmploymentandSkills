import React from 'react';
import Link from 'next/link';
import { categoryThemes } from '@/data/roles';

// Define types for our data structures
type CategoryKey = keyof typeof categoryThemes;

type SectorItem = {
  id: string;
  name: string;
  dataCategory: CategoryKey | string;
  color: string;
};

// Define a mapping function for color styles based on categoryThemes
const getColorStyle = (category: string): string => {
  if (category in categoryThemes) {
    const theme = categoryThemes[category as CategoryKey];
    return `bg-${theme.color}-100 text-${theme.color}-700`;
  }
  return 'bg-gray-100 text-gray-700';
};

// Updated sector data to match valid route slugs and use consistent design colors
const sectors: SectorItem[] = [
  { 
    id: 'digital-tech', 
    name: 'Digital & Tech', 
    dataCategory: 'digital', 
    color: getColorStyle('digital')
  },
  { 
    id: 'business-finance', 
    name: 'Business & Finance', 
    dataCategory: 'business',
    color: getColorStyle('business')
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare', 
    dataCategory: 'healthcare',
    color: getColorStyle('healthcare')
  },
  { 
    id: 'creative-media', 
    name: 'Creative Industries', 
    dataCategory: 'creative',
    color: getColorStyle('creative')
  },
  { 
    id: 'manufacturing', 
    name: 'Engineering & Manufacturing', 
    dataCategory: 'engineering',
    color: getColorStyle('engineering')
  },
  { 
    id: 'hospitality-tourism', 
    name: 'Hospitality & Tourism', 
    dataCategory: 'hospitality',
    color: getColorStyle('hospitality')
  },
  { 
    id: 'construction', 
    name: 'Construction', 
    dataCategory: 'construction',
    color: getColorStyle('construction')
  },
  { 
    id: 'education-training', 
    name: 'Education & Training', 
    dataCategory: 'education',
    color: 'bg-violet-100 text-violet-700' // Education isn't in categoryThemes, using default
  }
];

export default function SectorsGrid() {
  return (
    <section id="sectors" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Explore Career Sectors
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector) => (
            <Link 
              key={sector.id}
              href={`/pathways/${sector.id}`}
              className={`${sector.color} p-6 rounded-lg hover:shadow-md transition-shadow`}
            >
              <h3 className="font-semibold text-lg mb-2">{sector.name}</h3>
              <p className="text-sm opacity-80">Explore careers</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/skills-assessment"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Take skills assessment
          </Link>
        </div>
      </div>
    </section>
  );
} 