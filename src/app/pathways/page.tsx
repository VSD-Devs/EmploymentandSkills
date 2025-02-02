'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { sectorData } from '@/data/sectors';
import type { Sector } from '@/types/sector';

export default function PathwaysPage() {
  const typedSectors: Record<string, Sector> = sectorData;

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 pb-24 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Career Pathways
            </h1>
            <p className="text-xl text-white/90 mb-12 font-medium">
              Explore different sectors and find the perfect career path that matches your skills and interests
            </p>
            
            {/* Large Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a sector or role..."
                  className="w-full px-6 py-4 rounded-xl pl-14 pr-6 text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
              </div>
              <div className="absolute inset-x-0 top-full mt-2">
                {/* Search Results would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900">Browse by sector</h2>
          <p className="mt-2 text-zinc-600">Choose from our range of career sectors</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(typedSectors).map(([slug, sector]) => (
            <Link
              key={slug}
              href={`/pathways/${slug}`}
              className="group bg-emerald-700 hover:bg-emerald-800 rounded-xl p-6 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <h3 className="text-lg font-semibold text-white">
                  {sector.title}
                </h3>
              </div>
              <div className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Popular Searches</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Software Developer</Link>
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Healthcare Assistant</Link>
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Digital Marketing</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Entry Level Roles</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Apprenticeships</Link>
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Graduate Schemes</Link>
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Internships</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Career Resources</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Skills Assessment</Link>
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">CV Builder</Link>
                <Link href="#" className="block text-emerald-700 hover:text-emerald-800">Career Advice</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 