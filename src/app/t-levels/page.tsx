'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Building2, ChevronRight, CheckCircle, ArrowRight, Briefcase, GraduationCap, CalendarDays } from 'lucide-react'
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

export default function TLevelsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Recruitment Support', href: '/recruitment-support' },
        { label: 'T Levels', href: '/t-levels' },
      ]} />

      {/* Hero Section - Simplified with single image */}
      <div className="relative bg-[#111827] py-24 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          <Image
            src="/images/t-levels-hero.jpg"
            alt="T Levels industry placements"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-300 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Industry Placements</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              T Levels: Building Tomorrow's Workforce
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Support young people aged 16-19 to gain valuable workplace experience while developing skills tailored to your industry needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors text-lg"
              >
                Express Interest
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Key Features moved to Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/25 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-1.5 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base text-blue-50 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-6 py-4">
              <a 
                href="#benefits" 
                className="px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-800 font-medium transition-colors"
              >
                Benefits
              </a>
              <a 
                href="#process" 
                className="px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-800 font-medium transition-colors"
              >
                Process
              </a>
              <a 
                href="#success-stories" 
                className="px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-800 font-medium transition-colors"
              >
                Success Stories
              </a>
              <a 
                href="#faq" 
                className="px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-800 font-medium transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Background Pattern */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating Cards Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 group">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <Image
                src="/images/t-levels-overview.jpg"
                alt="Students collaborating in modern workplace"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-4xl font-bold mb-4">Hands-On Learning</h2>
                <div className="flex gap-4">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">80% Classroom</div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">20% Workplace</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-block bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <span className="text-blue-600 font-medium">Real Impact</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Bridging Education <br/> & Industry Needs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our students bring cutting-edge classroom knowledge directly into your workplace, offering fresh solutions to real business challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Technical Skills', 'Soft Skills', 'Industry Tools', 'Teamwork'].map((skill, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg mb-3 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{skill}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Benefits Grid */}
          <div id="benefits" className="relative py-24 scroll-mt-20">
            <div className="bg-blue-50/30 backdrop-blur-sm py-24 rounded-3xl border-t border-blue-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Why Businesses <span className="text-blue-600">Love</span> T Levels
                  </h2>
                  <p className="text-xl text-gray-600">
                    Discover how hosting students creates value beyond traditional recruitment
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { 
                      title: 'Future Talent Pipeline',
                      icon: <Users className="w-8 h-8" />,
                      gradient: 'from-purple-100 to-blue-100'
                    },
                    { 
                      title: 'Innovation Boost',
                      icon: <Building2 className="w-8 h-8" />,
                      gradient: 'from-green-100 to-cyan-100'
                    },
                    { 
                      title: 'Cost-Effective Growth',
                      icon: <Briefcase className="w-8 h-8" />,
                      gradient: 'from-orange-100 to-amber-100'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className={`bg-gradient-to-br ${benefit.gradient} p-1 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300`}>
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 h-full">
                        <div className="w-14 h-14 rounded-xl bg-white shadow-sm mb-6 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                        <ul className="space-y-3 text-gray-600">
                          {[
                            'Early access to top graduates',
                            'Fresh perspectives on challenges',
                            'Reduced recruitment costs'
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                              {item}
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
                    className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                  >
                    Express Interest
                    <ChevronRight className="ml-3 w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Process Section */}
          <div className="relative pt-8 pb-12 scroll-mt-20" id="process">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Simple 4-Step <span className="text-blue-600">Process</span>
                </h2>
                <p className="text-xl text-gray-600">From initial contact to successful placement</p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 w-1 h-full bg-gray-100 transform -translate-x-1/2" />
                
                {[
                  { title: 'Discovery Call', description: 'Understand your needs' },
                  { title: 'Student Matching', description: 'Find ideal candidates' },
                  { title: 'Onboarding Support', description: 'Prepare your team' },
                  { title: 'Ongoing Partnership', description: 'Continuous improvement' }
                ].map((step, index) => (
                  <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                    <div className="w-1/2 px-8">
                      <div className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        <div className="text-blue-600 text-2xl font-bold mb-2">0{index + 1}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="w-1/2 px-8 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <CalendarDays className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add CTA after timeline */}
              <div className="mt-12 text-center bg-blue-50/50 py-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start the Process?
                </h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  Express Interest
                  <ChevronRight className="ml-3 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel Section */}
          <div className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl overflow-hidden scroll-mt-20" id="success-stories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Success <span className="text-blue-200">Stories</span>
                </h2>
                <p className="text-xl text-blue-200">Hear from businesses who transformed their teams</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "TechStart Ltd",
                    role: "Software Development",
                    quote: "Our T Level students brought fresh ideas that helped streamline our development process."
                  },
                  {
                    name: "GreenBuild Co",
                    role: "Sustainable Construction",
                    quote: "The students' enthusiasm and up-to-date knowledge revitalized our project teams."
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-blue-200/20 flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-blue-200">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-blue-100 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive FAQ Section */}
          <div className="py-24 scroll-mt-20" id="faq">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Your Questions <span className="text-blue-600">Answered</span>
                </h2>
                <p className="text-xl text-gray-600">Everything you need to know about hosting students</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "What support do we receive during placements?",
                    answer: "Full support from dedicated coordinators including progress tracking and regular check-ins."
                  },
                  {
                    question: "Can we host multiple students?",
                    answer: "Yes! Many businesses host 2-3 students across different departments."
                  },
                  {
                    question: "How does scheduling flexibility work?",
                    answer: "We work with you to create a schedule that fits your operational needs."
                  }
                ].map((faq, index) => (
                  <div key={index} className="group border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-center cursor-pointer">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </h3>
                      <div className="text-blue-600 text-2xl">+</div>
                    </div>
                    <p className="mt-4 text-gray-600 hidden group-hover:block animate-fadeIn">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Add CTA after FAQs */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-1 rounded-2xl inline-block">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 transition-colors text-lg font-bold rounded-xl"
                  >
                    Get Started Today
                    <ChevronRight className="ml-3 w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 