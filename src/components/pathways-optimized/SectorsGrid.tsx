import React from 'react';
import Link from 'next/link';

// Static sector data to avoid data fetching
const sectors = [
  { id: 'digital', name: 'Digital & Tech', color: 'bg-purple-100 text-purple-700' },
  { id: 'business', name: 'Business & Finance', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'healthcare', name: 'Healthcare', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'creative', name: 'Creative Industries', color: 'bg-amber-100 text-amber-700' },
  { id: 'engineering', name: 'Engineering', color: 'bg-blue-100 text-blue-700' },
  { id: 'hospitality', name: 'Hospitality', color: 'bg-slate-100 text-slate-700' },
  { id: 'construction', name: 'Construction', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'education', name: 'Education', color: 'bg-violet-100 text-violet-700' }
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