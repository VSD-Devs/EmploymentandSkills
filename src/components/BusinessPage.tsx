'use client'

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, GraduationCap, BookOpen, LineChart, Globe2, ArrowRight, MapPin } from 'lucide-react'
import Newsletter from './Newsletter'
import Breadcrumbs from '@/components/Breadcrumbs'

// Updated colour classes with more subtle, lighter tones
const colorClasses = {
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
  purple: {
    button: 'border-purple-300 bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    link: 'bg-purple-600 hover:bg-purple-500',
    badge: 'bg-purple-50 text-purple-600',
    accent: 'border-purple-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-purple-300',
    nav: 'hover:bg-purple-50'
  },
  teal: {
    button: 'border-teal-300 bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    link: 'bg-teal-600 hover:bg-teal-500',
    badge: 'bg-teal-50 text-teal-600',
    accent: 'border-teal-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    cardBorder: 'border-l-teal-300',
    nav: 'hover:bg-teal-50'
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

const BusinessPage = () => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)

  const tabs = useMemo(() => ({
    skills: {
      icon: <LineChart className="w-6 h-6" />,
      color: 'blue',
      title: 'Funding & Training',
      description: 'Access funding to grow your business',
      content: {
        text: [
          'Get free, practical support to develop your workforce. Our local advisors help you access funding for training and connect with the right resources.',
          'Available support includes grants up to £5,000 for apprenticeships, subsidised training programmes, and expert guidance on staff development.'
        ],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
        alt: 'Professional development training session in progress',
        link: '/funded-training',
        cta: 'Learn More'
      }
    },
    startup: {
      icon: <Building2 className="w-6 h-6" />,
      color: 'indigo',
      title: 'Start-ups',
      description: 'Launch your business journey',
      content: {
        text: [
          'Get your business off the ground with expert guidance and support. Our startup specialists provide personalised mentoring, access to funding, and essential resources to help you succeed.',
          'From business planning to market research, we offer comprehensive support to turn your idea into a thriving Yorkshire business. Access startup grants, networking opportunities, and workshops designed for new entrepreneurs.'
        ],
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
        alt: 'Entrepreneurs collaborating in a modern workspace',
        link: '/startup-support',
        cta: 'Start Your Journey'
      }
    },
    apprenticeship: {
      icon: <BookOpen className="w-6 h-6" />,
      color: 'blue',
      title: 'Recruitment',
      description: 'Find and develop talent',
      content: {
        text: [
          'Access comprehensive recruitment support and funding to grow your team. Our specialists help you find, train and retain the right talent for your business. We offer guidance on various fully-funded training programmes and recruitment initiatives tailored to Yorkshire businesses.'
        ],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        alt: 'Business professionals in a meeting discussing recruitment',
        link: '/recruitment-support',
        cta: 'Learn More'
      }
    },
    enterprise: {
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'emerald',
      title: 'Community & Schools',
      description: 'Build your future workforce',
      content: {
        text: [
          'Connect directly with local schools and colleges to shape your future workforce. Our Enterprise Advisor network helps you inspire young talent and create strong links between education and business.',
          'Get involved in mentoring, work experience, and career events to develop your talent pipeline and give back to the Yorkshire community.'
        ],
        image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80',
        alt: 'Enterprise advisors collaborating in a meeting room',
        link: '/community-schools',
        cta: 'Get Involved'
      }
    },
    business: {
      icon: <Building2 className="w-6 h-6" />,
      color: 'purple',
      title: 'Business Growth',
      description: 'Advice to scale your business',
      content: {
        text: [
          'Get practical, hands-on support to grow your business. Our expert advisors provide free consultations on strategy, funding, and growth planning. We help you identify opportunities, overcome challenges, and connect with the right support at the right time.'
        ],
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
        alt: 'Business consulting session with professionals',
        link: '/business-support',
        cta: 'Learn More'
      }
    },
    trade: {
      icon: <Globe2 className="w-6 h-6" />,
      color: 'teal',
      title: 'International Trade',
      description: 'Expand into new markets',
      content: {
        text: [
          'Ready to trade internationally? Get expert support to start exporting or grow your international sales. We provide practical guidance on export regulations, market research, and funding to help you succeed in global markets.'
        ],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        alt: 'International business meeting with diverse professionals',
        link: '/trade-export',
        cta: 'Explore Markets'
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

  useEffect(() => {
    if (navRef.current && activeTab) {
      const activeLink = navRef.current.querySelector(`a[href="#${activeTab}"]`)
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    }
  }, [activeTab])

  return (
    <div className="bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Business Support', href: '/business' },
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
        <div className="relative bg-[#0e1b3d] py-24 flex items-center min-h-[580px]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-business.jpg"
              alt="Business support and development opportunities in South Yorkshire"
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Business Support<br className="hidden sm:block" /> in South Yorkshire
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                Access funding, expert support, and resources to help your business thrive. Connect with Yorkshire's future workforce and shape the skills of tomorrow.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link
                  href="/funded-training"
                  aria-label="Learn about funded training opportunities for businesses"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Funded Training
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
                <Link
                  href="/business-support"
                  aria-label="Get comprehensive business support services"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Get Support
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

        {/* Mobile Navigation - Fixed at Bottom */}
        <div 
          className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg overflow-x-auto scrollbar-hide"
          ref={navRef}
        >
          <div className="w-max min-w-full px-2 sm:px-4">
            <div className="flex justify-start">
              <div className="flex space-x-2 py-2">
                {Object.entries(tabs).map(([key, tab]) => {
                  const color = tab.color as ColorType;
                  const colorClass = colorClasses[color];
                  return (
                    <a 
                      key={key}
                      href={`#${key}`} 
                      aria-label={`View ${tab.title} information`}
                      className={`group relative px-4 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
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

export default BusinessPage 