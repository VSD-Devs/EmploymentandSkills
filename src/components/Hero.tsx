"use client"

import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import CareerQuizButton from './CareerQuizButton'

const Hero = () => {
  return (
    <div className="flex flex-col bg-zinc-50">
      <div className="relative min-h-[60vh] sm:min-h-[70vh] bg-zinc-50 pb-8 sm:pb-24">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 h-[60vh] sm:h-[70vh]">
          <div className="relative w-full h-full">
            <Image 
              src="/images/hero-yorkshire.jpg" 
              alt="South Yorkshire's industrial heritage and modern innovation"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/60 to-zinc-50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-12 sm:pt-24 pb-6 sm:pb-12 max-w-4xl">
            <div className="bg-zinc-900/70 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/10">
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                South Yorkshire Pathways
              </h1>
              <p className="text-base sm:text-xl text-white/90 mb-4 sm:mb-8 max-w-2xl leading-relaxed">
                Whether you're starting out, changing careers, or growing your business - we'll help you tap into South Yorkshire's opportunities and funded training.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/pathways" className="bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-emerald-500 transition-colors inline-flex items-center justify-center sm:justify-start">
                  Career Pathways
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link href="/our-region" className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-white/20 transition-colors border border-white/20 inline-flex items-center justify-center sm:justify-start">
                  Our region
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-12">
            {/* Educators Card */}
            <Link href="/educators" className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[72px] sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 p-2.5 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-4 mb-0 sm:mb-6">
                  <div className="w-7 h-7 sm:w-14 sm:h-14 bg-emerald-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors">Schools & Providers</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs sm:text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-2 sm:mb-6 line-clamp-2">
                    Get the resources and support you need to guide your students towards local opportunities.
                  </p>
                  <div className="flex items-center text-emerald-600 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-base font-medium">View resources</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Businesses Card */}
            <Link href="/business" className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[72px] sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 p-2.5 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-4 mb-0 sm:mb-6">
                  <div className="w-7 h-7 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors">Employers</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs sm:text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-2 sm:mb-6 line-clamp-2">
                    Build your future workforce and access funding to upskill your team.
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-base font-medium">Get support</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Young People Card */}
            <Link href="/young-people" className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[72px] sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 p-2.5 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-4 mb-0 sm:mb-6">
                  <div className="w-7 h-7 sm:w-14 sm:h-14 bg-purple-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors">Young People (16-18)</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs sm:text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-2 sm:mb-6 line-clamp-2">
                    Take your first step into work with apprenticeships and training opportunities.
                  </p>
                  <div className="flex items-center text-purple-600 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-base font-medium">Start here</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Adult Skills Block */}
            <Link href="/adult-skills" className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[72px] sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 p-2.5 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-4 mb-0 sm:mb-6">
                  <div className="w-7 h-7 sm:w-14 sm:h-14 bg-amber-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors">Adults (19+)</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs sm:text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-2 sm:mb-6 line-clamp-2">
                    Transform your career with courses designed for Yorkshire's growth sectors and future industries.
                  </p>
                  <div className="flex items-center text-amber-600 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-base font-medium">Explore Courses</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Parents Block */}
            <Link href="/parents" className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[72px] sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 p-2.5 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-4 mb-0 sm:mb-6">
                  <div className="w-7 h-7 sm:w-14 sm:h-14 bg-teal-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-teal-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors">Parents & Carers</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs sm:text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-2 sm:mb-6 line-clamp-2">
                    Guide your child's future with insights into Yorkshire's growing industries and opportunities.
                  </p>
                  <div className="flex items-center text-teal-600 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-base font-medium">Get Guidance</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Region Block */}
            <Link href="/events" className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[72px] sm:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 p-2.5 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-4 mb-0 sm:mb-6">
                  <div className="w-7 h-7 sm:w-14 sm:h-14 bg-zinc-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-white/20 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-zinc-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors">Events</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs sm:text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-2 sm:mb-6 line-clamp-2">
                    Discover local events and workshops to connect with employers and explore career opportunities in South Yorkshire.
                  </p>
                  <div className="flex items-center text-zinc-900 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-base font-medium">Browse Events</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Career Quiz Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg mb-4 sm:mb-8 col-span-2 sm:col-span-2 lg:col-span-3">
            <div className="px-3 sm:px-8 py-3 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Not sure where to start?</h2>
                <p className="text-white/90 text-xs sm:text-base">Take our quick quiz to find opportunities that match your interests</p>
              </div>
              <CareerQuizButton 
                variant="secondary"
                className="w-full sm:w-auto whitespace-nowrap text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
              />
            </div>
          </div>

          {/* Labour Market Intelligence Banner */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg col-span-2 sm:col-span-2 lg:col-span-3">
            <div className="px-3 sm:px-8 py-3 sm:py-6">
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Labour Market Intelligence</h2>
                <p className="text-xs sm:text-base text-white/90 mb-3 sm:mb-6">
                  Get real-time insights into South Yorkshire's employment landscape, skills demands, and economic trends
                </p>
                <Link 
                  href="/our-region/labour-market" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-medium hover:bg-white/20 transition-colors border border-white/20"
                >
                  View Market Intelligence
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;