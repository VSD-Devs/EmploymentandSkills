'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  GraduationCap,
  Users,
  FileText,
  Target,
  Briefcase,
  Lightbulb,
  Calendar,
  Network,
  ArrowRight,
  Building2
} from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import Breadcrumbs from '@/components/Breadcrumbs'

const IMAGES = {
  trainingProviders: "/images/training-provider.jpg",
  schools: "/images/schools.jpg",
  strategy: "/images/skills-strategy.jpg",
  hero: "/images/educator-hero.jpg"
}

const colorClasses = {
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
  }
} as const

const EducatorsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Define tabs configuration
  const tabs = useMemo(() => ({
    collegesAndProviders: {
      id: 'collegesAndProviders',
      title: 'Colleges & Training Providers',
      description: 'Deliver Skills Training and Career Education',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'blue' as const
    },
    schools: {
      id: 'schools',
      title: 'Schools',
      description: 'Career Education',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'emerald' as const
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
        { label: 'Educators', href: '/educators' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#0e1b3d] py-32 flex items-center min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Education and training facilities in South Yorkshire"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
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
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Shaping South Yorkshire's<br className="hidden sm:block" /> Future Workforce
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
              Join us in building a skilled workforce for tomorrow. Access resources, funding, and support tailored to your role in education.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="#collegesAndProviders"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Colleges & Training Providers
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="#schools"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Schools
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
              {Object.values(tabs).map((tab) => (
                <a 
                  key={tab.id}
                  href={`#${tab.id}`} 
                  aria-label={`View ${tab.title} information`}
                  className={`group relative px-6 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id 
                      ? `${colorClasses[tab.color].button} text-${tab.color}-700 shadow-md transform -translate-y-1` 
                      : `${colorClasses[tab.color].nav} text-gray-700 hover:transform hover:-translate-y-1`
                  } focus:outline-none focus:ring-2 focus:ring-${tab.color}-400`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className={`text-base font-medium ${
                    activeTab === tab.id 
                      ? `text-${tab.color}-700` 
                      : 'text-gray-900 group-hover:text-${tab.color}-700'
                  } whitespace-nowrap transition-colors`}>
                    {tab.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections with bottom padding for mobile */}
      <div className="md:block pb-20 md:pb-0"> {/* Add padding bottom for mobile nav */}
        {/* Colleges & Training Providers Section */}
        <div id="collegesAndProviders" className="relative bg-gray-50 scroll-mt-20">
          <div className="relative py-32">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-50 to-white opacity-30 blur-3xl" />
              <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-blue-50 to-white opacity-30 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
              <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="relative h-[350px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                  <Image
                    src={IMAGES.trainingProviders}
                    alt="Colleges and training providers delivering quality education"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-10 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-8 w-8 text-blue-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-2xl mb-2">£1.7bn Investment</div>
                        <div className="text-lg text-gray-600">In skills development by 2030</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border-blue-600 bg-blue-50/90 mb-8">
                    <Briefcase className="w-8 h-8 text-blue-700" />
                    <span className="text-base font-medium">For Colleges & Training Providers</span>
                  </div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">Deliver Quality Training</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Partner with us to deliver high-quality training programmes that meet employer needs and support economic growth in South Yorkshire.
                  </p>
                  <div className="bg-white rounded-2xl p-8 mb-10 shadow-md">
                    <div className="grid gap-6">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <ChevronRight className="h-6 w-6 text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-xl mb-2">Access Funding</h3>
                          <p className="text-lg text-gray-600">Deliver funded training programmes through Skills Bank and Skills Bootcamps</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <ChevronRight className="h-6 w-6 text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-xl mb-2">Quality Framework</h3>
                          <p className="text-lg text-gray-600">Access support to meet our quality standards and enhance your provision</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <ChevronRight className="h-6 w-6 text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-xl mb-2">Employer Networks</h3>
                          <p className="text-lg text-gray-600">Connect with employers and understand their training needs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/educators/training-providers"
                    className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-700 text-white font-medium hover:bg-blue-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    Learn More
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schools Section */}
        <div id="schools" className="relative bg-white scroll-mt-20">
          <div className="relative py-32">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-emerald-50 to-white opacity-30 blur-3xl" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-emerald-50 to-white opacity-30 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
              <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border-emerald-600 bg-emerald-50/90 mb-8">
                    <GraduationCap className="w-8 h-8 text-emerald-700" />
                    <span className="text-base font-medium">For Schools</span>
                  </div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">Career Education Support</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Access resources and support to deliver outstanding careers guidance and work-related learning opportunities for your students.
                  </p>
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Calendar className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Provider Access</h3>
                        <p className="text-lg text-gray-600">Support to meet Provider Access Legislation requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Network className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Employer Engagement</h3>
                        <p className="text-lg text-gray-600">Connect with local employers for work experience and insights</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Lightbulb className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Career Resources</h3>
                        <p className="text-lg text-gray-600">Teaching materials and labour market information</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/educators/schools"
                    className="inline-flex items-center px-8 py-4 rounded-xl bg-emerald-700 text-white font-medium hover:bg-emerald-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                  >
                    Learn More
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </div>
                <div className="relative h-[350px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                  <Image
                    src={IMAGES.schools}
                    alt="School career guidance session"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-10 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-2xl mb-2">100+ Schools</div>
                        <div className="text-lg text-gray-600">Supported across South Yorkshire</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Fixed at Bottom */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-4 py-4">
              {Object.values(tabs).map((tab) => {
                return (
                  <a 
                    key={tab.id}
                    href={`#${tab.id}`} 
                    aria-label={`View ${tab.title} information`}
                    className={`group relative px-5 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id 
                        ? `${colorClasses[tab.color].button} text-${tab.color}-700 shadow-md transform -translate-y-1` 
                        : `${colorClasses[tab.color].nav} text-gray-700`
                    } focus:outline-none focus:ring-2 focus:ring-${tab.color}-400`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className={`text-sm font-medium ${
                      activeTab === tab.id 
                        ? `text-${tab.color}-700` 
                        : 'text-gray-900 group-hover:text-${tab.color}-700'
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

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default EducatorsPage
