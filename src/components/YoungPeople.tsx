'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, GraduationCap, BookOpen, Briefcase, Users, ArrowRight, Rocket } from 'lucide-react'

const colorClasses = {
  indigo: {
    button: 'border-indigo-500 bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-500',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white'
  },
  violet: {
    button: 'border-violet-500 bg-violet-50',
    icon: 'bg-violet-100 text-violet-600',
    link: 'bg-violet-600 hover:bg-violet-500',
    badge: 'bg-violet-50 text-violet-700',
    gradient: 'from-violet-50 to-white'
  },
  fuchsia: {
    button: 'border-fuchsia-500 bg-fuchsia-50',
    icon: 'bg-fuchsia-100 text-fuchsia-600',
    link: 'bg-fuchsia-600 hover:bg-fuchsia-500',
    badge: 'bg-fuchsia-50 text-fuchsia-700',
    gradient: 'from-fuchsia-50 to-white'
  },
  sky: {
    button: 'border-sky-500 bg-sky-50',
    icon: 'bg-sky-100 text-sky-600',
    link: 'bg-sky-600 hover:bg-sky-500',
    badge: 'bg-sky-50 text-sky-700',
    gradient: 'from-sky-50 to-white'
  },
  rose: {
    button: 'border-rose-500 bg-rose-50',
    icon: 'bg-rose-100 text-rose-600',
    link: 'bg-rose-600 hover:bg-rose-500',
    badge: 'bg-rose-50 text-rose-700',
    gradient: 'from-rose-50 to-white'
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

const YoungPeople = () => {
  const [activeTab] = useState('university')

  const tabs: TabsType = {
    university: {
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'indigo',
      title: 'University',
      description: 'Explore Higher Education',
      content: {
        text: [
          'Discover the exciting world of university education. From choosing the right course to understanding student life, we\'ll help you make informed decisions about your future.',
          'Learn about different universities, entry requirements, and how to make your UCAS application stand out.'
        ],
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
        alt: 'Students collaborating in a university library',
        link: '/university',
        cta: 'Explore Universities'
      }
    },
    apprenticeships: {
      icon: <Briefcase className="w-6 h-6" />,
      color: 'violet',
      title: 'Apprenticeships',
      description: 'Earn While You Learn',
      content: {
        text: [
          'Get hands-on experience while gaining qualifications with an apprenticeship. We\'ll show you how to find the perfect apprenticeship opportunity and help you understand the application process.',
          'Discover different levels of apprenticeships available and which industries are looking for apprentices in Yorkshire.'
        ],
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80',
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
          'Not sure what career path to take? Our career planning tools and resources help you explore different options and find what suits you best.',
          'Take our career quiz, explore different industries, and learn about the skills needed for different jobs.'
        ],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
        alt: 'Young people in a career planning session',
        link: '/career-planning',
        cta: 'Start Planning'
      }
    },
    skills: {
      icon: <BookOpen className="w-6 h-6" />,
      color: 'sky',
      title: 'Skills & Training',
      description: 'Build Your Future',
      content: {
        text: [
          'Develop the skills that employers are looking for. From digital skills to professional qualifications, we\'ll help you identify and access the training you need.',
          'Find free courses, workshops, and training opportunities to boost your CV and employability.'
        ],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
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
          'Access free, confidential advice from our career experts. Whether you need help with applications, interviews, or making decisions about your future, we\'re here to support you.',
          'Connect with mentors, attend workshops, and get personalised guidance for your journey.'
        ],
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
        alt: 'Career advisor meeting with young person',
        link: '/support',
        cta: 'Get Support'
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/young-people.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-[#111827]/70" />
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-neutral-900/30 to-stone-900/40 mix-blend-overlay" />
        
        {/* Dotted grid pattern */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-3xl mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-fuchsia-500/20 rounded-full blur-3xl mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-indigo-400 mb-4">
              <div className="p-2 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Your Future Starts Here</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Discover Your Path<br />in Yorkshire
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
              Explore exciting opportunities for your future. Whether it's university, apprenticeships, or starting your career, we're here to help you make informed choices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/career-quiz"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 backdrop-blur-sm"
              >
                Take Career Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                Explore Options
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Free Support</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Access expert career guidance and resources at no cost
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-fuchsia-50 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-fuchsia-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Career Planning</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Discover opportunities and plan your future career path
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center">
                  <Users className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Personal Support</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get one-to-one guidance from experienced advisors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      {Object.entries(tabs).map(([key, tab], index) => (
        <div key={key} className={`relative ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          {/* Top wave divider for even sections */}
          {index % 2 === 0 && (
            <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -translate-y-[99%]">
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
          <div className="relative py-24">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute ${index % 2 === 0 ? '-right-1/4' : '-left-1/4'} -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br ${colorClasses[tab.color].gradient} opacity-20 blur-3xl`} />
              <div className={`absolute ${index % 2 === 0 ? '-left-1/4' : '-right-1/4'} -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr ${colorClasses[tab.color].gradient} opacity-20 blur-3xl`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Alternate layout based on index */}
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={tab.content.image}
                        alt={tab.content.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
                            {tab.icon}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-xl mb-1">{tab.title}</div>
                            <div className="text-gray-600">{tab.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
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
                        className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
                      >
                        {tab.content.cta}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
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
                        className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
                      >
                        {tab.content.cta}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                    <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={tab.content.image}
                        alt={tab.content.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[tab.color].icon}`}>
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
                )}
              </div>
            </div>
          </div>

          {/* Bottom wave divider for odd sections */}
          {index % 2 === 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden translate-y-[99%]">
              <svg
                viewBox="0 0 1440 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 w-full h-full text-white transform rotate-180"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default YoungPeople 