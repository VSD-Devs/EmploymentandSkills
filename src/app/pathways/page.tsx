'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronDown, ArrowRight, ArrowUp, MapPin, Users, Briefcase, GraduationCap, Filter, Search, Clock, Heart, Check, BookOpen, Award, Compass } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CareerQuizButton from '@/components/CareerQuizButton';

// Dynamic components with optimized loading states
const SectorsGrid = dynamic(() => import('@/components/pathways-optimized/SectorsGrid'), {
  loading: () => (
    <div className="h-[400px] bg-gradient-to-br from-slate-100 to-emerald-50 rounded-xl animate-pulse" />
  ),
  ssr: true
});

const ResourcesSection = dynamic(() => import('@/components/pathways-optimized/ResourcesSection'), {
  loading: () => <div className="h-[300px] bg-white"></div>,
  ssr: true
});

// Simple back to top button
const BackToTopButton = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-50 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all text-white"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

// Popular Career Paths for the Pathways Summary
const popularPaths = [
  {
    name: "Apprenticeships",
    icon: <Award className="h-5 w-5 text-blue-600" />,
    description: "Learn while you earn with structured training and real workplace experience",
    link: "/apprenticeships"
  },
  {
    name: "T-Levels",
    icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
    description: "Technical qualifications equivalent to 3 A Levels with industry placements",
    link: "/t-levels"
  },
  {
    name: "University Degrees",
    icon: <GraduationCap className="h-5 w-5 text-purple-600" />,
    description: "Higher education qualifications from foundation to postgraduate level",
    link: "/university"
  },
  {
    name: "Skills Bootcamps",
    icon: <Compass className="h-5 w-5 text-amber-600" />,
    description: "Short, intensive training courses to quickly develop in-demand skills",
    link: "/skills-bootcamps"
  }
];

// Success stories
const successStories = [
  {
    name: "Sarah Wilson",
    age: 27,
    location: "Sheffield",
    quote: "The apprenticeship route gave me practical experience that landed me my dream job in digital marketing.",
    role: "Digital Marketing Specialist",
    journey: "Digital Marketing Apprenticeship → Junior Role → Specialist",
    image: "/images/testimonials/sophie.jpg"
  },
  {
    name: "James Thompson",
    age: 32,
    location: "Rotherham",
    quote: "My T-Level qualification was the perfect stepping stone to my engineering career and university studies.",
    role: "Advanced Manufacturing Technician",
    journey: "T-Level → University → Junior Engineer → Technician",
    image: "/images/testimonials/james.jpg"
  },
  {
    name: "Aisha Patel",
    age: 24,
    location: "Doncaster",
    quote: "The NHS cadet programme gave me the confidence and skills to pursue my career in healthcare.",
    role: "Healthcare Assistant",
    journey: "Health Cadet → College → NHS Training → Healthcare Assistant",
    image: "/images/testimonials/aisha.jpg"
  }
];

export default function PathwaysPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Scroll handler for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Pathways', href: '/pathways' },
          ]} />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 sm:py-20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full">
              <Image
                src="/images/pathways-hero-bg.jpg"
                alt=""
                fill
                className="object-cover opacity-20 mix-blend-overlay"
                priority
              />
            </div>
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <Compass className="h-4 w-4 text-blue-300" />
                  <span className="text-xs font-medium text-blue-100">Career Navigation</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Career Path</span>
                </h1>
                
                <p className="text-lg text-blue-100 mb-8 max-w-xl">
                  Explore industries, roles, and training opportunities to discover the right career journey for you in South Yorkshire.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                  <CareerQuizButton 
                    variant="primary"
                    className="text-base bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-blue-900/30 inline-flex items-center justify-center"
                  />
                  <Link 
                    href="#sectors" 
                    className="text-base bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                  >
                    Browse Sectors
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              {/* Stats Panel */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-emerald-500/30 rounded-full blur-2xl"></div>
                
                <h2 className="text-xl font-bold text-white mb-5">South Yorkshire Opportunities</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">15,000+</div>
                    <p className="text-sm text-blue-100">Current Job Openings</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">£32,500</div>
                    <p className="text-sm text-blue-100">Average Regional Salary</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">5,400+</div>
                    <p className="text-sm text-blue-100">Apprenticeship Vacancies</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">20+</div>
                    <p className="text-sm text-blue-100">Growth Industries</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-blue-100 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-sm">Updated with the latest regional employment data</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Pathfinder Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
                  <Compass className="h-4 w-4 text-emerald-700" />
                  <span className="text-xs font-medium text-emerald-800">Career Pathfinder</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Find your way forward
                </h2>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                  Whether you're just starting out or looking to change careers, we'll help you navigate your options
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPaths.map((path, i) => (
                <Link 
                  key={i}
                  href={path.link}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
                      {path.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{path.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {path.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                      Explore this option
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Career Explorer Advanced Search Section */}
        <section className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Career Explorer</h2>
                    <p className="text-gray-600">Find opportunities that match your interests and skills</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link 
                      href="/career-quiz" 
                      className="inline-flex items-center text-sm text-blue-600 font-medium"
                    >
                      Not sure where to start? Take our quiz
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-12">
                  {/* Search input */}
                  <div className="sm:col-span-5">
                    <label htmlFor="career-search" className="block text-sm font-medium text-gray-700 mb-1">
                      Find careers or skills
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="career-search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. Software Developer, Nursing..."
                      />
                    </div>
                  </div>
                  
                  {/* Salary range */}
                  <div className="sm:col-span-3">
                    <label htmlFor="salary-range" className="block text-sm font-medium text-gray-700 mb-1">
                      Salary range
                    </label>
                    <select
                      id="salary-range"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>Any salary</option>
                      <option>£20,000+</option>
                      <option>£30,000+</option>
                      <option>£40,000+</option>
                      <option>£50,000+</option>
                    </select>
                  </div>
                  
                  {/* Location */}
                  <div className="sm:col-span-3">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <select
                      id="location"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>All South Yorkshire</option>
                      <option>Sheffield</option>
                      <option>Rotherham</option>
                      <option>Doncaster</option>
                      <option>Barnsley</option>
                    </select>
                  </div>
                  
                  {/* Search button */}
                  <div className="sm:col-span-1">
                    <label className="invisible block text-sm font-medium text-gray-700 mb-1">
                      Search
                    </label>
                    <button
                      type="button"
                      className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Filter className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Filter pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <span>Quick filters:</span>
                  </div>
                  <button
                    className={`px-2.5 py-1 rounded-full text-sm ${activeFilter === 'all' ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}
                    onClick={() => setActiveFilter('all')}
                  >
                    All
                  </button>
                  <button
                    className={`px-2.5 py-1 rounded-full text-sm ${activeFilter === 'entry' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}
                    onClick={() => setActiveFilter('entry')}
                  >
                    Entry Level
                  </button>
                  <button
                    className={`px-2.5 py-1 rounded-full text-sm ${activeFilter === 'remote' ? 'bg-purple-100 text-purple-800 border border-purple-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}
                    onClick={() => setActiveFilter('remote')}
                  >
                    Remote Friendly
                  </button>
                  <button
                    className={`px-2.5 py-1 rounded-full text-sm ${activeFilter === 'high' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}
                    onClick={() => setActiveFilter('high')}
                  >
                    High Demand
                  </button>
                  <button
                    className={`px-2.5 py-1 rounded-full text-sm ${activeFilter === 'training' ? 'bg-sky-100 text-sky-800 border border-sky-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}
                    onClick={() => setActiveFilter('training')}
                  >
                    Training Available
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SectorsGrid Component */}
        <SectorsGrid />
        
        {/* Success Stories Section */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-4">
                  <Heart className="h-4 w-4 text-purple-700" />
                  <span className="text-xs font-medium text-purple-800">Success Stories</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Real career journeys
                </h2>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                  Learn from local people who have built successful careers through different pathways
                </p>
              </div>
              
              <Link 
                href="/stories" 
                className="mt-4 md:mt-0 inline-flex items-center text-purple-700 font-medium hover:text-purple-800 transition-colors"
              >
                View all stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100"
                >
                  <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-900 text-white relative">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                        <Image
                          src={story.image}
                          alt={story.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-indigo-200">{story.role}</p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-white/70">
                          <MapPin className="h-3 w-3" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-white/90 italic">
                      "{story.quote}"
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white flex-grow">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Career Journey:</h4>
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-0.5 bg-blue-600"></div>
                        <p className="text-sm text-gray-700">{story.journey}</p>
                      </div>
                    </div>
                    
                    <Link
                      href={`/stories/${story.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 text-sm"
                    >
                      Read full story
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <ResourcesSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-indigo-400/20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Ready to start your career journey?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Get personalised career recommendations based on your skills, interests and ambitions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CareerQuizButton 
                  variant="primary"
                  className="bg-white text-blue-700 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
                />
                <Link 
                  href="/skills-assessment" 
                  className="bg-blue-500/20 backdrop-blur-sm text-white border border-white/20 py-3 px-6 rounded-lg font-medium hover:bg-blue-500/30 transition-colors"
                >
                  Take skills assessment
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Back to top button */}
        <BackToTopButton visible={showBackToTop} />
      </main>
    </div>
  );
} 