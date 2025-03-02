'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, MapPin, Users, Briefcase, GraduationCap, Filter, Search, Clock, Heart } from 'lucide-react';
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
      className="fixed right-6 bottom-6 z-50 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700">
        <path d="M18 15L12 9L6 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

// Featured pathways data
const featuredPathways = [
  {
    title: "Digital & Tech",
    description: "From software development to cybersecurity, explore digital careers shaping our future",
    image: "/images/sectors/digital.jpg",
    color: "from-blue-600 to-indigo-700",
    icon: "/images/icons/digital-icon.svg",
    stats: {
      avgSalary: "£42,000",
      growthRate: "15%",
      openings: "2,500+"
    },
    roles: ["Software Developer", "Data Analyst", "Cybersecurity Specialist"]
  },
  {
    title: "Healthcare",
    description: "Make a difference with a rewarding career in healthcare and wellbeing services",
    image: "/images/sectors/healthcare.jpg",
    color: "from-rose-600 to-pink-700",
    icon: "/images/icons/healthcare-icon.svg",
    stats: {
      avgSalary: "£35,000",
      growthRate: "12%",
      openings: "3,800+"
    },
    roles: ["Nurse", "Healthcare Assistant", "Physiotherapist"]
  },
  {
    title: "Manufacturing",
    description: "Develop skills in advanced manufacturing and engineering across South Yorkshire",
    image: "/images/sectors/manufacturing.jpg",
    color: "from-amber-500 to-orange-600",
    icon: "/images/icons/manufacturing-icon.svg",
    stats: {
      avgSalary: "£36,000",
      growthRate: "8%",
      openings: "1,900+"
    },
    roles: ["Manufacturing Technician", "Process Engineer", "Quality Control"]
  }
];

// Career journey profiles
const careerProfiles = [
  {
    name: "Sarah Wilson",
    age: 27,
    location: "Sheffield",
    role: "Digital Marketing Specialist",
    journey: "Apprenticeship → Full-time role",
    image: "/images/testimonials/sophie.jpg",
    color: "bg-emerald-500"
  },
  {
    name: "James Thompson",
    age: 32,
    location: "Rotherham",
    role: "Advanced Manufacturing Technician",
    journey: "T-Level → University → Career",
    image: "/images/testimonials/james.jpg",
    color: "bg-blue-500"
  },
  {
    name: "Aisha Patel",
    age: 24,
    location: "Doncaster",
    role: "Healthcare Assistant",
    journey: "College → Apprenticeship → NHS",
    image: "/images/testimonials/aisha.jpg",
    color: "bg-purple-500"
  }
];

export default function PathwaysPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
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
        {/* Hero Section - Redesigned to match Hero.tsx style */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
                  <span className="text-xs font-medium text-emerald-800">South Yorkshire Pathways</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  Explore  <span className="text-emerald-600">Career Pathways</span> in South Yorkshire
                </h1>
                
                <p className="text-lg md:text-xl text-slate-700 mb-8">
                  Explore industries, roles, and training opportunities to find your perfect career match in our region.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                  <CareerQuizButton 
                    variant="primary"
                    className="text-base bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg inline-flex items-center justify-center"
                  />
                  <Link href="#sectors" className="text-base bg-white text-emerald-700 border border-emerald-200 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center">
                    Browse Sectors
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto md:mx-0">
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">20+</div>
                    <p className="text-sm text-slate-700">Industry Sectors</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">150+</div>
                    <p className="text-sm text-slate-700">Career Roles</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">7,500+</div>
                    <p className="text-sm text-slate-700">Job Openings</p>
                  </div>
                </div>
              </div>
              
              {/* Hero Image/Illustration */}
              <div className="relative hidden md:block">
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                  <Image 
                    src="/images/career-paths-illustration.jpg" 
                    alt="Career pathways illustration showing different career journeys"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                  
                  {/* Overlaid elements */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm font-medium text-slate-900">Explore career pathways</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section - New addition */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="grid md:grid-cols-4 gap-6">
                {/* Keyword search */}
                <div className="md:col-span-2">
                  <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-1">
                    Search for pathways or roles
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="search"
                      className="block w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="e.g. Software Developer, Healthcare..."
                    />
                  </div>
                </div>
                
                {/* Sector dropdown */}
                <div>
                  <label htmlFor="sector" className="block text-sm font-medium text-slate-700 mb-1">
                    Sector
                  </label>
                  <select
                    id="sector"
                    className="block w-full py-3 px-4 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">All Sectors</option>
                    <option value="digital">Digital & Tech</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="creative">Creative Industries</option>
                    <option value="construction">Construction</option>
                  </select>
                </div>
                
                {/* Filter button */}
                <div className="flex items-end">
                  <button
                    type="button"
                    className="w-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-3 rounded-lg hover:bg-emerald-200 transition-colors font-medium flex items-center justify-center"
                  >
                    <Filter className="h-5 w-5 mr-2" />
                    More Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Pathways Section */}
        <section className="py-16 md:py-24 bg-white" id="featured">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-3">
                <span className="text-xs font-medium text-blue-800">Career Opportunities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Growing Sectors in South Yorkshire
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Explore high-growth industries with excellent career opportunities across our region
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPathways.map((pathway, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="aspect-video relative overflow-hidden">
                    <Image 
                      src={pathway.image} 
                      alt={pathway.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${pathway.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    
                    {/* Sector title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{pathway.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-slate-700 mb-4">{pathway.description}</p>
                    
                    {/* Key stats */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="bg-slate-50 p-3 rounded-lg text-center">
                        <div className="text-sm font-semibold text-emerald-700">{pathway.stats.avgSalary}</div>
                        <div className="text-xs text-slate-600">Avg. Salary</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg text-center">
                        <div className="text-sm font-semibold text-emerald-700">{pathway.stats.growthRate}</div>
                        <div className="text-xs text-slate-600">Growth</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg text-center">
                        <div className="text-sm font-semibold text-emerald-700">{pathway.stats.openings}</div>
                        <div className="text-xs text-slate-600">Jobs</div>
                      </div>
                    </div>
                    
                    {/* Example roles */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-slate-900 mb-2">Popular roles:</div>
                      <div className="flex flex-wrap gap-2">
                        {pathway.roles.map((role, i) => (
                          <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/pathways/${pathway.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
                    >
                      Explore this sector
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="#sectors" 
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md font-medium"
              >
                View All Sectors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* All Career Sectors Grid */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200" id="sectors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
                <Briefcase className="h-4 w-4 text-emerald-700" />
                <span className="text-xs font-medium text-emerald-900">Industry Sectors</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Explore All Career Sectors
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Find detailed information about training, qualifications, and job opportunities in each sector
              </p>
            </div>
            
            <SectorsGrid />
          </div>
        </section>
        
        {/* Real Career Journeys Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-3">
                <Users className="h-4 w-4 text-blue-700" />
                <span className="text-xs font-medium text-blue-900">Real Career Journeys</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Real people, real pathways
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover how South Yorkshire residents navigated their career paths and found success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {careerProfiles.map((profile, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={profile.image}
                      alt={`${profile.name}, ${profile.role}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/90 via-[#0e1b3d]/50 to-transparent"></div>
                    
                    {/* Location badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1.5 bg-emerald-100 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-xs font-medium text-slate-800">{profile.location}</span>
                      </div>
                    </div>
                    
                    {/* Profile info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-1.5 w-12 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-100">{profile.role}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{profile.name}, {profile.age}</h3>
                      <p className="text-sm text-emerald-100">{profile.journey}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-emerald-600" />
                        <span className="text-sm font-medium text-slate-700">Path to Success</span>
                      </div>
                      <Link href={`/success-stories/${index}`} className="text-emerald-600 text-sm font-medium hover:text-emerald-700">
                        Read story
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/success-stories" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
              >
                More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Saved Careers Section - New addition */}
        <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 shadow-xl text-white overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] mix-blend-overlay opacity-5"></div>
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                    <Heart className="h-4 w-4 text-pink-400" />
                    <span className="text-xs font-medium text-white">Personalised For You</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Save careers and create your personalised pathway
                  </h2>
                  
                  <p className="text-slate-300 mb-6">
                    Create a free account to save your favourite pathways, track your progress, and get personalised recommendations based on your interests and skills.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                    >
                      Create Free Account
                    </Link>
                    <Link
                      href="/login"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
                
                <div className="relative w-full md:w-auto">
                  <Image 
                    src="/images/saved-careers-illustration.png"
                    alt="Saved careers and personalised pathway"
                    width={320}
                    height={240}
                    className="mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <ResourcesSection />
      </main>

      <BackToTopButton visible={showBackToTop} />
    </div>
  );
} 