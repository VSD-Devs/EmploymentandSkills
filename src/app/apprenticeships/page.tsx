'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, Quote, ExternalLink, BookOpen, Users, SlidersHorizontal } from 'lucide-react'
import { DfeVacancy } from '@/services/dfeApi'

// Types
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
    icon: Search,
    image: '/images/apprentice-search.jpg',
    imageAlt: 'A young person exploring apprenticeship opportunities on a computer, representing the search phase'
  },
  {
    title: 'Apply',
    description: 'Submit your application through our simple online process. We will guide you every step of the way.',
    icon: Briefcase,
    image: '/images/apprentice-apply.jpg',
    imageAlt: 'A diverse group of young people getting application support from a careers adviser'
  },
  {
    title: 'Interview',
    description: 'Meet with potential employers and discuss your future role. We will help you prepare for your interviews.',
    icon: Building2,
    image: '/images/apprentice-interview.jpg',
    imageAlt: 'An apprenticeship candidate in a professional interview setting with local employers'
  },
  {
    title: 'Start Learning',
    description: 'Begin your apprenticeship journey, combining practical work experience with structured learning.',
    icon: GraduationCap,
    image: '/images/apprentice-learning.jpg',
    imageAlt: 'An apprentice receiving hands-on training in their chosen field'
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

const categories = [
  'All',
  'Agriculture, environmental and animal care',
  'Business and administration',
  'Care services',
  'Catering and hospitality',
  'Construction and the built environment',
  'Creative and design',
  'Digital',
  'Education and early years',
  'Engineering and manufacturing',
  'Hair and beauty',
  'Health and science',
  'Legal, finance and accounting',
  'Protective services',
  'Sales, marketing and procurement',
  'Transport and logistics'
]

const sortOptions = [
  { value: 'AgeDesc', label: 'Newest first' },
  { value: 'AgeAsc', label: 'Oldest first' },
  { value: 'DistanceAsc', label: 'Nearest first' },
  { value: 'DistanceDesc', label: 'Furthest first' }
] as const;

type SortOption = typeof sortOptions[number]['value'];

const salaryRanges = [
  { min: 0, max: 10000, label: 'Up to £10,000' },
  { min: 10000, max: 15000, label: '£10,000 - £15,000' },
  { min: 15000, max: 20000, label: '£15,000 - £20,000' },
  { min: 20000, max: 25000, label: '£20,000 - £25,000' },
  { min: 25000, max: Infinity, label: '£25,000+' },
];

const southYorkshirePostcodes = [
  { area: 'Sheffield', prefix: 'S' },
  { area: 'Rotherham', prefix: 'S60-S66' },
  { area: 'Barnsley', prefix: 'S70-S75' },
  { area: 'Doncaster', prefix: 'DN' }
];

export const dynamic = 'force-dynamic'

const ApprenticeshipPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [postcode, setPostcode] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('AgeDesc')
  const [selectedSalaryRange, setSelectedSalaryRange] = useState<number>(-1)
  const [showFilters, setShowFilters] = useState(false)
  const [vacancies, setVacancies] = useState<DfeVacancy[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentChunk, setCurrentChunk] = useState(0)
  const CHUNK_SIZE = 6

  useEffect(() => {
    const fetchVacancies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (postcode) params.append('postcode', postcode);
        if (sortBy) params.append('sort', sortBy);
        
        const response = await fetch(`/api/vacancies?${params.toString()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Log debug information
        if (data._debug) {
          // Handle debug info silently
          const debugInfo = data._debug;
        }
        
        setVacancies(data.vacancies || []);
      } catch (err) {
        // Log error to monitoring service in production
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(`Failed to load apprenticeship vacancies. ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVacancies();
  }, [postcode, sortBy]);

  useEffect(() => {
    setCurrentChunk(0);
  }, [searchTerm, selectedCategory, postcode, sortBy]);

  const filteredVacancies = vacancies.filter(vacancy => {
    const matchesSearch = 
      vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vacancy.employerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vacancy.address.postcode.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || 
      vacancy.course.route.toLowerCase().includes(selectedCategory.toLowerCase())
    
    // Filter by salary range
    const matchesSalary = selectedSalaryRange === -1 || (() => {
      const range = salaryRanges[selectedSalaryRange]
      if (!range) return true
      
      const amount = vacancy.wage?.wageAmount
      if (!amount) return false
      
      // Convert to annual salary if needed
      let annualAmount = amount
      if (vacancy.wage?.wageUnit === 'Weekly') {
        annualAmount = amount * 52
      } else if (vacancy.wage?.wageUnit === 'Monthly') {
        annualAmount = amount * 12
      }
      
      return annualAmount >= range.min && annualAmount <= range.max
    })()

    // Filter by South Yorkshire location
    const matchesLocation = !postcode || southYorkshirePostcodes.some(area => 
      vacancy.address.postcode.startsWith(area.prefix)
    )
    
    return matchesSearch && matchesCategory && matchesSalary && matchesLocation
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
                <div className="p-2 rounded-lg bg-emerald-100">
                  <Clock className="h-5 w-5 text-emerald-600" />
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

      {/* What is an Apprenticeship Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is an Apprenticeship?
              </h2>
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                An apprenticeship is a genuine job with structured training, combining practical work experience with dedicated study time. You'll earn whilst you learn, gaining valuable qualifications and real-world skills.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Work Experience</h3>
                      <p className="text-gray-600">
                        Gain hands-on experience working alongside industry professionals. You'll spend 80% of your time learning on the job.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Programme</h3>
                      <p className="text-gray-600">
                        Dedicate 20% of your time to learning through a structured training programme, either at college, university, or online.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognised Qualification</h3>
                      <p className="text-gray-600">
                        Complete your apprenticeship with a nationally recognised qualification, from GCSE equivalent up to master's degree level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <h4 className="font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                  Available Qualification Levels
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <span className="text-lg font-bold text-emerald-600">Level 2-3</span>
                    <p className="text-sm text-emerald-700 mt-1">GCSE to A-level equivalent</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <span className="text-lg font-bold text-emerald-600">Level 4-5</span>
                    <p className="text-sm text-emerald-700 mt-1">Foundation degree equivalent</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <span className="text-lg font-bold text-emerald-600">Level 6</span>
                    <p className="text-sm text-emerald-700 mt-1">Bachelor's degree equivalent</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <span className="text-lg font-bold text-emerald-600">Level 7</span>
                    <p className="text-sm text-emerald-700 mt-1">Master's degree equivalent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/apprenticeship-learning.jpg"
                  alt="An apprentice receiving hands-on training whilst building their portfolio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 right-6 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Support Network</h4>
                    <p className="text-sm text-gray-600">You'll have dedicated mentors throughout your journey</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                    <p className="text-sm text-gray-600">Balance work and study with structured training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* South Yorkshire Apprenticeship Hub Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
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
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>One-to-one support and guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Help finding the right apprenticeship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Application and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Connections with local employers</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
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
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
              <span className="text-sm font-medium tracking-wide uppercase">How It works</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to guide you through every stage of your apprenticeship journey in South Yorkshire. Our Advisors provide personalised support to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {apprenticeshipProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Vacancies Section */}
      <div id="current-vacancies" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by title, company, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    aria-label="Search apprenticeships"
                  />
                </div>

                {/* Postcode Input */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Enter your postcode..."
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    aria-label="Enter postcode"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1">
                  <label htmlFor="category-select" className="block text-sm font-medium text-gray-600 mb-2">
                    Apprenticeship Category
                  </label>
                  <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    aria-label="Select apprenticeship category"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label htmlFor="sort-select" className="block text-sm font-medium text-gray-600 mb-2">
                    Sort by
                  </label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    aria-label="Sort apprenticeships"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>              
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading apprenticeships...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 bg-red-50 rounded-xl border border-red-100">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Vacancies Grid */}
          {!isLoading && !error && (
            <div className="space-y-6">
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full">
                  {filteredVacancies
                    .slice(currentChunk * CHUNK_SIZE, (currentChunk + 1) * CHUNK_SIZE)
                    .map((vacancy) => (
                    <div
                      key={vacancy.vacancyReference}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group w-full"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-emerald-600 mb-2">
                            <GraduationCap className="h-5 w-5" />
                            <span className="text-sm font-medium">{vacancy.apprenticeshipLevel}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {vacancy.title}
                          </h3>
                          <p className="text-gray-600 line-clamp-2 mb-4">
                            {vacancy.description}
                          </p>
                        </div>
                        <div className="space-y-3 border-t border-gray-100 pt-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Building2 className="h-4 w-4 flex-shrink-0" />
                            <span className="line-clamp-1">{vacancy.employerName}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>
                              {vacancy.address.postcode}
                              {vacancy.distance !== undefined && (
                                <span className="text-gray-500 ml-1">
                                  ({Math.round(vacancy.distance * 10) / 10} miles)
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{vacancy.expectedDuration}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-emerald-600 font-medium">
                            {(() => {
                              const wage = vacancy.wage;
                              if (!wage) return 'Salary details on application';

                              // Include additional wage information if available
                              const additionalInfo = wage.wageAdditionalInformation 
                                ? ` (${wage.wageAdditionalInformation})`
                                : '';

                              switch (wage.wageType) {
                                case 'Custom':
                                  if (wage.wageAmount) {
                                    const amount = wage.wageAmount.toLocaleString('en-GB');
                                    const unit = wage.wageUnit !== 'Unspecified' 
                                      ? ` ${wage.wageUnit.toLowerCase()}`
                                      : '';
                                    return `£${amount}${unit}${additionalInfo}`;
                                  }
                                  return wage.wageAdditionalInformation || 'Salary details on application';
                                case 'CompetitiveSalary':
                                  return `Competitive salary${additionalInfo}`;
                                case 'ApprenticeshipMinimum':
                                  return `Apprenticeship minimum wage${additionalInfo}`;
                                case 'NationalMinimum':
                                  return `National minimum wage${additionalInfo}`;
                                default:
                                  return wage.wageAdditionalInformation || 'Salary details on application';
                              }
                            })()}
                          </span>
                          <a
                            href={vacancy.vacancyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination Controls */}
              {filteredVacancies.length > CHUNK_SIZE && (
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={() => setCurrentChunk(prev => Math.max(0, prev - 1))}
                    disabled={currentChunk === 0}
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="View previous vacancies"
                  >
                    Previous
                  </button>
                  <span className="flex items-center text-gray-600">
                    Page {currentChunk + 1} of {Math.ceil(filteredVacancies.length / CHUNK_SIZE)}
                  </span>
                  <button
                    onClick={() => setCurrentChunk(prev => Math.min(Math.ceil(filteredVacancies.length / CHUNK_SIZE) - 1, prev + 1))}
                    disabled={currentChunk >= Math.ceil(filteredVacancies.length / CHUNK_SIZE) - 1}
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="View next vacancies"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredVacancies.length === 0 && (
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
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Local Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our South Yorkshire Apprentices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how local people like you have transformed their careers through apprenticeships
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
                  <Quote className="h-8 w-8 text-emerald-600 mb-4 opacity-50" />
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
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
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