'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { CheckCircle2, Users, ChevronRight, GraduationCap, BookOpen, Briefcase, Building2, MapPin, Globe, Clock, Calendar, X, HelpCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'
import CareerQuiz from './CareerQuiz'
import Breadcrumbs from './Breadcrumbs'

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  employmentSupport: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  fundedTraining: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  mentalHealth: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80",
  apprenticeship: "/images/apprenticeship-hub.jpg"
}

interface ColorClasses {
  button: string;
  icon: string;
  link: string;
  badge: string;
  gradient: string;
  nav: string;
}

const colorClasses: Record<string, ColorClasses> = {
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
}

type ColorType = keyof typeof colorClasses

interface TabContent {
  text: string[]
  image: string
  alt: string
  link: string
  cta: string
}

interface Tab {
  icon: React.ReactNode
  color: ColorType
  title: string
  description: string
  content: TabContent
}

type TabsType = {
  [key: string]: Tab
}

const AdultSkills = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const tabs = useMemo(() => ({
    employment: {
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'blue',
      title: 'Employment Support',
      description: 'Career Development',
      content: {
        text: [
          'Get personalised career guidance, CV writing support, and interview preparation from our expert advisors.',
          'Our career guidance leads to successful job placements with a 94% success rate.'
        ],
        image: IMAGES.employmentSupport,
        alt: 'Employment support session',
        link: '/employment-support',
        cta: 'Explore Employment Support'
      }
    },
    training: {
      icon: <Users className="w-6 h-6" />,
      color: 'emerald',
      title: 'Funded Training',
      description: 'Professional Development',
      content: {
        text: [
          'Access fully funded courses and qualifications in Yorkshire\'s high-growth sectors.',
          'Over 2,500 graduates have successfully completed our training programmes, gaining valuable skills and qualifications.'
        ],
        image: IMAGES.fundedTraining,
        alt: 'Training session in progress',
        link: '/funded-training-for-adults',
        cta: 'Browse Courses'
      }
    },
    apprenticeship: {
      icon: <Briefcase className="w-6 h-6" />,
      color: 'purple',
      title: 'Apprenticeships',
      description: 'Career Change & Progression',
      content: {
        text: [
          'It\'s never too late to start an apprenticeship. Gain recognised qualifications whilst earning a salary in your chosen industry.',
          'Our apprenticeship programmes are available at all levels, with no age limit and full support throughout your journey.'
        ],
        image: IMAGES.apprenticeship,
        alt: 'Adult apprenticeship opportunities',
        link: '/apprenticeships',
        cta: 'Find Apprenticeships'
      }
    }
  }), [])

  // Handle touch swipe for mobile navigation
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

  // Handle scroll to update active tab
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
    <div 
      className="bg-white"
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
      <div className="relative bg-[#111827] py-20 flex items-center">
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
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <Link
                href="/plan-your-career"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Start Planning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation - Desktop Only */}
      <div className="hidden md:block sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center min-w-max">
            <div className="flex space-x-1 py-1">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color as keyof typeof colorClasses;
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    className={`group relative px-2 md:px-4 py-2 md:py-3 flex-shrink-0 rounded-xl transition-colors ${
                      activeTab === key 
                        ? `${colorClasses[color].button} text-${color}-600 shadow-md` 
                        : `${colorClasses[color].nav} text-gray-600`
                    }`}
                    onClick={() => setActiveTab(key)}
                  >
                    <div className="relative z-10 flex flex-col items-center gap-1">
                      <div className={`h-6 w-6 ${
                        activeTab === key 
                          ? `text-${color}-600` 
                          : 'text-gray-600 group-hover:text-${color}-600'
                      } transition-colors`}>
                        {tab.icon}
                      </div>
                      <span className={`text-xs md:text-sm font-medium ${
                        activeTab === key 
                          ? `text-${color}-600` 
                          : 'text-gray-900 group-hover:text-${color}-600'
                      } whitespace-nowrap transition-colors`}>
                        {tab.title}
                      </span>
                      <div className={`h-0.5 hidden md:block ${
                        activeTab === key 
                          ? `w-full bg-${color}-600` 
                          : `w-0 bg-${color}-600 group-hover:w-full`
                      } transition-all duration-200`} />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="md:block pb-20 md:pb-0"> {/* Add padding bottom for mobile nav */}
        {Object.entries(tabs).map(([key, tab], index) => (
          <div key={key} id={key} className={`relative ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            {/* Section Content */}
            <div className="relative py-24">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute ${index % 2 === 0 ? '-right-1/4' : '-left-1/4'} -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br ${colorClasses[tab.color].gradient} opacity-20 blur-3xl`} />
                <div className={`absolute ${index % 2 === 0 ? '-left-1/4' : '-right-1/4'} -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr ${colorClasses[tab.color].gradient} opacity-20 blur-3xl`} />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Mobile: Stack content on top of image */}
                  <div className="md:hidden">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[tab.color].button} mb-6`}>
                      {tab.icon}
                      <span className="text-sm font-medium">{tab.title}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{tab.description}</h2>
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mb-6">
                      <Image
                        src={tab.content.image}
                        alt={tab.content.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </div>
                    <div className="prose prose-lg max-w-none mb-8">
                      {tab.content.text.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={tab.content.link}
                      className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
                    >
                      {tab.content.cta}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Desktop: Alternating layout */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="hidden md:block">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[tab.color].button} mb-6`}>
                          {tab.icon}
                          <span className="text-sm font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">{tab.description}</h2>
                        <div className="prose prose-lg max-w-none mb-8">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                      <div className="hidden md:block relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                              {tab.icon}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-xl mb-1">{tab.title}</div>
                              <div className="text-gray-600">{tab.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                              {tab.icon}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-xl mb-1">{tab.title}</div>
                              <div className="text-gray-600">{tab.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[tab.color].button} mb-6`}>
                          {tab.icon}
                          <span className="text-sm font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">{tab.description}</h2>
                        <div className="prose prose-lg max-w-none mb-8">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Career Quiz Modal */}
      <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* Mobile Navigation - Fixed at Bottom */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 py-2">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color as keyof typeof colorClasses;
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    className={`group relative px-3 py-2 flex-shrink-0 rounded-xl transition-colors ${
                      activeTab === key 
                        ? `${colorClasses[color].button} text-${color}-600 shadow-md` 
                        : `${colorClasses[color].nav} text-gray-600`
                    }`}
                    onClick={() => setActiveTab(key)}
                  >
                    <div className="relative z-10 flex flex-col items-center gap-1">
                      <div className={`h-5 w-5 ${
                        activeTab === key 
                          ? `text-${color}-600` 
                          : 'text-gray-600 group-hover:text-${color}-600'
                      } transition-colors`}>
                        {tab.icon}
                      </div>
                      <span className={`text-xs font-medium ${
                        activeTab === key 
                          ? `text-${color}-600` 
                          : 'text-gray-900 group-hover:text-${color}-600'
                      } whitespace-nowrap transition-colors`}>
                        {tab.title}
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdultSkills
