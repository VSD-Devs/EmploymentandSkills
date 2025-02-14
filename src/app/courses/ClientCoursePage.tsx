'use client'

import React, { useState } from 'react'
import { Search, MapPin, Building2, GraduationCap, ChevronRight, Filter, BookOpen, Calculator, Briefcase, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Course {
  COURSE_NAME: string;
  WHO_THIS_COURSE_IS_FOR: string;
  LOCATION_NAME: string;
  COURSE_URL: string;
  UPDATED_DATE: string;
  COURSE_TYPE: string;
}

interface CourseCardProps {
  course: Course;
  onViewMore: (course: Course) => void;
}

// Helper function to extract level from course name
const extractLevel = (courseName: string): string | null => {
  const levelMatch = courseName.match(/Level\s*(\d+)/i)
  return levelMatch ? levelMatch[1] : null
}

// Helper function to format course type
const formatCourseType = (type: string): string => {
  switch (type.toLowerCase()) {
    case 'bootcamp':
    case 'skills bootcamp':
      return 'Bootcamp'
    case 'free courses for jobs':
      return 'Free Course'
    default:
      return type
  }
}

const CourseCard = ({ course, onViewMore }: CourseCardProps) => {
  const router = useRouter()
  const level = extractLevel(course.COURSE_NAME)
  const courseType = formatCourseType(course.COURSE_TYPE || 'Free Course')

  const handleViewMore = () => {
    if (course.COURSE_URL) {
      window.open(course.COURSE_URL, '_blank')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {courseType === 'Bootcamp' && (
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-600 text-white">
              Bootcamp
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
            {courseType}
          </span>
          {level && (
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-600 text-white">
              Level {level}
            </span>
          )}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-lg border border-blue-100/50">
          <h3 className="text-xl font-bold text-gray-900">
            {course.COURSE_NAME}
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="h-4 w-4" />
            <span className="text-sm">{course.LOCATION_NAME}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Start date: {new Date(course.UPDATED_DATE.split('/').reverse().join('-')).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <BookOpen className="h-4 w-4" />
          <span className="text-sm line-clamp-2">
            {course.WHO_THIS_COURSE_IS_FOR}
          </span>
        </div>
        <button
          onClick={handleViewMore}
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          View Course Details
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

interface ClientCoursePageProps {
  courses: Course[];
}

const ClientCoursePage = ({ courses }: ClientCoursePageProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 9

  // Extract unique locations from courses
  const locations = ['All', ...new Set(courses.map(course => course.LOCATION_NAME))]
  
  // Extract unique course types from courses, filtering out null values
  const courseTypes = ['All', ...new Set(courses.map(course => course.COURSE_TYPE).filter(Boolean))]

  const handleViewMore = (course: Course) => {
    if (course.COURSE_URL) {
      window.open(course.COURSE_URL, '_blank')
    }
  }

  // Filter courses based on criteria
  const filteredCourses = courses.filter(course => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0)
    
    const matchesSearch = searchTerms.length === 0 || searchTerms.every(term =>
      course.COURSE_NAME.toLowerCase().includes(term) ||
      course.LOCATION_NAME.toLowerCase().includes(term) ||
      (course.COURSE_TYPE?.toLowerCase().includes(term) || false)
    )
    
    const matchesLocation = selectedLocation === 'All' || course.LOCATION_NAME === selectedLocation
    const matchesType = selectedType === 'All' || course.COURSE_TYPE === selectedType

    return matchesSearch && matchesLocation && matchesType
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const startIndex = (currentPage - 1) * coursesPerPage
  const endIndex = startIndex + coursesPerPage
  const currentCourses = filteredCourses.slice(startIndex, endIndex)

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedLocation, selectedType])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Smooth scroll to courses section
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5 // Show at most 5 page numbers

    if (totalPages <= maxVisiblePages) {
      // If total pages is less than max visible, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always show first page
      pageNumbers.push(1)

      // Calculate range around current page
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust range if at edges
      if (currentPage <= 2) {
        end = 4
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis if needed
      if (start > 2) {
        pageNumbers.push('...')
      }

      // Add page numbers
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pageNumbers.push('...')
      }

      // Always show last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

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
          <p className="text-sm text-gray-500 mt-2">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredCourses.length)} of {filteredCourses.length} courses
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by course name or location..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Course Type Buttons */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-3">Course Type:</p>
                <div className="flex flex-wrap gap-2">
                  {courseTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="sm:w-72">
                <p className="text-sm font-medium text-gray-500 mb-3">Location:</p>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
            <CourseCard
              key={course.COURSE_NAME + course.LOCATION_NAME}
              course={course}
              onViewMore={handleViewMore}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {getPageNumbers().map((pageNumber, index) => (
                  <React.Fragment key={index}>
                    {pageNumber === '...' ? (
                      <span className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(pageNumber as number)}
                        className={`px-3 py-2 rounded-lg border ${
                          currentPage === pageNumber
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                        aria-current={currentPage === pageNumber ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                Next
              </button>
            </nav>
          </div>
        )}

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No courses found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClientCoursePage 