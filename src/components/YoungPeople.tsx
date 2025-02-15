'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, GraduationCap, BookOpen, Briefcase, Users, ArrowRight, Rocket } from 'lucide-react'
import Newsletter from './Newsletter'
import CareerQuiz from './CareerQuiz'

const colorClasses = {
  indigo: {
    button: 'border-indigo-500 bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-500',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white',
    nav: 'hover:bg-indigo-50/80'
  },
  emerald: {
    button: 'border-emerald-500 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white',
    nav: 'hover:bg-emerald-50/80'
  },
  violet: {
    button: 'border-violet-500 bg-violet-50',
    icon: 'bg-violet-100 text-violet-600',
    link: 'bg-violet-600 hover:bg-violet-500',
    badge: 'bg-violet-50 text-violet-700',
    gradient: 'from-violet-50 to-white',
    nav: 'hover:bg-violet-50/80'
  },
  fuchsia: {
    button: 'border-fuchsia-500 bg-fuchsia-50',
    icon: 'bg-fuchsia-100 text-fuchsia-600',
    link: 'bg-fuchsia-600 hover:bg-fuchsia-500',
    badge: 'bg-fuchsia-50 text-fuchsia-700',
    gradient: 'from-fuchsia-50 to-white',
    nav: 'hover:bg-fuchsia-50/80'
  },
  sky: {
    button: 'border-sky-500 bg-sky-50',
    icon: 'bg-sky-100 text-sky-600',
    link: 'bg-sky-600 hover:bg-sky-500',
    badge: 'bg-sky-50 text-sky-700',
    gradient: 'from-sky-50 to-white',
    nav: 'hover:bg-sky-50/80'
  },
  rose: {
    button: 'border-rose-500 bg-rose-50',
    icon: 'bg-rose-100 text-rose-600',
    link: 'bg-rose-600 hover:bg-rose-500',
    badge: 'bg-rose-50 text-rose-700',
    gradient: 'from-rose-50 to-white',
    nav: 'hover:bg-rose-50/80'
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
  university: {
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'indigo',
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
  tlevels: {
    icon: <BookOpen className="w-6 h-6" />,
    color: 'emerald',
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
    color: 'violet',
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
  careers: {
    icon: <Rocket className="w-6 h-6" />,
    color: 'fuchsia',
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
  support: {
    icon: <Users className="w-6 h-6" />,
    color: 'rose',
    title: 'Support Services',
    description: 'Get Expert Help',
    content: {
      text: [
        "Access free, confidential advice from our career experts. Whether you need help with applications, interviews, or making decisions about your future, we're here to support you.",
        "Connect with mentors, attend workshops, and get personalised guidance for your journey."
      ],
      image: '/images/support-hub.jpg',
      alt: 'Career advisor meeting with young person',
      link: '/support',
      cta: 'Get Support'
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
  const [activeTab, setActiveTab] = useState<string>('university')
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
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-indigo-300 mb-4">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Your Future Starts Here</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Career Support<br className="hidden sm:block" /> in South Yorkshire
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Explore exciting opportunities for your future. Whether it's university, apprenticeships, or starting your career, we're here to help you make informed choices.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsQuizOpen(true)}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors"
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

      {/* Enhanced Mobile Navigation */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center">
            <div className="flex space-x-1 py-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key)
                    document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`group relative px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 rounded-xl snap-start ${
                    activeTab === key 
                      ? `${colorClasses[tab.color].button} shadow-md` 
                      : colorClasses[tab.color].nav
                  }`}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className={`h-6 w-6 ${
                      activeTab === key 
                        ? `text-${tab.color}-600` 
                        : 'text-gray-600 group-hover:text-${tab.color}-600'
                    }`}>
                      {tab.icon}
                    </div>
                    <span className={`text-sm sm:text-base font-medium whitespace-nowrap ${
                      activeTab === key 
                        ? `text-${tab.color}-600` 
                        : 'text-gray-900 group-hover:text-${tab.color}-600'
                    }`}>
                      {tab.title}
                    </span>
                    <div className={`h-0.5 ${
                      activeTab === key 
                        ? `w-full bg-${tab.color}-600` 
                        : `w-0 bg-${tab.color}-600 group-hover:w-full`
                    } transition-all duration-200`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections with Enhanced Mobile Scroll Snap */}
      <div className="md:block">
        {Object.entries(tabs).map(([key, tab], index) => (
          <div 
            key={key} 
            id={key} 
            className={`relative scroll-mt-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} snap-start`}
          >
            {/* Top wave divider for even sections */}
            {index % 2 === 0 && (
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
            )}
            
            {/* Section Content */}
            <div className="relative py-8 sm:py-24">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute ${index % 2 === 0 ? '-right-1/4' : '-left-1/4'} -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br ${colorClasses[tab.color].gradient} opacity-20 blur-3xl`} />
                <div className={`absolute ${index % 2 === 0 ? '-left-1/4' : '-right-1/4'} -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr ${colorClasses[tab.color].gradient} opacity-20 blur-3xl`} />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
                  {/* Alternate layout based on index */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Mobile: Stack content on top of smaller image */}
                      <div className="md:hidden">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colorClasses[tab.color].button} mb-4`}>
                          {tab.icon}
                          <span className="text-xs font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{tab.description}</h2>
                        <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg mb-4">
                          <Image
                            src={imageLoadError[key] ? '/images/fallback.jpg' : tab.content.image}
                            alt={tab.content.alt}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(key)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </div>
                        <div className="prose prose-sm max-w-none mb-6">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          className={`inline-flex items-center px-4 py-2.5 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl text-sm`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>

                      {/* Desktop: Original layout */}
                      <div className="hidden md:block relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={imageLoadError[key] ? '/images/fallback.jpg' : tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(key)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 right-4 sm:-right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                              {tab.icon}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-xl mb-1">{tab.title}</div>
                              <div className="text-base text-gray-600">{tab.description}</div>
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
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl text-base`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Mobile: Stack content on top of smaller image */}
                      <div className="md:hidden">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colorClasses[tab.color].button} mb-4`}>
                          {tab.icon}
                          <span className="text-xs font-medium">{tab.title}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{tab.description}</h2>
                        <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg mb-4">
                          <Image
                            src={imageLoadError[key] ? '/images/fallback.jpg' : tab.content.image}
                            alt={tab.content.alt}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(key)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </div>
                        <div className="prose prose-sm max-w-none mb-6">
                          {tab.content.text.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <Link
                          href={tab.content.link}
                          className={`inline-flex items-center px-4 py-2.5 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl text-sm`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>

                      {/* Desktop: Original layout */}
                      <div className="hidden md:block md:order-1">
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
                          className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl text-base`}
                        >
                          {tab.content.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                      <div className="hidden md:block relative h-[460px] rounded-2xl overflow-hidden shadow-2xl md:order-2">
                        <Image
                          src={imageLoadError[key] ? '/images/fallback.jpg' : tab.content.image}
                          alt={tab.content.alt}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(key)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 right-4 sm:-right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                              {tab.icon}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-xl mb-1">{tab.title}</div>
                              <div className="text-base text-gray-600">{tab.description}</div>
                            </div>
                          </div>
                        </div>
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
    </div>
  )
}

// Add this to your global CSS or a new styles module
const _styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 768px) {
    html {
      scroll-snap-type: y mandatory;
    }
  }
`

export default YoungPeople 