'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, GraduationCap, BookOpen, Briefcase, ChevronRight, ArrowRight, CheckCircle, Users, Building2, Calendar, Lightbulb, Award, BarChart, Cog, Video, ExternalLink, PawPrint, Layers, Calculator, MoveRight, File } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

// Student success stories
const successStories = [
  {
    name: "Alex",
    age: "19",
    course: "Digital Production",
    quote: "The industry placement was amazing - I got to work on real projects alongside experienced developers. I've now been offered a permanent role at the same company.",
    image: "/images/student-alex.jpg"
  },
  {
    name: "Priya",
    age: "18",
    course: "Health & Science",
    quote: "T-Levels gave me both theoretical knowledge and practical skills. The hands-on experience in a hospital laboratory helped me confirm this is the career for me.",
    image: "/images/student-priya.jpg"
  }
]

// T-Level providers in South Yorkshire - Enhanced with more detailed information
const providers = [
  { 
    name: "Sheffield College", 
    image: "/images/providers/sheffield-college.jpg",
    location: "Sheffield", 
    website: "https://www.sheffcol.ac.uk/t-levels",
    courses: ["Digital Production", "Education & Childcare", "Health & Science"],
    description: "Sheffield College offers modern facilities with strong industry connections to support your T-Level journey.",
    features: ["Modern digital labs", "Industry mentors", "Career coaching"]
  },
  { 
    name: "Barnsley College", 
    image: "/images/providers/barnsley-college.jpg",
    location: "Barnsley", 
    website: "https://www.barnsley.ac.uk/t-levels",
    courses: ["Construction", "Digital", "Education & Childcare", "Health & Science"],
    description: "Barnsley College provides exceptional learning environments with strong employer connections across various sectors.",
    features: ["State-of-the-art workshops", "Virtual reality training", "Industry projects"]
  },
  { 
    name: "Rotherham College", 
    image: "/images/providers/rotherham-college.jpg",
    location: "Rotherham", 
    website: "https://www.rotherham.ac.uk/t-levels",
    courses: ["Digital Business Services", "Health", "Education & Childcare"],
    description: "Rotherham College delivers T-Level qualifications designed to meet the needs of local and national employers.",
    features: ["Healthcare simulation suite", "Employer events", "1-to-1 placement support"]
  },
  { 
    name: "Doncaster College", 
    image: "/images/providers/doncaster-college.jpg",
    location: "Doncaster", 
    website: "https://www.don.ac.uk/t-levels",
    courses: ["Design & Development", "Education & Childcare", "Health"],
    description: "Doncaster College offers excellent industry placement opportunities with a focus on practical skills development.",
    features: ["Dedicated T-Level hub", "Employer partnerships", "Small class sizes"]
  },
  { 
    name: "UTC Sheffield Olympic Legacy Park", 
    image: "/images/providers/utc-sheffield.jpg",
    location: "Sheffield", 
    website: "https://www.utcsheffield.org.uk/t-levels",
    courses: ["Health & Science", "Digital"],
    description: "UTC Sheffield specialises in technical education with cutting-edge facilities for T-Level delivery.",
    features: ["Specialist equipment", "Industry expert teaching", "Project-based learning"]
  },
  { 
    name: "Dearne Valley College", 
    image: "/images/providers/dearne-valley-college.jpg",
    location: "Rotherham", 
    website: "https://www.dearne-coll.ac.uk/t-levels",
    courses: ["Digital Support Services", "Education & Childcare"],
    description: "Dearne Valley College provides T-Level qualifications with excellent employer connections and a supportive environment.",
    features: ["Small group teaching", "Technical specialist tutors", "Employability workshops"]
  }
]

export default function TLevelsForStudentsPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('overview')
  
  // Track active section for mobile navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      
      const sections = ['overview', 'courses', 'benefits', 'stories', 'providers']
      
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

  // Navigation items
  const navItems = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Award className="h-4 w-4" /> },
    { id: 'courses', label: 'Courses', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'providers', label: 'Providers', icon: <Building2 className="h-4 w-4" /> },
    { id: 'stories', label: 'Stories', icon: <Users className="h-4 w-4" /> }
  ]

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Options', href: '/career-options' },
            { label: 'T-Levels', href: '/t-levels-for-students' },
          ]} />
        </div>
      </div>

      {/* Hero Section - Redesigned to match apprenticeships page */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-blue-900 py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-emerald-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-700/50 backdrop-blur-sm border border-emerald-500/30">
                <GraduationCap className="h-4 w-4 text-emerald-300" />
                <span className="text-xs md:text-sm font-medium text-emerald-100">South Yorkshire T-Levels</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">Career</span> with T-Levels
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
                Combine classroom learning with real workplace experience and gain the skills, knowledge, and experience that employers are looking for
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="#courses"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-white text-emerald-900 font-medium hover:bg-emerald-50 transition-colors shadow-lg shadow-emerald-900/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Explore Courses
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="#providers"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-emerald-700/50 text-white font-medium backdrop-blur-sm border border-emerald-500/50 hover:bg-emerald-700/70 transition-colors text-sm sm:text-base w-full xs:w-auto"
                >
                  View Providers
                  <Users className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-6 sm:mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <Image 
                  src="/images/t-levels-hero.jpg"
                  alt="Students exploring T-Level career opportunities"
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

      {/* Quick Stats - Added to match apprenticeships page */}
      <div className="relative mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">UCAS</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Points for University</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">T-Levels are worth UCAS points – a Distinction* is worth the same as 3 A*s at A Level (168 UCAS points)</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">315+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Hours of Work Experience</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Gain meaningful industry experience with an employer placement, applying your classroom knowledge in real situations</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">2 Years</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Course Duration</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Combine 80% classroom learning with 20% on-the-job experience for a balanced approach to your technical education</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation - Desktop Only */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-6 py-4">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-slate-800 font-medium transition-colors text-sm flex items-center"
                >
                  {React.cloneElement(item.icon, { className: 'h-4 w-4 mr-2' })}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content sections - with improved mobile responsiveness */}
      {/* T-Level Overview Section - Flowing design */}
      <div id="overview" className="scroll-mt-20 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction - Changed from centered to left-aligned */}
          <div className="mb-16"> {/* Removed max-w-3xl mx-auto */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <GraduationCap className="h-4 w-4 text-emerald-800" />
              <span className="text-sm font-medium text-emerald-900">T-Level Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Are <span className="text-emerald-600">T-Levels?</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed text-slate-700">
                T Levels are 2-year courses that follow GCSEs and are equivalent to 3 A Levels. These courses have been developed in collaboration with employers so that the content meets the needs of industry and prepares you for work.
              </p>
              <p className="text-2xl leading-relaxed text-slate-700">
                T Levels offer students a mixture of classroom learning and 'on-the-job' experience during an industry placement of at least 315 hours (approximately 45 days).
              </p>
            </div>
          </div>

          {/* Content with image and flowing sections */}
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
            {/* Image - 2 columns */}
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="relative rounded-xl overflow-hidden h-56 sm:h-72 md:h-96 mb-6 shadow-md">
                <Image 
                  src="/images/t-level-classroom.jpg" 
                  alt="Students learning in a T-Level classroom environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
                  <p className="text-white text-lg font-medium p-6">
                    Blend of classroom learning (80%) and workplace experience (20%)
                  </p>
                </div>
              </div>
            </div>

            {/* Content sections - 3 columns */}
            <div className="md:col-span-3 order-1 md:order-2">
              {/* Course Structure */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-3">
                  <span className="border-b-3 border-emerald-500 pb-3 -mb-3.5">Course Structure</span>
                </h3>
                <ul className="space-y-8">
                  <li className="flex gap-5">
                    <div className="mt-1 text-emerald-600">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Technical qualification</h4>
                      <p className="text-lg text-slate-700">Including core theory, concepts and skills for an industry area</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="mt-1 text-emerald-600">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Industry placement</h4>
                      <p className="text-lg text-slate-700">With an employer to develop practical and technical skills</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="mt-1 text-emerald-600">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Maths and English</h4>
                      <p className="text-lg text-slate-700">Minimum standard in maths and English if not already achieved</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Where T-Levels Lead */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-3">
                  <span className="border-b-3 border-emerald-500 pb-3 -mb-3.5">Where T-Levels Can Lead</span>
                </h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-600">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-slate-700">Skilled employment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-600">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-slate-700">University degrees</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-600">
                      <Award className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-slate-700">Higher apprenticeships</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-600">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-slate-700">Higher technical qualifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="scroll-mt-20 py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Award className="h-4 w-4 text-emerald-800" />
              <span className="text-sm font-medium text-emerald-900">Why Choose T-Levels?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits <span className="text-emerald-600">for Students</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
              T-Levels offer unique advantages that set you up for career success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Experience',
                description: 'Gain real workplace experience that employers value, making you more employable upon graduation.',
                icon: <Briefcase className="w-6 h-6" />,
                gradient: 'from-purple-100 to-purple-50',
                benefits: [
                  'Apply classroom learning in real situations',
                  'Build a professional network early',
                  'Get references from industry professionals',
                  'Understand workplace expectations'
                ]
              },
              {
                title: 'Technical Knowledge',
                description: 'Develop specialist skills and knowledge in your chosen industry area.',
                icon: <BookOpen className="w-6 h-6" />,
                gradient: 'from-emerald-100 to-emerald-50',
                benefits: [
                  'Industry-relevant curriculum',
                  'Learn from experienced practitioners',
                  'Access to specialist equipment',
                  'Develop technical vocabulary'
                ]
              },
              {
                title: 'Multiple Progression Routes',
                description: 'Keep your options open with pathways to university, apprenticeships or skilled employment.',
                icon: <GraduationCap className="w-6 h-6" />,
                gradient: 'from-amber-100 to-amber-50',
                benefits: [
                  'UCAS points for university applications',
                  'Preparation for higher apprenticeships',
                  'Skills valued by employers',
                  'Foundation for further technical qualifications'
                ]
              }
            ].map((benefit, index) => (
              <div key={index} className={`bg-gradient-to-br ${benefit.gradient} p-1 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300`}>
                <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 shadow-sm mb-6 flex items-center justify-center">
                    {React.cloneElement(benefit.icon, { className: 'w-7 h-7 text-emerald-600' })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">{benefit.description}</p>
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

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="#courses"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium shadow-lg hover:shadow-emerald-600/20"
            >
              Find Your T-Level
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Providers Section - COMPLETELY REDESIGNED */}
      <div id="providers" className="scroll-mt-20 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:justify-between mb-10 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
                <Building2 className="h-4 w-4 text-emerald-800" />
                <span className="text-sm font-medium text-emerald-900">Find a Provider</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                T-Level Providers in <span className="text-emerald-600">South Yorkshire</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 md:max-w-lg mt-3 md:mt-0">
              Discover colleges and educational institutions offering T-Levels in our region, with details on their courses and specialities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {providers.map((provider, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 h-full flex flex-col group"
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
                  <p className="text-slate-600 mb-4">{provider.description}</p>
                  
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
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Provider Features:</h4>
                    <ul className="space-y-1">
                      {provider.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={provider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 mt-auto"
                  >
                    View T-Level Courses
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 sm:mt-16 bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Need help choosing a provider?</h3>
            <p className="text-base sm:text-lg text-slate-600 mb-6">
              Our team can help match you with the right T-Level provider based on your interests and career aspirations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium shadow-lg hover:shadow-emerald-600/20"
            >
              Get Advice
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div id="stories" className="scroll-mt-20 py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Users className="h-4 w-4 text-emerald-800" />
              <span className="text-sm font-medium text-emerald-900">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Student <span className="text-emerald-600">Success</span> Stories
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hear from students who have completed T-Levels and where they are now
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm border-2 border-emerald-100">
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                    <p className="text-emerald-600">
                      Age {story.age}, {story.course} T-Level
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 text-xl mb-6 leading-relaxed relative pl-6 before:absolute before:left-0 before:top-2 before:w-1 before:h-12 before:bg-emerald-200">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-2 text-emerald-600">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-sm font-medium">Now employed in their chosen field</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#courses"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg text-lg"
            >
              Find Your T-Level
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Application CTA */}
      <div className="bg-white py-16 mb-8 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Ready to start your T-Level journey?
                </h2>
                <p className="mt-4 text-2xl text-emerald-100 max-w-3xl">
                  Applications for T-Levels are now open. Contact your chosen provider or speak to a careers advisor to start your application.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="#providers"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
                  >
                    Find a Provider
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation - Fixed at bottom */}
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
                    <span className={`text-sm font-medium ${activeSection === item.id ? 'text-emerald-800' : 'text-slate-900'} whitespace-nowrap`}>
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