'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, Clock, Users, GraduationCap, Briefcase, ChevronRight, HeartHandshake } from 'lucide-react'
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
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Community', href: '/community-schools' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/community-schools-hero.jpg"
            alt="Community schools in South Yorkshire"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Community &amp; Schools</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Shape Yorkshire's Future Workforce
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Partner with local schools and colleges to inspire the next generation. Your expertise can make a lasting impact on young people's careers.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/give-an-hour"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
              >
                Give Your Time
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#advisor"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore Ways to Help
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Navigation Banner - Moved above cards */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center min-w-max">
            <div className="flex space-x-1 py-1">
              {Object.values(sections).map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`} 
                  className={`group relative px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 rounded-xl ${colorClasses[section.color].nav}`}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className={`h-6 w-6 text-gray-600 group-hover:text-${section.color}-600 group-hover:scale-105`}>
                      {section.icon}
                    </div>
                    <span className={`text-sm sm:text-base font-medium text-gray-900 group-hover:text-${section.color}-600 whitespace-nowrap`}>
                      {section.title}
                    </span>
                    <div className={`h-0.5 w-0 bg-${section.color}-600 group-hover:w-full transition-all duration-50`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section - Adjusted margin to prevent underlap */}
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

      {/* Quick Stats Banner - Moved to bottom */}
      <div className="bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Community Impact</h2>
            <p className="text-gray-600 mt-2">Together, we're making a difference in South Yorkshire's education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">200+</div>
                <div className="text-sm text-gray-600">Active Volunteers</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">110+</div>
                <div className="text-sm text-gray-600">Partner Schools</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">5,000+</div>
                <div className="text-sm text-gray-600">Students Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Advisor Section */}
      <div id="advisor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/images/enterprise-advisor.jpg"
              alt="Enterprise advisor session"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-7 w-7 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">Strategic Impact</div>
                  <div className="text-gray-600">Shape education strategy directly</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Enterprise Advisor</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic School Partnership</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join our network of senior business volunteers working directly with school leadership teams to develop and implement career strategies.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Strategic Planning</h3>
                    <p className="text-gray-600">Help schools develop and implement effective careers strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Leadership Engagement</h3>
                    <p className="text-gray-600">Work directly with senior leadership teams to drive change</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Network Access</h3>
                    <p className="text-gray-600">Join a community of business leaders making a difference</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/register-interest"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors text-lg shadow-sm"
              >
                Become an Advisor
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/advisor-stories"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500 group text-lg"
              >
                View Advisor Stories
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Give an Hour Section */}
      <div id="hour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Give an Hour</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Make a meaningful impact by sharing your career journey and insights with young people. Just one hour can inspire the next generation.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Career Talks</h3>
                    <p className="text-gray-600">Share your journey and inspire future professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Mentoring Sessions</h3>
                    <p className="text-gray-600">One-to-one or small group guidance sessions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Virtual Options</h3>
                    <p className="text-gray-600">Flexible online sessions to fit your schedule</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/give-an-hour"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors text-lg shadow-sm"
              >
                Give An Hour
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/volunteer-opportunities"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-500 group text-lg"
              >
                Browse Opportunities
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/images/give-hour.jpg"
              alt="Volunteer session"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">Flexible Impact</div>
                  <div className="text-gray-600">One hour makes a difference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cornerstone Employer Section */}
      <div id="cornerstone" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/images/cornerstone.jpg"
              alt="Cornerstone employer meeting"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">Lead the Change</div>
                  <div className="text-gray-600">Transform careers education</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Cornerstone Employer</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lead Strategic Change</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Take a leading role in transforming careers education in Yorkshire. As a Cornerstone Employer, you'll help shape the future of skills development.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Strategic Leadership</h3>
                    <p className="text-gray-600">Shape regional skills strategy and education partnerships</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Talent Pipeline</h3>
                    <p className="text-gray-600">Build strong connections with future talent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Community Impact</h3>
                    <p className="text-gray-600">Make a lasting difference to local education</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/cornerstone-employer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors text-lg shadow-sm"
              >
                Become a Cornerstone
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/cornerstone-network"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 group text-lg"
              >
                Meet Our Network
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SchoolMarketplace listings={communityListings} showPostOpportunity={false} />
    </main>
  )
}

export default CommunitySchoolsPage 