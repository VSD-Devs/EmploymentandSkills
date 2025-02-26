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

// Updated colour classes with more subtle, lighter tones
const colorClasses = {
  teal: {
    button: 'border-teal-300 bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    link: 'bg-teal-600 hover:bg-teal-500',
    badge: 'bg-teal-50 text-teal-600',
    accent: 'border-teal-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-teal-300',
    nav: 'hover:bg-teal-50'
  },
  emerald: {
    button: 'border-emerald-300 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-600',
    accent: 'border-emerald-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-emerald-300',
    nav: 'hover:bg-emerald-50'
  },
  purple: {
    button: 'border-purple-300 bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    link: 'bg-purple-600 hover:bg-purple-500',
    badge: 'bg-purple-50 text-purple-600',
    accent: 'border-purple-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-purple-300',
    nav: 'hover:bg-purple-50'
  }
} as const

type ColorType = keyof typeof colorClasses

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
                const color = tab.color;
                const colorClass = colorClasses[color];
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-5 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === key 
                        ? `text-gray-800 ${colorClass.button} shadow-md transform -translate-y-1` 
                        : `hover:bg-gray-50 text-gray-700 hover:transform hover:-translate-y-1`
                    } focus:outline-none focus:ring-2 focus:ring-gray-200`}
                    onClick={() => setActiveTab(key)}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`${activeTab === key ? colorClass.icon : 'text-gray-500'} p-1 rounded-lg`}>
                        {React.isValidElement(tab.icon) 
                          ? React.cloneElement(tab.icon as React.ReactElement, { className: 'w-5 h-5' })
                          : tab.icon}
                      </div>
                      <span className={`text-base font-medium ${
                        activeTab === key 
                          ? 'text-gray-800'
                          : 'text-gray-900 group-hover:text-gray-800'
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

      {/* Main Content Sections */}
      <div className="md:block pb-24 md:pb-0"> {/* Add padding bottom for mobile nav */}
        {Object.entries(tabs).map(([key, tab], index) => {
          const color = tab.color;
          const colorClass = colorClasses[color];
          const isEvenSection = index % 2 === 0;
          
          return (
          <div 
            key={key} 
            id={key} 
            className="relative scroll-mt-20 overflow-hidden"
          >
            {/* Section Background - alternating white and very light colored */}
            <div className={`absolute inset-0 ${isEvenSection ? 'bg-white' : 'bg-gray-50'}`}></div>
            
            {/* Light patterns for odd sections */}
            {!isEvenSection && (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
              </>
            )}
            
            {/* Section Content */}
            <div className="relative py-24 md:py-32">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Mobile: Stack content on top of image */}
                  <div className="md:hidden">
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-md ${colorClass.accent} mb-6`}>
                      <div className={`p-2 rounded-full ${colorClass.icon}`}>
                        {tab.icon}
                      </div>
                      <span className="text-base font-medium text-gray-900">{tab.title}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{tab.description}</h2>
                    <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl mb-8 group">
                      <Image
                        src={tab.content.image}
                        alt={tab.content.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/30 to-transparent mix-blend-multiply" />
                      
                      {/* Badge with Location */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-gray-700" />
                          <span className="text-xs font-medium text-gray-800">South Yorkshire</span>
                        </div>
                      </div>
                    </div>
                    <div className="prose prose-lg max-w-none mb-8">
                      {tab.content.text.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4 bg-white p-4 rounded-lg shadow-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={tab.content.link}
                      aria-label={`${tab.content.cta} for ${tab.title}`}
                      className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 ${colorClass.link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200`}
                    >
                      {tab.content.cta}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Desktop: Alternating layout */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="hidden md:block">
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-md ${colorClass.accent} mb-6`}>
                          <div className={`p-2 rounded-full ${colorClass.icon}`}>
                            {tab.icon}
                          </div>
                          <span className="text-base font-medium text-gray-900">{tab.title}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{tab.description}</h2>
                        <div className="prose prose-lg max-w-none mb-8">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-700 leading-relaxed mb-6 bg-white p-5 rounded-lg shadow-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          aria-label={`${tab.content.cta} for ${tab.title}`}
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 ${colorClass.link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                      <div className="hidden md:block relative h-[480px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02] group">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/30 to-transparent mix-blend-multiply" />
                        
                        {/* Badge with Location */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-gray-700" />
                            <span className="text-xs font-medium text-gray-800">South Yorkshire</span>
                          </div>
                        </div>
                        
                        {/* Info Card */}
                        <div className={`absolute bottom-8 -right-12 ${colorClass.cardBg} rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border-l-4 ${colorClass.cardBorder} transition-all duration-500 group-hover:-translate-y-2`}>
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClass.icon} shadow-md`}>
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
                      <div className="hidden md:block relative h-[480px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02] group">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/30 to-transparent mix-blend-multiply" />
                        
                        {/* Badge with Location */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-gray-700" />
                            <span className="text-xs font-medium text-gray-800">South Yorkshire</span>
                          </div>
                        </div>
                        
                        {/* Info Card */}
                        <div className={`absolute bottom-8 -right-12 ${colorClass.cardBg} rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border-l-4 ${colorClass.cardBorder} transition-all duration-500 group-hover:-translate-y-2`}>
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClass.icon} shadow-md`}>
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
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-md ${colorClass.accent} mb-6`}>
                          <div className={`p-2 rounded-full ${colorClass.icon}`}>
                            {tab.icon}
                          </div>
                          <span className="text-base font-medium text-gray-900">{tab.title}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{tab.description}</h2>
                        <div className="prose prose-lg max-w-none mb-8">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-700 leading-relaxed mb-6 bg-white p-5 rounded-lg shadow-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          aria-label={`${tab.content.cta} for ${tab.title}`}
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 ${colorClass.link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200`}
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
          );
        })}
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Mobile Navigation - Fixed at Bottom */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex space-x-4 py-2">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color;
                const colorClass = colorClasses[color];
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-3 py-2 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === key 
                        ? `text-gray-800 ${colorClass.button} shadow-md transform -translate-y-1` 
                        : `hover:bg-gray-50 text-gray-700`
                    } focus:outline-none focus:ring-2 focus:ring-gray-200`}
                    onClick={() => setActiveTab(key)}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className={`${activeTab === key ? colorClass.icon : 'text-gray-500'} p-1 rounded-lg`}>
                        {React.isValidElement(tab.icon) 
                          ? React.cloneElement(tab.icon as React.ReactElement, { className: 'w-6 h-6' })
                          : tab.icon}
                      </div>
                      <span className={`text-xs font-medium ${
                        activeTab === key 
                          ? 'text-gray-800'
                          : 'text-gray-900 group-hover:text-gray-800'
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

export default Parents 