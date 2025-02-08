'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, Quote, ExternalLink, BookOpen, Users } from 'lucide-react'

// Types
interface Apprenticeship {
  id: string
  title: string
  company: string
  location: string
  level: string
  duration: string
  salary: string
  description: string
  requirements: string[]
  applicationDeadline: string
  category: string
  imageUrl: string
}

interface SuccessStory {
  id: string
  name: string
  role: string
  company: string
  quote: string
  imageUrl: string
}

// Sample data
const apprenticeshipProcess = [
  {
    title: 'Search for an Apprenticeship',
    description: 'Browse through the available apprenticeships and find the one that matches your interests and career goals.',
    icon: Search
  },
  {
    title: 'Apply',
    description: 'Submit your application through our simple online process. We will guide you every step of the way.',
    icon: Briefcase
  },
  {
    title: 'Interview',
    description: 'Meet with potential employers and discuss your future role. We will help you prepare for your interviews.',
    icon: Building2
  },
  {
    title: 'Start Learning',
    description: 'Begin your apprenticeship journey, combining practical work experience with structured learning.',
    icon: GraduationCap
  }
]

const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    role: 'Digital Marketing Manager',
    company: 'Yorkshire Digital Solutions',
    quote: 'Starting as an apprentice was the best decision I made. I gained real-world experience while studying, and now I manage my own team.',
    imageUrl: '/images/success-story-1.jpg'
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Software Developer',
    company: 'Tech Innovators Ltd',
    quote: 'The apprenticeship programme gave me hands-on coding experience from day one. The support from both my employer and training provider was brilliant.',
    imageUrl: '/images/success-story-2.jpg'
  },
  {
    id: '3',
    name: 'Emily Roberts',
    role: 'Engineering Technician',
    company: 'Yorkshire Manufacturing',
    quote: 'I chose an apprenticeship over university and have never looked back. I am now fully qualified and helping to train new apprentices.',
    imageUrl: '/images/success-story-3.jpg'
  }
]

// Apprenticeship listings data remains the same as before
const apprenticeships: Apprenticeship[] = [
  {
    id: '1',
    title: 'Digital Marketing Apprentice',
    company: 'Yorkshire Digital Solutions',
    location: 'Leeds',
    level: 'Level 3',
    duration: '18 months',
    salary: '£18,000 per year',
    description: 'Join our dynamic marketing team and learn the latest digital marketing techniques whilst earning a qualification.',
    requirements: [
      'GCSEs in English and Maths (Grade 4/C or above)',
      'Strong communication skills',
      'Creative mindset'
    ],
    applicationDeadline: '30 June 2024',
    category: 'Digital',
    imageUrl: '/images/digital-marketing.jpg'
  },
  {
    id: '2',
    title: 'Software Development Apprentice',
    company: 'Tech Innovators Ltd',
    location: 'Sheffield',
    level: 'Level 4',
    duration: '24 months',
    salary: '£20,000 per year',
    description: 'Learn to code and develop software solutions while working on real projects with our experienced development team.',
    requirements: [
      'A-Level or equivalent in IT/Computing',
      'Problem-solving abilities',
      'Team player mindset'
    ],
    applicationDeadline: '15 July 2024',
    category: 'Technology',
    imageUrl: '/images/software-dev.jpg'
  },
  // Add more apprenticeships as needed
]

const categories = [
  'All',
  'Digital',
  'Technology',
  'Engineering',
  'Business',
  'Healthcare'
]

const ApprenticeshipPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredApprenticeships = apprenticeships.filter(apprenticeship => {
    const matchesSearch = apprenticeship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenticeship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenticeship.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || apprenticeship.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/apprenticeship-hero.jpg"
            alt="A skilled apprentice working with industrial brewing equipment, showcasing hands-on vocational training"
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
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Apprenticeships</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Apprenticeships in South Yorkshire
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Discover apprenticeship opportunities across South Yorkshire and get the support you need to succeed
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instituteforapprenticeships.org/apprenticeship-standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
              >
                Browse Standards
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="#current-vacancies"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                View Vacancies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative -mt-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">20%</p>
                  <p className="text-sm text-gray-600">Off-the-job Training</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Dedicated time for learning and development during work hours</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">12-48</p>
                  <p className="text-sm text-gray-600">Months Duration</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Depending on the level and sector of your apprenticeship</p>
            </div>
          </div>
        </div>
      </div>

      {/* South Yorkshire Apprenticeship Hub Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium tracking-wide uppercase">Your Local Support</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                South Yorkshire Apprenticeship Hub
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  We're here to help you navigate your apprenticeship journey. Our dedicated team provides:
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>One-to-one support and guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Help finding the right apprenticeship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Application and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Connections with local employers</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                  >
                    Get Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/apprenticeship-hub.png"
                alt="An apprentice receiving support and guidance from a mentor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Process Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Apprenticeship Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your path to success starts here. We will support you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {apprenticeshipProcess.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Vacancies Section */}
      <div id="current-vacancies" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Latest Opportunities</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Vacancies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect apprenticeship opportunity in South Yorkshire
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by title, company, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
                  aria-label="Search apprenticeships"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Vacancies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApprenticeships.map((apprenticeship) => (
              <div
                key={apprenticeship.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-48">
                  <Image
                    src={apprenticeship.imageUrl}
                    alt={`${apprenticeship.title} working environment`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm font-medium mb-1">
                      <GraduationCap className="h-4 w-4" />
                      {apprenticeship.level}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {apprenticeship.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="h-4 w-4" />
                      {apprenticeship.company}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {apprenticeship.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      {apprenticeship.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {apprenticeship.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-medium">
                      £{apprenticeship.salary}
                    </span>
                    <Link
                      href={`/apprenticeships/${apprenticeship.id}`}
                      className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredApprenticeships.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <Search className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <p className="text-gray-900 font-medium mb-2">
                No apprenticeships found
              </p>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse all opportunities
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Apprentices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how apprenticeships have transformed careers across South Yorkshire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={story.imageUrl}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                    <p className="text-white/90 text-sm">{story.role}</p>
                    <p className="text-white/80 text-sm">{story.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
                  <p className="text-gray-600 italic leading-relaxed">
                    {story.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Wall */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-violet-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-violet-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Apprenticeship Life</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Life as an Apprentice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what it's like to be an apprentice in South Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={`/images/apprentice-life-${index}.jpg`}
                  alt={`Apprenticeship life image ${index}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprenticeshipPage 