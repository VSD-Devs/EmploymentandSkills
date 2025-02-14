'use client';

import { Search, ArrowRight, GraduationCap, Clock, Briefcase, ChevronRight, ChevronUp, Menu, Code2, Stethoscope, Factory, Paintbrush2, Building2, BookOpen, Utensils } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { sectorData } from '@/data/sectors';
import type { Sector } from '@/types/sector';
import { useState, useEffect } from 'react';

export default function PathwaysPage() {
  const typedSectors: Record<string, Sector> = sectorData;
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [_activeSection, setActiveSection] = useState('sectors');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Group sectors by category
  const categories = {
    all: 'All Sectors',
    digital: 'Digital & Tech',
    engineering: 'Engineering & Manufacturing',
    health: 'Healthcare & Medical',
    creative: 'Creative & Media',
    business: 'Business & Finance',
    construction: 'Construction & Property',
    education: 'Education & Training',
    hospitality: 'Hospitality & Tourism'
  };

  // Filter sectors based on category and search
  const filteredSectors = Object.entries(typedSectors).filter(([slug, sector]) => {
    const matchesCategory = selectedCategory === 'all' || sector.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      sector.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sector.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ['sectors', 'bootcamps', 'resources'];
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      sectionElements.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const _scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShowQuickNav(false);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section with Search */}
      <div className="relative bg-zinc-50">
        <div className="absolute inset-0 h-[60vh] sm:h-[70vh]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 to-emerald-800"></div>
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-sm sm:text-base font-medium">Career Explorer</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Career Pathways
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 font-medium leading-relaxed">
              Explore different sectors and find the perfect career path that matches your skills and interests in South Yorkshire
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a sector or role"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl pl-12 sm:pl-14 pr-4 sm:pr-6 text-base sm:text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-300/50 focus:border-transparent transition-all"
                />
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Toggle - Mobile */}
      <button
        onClick={() => setShowQuickNav(!showQuickNav)}
        className="fixed right-4 top-4 z-50 md:hidden bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-zinc-200/50"
      >
        <Menu className="w-6 h-6 text-zinc-600" />
      </button>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-zinc-200/50 transition-all duration-300 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <ChevronUp className="w-5 h-5 text-zinc-600" />
      </button>

      {/* Main Content */}
      <div className="relative">
        {/* Categories Grid */}
        <section id="sectors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-zinc-200/50">
            {/* Category Filter - Desktop */}
            <div className="hidden md:block mb-12">
              <div className="flex flex-col items-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Browse by sector</h2>
                <p className="text-lg text-zinc-600 max-w-2xl text-center">Choose from our range of career sectors in South Yorkshire</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {Object.entries(categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                      selectedCategory === key
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:shadow-lg'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter - Mobile */}
            <div className="md:hidden mb-8">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-bold text-zinc-900 mb-3">Browse by sector</h2>
                <p className="text-base text-zinc-600 text-center">Choose from our range of career sectors</p>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-zinc-100 text-zinc-900 text-lg border-none focus:ring-2 focus:ring-emerald-300 shadow-lg"
              >
                {Object.entries(categories).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
            
            {/* Sectors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredSectors.map(([slug, sector]) => {
                // Create icon mapping for sectors
                const sectorIcons = {
                  digital: Code2,
                  health: Stethoscope,
                  engineering: Factory,
                  creative: Paintbrush2,
                  business: Briefcase,
                  construction: Building2,
                  education: BookOpen,
                  hospitality: Utensils
                };
                
                const IconComponent = sectorIcons[sector.category] || Briefcase;

                return (
                  <Link
                    key={slug}
                    href={`/pathways/${slug}`}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-zinc-200/50 h-[280px] flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-emerald-800/80 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative z-10 h-full p-6 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/20">
                          <IconComponent className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-white transition-colors">
                          {sector.title}
                        </h3>
                      </div>
                      <p className="text-zinc-600 group-hover:text-white/90 transition-colors line-clamp-3 text-sm leading-relaxed">
                        {sector.description}
                      </p>
                      <div className="mt-auto flex items-center text-emerald-600 group-hover:text-white transition-colors font-medium text-sm">
                        Explore careers
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* No Results Message */}
            {filteredSectors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-600 text-lg mb-4">No sectors found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Skills Bootcamps Section */}
        <section id="bootcamps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl overflow-hidden">
            <div className="relative px-4 sm:px-8 py-8 sm:py-16 lg:px-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-sm font-medium">Skills Bootcamps</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    Fast-track your career with Skills Bootcamps
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                    Free, flexible courses of up to 16 weeks, giving you the in-demand skills that employers are looking for.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Flexible Learning</h3>
                        <p className="text-sm sm:text-base text-white/80">Study around your schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Job Guarantee</h3>
                        <p className="text-sm sm:text-base text-white/80">Interview guaranteed on completion</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/bootcamps"
                    className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-emerald-600 rounded-xl hover:bg-white/90 transition-colors text-base sm:text-lg font-medium shadow-lg hover:shadow-xl"
                  >
                    View Available Bootcamps
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>

                <div className="relative aspect-square max-w-lg mx-auto">
                  <Image
                    src="/images/bootcamp.jpg"
                    alt="Skills Bootcamp training"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-24">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Popular Searches */}
            <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg border border-zinc-200/50">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-4 sm:mb-6">Popular Searches</h3>
              <div className="space-y-3 sm:space-y-4">
                <Link href="/pathways/digital-tech" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Software Developer
                </Link>
                <Link href="/pathways/healthcare" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Healthcare Assistant
                </Link>
                <Link href="/pathways/digital-tech" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Digital Marketing
                </Link>
              </div>
            </div>

            {/* Entry Level Roles */}
            <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg border border-zinc-200/50">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-4 sm:mb-6">Entry Level Roles</h3>
              <div className="space-y-3 sm:space-y-4">
                <Link href="/apprenticeships" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Apprenticeships
                </Link>
                <Link href="/university" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Graduate Schemes
                </Link>
                <Link href="/pathways/work-experience" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Internships
                </Link>
              </div>
            </div>

            {/* Career Resources */}
            <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg border border-zinc-200/50">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-4 sm:mb-6">Career Resources</h3>
              <div className="space-y-3 sm:space-y-4">
                <Link href="/career-quiz" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Skills Assessment
                </Link>
                <Link href="/cv-builder" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  CV Builder
                </Link>
                <Link href="/career-advice" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Career Advice
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 