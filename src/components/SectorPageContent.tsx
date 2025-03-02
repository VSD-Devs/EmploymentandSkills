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
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700/30 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Pathways', href: '/pathways' },
            { label: sector.title, href: `/pathways/${sector.slug}` },
          ]} className="mb-8" darkMode={true} />
          
          <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 w-fit">
              <Star className="h-4 w-4 text-white/80" />
              <span className="text-xs md:text-sm font-medium text-white">Career Pathway</span>
            </div>
            
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white">{sector.title}</h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">{sector.description}</p>
            </div>
            
            {/* Quick sector overview - optional badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              {sector.traits && sector.traits.map((trait, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-sm text-white">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curved edge for a more organic flow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" fill="#ffffff" opacity=".25" />
            <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" fill="#ffffff" opacity=".5" />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Stats Section - Reimagined as floating cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 lg:-mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sector.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200/50 transform transition-all hover:shadow-2xl hover:-translate-y-1 group">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <SectionHeading 
          title={`Career progression in ${sector.title}`}
          subtitle="Career Journey"
          description="Explore popular career pathways in this sector, with typical progression routes and roles"
          className="mb-12 lg:mb-16 text-center"
        />

        <div className="relative">
          {/* Main progression path - only visible on desktop */}
          <div className="hidden lg:block absolute top-[120px] left-1/2 h-[calc(100%-240px)] w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 -translate-x-1/2 rounded-full">
            <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full -translate-x-1/2"></div>
            <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-white border-4 border-blue-700 rounded-full -translate-x-1/2"></div>
          </div>

          <div className="mb-8 max-w-2xl mx-auto bg-blue-50 rounded-lg p-4 lg:p-6 border border-blue-100 text-center">
            <p className="text-blue-700 font-medium">These represent the most popular career pathways in this sector. Many more specialised roles exist as the industry evolves.</p>
          </div>

          <div className="space-y-6 sm:space-y-12 lg:space-y-16">
            {sector.careerProgression.levels.map((level, index) => (
              <div key={index} className={`relative ${index % 2 === 1 ? 'lg:translate-x-12' : 'lg:-translate-x-12'}`}>
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-200/50 hover:shadow-2xl transition-all">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                      <div className="flex items-center">
                        {/* Level indicator */}
                        <div className="relative">
                          <div className={`p-4 sm:p-5 rounded-xl mr-4 sm:mr-5 bg-gradient-to-br ${
                            index === 0 ? 'from-blue-100 to-blue-200 border border-blue-300' : 
                            index === 1 ? 'from-purple-100 to-purple-200 border border-purple-300' : 
                            'from-indigo-100 to-indigo-200 border border-indigo-300'
                          }`}>
                            {index === 0 ? (
                              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                            ) : index === 1 ? (
                              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-purple-700" />
                            ) : (
                              <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-700" />
                            )}
                          </div>
                          {/* Enhanced connectors - only visible on mobile/tablet */}
                          {index < sector.careerProgression.levels.length - 1 && (
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 lg:hidden"></div>
                          )}
                        </div>

                        <div>
                          <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                            index === 0 ? 'text-blue-900' : index === 1 ? 'text-purple-900' : 'text-indigo-900'
                          }`}>{level.title}</h3>
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
                        <p className={`text-xl sm:text-2xl font-bold ${
                            index === 0 ? 'text-blue-700' : index === 1 ? 'text-purple-700' : 'text-indigo-700'
                          }`}>
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
                            className={`group relative overflow-hidden rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg ${
                              index === 0 
                                ? 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200' 
                                : index === 1 
                                  ? 'bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200'
                                  : 'bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200'
                            }`}
                          >
                            <div className="p-5 sm:p-6">
                              <div className="flex items-center justify-between mb-2 sm:mb-3">
                                <span className={`font-bold text-lg sm:text-xl ${
                                  index === 0 ? 'text-blue-900' : index === 1 ? 'text-purple-900' : 'text-indigo-900'
                                }`}>{role}</span>
                                <span className={`${
                                  index === 0 ? 'text-blue-700' : index === 1 ? 'text-purple-700' : 'text-indigo-700'
                                } opacity-0 group-hover:opacity-100 transition-opacity`}>
                                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                </span>
                              </div>
                              <p className={`text-base sm:text-lg ${
                                index === 0 ? 'text-blue-800' : index === 1 ? 'text-purple-800' : 'text-indigo-800'
                              }`}>View career paths</p>
                              
                              {/* Decorative corner accent */}
                              <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-y border-gray-200 py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Top skills requested by employers"
            subtitle="Required Skills"
            description="Master these skills to increase your employability and stand out in the job market"
            className="mb-12 lg:mb-16 text-center"
          />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
              {/* General Skills Column */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/70 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-t-2xl"></div>
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-purple-50 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="flex items-center gap-4 mb-8 relative">
                  <div className="bg-purple-100 p-3.5 rounded-lg shadow-sm">
                    <GraduationCap className="w-7 h-7 text-purple-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">General skills</h3>
                </div>
                
                <div className="space-y-6 relative">
                  {sector.skills.general.map((skill, index) => (
                    <div key={index} className="group/skill">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shadow-sm text-purple-700 font-bold">
                          {index + 1}
                        </div>
                        <h4 className="text-xl text-gray-900 font-medium group-hover/skill:text-purple-800 transition-colors">{skill}</h4>
                      </div>
                      
                      <div className="ml-14 pl-1 border-l-2 border-purple-100 group-hover/skill:border-purple-300 transition-colors">
                        <div className="h-1.5 w-full bg-gray-100 rounded-full mb-2">
                          <div 
                            className="h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-600" 
                            style={{ width: `${95 - (index * 5)}%` }}
                            role="progressbar"
                            aria-valuenow={95 - (index * 5)}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        
                        <p className="text-gray-600 text-sm">
                          {index === 0 ? 'Essential for all roles in this sector' :
                           index === 1 ? 'Highly valued by most employers' :
                           index === 2 ? 'Provides competitive advantage' :
                           'Beneficial for career growth'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Specialist Skills Column */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/70 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl"></div>
                <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="flex items-center gap-4 mb-8 relative">
                  <div className="bg-blue-100 p-3.5 rounded-lg shadow-sm">
                    <Briefcase className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Specialist skills</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 relative">
                  {sector.skills.specialist.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/50 hover:shadow-md transition-shadow group/skill">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center shadow-sm mt-0.5">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 group-hover/skill:text-blue-800 transition-colors">{skill}</h4>
                          <p className="text-gray-600 text-sm mt-1">
                            {index % 2 === 0 ? 'Technical expertise' : 'Domain knowledge'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Training Section CTA */}
            <div className="mt-12 sm:mt-16 lg:mt-20 relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
                </div>
                
                <div className="relative p-8 sm:p-10 lg:p-12">
                  <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to build your career in {sector.title}?</h3>
                    <p className="text-lg text-gray-300 mb-8">Access training opportunities, apprenticeships and courses to help you gain the skills you need to succeed.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <LinkButton
                        href="/training"
                        variant="primary"
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                        icon={<ArrowRight className="h-5 w-5" />}
                      >
                        Find training opportunities
                      </LinkButton>
                      <LinkButton
                        href="/apprenticeships"
                        variant="secondary"
                        size="lg"
                        className="bg-gray-800 border-white/20 text-white hover:bg-gray-700"
                        icon={<ChevronRight className="h-5 w-5" />}
                      >
                        Explore apprenticeships
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sector Highlights */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <SectionHeading 
          title={`Why choose a career in ${sector.title}?`}
          subtitle="Sector Highlights"
          description="Discover what makes this sector an exciting and rewarding career choice"
          className="mb-12 lg:mb-16 text-center"
        />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image with testimonial overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-[4/3] relative">
                <Image
                  src={`/images/${sector.slug}-highlight.jpg`}
                  alt={`Highlight of ${sector.title} sector`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              </div>
              
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <blockquote className="relative">
                  <div className="mb-3 opacity-75">
                    <svg width="45" height="36" className="text-white/60 fill-current" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 0C6.04125 0 0 6.03 0 13.5C0 20.97 6.04125 27 13.5 27C20.9588 27 27 20.97 27 13.5C27 6.03 20.9588 0 13.5 0ZM13.5 21.375C9.08437 21.375 5.625 17.91 5.625 13.5C5.625 9.09 9.08437 5.625 13.5 5.625C17.9156 5.625 21.375 9.09 21.375 13.5C21.375 17.91 17.9156 21.375 13.5 21.375Z" />
                      <path d="M31.5 0C24.0412 0 18 6.03 18 13.5C18 20.97 24.0412 27 31.5 27C38.9587 27 45 20.97 45 13.5C45 6.03 38.9587 0 31.5 0ZM31.5 21.375C27.0844 21.375 23.625 17.91 23.625 13.5C23.625 9.09 27.0844 5.625 31.5 5.625C35.9156 5.625 39.375 9.09 39.375 13.5C39.375 17.91 35.9156 21.375 31.5 21.375Z" />
                      <path d="M13.5 27C6.04125 27 0 33.03 0 40.5C0 47.97 6.04125 54 13.5 54C20.9588 54 27 47.97 27 40.5C27 33.03 20.9588 27 13.5 27ZM13.5 48.375C9.08437 48.375 5.625 44.91 5.625 40.5C5.625 36.09 9.08437 32.625 13.5 32.625C17.9156 32.625 21.375 36.09 21.375 40.5C21.375 44.91 17.9156 48.375 13.5 48.375Z" />
                      <path d="M31.5 27C24.0412 27 18 33.03 18 40.5C18 47.97 24.0412 54 31.5 54C38.9587 54 45 47.97 45 40.5C45 33.03 38.9587 27 31.5 27ZM31.5 48.375C27.0844 48.375 23.625 44.91 23.625 40.5C23.625 36.09 27.0844 32.625 31.5 32.625C35.9156 32.625 39.375 36.09 39.375 40.5C39.375 44.91 35.9156 48.375 31.5 48.375Z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                    A career in {sector.title} offers tremendous opportunity for growth and innovation in South Yorkshire.
                  </p>
                  <footer className="mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                        SE
                      </div>
                      <div className="text-white">
                        <p className="font-medium">Sarah Edwards</p>
                        <p className="text-sm text-white/70">Industry Expert</p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            
            {/* Right: Benefits cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group border border-gray-200/50">
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-blue-100 rounded-full opacity-70 group-hover:bg-blue-200 transition-colors duration-300"></div>
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">Career Growth</h3>
                    <p className="text-gray-600">Clear progression paths with opportunities to advance your career and increase your earning potential.</p>
                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:text-blue-700">
                      <span>Professional development opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group border border-gray-200/50">
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-green-100 rounded-full opacity-70 group-hover:bg-green-200 transition-colors duration-300"></div>
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Local Opportunities</h3>
                    <p className="text-gray-600">Strong demand for skilled professionals in South Yorkshire with employers actively recruiting.</p>
                    <div className="mt-4 flex items-center gap-2 text-green-600 font-medium text-sm group-hover:text-green-700">
                      <span>Growing demand across the region</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group border border-gray-200/50">
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-amber-100 rounded-full opacity-70 group-hover:bg-amber-200 transition-colors duration-300"></div>
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">Job Security</h3>
                    <p className="text-gray-600">Stable employment prospects with transferable skills that are valued across multiple industries.</p>
                    <div className="mt-4 flex items-center gap-2 text-amber-600 font-medium text-sm group-hover:text-amber-700">
                      <span>Valuable transferable skills</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <LinkButton
                  href={`/pathways/${sector.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Learn more about this pathway</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 px-4 py-2 rounded-full shadow-sm"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
              <path d="m5 12 7-7 7 7"/>
              <path d="M12 19V5"/>
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </div>
  );
} 