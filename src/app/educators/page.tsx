'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  ArrowRight,
  Target,
  Briefcase,
  FileText,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Network
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
  }
} as const

const EducatorsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Define tabs configuration
  const tabs = {
    collegesAndProviders: {
      id: 'collegesAndProviders',
      title: 'Colleges & Training Providers',
      description: 'Deliver Skills Training and Career Education',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'blue' as const
    },
    schools: {
      id: 'schools',
      title: 'Schools',
      description: 'Career Education',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'emerald' as const
    }
  }

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
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Education and training facilities in South Yorkshire"
            fill
            className="object-cover object-center brightness-[0.7] saturate-[0.85]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-blue-300 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Education Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Shaping South Yorkshire's<br className="hidden sm:block" /> Future Workforce
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Join us in building a skilled workforce for tomorrow. Access resources, funding, and support tailored to your role in education.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="#collegesAndProviders"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Colleges & Training Providers
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#schools"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Schools
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
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

      {/* Colleges & Training Providers Section */}
      <div id="collegesAndProviders" className="relative bg-gray-50">
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
                src={IMAGES.trainingProviders}
                alt="Colleges and training providers delivering quality education"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-8 -right-12 bg-white rounded-xl p-4 sm:p-6 shadow-xl max-w-[280px] sm:max-w-sm transform -translate-x-8 sm:-translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg sm:text-xl mb-0.5 sm:mb-1">£1.7bn Investment</div>
                    <div className="text-sm sm:text-base text-gray-600">In skills development by 2030</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-3 sm:mb-4">
                <span className="text-sm font-medium tracking-wide uppercase">For Colleges & Training Providers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Deliver Quality Training</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Partner with us to deliver high-quality training programmes that meet employer needs and support economic growth in South Yorkshire.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Access Funding</h3>
                      <p className="text-gray-600">Deliver funded training programmes through Skills Bank and Skills Bootcamps</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Quality Framework</h3>
                      <p className="text-gray-600">Access support to meet our quality standards and enhance your provision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Employer Networks</h3>
                      <p className="text-gray-600">Connect with employers and understand their training needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/educators/training-providers"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors text-base sm:text-lg shadow-sm"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schools Section */}
      <div id="schools" className="relative bg-white">
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
                <span className="text-sm font-medium tracking-wide uppercase">For Schools</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Career Education Support</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Access resources and support to deliver outstanding careers guidance and work-related learning opportunities for your students.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Provider Access</h3>
                    <p className="text-gray-600">Support to meet Provider Access Legislation requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Network className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Employer Engagement</h3>
                    <p className="text-gray-600">Connect with local employers for work experience and insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Career Resources</h3>
                    <p className="text-gray-600">Teaching materials and labour market information</p>
                  </div>
                </div>
              </div>
              <Link
                href="/educators/schools"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors text-base sm:text-lg shadow-sm"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[300px] sm:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.schools}
                alt="School career guidance session"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">100+ Schools</div>
                    <div className="text-gray-600">Supported across South Yorkshire</div>
                  </div>
                </div>
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

export default EducatorsPage
