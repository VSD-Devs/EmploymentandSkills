'use client'

import React, { useState, useMemo } from 'react'
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
    imageUrl: '/images/providers/longleypark.jpg',
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
    imageUrl: '/images/providers/rotherhamcollege.jpg',
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
    imageUrl: '/images/providers/thomasrotherham.jpg',
    courses: [
      'Sales, Marketing and Procurement',
      'T Level Technical Qualification in Education and Early Years - Level 3'
    ]
  },
  {
    name: 'UTC Sheffield City Centre',
    website: 'utcsheffield.org.uk',
    location: 'Sheffield',
    imageUrl: '/images/providers/sheffieldutc.jpg',
    courses: [
      'Design and Development for Engineering and Manufacturing (Mechanical Engineering)'
    ]
  },
  {
    name: 'Doncaster College',
    website: 'don.ac.uk',
    location: 'Doncaster',
    imageUrl: '/images/providers/doncastercollege.jpg',
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [expandedProviders, setExpandedProviders] = useState<string[]>([])

  // Get unique locations from providers
  const locations = useMemo(() => {
    const locs = providers.map(p => p.location)
    return Array.from(new Set(locs))
  }, [])

  // Filtered providers based on selections
  const filteredProviders = useMemo(() => {
    return providers.filter(provider => {
      const matchesCategory = selectedCategory 
        ? categories.find(cat => cat.name === selectedCategory)?.providers.includes(provider.name) 
        : true
      
      const matchesLocation = selectedLocation
        ? provider.location === selectedLocation
        : true

      const matchesSearch = searchTerm
        ? provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          provider.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
        : true

      return matchesCategory && matchesLocation && matchesSearch
    })
  }, [selectedCategory, selectedLocation, searchTerm])

  const toggleProviderCourses = (providerName: string) => {
    setExpandedProviders(prev => 
      prev.includes(providerName)
        ? prev.filter(name => name !== providerName)
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
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600">
                  T-Levels are new qualifications for students aged 16 to 19 who have completed their GCSEs. They are equivalent to 3 A-Levels and combine classroom theory with practical learning and industry experience.
                </p>
                
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                    A T-Level course includes:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Technical knowledge and practical skills</p>
                        <p className="text-sm text-gray-600">Specific to your chosen industry</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Industry placement</p>
                        <p className="text-sm text-gray-600">At least 45 days of real workplace experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Core skills</p>
                        <p className="text-sm text-gray-600">English, maths, and digital skills</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Workplace skills</p>
                        <p className="text-sm text-gray-600">Essential skills for career success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/t-levels-overview.jpg"
                alt="Students in a technical learning environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Directory Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find T-Level Courses
            </h2>
            <p className="text-lg text-gray-600">
              Explore available T-Level courses across South Yorkshire
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Subject Area
              </label>
              <select
                id="category"
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">All Subjects</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                id="location"
                value={selectedLocation || ''}
                onChange={(e) => setSelectedLocation(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="search"
                  placeholder="Search courses or providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Provider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map(provider => {
              const isExpanded = expandedProviders.includes(provider.name)
              
              return (
                <div key={provider.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={provider.imageUrl}
                      alt={provider.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{provider.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/90">
                        <MapPin className="h-4 w-4" />
                        {provider.location}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <button
                      onClick={() => toggleProviderCourses(provider.name)}
                      className="w-full text-left"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-between">
                        Available Courses
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`} />
                      </h4>
                    </button>
                    
                    <div className="space-y-3 flex-1">
                      {provider.courses.slice(0, isExpanded ? provider.courses.length : 3).map(course => (
                        <div key={course} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{course}</span>
                        </div>
                      ))}
                      
                      {!isExpanded && provider.courses.length > 3 && (
                        <button
                          onClick={() => toggleProviderCourses(provider.name)}
                          className="text-sm text-emerald-600 hover:text-emerald-700"
                        >
                          Show all {provider.courses.length} courses
                        </button>
                      )}
                    </div>
                    
                    <a
                      href={`https://www.${provider.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-md hover:bg-emerald-100 transition-colors"
                    >
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              )
            })}

            {/* No Results */}
            {filteredProviders.length === 0 && (
              <div className="col-span-full text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  No matches found for your search
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TLevelsPage 