'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, LineChart, Lightbulb, Users, Landmark, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Newsletter from '@/components/Newsletter'

const BusinessSupportPage = () => {
  const [activeSection, setActiveSection] = useState('')

  // Update active section based on scroll position
  const handleScroll = () => {
    const sections = ['introduction', 'made-smarter', 'advisors', 'grants']
    let current = ''
    
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100) {
          current = section
        }
      }
    }
    
    if (current !== activeSection) {
      setActiveSection(current)
    }
  }

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection]) // Include activeSection in dependencies

  return (
    <div className="bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Business Support', href: '/business' },
            { label: 'Business Growth', href: '/business-support' },
          ]} />
        </div>
      </div>

      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-blue-800 to-sky-900 py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-sky-500/20 blur-3xl"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/hero-business.jpg"
              alt="Business growth support and advisory services in South Yorkshire"
              fill
              className="object-cover object-center opacity-15 mix-blend-overlay"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-sky-800/60 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-sm border border-blue-500/30">
                <LineChart className="h-4 w-4 text-blue-300" />
                <span className="text-xs md:text-sm font-medium text-blue-100">Business Growth</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Business Support to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-sky-400">Grow Your Business</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                Access practical advice, funding opportunities, and specialist support to help your South Yorkshire business thrive and expand.
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="/made-smarter"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Made Smarter Programme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#advisors"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Local Growth Advisors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-6 sm:mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-blue-500/20 blur-3xl"></div>
                <Image 
                  src="/images/hero-business.jpg"
                  alt="Business advisory services in South Yorkshire helping companies grow"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-4 scrollbar-hide">
            <ul className="flex space-x-8 mx-auto">
              <li>
                <a 
                  href="#introduction" 
                  className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 ${activeSection === 'introduction' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'} transition-colors`}
                >
                  Overview
                </a>
              </li>
              <li>
                <a 
                  href="#made-smarter" 
                  className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 ${activeSection === 'made-smarter' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'} transition-colors`}
                >
                  Made Smarter
                </a>
              </li>
              <li>
                <a 
                  href="#advisors" 
                  className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 ${activeSection === 'advisors' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'} transition-colors`}
                >
                  Growth Advisors
                </a>
              </li>
              <li>
                <a 
                  href="#grants" 
                  className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 ${activeSection === 'grants' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'} transition-colors`}
                >
                  Funding & Grants
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Introduction Section - Updated for better visual hierarchy */}
      <section id="introduction" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-blue-50 opacity-70 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-blue-50 opacity-70"></div>
        <div className="absolute top-40 left-0 w-10 sm:w-20 h-64 sm:h-96 bg-gradient-to-b from-blue-50 via-blue-100/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 shadow-sm mb-4">
              <Building2 className="h-4 w-4 text-blue-700" />
              <span className="text-xs md:text-sm font-medium text-blue-700">Supporting Yorkshire Businesses</span>
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Practical Support for <span className="text-blue-600">Business Growth</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Whether you're looking to adopt new technologies, expand your operations, or access funding, our team of experts can provide the guidance and support you need to achieve your growth ambitions.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
            <div className="group relative">
              <div className="absolute -inset-x-1 sm:-inset-x-2 -inset-y-1 sm:-inset-y-2 bg-gradient-to-br from-blue-100/30 to-blue-50/50 rounded-[20px] sm:rounded-[30px] transform -rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-blue-100 p-6 sm:p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 sm:mb-6">
                  <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Digital Transformation</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Adopt digital technologies to improve productivity, efficiency and resilience with the Made Smarter programme.
                </p>
                <Link href="/made-smarter" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 group">
                  Learn more <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-x-1 sm:-inset-x-2 -inset-y-1 sm:-inset-y-2 bg-gradient-to-br from-blue-100/30 to-blue-50/50 rounded-[20px] sm:rounded-[30px] transform -rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-blue-100 p-6 sm:p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Expert Advisors</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Connect with dedicated growth advisors based in your local authority who understand the specific needs of your area.
                </p>
                <Link href="#advisors" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 group">
                  Find your advisor <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-x-1 sm:-inset-x-2 -inset-y-1 sm:-inset-y-2 bg-gradient-to-br from-blue-100/30 to-blue-50/50 rounded-[20px] sm:rounded-[30px] transform -rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-blue-100 p-6 sm:p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 sm:mb-6">
                  <Landmark className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Funding & Grants</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Discover and access government grants and funding opportunities to support your business growth plans.
                </p>
                <Link href="#grants" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 group">
                  Explore funding <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made Smarter Section */}
      <section id="made-smarter" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-50 opacity-50 blur-2xl"></div>
        <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-sky-50 opacity-50 blur-2xl"></div>
        <div className="absolute top-1/3 right-0 h-40 w-2 bg-gradient-to-b from-blue-600/30 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 shadow-sm mb-4">
                <Lightbulb className="h-4 w-4 text-sky-700" />
                <span className="text-xs md:text-sm font-medium text-sky-700">Made Smarter Programme</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your <span className="text-sky-600">Manufacturing Business</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                The Made Smarter programme helps manufacturing SMEs in South Yorkshire adopt digital technologies. Access up to £20k in match funding, digital roadmaps, and implementation support.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Programme Benefits:</h3>
                <ul className="space-y-3">
                  {[
                    'Up to £20k match funding for technology adoption',
                    'Digital transformation workshops',
                    'Tailored digital roadmaps for your business',
                    'Leadership and skills development',
                    'Expert implementation support'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href="/made-smarter"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-500 transition-colors shadow-lg shadow-sky-600/20"
              >
                Learn more about Made Smarter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/images/made-smarter.jpg"
                  alt="Manufacturing business benefiting from digital technology adoption"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-sky-100 flex items-center justify-center p-4 shadow-xl border border-sky-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">£1.6M</div>
                  <div className="text-xs font-medium text-sky-700 leading-tight">Funding Available</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-gray-100 p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-sky-100">
                    <Lightbulb className="h-5 w-5 text-sky-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    "Made Smarter helped us increase production by 35%"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Growth Advisors Section */}
      <section id="advisors" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute -left-16 top-1/4 w-64 h-64 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>
          <div className="absolute right-0 w-1/3 h-full bg-[radial-gradient(#f5f3ff_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 shadow-sm mb-4">
              <Users className="h-4 w-4 text-blue-700" />
              <span className="text-xs md:text-sm font-medium text-blue-700">Local Support</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Your <span className="text-blue-600">Local Growth Team</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our dedicated local advisors understand the unique challenges and opportunities in each South Yorkshire area. Get personalized support to help your business thrive.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Sheffield */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-blue-100/20 to-sky-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="h-20 bg-gradient-to-r from-blue-600 to-sky-600 relative">
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sheffield</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Business Sheffield provides comprehensive support for businesses at all stages, from startups to established enterprises.
                  </p>
                  
                  <Link
                    href="mailto:businesssheffield@sheffield.gov.uk"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group/link text-sm sm:text-base"
                  >
                    Contact Sheffield Team 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Barnsley */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-blue-100/20 to-sky-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="h-20 bg-gradient-to-r from-sky-600 to-cyan-600 relative">
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Barnsley</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Enterprising Barnsley offers tailored support to help local businesses grow, innovate and secure investment opportunities.
                  </p>
                  
                  <Link
                    href="mailto:investment@barnsley.gov.uk"
                    className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700 group/link text-sm sm:text-base"
                  >
                    Contact Barnsley Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Doncaster */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-blue-100/20 to-sky-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="h-20 bg-gradient-to-r from-cyan-600 to-teal-600 relative">
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Doncaster</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Business Doncaster provides specialist support for startups, scale-ups and businesses looking to relocate to the area.
                  </p>
                  
                  <Link
                    href="mailto:info@businessdoncaster.com"
                    className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 group/link text-sm sm:text-base"
                  >
                    Contact Doncaster Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Rotherham */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-blue-100/20 to-sky-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="h-20 bg-gradient-to-r from-teal-600 to-teal-600 relative">
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rotherham</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    RiDO offers practical support for Rotherham businesses, with a focus on helping companies access new markets and funding.
                  </p>
                  
                  <Link
                    href="mailto:info@rido.org.uk"
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 group/link text-sm sm:text-base"
                  >
                    Contact Rotherham Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Grants Section */}
      <section id="grants" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-sky-50 opacity-70 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-1/4 left-0 h-40 w-2 bg-gradient-to-b from-sky-600/30 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[radial-gradient(#f5f3ff_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 shadow-sm mb-4">
              <Landmark className="h-4 w-4 text-sky-700" />
              <span className="text-xs md:text-sm font-medium text-sky-700">Funding Opportunities</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government Grants and <span className="text-sky-600">Funding Support</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Discover the range of government-backed funding opportunities available to help your business innovate, grow and thrive. Our advisors can help you identify and apply for the most suitable grants.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Innovation Grants */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-sky-100/20 to-blue-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-5">
                  <Lightbulb className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Grants</h3>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Innovate UK Smart Grants (up to £500k)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Knowledge Transfer Partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">R&D Tax Credits</span>
                  </li>
                </ul>
                
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-sky-400 group-hover:text-sky-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Export Support */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-cyan-100/20 to-sky-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center mb-5">
                  <Building2 className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Export Support</h3>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">UK Export Finance support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">International Trade Advisors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Export Academy Programme</span>
                  </li>
                </ul>
                
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-cyan-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Green Technology */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-teal-100/20 to-green-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Green Technology</h3>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Net Zero Innovation Portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Industrial Energy Transformation Fund</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Clean Growth Fund</span>
                  </li>
                </ul>
                
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-teal-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Development */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-blue-100/20 to-pink-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                  <Users className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skills Development</h3>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Skills Bootcamps funding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Apprenticeship incentives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Help to Grow: Management & Digital</span>
                  </li>
                </ul>
                
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-blue-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Start-Up Support */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-amber-100/20 to-orange-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start-Up Support</h3>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Start Up Loans (up to £25,000)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">New Enterprise Allowance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Innovate UK Young Innovators</span>
                  </li>
                </ul>
                
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-amber-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Capital */}
            <div className="group relative">
              <div className="absolute -inset-x-1.5 -inset-y-1.5 bg-gradient-to-br from-emerald-100/20 to-teal-50/30 rounded-[20px] transform rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <Landmark className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Capital</h3>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">British Business Bank investments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Northern Powerhouse Investment Fund</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">Enterprise Investment Scheme</span>
                  </li>
                </ul>
                
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-emerald-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/funding"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-500 transition-colors shadow-lg shadow-sky-600/20"
            >
              Explore All Funding Opportunities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">Our advisors can help you identify and apply for the most suitable grants for your business</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 to-sky-800 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-sky-500/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transform -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8 sm:mb-10">
              Our team of expert advisors are ready to help you navigate the business growth landscape. Whether you need funding, digital skills, or market expansion support, we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/30"
              >
                Contact Our Support Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500/20 backdrop-blur-sm text-white font-medium hover:bg-blue-500/30 transition-colors border border-blue-400/30"
              >
                View Upcoming Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3 text-center">
            {/* Expert Advice */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Advisors</h3>
              <p className="text-blue-100">Connect with business specialists who understand your local area and sector.</p>
            </div>
            
            {/* Funding Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Landmark className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Funding Support</h3>
              <p className="text-blue-100">Get help identifying and applying for grants and funding opportunities.</p>
            </div>
            
            {/* Skills Development */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Digital Skills</h3>
              <p className="text-blue-100">Access training and support to develop the digital skills your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default BusinessSupportPage 