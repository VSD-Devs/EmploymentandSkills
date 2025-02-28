import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Static resources data to avoid data fetching
const resources = [
  { id: 'entry-level', name: 'Entry-level roles', href: '/pathways/entry-level' },
  { id: 'apprenticeships', name: 'Apprenticeships', href: '/apprenticeships' },
  { id: 'career-change', name: 'Career changers', href: '/career-change' },
  { id: 'cv-help', name: 'CV & application help', href: '/employment-support' },
  { id: 'local-employers', name: 'Local employers', href: '/employers' }
];

export default function ResourcesSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
            <span className="text-sm font-medium text-emerald-800">Career Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Essential Career Resources
          </h2>
          <p className="text-lg text-slate-600">
            Tools and opportunities to advance your career in South Yorkshire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Link 
              key={resource.id}
              href={resource.href}
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {resource.name}
                </h3>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 