'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, Lightbulb, ClipboardList, Rocket, LineChart, Calendar, Users, BookOpen, MapPin } from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import Breadcrumbs from '@/components/Breadcrumbs'

const stages = [
  {
    id: 'idea',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Idea Stage',
    description: 'Validate your concept and understand your market',
    resources: [
      { title: 'Market Research Tools', link: '#market-research' },
      { title: 'Business Model Canvas', link: '#business-model' },
      { title: 'Idea Validation Guide', link: '#validation' }
    ]
  },
  {
    id: 'planning',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Planning Stage',
    description: 'Structure your business and create your roadmap',
    resources: [
      { title: 'Business Plan Templates', link: '#business-plan' },
      { title: 'Legal Structure Guide', link: '#legal' },
      { title: 'Financial Planning Tools', link: '#finance' }
    ]
  },
  {
    id: 'launch',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Launch Stage',
    description: 'Access funding and prepare for take-off',
    resources: [
      { title: 'Funding Directory', link: '#funding' },
      { title: 'Compliance Checklist', link: '#compliance' },
      { title: 'Launch Strategy Guide', link: '#launch' }
    ]
  },
  {
    id: 'growth',
    icon: <LineChart className="w-6 h-6" />,
    title: 'Growth Stage',
    description: 'Scale your business and expand your reach',
    resources: [
      { title: 'Scaling Strategies', link: '#scaling' },
      { title: 'Talent Acquisition', link: '#talent' },
      { title: 'Market Expansion', link: '#expansion' }
    ]
  }
]

const programmes = [
  {
    title: 'South Yorkshire Innovation Programme',
    description: 'Access academic expertise and innovation support to grow your business',
    icon: <BookOpen className="w-6 h-6" />,
    link: '#syip',
    features: [
      'Academic consultancy',
      'Innovation audits',
      'University facilities access',
      'Research collaboration'
    ],
    id: 'syip'
  },
  {
    title: 'Launchpad',
    description: 'Fully funded support for new and early-stage businesses',
    icon: <Rocket className="w-6 h-6" />,
    link: '#launchpad',
    features: [
      'One-to-one mentoring',
      'Workshops and events',
      'Peer networking',
      'Business planning support'
    ],
    id: 'launchpad'
  }
]

const events = [
  {
    title: 'Start-up Networking Breakfast',
    date: '15 May 2024',
    type: 'Networking',
    location: 'Sheffield',
    image: '/images/startup-networking-breakfast.jpg'
  },
  {
    title: 'Business Planning Workshop',
    date: '22 May 2024',
    type: 'Workshop',
    location: 'Barnsley',
    image: '/images/business-planning-workshop.jpg'
  },
  {
    title: 'Funding Your Start-up',
    date: '29 May 2024',
    type: 'Seminar',
    location: 'Doncaster',
    image: '/images/funding-your-startup.jpg'
  }
]

const StartupSupportPage = () => {
  const [activeStage, setActiveStage] = useState('idea')

  return (
    <div className="bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Startup Support', href: '/startup-support' },
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-32 flex items-center min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/sy-business-hub.jpg"
            alt="South Yorkshire business hub with local entrepreneurs"
            fill
            className="object-cover brightness-50"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-indigo-300 mb-6">
              <div className="p-2 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Empowering South Yorkshire Start-Ups
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
              Your Gateway to Business Success in South Yorkshire
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/SYIP.jpg"
                alt="Local entrepreneurs collaborating in Sheffield"
                className="rounded-xl shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                South Yorkshire Business Community
              </h2>
              <p className="text-xl text-gray-600">
                Join 1,200+ local start-ups benefiting from our regional support programmes. 
                Proudly supported by South Yorkshire Mayoral Combined Authority.
              </p>
              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <Image
                  src="/sy-mca-logo.svg"
                  alt="South Yorkshire MCA logo"
                  width={160}
                  height={60}
                />
                <Image
                  src="/sheffield-city-council-logo.svg"
                  alt="Sheffield City Council logo"
                  width={160}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start-up Journey Navigator */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Your Start-up Journey</h2>
            <p className="mt-4 text-xl text-gray-600">Select your current stage to access tailored resources and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  activeStage === stage.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  activeStage === stage.id
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {stage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stage.title}</h3>
                <p className="text-gray-600 mb-4 text-lg">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.resources.map((resource) => (
                    <li key={resource.link}>
                      <Link
                        href={resource.link}
                        className="text-indigo-600 hover:text-indigo-500 text-base"
                      >
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Support Programmes */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Featured Support Programmes</h2>
            <p className="mt-4 text-xl text-gray-600">Access comprehensive support tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programmes.map((programme) => (
              <div key={programme.link} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={programme.id === 'syip' ? "/images/business-hub.jpg" : "/images/startup-workshop.jpg"}
                    alt={programme.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 -mt-12 relative">
                    {programme.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{programme.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{programme.description}</p>
                  <ul className="space-y-3 mb-6">
                    {programme.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={programme.link}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Calendar */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="mt-4 text-xl text-gray-600">Join our workshops and networking events</p>
          </div>

          <div className="grid gap-6">
            {events.map((event) => (
              <div key={event.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-6">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg object-cover"
                    fill
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <div className="mt-2 flex items-center gap-3 text-gray-500">
                    <MapPin className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-indigo-600 font-medium text-lg">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="#events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Contact and Support */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Get Support</h2>
            <p className="mt-4 text-xl text-gray-600">Connect with our team and community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book an Advisory Session</h3>
              <p className="text-gray-600 text-lg mb-6">
                Schedule a one-to-one session with our business advisors to discuss your start-up journey
              </p>
              <Link
                href="#book"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Book a Session
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h3>
              <p className="text-gray-600 text-lg mb-6">
                Connect with fellow entrepreneurs, share experiences, and access exclusive resources
              </p>
              <Link
                href="#community"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="relative bg-gray-900 py-20">
        <Image
          src="/images/SYIP.jpg"
          alt="South Yorkshire business community event"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Local Network
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with 850+ South Yorkshire start-ups and access exclusive local partnerships
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="#join"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Users className="w-6 h-6 mr-2" />
              Become a Member
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default StartupSupportPage 