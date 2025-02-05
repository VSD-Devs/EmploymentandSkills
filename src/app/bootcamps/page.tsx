'use client'
import React, { useState } from 'react'
import { MapPin, BookOpen, Users2, Building2, GraduationCap, Briefcase, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const bootcampTypes = [
    {
      title: 'Digital and IT',
      description: 'Software development, cyber security, and digital marketing',
      href: '/bootcamps/digital',
      icon: <BookOpen className="w-6 h-6" />,
      courses: [
        'Software Development Bootcamp',
        'Digital Marketing and Social Media',
        'Cyber Security Fundamentals',
        'Cloud Computing and AWS',
        'Data Analysis and Visualisation',
        'IT Support and Infrastructure'
      ]
    },
    {
      title: 'Construction',
      description: 'Building services, sustainable construction, and trades',
      href: '/bootcamps/construction',
      icon: <Building2 className="w-6 h-6" />,
      courses: [
        'Construction Site Supervision',
        'Building Information Modelling (BIM)',
        'Sustainable Construction Practices',
        'Health and Safety Management',
        'Construction Project Management'
      ]
    },
    {
      title: 'Business Services',
      description: 'Administration, management, and professional services',
      href: '/bootcamps/business',
      icon: <Briefcase className="w-6 h-6" />,
      courses: [
        'Business Administration',
        'Project Management',
        'Human Resources Management',
        'Leadership and Management',
        'Financial Services'
      ]
    },
    {
      title: 'Creative Industries',
      description: 'Design, media production, and creative technologies',
      href: '/bootcamps/creative',
      icon: <GraduationCap className="w-6 h-6" />,
      courses: [
        'Graphic Design and Digital Media',
        'Video Production and Editing',
        'UI/UX Design',
        'Content Creation and Management',
        'Digital Animation'
      ]
    },
    {
      title: 'Green Skills',
      description: 'Renewable energy, sustainability, and environmental services',
      href: '/bootcamps/green',
      icon: <MapPin className="w-6 h-6" />,
      courses: [
        'Renewable Energy Systems',
        'Environmental Management',
        'Sustainable Business Practices',
        'Green Building Technologies',
        'Electric Vehicle Maintenance'
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-yorkshire.jpg"
            alt="Skills bootcamp training session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/95 to-[#111827]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fast-track Your Career with Skills Bootcamps
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Flexible, intensive training courses designed to give you job-ready skills and a guaranteed interview.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#explore"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              >
                Explore Bootcamps
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#eligibility"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Up to 16 Weeks</h3>
                <p className="text-gray-600">Intensive, flexible courses that fit around your schedule</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Guaranteed Interview</h3>
                <p className="text-gray-600">Connect with local employers upon course completion</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600">Gain qualifications valued by employers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Bootcamps */}
      <section id="explore" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Bootcamps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a range of sectors and start your journey towards a new career
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {bootcampTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                      {React.cloneElement(type.icon, { className: 'w-6 h-6 text-emerald-600' })}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedCard === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <p className="text-gray-600 mt-1">{type.description}</p>
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-200 ${
                    expandedCard === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="space-y-2">
                      <p className="font-medium text-gray-900">Available Bootcamps:</p>
                      <ul className="space-y-2">
                        {type.courses.map((course, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                            <span className="text-gray-700">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={type.href}
                        className="inline-flex items-center text-emerald-600 font-medium hover:gap-1.5 gap-1 transition-all group"
                      >
                        View full details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Locations */}
      <section id="eligibility" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Can Apply?</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <p className="text-gray-600 mb-6">Skills Bootcamps are available to:</p>
                <ul className="space-y-4">
                  {[
                    'Aged 19 or over',
                    'Employed, self-employed, or recently unemployed',
                    'Living in South Yorkshire',
                    'Looking to advance your career or start a new one',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 text-sm">
                    Priority will be given to unemployed individuals and those from underrepresented groups in the tech sector.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Training Locations</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="relative aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/south-yorkshire-map.svg"
                    alt="Map of South Yorkshire showing Barnsley, Doncaster, Rotherham, and Sheffield"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600">
                  Training centres are conveniently located across South Yorkshire in:
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-4">
                  {['Barnsley', 'Doncaster', 'Rotherham', 'Sheffield'].map((location, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Businesses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upskill your workforce and access funding support
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SMEs</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">10% contribution to training costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">Access to skilled talent pool</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">Tailored training solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Large Organisations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">30% contribution to training costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">Workforce development support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">Industry-recognised qualifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about Skills Bootcamps and how they can benefit you or your business.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:bootcampsenquiries@sheffieldcityregion.org.uk"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              Contact Our Team
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Visit Help Centre
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}