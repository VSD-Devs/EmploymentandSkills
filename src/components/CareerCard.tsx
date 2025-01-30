import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { Career } from '../data/careerQuizData';

interface CareerCardProps {
  career: Career;
}

const CareerCard = ({ career }: CareerCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="overflow-hidden">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left transition-colors ${isExpanded ? 'bg-emerald-50' : 'bg-white hover:bg-zinc-50'}`}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center h-14 px-4 border border-zinc-200">
          <div className="flex-shrink-0 w-10">
            <Briefcase className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="flex-grow">
            <h3 className="font-medium text-zinc-900">{career.title}</h3>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-zinc-900">{career.salary}</div>
              <div className="text-xs text-emerald-600">{career.demand}</div>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </div>
        </div>
      </button>
      
      <div className={`transition-all duration-200 ease-in-out ${
        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 bg-white border-x border-b border-zinc-200">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600">{career.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <h4 className="text-sm font-medium text-zinc-900 mb-2">Career Progression</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Entry</span>
                    <span className="text-zinc-900">{career.progression.entry}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Mid-Level</span>
                    <span className="text-zinc-900">{career.progression.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-600">Senior</span>
                    <span className="text-zinc-900">{career.progression.senior}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <h4 className="text-sm font-medium text-zinc-900 mb-2">Local Opportunities</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-zinc-600">Top businesses:</span>
                    <div className="text-zinc-900">{career.localOpportunities.employers.slice(0, 2).join(", ")}</div>
                  </div>
                  <div>
                    <span className="text-zinc-600">Training:</span>
                    <div className="text-zinc-900">{career.localOpportunities.courses[0].provider}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard; 