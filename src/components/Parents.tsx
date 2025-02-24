'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Users, BookOpen, GraduationCap, Lightbulb, Building2, MapPin, ArrowRight } from 'lucide-react'
import Newsletter from './Newsletter'
import Breadcrumbs from '@/components/Breadcrumbs'

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  careerGuidance: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
  skillsSupport: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
  financialHelp: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
}

// Define the color types that match the keys in colorClasses
type ColorType = 'teal' | 'emerald' | 'sky' | 'indigo' | 'purple' | 'rose'

// Define the structure of the colorClasses object
type ColorClassesType = {
  [key in ColorType]: {
    button: string
    icon: string
    link: string
    badge: string
    gradient: string
    nav: string
  }
}

// Define the colorClasses object with the correct type
const colorClasses: ColorClassesType = {
  teal: {
    button: 'border-teal-600 bg-teal-50/90',
    icon: 'bg-teal-100 text-teal-700',
    link: 'bg-teal-700 hover:bg-teal-600',
    badge: 'bg-teal-50 text-teal-700',
    gradient: 'from-teal-50 to-white',
    nav: 'hover:bg-teal-50/80'
  },
  emerald: {
    button: 'border-emerald-600 bg-emerald-50/90',
    icon: 'bg-emerald-100 text-emerald-700',
    link: 'bg-emerald-700 hover:bg-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white',
    nav: 'hover:bg-emerald-50/80'
  },
  sky: {
    button: 'border-sky-600 bg-sky-50/90',
    icon: 'bg-sky-100 text-sky-700',
    link: 'bg-sky-700 hover:bg-sky-600',
    badge: 'bg-sky-50 text-sky-700',
    gradient: 'from-sky-50 to-white',
    nav: 'hover:bg-sky-50/80'
  },
  indigo: {
    button: 'border-indigo-600 bg-indigo-50/90',
    icon: 'bg-indigo-100 text-indigo-700',
    link: 'bg-indigo-700 hover:bg-indigo-600',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white',
    nav: 'hover:bg-indigo-50/80'
  },
  purple: {
    button: 'border-purple-600 bg-purple-50/90',
    icon: 'bg-purple-100 text-purple-700',
    link: 'bg-purple-700 hover:bg-purple-600',
    badge: 'bg-purple-50 text-purple-700',
    gradient: 'from-purple-50 to-white',
    nav: 'hover:bg-purple-50/80'
  },
  rose: {
    button: 'border-rose-600 bg-rose-50/90',
    icon: 'bg-rose-100 text-rose-700',
    link: 'bg-rose-700 hover:bg-rose-600',
    badge: 'bg-rose-50 text-rose-700',
    gradient: 'from-rose-50 to-white',
    nav: 'hover:bg-rose-50/80'
  }
} as const

interface TabContent {
  text: string[]
  image: string
  alt: string
  link: string
  cta: string
}

// Define the tab structure with proper typing
type TabType = {
  title: string
  description: string
  icon: React.ReactNode
  color: ColorType
  content: TabContent
}

type TabsType = {
  [key: string]: TabType
}

const Parents = () => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const tabs = useMemo(() => ({
    guidance: {
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'teal',
      title: 'Career Guidance',
      description: 'Supporting Your Child',
      content: {
        text: [
          'Help your child explore career options and make informed decisions about their future.',
          'Get expert guidance on supporting your child through their career journey, from choosing subjects to understanding different career paths.'
        ],
        image: IMAGES.careerGuidance,
        alt: 'Career guidance session',
        link: '/career-guidance',
        cta: 'Get Started'
      }
    },
    skills: {
      icon: <BookOpen className="w-6 h-6" />,
      color: 'emerald',
      title: 'Skills Support',
      description: 'Learning & Development',
      content: {
        text: [
          'Access resources and support to help your child develop essential skills for their future career.',
          'Discover tools and resources to support your child\'s learning and development journey.'
        ],
        image: IMAGES.skillsSupport,
        alt: 'Skills development',
        link: '/skills-support',
        cta: 'Explore Resources'
      }
    },
    funding: {
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'purple',
      title: 'Financial Support',
      description: 'Available Funding',
      content: {
        text: [
          'Learn about available financial support and funding options for your child\'s education and training.',
          'Understand the various funding options available to support your child\'s educational journey.'
        ],
        image: IMAGES.financialHelp,
        alt: 'Financial support',
        link: '/financial-support',
        cta: 'Explore Funding'
      }
    }
  }) as TabsType, [])

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
        { label: 'Parents & Carers', href: '/parents' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#0e1b3d] py-24 flex items-center min-h-[580px]">
        <div className="absolute inset-0">
          <Image
            src="/images/parents-hero.jpg"
            alt="Parents and carers supporting young people with career decisions in South Yorkshire"
            fill
            className="object-cover object-center object-[center_25%] brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/95 via-[#0e1b3d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0e1b3d]/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-teal-300 mb-6">
              <div className="p-2 rounded-lg bg-teal-500/10 backdrop-blur-sm border border-teal-400/20">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Parents & Carers<br className="hidden sm:block" /> Support Hub
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
              Help your child navigate their career journey with expert guidance, resources, and funding information for Yorkshire's growing industries.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/career-guidance"
                aria-label="Get career guidance resources for parents and carers"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Career Guidance
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="/financial-support"
                aria-label="Learn about financial support options for your child's education"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Financial Support
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation - Desktop Only */}
      <div className="hidden md:block sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-center">
            <div className="flex space-x-6 py-4">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color as ColorType;
                const focusRingClass = `focus:ring-${color}-400`;
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-5 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === key 
                        ? `${colorClasses[color].button} text-${color}-700 shadow-md transform -translate-y-1` 
                        : `${colorClasses[color].nav} text-gray-700 hover:transform hover:-translate-y-1`
                    } focus:outline-none focus:ring-2 ${focusRingClass}`}
                    onClick={() => setActiveTab(key)}
                  >
                    <span className={`text-base font-medium ${
                      activeTab === key 
                        ? `text-${color}-700` 
                        : 'text-gray-900 group-hover:text-${color}-700'
                    } whitespace-nowrap transition-colors`}>
                      {tab.title}
                    </span>
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
          <div key={key} id={key} className={`relative scroll-mt-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            {/* Section Content */}
            <div className="relative py-24 md:py-32">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute ${index % 2 === 0 ? '-right-1/4' : '-left-1/4'} -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br ${colorClasses[tab.color as ColorType].gradient} opacity-30 blur-3xl`} />
                <div className={`absolute ${index % 2 === 0 ? '-left-1/4' : '-right-1/4'} -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr ${colorClasses[tab.color as ColorType].gradient} opacity-30 blur-3xl`} />
                {index % 2 === 0 && (
                  <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]" />
                )}
              </div>

              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Mobile: Stack content on top of image */}
                  <div className="md:hidden">
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${colorClasses[tab.color as ColorType].button} mb-6`}>
                      {tab.icon}
                      <span className="text-base font-medium">{tab.title}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{tab.description}</h2>
                    <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl mb-8 group">
                      <Image
                        src={tab.content.image}
                        alt={tab.content.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      
                      {/* Regional Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-teal-700" />
                          <span className="text-xs font-medium text-gray-800">South Yorkshire</span>
                        </div>
                      </div>
                    </div>
                    <div className="prose prose-lg max-w-none mb-8">
                      {tab.content.text.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-600 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={tab.content.link}
                      aria-label={`${tab.content.cta} for ${tab.title}`}
                      className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 ${colorClasses[tab.color as ColorType].link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tab.color as ColorType}-400`}
                    >
                      {tab.content.cta}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Desktop: Alternating layout */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="hidden md:block">
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${colorClasses[tab.color as ColorType].button} mb-6`}>
                          {tab.icon}
                          <span className="text-base font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{tab.description}</h2>
                        <div className="prose prose-lg max-w-none mb-8">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-600 leading-relaxed mb-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          aria-label={`${tab.content.cta} for ${tab.title}`}
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 ${colorClasses[tab.color as ColorType].link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tab.color as ColorType}-400`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                      <div className="hidden md:block relative h-[480px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        
                        {/* Regional Badge */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-teal-700" />
                            <span className="text-xs font-medium text-gray-800">South Yorkshire</span>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color as ColorType].icon}`}>
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
                      <div className="hidden md:block relative h-[480px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        
                        {/* Regional Badge */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-teal-700" />
                            <span className="text-xs font-medium text-gray-800">South Yorkshire</span>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color as ColorType].icon}`}>
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
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${colorClasses[tab.color].button} mb-6`}>
                          {tab.icon}
                          <span className="text-base font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{tab.description}</h2>
                        <div className="prose prose-lg max-w-none mb-8">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-600 leading-relaxed mb-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          aria-label={`${tab.content.cta} for ${tab.title}`}
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tab.color}-400`}
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

      {/* Mobile Navigation - Fixed at Bottom */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg overflow-x-auto scrollbar-hide">
        <div className="w-max min-w-full px-2 sm:px-4">
          <div className="flex justify-start">
            <div className="flex space-x-2 py-2">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color as ColorType;
                const focusRingClass = `focus:ring-${color}-400`;
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-4 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === key 
                        ? `${colorClasses[color].button} text-${color}-700 shadow-md transform -translate-y-1` 
                        : `${colorClasses[color].nav} text-gray-700`
                    } focus:outline-none focus:ring-2 ${focusRingClass}`}
                    onClick={() => setActiveTab(key)}
                  >
                    <span className={`text-sm font-medium ${
                      activeTab === key 
                        ? `text-${color}-700` 
                        : `text-gray-900 group-hover:text-${color}-700`
                    } whitespace-nowrap transition-colors`}>
                      {tab.title}
                    </span>
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

export default Parents 