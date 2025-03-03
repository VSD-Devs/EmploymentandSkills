'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, Clock, Users, GraduationCap, Briefcase, ChevronRight, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react'
import SchoolMarketplace from '@/components/SchoolMarketplace'
import Breadcrumbs from '@/components/Breadcrumbs'

const sections = {
  advisor: {
    id: 'advisor',
    title: 'Enterprise Advisor',
    description: 'Strategic Partnership',
    icon: <Building2 className="w-6 h-6" />,
    color: 'emerald' as const
  },
  hour: {
    id: 'hour',
    title: 'Give an Hour',
    description: 'Quick Impact',
    icon: <Clock className="w-6 h-6" />,
    color: 'purple' as const
  },
  cornerstone: {
    id: 'cornerstone',
    title: 'Cornerstone Employer',
    description: 'Lead the Change',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'blue' as const
  }
}

const colorClasses = {
  emerald: {
    button: 'border-emerald-500 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white',
    nav: 'hover:bg-emerald-50/80'
  },
  purple: {
    button: 'border-purple-500 bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    link: 'bg-purple-600 hover:bg-purple-500',
    badge: 'bg-purple-50 text-purple-700',
    gradient: 'from-purple-50 to-white',
    nav: 'hover:bg-purple-50/80'
  },
  blue: {
    button: 'border-blue-500 bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    link: 'bg-blue-600 hover:bg-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    gradient: 'from-blue-50 to-white',
    nav: 'hover:bg-blue-50/80'
  }
} as const

const communityListings = [
  {
    type: 'Community Talk',
    title: 'Local Business Insights',
    description: 'Share your business journey with local students',
    school: 'Sheffield High School',
    yearGroup: 'Year 11',
    timing: 'March 2024',
    date: 'Posted 3 days ago',
    href: '/community/marketplace/local-business'
  },
  {
    type: 'Workshop',
    title: 'Entrepreneurship Skills',
    description: 'Teach students about starting a business',
    school: 'King Edward VII School',
    yearGroup: 'Year 12',
    timing: 'April 2024',
    date: 'Posted 1 week ago',
    href: '/community/marketplace/entrepreneurship'
  },
  {
    type: 'Career Talk',
    title: 'Creative Industries',
    description: 'Discuss careers in media and creative arts',
    school: 'Tapton School',
    yearGroup: 'Year 10',
    timing: 'May 2024',
    date: 'Posted 2 days ago',
    href: '/community/marketplace/creative-industries'
  }
]

const CommunitySchoolsPage = () => {
  const [currentTab, setCurrentTab] = useState('advisor')
  
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
  }

  useEffect(() => {
    const section = document.getElementById(currentTab)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentTab])

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Community', href: '/community-schools' },
          ]} />
        </div>
      </div>

      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-blue-800 to-emerald-900 py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/community-schools-hero.jpg"
              alt="Community schools in South Yorkshire"
              fill
              className="object-cover object-center opacity-15 mix-blend-overlay"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-700/50 backdrop-blur-sm border border-emerald-500/30">
                <GraduationCap className="h-4 w-4 text-emerald-300" />
                <span className="text-xs md:text-sm font-medium text-emerald-100">Community &amp; Schools</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Shape Yorkshire's Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">Workforce</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
                Partner with local schools and colleges to inspire the next generation. Your expertise can make a lasting impact on young people's careers.
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="/give-an-hour"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Give Your Time
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#advisor"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Explore Ways to Help
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-6 sm:mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <Image 
                  src="/images/community-schools-hero.jpg"
                  alt="Teacher working with business volunteer to inspire students"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner - Moved above the navigation */}
      <div className="relative mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">200+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Active Volunteers</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Business professionals sharing their expertise with local schools and students</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">110+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Partner Schools</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Institutions committed to connecting education with real-world careers</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">5,000+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Students Reached</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Young people inspired to pursue meaningful career paths in South Yorkshire</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Navigation Banner */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center overflow-x-auto pb-1 pt-1">
            <div className="flex space-x-1 py-1">
              {Object.values(sections).map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`} 
                  className={`group relative px-4 sm:px-6 py-3 flex-shrink-0 rounded-xl ${colorClasses[section.color].nav} transition-all hover:scale-105`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabChange(section.id)
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className={`p-1.5 rounded-lg ${colorClasses[section.color].icon} transition-all`}>
                      {section.icon}
                    </div>
                    <span className={`text-sm font-medium text-gray-800 whitespace-nowrap`}>
                      {section.title}
                    </span>
                    <span className="text-xs text-gray-500 hidden sm:block">{section.description}</span>
                    <div className={`h-0.5 w-0 bg-${section.color}-600 group-hover:w-full transition-all duration-200`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section - Removed in favor of the stats and sticky nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="/images/enterprise-advisor.jpg"
                alt="Enterprise advisor session"
                fill
                className="object-cover"
                style={{ objectPosition: 'top left' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <div className="h-[4.5rem] mb-4">
                <h2 className="relative text-2xl font-bold text-gray-900">
                  <span className="relative z-10 line-clamp-2 leading-tight block">Enterprise Advisor</span>
                  <span 
                    className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
                    aria-hidden="true"
                  ></span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">
                Join our network of senior business volunteers working directly with school leadership teams.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Strategic planning support</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Leadership engagement</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Network access</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="/images/give-hour.jpg"
                alt="Give an hour session"
                fill
                className="object-cover"
                style={{ objectPosition: 'top left' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <div className="h-[4.5rem] mb-4">
                <h2 className="relative text-2xl font-bold text-gray-900">
                  <span className="relative z-10 line-clamp-2 leading-tight block">Give an Hour</span>
                  <span 
                    className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-purple-100 via-purple-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
                    aria-hidden="true"
                  ></span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">
                Share your career journey and insights with young people. Just one hour can inspire the next generation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-purple-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Career talks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-purple-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Mentoring sessions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-purple-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Virtual options</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="/images/cornerstone.jpg"
                alt="Cornerstone employer meeting"
                fill
                className="object-cover"
                style={{ objectPosition: 'top left' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <div className="h-[4.5rem] mb-4">
                <h2 className="relative text-2xl font-bold text-gray-900">
                  <span className="relative z-10 line-clamp-2 leading-tight block">Cornerstone Employer</span>
                  <span 
                    className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
                    aria-hidden="true"
                  ></span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">
                Take a leading role in transforming careers education in Yorkshire as a Cornerstone Employer.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Strategic leadership</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Talent pipeline</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Community impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Advisor Section */}
      <section id="advisor" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-emerald-50 opacity-70 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-emerald-50 opacity-70"></div>
        <div className="absolute top-40 left-0 w-10 sm:w-20 h-64 sm:h-96 bg-gradient-to-b from-emerald-50 via-emerald-100/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl relative">
                <Image
                  src="/images/enterprise-advisor.jpg"
                  alt="Enterprise advisor session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Float card */}
              <div className="absolute bottom-8 -right-12 bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl max-w-sm transform -translate-x-20 border border-emerald-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 sm:h-7 w-6 sm:w-7 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg sm:text-xl mb-1">Strategic Impact</div>
                    <div className="text-gray-600 text-sm sm:text-base">Shape education strategy directly</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 shadow-sm">
                <Building2 className="h-4 w-4 text-emerald-700" />
                <span className="text-xs md:text-sm font-medium text-emerald-700">Enterprise Advisor</span>
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Strategic School <span className="text-emerald-600">Partnership</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Join our network of senior business volunteers working directly with school leadership teams to develop and implement career strategies that transform young lives.
              </p>
              
              <div className="pt-4 sm:pt-6">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-emerald-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Strategic Planning</h3>
                        <p className="text-sm sm:text-base text-gray-600">Help schools develop and implement effective careers strategies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-emerald-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Leadership Engagement</h3>
                        <p className="text-sm sm:text-base text-gray-600">Work directly with senior leadership teams to drive change</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-emerald-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Network Access</h3>
                        <p className="text-sm sm:text-base text-gray-600">Join a community of business leaders making a difference</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 sm:pt-6 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link
                  href="/register-interest"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all text-sm sm:text-base w-full xs:w-auto"
                >
                  Become an Advisor
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/advisor-stories"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-emerald-200 text-emerald-700 bg-emerald-50 font-medium hover:bg-emerald-100 transition-colors text-sm sm:text-base w-full xs:w-auto group"
                >
                  View Advisor Stories
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give an Hour Section */}
      <section id="hour" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gray-50">
        {/* Decorative elements */}
        <div className="absolute top-1/3 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-purple-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-40 sm:w-80 h-40 sm:h-80 bg-purple-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 sm:h-40 bg-gradient-to-t from-purple-50/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 shadow-sm">
                <Clock className="h-4 w-4 text-purple-700" />
                <span className="text-xs md:text-sm font-medium text-purple-700">Give an Hour</span>
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Share Your <span className="text-purple-600">Experience</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Make a meaningful impact by sharing your career journey and insights with young people. Just one hour can inspire the next generation and shape their future.
              </p>
              
              <div className="pt-4 sm:pt-6">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-purple-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Career Talks</h3>
                        <p className="text-sm sm:text-base text-gray-600">Share your journey and inspire future professionals</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-purple-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Mentoring Sessions</h3>
                        <p className="text-sm sm:text-base text-gray-600">One-to-one or small group guidance sessions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-purple-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Virtual Options</h3>
                        <p className="text-sm sm:text-base text-gray-600">Flexible online sessions to fit your schedule</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 sm:pt-6 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link
                  href="/give-an-hour"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all text-sm sm:text-base w-full xs:w-auto"
                >
                  Give An Hour
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/volunteer-opportunities"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-purple-200 text-purple-700 bg-purple-50 font-medium hover:bg-purple-100 transition-colors text-sm sm:text-base w-full xs:w-auto group"
                >
                  Browse Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl relative">
                <Image
                  src="/images/give-hour.jpg"
                  alt="Volunteer session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Float card */}
              <div className="absolute bottom-8 -left-12 bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl max-w-sm transform translate-x-20 border border-purple-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 sm:h-7 w-6 sm:w-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg sm:text-xl mb-1">Flexible Impact</div>
                    <div className="text-gray-600 text-sm sm:text-base">One hour makes a difference</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cornerstone Employer Section */}
      <section id="cornerstone" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-blue-50 opacity-70 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-blue-50 opacity-70"></div>
        <div className="absolute top-40 right-0 w-10 sm:w-20 h-64 sm:h-96 bg-gradient-to-b from-blue-50 via-blue-100/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl relative">
                <Image
                  src="/images/cornerstone.jpg"
                  alt="Cornerstone employer meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Float card */}
              <div className="absolute bottom-8 -right-12 bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl max-w-sm transform -translate-x-20 border border-blue-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg sm:text-xl mb-1">Lead the Change</div>
                    <div className="text-gray-600 text-sm sm:text-base">Transform careers education</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 shadow-sm">
                <Briefcase className="h-4 w-4 text-blue-700" />
                <span className="text-xs md:text-sm font-medium text-blue-700">Cornerstone Employer</span>
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Lead Strategic <span className="text-blue-600">Change</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Take a leading role in transforming careers education in Yorkshire. As a Cornerstone Employer, you'll help shape the future of skills development in our region.
              </p>
              
              <div className="pt-4 sm:pt-6">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-blue-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Strategic Leadership</h3>
                        <p className="text-sm sm:text-base text-gray-600">Shape regional skills strategy and education partnerships</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-blue-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Talent Pipeline</h3>
                        <p className="text-sm sm:text-base text-gray-600">Build strong connections with future talent</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100 border-l-4 border-l-blue-500">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Community Impact</h3>
                        <p className="text-sm sm:text-base text-gray-600">Make a lasting difference to local education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 sm:pt-6 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link
                  href="/cornerstone-employer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all text-sm sm:text-base w-full xs:w-auto"
                >
                  Become a Cornerstone Employer
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/employer-stories"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-blue-200 text-blue-700 bg-blue-50 font-medium hover:bg-blue-100 transition-colors text-sm sm:text-base w-full xs:w-auto group"
                >
                  Success Stories
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gray-50 border-t border-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-1/3 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-emerald-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-40 sm:w-80 h-40 sm:h-80 bg-emerald-50/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4 shadow-sm">
                  <Building2 className="h-4 w-4 text-emerald-700" />
                  <span className="text-xs md:text-sm font-medium text-emerald-700">Current Opportunities</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  School <span className="text-emerald-600">Marketplace</span>
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 md:max-w-lg mt-3 md:mt-0">
                Explore current opportunities to support schools and students in South Yorkshire. These roles match the skills and expertise you already have.
              </p>
            </div>
          </div>
          
          <SchoolMarketplace listings={communityListings} showPostOpportunity={false} />
          
          <div className="mt-12 sm:mt-16 flex justify-center">
            <Link
              href="/marketplace"
              className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm sm:text-base font-medium hover:from-emerald-500 hover:to-emerald-400 transition-colors shadow-lg w-full sm:w-auto justify-center"
            >
              View All Opportunities
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CommunitySchoolsPage 