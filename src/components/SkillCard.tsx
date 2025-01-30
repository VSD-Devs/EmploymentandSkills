import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Skill } from '../data/careerQuizData';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="overflow-hidden">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left transition-colors ${isExpanded ? 'bg-blue-50' : 'bg-white hover:bg-zinc-50'}`}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center h-14 px-4 border border-zinc-200">
          <div className="flex-shrink-0 w-10">
            <Check className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-grow">
            <h3 className="font-medium text-zinc-900">{skill.name}</h3>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-zinc-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-zinc-400" />
          )}
        </div>
      </button>
      
      <div className={`transition-all duration-200 ease-in-out ${
        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 bg-white border-x border-b border-zinc-200">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600">{skill.description}</p>
            
            <div>
              <h4 className="text-sm font-medium text-zinc-900 mb-2">How to develop this skill:</h4>
              <ul className="list-disc pl-4 text-sm text-zinc-600 space-y-1">
                {skill.learning_resources.map((resource, idx) => (
                  <li key={idx}>{resource}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard; 