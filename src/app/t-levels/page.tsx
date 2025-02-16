'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, School, ChevronDown, ChevronRight } from 'lucide-react'

// Types
interface TLevelProvider {
  name: string
  website: string
  courses: string[]
  location: string
  imageUrl: string
}

interface TLevelCategory {
  name: string
  description: string
  providers: string[]
}

// Sample data
const providers: TLevelProvider[] = [
  {
    name: 'Barnsley College',
    website: 'barnsley.ac.uk',
    location: 'Barnsley',
    imageUrl: '/images/providers/barnsley-college.webp',
    courses: [
      'Accounting',
      'Animal Care and Management',
      'Legal Services',
      'Management and Administration',
      'Construction',
      'Computing',
      'Education and Early Years',
      'Engineering',
      'Fashion and Textiles',
      'Health and Social Care',
      'Motor Vehicle',
      'Media, Broadcast and Production'
    ]
  },
  {
    name: 'The Sheffield College',
    website: 'sheffcol.ac.uk',
    location: 'Sheffield',
    imageUrl: '/images/providers/sheffield-college.webp',
    courses: [
      'Animal Care',
      'Building Technologies',
      'Business',
      'Childcare',
      'Engineering',
      'Fashion and Textiles',
      'Health and Social Care',
      'IT and Computing',
      'Science'
    ]
  },
  {
    name: 'Longley Park Sixth Form',
    website: 'longleypark.ac.uk',
    location: 'Sheffield',
    imageUrl: '/images/providers/longley-park.jpg',
    courses: [
      'Education and Early Years',
      'Management and Administration – Team Leadership',
      'Digital Support Services – Cyber Security'
    ]
  },
  {
    name: 'RNN Group',
    website: 'rnngroup.co.uk',
    location: 'Rotherham',
    imageUrl: '/images/providers/rnn-group.jpg',
    courses: [
      'Animal Care',
      'Business and Administration',
      'Construction',
      'Digital',
      'Education and Childcare',
      'Engineering and Manufacturing',
      'Health'
    ]
  },
  {
    name: 'Thomas Rotherham College (TRC)',
    website: 'sheffieldprogress.co.uk',
    location: 'Rotherham',
    imageUrl: '/images/providers/trc.jpg',
    courses: [
      'Sales, Marketing and Procurement'
    ]
  },
  {
    name: 'UTC Sheffield City Centre',
    website: 'utcsheffield.org.uk',
    location: 'Sheffield',
    imageUrl: '/images/providers/utc-sheffield.jpg',
    courses: [
      'Design and Development for Engineering and Manufacturing (Mechanical Engineering)'
    ]
  },
  {
    name: 'Doncaster College',
    website: 'don.ac.uk',
    location: 'Doncaster',
    imageUrl: '/images/providers/doncaster-college.jpg',
    courses: [
      'Building Services Engineering',
      'Digital Production, Design and Development',
      'Education and Childcare',
      'Engineering and Manufacturing',
      'Health and Science',
      'Management and Administration'
    ]
  }
]

const categories: TLevelCategory[] = [
  {
    name: 'Digital & Technology',
    description: 'Cyber security and digital infrastructure',
    providers: ['Barnsley College', 'The Sheffield College', 'Longley Park Sixth Form', 'Doncaster College']
  },
  {
    name: 'Construction & Engineering',
    description: 'Construction, engineering, manufacturing, and building services',
    providers: ['Barnsley College', 'The Sheffield College', 'RNN Group', 'UTC Sheffield City Centre', 'Doncaster College']
  },
  {
    name: 'Business & Administration',
    description: 'Business management, accounting, and administration',
    providers: ['Barnsley College', 'RNN Group', 'Thomas Rotherham College', 'Doncaster College']
  },
  {
    name: 'Health & Education',
    description: 'Healthcare, childcare, and education',
    providers: ['Barnsley College', 'The Sheffield College', 'Longley Park Sixth Form', 'RNN Group', 'Doncaster College']
  },
  {
    name: 'Creative & Design',
    description: 'Media, fashion, textiles, and creative production',
    providers: ['Barnsley College', 'The Sheffield College']
  }
]

const TLevelsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [expandedProviders, setExpandedProviders] = useState<string[]>([])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    )
  }

  const toggleProvider = (providerName: string) => {
    setExpandedProviders(prev => 
      prev.includes(providerName) 
        ? prev.filter(p => p !== providerName)
        : [...prev, providerName]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs Overlay */}
      <nav className="absolute top-20 left-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 bg-white/80 rounded-lg p-2 inline-block">
            <li>
              <Link 
                href="/" 
                className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </li>
            <li>
              <Link 
                href="/t-levels" 
                className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors"
              >
                T-Levels
              </Link>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/t-levels-hero.jpg"
            alt="Students engaging in technical education and hands-on learning"
            fill
            className="object-cover object-center object-[center_25%] brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Technical Education</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              T-Levels in South Yorkshire
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Discover industry-focused qualifications that combine classroom learning with real workplace experience
            </p>
          </div>
        </div>
      </div>

      {/* What are T-Levels Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">Technical Education</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What are T-Levels?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  T-Levels are new qualifications for students aged 16 to 19 who have completed their GCSEs. They are equivalent to 3 A-Levels and combine classroom theory with practical learning and industry experience.
                </p>
                <p>
                  A T-Level course includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Technical knowledge and practical skills specific to your chosen industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>An industry placement of at least 45 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Relevant English, maths and digital skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Common workplace skills</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/t-levels-overview.jpg"
                alt="Students in a technical learning environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore T-Level Subjects
            </h2>
            <p className="text-lg text-gray-600">
              Choose a subject area to see available courses and providers
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search subjects, courses or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-md"
              />
            </div>
          </div>

          {/* Subject Categories */}
          <div className="space-y-4">
            {categories
              .filter(category =>
                searchTerm === '' ||
                category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                providers.some(provider =>
                  category.providers.includes(provider.name) &&
                  (provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    provider.courses.some(course =>
                      course.toLowerCase().includes(searchTerm.toLowerCase())
                    ))
                )
              )
              .map((category) => {
                const categoryProviders = providers.filter(provider =>
                  category.providers.includes(provider.name)
                )

                return (
                  <div
                    key={category.name}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                  >
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <GraduationCap className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-900">
                            {category.name}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {category.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <School className="h-4 w-4" />
                            <span>{categoryProviders.length} providers</span>
                            <span className="mx-2">•</span>
                            <span>
                              {categoryProviders.reduce((acc, provider) => 
                                acc + provider.courses.length, 0
                              )} courses
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedCategories.includes(category.name) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Expanded Content */}
                    {expandedCategories.includes(category.name) && (
                      <div className="border-t border-gray-200">
                        <div className="divide-y divide-gray-200">
                          {categoryProviders.map((provider) => (
                            <div key={provider.name} className="bg-gray-50">
                              <button
                                onClick={() => toggleProvider(provider.name)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100/50 transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-white">
                                    <Image
                                      src={provider.imageUrl}
                                      alt={provider.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="text-left">
                                    <h4 className="font-medium text-gray-900">
                                      {provider.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                      <MapPin className="h-4 w-4" />
                                      {provider.location}
                                    </div>
                                  </div>
                                </div>
                                <ChevronDown
                                  className={`h-5 w-5 text-gray-400 transition-transform ${
                                    expandedProviders.includes(provider.name) ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {/* Provider Courses */}
                              {expandedProviders.includes(provider.name) && (
                                <div className="px-6 pb-4">
                                  <div className="space-y-3 mt-2">
                                    {provider.courses
                                      .filter(course =>
                                        searchTerm === '' ||
                                        course.toLowerCase().includes(searchTerm.toLowerCase())
                                      )
                                      .map(course => (
                                        <div
                                          key={course}
                                          className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg border border-gray-200"
                                        >
                                          <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                            <div>
                                              <h5 className="font-medium text-gray-900">
                                                {course}
                                              </h5>
                                              <p className="text-sm text-gray-500 mt-1">
                                                Starting September 2024 • 2 Years
                                              </p>
                                            </div>
                                          </div>
                                          <a
                                            href={`https://www.${provider.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 text-sm bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors"
                                          >
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                          </a>
                                        </div>
                                      ))}
                                    {provider.courses.length === 0 && (
                                      <p className="text-gray-500 text-sm">No courses available for this provider.</p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
          </div>

          {/* No Results */}
          {categories.filter(category =>
            searchTerm === '' ||
            category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            providers.some(provider =>
              category.providers.includes(provider.name) &&
              (provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.courses.some(course =>
                  course.toLowerCase().includes(searchTerm.toLowerCase())
                ))
            )
          ).length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                No matches found for your search
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TLevelsPage 