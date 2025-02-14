'use client'

import React, { useState } from 'react'
import { Search, MapPin, Building2, GraduationCap, ChevronRight, Filter, BookOpen, Calculator, Briefcase, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Course {
  id: number;
  title: string;
  provider: string;
  location: string;
  type: string;
  duration: string;
  startDate: string;
  description: string;
  fundingInfo: string;
  category: string;
}

// Placeholder course data - to be replaced with real data later
const COURSES: Course[] = [
  {
    id: 1,
    title: 'Level 3 Diploma in IT & Telecoms',
    provider: 'Aim2Learn',
    location: 'Sheffield',
    type: 'Professional',
    duration: '12 months',
    startDate: 'Flexible start dates',
    description: 'Comprehensive diploma covering IT and telecommunications, delivered face-to-face in Sheffield.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Digital & IT'
  },
  {
    id: 2,
    title: 'Bootcamp in Telecoms',
    provider: 'Aim2Learn',
    location: 'Sheffield',
    type: 'Bootcamp',
    duration: '16 weeks',
    startDate: 'Rolling admissions',
    description: 'Intensive telecommunications training bootcamp with hands-on practical experience.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Digital & IT'
  },
  {
    id: 3,
    title: 'Level 1 Award in Cyber Security',
    provider: 'B2W Group',
    location: 'Online - South Yorkshire',
    type: 'Professional',
    duration: 'Flexible',
    startDate: 'Start anytime',
    description: 'Introduction to cyber security fundamentals, delivered through online learning.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Digital & IT'
  },
  {
    id: 4,
    title: 'Level 1 Award in Website Design',
    provider: 'B2W Group',
    location: 'Online - South Yorkshire',
    type: 'Professional',
    duration: 'Flexible',
    startDate: 'Start anytime',
    description: 'Learn the basics of website design and development through online learning.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Digital & IT'
  },
  {
    id: 5,
    title: 'Level 1 Award Introduction to Programming',
    provider: 'B2W Group',
    location: 'Online - South Yorkshire',
    type: 'Professional',
    duration: 'Flexible',
    startDate: 'Start anytime',
    description: 'Begin your programming journey with this introductory course covering basic coding concepts.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Digital & IT'
  },
  {
    id: 6,
    title: 'Level 1 Extended Certificate in Employability',
    provider: 'B2W Group',
    location: 'Online - South Yorkshire',
    type: 'Professional',
    duration: 'Flexible',
    startDate: 'Start anytime',
    description: 'Develop essential employability skills and prepare for the workplace.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Employability'
  },
  {
    id: 7,
    title: 'My Ambition Programme',
    provider: 'Big Ambitions CIC',
    location: 'South Yorkshire',
    type: 'Professional',
    duration: 'Flexible',
    startDate: 'Rolling admissions',
    description: 'Specialised support and training programme focusing on mental health and employment skills.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Health & Wellbeing'
  },
  {
    id: 8,
    title: 'Adult Skills and Community Learning',
    provider: 'Barnsley Council',
    location: 'Barnsley',
    type: 'Vocational',
    duration: 'Various',
    startDate: 'Multiple start dates',
    description: 'Community-based learning programmes including Multiply numeracy courses.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Essential Skills'
  }
]

interface CourseCardProps {
  course: Course;
  onViewMore: (course: Course) => void;
}

const CourseCard = ({ course, onViewMore }: CourseCardProps) => {
  const router = useRouter()

  const handleViewMore = () => {
    router.push(`/courses/${course.id}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {course.type === 'Bootcamp' && (
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-600 text-white">
              Bootcamp
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
            {course.duration}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-600 text-white">
            {course.category}
          </span>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-lg border border-blue-100/50">
          <h3 className="text-xl font-bold text-gray-900">
            {course.title}
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="h-4 w-4" />
            <span className="text-sm">{course.provider}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{course.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{course.startDate}</span>
          </div>
        </div>
        <p className="text-gray-600 line-clamp-2">{course.description}</p>
        <button
          onClick={handleViewMore}
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          View Details
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

interface FundingOptionProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const FundingOption = ({ title, description, image, features }: FundingOptionProps) => (
  <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    </div>
    <div className="p-8">
      <div className="h-[4.5rem] mb-4">
        <h2 className="relative text-2xl font-bold text-gray-900">
          <span className="relative z-10 line-clamp-2 leading-tight block">{title}</span>
          <span 
            className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
            aria-hidden="true"
          ></span>
        </h2>
      </div>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
              <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            </div>
            <span className="text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  // Define categories
  const categories = ['All', 'Digital & IT', 'Employability', 'Health & Wellbeing', 'Essential Skills']

  const handleViewMore = (course: Course) => {
    // To be implemented - could open a modal or navigate to a detailed view
    console.log('View more:', course)
  }

  // Filter courses based on criteria
  const filteredCourses = COURSES.filter(course => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0)
    
    const matchesSearch = searchTerms.length === 0 || searchTerms.every(term =>
      course.title.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.category.toLowerCase().includes(term) ||
      course.provider.toLowerCase().includes(term)
    )
    
    const matchesLocation = selectedLocation === 'All' || course.location.includes(selectedLocation)
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesType = selectedType === 'All' || 
      (selectedType === 'Bootcamp' ? course.type === 'Bootcamp' : true)

    return matchesSearch && matchesLocation && matchesCategory && matchesType
  })

  return (
    <div className="bg-gray-100">
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
            <h1 className="text-3xl sm:text-3xl font-bold text-white mb-6">
              Funded Training<br />
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
            image="/images/bootcamps-image2.png"
            features={[
              "Industry-recognised qualifications",
              "Guaranteed job interview",
              "16-week intensive training"
            ]}
          />
          <FundingOption
            title="Free Courses for Jobs and Career Development"
            description="Level 3 qualifications (A-level equivalent) fully funded through the National Skills Fund."
            image="/images/FCFJ-1.jpg"
            features={[
              "Wide range of sectors",
              "Valuable qualifications",
              "Flexible learning options"
            ]}
          />
          <FundingOption
            title="Multiply: Boost Your Number Skills"
            description="Free numeracy courses to help you build confidence with numbers for work and daily life."
            image="/images/multiply.png"
            features={[
              "Flexible learning options",
              "Practical skills focus",
              "One-to-one support"
            ]}
          />
        </div>
      </div>

      {/* Eligibility Section */}
      <div id="eligibility" className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 text-emerald-600 mb-6">
                <div className="p-2 rounded-xl bg-emerald-50">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-base font-semibold tracking-wide uppercase">Check Your Eligibility</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                See if You Qualify for<br />Funded Training
              </h2>
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Basic Requirements:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xl text-gray-900">Aged 19 or over</span>
                      <p className="text-lg text-gray-600 mt-1">Must be at least 19 years old at the start of the course</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xl text-gray-900">South Yorkshire Resident</span>
                      <p className="text-lg text-gray-600 mt-1">Must live within the South Yorkshire region</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xl text-gray-900">Right to Work</span>
                      <p className="text-lg text-gray-600 mt-1">Must have the right to work in the UK</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                  <p className="text-lg text-emerald-800">
                    Additional criteria may apply depending on the programme. Contact our team for specific eligibility checks.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-emerald-600 text-white text-lg font-medium hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              >
                Contact Our Team
                <ChevronRight className="ml-2 h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/educator-hero.webp"
                alt="A diverse group of students collaborating in a modern learning environment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by course name, description, or category..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Category Buttons */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-3">Filter by Category:</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="sm:w-48">
                <p className="text-sm font-medium text-gray-500 mb-3">Course Type:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedType('All')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedType === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedType('Bootcamp')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedType === 'Bootcamp'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Bootcamps
                  </button>
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="sm:w-48">
                <p className="text-sm font-medium text-gray-500 mb-3">Location:</p>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="All">All Locations</option>
                  <option value="Sheffield">Sheffield</option>
                  <option value="Rotherham">Rotherham</option>
                  <option value="Doncaster">Doncaster</option>
                  <option value="Barnsley">Barnsley</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
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