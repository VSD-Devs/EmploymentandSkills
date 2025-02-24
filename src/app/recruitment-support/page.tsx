'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, BookOpen, Users, ArrowRight, Building, Briefcase, ChevronRight, Clock, Trophy, Target } from 'lucide-react'

type ColorType = 'emerald' | 'blue' | 'purple';

interface RecruitmentOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: ColorType;
  link: string;
}

const recruitmentOptions: RecruitmentOption[] = [
  {
    title: 'Apprenticeships',
    description: 'Build your future workforce by nurturing local talent. Our team will support you throughout the journey, from recruitment to development.',
    icon: <GraduationCap className="w-6 h-6" />,
    benefits: [
      'Shape young careers from the start',
      'Create opportunities for local youth',
      'Build long-term team loyalty'
    ],
    color: 'emerald',
    link: '/apprenticeships'
  },
  {
    title: 'Skills Bootcamp Graduates',
    description: 'Connect with motivated individuals who have completed intensive training in your industry. Ready to make an immediate impact.',
    icon: <BookOpen className="w-6 h-6" />,
    benefits: [
      'Access diverse, local talent',
      'Support career changers',
      'Strengthen community bonds'
    ],
    color: 'blue',
    link: '/bootcamps'
  },
  {
    title: 'Graduate Schemes',
    description: 'Partner with Yorkshire universities to bring fresh perspectives and innovative thinking to your organisation.',
    icon: <Trophy className="w-6 h-6" />,
    benefits: [
      'Nurture emerging talent',
      'Build graduate pathways',
      'Drive regional growth'
    ],
    color: 'purple',
    link: '/graduates'
  },
  {
    title: 'T Levels',
    description: 'Host industry placements for learners aged 16-19, combining classroom learning with practical workplace experience.',
    icon: <Clock className="w-6 h-6" />,
    benefits: [
      'Build a talent pipeline for junior roles',
      'Develop staff mentoring skills',
      'Train young people with needed skills',
      'Free government scheme with flexible hosting'
    ],
    color: 'blue',
    link: '/t-levels'
  }
]

const successStories = [
  {
    quote: "The support we received in setting up our apprenticeship programme was invaluable. We've now hired 5 apprentices who are making a real impact.",
    author: "James Wilson",
    role: "Operations Director",
    company: "Yorkshire Tech Solutions",
    image: "/images/success-story-1.jpg"
  },
  {
    quote: "Skills bootcamp graduates brought exactly the digital skills we needed. The recruitment process was smooth and well-supported.",
    author: "Sarah Ahmed",
    role: "HR Manager",
    company: "Sheffield Digital",
    image: "/images/success-story-2.jpg"
  },
  {
    quote: "Working with the local authority helped us tap into graduate talent. Our new hires have brought fresh energy to the team.",
    author: "Michael Chen",
    role: "Talent Acquisition Lead",
    company: "Yorkshire Innovators",
    image: "/images/success-story-3.jpg"
  }
]

const colorClasses: Record<ColorType, {
  card: string;
  icon: string;
  button: string;
  tag: string;
}> = {
  emerald: {
    card: 'bg-emerald-50 border-emerald-100',
    icon: 'bg-emerald-100 text-emerald-600',
    button: 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100',
    tag: 'bg-emerald-100/50 text-emerald-700'
  },
  blue: {
    card: 'bg-blue-50 border-blue-100',
    icon: 'bg-blue-100 text-blue-600',
    button: 'text-blue-700 bg-blue-50 hover:bg-blue-100',
    tag: 'bg-blue-100/50 text-blue-700'
  },
  purple: {
    card: 'bg-purple-50 border-purple-100',
    icon: 'bg-purple-100 text-purple-600',
    button: 'text-purple-700 bg-purple-50 hover:bg-purple-100',
    tag: 'bg-purple-100/50 text-purple-700'
  }
}

export default function RecruitmentSupportPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent z-10" />
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-8 relative">
              <Image
                src="/images/recruitment-hero.jpg"
                alt="Professional recruitment and workforce development"
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
            </div>
            <div className="col-span-4 relative">
              <Image
                src="/images/recruitment-support.jpg"
                alt="Supporting local businesses"
                fill
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Recruitment Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Grow Your Team with Local Talent
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Access funding, support, and guidance to build your workforce through apprenticeships, skills bootcamps, and graduate schemes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#options"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors text-lg"
              >
                Explore Options
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-lg"
              >
                Get Support
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Options - Completely Redesigned */}
      <div id="options" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Pathways to Success</span>
              <div className="h-px w-8 bg-emerald-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Yorkshire's Future Workforce</h2>
            <p className="text-xl text-gray-600">
              Choose the recruitment pathway that best fits your organisation's needs and values
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {recruitmentOptions.map((option, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Top Image Section */}
                <div className="relative h-64 rounded-t-2xl overflow-hidden">
                  <Image
                    src={`/images/recruitment-${index + 1}.jpg`}
                    alt={option.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colorClasses[option.color].icon} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                        {React.cloneElement(option.icon as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {option.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full ${colorClasses[option.color].icon}`} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Link
                      href={option.link}
                      className={`group inline-flex w-full items-center justify-center px-6 py-3 rounded-xl bg-${option.color}-600 text-white hover:bg-${option.color}-500 transition-colors shadow-sm`}
                    >
                      <span className="mr-2">Learn More</span>
                      <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1,000+</div>
                  <div className="text-gray-600">Local People Placed</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-4">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
                  <div className="text-gray-600">Partner Businesses</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
                  <div className="text-gray-600">Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from local businesses who have grown their teams through our support
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <blockquote>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    "{story.quote}"
                  </p>
                  <footer className="mt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-12 w-12 rounded-full"
                          src={story.image}
                          alt={story.author}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">{story.author}</div>
                        <div className="text-sm text-gray-600">{story.role}</div>
                        <div className="text-sm text-emerald-600">{story.company}</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Authority Support */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Your Local Authority Support
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Each local authority in South Yorkshire offers dedicated support to help businesses with recruitment and workforce development.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Sheffield',
                    link: 'https://www.sheffield.gov.uk/business',
                  },
                  {
                    name: 'Rotherham',
                    link: 'https://www.rotherham.gov.uk/business',
                  },
                  {
                    name: 'Doncaster',
                    link: 'https://www.doncaster.gov.uk/business',
                  },
                  {
                    name: 'Barnsley',
                    link: 'https://www.barnsley.gov.uk/business',
                  }
                ].map((authority) => (
                  <Link
                    key={authority.name}
                    href={authority.link}
                    className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                        <Building className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{authority.name}</h3>
                        <p className="text-sm text-gray-600">Contact your local team</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/local-support.jpg"
                  alt="Local authority support"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact your local authority's business support team to discuss your recruitment needs and discover available funding opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl text-gray-900 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl text-lg font-medium"
          >
            Get in Touch
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
} 