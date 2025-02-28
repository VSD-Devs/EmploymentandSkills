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
  }
} as const

type ColorType = keyof typeof colorClasses

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
    <div className="bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Educators', href: '/educators' },
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
        <div className="relative bg-[#0e1b3d] py-12 md:py-32 flex items-center min-h-[300px] md:min-h-[600px]">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12 tracking-tight">
                Shaping South Yorkshire's<br className="hidden sm:block" /> Future Workforce
              </h1>
              <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-10">
                Join us in building a skilled workforce for tomorrow. Access resources, funding, and support tailored to your role in education.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                <Link
                  href="#collegesAndProviders"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 text-sm md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Colleges & Training Providers
                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
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
                {Object.values(tabs).map((tab) => {
                  const color = tab.color;
                  const colorClass = colorClasses[color];
                  return (
                    <a 
                      key={tab.id}
                      href={`#${tab.id}`} 
                      aria-label={`View ${tab.title} information`}
                      className={`group relative px-6 py-3 flex-shrink-0 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id 
                          ? `text-gray-800 ${colorClass.button} shadow-md transform -translate-y-1` 
                          : `hover:bg-gray-50 text-gray-700 hover:transform hover:-translate-y-1`
                      } focus:outline-none focus:ring-2 focus:ring-gray-200`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`${activeTab === tab.id ? colorClass.icon : 'text-gray-500'} p-1 rounded-lg`}>
                          {tab.icon}
                        </div>
                        <span className={`text-base font-medium ${
                          activeTab === tab.id 
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

        {/* Main Content Sections with bottom padding for mobile */}
        <div className="md:block pb-24 md:pb-0">
          {/* Colleges & Training Providers Section */}
          <div id="collegesAndProviders" className="relative scroll-mt-12 overflow-hidden">
            {/* Section Background - white with subtle patterns */}
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

            <div className="relative py-12 md:py-32">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="relative h-[350px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02] group">
                    <Image
                      src={IMAGES.trainingProviders}
                      alt="Colleges and training providers delivering quality education"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/30 to-transparent mix-blend-multiply" />
                    <div className="absolute bottom-10 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-sm transform -translate-x-20 border-l-4 border-blue-300 transition-all duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Target className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-2xl mb-2">£1.7bn Investment</div>
                          <div className="text-lg text-gray-600">In skills development by 2030</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-md border-blue-300 mb-6">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <span className="text-base font-medium">For Colleges & Training Providers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Deliver Quality Training</h2>
                    <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                      Partner with us to deliver high-quality training programmes that meet employer needs and support economic growth in South Yorkshire.
                    </p>
                    <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm">
                      <div className="grid gap-6">
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <ChevronRight className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Access Funding</h3>
                            <p className="text-lg text-gray-700">Deliver funded training programmes through Skills Bank and Skills Bootcamps</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <ChevronRight className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Quality Framework</h3>
                            <p className="text-lg text-gray-700">Access support to meet our quality standards and enhance your provision</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <ChevronRight className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Employer Networks</h3>
                            <p className="text-lg text-gray-700">Connect with employers and understand their training needs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/educators/training-providers"
                      className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
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
          <div id="schools" className="relative scroll-mt-12 overflow-hidden">
            {/* Section Background - light gray with subtle patterns */}
            <div className="absolute inset-0 bg-gray-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>

            <div className="relative py-12 md:py-32">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-md border-emerald-300 mb-6">
                      <div className="p-2 rounded-full bg-emerald-100 text-emerald-600">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <span className="text-base font-medium">For Schools</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Career Education Support</h2>
                    <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                      Access resources and support to deliver outstanding careers guidance and work-related learning opportunities for your students.
                    </p>
                    <div className="space-y-8 mb-10 bg-white p-8 rounded-2xl shadow-sm">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Calendar className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-xl mb-2">Provider Access</h3>
                          <p className="text-lg text-gray-700">Support to meet Provider Access Legislation requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Network className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-xl mb-2">Employer Engagement</h3>
                          <p className="text-lg text-gray-700">Connect with local employers for work experience and insights</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Lightbulb className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-xl mb-2">Career Resources</h3>
                          <p className="text-lg text-gray-700">Teaching materials and labour market information</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/educators/schools"
                      className="inline-flex items-center px-8 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                    >
                      Learn More
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="relative h-[350px] sm:h-[520px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02] group">
                    <Image
                      src={IMAGES.schools}
                      alt="School career guidance session"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/30 to-transparent mix-blend-multiply" />
                    <div className="absolute bottom-10 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-sm transform -translate-x-20 border-l-4 border-emerald-300 transition-all duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-8 w-8 text-emerald-600" />
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
        <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-start">
              <div className="inline-flex px-2 py-2 space-x-2">
                {Object.values(tabs).map((tab) => {
                  const colorClass = colorClasses[tab.color];
                  return (
                    <a 
                      key={tab.id}
                      href={`#${tab.id}`}
                      className={`flex-shrink-0 px-3 py-2 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id 
                          ? `text-gray-800 ${colorClass.button} shadow-md transform -translate-y-1`
                          : `hover:bg-gray-50 text-gray-700`
                      }`}
                      style={{ minWidth: '7rem' }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <div className={`${activeTab === tab.id ? colorClass.icon : 'text-gray-500'} p-1 rounded-lg`}>
                          {tab.icon}
                        </div>
                        <span className={`text-xs font-medium ${activeTab === tab.id ? 'text-gray-800' : 'text-gray-900'} whitespace-nowrap`}>
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

        {/* Newsletter Section */}
        <Newsletter />
      </div>
    </div>
  )
}

export default EducatorsPage
