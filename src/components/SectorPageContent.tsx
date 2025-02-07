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
          <p className="text-lg text-zinc-700">See how your career could develop over time, with typical salaries and progression paths</p>
        </div>
        <div className="grid gap-6">
          {sector.careerProgression.levels.map((level, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                        {index === 0 ? (
                          <GraduationCap className="w-6 h-6 text-emerald-700" />
                        ) : index === 1 ? (
                          <Briefcase className="w-6 h-6 text-emerald-700" />
                        ) : (
                          <Brain className="w-6 h-6 text-emerald-700" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">{level.title}</h3>
                        <p className="text-zinc-600">
                          {index === 0 ? (
                            "Where most people start their career - typically 0-2 years experience"
                          ) : index === 1 ? (
                            "Progress to this level with 2-5 years experience"
                          ) : (
                            "Senior positions with 5+ years experience"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-600">Typical salary range</p>
                      <p className="text-lg font-bold text-emerald-700">
                        {index === 0 ? (
                          "£18,000 - £25,000"
                        ) : index === 1 ? (
                          "£25,000 - £35,000"
                        ) : (
                          "£35,000 - £60,000+"
                        )}
                      </p>
                    </div>
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
                          <p className="text-sm text-emerald-800">View career paths</p>
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
              </div>

              {index < 2 && (
                <div className="hidden md:block h-16 relative -mb-4">
                  {/* Main progression line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-emerald-400 to-emerald-500">
                    {/* Arrow head */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 bg-emerald-500 rotate-45 transform translate-y-1/2"></div>
                    </div>
                    {/* Progress marker */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 rounded-full border-4 border-emerald-500 bg-white shadow-md"></div>
                  </div>
                  
                  {/* Time indicator - positioned to the right */}
                  <div className="absolute top-1/2 left-[calc(50%+2rem)] -translate-y-1/2">
                    <div className="bg-emerald-100 px-6 py-2 rounded-full shadow-sm">
                      <div className="text-sm font-medium text-emerald-800">
                        {index === 0 ? (
                          <>
                            <span className="font-bold">2-3 years</span>
                            <span className="block text-xs text-emerald-600 mt-0.5">experience needed</span>
                          </>
                        ) : (
                          <>
                            <span className="font-bold">3-5 years</span>
                            <span className="block text-xs text-emerald-600 mt-0.5">experience needed</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile progression indicator - enhanced version */}
              {index < 2 && (
                <div className="md:hidden my-2 flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="relative h-12 w-[3px] bg-gradient-to-b from-emerald-400 to-emerald-500">
                      {/* Arrow head for mobile */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <div className="w-3 h-3 bg-emerald-500 rotate-45 transform translate-y-1/2"></div>
                      </div>
                      {/* Progress marker for mobile */}
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-6 h-6 rounded-full border-3 border-emerald-500 bg-white shadow-md"></div>
                    </div>
                    <div className="bg-emerald-100 px-4 py-1.5 rounded-full shadow-sm mt-4">
                      <div className="text-sm font-medium text-emerald-800">
                        {index === 0 ? '2-3 years' : '3-5 years'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
    </div>
  );
} 