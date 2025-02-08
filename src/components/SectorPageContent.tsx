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
      <div className="bg-zinc-900 text-white relative overflow-hidden pb-16 sm:pb-20 lg:pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="inline-flex items-center space-x-3 bg-zinc-800 px-4 sm:px-5 py-2 sm:py-3 rounded-full w-fit">
              <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-base sm:text-lg font-medium">Career Pathway</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">{sector.title}</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-4xl font-medium leading-relaxed">{sector.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 lg:-mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sector.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-zinc-200">
                <div className="flex items-center space-x-4 sm:space-x-5">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">{stat.number}</div>
                    <div className="text-base sm:text-lg font-medium text-zinc-700">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Journey Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-800 px-4 sm:px-5 py-2 sm:py-3 rounded-full w-fit">
            <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
            <span className="text-white text-base sm:text-lg font-semibold">Career Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">Career progression in {sector.title.toLowerCase()}</h2>
          <p className="text-lg sm:text-xl text-zinc-700">See how your career could develop over time, with typical salaries and progression paths</p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {sector.careerProgression.levels.map((level, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-zinc-200">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                    <div className="flex items-center">
                      <div className="bg-emerald-100 p-4 sm:p-5 rounded-xl mr-4 sm:mr-5">
                        {index === 0 ? (
                          <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
                        ) : index === 1 ? (
                          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
                        ) : (
                          <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900">{level.title}</h3>
                        <p className="text-base sm:text-lg text-zinc-600 mt-1">
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
                    <div className="text-left sm:text-right">
                      <p className="text-base sm:text-lg text-zinc-600">Typical salary range</p>
                      <p className="text-xl sm:text-2xl font-bold text-emerald-700">
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

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {level.roles.map((role, roleIndex) => {
                      const roleSlug = role.toLowerCase().replace(/\s+/g, '-');
                      const hasDetailedInfo = roleData[roleSlug];
                      
                      return hasDetailedInfo ? (
                        <Link
                          key={roleIndex}
                          href={`/pathways/${sector.slug}/roles/${roleSlug}`}
                          className="group relative bg-emerald-50 hover:bg-emerald-100 rounded-xl p-5 sm:p-6 transition-all duration-200 border border-emerald-200"
                        >
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <span className="font-bold text-lg sm:text-xl text-emerald-900">{role}</span>
                            <span className="text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </span>
                          </div>
                          <p className="text-base sm:text-lg text-emerald-800">View career paths</p>
                        </Link>
                      ) : (
                        <div
                          key={roleIndex}
                          className="bg-zinc-50 rounded-xl p-5 sm:p-6 border border-zinc-200"
                        >
                          <span className="font-bold text-lg sm:text-xl text-zinc-900">{role}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div className="hidden md:block h-16 sm:h-20 relative -mb-4">
                  {/* Main progression line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-500">
                    {/* Progress marker */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 sm:border-[5px] border-emerald-500 bg-white shadow-md"></div>
                  </div>
                  
                  {/* Time indicator */}
                  <div className="absolute top-1/2 left-[calc(50%+2rem)] -translate-y-1/2">
                    <div className="bg-emerald-100 px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm">
                      <div className="text-base sm:text-lg font-medium text-emerald-800">
                        {index === 0 ? (
                          <>
                            <span className="font-bold">2-3 years</span>
                            <span className="block text-sm sm:text-base text-emerald-600 mt-1">experience needed</span>
                          </>
                        ) : (
                          <>
                            <span className="font-bold">3-5 years</span>
                            <span className="block text-sm sm:text-base text-emerald-600 mt-1">experience needed</span>
                          </>
                        )}
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
      <div className="bg-white border-y border-zinc-200 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-zinc-800 px-4 sm:px-5 py-2 sm:py-3 rounded-full w-fit">
              <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-base sm:text-lg font-semibold">Required Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">Top skills requested by employers</h2>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">
            <div className="bg-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-purple-200">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-6 sm:mb-8">General skills</h3>
              <div className="space-y-4 sm:space-y-5">
                {sector.skills.general.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-600"></div>
                    <span className="text-lg sm:text-xl text-purple-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-200">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">Specialist skills</h3>
              <div className="space-y-4 sm:space-y-5">
                {sector.skills.specialist.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600"></div>
                    <span className="text-lg sm:text-xl text-blue-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <Link
              href="/training"
              className="inline-flex items-center justify-center bg-zinc-900 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Find training opportunities
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 