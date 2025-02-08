'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, GraduationCap, BookOpen, LineChart, Globe2, ArrowRight } from 'lucide-react'
import Newsletter from './Newsletter'

const colorClasses = {
  emerald: {
    button: 'border-emerald-500 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white',
    nav: 'hover:bg-emerald-50/80'
  },
  blue: {
    button: 'border-blue-500 bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    link: 'bg-blue-600 hover:bg-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    gradient: 'from-blue-50 to-white',
    nav: 'hover:bg-blue-50/80'
  },
  indigo: {
    button: 'border-indigo-500 bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-700',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white',
    nav: 'hover:bg-indigo-50/80'
  },
  purple: {
    button: 'border-purple-500 bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    link: 'bg-purple-600 hover:bg-purple-500',
    badge: 'bg-purple-50 text-purple-700',
    gradient: 'from-purple-50 to-white',
    nav: 'hover:bg-purple-50/80'
  },
  teal: {
    button: 'border-teal-500 bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    link: 'bg-teal-600 hover:bg-teal-500',
    badge: 'bg-teal-50 text-teal-700',
    gradient: 'from-teal-50 to-white',
    nav: 'hover:bg-teal-50/80'
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
  const [activeTab, setActiveTab] = useState('skills')

  const tabs: TabsType = {
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
        cta: 'Book Consultation'
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
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Dotted grid pattern with better contrast */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-soft-light"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            {/* Soft-edged square background */}
            <div className="absolute -left-4 right-[30%] -inset-y-6 sm:-left-8 sm:right-[40%] sm:-inset-y-8 bg-black/60 backdrop-blur-sm rounded-[2rem] sm:rounded-[3rem]" />
            
            <div className="relative px-4 sm:px-8 py-6 sm:py-8">
              <div className="flex items-center gap-2 text-emerald-400 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Business Hub</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-sm">
                Business Support<br />in South Yorkshire
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
                Access funding, expert support, and resources to help your business thrive. Connect with Yorkshire's future workforce and shape the skills of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Navigation Banner */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center min-w-max">
            <div className="flex space-x-1 py-1">
              {Object.entries(tabs).map(([key, tab]) => (
                <a 
                  key={key}
                  href={`#${key}`} 
                  className={`group relative px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 rounded-xl ${colorClasses[tab.color].nav}`}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className={`h-6 w-6 text-gray-600 group-hover:text-${tab.color}-600 group-hover:scale-105`}>
                      {tab.icon}
                    </div>
                    <span className={`text-sm sm:text-base font-medium text-gray-900 group-hover:text-${tab.color}-600 whitespace-nowrap`}>
                      {tab.title}
                    </span>
                    <div className={`h-0.5 w-0 bg-${tab.color}-600 group-hover:w-full transition-all duration-50`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      {Object.entries(tabs).map(([key, tab], index) => (
        <div key={key} id={key} className={`relative ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
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
                {/* Mobile: Stack content on top of image */}
                <div className="md:hidden">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[tab.color].button} mb-6`}>
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.title}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{tab.description}</h2>
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mb-6">
                    <Image
                      src={tab.content.image}
                      alt={tab.content.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  </div>
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

                {/* Desktop: Alternating layout */}
                {index % 2 === 0 ? (
                  <>
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
                        className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
                      >
                        {tab.content.cta}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                    <div className="hidden md:block relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
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
                ) : (
                  <>
                    <div className="hidden md:block relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
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
                        className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[tab.color].link} shadow-lg hover:shadow-xl`}
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

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default BusinessPage 