'use client'

import React from 'react'
import { Clock, CheckCircle2, Users, ChevronRight, Phone, Mail, BookOpen, GraduationCap, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  careerGuidance: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
  skillsSupport: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
  financialHelp: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
}

const sections = {
  guidance: {
    id: 'guidance',
    title: 'Career Guidance',
    description: 'Supporting Your Child',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'teal' as const
  },
  skills: {
    id: 'skills',
    title: 'Skills Support',
    description: 'Learning & Development',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'emerald' as const
  },
  funding: {
    id: 'funding',
    title: 'Financial Support',
    description: 'Available Funding',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'purple' as const
  }
}

const colorClasses = {
  teal: {
    button: 'border-teal-500 bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    link: 'bg-teal-600 hover:bg-teal-500',
    badge: 'bg-teal-50 text-teal-700',
    gradient: 'from-teal-50 to-white',
    nav: 'hover:bg-teal-50/80'
  },
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
  }
} as const

const Parents = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/parent-hero.jpg"
            alt="Supporting parents and carers in guiding their children's career paths"
            fill
            className="object-cover object-center object-[center_25%] brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-teal-300 mb-4">
              <div className="p-1.5 rounded-lg bg-teal-500/10 backdrop-blur-sm border border-teal-400/20">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Parents & Carers Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Support Your Child's<br className="hidden sm:block" /> Career Journey
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Guidance and resources to help your child make informed decisions about their future career path in Yorkshire's growing industries.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/career-guidance"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-500 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/success-stories"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                View Success Stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Navigation Banner */}
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

      {/* Career Guidance Section */}
      <div id="guidance" className="relative bg-gray-50">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 h-8 sm:h-16 overflow-hidden -translate-y-[99%]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full text-gray-50"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.careerGuidance}
                alt="Career guidance session"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-7 w-7 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Guidance</div>
                    <div className="text-gray-600">Knowledgeable career advisors for your child</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-teal-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                <span className="text-sm font-medium tracking-wide uppercase">Supporting Your Child</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Guidance</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Help your child explore career options and make informed decisions about their future.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Career Exploration</h3>
                      <p className="text-gray-600"> Diverse career paths and opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Industry Insights</h3>
                      <p className="text-gray-600">Learn about Yorkshire's growing sectors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Decision Support</h3>
                      <p className="text-gray-600">Tools to help make informed career choices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/career-guidance"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-500 transition-colors text-lg shadow-sm"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/success-stories"
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-500 group text-lg"
                >
                  View Success Stories
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Support Section */}
      <div id="skills" className="relative bg-white">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 h-8 sm:h-16 overflow-hidden -translate-y-[99%]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-sm font-medium tracking-wide uppercase">Learning & Development</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Skills Support</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Access resources and support to help your child develop essential skills for their future career.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Study Support</h3>
                      <p className="text-gray-600">Resources to help with academic development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Life Skills</h3>
                      <p className="text-gray-600">Building essential skills for work and life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Digital Skills</h3>
                      <p className="text-gray-600">Technology skills for the modern workplace</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/skills-support"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors text-lg shadow-sm"
                >
                  Explore Resources
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/learning-resources"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500 group text-lg"
                >
                  View Learning Materials
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.skillsSupport}
                alt="Skills development"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Learning Resources</div>
                    <div className="text-gray-600">Comprehensive support materials</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Support Section */}
      <div id="funding" className="relative bg-gray-50">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 h-8 sm:h-16 overflow-hidden -translate-y-[99%]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full text-gray-50"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.financialHelp}
                alt="Financial support"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Available Support</div>
                    <div className="text-gray-600">Financial aid and funding options</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-purple-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-sm font-medium tracking-wide uppercase">Available Funding</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Financial Support</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Learn about available financial support and funding options for your child's education and training.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Education Grants</h3>
                      <p className="text-gray-600">Available grants and bursaries for study</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Training Support</h3>
                      <p className="text-gray-600">Funding for vocational training and courses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Additional Help</h3>
                      <p className="text-gray-600">Extra support for specific circumstances</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/financial-support"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors text-lg shadow-sm"
                >
                  Explore Funding
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/funding-guide"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-500 group text-lg"
                >
                  View Funding Guide
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default Parents 