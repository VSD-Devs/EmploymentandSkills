'use client';

import { ArrowRight, Building2, Users, Banknote, Briefcase, GraduationCap, Brain } from 'lucide-react';
import Link from 'next/link';
import type { Sector } from '@/types/sector';
import { roleData } from '@/data/roles';

// Icon mapping
const iconMap = {
  building: Building2,
  users: Users,
  banknote: Banknote
};

export default function SectorPageContent({ sector }: { sector: Sector }) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-white relative overflow-hidden pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-base font-medium">Career Pathway</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">{sector.title}</h1>
            <p className="text-xl text-zinc-200 max-w-3xl font-medium leading-relaxed">{sector.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {sector.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zinc-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-700" />
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

      {/* Career Journey Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-2 mb-8">
          <div className="inline-flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            <span className="text-white text-sm font-semibold">Career Journey</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">Career progression in {sector.title.toLowerCase()}</h2>
          <p className="text-lg text-zinc-700">Click on any role to explore detailed career paths and requirements</p>
        </div>
        <div className="grid gap-6">
          {sector.careerProgression.levels.map((level, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                  {index === 0 ? (
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                  ) : index === 1 ? (
                    <Briefcase className="w-6 h-6 text-emerald-700" />
                  ) : (
                    <Brain className="w-6 h-6 text-emerald-700" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{level.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {level.roles.map((role, roleIndex) => {
                  const roleSlug = role.toLowerCase().replace(/\s+/g, '-');
                  const hasDetailedInfo = roleData[roleSlug];
                  
                  return hasDetailedInfo ? (
                    <Link
                      key={roleIndex}
                      href={`/pathways/${sector.slug}/roles/${roleSlug}`}
                      className="group relative bg-emerald-50 hover:bg-emerald-100 rounded-lg p-6 transition-all duration-200 border border-emerald-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-emerald-900">{role}</span>
                        <span className="text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                      <p className="text-sm text-emerald-800">View career paths →</p>
                    </Link>
                  ) : (
                    <div
                      key={roleIndex}
                      className="bg-zinc-50 rounded-lg p-6 border border-zinc-200"
                    >
                      <span className="font-bold text-zinc-900">{role}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white border-y border-zinc-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-sm font-semibold">Required Skills</span>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900">Top skills requested by employers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-6">General skills</h3>
              <div className="space-y-4">
                {sector.skills.general.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    <span className="text-purple-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Specialist skills</h3>
              <div className="space-y-4">
                {sector.skills.specialist.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-blue-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/training"
              className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Find training opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Green Jobs Section */}
      {sector.greenJobs && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-teal-50 rounded-xl p-8 border border-teal-200">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-xl mr-4">
                <Briefcase className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-teal-900">{sector.greenJobs.title}</h2>
                <p className="text-teal-800 mt-1">{sector.greenJobs.description}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sector.greenJobs.roles.map((role, index) => {
                const roleSlug = role.toLowerCase().replace(/\s+/g, '-');
                const hasDetailedInfo = roleData[roleSlug];

                return hasDetailedInfo ? (
                  <Link
                    key={index}
                    href={`/pathways/${sector.slug}/roles/${roleSlug}`}
                    className="group bg-white rounded-lg p-6 hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-teal-900">{role}</span>
                      <span className="text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-teal-200"
                  >
                    <span className="font-bold text-teal-900">{role}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 