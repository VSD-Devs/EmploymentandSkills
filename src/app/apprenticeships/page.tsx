'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Search, MapPin, Building2, GraduationCap, Clock, CheckCircle2, ArrowRight, Quote, ExternalLink, BookOpen, Users } from 'lucide-react'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Young People', href: '/young-people' },
            { label: 'Apprenticeships', href: '/apprenticeships' },
          ]} />
        </div>
      </div>

      {/* Hero Section - REDESIGNED */}
      <div className="relative bg-[#111827] py-32 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/apprenticeship-hero.jpg"
            alt="A skilled apprentice working with industrial brewing equipment, showcasing hands-on vocational training"
            fill
            className="object-cover object-center object-[center_25%] brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-transparent to-[#111827]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left md:max-w-3xl">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Apprenticeships</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your Career <span className="text-emerald-300">Journey</span> in South Yorkshire
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
              Discover apprenticeship opportunities across South Yorkshire and get the personalised support you need to succeed in your career
            </p>
            <div className="flex flex-wrap gap-5 mt-8">
              <a
                href="https://www.instituteforapprenticeships.org/apprenticeship-standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-600 text-white text-lg font-medium hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
              >
                Browse Standards
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="#current-vacancies"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white/15 backdrop-blur-sm text-white text-lg font-medium hover:bg-white/25 transition-colors border border-white/20 shadow-lg"
              >
                View Vacancies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats - REDESIGNED */}
      <div className="relative -mt-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-emerald-100">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">20%</p>
                  <p className="text-xl text-gray-600">Off-the-job Training</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">Dedicated time for learning and development during work hours, ensuring you build valuable skills alongside practical experience</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-emerald-100">
                  <Clock className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">12-48</p>
                  <p className="text-xl text-gray-600">Months Duration</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">Depending on the level and sector of your apprenticeship, with structured progression and clear career development paths</p>
            </div>
          </div>
        </div>
      </div>

      {/* What is an Apprenticeship Section - REDESIGNED */}
      <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="relative z-10 leading-tight px-4 py-2">What is an Apprenticeship?</span>
              <span 
                className="absolute inset-0 -inset-x-4 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-xl -rotate-[0.5deg] transform-gpu" 
                aria-hidden="true"
              ></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <p className="text-2xl leading-relaxed text-gray-600">
                An apprenticeship is a genuine job with structured training, combining practical work experience with dedicated study time. You'll earn whilst you learn, gaining valuable qualifications and real-world skills.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Work Experience</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Gain hands-on experience working alongside industry professionals. You'll spend 80% of your time learning on the job.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Study Programme</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Dedicate 20% of your time to learning through a structured training programme, either at college, university, or online.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Recognised Qualification</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Complete your apprenticeship with a nationally recognised qualification, from GCSE equivalent up to master's degree level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 shadow-lg">
                <h4 className="font-semibold text-emerald-900 mb-6 flex items-center gap-3 text-xl">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                  Available Qualification Levels
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border border-emerald-100 hover:shadow-md transition-shadow">
                    <span className="text-2xl font-bold text-emerald-600">Level 2-3</span>
                    <p className="text-base text-emerald-700 mt-2">GCSE to A-level equivalent</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-emerald-100 hover:shadow-md transition-shadow">
                    <span className="text-2xl font-bold text-emerald-600">Level 4-5</span>
                    <p className="text-base text-emerald-700 mt-2">Foundation degree equivalent</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-emerald-100 hover:shadow-md transition-shadow">
                    <span className="text-2xl font-bold text-emerald-600">Level 6</span>
                    <p className="text-base text-emerald-700 mt-2">Bachelor's degree equivalent</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-emerald-100 hover:shadow-md transition-shadow">
                    <span className="text-2xl font-bold text-emerald-600">Level 7</span>
                    <p className="text-base text-emerald-700 mt-2">Master's degree equivalent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-24">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/apprenticeship-learning.jpg"
                  alt="An apprentice receiving hands-on training whilst building their portfolio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 right-8 bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-5 mb-6">
                  <Users className="h-10 w-10 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xl">Support Network</h4>
                    <p className="text-base text-gray-600">You'll have dedicated mentors throughout your journey</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Clock className="h-10 w-10 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xl">Flexible Learning</h4>
                    <p className="text-base text-gray-600">Balance work and study with structured training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* South Yorkshire Apprenticeship Hub Section - REDESIGNED */}
      <div className="bg-gray-50 py-20 sm:py-28 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-emerald-600 mb-6">
            <span className="inline-block w-3 h-3 rounded-full bg-emerald-600" />
            <span className="text-lg font-medium tracking-wide uppercase">Your Local Support</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6 max-w-2xl">
            South Yorkshire Apprenticeship Hub
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl leading-relaxed text-gray-600 mb-8">
                We're here to help you navigate your apprenticeship journey. Our dedicated team provides:
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">One-to-one support and guidance</h3>
                      <p className="text-lg text-gray-600">Personalised advice to help you find and secure the right opportunity</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Help finding the right apprenticeship</h3>
                      <p className="text-lg text-gray-600">Matching your skills and interests with the perfect opportunity</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Application and interview preparation</h3>
                      <p className="text-lg text-gray-600">Expert coaching to help you stand out to potential employers</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Connections with local employers</h3>
                      <p className="text-lg text-gray-600">Direct links to businesses looking for apprentices like you</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-600 text-white text-lg font-medium hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
                >
                  Get Support
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/apprenticeship-hub.png"
                alt="An apprentice receiving support and guidance from a mentor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xl font-medium">Our team is ready to support your apprenticeship journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Process Section - REDESIGNED */}
      <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="relative z-10 leading-tight px-4 py-2">The Apprenticeship Journey</span>
              <span 
                className="absolute inset-0 -inset-x-4 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-xl -rotate-[0.5deg] transform-gpu" 
                aria-hidden="true"
              ></span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-6">
              <span className="text-lg font-medium tracking-wide uppercase">How It Works</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to guide you through every stage of your apprenticeship journey in South Yorkshire. Our Advisors provide personalised support to help you succeed.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-4 gap-10 items-stretch">
            {apprenticeshipProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="relative h-64 w-full">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                    <step.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Vacancies Section - UPDATED FOR ACCESSIBILITY */}
      <div id="current-vacancies" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="relative z-10 leading-tight px-4 py-2">Featured Vacancies</span>
              <span 
                className="absolute inset-0 -inset-x-4 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-xl -rotate-[0.5deg] transform-gpu" 
                aria-hidden="true"
              ></span>
            </h2>
          </div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 text-emerald-600 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-600" />
              <span className="text-lg font-medium tracking-wide uppercase">Latest Opportunities</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find your perfect apprenticeship opportunity in South Yorkshire
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">Loading apprenticeships...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16 bg-red-50 rounded-xl border border-red-100 shadow-md">
              <p className="text-xl text-red-600 font-medium">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Vacancies Grid - UPDATED FOR ACCESSIBILITY */}
          {!isLoading && !error && (
            <div className="space-y-8">
              <div className="overflow-x-auto pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-full">
                  {filteredVacancies
                    .slice(0, 3) // Show only the first 3 vacancies
                    .map((vacancy) => (
                    <div
                      key={vacancy.vacancyReference}
                      className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-emerald-700 mb-3">
                            <GraduationCap className="h-5 w-5" />
                            <span className="text-base font-medium">{vacancy.apprenticeshipLevel}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                            {vacancy.title}
                          </h3>
                          <p className="text-base text-gray-700 line-clamp-3 mb-4 leading-relaxed">
                            {vacancy.description}
                          </p>
                        </div>
                        
                        {/* Info Section */}
                        <div className="space-y-3 border-t border-gray-100 pt-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Building2 className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                            <span className="line-clamp-1 text-base">{vacancy.employerName}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                            <span className="text-base">
                              {vacancy.address.postcode}
                              {vacancy.distance && (
                                <span className="text-gray-600 ml-1 text-sm">
                                  ({Math.round(vacancy.distance * 10) / 10}mi)
                                </span>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-emerald-700 font-medium text-base">
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
                          <Link
                            href={`/apprenticeships/vacancies/${vacancy.vacancyReference}`}
                            className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-colors text-base"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* View More Button */}
              <div className="text-center mt-16">
                <Link
                  href="/apprenticeships/vacancies"
                  className="inline-flex items-center px-8 py-4 bg-emerald-700 text-white rounded-xl hover:bg-emerald-600 transition-colors text-lg"
                >
                  View All Vacancies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredVacancies.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <Search className="h-16 w-16 text-gray-400 mx-auto" />
              </div>
              <p className="text-2xl text-gray-900 font-medium mb-4">
                No apprenticeships found
              </p>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Try adjusting your search criteria or browse all opportunities
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-colors text-lg"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success Stories Section - REDESIGNED */}
      <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="relative z-10 leading-tight px-4 py-2">Meet Our South Yorkshire Apprentices</span>
              <span 
                className="absolute inset-0 -inset-x-4 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-xl -rotate-[0.5deg] transform-gpu" 
                aria-hidden="true"
              ></span>
            </h2>
            <div className="flex items-center justify-center gap-3 text-emerald-600 mb-6">
              <span className="text-lg font-medium tracking-wide uppercase">Local Success Stories</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how local people like you have transformed their careers through apprenticeships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                <div className="relative h-80">
                  <Image
                    src={story.imageUrl}
                    alt={story.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                    <p className="text-white/90 text-lg">{story.role}</p>
                    <p className="text-white/80 text-base">{story.company}</p>
                  </div>
                </div>
                <div className="p-8">
                  <Quote className="h-10 w-10 text-emerald-600 mb-6 opacity-50" />
                  <p className="text-xl text-gray-600 italic leading-relaxed">
                    {story.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Wall - REDESIGNED */}
      <div className="bg-gray-50 py-20 sm:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-emerald-600 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-600" />
              <span className="text-lg font-medium tracking-wide uppercase">Apprenticeship Life</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Life as an Apprentice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See what it's like to be an apprentice in South Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all">
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
      </div>
    </main>
  )
}

export default ApprenticeshipPage
