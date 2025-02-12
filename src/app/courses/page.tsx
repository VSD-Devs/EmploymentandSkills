'use client'

import React, { useState } from 'react'
import { Search, MapPin, Building2, GraduationCap, ChevronRight, Filter, BookOpen, Calculator, Briefcase, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Placeholder course data - to be replaced with real data later
const COURSES = [
  {
    id: 1,
    title: 'Digital Skills Bootcamp',
    provider: 'Sheffield Digital Academy',
    location: 'Sheffield',
    type: 'Bootcamp',
    duration: '16 weeks',
    startDate: 'Flexible start dates',
    description: 'Intensive training in web development, covering HTML, CSS, JavaScript and React.',
    fundingInfo: 'Fully funded for eligible participants',
    image: '/images/digital-skills.jpg'
  },
  {
    id: 2,
    title: 'Advanced Manufacturing Course',
    provider: 'Rotherham Training Centre',
    location: 'Rotherham',
    type: 'Vocational',
    duration: '12 weeks',
    startDate: 'Monthly intakes',
    description: 'Hands-on training in advanced manufacturing techniques and Industry 4.0 technologies.',
    fundingInfo: 'Fully funded for eligible participants',
    image: '/images/manufacturing.jpg'
  },
  {
    id: 3,
    title: 'Healthcare Skills Programme',
    provider: 'Doncaster Health Academy',
    location: 'Doncaster',
    type: 'Professional',
    duration: '8 weeks',
    startDate: 'Rolling admissions',
    description: 'Essential skills training for careers in healthcare and social care sectors.',
    fundingInfo: 'Fully funded for eligible participants',
    image: '/images/healthcare.jpg'
  }
]

const CourseCard = ({ course, onViewMore }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/90 text-white backdrop-blur-sm">
              {course.type}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/90 text-white backdrop-blur-sm">
              {course.duration}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Building2 className="h-4 w-4" />
          <span className="text-sm">{course.provider}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{course.location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <button
          onClick={() => onViewMore(course)}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          View Details
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

const FundingOption = ({ title, description, icon: Icon, image, features }) => (
  <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
    <div className="relative h-40">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <ChevronRight className="h-3 w-3 text-blue-600" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedProvider, setSelectedProvider] = useState('All')

  const handleViewMore = (course) => {
    // To be implemented - could open a modal or navigate to a detailed view
    console.log('View more:', course)
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24 min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/education.webp"
            alt="Training and courses in South Yorkshire"
            fill
            className="object-cover object-center brightness-50"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-blue-900/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-blue-300 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Transform Your Future with<br />Funded Training
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Access free courses, bootcamps, and qualifications to advance your career in South Yorkshire's growing industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#courses"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Browse Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#eligibility"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Check Eligibility
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <FundingOption
            title="Skills Bootcamps"
            description="Intensive, flexible courses of up to 16 weeks, designed to give you job-ready skills."
            icon={Briefcase}
            image="/images/bootcamp.jpg"
            features={[
              "Industry-recognised qualifications",
              "Guaranteed job interview",
              "16-week intensive training"
            ]}
          />
          <FundingOption
            title="Free Courses for Jobs"
            description="Level 3 qualifications (A-level equivalent) fully funded through the National Skills Fund."
            icon={BookOpen}
            image="/images/classroom.jpg"
            features={[
              "Wide range of sectors",
              "Valuable qualifications",
              "Flexible learning options"
            ]}
          />
          <FundingOption
            title="Multiply"
            description="Free numeracy courses to help you build confidence with numbers for work and daily life."
            icon={Calculator}
            image="/images/numeracy.jpg"
            features={[
              "Flexible learning options",
              "Practical skills focus",
              "One-to-one support"
            ]}
          />
        </div>
      </div>

      {/* Eligibility Section */}
      <div id="eligibility" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                <div className="p-1.5 rounded-lg bg-blue-50">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">Eligibility</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Check Your Eligibility for Funded Training
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Requirements:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Aged 19 or over</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Living in South Yorkshire</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Right to work in the UK</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Additional criteria may apply depending on the programme. Contact our team for specific eligibility checks.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Contact Our Team
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/student-learning.jpg"
                alt="Student learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our range of fully funded courses and find the perfect opportunity to develop your skills.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[160px]"
              >
                <option value="All">All Types</option>
                <option value="Bootcamp">Bootcamp</option>
                <option value="Vocational">Vocational</option>
                <option value="Professional">Professional</option>
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[160px]"
              >
                <option value="All">All Locations</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Rotherham">Rotherham</option>
                <option value="Doncaster">Doncaster</option>
                <option value="Barnsley">Barnsley</option>
              </select>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[160px]"
              >
                <option value="All">All Providers</option>
                <option value="Sheffield Digital Academy">Sheffield Digital Academy</option>
                <option value="Rotherham Training Centre">Rotherham Training Centre</option>
                <option value="Doncaster Health Academy">Doncaster Health Academy</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewMore={handleViewMore}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesPage 