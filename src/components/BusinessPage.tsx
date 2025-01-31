'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, GraduationCap, BookOpen, LineChart, Globe2, ArrowRight } from 'lucide-react'

const colorClasses = {
  emerald: {
    button: 'border-emerald-500 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white'
  },
  blue: {
    button: 'border-blue-500 bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    link: 'bg-blue-600 hover:bg-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    gradient: 'from-blue-50 to-white'
  },
  indigo: {
    button: 'border-indigo-500 bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-700',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white'
  },
  purple: {
    button: 'border-purple-500 bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    link: 'bg-purple-600 hover:bg-purple-500',
    badge: 'bg-purple-50 text-purple-700',
    gradient: 'from-purple-50 to-white'
  },
  teal: {
    button: 'border-teal-500 bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    link: 'bg-teal-600 hover:bg-teal-500',
    badge: 'bg-teal-50 text-teal-700',
    gradient: 'from-teal-50 to-white'
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
    apprenticeship: {
      icon: <BookOpen className="w-6 h-6" />,
      color: 'blue',
      title: 'Recruitment',
      description: 'Grow your team with apprentices',
      content: {
        text: [
          'Boost your business with apprentices. We cover 95% of training costs and help you set up successful apprenticeship programmes that work for your business. Our team guides you through funding, recruitment, and training provider selection.'
        ],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        alt: 'Young apprentice learning with a mentor',
        link: '/apprenticeship-support',
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
        link: '/register-interest',
        cta: 'Get Involved'
      }
    },
    business: {
      icon: <Building2 className="w-6 h-6" />,
      color: 'purple',
      title: 'Business Growth',
      description: 'Expert advice to scale your business',
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
          <div className="absolute inset-0 bg-[#111827]/80" />
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-purple-600/30 to-blue-600/30 mix-blend-overlay" />
        
        {/* Dotted grid pattern with better contrast */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Business Hub</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Grow Your Business<br />in Yorkshire
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
              Access funding, expert support, and resources to help your business thrive. Connect with Yorkshire's future workforce and shape the skills of tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Free Support</h3>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Access expert business support and funding at no cost
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Skills Development</h3>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Build your future workforce through apprenticeships and training
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                  <Globe2 className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Growth Support</h3>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Expert guidance to help your business scale and expand
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
                {key === 'enterprise' || key === 'business' || key === 'trade' ? (
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

export default BusinessPage 