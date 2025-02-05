'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, School } from 'lucide-react'

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
  }
]

const categories: TLevelCategory[] = [
  {
    name: 'Digital & Technology',
    description: 'Develop skills in software development, cyber security, and digital infrastructure.',
    providers: ['Barnsley College', 'The Sheffield College', 'Longley Park Sixth Form']
  },
  {
    name: 'Construction & Engineering',
    description: 'Learn practical skills in construction, engineering, and manufacturing.',
    providers: ['Barnsley College', 'The Sheffield College', 'RNN Group', 'UTC Sheffield City Centre']
  },
  {
    name: 'Business & Administration',
    description: 'Gain expertise in business management, accounting, and administration.',
    providers: ['Barnsley College', 'RNN Group', 'Thomas Rotherham College']
  },
  {
    name: 'Health & Education',
    description: 'Prepare for careers in healthcare, childcare, and education.',
    providers: ['Barnsley College', 'The Sheffield College', 'Longley Park Sixth Form', 'RNN Group']
  }
]

const TLevelsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())) ||
      provider.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || 
      categories.find(cat => cat.name === selectedCategory)?.providers.includes(provider.name)
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/t-levels-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              T-Levels in South Yorkshire
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Discover industry-focused qualifications that combine classroom learning with real workplace experience
            </p>
          </div>
        </div>
      </div>

      {/* What are T-Levels Section */}
      <div className="bg-white py-16 sm:py-24">
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
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              T-Level Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore different T-Level pathways available in South Yorkshire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-xl text-left transition-all ${
                  selectedCategory === category.name
                    ? 'bg-emerald-50 border-2 border-emerald-500 shadow-lg'
                    : 'bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-md'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-gray-500">
                  {category.providers.length} providers
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Providers Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses, colleges or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['All', ...categories.map(c => c.name)].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Provider Listings */}
          <div className="space-y-8">
            {filteredProviders.map((provider) => (
              <div
                key={provider.name}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* College Info */}
                  <div className="lg:col-span-4 xl:col-span-3 bg-gray-50 p-6">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                      <Image
                        src={provider.imageUrl}
                        alt={provider.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {provider.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="h-4 w-4" />
                      {provider.location}
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-200 mb-6">
                      <div>
                        <div className="text-2xl font-bold text-emerald-600">{provider.courses.length}</div>
                        <div className="text-sm text-gray-600">Courses</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-600">2024</div>
                        <div className="text-sm text-gray-600">Start Date</div>
                      </div>
                    </div>
                    <a
                      href={`https://www.${provider.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  {/* Course Offerings */}
                  <div className="lg:col-span-8 xl:col-span-9 p-6 lg:p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {categories
                        .filter(cat => cat.providers.includes(provider.name))
                        .map(cat => (
                          <span 
                            key={cat.name}
                            className="px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-700 border border-emerald-100"
                          >
                            {cat.name}
                          </span>
                        ))
                      }
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {provider.courses.map((course) => (
                        <div 
                          key={course}
                          className="p-4 rounded-lg bg-gray-50 border border-gray-100"
                        >
                          <div className="flex items-start gap-3">
                            <GraduationCap className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-gray-900">{course}</p>
                              <p className="text-sm text-gray-500 mt-1">
                                Starting September 2024
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                No providers found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TLevelsPage 