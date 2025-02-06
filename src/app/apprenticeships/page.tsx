'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, Quote } from 'lucide-react'

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
    title: 'Find Your Path',
    description: 'Browse through our available apprenticeships and find the one that matches your interests and career goals.',
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
      <div className="relative bg-[#111827] py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/apprenticeship-hero.jpg"
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
              Apprenticeships
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              South Yorkshire's apprenticeship opportunities
            </p>
          </div>
        </div>
      </div>

      {/* What is an Apprenticeship Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is an Apprenticeship?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  An apprenticeship is a real job where you learn, gain experience and get paid. You're an employee with a contract of employment and holiday leave.
                </p>
                <p>
                  By the end of an apprenticeship, you'll have gained the skills and knowledge needed to either succeed in your chosen career or progress onto the next apprenticeship level.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Earn a real wage while you learn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Get paid holidays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Receive training and gain qualifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Learn job-specific skills</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/apprentice-working.jpg"
                alt="An apprentice working with their mentor"
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

      {/* Success Stories Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from former apprentices who have built successful careers through our programme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-50 p-6 rounded-xl">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={story.imageUrl}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <Quote className="h-8 w-8 text-indigo-600 mb-4" />
                <p className="text-gray-600 mb-4">{story.quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{story.name}</p>
                  <p className="text-gray-600">{story.role}</p>
                  <p className="text-gray-600">{story.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Vacancies Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Vacancies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect apprenticeship opportunity in Yorkshire.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by title, company, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-50'
                  }`}
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
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={apprenticeship.imageUrl}
                    alt={apprenticeship.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-indigo-600 text-sm font-medium mb-2">
                    <GraduationCap className="h-4 w-4" />
                    {apprenticeship.level}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {apprenticeship.title}
                  </h3>
                  <div className="space-y-2 mb-4">
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
                  <p className="text-gray-600 mb-4">
                    {apprenticeship.description}
                  </p>
                  <Link
                    href={`/apprenticeships/${apprenticeship.id}`}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredApprenticeships.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No apprenticeships found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Media Wall */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apprenticeship Life
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what it's like to be an apprentice in Yorkshire.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={`/images/apprentice-life-${index}.jpg`}
                  alt={`Apprenticeship life image ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprenticeshipPage 