'use client';

import React from 'react';
import { ArrowRight, Building2, Users, Banknote, Briefcase, GraduationCap, Brain, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Sector } from '@/types/sector';
import { roleData } from '@/data/roles';
import SectionHeading from '@/components/ui/SectionHeading';
import ActionButton from '@/components/ui/ActionButton';
import LinkButton from '@/components/ui/LinkButton';
import Breadcrumbs from '@/components/Breadcrumbs';

// Icon mapping
const iconMap = {
  building: Building2,
  users: Users,
  banknote: Banknote
};

export default function SectorPageContent({ sector }: { sector: Sector }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-900 text-white pb-16 sm:pb-20 lg:pb-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Pathways', href: '/pathways' },
            { label: sector.title, href: `/pathways/${sector.slug}` },
          ]} className="mb-8" />
          
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-sm border border-blue-500/30">
              <Star className="h-4 w-4 text-blue-300" />
              <span className="text-xs md:text-sm font-medium text-blue-100">Career Pathway</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">{sector.title}</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl font-medium leading-relaxed">{sector.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 sm:-mt-10 lg:-mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sector.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200/50 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-base sm:text-lg font-medium text-gray-700">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Journey Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
        <SectionHeading 
          title={`Career progression in ${sector.title}`}
          subtitle="Career Journey"
          description="See how your career could develop over time, with typical salaries and progression paths"
          className="mb-12"
        />

        <div className="grid gap-6 sm:gap-8">
          {sector.careerProgression.levels.map((level, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-200/50 hover:shadow-2xl transition-all">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-4 sm:p-5 rounded-xl mr-4 sm:mr-5">
                        {index === 0 ? (
                          <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                        ) : index === 1 ? (
                          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                        ) : (
                          <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{level.title}</h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-1">
                          {index === 0 ? (
                            "Entry level position"
                          ) : index === 1 ? (
                            "Mid-level position"
                          ) : (
                            "Senior level position"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-base sm:text-lg text-gray-600">Typical salary range</p>
                      <p className="text-xl sm:text-2xl font-bold text-blue-700">
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
                          className="group relative bg-blue-50 hover:bg-blue-100 rounded-xl p-5 sm:p-6 transition-all duration-200 border border-blue-200 shadow-md hover:shadow-lg"
                        >
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <span className="font-bold text-lg sm:text-xl text-blue-900">{role}</span>
                            <span className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">
                              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </span>
                          </div>
                          <p className="text-base sm:text-lg text-blue-800">View career paths</p>
                        </Link>
                      ) : (
                        <div
                          key={roleIndex}
                          className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-200"
                        >
                          <span className="font-bold text-lg sm:text-xl text-gray-900">{role}</span>
                          <p className="text-base text-gray-500 mt-2">Coming soon</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div className="hidden md:block h-16 sm:h-20 relative -mb-4">
                  {/* Main progression line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-500">
                    {/* Progress marker */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 sm:border-[5px] border-blue-500 bg-white shadow-md"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 border-y border-gray-200 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Top skills requested by employers"
            subtitle="Required Skills"
            description="Master these skills to increase your employability and stand out in the job market"
            className="mb-12"
          />
          
          <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 sm:p-8 lg:p-10 border border-purple-200 shadow-xl">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="bg-purple-200 p-3 rounded-lg">
                  <GraduationCap className="w-7 h-7 text-purple-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-900">General skills</h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {sector.skills.general.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-600"></div>
                    <span className="text-lg sm:text-xl text-purple-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8 lg:p-10 border border-blue-200 shadow-xl">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="bg-blue-200 p-3 rounded-lg">
                  <Briefcase className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Specialist skills</h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {sector.skills.specialist.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600"></div>
                    <span className="text-lg sm:text-xl text-blue-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Training Section CTA */}
          <div className="mt-10 sm:mt-16 text-center bg-white rounded-xl shadow-xl p-8 sm:p-10 border border-gray-200/50">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to build your career in {sector.title}?</h3>
              <p className="text-lg text-gray-600 mb-8">Access training opportunities, apprenticeships and courses to help you gain the skills you need to succeed.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LinkButton
                  href="/training"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  Find training opportunities
                </LinkButton>
                <LinkButton
                  href="/apprenticeships"
                  variant="secondary"
                  size="lg"
                  icon={<ChevronRight className="h-5 w-5" />}
                >
                  Explore apprenticeships
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sector Highlights */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
        <SectionHeading 
          title={`Why choose a career in ${sector.title}?`}
          subtitle="Sector Highlights"
          description="Discover what makes this sector an exciting and rewarding career choice"
          className="mb-12"
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src={`/images/${sector.slug}-highlight.jpg`}
              alt={`Highlight of ${sector.title} sector`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-white text-xl font-bold">
                Growing sector with exciting opportunities
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Career Growth</h3>
                    <p className="text-gray-600">Clear progression paths with opportunities to advance your career and increase your earning potential.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Opportunities</h3>
                    <p className="text-gray-600">Strong demand for skilled professionals in South Yorkshire with employers actively recruiting.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Job Security</h3>
                    <p className="text-gray-600">Stable employment prospects with transferable skills that are valued across multiple industries.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <LinkButton
              href={`/pathways/${sector.slug}/jobs`}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              View current job openings
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
} 