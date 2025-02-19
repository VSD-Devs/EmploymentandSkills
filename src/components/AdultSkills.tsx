'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { CheckCircle2, Users, ChevronRight, GraduationCap, BookOpen, Briefcase } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'
import CareerQuiz from './CareerQuiz'
import Breadcrumbs from '@/components/Breadcrumbs'

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  employmentSupport: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  fundedTraining: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  mentalHealth: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80",
  apprenticeship: "/images/apprenticeship-hub.jpg"
}

const colorClasses = {
  blue: {
    button: 'border-blue-500 bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    link: 'bg-blue-600 hover:bg-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    gradient: 'from-blue-50 to-white',
    nav: 'hover:bg-blue-50/80'
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
  },
  violet: {
    button: 'border-violet-500 bg-violet-50',
    icon: 'bg-violet-100 text-violet-600',
    link: 'bg-violet-600 hover:bg-violet-500',
    badge: 'bg-violet-50 text-violet-700',
    gradient: 'from-violet-50 to-white',
    nav: 'hover:bg-violet-50/80'
  }
} as const

const AdultSkills = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Define tabs configuration
  const tabs = useMemo(() => ({
    employment: {
      id: 'employment',
      title: 'Employment Support',
      description: 'Career Development',
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'blue' as const
    },
    training: {
      id: 'training',
      title: 'Funded Training',
      description: 'Professional Development',
      icon: <Users className="w-6 h-6" />,
      color: 'emerald' as const
    },
    apprenticeship: {
      id: 'apprenticeship',
      title: 'Apprenticeships',
      description: 'Career Change & Progression',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'violet' as const
    }
  }), [])

  // Add touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 50
    const touchDiff = touchStart - touchEnd

    if (Math.abs(touchDiff) > SWIPE_THRESHOLD) {
      const tabKeys = Object.keys(tabs)
      const currentIndex = tabKeys.indexOf(activeTab)
      
      if (touchDiff > 0 && currentIndex < tabKeys.length - 1) {
        setActiveTab(tabKeys[currentIndex + 1])
        document.getElementById(tabKeys[currentIndex + 1])?.scrollIntoView({ behavior: 'smooth' })
      } else if (touchDiff < 0 && currentIndex > 0) {
        setActiveTab(tabKeys[currentIndex - 1])
        document.getElementById(tabKeys[currentIndex - 1])?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Add scroll handler
  const handleScroll = useCallback(() => {
    const sections = Object.keys(tabs).map(key => document.getElementById(key))
    const scrollPosition = window.scrollY + window.innerHeight / 2

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveTab(section.id)
        }
      }
    })
  }, [tabs])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Adult Skills', href: '/adult-skills' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/adult-skills-hero.jpg"
            alt="Professional development and training opportunities in South Yorkshire"
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
            <div className="inline-flex items-center gap-2 text-orange-300 mb-4">
              <div className="p-1.5 rounded-lg bg-orange-500/10 backdrop-blur-sm border border-orange-400/20">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Adult Employment & Skills Support</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Build Your Career<br className="hidden sm:block" /> in South Yorkshire
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Access funded support, training, and resources to help you thrive in Yorkshire's growing industries. Whether you are looking to upskill, change careers, or get back into work, we are here to help.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsQuizOpen(true)}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-500 transition-colors"
              >
                Take Career Quiz
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              <Link
                href="/plan-your-career"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Start Planning
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center min-w-max">
            <div className="flex space-x-1 py-1">
              {Object.values(tabs).map((tab) => (
                <a 
                  key={tab.id}
                  href={`#${tab.id}`} 
                  className={`group relative px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 rounded-xl transition-colors ${
                    activeTab === tab.id 
                      ? `${colorClasses[tab.color].button} text-${tab.color}-600 shadow-md` 
                      : `${colorClasses[tab.color].nav} text-gray-600`
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className={`h-6 w-6 ${
                      activeTab === tab.id 
                        ? `text-${tab.color}-600` 
                        : 'text-gray-600 group-hover:text-${tab.color}-600'
                    } transition-colors`}>
                      {tab.icon}
                    </div>
                    <span className={`text-sm sm:text-base font-medium ${
                      activeTab === tab.id 
                        ? `text-${tab.color}-600` 
                        : 'text-gray-900 group-hover:text-${tab.color}-600'
                    } whitespace-nowrap transition-colors`}>
                      {tab.title}
                    </span>
                    <div className={`h-0.5 ${
                      activeTab === tab.id 
                        ? `w-full bg-${tab.color}-600` 
                        : `w-0 bg-${tab.color}-600 group-hover:w-full`
                    } transition-all duration-200`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Employment Support Section */}
      <div id="employment" className="relative bg-gray-50">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[460px] rounded-2xl overflow-hidden order-1 md:order-none">
              <Image
                src={IMAGES.employmentSupport}
                alt="Employment support session"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-8 -right-12 bg-white rounded-xl p-4 sm:p-6 shadow-xl max-w-[280px] sm:max-w-sm transform -translate-x-8 sm:-translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg sm:text-xl mb-0.5 sm:mb-1">94% Success Rate</div>
                    <div className="text-sm sm:text-base text-gray-600">Our career guidance leads to successful job placements</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-3 sm:mb-4">
                <span className="text-sm font-medium tracking-wide uppercase">Career Development</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Employment Support</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Get personalised career guidance, CV writing support, and interview preparation from our expert advisors.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">One-to-one Career Coaching</h3>
                      <p className="text-gray-600">Personalised guidance sessions with experienced career advisors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Job Search Strategy</h3>
                      <p className="text-gray-600">Learn effective techniques to find and secure your ideal role</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Interview Skills Workshop</h3>
                      <p className="text-gray-600">Practice sessions to boost your confidence and performance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/employment-support"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors text-base sm:text-lg shadow-sm"
                >
                  Explore Employment Support
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funded Training Section */}
      <div id="training" className="relative bg-white">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-3 sm:mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-sm font-medium tracking-wide uppercase">Professional Development</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Funded Training</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Access fully funded courses and qualifications in Yorkshire's high-growth sectors.
              </p>
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors text-base sm:text-lg shadow-sm"
              >
                Learn more
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[300px] sm:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.fundedTraining}
                alt="Training session"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">2,500+ Graduates</div>
                    <div className="text-gray-600">Successfully completed our training programmes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apprenticeships Section */}
      <div id="apprenticeship" className="relative bg-gray-50">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[460px] rounded-2xl overflow-hidden order-1 md:order-none">
              <Image
                src={IMAGES.apprenticeship}
                alt="Adult apprenticeship opportunities"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-violet-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-7 w-7 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">No Age Limit</div>
                    <div className="text-gray-600">Apprenticeships available at all levels</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-violet-600 mb-3 sm:mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-600" />
                <span className="text-sm font-medium tracking-wide uppercase">Career Change & Progression</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Apprenticeships</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                It's never too late to start an apprenticeship. Gain recognised qualifications whilst earning a salary in your chosen industry.
              </p>
              <Link
                href="/apprenticeships"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-500 transition-colors text-base sm:text-lg shadow-sm"
              >
                Find Apprenticeships
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Career Quiz Modal */}
      <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  )
}

export default AdultSkills
