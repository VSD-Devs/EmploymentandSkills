import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { categoryThemes } from '@/data/roles';

// Define types for our data structures
type CategoryKey = keyof typeof categoryThemes;

type SectorItem = {
  id: string;
  name: string;
  dataCategory: CategoryKey | string;
  description: string;
  icon: string;
  jobs: number;
};

// Updated sector data with more detailed information
const sectors: SectorItem[] = [
  { 
    id: 'digital-tech', 
    name: 'Digital & Technology', 
    dataCategory: 'digital',
    description: 'From software development to cybersecurity, explore tech careers shaping our future',
    icon: '/images/icons/digital-icon.svg',
    jobs: 2500
  },
  { 
    id: 'business-finance', 
    name: 'Business & Finance', 
    dataCategory: 'business',
    description: 'Discover roles in accounting, management, banking and financial services',
    icon: '/images/icons/business-icon.svg',
    jobs: 3100
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare & Wellbeing', 
    dataCategory: 'healthcare',
    description: 'Make a difference with careers in healthcare, social care and wellbeing services',
    icon: '/images/icons/healthcare-icon.svg',
    jobs: 4200
  },
  { 
    id: 'creative-media', 
    name: 'Creative Industries', 
    dataCategory: 'creative',
    description: 'Explore careers in design, media, art, music and performing arts',
    icon: '/images/icons/creative-icon.svg',
    jobs: 1800
  },
  { 
    id: 'manufacturing', 
    name: 'Engineering & Manufacturing', 
    dataCategory: 'engineering',
    description: 'Develop skills in advanced manufacturing, engineering and production',
    icon: '/images/icons/manufacturing-icon.svg',
    jobs: 2200
  },
  { 
    id: 'hospitality-tourism', 
    name: 'Hospitality & Tourism', 
    dataCategory: 'hospitality',
    description: 'From hotels to events management, discover service industry careers',
    icon: '/images/icons/hospitality-icon.svg',
    jobs: 2800
  },
  { 
    id: 'construction', 
    name: 'Construction & Infrastructure', 
    dataCategory: 'construction',
    description: 'Build your future with careers in construction, architecture and planning',
    icon: '/images/icons/construction-icon.svg',
    jobs: 1900
  },
  { 
    id: 'education-training', 
    name: 'Education & Training', 
    dataCategory: 'education',
    description: 'Shape the next generation through teaching, training and educational roles',
    icon: '/images/icons/education-icon.svg',
    jobs: 2100
  }
];

// Get category theme
const getCategoryTheme = (category: string) => {
  if (category in categoryThemes) {
    return categoryThemes[category as CategoryKey];
  }
  // Default theme if category not found
  return {
    color: 'bg-gray-500',
    textColor: 'text-gray-500',
    gradientFrom: 'from-gray-500',
    gradientTo: 'to-gray-700',
    borderColor: 'border-gray-500',
    hoverBg: 'hover:bg-gray-600',
  };
};

export default function SectorsGrid() {
  return (
    <section id="sectors" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <Briefcase className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-800">Career Sectors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Explore Career Sectors
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              Discover opportunities across South Yorkshire's diverse industries and find your perfect career match
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const theme = getCategoryTheme(sector.dataCategory);
            
            return (
              <Link 
                key={sector.id}
                href={`/pathways/${sector.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full"
              >
                <div className={`h-2.5 w-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo}`}></div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3.5 rounded-full ${theme.color}`}>
                      <div className="relative w-6 h-6">
                        <Image
                          src={sector.icon}
                          alt=""
                          fill
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mt-1">{sector.name}</h3>
                  </div>
                  
                  <p className="text-base text-gray-600 mb-6">
                    {sector.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-base text-gray-500">
                      <span className={`font-medium ${theme.textColor}`}>{sector.jobs.toLocaleString()}+</span> opportunities
                    </span>
                    
                    <span className={`text-base font-medium ${theme.textColor} flex items-center gap-1 group-hover:underline`}>
                      Explore
                      <ArrowRight className={`h-5 w-5 transform group-hover:translate-x-1 transition-transform`} />
                    </span>
                  </div>

                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${theme.gradientFrom} opacity-5 -translate-y-1/2 translate-x-1/2`}></div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-16">
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md overflow-hidden p-8">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <div className="w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Not sure which sector is right for you?
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Take our quick skills assessment to discover which career paths might match your interests and abilities.
                </p>
                <Link
                  href="/skills-assessment"
                  className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg transition-colors font-medium text-lg"
                >
                  <Sparkles className="h-5 w-5" />
                  Take skills assessment
                </Link>
              </div>
              
              <div className="md:w-1/3 relative h-60 md:h-auto">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent mix-blend-overlay"></div>
                  <Image
                    src="/images/skills-assessment.jpg"
                    alt="Skills assessment illustration"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need more guidance?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with career advisors or explore additional resources to help you make informed decisions about your career journey
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.slice(0, 4).map((sector) => {
              const theme = getCategoryTheme(sector.dataCategory);
              return (
                <Link 
                  key={`resource-${sector.id}`}
                  href={`/resources/${sector.id}`}
                  className={`rounded-xl p-6 border-2 ${theme.borderColor} bg-white hover:bg-gray-50 transition-colors`}
                >
                  <h4 className={`font-semibold text-lg mb-2 ${theme.textColor}`}>{sector.name} resources</h4>
                  <p className="text-gray-600 text-base mb-3">Explore guides, videos and opportunities</p>
                  <span className="inline-flex items-center gap-1 text-base font-medium">
                    View resources
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 