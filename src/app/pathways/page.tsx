'use client';

import { Search, ArrowRight, GraduationCap, Clock, Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { sectorData } from '@/data/sectors';
import type { Sector } from '@/types/sector';

export default function PathwaysPage() {
  const typedSectors: Record<string, Sector> = sectorData;

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section with Search */}
      <div className="relative bg-zinc-50">
        <div className="absolute inset-0 h-[70vh]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 to-emerald-800"></div>
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-base font-medium">Career Explorer</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Career Pathways
            </h1>
            <p className="text-xl text-white/90 mb-12 font-medium leading-relaxed">
              Explore different sectors and find the perfect career path that matches your skills and interests in South Yorkshire
            </p>
            
            {/* Large Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a sector or role"
                  className="w-full px-6 py-4 rounded-xl pl-14 pr-6 text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-300/50 focus:border-transparent transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-200/50">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Browse by sector</h2>
            <p className="mt-2 text-lg text-zinc-600">Choose from our range of career sectors in South Yorkshire</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(typedSectors).map(([slug, sector]) => (
              <Link
                key={slug}
                href={`/pathways/${slug}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-zinc-200/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-emerald-600 group-hover:bg-white transition-colors"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-zinc-600 group-hover:text-white/90 transition-colors line-clamp-2">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-emerald-600 group-hover:text-white transition-colors">
                    <span className="font-medium">Explore Opportunities</span>
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Bootcamps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl overflow-hidden">
          <div className="relative px-8 py-16 sm:px-12 lg:px-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <GraduationCap className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">Skills Bootcamps</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Fast-track your career with Skills Bootcamps
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Free, flexible courses of up to 16 weeks, giving you the in-demand skills that employers are looking for.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Flexible Learning</h3>
                      <p className="text-white/80">Study around your schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Job Guarantee</h3>
                      <p className="text-white/80">Interview guaranteed on completion</p>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/bootcamps"
                  className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-xl hover:bg-white/90 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  View Available Bootcamps
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="relative aspect-square max-w-lg mx-auto">
                <Image
                  src="/images/bootcamp.jpg"
                  alt="Skills Bootcamp training"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Popular Searches */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-200/50">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Popular Searches</h3>
            <div className="space-y-4">
              <Link href="/pathways/digital-tech" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Software Developer
              </Link>
              <Link href="/pathways/healthcare" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Healthcare Assistant
              </Link>
              <Link href="/pathways/digital-tech" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Digital Marketing
              </Link>
            </div>
          </div>

          {/* Entry Level Roles */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-200/50">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Entry Level Roles</h3>
            <div className="space-y-4">
              <Link href="/apprenticeships" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Apprenticeships
              </Link>
              <Link href="/university" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Graduate Schemes
              </Link>
              <Link href="/pathways/work-experience" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Internships
              </Link>
            </div>
          </div>

          {/* Career Resources */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-200/50">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Career Resources</h3>
            <div className="space-y-4">
              <Link href="/career-quiz" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Skills Assessment
              </Link>
              <Link href="/cv-builder" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                CV Builder
              </Link>
              <Link href="/career-advice" className="flex items-center text-zinc-600 hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-3" />
                Career Advice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 