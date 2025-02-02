'use client';

import { ArrowRight, Building2, Users, Banknote } from 'lucide-react';
import Link from 'next/link';
import type { Sector } from '@/types/sector';

// Icon mapping
const iconMap = {
  building: Building2,
  users: Users,
  banknote: Banknote
};

export default function SectorPageContent({ sector }: { sector: Sector }) {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white relative overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
              <span className="text-white text-sm font-semibold">Career Pathway</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">{sector.title}</h1>
            <p className="text-lg text-white max-w-3xl font-medium leading-relaxed">{sector.description}</p>
          </div>
        </div>
      </div>

      {/* Facts and Figures */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {sector.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">{stat.number}</div>
                    <div className="text-sm font-medium text-zinc-700">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Progression */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-2 mb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            <span className="text-emerald-900 text-sm font-semibold">Career Journey</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">Career progression in {sector.title.toLowerCase()}</h2>
        </div>
        <div className="grid gap-6">
          {sector.careerProgression.levels.map((level, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-900">{level.title}</h3>
                <Link href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  View roles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {level.roles.map((role, roleIndex) => (
                  <span
                    key={roleIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-50 text-emerald-900 border border-emerald-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-emerald-50/70 border-y border-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              <span className="text-emerald-900 text-sm font-semibold">Required Skills</span>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900">Top skills requested by employers</h2>
            <p className="text-lg text-zinc-700 max-w-3xl font-medium">
              Skills for {sector.title.toLowerCase()} jobs can be split between &apos;general&apos; skills and &apos;specialist&apos; skills. General or transferable skills are more focused on the sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-emerald-100 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">General skills</h3>
              <div className="space-y-4">
                {sector.skills.general.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-zinc-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-emerald-100 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">Specialist skills</h3>
              <div className="space-y-4">
                {sector.skills.specialist.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-zinc-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/training"
              className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-800 transition-colors shadow-sm hover:shadow-md"
            >
              Find training opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Green Jobs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
              <span className="text-white text-sm font-semibold">Sustainable Careers</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{sector.greenJobs.title}</h2>
            <p className="text-white text-lg mb-8 font-medium leading-relaxed">{sector.greenJobs.description}</p>
            <div className="flex flex-wrap gap-3">
              {sector.greenJobs.roles.map((role, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/20"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Market Information */}
      <div className="bg-emerald-50/70 border-t border-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                  <span className="text-emerald-900 text-sm font-semibold">Market Insights</span>
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Labour market information</h2>
                <p className="text-lg text-zinc-700 mb-8 font-medium">
                  All teachers, students and parents should have access to high-quality information about future study options and labour market opportunities both nationally and locally.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors shadow-sm hover:shadow-md"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="aspect-video bg-emerald-100 rounded-xl m-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 