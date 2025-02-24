'use client'

import React, { useState } from 'react'
import { Building2, ChevronRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Course, getProviderInfo, getCategories, getLevels, CourseFilters } from '@/lib/utils'

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const provider = getProviderInfo(course.provider)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col">
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-600 text-white">
            {course.fundingModel}
          </span>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-3 md:p-4 rounded-md border border-blue-100/50 mt-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            {course.title}
          </h3>
        </div>
        <div className="space-y-3 mt-4 flex-grow">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="h-4 w-4" />
            <span className="text-sm">{provider.name}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{provider.address}</span>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href={`/funded-training-for-businesses/${course.slug}`}
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
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
  <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
    <div className="relative h-40 md:h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        style={{ objectPosition: 'top left' }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    </div>
    <div className="p-4 md:p-6">
      <div className="h-[3.5rem] md:h-[4.5rem] mb-3">
        <h2 className="relative text-xl md:text-2xl font-bold text-gray-900">
          <span className="relative z-10 line-clamp-2 leading-tight block">{title}</span>
          <span 
            className="absolute inset-0 -mx-1 -my-0.5 md:-mx-2 md:-my-1 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
            aria-hidden="true"
          ></span>
        </h2>
      </div>
      <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed min-h-[3rem] md:min-h-[4rem]">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
              <ChevronRight className="h-4 w-4 text-blue-600" aria-hidden="true" />
            </div>
            <span className="text-lg">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
      >
        Learn More
        <ChevronRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
)

const Pagination = ({ currentPage, totalPages, onPageChange }: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const getPageNumbers = (current: number, total: number) => {
    const range: number[] = [];
    const delta = 2;
    
    range.push(1);
    for (let i = current - delta; i <= current + delta; i++) {
      if (i > 1 && i < total) {
        range.push(i);
      }
    }
    if (total > 1) range.push(total);
    
    return range;
  };

  return (
    <div className="flex items-center gap-2">
      {getPageNumbers(currentPage, totalPages).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

const FundedTrainingForAdultsPage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // State for filters and pagination
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [selectedProvider, setSelectedProvider] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalCourses, setTotalCourses] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isSearching, setIsSearching] = useState(false)

  // Get categories and levels
  const categories = getCategories()
  const levels = getLevels()

  // Fetch courses on mount
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/courses')
        const data = await response.json()
        setCourses(data)
        setFilteredCourses(data.slice(0, 3))
        setTotalCourses(data.length)
        setTotalPages(Math.ceil(data.length / 3))
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Debounce search input
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load courses with filters
  React.useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true)
        const filters: CourseFilters = {
          provider: selectedProvider,
          category: selectedCategory,
          level: selectedLevel,
          search: debouncedSearch
        }
        
        const filtered = filterCourses(courses, filters);
        setFilteredCourses(filtered.slice(0, 3)); // Only show first 3 courses
        setTotalCourses(filtered.length);
        setTotalPages(Math.ceil(filtered.length / 3)); // Update pagination
        setCurrentPage(1);
      } catch (error) {
        console.error('Error loading courses:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourses()
  }, [selectedProvider, selectedCategory, selectedLevel, debouncedSearch, courses])

  // Get unique providers
  const providers = React.useMemo(() => {
    const uniqueProviders = new Set(courses.map((course: Course) => course.provider))
    return ['All', ...Array.from(uniqueProviders)]
  }, [courses])

  // Update the filtering logic
  const filterCourses = (courses: Course[], filters: CourseFilters) => {
    return courses.filter(course => {
      const matchesProvider = !filters.provider || filters.provider === 'All' || 
        course.provider === filters.provider;
      const matchesCategory = !filters.category || filters.category === 'All' || 
        course.category === filters.category;
      const matchesLevel = !filters.level || filters.level === 'All' || 
        course.level === filters.level;
      const matchesSearch = !filters.search || 
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.provider.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesProvider && matchesCategory && matchesLevel && matchesSearch;
    });
  }

  // Update the handleSearch function
  const handleSearch = (query: string) => {
    const filtered = filterCourses(courses, {
      provider: selectedProvider,
      category: selectedCategory,
      level: selectedLevel,
      search: query
    });
    setFilteredCourses(filtered);
    setSearchQuery(query);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Business Support', href: '/business-support' },
        { label: 'Funded Training', href: '/funded-training' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-12 min-h-[380px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/adult-skills-hero.jpg"
            alt="Adult education and training opportunities in South Yorkshire"
            fill
            className="object-cover object-center brightness-50 contrast-125"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-blue-200 mb-3">
              <div className="p-1 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
            </div>
            <h1 className="relative text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="relative z-10 line-clamp-2 leading-tight block">Funded Training for Adults</span>
            </h1>
            <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              Access free courses, bootcamps, and qualifications to advance your career in South Yorkshire's growing industries.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="#courses"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors backdrop-blur-sm"
              >
                Browse Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#eligibility"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                Check Eligibility
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Options - Now in a scrollable container on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-8 relative z-10">
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 hide-scrollbar">
          <div className="w-[85vw] flex-shrink-0 snap-center sm:w-auto">
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
          </div>
          <div className="w-[85vw] flex-shrink-0 snap-center sm:w-auto">
            <FundingOption
              title="Adult Skills Funding"
              description="Government Funded training for adults aged 19+ to gain essential skills for work and life."
              image="/images/FCFJ-1.jpg"
              features={[
                "Wide range of sectors",
                "Valuable qualifications",
                "Flexible learning options"
              ]}
            />
          </div>
          <div className="w-[85vw] flex-shrink-0 snap-center sm:w-auto">
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
      </div>

      {/* Add custom styles for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Eligibility Section */}
      <div id="eligibility" className="bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                <div className="p-1.5 rounded-lg bg-blue-50">
                  <Building2 className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold tracking-wide uppercase">Check Your Eligibility</span>
              </div>
              <h2 className="relative text-2xl font-bold text-gray-900 mb-6 leading-tight">
                See if You Qualify for Funded Training
              </h2>
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Basic Requirements:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xl text-gray-900">Aged 19 or over</span>
                      <p className="text-lg text-gray-600 mt-1">Must be at least 19 years old at the start of the course</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xl text-gray-900">South Yorkshire Resident</span>
                      <p className="text-lg text-gray-600 mt-1">Must live within the South Yorkshire region</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xl text-gray-900">Right to Work</span>
                      <p className="text-lg text-gray-600 mt-1">Must have the right to work in the UK</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <p className="text-lg text-blue-800">
                    Additional criteria may apply depending on the programme. Contact our team for specific eligibility checks.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-medium hover:bg-blue-500 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                >
                  Contact Our Team
                  <ChevronRight className="ml-2 h-6 w-6" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/educator-hero.webp"
                alt="A diverse group of students collaborating in a modern learning environment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Funded Courses
          </h2>
          <p className="text-base text-gray-600">
            Browse our selection of fully funded courses designed to help you develop new skills and advance your career.
            {totalCourses > 0 && (
              <span className="block mt-1 text-blue-600 text-sm">
                Showing {filteredCourses.length} of {totalCourses} available courses
              </span>
            )}
          </p>
        </div>

        {/* Course Grid */}
        {loading ? (
          <div className="text-center py-8 md:py-12">
            <p className="text-base md:text-lg text-gray-600">Loading courses...</p>
          </div>
        ) : filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/course-directory"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors"
              >
                View All Courses
                <ChevronRight className="ml-2 h-6 w-6" />
              </Link>
              <p className="mt-4 text-gray-600">
                Browse our complete directory of {totalCourses} courses
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8 md:py-12">
            <p className="text-base md:text-lg text-gray-600">No courses found matching your criteria.</p>
            <Link
              href="/course-directory"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors mt-4"
            >
              Browse All Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default FundedTrainingForAdultsPage 