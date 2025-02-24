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
    button: 'border-blue-600 bg-blue-50/90',
    icon: 'bg-blue-100 text-blue-700',
    link: 'bg-blue-700 hover:bg-blue-600',
    badge: 'bg-blue-50 text-blue-700',
    gradient: 'from-blue-50 to-white',
    nav: 'hover:bg-blue-50/80'
  },
  emerald: {
    button: 'border-emerald-600 bg-emerald-50/90',
    icon: 'bg-emerald-100 text-emerald-700',
    link: 'bg-emerald-700 hover:bg-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white',
    nav: 'hover:bg-emerald-50/80'
  },
  purple: {
    button: 'border-purple-600 bg-purple-50/90',
    icon: 'bg-purple-100 text-purple-700',
    link: 'bg-purple-700 hover:bg-purple-600',
    badge: 'bg-purple-50 text-purple-700',
    gradient: 'from-purple-50 to-white',
    nav: 'hover:bg-purple-50/80'
  },
  violet: {
    button: 'border-violet-600 bg-violet-50/90',
    icon: 'bg-violet-100 text-violet-700',
    link: 'bg-violet-700 hover:bg-violet-600',
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

      {/* Enhanced Navigation - Desktop Only */}
      <div className="hidden md:block sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-center">
            <div className="flex space-x-6 py-4">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color as keyof typeof colorClasses;
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-6 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === key 
                        ? `${colorClasses[color].button} text-${color}-700 shadow-md transform -translate-y-1` 
                        : `${colorClasses[color].nav} text-gray-700 hover:transform hover:-translate-y-1`
                    } focus:outline-none focus:ring-2 focus:ring-${color}-400`}
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
          <div key={key} id={key} className={`relative ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            {/* Section Content */}
            <div className="relative py-32">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute ${index % 2 === 0 ? '-right-1/4' : '-left-1/4'} -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br ${colorClasses[tab.color].gradient} opacity-30 blur-3xl`} />
                <div className={`absolute ${index % 2 === 0 ? '-left-1/4' : '-right-1/4'} -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr ${colorClasses[tab.color].gradient} opacity-30 blur-3xl`} />
                {index % 2 === 0 && (
                  <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]" />
                )}
              </div>

              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
                  {/* Mobile: Stack content on top of image */}
                  <div className="md:hidden">
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${colorClasses[tab.color].button} mb-6`}>
                      {tab.icon}
                      <span className="text-base font-medium">{tab.title}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">{tab.description}</h2>
                    <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl mb-10 group">
                      <Image
                        src={tab.content.image}
                        alt={tab.content.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </div>
                    <div className="prose prose-lg max-w-none mb-10">
                      {tab.content.text.map((paragraph, index) => (
                        <p key={index} className="text-xl text-gray-600 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={tab.content.link}
                      aria-label={`${tab.content.cta} for ${tab.title}`}
                      className={`inline-flex items-center px-8 py-4 rounded-xl text-white transition-all duration-300 ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tab.color}-400`}
                    >
                      {tab.content.cta}
                      <ChevronRight className="ml-3 h-6 w-6" />
                    </Link>
                  </div>

                  {/* Desktop: Alternating layout */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="hidden md:block">
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${colorClasses[tab.color].button} mb-8`}>
                          {tab.icon}
                          <span className="text-base font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">{tab.description}</h2>
                        <div className="prose prose-xl max-w-none mb-10">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-600 leading-relaxed mb-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          aria-label={`${tab.content.cta} for ${tab.title}`}
                          className={`inline-flex items-center px-8 py-4 rounded-xl text-white transition-all duration-300 ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tab.color}-400`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-3 h-6 w-6" />
                        </Link>
                      </div>
                      <div className="hidden md:block relative h-[520px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-10 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2">
                          <div className="flex items-center gap-5">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                              {tab.icon}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-2xl mb-2">{tab.title}</div>
                              <div className="text-lg text-gray-600">{tab.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block relative h-[520px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                        <Image
                          src={tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-10 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2">
                          <div className="flex items-center gap-5">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                              {tab.icon}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-2xl mb-2">{tab.title}</div>
                              <div className="text-lg text-gray-600">{tab.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${colorClasses[tab.color].button} mb-8`}>
                          {tab.icon}
                          <span className="text-base font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">{tab.description}</h2>
                        <div className="prose prose-xl max-w-none mb-10">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-600 leading-relaxed mb-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          aria-label={`${tab.content.cta} for ${tab.title}`}
                          className={`inline-flex items-center px-8 py-4 rounded-xl text-white transition-all duration-300 ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tab.color}-400`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-3 h-6 w-6" />
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

      {/* Career Quiz Modal - Wrap in Suspense with fallback */}
      {isQuizOpen && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-xl">Loading quiz...</div>
        </div>}>
          <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </Suspense>
      )}

      {/* Mobile Navigation - Fixed at Bottom */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-4 py-4">
              {Object.entries(tabs).map(([key, tab]) => {
                const color = tab.color as keyof typeof colorClasses;
                return (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-5 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === key 
                        ? `${colorClasses[color].button} text-${color}-700 shadow-md transform -translate-y-1` 
                        : `${colorClasses[color].nav} text-gray-700`
                    } focus:outline-none focus:ring-2 focus:ring-${color}-400`}
                    onClick={() => setActiveTab(key)}
                  >
                    <span className={`text-sm font-medium ${
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
    </div>
  )
}

// Memoize the entire component to prevent unnecessary re-renders
export default React.memo(AdultSkills)
