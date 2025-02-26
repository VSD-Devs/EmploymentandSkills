'use client'

import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'
import { CheckCircle2, Users, ChevronRight, GraduationCap, BookOpen, Briefcase, Building2, MapPin, Globe, Clock, Calendar, X, HelpCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'
import Breadcrumbs from './Breadcrumbs'
// Lazy load the CareerQuiz component since it's only used when modal is opened
const CareerQuiz = lazy(() => import('./CareerQuiz'))

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  employmentSupport: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  fundedTraining: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  mentalHealth: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80",
  apprenticeship: "/images/apprenticeship-hub.jpg"
}

// Updated colour classes with more subtle, lighter tones
const colorClasses = {
  blue: {
    button: 'border-blue-300 bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    link: 'bg-blue-600 hover:bg-blue-500',
    badge: 'bg-blue-50 text-blue-600',
    accent: 'border-blue-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-blue-300',
    nav: 'hover:bg-blue-50'
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
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: 'blue',
      title: 'Employment Support',
      description: 'Career Development',
      content: {
        text: [
          'Get personalised career guidance, CV writing support, and interview preparation from our expert advisors.',
          'Our career guidance leads to successful job placements with a 94% success rate across South Yorkshire.'
        ],
        image: IMAGES.employmentSupport,
        alt: 'Employment support session with career advisor helping a client with CV preparation',
        link: '/employment-support',
        cta: 'Explore Employment Support'
      }
    },
    training: {
      icon: <Users className="w-8 h-8" />,
      color: 'emerald',
      title: 'Funded Training',
      description: 'Professional Development',
      content: {
        text: [
          'Access fully funded courses and qualifications in Yorkshire\'s high-growth sectors through our regional skills partnerships.',
          'Over 2,500 residents have successfully completed our training programmes, gaining valuable skills and qualifications.'
        ],
        image: IMAGES.fundedTraining,
        alt: 'Professional training session with diverse group of adult learners in a modern classroom setting',
        link: '/funded-training-for-adults',
        cta: 'Browse Courses'
      }
    },
    apprenticeship: {
      icon: <Briefcase className="w-8 h-8" />,
      color: 'purple',
      title: 'Apprenticeships',
      description: 'Career Change & Progression',
      content: {
        text: [
          'It\'s never too late to start an apprenticeship. Gain recognised qualifications whilst earning a salary in your chosen industry.',
          'Our regional apprenticeship programmes are available at all levels, with no age limit and full support throughout your journey.'
        ],
        image: IMAGES.apprenticeship,
        alt: 'Adult apprentice working alongside a mentor in a professional workplace environment',
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

  // Debounce scroll handler to improve performance
  const handleScroll = useCallback(() => {
    if (!scrollTimeout.current) {
      scrollTimeout.current = setTimeout(() => {
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
        scrollTimeout.current = null
      }, 100)
    }
  }, [tabs])

  const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [handleScroll])

  // Prefetch linked pages for faster navigation
  useEffect(() => {
    const links = ['/employment-support', '/funded-training-for-adults', '/apprenticeships', '/plan-your-career']
    links.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    })
  }, [])

  return (
    <div className="bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Adult Skills', href: '/adult-skills' },
          ]} />
        </div>
      </div>
      
      <div 
        className="bg-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Hero Section */}
        <div className="relative bg-[#0e1b3d] py-32 flex items-center min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/images/adult-skills-hero.jpg"
              alt="Professional development and training opportunities in South Yorkshire"
              fill
              className="object-cover object-center object-[center_25%] brightness-75"
              priority
              quality={80}
              sizes="100vw"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/90 via-[#0e1b3d]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0e1b3d]/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 text-blue-300 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Build Your Career<br className="hidden sm:block" /> in South Yorkshire
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                Access funded support, training, and resources to help you thrive in Yorkshire's growing industries. Whether you are looking to upskill, change careers, or get back into work, we are here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <button
                  onClick={() => setIsQuizOpen(true)}
                  aria-label="Take our career quiz to find your ideal path"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Take Career Quiz
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
                <Link
                  href="/plan-your-career"
                  aria-label="Start planning your career with our resources and tools"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Start Planning
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation with Icons - Desktop Only */}
        <div className="hidden md:block sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex justify-center">
              <div className="flex space-x-6 py-4">
                {Object.entries(tabs).map(([key, tab]) => {
                  const color = tab.color as ColorType;
                  const colorClass = colorClasses[color];
                  return (
                    <a 
                      key={key}
                      href={`#${key}`} 
                      aria-label={`View ${tab.title} information`}
                      className={`group relative px-6 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                        activeTab === key 
                          ? `text-gray-800 ${colorClass.button} shadow-md transform -translate-y-1` 
                          : `hover:bg-gray-50 text-gray-700 hover:transform hover:-translate-y-1`
                      } focus:outline-none focus:ring-2 focus:ring-gray-200`}
                      onClick={() => setActiveTab(key)}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`${activeTab === key ? colorClass.icon : 'text-gray-500'} p-1 rounded-lg`}>
                          {tab.icon}
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
            const color = tab.color as ColorType;
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

        {/* Career Quiz Modal - Wrap in Suspense with fallback */}
        {isQuizOpen && (
          <Suspense fallback={<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-xl">Loading quiz...</div>
          </div>}>
            <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
          </Suspense>
        )}

        {/* Mobile Navigation with Icons - Fixed at Bottom */}
        <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-center">
              <div className="flex space-x-4 py-2">
                {Object.entries(tabs).map(([key, tab]) => {
                  const color = tab.color as ColorType;
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
    </div>
  )
}

// Memoize the entire component to prevent unnecessary re-renders
export default React.memo(AdultSkills)
