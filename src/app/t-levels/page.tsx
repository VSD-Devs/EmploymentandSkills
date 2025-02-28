'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Building2, ChevronRight, CheckCircle, ArrowRight, Briefcase, GraduationCap, CalendarDays, ExternalLink, Lightbulb, Target, BookOpen } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

const keyFeatures = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: '315 Hours',
    description: 'Minimum placement duration with flexible scheduling options'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Ages 16-19',
    description: 'Support young learners transitioning into the workplace'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Free Scheme',
    description: 'Government-backed programme at no direct cost'
  }
]

// T-Level providers in South Yorkshire
const providers = [
  {
    name: "Sheffield College",
    image: "/images/providers/sheffield-college.jpg",
    website: "https://www.sheffcol.ac.uk/t-levels",
    courses: ["Digital Production", "Education & Childcare", "Health & Science"],
    location: "Sheffield",
    description: "Sheffield College offers a range of T Level qualifications in modern facilities with industry partnerships."
  },
  {
    name: "Barnsley College",
    image: "/images/providers/barnsley-college.jpg",
    website: "https://www.barnsley.ac.uk/t-levels",
    courses: ["Construction", "Digital", "Education & Childcare", "Health & Science"],
    location: "Barnsley",
    description: "Barnsley College provides T Level courses with state-of-the-art learning environments and strong employer connections."
  },
  {
    name: "Rotherham College",
    image: "/images/providers/rotherham-college.jpg",
    website: "https://www.rotherham.ac.uk/t-levels",
    courses: ["Digital Business Services", "Health", "Education & Childcare"],
    location: "Rotherham",
    description: "Rotherham College delivers T Level qualifications designed to meet the needs of local employers."
  },
  {
    name: "Doncaster College",
    image: "/images/providers/doncaster-college.jpg",
    website: "https://www.don.ac.uk/t-levels",
    courses: ["Design & Development", "Education & Childcare", "Health"],
    location: "Doncaster",
    description: "Doncaster College offers T Level courses with excellent industry placement opportunities."
  },
  {
    name: "UTC Sheffield Olympic Legacy Park",
    image: "/images/providers/utc-sheffield.jpg",
    website: "https://www.utcsheffield.org.uk/t-levels",
    courses: ["Health & Science", "Digital"],
    location: "Sheffield",
    description: "UTC Sheffield specialises in technical education with cutting-edge facilities for T Level delivery."
  },
  {
    name: "Dearne Valley College",
    image: "/images/providers/dearne-valley-college.jpg",
    website: "https://www.dearne-coll.ac.uk/t-levels",
    courses: ["Digital Support Services", "Education & Childcare"],
    location: "Rotherham",
    description: "Dearne Valley College provides T Level qualifications with excellent employer connections."
  }
];

export default function TLevelsPage() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      
      const sections = ['overview', 'benefits', 'eligibility', 'process', 'providers']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const offset = window.pageYOffset + top
          
          if (scrollPosition >= offset && scrollPosition < offset + element.offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Lightbulb className="h-4 w-4" /> },
    { id: 'eligibility', label: 'Eligibility', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'process', label: 'Process', icon: <CalendarDays className="h-4 w-4" /> },
    { id: 'providers', label: 'Providers', icon: <Building2 className="h-4 w-4" /> }
  ]

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Recruitment Support', href: '/recruitment-support' },
        { label: 'T Levels', href: '/t-levels' },
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-4">
                <Briefcase className="h-4 w-4 text-emerald-800 mr-2" />
                <span className="text-sm font-medium text-emerald-800">Industry Placements</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                T Levels: <span className="text-emerald-600">Building Tomorrow's Workforce</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                Support young people aged 16-19 to gain valuable workplace experience while developing skills tailored to your industry needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-emerald-600/20 inline-flex items-center justify-center">
                  Express Interest
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#overview" className="bg-white text-emerald-700 border border-emerald-200 px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Key Features - Right side */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
                {/* Large T-Level Image */}
                <div className="rounded-xl overflow-hidden mb-4 relative h-52">
                  <Image 
                    src="/images/t-levels-hero.jpg"
                    alt="T Levels industry placements"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                          {React.cloneElement(feature.icon, { className: 'w-5 h-5 text-emerald-600' })}
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1 text-sm">{feature.title}</h3>
                        <p className="text-xs text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-6 py-4">
              <a 
                href="#overview" 
                className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-slate-800 font-medium transition-colors"
              >
                Overview
              </a>
              <a 
                href="#benefits" 
                className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-slate-800 font-medium transition-colors"
              >
                Benefits
              </a>
              <a 
                href="#eligibility" 
                className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-slate-800 font-medium transition-colors"
              >
                Eligibility
              </a>
              <a 
                href="#process" 
                className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-slate-800 font-medium transition-colors"
              >
                Process
              </a>
              <a 
                href="#providers" 
                className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-slate-800 font-medium transition-colors"
              >
                Providers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* T-Level Overview Section */}
      <div id="overview" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <GraduationCap className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">What Are T-Levels?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A New Qualification Designed With Employers
            </h2>
            <p className="text-lg text-slate-600">
              Technical education courses for 16 to 19-year-olds that combine classroom learning with substantial workplace experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  T Levels are 2-year technical education courses for 16 to 19-year-olds that follow GCSEs. They've been developed in collaboration with employers to ensure young people gain the knowledge and skills industry needs.
                </p>
                <p>
                  Equivalent to 3 A Levels, T Levels combine classroom theory, practical learning, and a substantial industry placement of at least 315 hours (approximately 45 days) with an employer.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Key Components:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Technical knowledge and skills specific to the chosen industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Industry placement with an employer (315+ hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Relevant English, maths, and digital skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Common workplace skills to develop employment capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              <div className="relative rounded-xl overflow-hidden h-64 mb-6">
                <Image 
                  src="/images/t-level-overview.jpg" 
                  alt="T Level students working on technical projects"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Available Courses Include:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Digital Production",
                  "Education & Childcare",
                  "Health",
                  "Science",
                  "Construction",
                  "Engineering",
                  "Business Services",
                  "Finance"
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-700">{course}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-500">
                *Course availability varies by provider
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div id="eligibility" className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Users className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Eligibility Requirements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who Can Host T-Level Students?
            </h2>
            <p className="text-lg text-slate-600">
              All types of employers can host T-Level industry placements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Employer Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Any size business - from SMEs to large corporations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Ability to provide real work activities and supervision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Appropriate health and safety policies in place</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Commitment to providing learning opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Time Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Minimum 315 hours (approx. 45 days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Flexible scheduling options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Block placements or day release models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Placements tailored to suit your business needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Student Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">16-19 year olds studying a relevant T Level</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Technical knowledge from classroom study</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Prepared by their education provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Continuing support from their college/school</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Benefits Grid */}
      <div id="benefits" className="relative py-24 scroll-mt-20">
        <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 py-24 rounded-3xl border border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
                <Lightbulb className="h-4 w-4 text-emerald-800" />
                <span className="text-xs font-medium text-emerald-900">Benefits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Businesses <span className="text-emerald-600">Love</span> T Levels
              </h2>
              <p className="text-lg text-slate-600">
                Discover how hosting students creates value beyond traditional recruitment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Future Talent Pipeline',
                  description: 'Early access to motivated young talent and potential future employees',
                  icon: <Users className="w-8 h-8" />,
                  gradient: 'from-purple-100 to-purple-50',
                  benefits: [
                    'Early access to new talent',
                    'Students trained to your standards',
                    'Test-drive potential new hires',
                    'Reduce recruitment costs'
                  ]
                },
                { 
                  title: 'Fresh Perspectives',
                  description: 'Gain new ideas and digital-native thinking in your workplace',
                  icon: <Lightbulb className="w-8 h-8" />,
                  gradient: 'from-emerald-100 to-emerald-50',
                  benefits: [
                    'New ideas and fresh thinking',
                    'Digital native knowledge',
                    'Innovation opportunities',
                    'Challenge existing processes'
                  ]
                },
                { 
                  title: 'Community Impact',
                  description: 'Strengthen your brand and invest in local skills development',
                  icon: <Building2 className="w-8 h-8" />,
                  gradient: 'from-amber-100 to-amber-50',
                  benefits: [
                    'Enhance CSR credentials',
                    'Support local education',
                    'Build community partnerships',
                    'Strengthen employer brand'
                  ]
                }
              ].map((benefit, index) => (
                <div key={index} className={`bg-gradient-to-br ${benefit.gradient} p-1 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300`}>
                  <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 shadow-sm mb-6 flex items-center justify-center">
                      {React.cloneElement(benefit.icon, { className: 'w-7 h-7 text-emerald-600' })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 mb-6">{benefit.description}</p>
                    <ul className="space-y-3 text-slate-600 mt-auto">
                      {benefit.benefits.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA after benefits */}
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium shadow-lg hover:shadow-emerald-600/20"
              >
                Express Interest
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Process Section */}
      <div className="relative py-16 md:py-24 bg-white scroll-mt-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <CalendarDays className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple 4-Step <span className="text-emerald-600">Process</span>
            </h2>
            <p className="text-lg text-slate-600">
              From initial contact to successful placement, we make it easy for businesses to host T-Level students
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Initial Consultation',
                description: 'We discuss your business needs and how T-Level students can contribute to your organization.',
                icon: <Users className="h-8 w-8 text-emerald-600" />,
                step: '01'
              },
              { 
                title: 'Student Matching',
                description: 'We work with education providers to find students whose skills align with your requirements.',
                icon: <Target className="h-8 w-8 text-emerald-600" />,
                step: '02'
              },
              { 
                title: 'Placement Planning',
                description: "Together we'll create a structured plan for the industry placement, including objectives and schedule.",
                icon: <CalendarDays className="h-8 w-8 text-emerald-600" />,
                step: '03'
              },
              { 
                title: 'Ongoing Support',
                description: 'Throughout the placement, both you and the student will receive dedicated support.',
                icon: <Briefcase className="h-8 w-8 text-emerald-600" />,
                step: '04'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6">
                <div className="flex items-center mb-4 gap-3">
                  <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 text-lg font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                  {React.cloneElement(step.icon, { className: 'h-6 w-6 text-emerald-600' })}
                </div>
              </div>
            ))}
          </div>

          {/* Add CTA after timeline */}
          <div className="mt-16 p-8 text-center bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start the Process?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team will guide you through every step of hosting T-Level students
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium shadow-lg hover:shadow-emerald-600/20"
            >
              Express Interest
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-16 md:py-24 bg-slate-50 scroll-mt-20" id="success-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Users className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Real <span className="text-emerald-600">Success</span> Stories
            </h2>
            <p className="text-lg text-slate-600">
              Hear from businesses who transformed their teams with T-Level students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "TechStart Ltd",
                role: "Software Development",
                quote: "Our T Level students brought fresh ideas that helped streamline our development process. We've already offered permanent positions to two students after their placements finished.",
                image: "/images/tech-testimonial.jpg"
              },
              {
                name: "GreenBuild Co",
                role: "Sustainable Construction",
                quote: "The students' enthusiasm and up-to-date knowledge revitalized our project teams. Their technical skills were impressive and they integrated perfectly with our existing staff.",
                image: "/images/construction-testimonial.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <blockquote className="italic text-slate-800 mb-6 flex-1 text-lg">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-200">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-emerald-700">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* T-Level Providers Section */}
      <div id="providers" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Building2 className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Find a Provider</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              T-Level Providers in South Yorkshire
            </h2>
            <p className="text-lg text-slate-600">
              Connect with these approved providers offering T-Level programmes across the region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {providers.map((provider, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200 h-full flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={provider.image} 
                    alt={`${provider.name} campus`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {provider.location}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{provider.name}</h3>
                  <p className="text-slate-600 mb-4 flex-grow">{provider.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">T-Levels Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.courses.map((course, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={provider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 mt-auto"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to host T-Level students?
                </h2>
                <p className="mt-4 text-lg text-emerald-100 max-w-3xl">
                  Join the growing number of South Yorkshire businesses benefiting from fresh talent and new perspectives while supporting the next generation.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
                  >
                    Get in touch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-start">
            <div className="inline-flex px-2 py-2 space-x-2">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex-shrink-0 px-3 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-emerald-800 bg-emerald-50 border border-emerald-100 shadow-md transform -translate-y-1'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                  style={{ minWidth: '4.5rem' }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className={`${activeSection === item.id ? 'text-emerald-600' : 'text-slate-500'} p-1 rounded-lg`}>
                      {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                    </div>
                    <span className={`text-xs font-medium ${activeSection === item.id ? 'text-emerald-800' : 'text-slate-900'} whitespace-nowrap`}>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 