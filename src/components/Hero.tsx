import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col bg-zinc-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-zinc-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zinc-900 rotate-45 flex items-center justify-center">
                    <div className="-rotate-45 text-white font-bold text-xl">Y</div>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">YORKSHIRE PATHWAYS</span>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#educators" className="text-zinc-600 hover:text-zinc-900 transition-colors text-base uppercase tracking-wide">Educators</a>
                <Link to="/businesses" className="text-zinc-600 hover:text-zinc-900 transition-colors text-base uppercase tracking-wide">Businesses</Link>
                <div className="relative group">
                  <Link to="/adult-skills" className="text-zinc-600 hover:text-zinc-900 transition-colors text-base uppercase tracking-wide flex items-center">
                    Adults
                  </Link>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link to="/adult-skills#employment" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50">Employment Support</Link>
                    <Link to="/adult-skills#training" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50">Funded Training</Link>
                    <Link to="/adult-skills#wellbeing" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50">Mental Health Support</Link>
                    <Link to="/adult-skills#contact" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50">Contact Us</Link>
                  </div>
                </div>
                <Link to="/young-people" className="text-zinc-600 hover:text-zinc-900 transition-colors text-base uppercase tracking-wide">Young people</Link>
                <a href="#parents" className="text-zinc-600 hover:text-zinc-900 transition-colors text-base uppercase tracking-wide">Parents</a>
                <div className="h-5 w-px bg-zinc-200"></div>
                <button className="flex items-center space-x-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-base hover:bg-zinc-800 transition-colors">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </nav>
            </div>
          </div>
      </header>

      {/* Hero Section with Integrated Blocks */}
      <div className="relative min-h-screen bg-zinc-50 pb-24">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 h-[70vh]">
          <img 
            src="/images/hero-yorkshire.jpg" 
            alt="Yorkshire industrial heritage meets digital innovation"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/40 to-zinc-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Text */}
          <div className="pt-24 pb-12 max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-white text-base font-medium">South Yorkshire Skills Hub</span>
            </div>
            <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                South Yorkshire Pathways
              </h1>
              <p className="text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                Connect with local businesses, discover funded training opportunities, and access the skills you need for Yorkshire's growing industries. From digital tech to advanced manufacturing, your next career move starts here.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-500 transition-colors inline-flex items-center group shadow-lg">
                  Find Training & Jobs
                  <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 transition-colors shadow-lg border border-white/20">
                  Explore Funding Support
                </button>
              </div>
            </div>
          </div>

          {/* Integrated Path Blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Educators Block */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-4">For Educators</h3>
                <p className="text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-6">
                  Connect your students with Yorkshire's evolving industries through innovative teaching resources.
                </p>
                <div className="flex items-center text-emerald-600 group-hover:text-white transition-colors text-lg">
                  <span className="font-medium">Access Resources</span>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Businesses Block */}
            <Link to="/businesses" className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-4">For Businesses</h3>
                <p className="text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-6">
                  Shape the future workforce by connecting with emerging talent in our region.
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-white transition-colors text-lg">
                  <span className="font-medium">Partner With Us</span>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </Link>

            {/* Young People Block */}
            <Link to="/young-people" className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-4">For Young People</h3>
                <p className="text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-6">
                  Discover exciting career paths in Yorkshire's innovative sectors and future industries.
                </p>
                <div className="flex items-center text-purple-600 group-hover:text-white transition-colors text-lg">
                  <span className="font-medium">Start Your Journey</span>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </Link>

            {/* Adult Skills Block */}
            <Link to="/adult-skills" className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-4">Adult Skills</h3>
                <p className="text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-6">
                  Transform your career with courses designed for Yorkshire's growth sectors and future industries.
                </p>
                <div className="flex items-center text-amber-600 group-hover:text-white transition-colors text-lg">
                  <span className="font-medium">Explore Courses</span>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </Link>

            {/* Parents Block */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-4">Parents & Carers</h3>
                <p className="text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-6">
                  Guide your child's future with insights into Yorkshire's growing industries and opportunities.
                </p>
                <div className="flex items-center text-teal-600 group-hover:text-white transition-colors text-lg">
                  <span className="font-medium">Get Guidance</span>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Region Block */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-4">Our Region</h3>
                <p className="text-lg text-zinc-600 group-hover:text-white/90 transition-colors mb-6">
                  Explore South Yorkshire's economic landscape and discover the industries shaping our future.
                </p>
                <div className="flex items-center text-zinc-600 group-hover:text-white transition-colors text-lg">
                  <span className="font-medium">Discover More</span>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;