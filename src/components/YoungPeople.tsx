'use client'

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, GraduationCap, BookOpen, Briefcase, Users, ArrowRight, Rocket, Building2, MapPin } from 'lucide-react'
import Newsletter from './Newsletter'
import CareerQuiz from './CareerQuiz'
import Breadcrumbs from './Breadcrumbs'

// Updated colour classes with more subtle, lighter tones
const colorClasses = {
  indigo: {
    button: 'border-indigo-300 bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-500',
    badge: 'bg-indigo-50 text-indigo-600',
    accent: 'border-indigo-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-indigo-300',
    nav: 'hover:bg-indigo-50'
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
  amber: {
    button: 'border-amber-300 bg-amber-50',
    icon: 'bg-amber-100 text-amber-600',
    link: 'bg-amber-600 hover:bg-amber-500',
    badge: 'bg-amber-50 text-amber-600',
    accent: 'border-amber-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-amber-300',
    nav: 'hover:bg-amber-50'
  },
  sky: {
    button: 'border-sky-300 bg-sky-50',
    icon: 'bg-sky-100 text-sky-600',
    link: 'bg-sky-600 hover:bg-sky-500',
    badge: 'bg-sky-50 text-sky-600',
    accent: 'border-sky-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-sky-300',
    nav: 'hover:bg-sky-50'
  },
  rose: {
    button: 'border-rose-300 bg-rose-50',
    icon: 'bg-rose-100 text-rose-600',
    link: 'bg-rose-600 hover:bg-rose-500',
    badge: 'bg-rose-50 text-rose-600',
    accent: 'border-rose-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-rose-300',
    nav: 'hover:bg-rose-50'
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

// Move tabs object outside component
const TABS_CONFIG: TabsType = {
  tlevels: {
    icon: <BookOpen className="w-6 h-6" />,
    color: 'amber',
    title: 'T-Levels',
    description: 'Technical Excellence',
    content: {
      text: [
        "T-Levels are new qualifications that combine classroom learning with industry placements. Perfect for those who want a practical, hands-on approach to learning.",
        "Discover how T-Levels can give you the skills and knowledge that employers are looking for, with real workplace experience built into your course."
      ],
      image: '/images/tlevels-hub.jpg',
      alt: 'Students in technical training',
      link: '/t-levels',
      cta: 'Explore T-Levels'
    }
  },
  apprenticeships: {
    icon: <Briefcase className="w-6 h-6" />,
    color: 'emerald',
    title: 'Apprenticeships',
    description: 'Earn While You Learn',
    content: {
      text: [
        "Get hands-on experience while gaining qualifications with an apprenticeship. We'll show you how to find the perfect apprenticeship opportunity and help you understand the application process.",
        "Discover different levels of apprenticeships available and which industries are looking for apprentices in Yorkshire."
      ],
      image: '/images/apprenticeship-hub.jpg',
      alt: 'Young apprentice learning practical skills',
      link: '/apprenticeships',
      cta: 'Find Apprenticeships'
    }
  },
  university: {
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'blue',
    title: 'University',
    description: 'Explore Higher Education',
    content: {
      text: [
        "Discover the exciting world of university education. From choosing the right course to understanding student life, we'll help you make informed decisions about your future.",
        "Learn about different universities, entry requirements, and how to make your UCAS application stand out."
      ],
      image: '/images/university-hub.jpg',
      alt: 'Students collaborating in a university library',
      link: '/university',
      cta: 'Explore Universities'
    }
  },
  skills: {
    icon: <BookOpen className="w-6 h-6" />,
    color: 'sky',
    title: 'Skills & Training',
    description: 'Build Your Future',
    content: {
      text: [
        "Develop the skills that employers are looking for. From digital skills to professional qualifications, we'll help you identify and access the training you need.",
        "Find free courses, workshops, and training opportunities to boost your CV and employability."
      ],
      image: '/images/skills-hub.jpg',
      alt: 'Young person learning new skills',
      link: '/skills-training',
      cta: 'Discover Training'
    }
  },
  careers: {
    icon: <Rocket className="w-6 h-6" />,
    color: 'indigo',
    title: 'Career Planning',
    description: 'Find Your Path',
    content: {
      text: [
        "Not sure what career path to take? Our career planning tools and resources help you explore different options and find what suits you best.",
        "Take our career quiz, explore different industries, and learn about the skills needed for different jobs."
      ],
      image: '/images/careers-hub.jpg',
      alt: 'Young people in a career planning session',
      link: '/plan-your-career',
      cta: 'Plan Your Career'
    }
  }
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-6">
        <button onClick={onClose} className="absolute top-4 right-4">
          Close
        </button>
        {/* Modal content */}
      </div>
    </div>
  );
};

const YoungPeople = () => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [imageLoadError, setImageLoadError] = useState<{[key: string]: boolean}>({})

  const tabs = useMemo(() => TABS_CONFIG, [])

  const handleImageError = (key: string) => {
    setImageLoadError(prev => ({
      ...prev,
      [key]: true
    }))
  }

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
        // Swipe left
        setActiveTab(tabKeys[currentIndex + 1])
        document.getElementById(tabKeys[currentIndex + 1])?.scrollIntoView({ behavior: 'smooth' })
      } else if (touchDiff < 0 && currentIndex > 0) {
        // Swipe right
        setActiveTab(tabKeys[currentIndex - 1])
        document.getElementById(tabKeys[currentIndex - 1])?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Update handleScroll to use memoized tabs
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
  }, [tabs]) // Add tabs to dependency array

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
        {/* Hero Section */}
        <div className="relative bg-[#0e1b3d] py-32 flex items-center min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/images/young-people.jpg"
              alt="Young people exploring career opportunities in South Yorkshire"
              fill
              className="object-cover object-center object-[center_25%] brightness-75"
              priority
              quality={90}
              onError={() => handleImageError('hero')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/95 via-[#0e1b3d]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0e1b3d]/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 text-indigo-300 mb-6">
                <div className="p-2 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20">
                  <Rocket className="h-5 w-5" />
                </div>
                <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Career Support<br className="hidden sm:block" /> in South Yorkshire
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                Explore exciting opportunities for your future. Whether it's university, apprenticeships, or starting your career, we're here to help you make informed choices.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <button
                  onClick={() => setIsQuizOpen(true)}
                  aria-label="Take our career quiz to find your ideal path"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
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
        <div className="hidden md:block sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
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
                        <div className={`${
                          activeTab === key 
                            ? colorClass.icon
                            : 'text-gray-500'
                          } p-1 rounded-lg`}>
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
        <div className="md:block pb-24 md:pb-0"> {/* Increased padding bottom for mobile nav */}
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

        {/* Career Quiz Modal */}
        <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

        {/* Mobile Navigation with Icons - Fixed at Bottom */}
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
                        <div className={`${
                          activeTab === key 
                            ? colorClass.icon
                            : 'text-gray-500'
                          } p-1 rounded-lg`}>
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

export default YoungPeople