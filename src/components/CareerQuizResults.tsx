'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { CareerProfile } from '@/data/careerQuizData';
import { sectorToRoles } from '@/data/careerQuizData';
import { roleData } from '@/data/roles';
import type { RoleData } from '@/types/role';
import { useRouter } from 'next/router';

interface CareerQuizResultsProps {
  recommendations: CareerProfile;
  isDetailedAnalysis: boolean;
  onRetake: () => void;
}

// Map roles to their primary sectors for URL generation
const roleToSector: { [key: string]: string } = {
  'hospitality-manager': 'hospitality-tourism',
  'events-coordinator': 'hospitality-tourism',
  'data-analyst': 'digital-tech',
  'junior-developer': 'digital-tech',
  'software-developer': 'digital-tech',
  'digital-project-manager': 'digital-tech',
  'healthcare-assistant': 'healthcare',
  'care-worker': 'healthcare',
  'support-worker': 'healthcare',
  'registered-nurse': 'healthcare',
  'specialist-practitioner': 'healthcare',
  'team-leader': 'business-finance',
  'financial-advisor': 'business-finance',
  'manufacturing-technician': 'manufacturing',
  'production-supervisor': 'manufacturing',
  'manufacturing-engineer': 'manufacturing',
  'site-supervisor': 'construction',
  'project-manager': 'construction',
  'construction-manager': 'construction',
  'digital-designer': 'creative-media',
  'content-creator': 'creative-media'
};

export default function CareerQuizResults({
  recommendations,
  isDetailedAnalysis,
  onRetake
}: CareerQuizResultsProps) {
  const { description, recommendedSectors, traits } = recommendations;
  const router = useRouter();

  // Save state before navigating to role
  const handleRoleClick = (role: string) => {
    // Save quiz state to local storage
    const stateToSave = {
      answers: [],
      stage: isDetailedAnalysis ? 2 : 1,
      showResults: true
    };
    localStorage.setItem('careerQuizState', JSON.stringify(stateToSave));
    
    // Get the sector for this role
    const sector = roleToSector[role] || 'digital-tech';
    
    // Navigate to the correct path
    router.push(`/pathways/${sector}/roles/${role}`);
  };

  // Get all recommended roles based on sectors and limit based on stage
  const recommendedRoles = recommendedSectors
    .flatMap(sector => sectorToRoles[sector] || [])
    .filter((role, index, self) => self.indexOf(role) === index) // Remove duplicates
    .slice(0, isDetailedAnalysis ? 5 : 3); // Limit to 3 roles for stage 1, 5 for stage 2

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">Your Career Analysis</h2>
        <p className="text-lg text-zinc-600">
          Based on your responses, we've identified career paths that align with your profile.
          {isDetailedAnalysis && ' Here\'s your detailed career analysis:'}
        </p>
      </div>

      {/* Profile Overview */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h3 className="text-2xl font-semibold text-zinc-900 mb-6">Your Profile</h3>
        <p className="text-lg text-zinc-600 mb-6">{description}</p>
        
        <div className="grid gap-4">
          <div>
            <h4 className="font-medium text-zinc-900 mb-3">Key Traits</h4>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Roles */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h3 className="text-2xl font-semibold text-zinc-900 mb-6">
          Recommended Roles
        </h3>
        <div className="grid gap-6">
          {recommendedRoles.map((roleSlug: string) => {
            const roleInfo = roleData[roleSlug];
            if (!roleInfo) return null;

            const sectorPath = roleToSector[roleSlug];
            if (!sectorPath) return null;

            return (
              <div 
                key={roleSlug} 
                className="role-card cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleRoleClick(roleSlug)}
              >
                <div className="border border-zinc-200 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2">{roleInfo.title}</h4>
                  <p className="text-zinc-600 mb-4">{roleInfo.description}</p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-zinc-900 mb-1">Entry Level</h5>
                      <p className="text-zinc-600">{roleInfo.salary.entry}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-zinc-900 mb-1">Experienced</h5>
                      <p className="text-zinc-600">{roleInfo.salary.experienced}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-zinc-900 mb-1">Senior Level</h5>
                      <p className="text-zinc-600">{roleInfo.salary.senior}</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-zinc-900 mb-2">Key Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {roleInfo.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-medium text-zinc-900 mb-4">Educational Paths</h5>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-zinc-50">
                        <h6 className="font-medium text-zinc-900 mb-2">{roleInfo.paths.university.title}</h6>
                        <p className="text-sm text-zinc-600">{roleInfo.paths.university.description}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-zinc-50">
                        <h6 className="font-medium text-zinc-900 mb-2">{roleInfo.paths.apprenticeship.title}</h6>
                        <p className="text-sm text-zinc-600">{roleInfo.paths.apprenticeship.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={onRetake}
          className="text-lg text-emerald-600 font-medium hover:text-emerald-500"
        >
          Retake Quiz
        </button>
        <Link
          href="/pathways"
          className="inline-flex items-center text-lg text-white bg-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl"
        >
          Explore All Pathways
          <ChevronRight className="ml-2 h-6 w-6" />
        </Link>
      </div>
    </div>
  );
} 