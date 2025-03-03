'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, Quote, ExternalLink, BookOpen, Users, Camera } from 'lucide-react'
import { DfeVacancy } from '@/services/dfeApi'
import Breadcrumbs from '@/components/Breadcrumbs'

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

const _categories = [
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

const _sortOptions = [
  { value: 'AgeDesc', label: 'Newest first' },
  { value: 'AgeAsc', label: 'Oldest first' },
  { value: 'DistanceAsc', label: 'Nearest first' },
  { value: 'DistanceDesc', label: 'Furthest first' }
] as const;

type SortOption = typeof _sortOptions[number]['value'];

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
  const [selectedCategory, _setSelectedCategory] = useState('All')
  const [postcode, _setPostcode] = useState('')
  const [sortBy, _setSortBy] = useState<SortOption>('AgeDesc')
  const [selectedSalaryRange, _setSelectedSalaryRange] = useState('')
  const [vacancies, setVacancies] = useState<DfeVacancy[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [_currentChunk, setCurrentChunk] = useState(0)
  const _CHUNK_SIZE = 6

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
  }, [selectedCategory, postcode, sortBy]);

  const filteredVacancies = vacancies.filter(vacancy => {
    const matchesSearch = 
      vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vacancy.employerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vacancy.address.postcode.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || 
      vacancy.course.route.toLowerCase().includes(selectedCategory.toLowerCase())
    
    // Filter by salary range
    const matchesSalary = selectedSalaryRange === '' || (() => {
      const index = parseInt(selectedSalaryRange, 10);
      const range = salaryRanges[index];
      if (!range) return true;
      
      const amount = vacancy.wage?.wageAmount;
      if (!amount) return false;
      
      return amount >= range.min && amount <= range.max;
    })()

    // Filter by South Yorkshire location
    const matchesLocation = !postcode || southYorkshirePostcodes.some(area => 
      vacancy.address.postcode.startsWith(area.prefix)
    )
    
    return matchesSearch && matchesCategory && matchesSalary && matchesLocation
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Young People', href: '/young-people' },
            { label: 'Apprenticeships', href: '/apprenticeships' },
          ]} />
        </div>
      </div>

      {/* Hero Section - MOBILE OPTIMIZED */}
      <section id="overview" className="relative bg-gradient-to-br from-emerald-800 to-blue-900 py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-emerald-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-700/50 backdrop-blur-sm border border-emerald-500/30">
                <GraduationCap className="h-4 w-4 text-emerald-300" />
                <span className="text-xs md:text-sm font-medium text-emerald-100">South Yorkshire Apprenticeships</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Start Your Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">Journey</span> in South Yorkshire
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
                Discover apprenticeship opportunities across South Yorkshire and get the personalised support you need to succeed in your career
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="https://www.instituteforapprenticeships.org/apprenticeship-standards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-white text-emerald-900 font-medium hover:bg-emerald-50 transition-colors shadow-lg shadow-emerald-900/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Browse Standards
                  <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <Link
                  href="/apprenticeships/vacancies"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-emerald-700/50 text-white font-medium backdrop-blur-sm border border-emerald-500/50 hover:bg-emerald-700/70 transition-colors text-sm sm:text-base w-full xs:w-auto"
                >
                  View Vacancies
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-6 sm:mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <Image 
                  src="/images/apprenticeship-hero.jpg"
                  alt="A skilled apprentice working with industrial brewing equipment, showcasing hands-on vocational training"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - MOBILE OPTIMIZED - Adjusted position */}
      <div className="relative mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">20%</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Off-the-job Training</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Dedicated time for learning and development during work hours, ensuring you build valuable skills alongside practical experience</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-emerald-100">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">12-48</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Months Duration</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Depending on the level and sector of your apprenticeship, with structured progression and clear career development paths</p>
            </div>
          </div>
        </div>
      </div>

      {/* What is an Apprenticeship Section - MOBILE OPTIMIZED - Repositioned heading */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-emerald-50 opacity-70 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-emerald-50 opacity-70"></div>
        <div className="absolute top-40 left-0 w-10 sm:w-20 h-64 sm:h-96 bg-gradient-to-b from-emerald-50 via-emerald-100/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 shadow-sm">
              <GraduationCap className="h-4 w-4 text-emerald-700" />
              <span className="text-xs md:text-sm font-medium text-emerald-700">Understanding Apprenticeships</span>
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              What is an <span className="text-emerald-600">Apprenticeship?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              An apprenticeship is a genuine job with structured training, combining practical work experience with dedicated study time. You'll earn whilst you learn, gaining valuable qualifications and real-world skills.
            </p>
          </div>

          <div className="relative z-10 mt-8 sm:mt-10">
            <div className="md:grid md:grid-cols-12 gap-8 items-start">
              {/* Left column - Stacked on mobile */}
              <div className="md:col-span-5 lg:col-span-4 relative mb-16 sm:mb-24 md:mb-0 md:mt-8 mx-auto max-w-xs sm:max-w-sm md:max-w-none md:-ml-8 lg:-ml-16">
                <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl relative">
                  <Image
                    src="/images/apprenticeship-learning.jpg"
                    alt="An apprentice receiving hands-on training whilst building their portfolio"
                    width={600}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Overlapping cards - adjusted positioning */}
                  <div className="absolute bottom-8 left-4 right-4 space-y-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 transform transition-transform hover:scale-105">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900">Support Network</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Dedicated mentors throughout</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-emerald-100 transform transition-transform hover:scale-105">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900">Flexible Learning</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Balance work and study</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Full width on mobile */}
              <div className="md:col-span-7 lg:col-span-8 mt-20 sm:mt-24 md:mt-10 lg:mt-16 space-y-4 sm:space-y-6 md:pl-6 lg:pl-10 relative">
                <div className="pl-0 relative group">
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-emerald-500">
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Work Experience</h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Gain hands-on experience working alongside industry professionals. You'll spend 80% of your time learning on the job.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pl-0 relative group">
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-emerald-500">
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Study Programme</h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Dedicate 20% of your time to learning through a structured training programme, either at college, university, or online.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pl-0 relative group">
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-emerald-500">
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Recognised Qualification</h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Complete your apprenticeship with a nationally recognised qualification, from GCSE equivalent up to master's degree level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Qualification Levels in Curved Tabs - Mobile Optimized */}
                <div className="pl-0 md:pl-8 mt-10 sm:mt-16 relative">
                  <h4 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-4 sm:mb-6">
                    Available Qualification Levels
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                    <div className="bg-white rounded-full shadow-sm py-2 sm:py-3 px-3 sm:px-5 border border-emerald-100 hover:shadow-md transition-all">
                      <span className="text-base sm:text-lg font-semibold text-emerald-600">Level 2-3</span>
                      <span className="text-[10px] sm:text-xs text-emerald-700 ml-1 sm:ml-2 opacity-80">GCSE to A-level</span>
                    </div>
                    <div className="bg-white rounded-full shadow-sm py-2 sm:py-3 px-3 sm:px-5 border border-emerald-100 hover:shadow-md transition-all">
                      <span className="text-base sm:text-lg font-semibold text-emerald-600">Level 4-5</span>
                      <span className="text-[10px] sm:text-xs text-emerald-700 ml-1 sm:ml-2 opacity-80">Foundation degree</span>
                    </div>
                    <div className="bg-white rounded-full shadow-sm py-2 sm:py-3 px-3 sm:px-5 border border-emerald-100 hover:shadow-md transition-all">
                      <span className="text-base sm:text-lg font-semibold text-emerald-600">Level 6</span>
                      <span className="text-[10px] sm:text-xs text-emerald-700 ml-1 sm:ml-2 opacity-80">Bachelor's degree</span>
                    </div>
                    <div className="bg-white rounded-full shadow-sm py-2 sm:py-3 px-3 sm:px-5 border border-emerald-100 hover:shadow-md transition-all">
                      <span className="text-base sm:text-lg font-semibold text-emerald-600">Level 7</span>
                      <span className="text-[10px] sm:text-xs text-emerald-700 ml-1 sm:ml-2 opacity-80">Master's degree</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South Yorkshire Apprenticeship Hub Section - MOBILE OPTIMIZED */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4 shadow-sm">
              <Users className="h-4 w-4 text-emerald-700" />
              <span className="text-xs md:text-sm font-medium text-emerald-700">Your Local Support</span>
            </span>
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 max-w-2xl">
              South Yorkshire Apprenticeship Hub
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 mb-6 sm:mb-8">
                We're here to help you navigate your apprenticeship journey. Our dedicated team provides:
              </p>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">One-to-one support and guidance</h3>
                      <p className="text-sm sm:text-base text-gray-600">Personalised advice to help you find and secure the right opportunity</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Help finding the right apprenticeship</h3>
                      <p className="text-sm sm:text-base text-gray-600">Matching your skills and interests with the perfect opportunity</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Application and interview preparation</h3>
                      <p className="text-sm sm:text-base text-gray-600">Expert coaching to help you stand out to potential employers</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Connections with local employers</h3>
                      <p className="text-sm sm:text-base text-gray-600">Direct links to businesses looking for apprentices like you</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 sm:px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-emerald-600 text-white text-sm sm:text-base font-medium hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all w-full sm:w-auto justify-center"
                >
                  Get Support
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl order-first md:order-last mb-8 md:mb-0">
              <Image
                src="/images/apprenticeship-hub.png"
                alt="An apprentice receiving support and guidance from a mentor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-base sm:text-lg md:text-xl font-medium">Our team is ready to support your apprenticeship journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section - MOBILE OPTIMIZED */}
      <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-emerald-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-40 sm:w-80 h-40 sm:h-80 bg-emerald-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 sm:h-40 bg-gradient-to-t from-emerald-50/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4 shadow-sm">
                  <ArrowRight className="h-4 w-4 text-emerald-700" />
                  <span className="text-xs md:text-sm font-medium text-emerald-700">How It Works</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 md:max-w-xl">
                  The Apprenticeship <span className="text-emerald-600">Journey</span>
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 md:max-w-lg mt-3 md:mt-0">
                We're here to guide you through every stage of your apprenticeship journey in South Yorkshire. Our Advisors provide personalised support to help you succeed.
              </p>
            </div>
          </div>

          {/* Curved Journey Path */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 md:gap-x-4 lg:gap-x-8 relative">
              {apprenticeshipProcess.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative ${
                    index % 2 === 0 ? 'sm:translate-y-6 md:translate-y-8' : ''
                  } group`}
                >
                  {/* Icon positioned outside the block */}
                  <div className="absolute -top-5 sm:-top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-emerald-100 transition-colors z-20">
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  </div>
                  
                  {/* Number positioned outside the block */}
                  <div className={`absolute ${
                    index === 0 ? '-bottom-3 sm:-bottom-4' : 'bottom-0'
                  } -left-3 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-emerald-500 shadow-lg flex items-center justify-center font-bold text-white text-sm sm:text-lg z-30`}>
                    {index + 1}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -inset-x-1 sm:-inset-x-2 -inset-y-1 sm:-inset-y-2 bg-gradient-to-br from-emerald-100/30 to-emerald-50/50 rounded-[20px] sm:rounded-[30px] transform -rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-emerald-100 relative">
                      <div className="aspect-w-16 aspect-h-9 relative">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      
                      <div className="p-4 sm:p-6 relative">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm sm:text-base font-medium hover:from-emerald-500 hover:to-emerald-400 transition-colors shadow-lg w-full sm:w-auto justify-center"
            >
              Get Support with Your Application
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Current Vacancies Section - MOBILE OPTIMIZED */}
      <section id="current-vacancies" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-emerald-50/40 to-blue-50/30 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4 shadow-sm">
                <Briefcase className="h-4 w-4 text-emerald-700" />
                <span className="text-xs md:text-sm font-medium text-emerald-700">Latest Opportunities</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Featured <span className="text-emerald-600">Vacancies</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 md:max-w-lg">
              Find your perfect apprenticeship opportunity in South Yorkshire
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-10 sm:py-16">
              <div className="relative w-16 sm:w-20 h-16 sm:h-20">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
              </div>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600">Loading apprenticeships...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50/50 backdrop-blur-sm rounded-xl sm:rounded-2xl py-8 sm:py-10 px-6 sm:px-8 border border-red-100 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-red-600 font-medium mb-2">{error}</p>
                <p className="text-sm sm:text-base text-red-500 mb-5 sm:mb-6 max-w-lg text-center">We're having trouble connecting to our apprenticeship database. Please try again later.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 sm:px-5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-full transition-colors shadow-sm flex items-center text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Vacancies Display */}
          {!isLoading && !error && (
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredVacancies
                  .slice(0, 3) // Show only the first 3 vacancies
                  .map((vacancy, index) => (
                  <div
                    key={vacancy.vacancyReference}
                    className={`bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group relative ${
                      index === 1 ? "sm:transform sm:translate-y-3 md:translate-y-6" : ""
                    }`}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] xs:text-xs font-medium">
                            <GraduationCap className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            <span>{vacancy.apprenticeshipLevel}</span>
                          </div>
                          {/* Location badge */}
                          <div className="flex items-center gap-0.5 sm:gap-1 text-gray-500 text-[10px] xs:text-xs">
                            <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            <span>{vacancy.address.postcode.split(' ')[0]}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2 leading-tight group-hover:text-emerald-600 transition-colors">
                          {vacancy.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700 line-clamp-3 mb-2 sm:mb-3 leading-relaxed">
                          {vacancy.description}
                        </p>
                      </div>
                      
                      {/* Company & Salary */}
                      <div className="space-y-2 sm:space-y-3 border-t border-gray-100 pt-3 sm:pt-4 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700">
                          <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-700 flex-shrink-0" />
                          <span className="line-clamp-1 text-xs sm:text-sm">{vacancy.employerName}</span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-700">
                          <span className="font-medium text-xs sm:text-sm line-clamp-1">
                            {(() => {
                              const wage = vacancy.wage;
                              if (!wage) return 'Salary details on application';

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
                        </div>
                      </div>

                      {/* View button */}
                      <Link
                        href={`/apprenticeships/vacancies/${vacancy.vacancyReference}`}
                        className="w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full hover:from-emerald-500 hover:to-emerald-400 transition-colors shadow-sm text-xs sm:text-sm font-medium"
                      >
                        View Details
                        <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View More Button */}
              <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
                <Link
                  href="/apprenticeships/vacancies"
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm sm:text-base font-medium hover:from-emerald-500 hover:to-emerald-400 transition-colors shadow-lg w-full sm:w-auto justify-center"
                >
                  View All Vacancies
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredVacancies.length === 0 && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-gray-200 p-6 sm:p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 mb-4 sm:mb-6">
                <Search className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 font-medium mb-2 sm:mb-3">
                No apprenticeships found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mb-6 sm:mb-8">
                We couldn't find any apprenticeship vacancies matching your criteria. Please adjust your search or check back soon for new opportunities.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-colors shadow-sm text-sm sm:text-base"
              >
                Clear Search
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1.5 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories Section - MOBILE OPTIMIZED */}
      <section id="success-stories" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 -left-16 w-40 sm:w-80 h-40 sm:h-80 bg-emerald-50/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-16 w-32 sm:w-60 h-32 sm:h-60 bg-emerald-50/70 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4 shadow-sm">
                <Quote className="h-4 w-4 text-emerald-700" />
                <span className="text-xs md:text-sm font-medium text-emerald-700">Local Success Stories</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Meet Our <span className="text-emerald-600">South Yorkshire</span> Apprentices
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 md:max-w-lg">
              Discover how local people like you have transformed their careers through apprenticeships
            </p>
          </div>

          <div className="relative mt-8 sm:mt-10 md:mt-20">
            <div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
              {successStories.map((story, index) => (
                <div 
                  key={story.id} 
                  className={`relative ${
                    index % 2 === 0 ? 'md:translate-x-0' : 'md:translate-x-12'
                  }`}
                >
                  <div className={`md:flex gap-6 sm:gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Image with decorative elements */}
                    <div className="relative md:w-2/5 mb-8 sm:mb-12 md:mb-0 max-w-xs sm:max-w-sm mx-auto md:max-w-none">
                      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50/30 rounded-[25px] sm:rounded-[40px] transform ${
                        index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                      } -z-10`}></div>
                      
                      <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transform ${
                        index % 2 === 0 ? '-rotate-2 hover:rotate-0' : 'rotate-2 hover:rotate-0'
                      } transition-transform duration-500`}>
                        <div className="aspect-square relative">
                          <Image
                            src={story.imageUrl}
                            alt={story.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="text-base sm:text-xl font-bold text-white">{story.name}</h3>
                          <p className="text-sm sm:text-base text-white/90">{story.role}</p>
                          <p className="text-xs sm:text-sm text-white/80">{story.company}</p>
                        </div>
                      </div>
                      
                      {/* Decorative small circles */}
                      <div className={`absolute w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-emerald-100 ${
                        index % 2 === 0 ? '-right-3 sm:-right-4 top-6 sm:top-10' : '-left-3 sm:-left-4 top-6 sm:top-10'
                      }`}></div>
                      <div className={`absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-emerald-200 ${
                        index % 2 === 0 ? '-left-2 sm:-left-4 bottom-14 sm:bottom-20' : '-right-2 sm:-right-4 bottom-14 sm:bottom-20'
                      }`}></div>
                    </div>
                    
                    {/* Quote */}
                    <div className="md:w-3/5 relative">
                      <div className={`bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-md sm:shadow-lg relative ${
                        index % 2 === 0 ? 'text-left md:-ml-8 lg:-ml-16 md:rounded-tl-none' : 'text-left md:-mr-8 lg:-mr-16 md:rounded-tr-none'
                      } z-10`}>
                        <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-200 absolute -top-3 sm:-top-4 -left-2" />
                        <div className="relative">
                          <p className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed mb-4 sm:mb-6">
                            {story.quote}
                          </p>
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="h-1 w-8 sm:w-12 bg-emerald-500 rounded-full"></div>
                            <p className="text-xs sm:text-sm text-emerald-700 font-medium">Apprenticeship Graduate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/apprenticeships/case-studies"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm sm:text-base font-medium hover:from-emerald-500 hover:to-emerald-400 transition-colors shadow-lg w-full sm:w-auto justify-center sm:justify-start"
            >
              View More Success Stories
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-emerald-700 text-sm sm:text-base font-medium border border-emerald-200 hover:bg-emerald-50 transition-colors shadow-sm w-full sm:w-auto justify-center sm:justify-start"
            >
              Speak to an Advisor
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Wall - MOBILE OPTIMIZED */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4 shadow-sm">
              <Camera className="h-4 w-4 text-emerald-700" />
              <span className="text-xs md:text-sm font-medium text-emerald-700">Apprenticeship Life</span>
            </span>
            <div className="flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:justify-between">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Life as an <span className="text-emerald-600">Apprentice</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 md:max-w-lg">
                See what it's like to be an apprentice in South Yorkshire
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative aspect-square rounded-md sm:rounded-lg md:rounded-xl overflow-hidden group shadow-sm sm:shadow-md md:shadow-lg hover:shadow-xl transition-all">
                <Image
                  src={`/images/apprentice-life-${index}.jpg`}
                  alt={`Apprenticeship life image ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ApprenticeshipPage