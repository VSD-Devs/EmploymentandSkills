'use client'

import React, { useState } from 'react'
import { Building2, ChevronRight, MapPin, Calendar, Users, GraduationCap, School, Heart, Rocket, Lightbulb, Handshake, ArrowRight, Award, Clock, Briefcase, CheckCircle } from 'lucide-react'
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
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col h-full group">
      <div className="p-6 flex flex-col flex-grow">
        {/* Funding model badge at the top */}
        <div className="mb-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/90 px-3 py-1.5 rounded-full">
            <span className="text-xs font-medium text-white">{course.fundingModel}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{course.title}</h3>
        
        {/* Provider info with location */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-slate-700">
            <Building2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="text-sm font-medium">{provider.name}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="text-sm">{provider.address}</span>
          </div>
        </div>
        
        {/* Course Details */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
            {course.level}
          </span>
          <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
            {course.category}
          </span>
          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
            {course.duration}
          </span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link
            href={`/funded-training-for-adults/${course.slug}`}
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-emerald-500/20"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
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
  <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col">
    <div className="aspect-video relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent" />
      <div className="absolute top-4 left-4">
        <div className={`flex items-center gap-2 ${color} backdrop-blur-sm px-3 py-1.5 rounded-full`}>
          {icon}
          <span className="text-xs font-medium text-white">{title}</span>
        </div>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <p className="text-slate-600 mb-6 flex-grow">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-700">
            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={title === "South Yorkshire Advance" ? "/south-yorkshire-advance" : "#"}
        className="inline-flex items-center justify-center w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-all shadow-sm"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Hero Section - Redesigned to match t-levels style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-800/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          <div className="absolute top-20 left-5 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Hero Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <GraduationCap className="w-4 h-4 text-emerald-300 mr-2" />
                <span className="text-sm font-medium text-white">Adult Skills & Training</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Funded Training <span className="text-emerald-300">for Adults</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Access free courses, bootcamps, and qualifications to advance your career in South Yorkshire's growing industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="#courses" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-emerald-900/30 inline-flex items-center justify-center transition-all"
                >
                  Browse Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#eligibility" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center"
                >
                  Check Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Image - Right side */}
            <div className="lg:w-1/2 relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl">
                {/* Large Featured Image */}
                <div className="rounded-xl overflow-hidden mb-5 relative h-64 shadow-lg">
                  <Image 
                    src="/images/adult-skills-hero.jpg"
                    alt="Adult learners in a modern classroom environment"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">Join 5,000+ learners across South Yorkshire</span>
                    </div>
                  </div>
                </div>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-emerald-300" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">Learner Community</h3>
                      <p className="text-xs text-slate-200">Join a supportive network</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                        <Calendar className="w-5 h-5 text-emerald-300" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">Flexible Learning</h3>
                      <p className="text-xs text-slate-200">Fit around your schedule</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                        <GraduationCap className="w-5 h-5 text-emerald-300" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">Certifications</h3>
                      <p className="text-xs text-slate-200">Industry-recognised</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - New section inspired by t-levels page */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                <p className="text-sm text-slate-600">Fully funded for eligible participants</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">12-16</div>
                <p className="text-sm text-slate-600">Weeks for most programmes</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">80%</div>
                <p className="text-sm text-slate-600">Of graduates progress to higher skills or employment</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">50+</div>
                <p className="text-sm text-slate-600">Employer partners across South Yorkshire</p>
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
                { id: 'funding', label: 'Programmes' },
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
      <section id="funding" className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4">
              <GraduationCap className="h-4 w-4 text-emerald-800" />
              <span className="text-sm font-medium text-emerald-900">Funding Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Your Path to <span className="text-emerald-600">New Skills</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover various funded training options available for adult learners in South Yorkshire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <FundingOption
              title="Skills Bootcamps"
              description="Intensive, flexible courses of up to 16 weeks, designed to give you job-ready skills for sectors with high demand for qualified professionals."
              image="/images/bootcamps-image2.png"
              features={[
                "Industry-recognised qualifications",
                "Guaranteed job interview on completion",
                "Fast-track to employment opportunities"
              ]}
              icon={<GraduationCap className="h-3.5 w-3.5 text-white" />}
              color="bg-purple-600"
            />
            <FundingOption
              title="Adult Skills Funding"
              description="Government funded training for adults aged 19+ to gain essential skills for work and life, with courses available across a wide range of sectors."
              image="/images/FCFJ-1.jpg"
              features={[
                "Courses from entry level to advanced",
                "Evening and weekend options available",
                "Support with childcare and travel costs"
              ]}
              icon={<Users className="h-3.5 w-3.5 text-white" />}
              color="bg-emerald-600"
            />
            <FundingOption
              title="South Yorkshire Advance"
              description="Career progression programme helping adults access higher-skilled roles and increased earning potential in the region's growth sectors."
              image="/images/advance-programme.jpg"
              features={[
                "Personalised career guidance",
                "Support from industry mentors",
                "Access to employer networks"
              ]}
              icon={<Rocket className="h-3.5 w-3.5 text-white" />}
              color="bg-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-12 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4">
              <Lightbulb className="h-4 w-4 text-emerald-800" />
              <span className="text-sm font-medium text-emerald-900">Check Your Eligibility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              See if You Qualify for <span className="text-emerald-600">Funded Training</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our programmes have specific eligibility criteria to ensure funding reaches those who need it most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="bg-emerald-900 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Basic Requirements</h3>
                <p className="text-emerald-100">Most programmes require these fundamental criteria</p>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Aged 19 or over</h4>
                      <p className="text-slate-600">Must be at least 19 years old at the start of the course</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">South Yorkshire Resident</h4>
                      <p className="text-slate-600">Must live within the South Yorkshire region</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Right to Work</h4>
                      <p className="text-slate-600">Must have the right to work in the UK</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex gap-3 items-start">
                    <Lightbulb className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">
                      Additional criteria may apply depending on the specific programme. Contact our team for personalised eligibility checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-12 -ml-12"></div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">Fully Funded Opportunities</h3>
                <p className="text-emerald-100 mb-6 relative z-10">
                  Many of our courses are completely free for eligible participants
                </p>
                
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white">No tuition fees to pay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Support with equipment and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Financial support may be available for travel costs</span>
                  </li>
                </ul>
              </div>
              
              {/* Success story */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Success Story</h3>
                    <p className="text-slate-600 italic mb-4">
                      "The funded training changed my career path completely. I now have skills that employers are actively seeking."
                    </p>
                    <p className="text-emerald-700 font-medium text-sm">Sarah, 34 - Digital Skills Graduate</p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-4 rounded-lg shadow-md hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Courses Section */}
      <section id="courses" className="py-12 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4">
              <Briefcase className="h-4 w-4 text-emerald-800" />
              <span className="text-sm font-medium text-emerald-900">Featured Courses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Funded <span className="text-emerald-600">Courses</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              <div className="inline-flex items-center justify-center p-4 bg-emerald-50 rounded-full">
                <div className="h-8 w-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-lg text-slate-600 mt-4">Loading courses...</p>
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
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-emerald-500/20"
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
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-lg text-slate-700 mb-6">No courses found matching your criteria.</p>
              <Link
                href="/course-directory"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-emerald-500/20"
              >
                Browse All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/5 w-[120%] h-20 rotate-12"></div>
              <div className="absolute top-10 right-10 flex space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-2 w-2 rounded-full bg-emerald-${i*100}/60`}></div>
                ))}
              </div>
            </div>
            
            <div className="relative px-6 py-12 md:p-12 z-10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <Handshake className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm font-medium text-white">Take the Next Step</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to transform <span className="text-emerald-300">your career?</span>
                  </h2>
                  
                  <p className="text-slate-200 text-lg mb-8 max-w-lg">
                    Take the first step towards new skills with our funded training opportunities. Our team is ready to guide you through the process.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="px-6 py-3 rounded-lg bg-white text-emerald-800 hover:bg-slate-100 transition-all font-medium inline-flex items-center justify-center shadow-lg"
                    >
                      Contact Our Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    
                    <Link 
                      href="#eligibility" 
                      className="px-6 py-3 rounded-lg bg-emerald-600/20 backdrop-blur-sm text-white border border-emerald-500/30 hover:bg-emerald-600/30 transition-all font-medium inline-flex items-center justify-center"
                    >
                      Check Eligibility
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white italic">
                          "The support from start to finish was exceptional. I'm now working in a role I love with better pay."
                        </p>
                        <p className="text-emerald-300 font-medium text-sm mt-2">Michael, 42 - Construction Management Graduate</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="aspect-video relative rounded-lg overflow-hidden">
                        <Image 
                          src="/images/adult-learning-group.jpg" 
                          alt="Adult learners in a collaborative environment"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="inline-flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Join our community of learners</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2">
                          <Calendar className="w-5 h-5 text-emerald-300" />
                        </div>
                        <div className="text-xl font-bold text-white mb-1">94%</div>
                        <p className="text-sm text-slate-200">Learner satisfaction rate</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2">
                          <Building2 className="w-5 h-5 text-emerald-300" />
                        </div>
                        <div className="text-xl font-bold text-white mb-1">5,000+</div>
                        <p className="text-sm text-slate-200">Adults upskilled yearly</p>
                      </div>
                    </div>
                  </div>
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