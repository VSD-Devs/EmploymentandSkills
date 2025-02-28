'use client'

import React, { useState } from 'react'
import { Building2, ChevronRight, MapPin, Calendar, Users, GraduationCap, School, Heart, Rocket, Lightbulb, Handshake, ArrowRight } from 'lucide-react'
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
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col h-full group">
      <div className="aspect-video relative flex-shrink-0">
        <Image 
          src={`/images/courses/${parseInt(course.id, 10) % 5 + 1}.jpg`} 
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-xs font-medium text-emerald-800">{course.fundingModel}</span>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{course.title}</h3>
        <div className="space-y-3 mt-2 flex-grow">
          <div className="flex items-center gap-2 text-slate-700">
            <Building2 className="h-4 w-4 text-emerald-600" />
            <span className="text-sm">{provider.name}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="h-4 w-4 text-emerald-600" />
            <span className="text-sm">{provider.address}</span>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href={`/funded-training-for-adults/${course.slug}`}
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-600/20"
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
  icon: React.ReactNode;
  color: string;
}

const FundingOption = ({ title, description, image, features, icon, color }: FundingOptionProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group h-full flex flex-col">
    <div className="aspect-video relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <div className={`flex items-center gap-2 ${color} bg-opacity-90 backdrop-blur-sm px-3 py-1.5 rounded-full`}>
          {icon}
          <span className="text-xs font-medium text-white">{title}</span>
        </div>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <p className="text-slate-700 mb-6 flex-grow">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-700">
            <ChevronRight className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="inline-flex items-center text-emerald-700 hover:text-emerald-900 font-medium"
      >
        Learn More
        <ChevronRight className="ml-1 h-4 w-4" />
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
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-50'
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
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Adult Skills', href: '/adult-skills' },
            { label: 'Funded Training', href: '/funded-training-for-adults' },
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-4">
                <span className="text-sm font-medium text-emerald-800">Adult Skills & Training</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Funded Training <span className="text-emerald-600">for Adults</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                Access free courses, bootcamps, and qualifications to advance your career in South Yorkshire's growing industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link 
                  href="#courses" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-emerald-600/20 inline-flex items-center justify-center"
                >
                  Browse Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#eligibility" 
                  className="bg-white text-emerald-700 border border-emerald-200 px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                >
                  Check Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Key Features - Right side */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
                {/* Large Featured Image */}
                <div className="rounded-xl overflow-hidden mb-4 relative h-52">
                  <Image 
                    src="/images/adult-skills-hero.jpg"
                    alt="Adult learners in a modern classroom environment"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">1,000+ Learners</h3>
                      <p className="text-xs text-slate-600">Upskilled through our programs</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">Flexible Learning</h3>
                      <p className="text-xs text-slate-600">Evening & weekend options</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                        <GraduationCap className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">Certifications</h3>
                      <p className="text-xs text-slate-600">Industry-recognized qualifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-1 text-emerald-800 font-bold text-xl">
              <GraduationCap className="h-6 w-6" />
              <span>Funded Training</span>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'funding', label: 'Funding Options' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'courses', label: 'Courses' },
                { id: 'apply', label: 'Apply Now' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
                    false // Replace with state variable for active section
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-emerald-600 hover:border-emerald-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    // Update active section state here
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-emerald-900">Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Unlock Your Potential with Funded Training
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              Discover how our funded training programmes can help you develop new skills and advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  Our funded training programmes are designed to help adults in South Yorkshire gain the skills and qualifications needed for today's job market. Whether you're looking to upskill in your current role, change careers, or return to work after a break, we have options to suit your needs.
                </p>
                <p>
                  These programmes are fully funded by the South Yorkshire Mayoral Combined Authority and other government initiatives, meaning there's no cost to eligible participants.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">What We Offer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Short courses and qualifications in high-demand sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Skills bootcamps with fast-track routes to employment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Digital and technical skills training for the modern workplace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Flexible learning options to fit around your schedule</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              <div className="relative rounded-xl overflow-hidden h-64 mb-6">
                <Image 
                  src="/images/adult-learning.jpg" 
                  alt="Adult learners collaborating in a workshop environment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Our Programmes:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Industry-relevant skills",
                  "Recognised qualifications",
                  "Expert tutors and trainers",
                  "Career support and guidance",
                  "Flexible learning options",
                  "No cost to eligible participants"
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
      </section>

      {/* Funding Options */}
      <section id="funding" className="py-12 md:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-emerald-900">Funding Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Path to New Skills
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              Discover various funded training options available for adult learners in South Yorkshire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <FundingOption
              title="Skills Bootcamps"
              description="Intensive, flexible courses of up to 16 weeks, designed to give you job-ready skills."
              image="/images/bootcamps-image2.png"
              features={[
                "Industry-recognised qualifications",
                "Guaranteed job interview",
                "16-week intensive training"
              ]}
              icon={<GraduationCap className="h-3.5 w-3.5 text-white" />}
              color="bg-purple-600"
            />
            <FundingOption
              title="Adult Skills Funding"
              description="Government Funded training for adults aged 19+ to gain essential skills for work and life."
              image="/images/FCFJ-1.jpg"
              features={[
                "Wide range of sectors",
                "Valuable qualifications",
                "Flexible learning options"
              ]}
              icon={<Users className="h-3.5 w-3.5 text-white" />}
              color="bg-emerald-600"
            />
            <FundingOption
              title="Multiply: Number Skills"
              description="Free numeracy courses to help you build confidence with numbers for work and daily life."
              image="/images/multiply.png"
              features={[
                "Flexible learning options",
                "Practical skills focus",
                "One-to-one support"
              ]}
              icon={<School className="h-3.5 w-3.5 text-white" />}
              color="bg-amber-600"
            />
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-emerald-800">Check Your Eligibility</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                See if You Qualify for <span className="text-emerald-600">Funded Training</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                Our programmes have specific eligibility criteria to ensure funding reaches those who need it most.
              </p>
              
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Basic Requirements:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Aged 19 or over</span>
                      <p className="text-slate-700 mt-1">Must be at least 19 years old at the start of the course</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">South Yorkshire Resident</span>
                      <p className="text-slate-700 mt-1">Must live within the South Yorkshire region</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Right to Work</span>
                      <p className="text-slate-700 mt-1">Must have the right to work in the UK</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-slate-800">
                    Additional criteria may apply depending on the programme. Contact our team for specific eligibility checks.
                  </p>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="text-base bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-emerald-600/20 inline-flex items-center justify-center"
              >
                Contact Our Team
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-6 shadow-lg">
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/educator-hero.webp"
                    alt="A diverse group of students collaborating in a modern learning environment"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Success stories overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <Heart className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-slate-700 italic">
                              "The funded training changed my career path completely. I now have skills that employers are actively seeking."
                            </p>
                            <p className="text-emerald-700 font-medium text-sm mt-1">Sarah, 34 - Digital Skills Graduate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">94%</div>
                  <p className="text-sm text-slate-700">of learners recommend our courses</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">5,000+</div>
                  <p className="text-sm text-slate-700">adults upskilled each year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Courses Section */}
      <section id="courses" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-emerald-900">Featured Courses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Funded Courses For You
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              Browse our selection of fully funded courses designed to help you develop new skills
              {totalCourses > 0 && (
                <span className="block mt-2 text-emerald-600 text-sm">
                  Showing {filteredCourses.length} of {totalCourses} available courses
                </span>
              )}
            </p>
          </div>

          {/* Course Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">Loading courses...</p>
            </div>
          ) : filteredCourses.length > 0 ? (
            <>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/course-directory"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-md"
                >
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="mt-4 text-slate-600">
                  Browse our complete directory of {totalCourses} courses
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">No courses found matching your criteria.</p>
              <Link
                href="/course-directory"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors mt-4 shadow-lg hover:shadow-emerald-600/20"
              >
                Browse All Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-900 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative px-6 py-12 md:p-12">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] mix-blend-overlay opacity-5"></div>
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="text-slate-50 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your career?</h2>
                  <p className="text-slate-200 text-lg mb-6">
                    Take the first step towards new skills with our funded training opportunities
                  </p>
                  
                  {/* Enhanced Community Image Collage */}
                  <div className="hidden md:block mt-6">
                    <div className="relative h-20">
                      {[1, 2, 3, 4, 5].map((idx) => (
                        <div 
                          key={idx} 
                          className={`absolute bottom-0 h-${20 - idx * 2} w-${20 - idx * 2} rounded-full overflow-hidden border-2 border-white shadow-md z-${50 - idx * 10}`}
                          style={{ left: `${idx * 15}%` }}
                        >
                          <Image 
                            src={`/images/community/person-${idx}.jpg`} 
                            alt={`Success story ${idx}`} 
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      <div className="absolute bottom-0 left-[65%] h-16 flex items-center">
                        <span className="text-white text-lg font-medium">Join 5,000+ others on their career journey</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 rounded-lg bg-white text-emerald-800 hover:bg-slate-100 transition-colors font-medium inline-flex items-center justify-center shadow-lg"
                  >
                    Get In Touch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="/courses" 
                    className="px-6 py-3 rounded-lg bg-emerald-800/40 text-white border border-white/30 hover:bg-emerald-800/60 transition-colors font-medium inline-flex items-center justify-center"
                  >
                    Browse Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  )
}

export default FundedTrainingForAdultsPage 