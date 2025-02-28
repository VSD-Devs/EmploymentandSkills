'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, GraduationCap, BookOpen, Briefcase, ChevronRight, ArrowRight, CheckCircle, Users, Building2, Calendar, Lightbulb, Award, BarChart, Cog, Video, ExternalLink, PawPrint } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

// T-Level course options
const tLevelCourses = [
  {
    title: 'Digital Production',
    sectors: [
      'Software Development',
      'Data Analysis', 
      'Networking and Cyber Security'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    jobs: ['Web Developer', 'IT Support Technician', 'Software Engineer', 'Data Analyst', 'Cyber Security Specialist'],
    image: '/images/t-level-digital.jpg'
  },
  {
    title: 'Business & Accounting',
    sectors: [
      'Accounting',
      'Legal Services',
      'Management and Administration'
    ],
    icon: <BarChart className="w-6 h-6" />,
    jobs: ['Accountant', 'Bookkeeper', 'Legal Secretary', 'Business Administrator', 'Office Manager'],
    image: '/images/t-level-business.jpg'
  },
  {
    title: 'Education & Childcare',
    sectors: [
      'Education and Early Years',
      'Teaching Assistant', 
      'Educational Support'
    ],
    icon: <Users className="w-6 h-6" />,
    jobs: ['Teaching Assistant', 'Nursery Worker', 'Educational Support Staff', 'Early Years Educator'],
    image: '/images/t-level-education.jpg'
  },
  {
    title: 'Health & Science',
    sectors: [
      'Supporting The Adult Nursing Team',
      'Supporting The Mental Health Team', 
      'Laboratory Science'
    ],
    icon: <BookOpen className="w-6 h-6" />,
    jobs: ['Healthcare Support Worker', 'Laboratory Technician', 'Pharmacy Assistant', 'Mental Health Support Worker'],
    image: '/images/t-level-health.jpg'
  },
  {
    title: 'Construction',
    sectors: [
      'Design, Surveying and Planning',
      'Bricklaying',
      'Carpentry and Joinery',
      'Plastering',
      'Plumbing'
    ],
    icon: <Building2 className="w-6 h-6" />,
    jobs: ['Architectural Technician', 'Construction Site Supervisor', 'Building Services Technician', 'Bricklayer', 'Carpenter', 'Plumber'],
    image: '/images/t-level-construction.jpg'
  },
  {
    title: 'Engineering & Manufacturing',
    sectors: [
      'Design and Development (Electrical and Electronic)',
      'Electrotechnical Engineering',
      'Light and Electric Vehicles Maintenance'
    ],
    icon: <Cog className="w-6 h-6" />,
    jobs: ['Electrical Technician', 'Electronic Engineer', 'Manufacturing Technician', 'Vehicle Maintenance Technician'],
    image: '/images/t-level-engineering.jpg'
  },
  {
    title: 'Creative & Media',
    sectors: [
      'Fashion and Textiles',
      'Content Creation and Media Production',
      'Creative Media Technician',
      'Events and Venues Technician'
    ],
    icon: <Video className="w-6 h-6" />,
    jobs: ['Media Production Assistant', 'Fashion Design Assistant', 'Events Coordinator', 'Content Creator'],
    image: '/images/t-level-media.jpg'
  },
  {
    title: 'Animal Care',
    sectors: [
      'Animal Care and Management'
    ],
    icon: <PawPrint className="w-6 h-6" />,
    jobs: ['Veterinary Assistant', 'Animal Care Technician'],
    image: '/images/t-level-animal.jpg'
  }
]

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

// T-Level providers in South Yorkshire
const providers = [
  { name: "Sheffield College", location: "Sheffield", website: "https://www.sheffcol.ac.uk/t-levels" },
  { name: "Barnsley College", location: "Barnsley", website: "https://www.barnsley.ac.uk/t-levels" },
  { name: "Rotherham College", location: "Rotherham", website: "https://www.rotherham.ac.uk/t-levels" },
  { name: "Doncaster College", location: "Doncaster", website: "https://www.don.ac.uk/t-levels" },
  { name: "UTC Sheffield Olympic Legacy Park", location: "Sheffield", website: "https://www.utcsheffield.org.uk/t-levels" },
  { name: "Dearne Valley College", location: "Rotherham", website: "https://www.dearne-coll.ac.uk/t-levels" }
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
    { id: 'courses', label: 'Courses', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Award className="h-4 w-4" /> },
    { id: 'stories', label: 'Stories', icon: <Users className="h-4 w-4" /> },
    { id: 'providers', label: 'Providers', icon: <Building2 className="h-4 w-4" /> }
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

      {/* Hero Section - Made more responsive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-4">
                <GraduationCap className="h-4 w-4 text-emerald-800 mr-2" />
                <span className="text-sm font-medium text-emerald-800">Qualifications with Experience</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                T-Levels: <span className="text-emerald-600">Your Practical Route</span> to Career Success
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Combine classroom learning with real workplace experience. Gain the skills, knowledge, and practical experience that employers are looking for.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="#courses"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-emerald-600/20 inline-flex items-center justify-center"
                >
                  Explore Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#providers"
                  className="bg-white text-emerald-700 border border-emerald-200 px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                >
                  View Providers
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Image & Key Features - Right side */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
                {/* Main T-Level Image */}
                <div className="rounded-xl overflow-hidden mb-4 relative h-52">
                  <Image 
                    src="/images/t-levels-hero.jpg"
                    alt="Students exploring T-Level career opportunities"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Key Features Grid - Responsive layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      icon: <Award className="w-5 h-5" />,
                      title: '3 A-Level Equivalent',
                      description: 'UCAS points for university'
                    },
                    {
                      icon: <Briefcase className="w-5 h-5" />,
                      title: '315+ Hour Placement',
                      description: 'Real workplace experience'
                    },
                    {
                      icon: <GraduationCap className="w-5 h-5" />,
                      title: 'Balanced Learning',
                      description: '80% classroom, 20% work'
                    }
                  ].map((feature, index) => (
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
      {/* T-Level Overview Section */}
      <div id="overview" className="scroll-mt-20 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <GraduationCap className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">What Are T-Levels?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A New Way to Train for Your <span className="text-emerald-600">Future Career</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Designed with employers to give you the knowledge and experience needed for skilled employment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  T Levels are 2-year courses that follow GCSEs and are equivalent to 3 A Levels. These courses have been developed in collaboration with employers so that the content meets the needs of industry and prepares you for work.
                </p>
                <p>
                  T Levels offer students a mixture of classroom learning and 'on-the-job' experience during an industry placement of at least 315 hours (approximately 45 days).
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">How T-Levels Are Structured:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span><strong>Technical qualification</strong> - including core theory, concepts and skills for an industry area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span><strong>Industry placement</strong> - with an employer to develop practical and technical skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span><strong>Minimum standard in maths and English</strong> - if not already achieved</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="relative rounded-xl overflow-hidden h-48 sm:h-64 mb-6">
                <Image 
                  src="/images/t-level-classroom.jpg" 
                  alt="Students learning in a T-Level classroom environment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">After Completing a T-Level:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Skilled employment",
                  "Higher apprenticeships",
                  "University degrees",
                  "Higher technical qualifications"
                ].map((option, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-700">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section - Improved mobile layout */}
      <div id="courses" className="scroll-mt-20 py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <BookOpen className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Available Courses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Explore T-Level <span className="text-emerald-600">Courses</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Find the T-Level that matches your interests and career aspirations
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto">
              {tLevelCourses.map((course, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedCourse(course.title === selectedCourse ? null : course.title)}
                  className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
                    ${course.title === selectedCourse 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-white hover:bg-slate-100 text-slate-700'}`}
                >
                  {course.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {tLevelCourses.map((course, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg border ${course.title === selectedCourse ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-slate-200'} overflow-hidden transition-all duration-300 hover:shadow-xl`}
              >
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={course.image}
                    alt={`${course.title} T-Level course`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{course.title}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Specialisations:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.sectors.map((sector, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
                        {sector}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 mb-2 mt-4">Potential Career Paths:</h4>
                  <ul className="space-y-2">
                    {course.jobs.map((job, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{job}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={`#providers`}
                      className="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center justify-end"
                    >
                      View Local Providers
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="scroll-mt-20 py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Award className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Why Choose T-Levels?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits <span className="text-emerald-600">for Students</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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

      {/* Success Stories */}
      <div id="stories" className="scroll-mt-20 py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Users className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Student <span className="text-emerald-600">Success</span> Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                <p className="text-slate-700 text-lg mb-6 leading-relaxed relative pl-6 before:absolute before:left-0 before:top-2 before:w-1 before:h-12 before:bg-emerald-200">
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

      {/* Providers Section */}
      <div id="providers" className="scroll-mt-20 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-3">
              <Building2 className="h-4 w-4 text-emerald-800" />
              <span className="text-xs font-medium text-emerald-900">Find a Provider</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              T-Level Providers in <span className="text-emerald-600">South Yorkshire</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover colleges and educational institutions offering T-Levels in our region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{provider.name}</h3>
                    <p className="text-slate-500">{provider.location}</p>
                  </div>
                </div>
                <a 
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-base font-semibold focus:ring-4 focus:ring-emerald-300 focus:outline-none"
                >
                  View T-Level Courses
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application CTA */}
      <div className="bg-white py-16 mb-8 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to start your T-Level journey?
                </h2>
                <p className="mt-4 text-lg text-emerald-100 max-w-3xl">
                  Applications for T-Levels are now open. Contact your chosen provider or speak to a careers advisor to start your application.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="#providers"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
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