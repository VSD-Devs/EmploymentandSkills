'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, MapPin, Users, Briefcase, GraduationCap } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

// Optimized components with Hero-style loading states
const HeroSection = dynamic(() => import('@/components/pathways-optimized/HeroSection'), {
  loading: () => (
    <div className="relative bg-[#0e1b3d] py-24 flex items-center min-h-[300px] md:min-h-[500px]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="h-12 bg-slate-700 rounded-full w-64 mx-auto mb-8 animate-pulse" />
      </div>
    </div>
  )
});

const SectorsGrid = dynamic(() => import('@/components/pathways-optimized/SectorsGrid'), {
  loading: () => (
    <div className="h-[400px] bg-gradient-to-br from-[#0e1b3d]/5 to-emerald-100" />
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

// Career journey profiles to showcase real people's paths
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
  
  // Simplified scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    // Use requestAnimationFrame for better performance
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Pathways', href: '/pathways' },
          ]} />
        </div>
      </div>

      <main className="bg-white">
        <HeroSection />
        
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
          <SectorsGrid />

          {/* Moved Real Career Journeys Section Here */}
          <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200 my-16">
            <div className="max-w-7xl mx-auto">
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
            </div>
          </section>
        </div>
      </main>

      <ResourcesSection />
      <BackToTopButton visible={showBackToTop} />
    </div>
  );
} 