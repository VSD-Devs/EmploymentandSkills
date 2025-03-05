"use client"

import Link from 'next/link'
import { ChevronRight, ArrowRight, MapPin, Calendar, Users, Briefcase, GraduationCap, School, Heart, Rocket, Lightbulb, Handshake } from 'lucide-react'
import Image from 'next/image'
import CareerQuizButton from './CareerQuizButton'

const Hero = () => {
  return (
    <div className="bg-white">
      {/* Main Hero Section - Simplified Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
              <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-emerald-800">South Yorkshire Employment & Skills Hub</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
                South Yorkshire <span className="text-emerald-600">Pathways</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                Connecting South Yorkshire residents with local opportunities, training and career pathways tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8 sm:mb-10">
                <CareerQuizButton 
                  variant="primary"
                  className="text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-emerald-600/20 inline-flex items-center justify-center"
                />
                <Link href="/pathways" className="text-sm sm:text-base bg-white text-emerald-700 border border-emerald-200 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center">
                  Explore Pathways
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Featured People - Simple 2-column mobile layout */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                  {/* Young People */}
                  <Link href="/young-people" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                    <div className="aspect-video max-sm:aspect-[3/2] relative flex-shrink-0">
                      <Image 
                        src="/images/young-people.jpg"
                        alt="Young person pursuing education"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 max-sm:p-2 text-center bg-gradient-to-br from-purple-600 to-purple-500 flex-1 flex flex-col justify-center">
                      <h3 className="text-lg max-sm:text-sm font-semibold text-white">Young People</h3>
                      <p className="text-sm text-white/90 mt-1 sm:block hidden">First steps into your career</p>
                    </div>
                  </Link>

                  {/* Adults */}
                  <Link href="/adult-skills" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                    <div className="aspect-video max-sm:aspect-[3/2] relative flex-shrink-0">
                      <Image 
                        src="/images/adult-skills-hero.webp"
                        alt="Adult learner"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 max-sm:p-2 text-center bg-gradient-to-br from-amber-700 to-amber-600 flex-1 flex flex-col justify-center">
                      <h3 className="text-lg max-sm:text-sm font-semibold text-white">Adults (19+)</h3>
                      <p className="text-sm text-white/90 mt-1 sm:block hidden">Advance your career journey</p>
                    </div>
                  </Link>

                  {/* Businesses */}
                  <Link href="/business" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                    <div className="aspect-video max-sm:aspect-[3/2] relative flex-shrink-0">
                      <Image 
                        src="/images/cornerstone.jpg"
                        alt="Business professional"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 max-sm:p-2 text-center bg-gradient-to-br from-blue-700 to-blue-600 flex-1 flex flex-col justify-center">
                      <h3 className="text-lg max-sm:text-sm font-semibold text-white">Businesses</h3>
                      <p className="text-sm text-white/90 mt-1 sm:block hidden">Grow your workforce</p>
                    </div>
                  </Link>

                  {/* Educators */}
                  <Link href="/educators" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video max-sm:aspect-[3/2] relative">
                      <Image 
                        src="/images/tlevels-hub.webp"
                        alt="Teacher with students"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 max-sm:p-2 text-center bg-gradient-to-br from-emerald-700 to-emerald-600">
                      <h3 className="text-lg max-sm:text-sm font-semibold text-white">Educators</h3>
                      <p className="text-sm text-white/90 mt-1 sm:block hidden">Guide your students</p>
                    </div>
                  </Link>

                  {/* Parents */}
                  <Link href="/parents" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video max-sm:aspect-[3/2] relative">
                      <Image 
                        src="/images/parent-hero.webp"
                        alt="Parents with children"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 max-sm:p-2 text-center bg-gradient-to-br from-teal-700 to-teal-600">
                      <h3 className="text-lg max-sm:text-sm font-semibold text-white">Parents & Carers</h3>
                      <p className="text-sm text-white/90 mt-1 sm:block hidden">Support their future</p>
                    </div>
                  </Link>

                  {/* Events */}
                  <Link href="/events" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video max-sm:aspect-[3/2] relative">
                      <Image 
                        src="/images/skills-bank3.jpg"
                        alt="Career event"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 max-sm:p-2 text-center bg-gradient-to-br from-slate-800 to-slate-700">
                      <h3 className="text-lg max-sm:text-sm font-semibold text-white">Events</h3>
                      <p className="text-sm text-white/90 mt-1 sm:block hidden">Local opportunities</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moved Authority Partners Banner - Scrolling logos */}
      <div className="bg-white border-y border-slate-200 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop version */}
          <div className="hidden sm:flex items-center justify-center space-x-16 animate-marquee-slow">
            {[
              { name: 'South Yorkshire Mayoral Combined Authority', logo: '/images/symca.svg' },
              { name: 'Sheffield City Council', logo: '/images/sheffield-city-council.png' },
              { name: 'Barnsley Council', logo: '/images/barnsley-council-logo.png' },
              { name: 'Rotherham Council', logo: '/images/rotherham-council-logo.webp' },
              { name: 'Doncaster Council', logo: '/images/doncaster-council-logo.png' },
            ].map((authority, i) => (
              <div key={i} className="flex flex-col items-center justify-center h-14 w-32 flex-shrink-0">
                {authority.name.includes('South Yorkshire Mayoral Combined Authority') ? (
                  <div className="relative">
                    <div className="h-full w-full flex items-center justify-center max-sm:scale-75">
                      <Image 
                        src={authority.logo} 
                        alt={authority.name}
                        width={100}
                        height={40}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="h-full w-full flex items-center justify-center max-sm:scale-90">
                      <Image 
                        src={authority.logo} 
                        alt={authority.name}
                        width={
                          authority.name.includes('Barnsley') || authority.name.includes('Rotherham') 
                            ? 200
                            : authority.name.includes('Sheffield') 
                              ? 100
                              : 140
                        }
                        height={
                          authority.name.includes('Barnsley') || authority.name.includes('Rotherham') 
                            ? 80
                            : authority.name.includes('Sheffield') 
                              ? 40
                              : 56
                        }
                        className={`object-contain max-h-full max-w-full ${
                          authority.name.includes('Barnsley') || authority.name.includes('Rotherham') 
                            ? 'scale-125 max-sm:scale-100'
                            : ''
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile scrollable version */}
          <div className="sm:hidden -mx-4 px-4 overflow-x-auto pb-2">
            <div className="flex flex-nowrap gap-4 min-w-max">
              {[
                { name: 'South Yorkshire Mayoral Combined Authority', logo: '/images/symca.svg' },
                { name: 'Sheffield City Council', logo: '/images/sheffield-city-council.png' },
                { name: 'Barnsley Council', logo: '/images/barnsley-council-logo.png' },
                { name: 'Rotherham Council', logo: '/images/rotherham-council-logo.webp' },
                { name: 'Doncaster Council', logo: '/images/doncaster-council-logo.png' },
              ].map((authority, i) => (
                <div key={i} className="flex flex-col items-center justify-center w-20 aspect-square flex-shrink-0">
                  {authority.name.includes('South Yorkshire Mayoral Combined Authority') ? (
                    <div className="relative w-full h-full p-1">
                      <Image 
                        src={authority.logo} 
                        alt={authority.name}
                        width={80}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full p-1">
                      <Image 
                        src={authority.logo} 
                        alt={authority.name}
                        width={100}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Career Support Section - Now comes after logos */}
      <section className="py-12 md:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-blue-900">For Job Seekers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Career Support
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              Get free access to career guidance, funded training programmes and employment support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Career Guidance */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src="/images/career-guidance.jpg" 
                  alt="Career advisor session" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Personalised Career Guidance</h3>
                <p className="text-slate-700 mb-4">
                  Take our career quiz and get matched with pathways that fit your skills and aspirations
                </p>
                <CareerQuizButton 
                  variant="primary"
                  className="w-full text-center justify-center"
                />
              </div>
            </div>

            {/* Funded Training */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src="/images/adult-skills-hero.webp" 
                  alt="Adult learners in classroom" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Funded Training</h3>
                <p className="text-slate-700 mb-4">
                  Access free courses and qualifications in growing industries across South Yorkshire
                </p>
                <Link 
                  href="/funded-training-for-adults" 
                  className="inline-flex items-center justify-center w-full text-center bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-amber-600/20 hover:from-amber-700 hover:to-amber-600 transition-all"
                >
                  Explore Training Options
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Employment Support */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src="/images/apprentice-interview.jpg" 
                  alt="Job interview practice" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Employment Support</h3>
                <p className="text-slate-700 mb-4">
                  Get help with job applications, interviews, and connecting with local employers
                </p>
                <Link 
                  href="/support" 
                  className="inline-flex items-center justify-center w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-600/20 hover:from-blue-700 hover:to-blue-600 transition-all"
                >
                  Get Job Ready
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Business/Employer Support Section */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
              <Briefcase className="h-4 w-4 text-blue-700" />
              <span className="text-xs sm:text-sm font-medium text-blue-900">For Businesses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
               Support for South Yorkshire Businesses
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              From workforce development to startup incubation - grow your business with South Yorkshire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Workforce Development */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src="/images/office-development.jpg" 
                  alt="Team training session" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Workforce Development</h3>
                <p className="text-slate-700 mb-4">
                  Upskill your team with funded training programmes and apprenticeship opportunities
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-slate-800">Skills Bootcamps</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-slate-800">Apprenticeship funding</span>
                  </div>
                  <div className="flex items-center">
                    <School className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="text-slate-800">Leadership training</span>
                  </div>
                </div>
                <Link 
                  href="/business/workforce" 
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
                >
                  Develop Your Workforce
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Business Growth */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src="/images/business-growth.png" 
                  alt="Business expansion meeting" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Business Growth</h3>
                <p className="text-slate-700 mb-4">
                  Access funding, grants, and expert support to scale your operations and meet your goals.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-slate-800">Expansion support</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span className="text-slate-800">Growth funding</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                    <span className="text-slate-800">Export assistance</span>
                  </div>
                </div>
                <Link 
                  href="/business/growth" 
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
                >
                  Grow Your Business
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Start-Up Support */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src="/images/start-up1.jpg" 
                  alt="Entrepreneurs working" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Start-Up Support</h3>
                <p className="text-slate-700 mb-4">
                  Launch and grow your business with our entrepreneur programmes and funding
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Rocket className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="text-slate-800">Incubation programmes</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-slate-800">Innovation grants</span>
                  </div>
                  <div className="flex items-center">
                    <Handshake className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-slate-800">Mentorship network</span>
                  </div>
                </div>
                <Link 
                  href="/business/startups" 
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
                >
                  Start Your Journey
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/business/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
            >
              Explore All Business Resources
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Labour Market Intelligence Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-6">
                <span className="text-xs font-medium text-slate-300">Data-driven insights</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                South Yorkshire's Employment Landscape
              </h2>
              
              <p className="text-lg text-slate-300 mb-8">
                Access real-time data on job trends, in-demand skills, and growth opportunities across the region. Make informed career decisions with our labour market intelligence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">17%</div>
                  <p className="text-sm text-slate-200">Growth in tech jobs</p>
                </div>
                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-300 mb-1">£32K</div>
                  <p className="text-sm text-slate-300">Average salary</p>
                </div>
                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-300 mb-1">5,200</div>
                  <p className="text-sm text-slate-300">New jobs this year</p>
                </div>
                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-300 mb-1">8</div>
                  <p className="text-sm text-slate-300">Growth sectors</p>
                </div>
              </div>
              
              <Link 
                href="/our-region/labour-market" 
                className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
              >
                Explore market data
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden mb-6">
                <Image 
                  src="/images/labour-market-dashboard.jpg" 
                  alt="Labour market intelligence dashboard" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Top skills in demand</h3>
              
              <div className="space-y-3">
                {[
                  { skill: "Digital Marketing", growth: 38, color: "bg-purple-500" },
                  { skill: "Data Analysis", growth: 42, color: "bg-blue-500" },
                  { skill: "Healthcare", growth: 25, color: "bg-emerald-500" },
                  { skill: "Software Development", growth: 33, color: "bg-amber-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mr-2">
                      <div className={`h-2.5 rounded-full ${item.color}`} style={{ width: `${item.growth}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center min-w-[180px]">
                      <span className="text-sm text-slate-300">{item.skill}</span>
                      <span className="text-sm font-medium text-slate-300">{item.growth}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mayor and SYMCA Section - Simplified */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-3">
              <span className="text-xs font-medium text-blue-900">Regional Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Driving South Yorkshire Forward
            </h2>
            <p className="text-lg text-slate-700">
              Working together to create opportunities across our region
            </p>
          </div>

          <div className="grid gap-8 items-center">
            {/* Combined Mayor and SYMCA card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                {/* Mayor Image */}
                <div className="aspect-square md:aspect-auto md:h-full relative">
                  <Image 
                    src="/images/oliver-coppard.jpg" 
                    alt="Mayor of South Yorkshire" 
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Image 
                      src="/images/symca.svg" 
                      alt="SYMCA" 
                      width={120}
                      height={48}
                      className="h-8 w-auto"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mayor of South Yorkshire</h3>
                  <p className="text-slate-700 mb-6">
                    Leading the South Yorkshire Mayoral Combined Authority in creating economic opportunities 
                    and improving lives across Sheffield, Rotherham, Barnsley and Doncaster.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/about/mayor" 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Meet the Mayor
                    </Link>
                    <Link 
                      href="/about/" 
                      className="px-4 py-2 border border-blue-600 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    >
                      About SYMCA
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SYMCA Mission Statement */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center border border-blue-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                South Yorkshire Mayoral Combined Authority's Mission
              </h3>
              <p className="text-slate-700 max-w-2xl mx-auto">
                To create a stronger, greener, and fairer South Yorkshire through strategic investments in 
                infrastructure, skills, and economic growth - working with local authorities and communities 
                across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-900 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative px-6 py-12 md:p-12">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] mix-blend-overlay opacity-5"></div>
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="text-slate-50 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey?</h2>
                  <p className="text-slate-200 text-lg mb-6">
                    Take the first step towards your new career path in South Yorkshire
                  </p>
                  
                  {/* Enhanced Community Image Collage */}
                  <div className="hidden md:block mt-6">
                    <div className="relative h-20">
                      {[
                        {
                          img: "/images/community/person-1.jpg",
                          alt: "Recent graduate from Sheffield",
                          left: "0%",
                          size: "h-20 w-20",
                          zIndex: "z-50"
                        },
                        {
                          img: "/images/community/person-2.jpg",
                          alt: "Career changer from Barnsley",
                          left: "15%",
                          size: "h-16 w-16",
                          zIndex: "z-40"
                        },
                        {
                          img: "/images/community/person-3.jpg",
                          alt: "Apprentice from Rotherham",
                          left: "28%",
                          size: "h-14 w-14",
                          zIndex: "z-30"
                        },
                        {
                          img: "/images/community/person-4.jpg",
                          alt: "Business owner from Doncaster",
                          left: "40%",
                          size: "h-12 w-12",
                          zIndex: "z-20"
                        },
                        {
                          img: "/images/community/person-5.jpg",
                          alt: "Healthcare professional from South Yorkshire",
                          left: "50%",
                          size: "h-10 w-10",
                          zIndex: "z-10"
                        },
                      ].map((person, i) => (
                        <div 
                          key={i} 
                          className={`absolute bottom-0 ${person.size} rounded-full overflow-hidden border-2 border-white shadow-md ${person.zIndex}`}
                          style={{ left: person.left }}
                        >
                          <Image 
                            src={person.img} 
                            alt={person.alt} 
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      <div className="absolute bottom-0 left-[65%] h-16 flex items-center">
                        <span className="text-white text-lg font-medium">Join 5,000+ others on their career journey</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <CareerQuizButton 
                    variant="cta"
                    className="px-6 py-3 rounded-lg font-medium"
                  />
                  <Link 
                    href="/pathways" 
                    className="px-6 py-3 rounded-lg bg-emerald-800/40 text-white border border-white/30 hover:bg-emerald-800/60 transition-colors font-medium inline-flex items-center justify-center"
                  >
                    Explore pathways
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 mb-3">
                <Calendar className="h-3.5 w-3.5 text-slate-700" />
                <span className="text-xs font-medium text-slate-700">Mark your calendar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Upcoming Events</h2>
              <p className="text-lg text-slate-700">Connect with employers and explore opportunities</p>
            </div>
            
            <Link 
              href="/events" 
              className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 mt-4 md:mt-0"
            >
              View all events
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "South Yorkshire Careers Fair",
                date: "24 June 2023",
                location: "Sheffield City Hall",
                image: "/images/events/careers-fair.jpg"
              },
              {
                title: "Digital Skills Workshop",
                date: "12 July 2023",
                location: "Barnsley Digital Media Centre",
                image: "/images/events/workshop.jpg"
              },
              {
                title: "Healthcare Recruitment Day",
                date: "28 July 2023",
                location: "Doncaster Royal Infirmary",
                image: "/images/events/healthcare.jpg"
              }
            ].map((event, i) => (
              <Link href={`/events/${i}`} key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col">
                {/* Enhanced larger event image */}
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  {/* Date badge overlay */}
                  <div className="absolute top-0 right-0 m-4">
                    <div className="bg-white rounded-lg shadow-md p-2 text-center min-w-[60px]">
                      <span className="block text-emerald-700 text-xs font-bold">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="block text-slate-800 text-sm font-bold">
                        {event.date.split(' ')[1]}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{event.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;