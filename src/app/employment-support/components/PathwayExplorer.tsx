import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CareerPath } from '../types';
import { CAREER_PATHS } from '../constants';

interface PathwayExplorerProps {
  onProgrammeSelect: (programme: string) => void;
}

const PathwayExplorer: React.FC<PathwayExplorerProps> = ({ onProgrammeSelect }) => {
  const [activePath, setActivePath] = useState<CareerPath>(CAREER_PATHS[0]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Pathway Selection Tabs */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200">
        {CAREER_PATHS.map((path) => (
          <button
            key={path.id}
            onClick={() => setActivePath(path)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activePath.id === path.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {path.title}
          </button>
        ))}
      </div>

      {/* Pathway Content */}
      <div className="grid md:grid-cols-5 gap-0">
        {/* Information panel - 3 columns */}
        <div className="md:col-span-3 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{activePath.title}</h3>
          <p className="text-gray-600 mb-6">{activePath.description}</p>

          {/* Key Skills */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {activePath.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Example Jobs */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Example Jobs</h4>
            <ul className="space-y-2">
              {activePath.jobExamples.map((job, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Programmes */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Recommended Support</h4>
            <div className="space-y-3">
              {activePath.programmes.map((programme, index) => (
                <button
                  key={index}
                  onClick={() => onProgrammeSelect(programme)}
                  className="inline-flex items-center w-full p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors text-left group"
                >
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{programme}</h5>
                    <p className="text-sm text-gray-600">Tailored support for this career path</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image panel - 2 columns */}
        <div className="md:col-span-2 relative bg-gray-100 min-h-[300px] md:min-h-full">
          <Image
            src={activePath.image}
            alt={activePath.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex flex-col justify-end p-6">
            <Link 
              href="/pathways"
              className="inline-flex items-center self-start px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-900 hover:bg-white/100 transition-colors shadow-sm"
            >
              Explore All Pathways
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathwayExplorer; 