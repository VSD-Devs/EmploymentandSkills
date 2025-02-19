'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, MapPin, Building2, GraduationCap, Clock, ArrowRight, ChevronRight, ChevronLeft, Download, SlidersHorizontal, X } from 'lucide-react'
import { DfeVacancy } from '@/services/dfeApi'
import Breadcrumbs from '@/components/Breadcrumbs'

// Types and constants from the main apprenticeships page
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

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }: { 
  currentPage: number; 
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    range.push(1);
    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }
    if (totalPages > 1) {
      range.push(totalPages);
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`dots-${index}`} className="px-4 py-2">
              {page}
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={`px-4 py-2 rounded-lg min-w-[40px] ${
                currentPage === page
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        ))}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

// Export to CSV function
const exportToCSV = (vacancies: DfeVacancy[]) => {
  const headers = [
    'Title',
    'Employer',
    'Category',
    'Level',
    'Location',
    'Wage',
    'Duration',
    'Closing Date',
    'URL'
  ].join(',')

  const rows = vacancies.map(vacancy => {
    return [
      `"${vacancy.title.replace(/"/g, '""')}"`,
      `"${vacancy.employerName.replace(/"/g, '""')}"`,
      `"${vacancy.course.route}"`,
      `"${vacancy.apprenticeshipLevel}"`,
      `"${vacancy.address.postcode}"`,
      `"${vacancy.wage?.wageAmount || 'Details on application'}"`,
      `"${vacancy.expectedDuration}"`,
      `"${vacancy.closingDate}"`,
      `"${vacancy.vacancyUrl}"`
    ].join(',')
  })

  const csv = [headers, ...rows].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `south-yorkshire-apprenticeships-${new Date().toISOString().split('T')[0]}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function VacanciesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [postcode, setPostcode] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [sortBy, setSortBy] = useState<SortOption>('AgeDesc')
  const [currentPage, setCurrentPage] = useState(1)
  const [vacancies, setVacancies] = useState<DfeVacancy[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [totalVacancies, setTotalVacancies] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // Load vacancies with filters
  useEffect(() => {
    const loadVacancies = async () => {
      try {
        setIsLoading(true)
        const params = new URLSearchParams()
        if (postcode) params.append('postcode', postcode)
        if (sortBy) params.append('sort', sortBy)
        if (selectedCategory !== 'All') params.append('category', selectedCategory)
        if (selectedLevel !== 'All') params.append('level', selectedLevel)
        if (debouncedSearch) params.append('search', debouncedSearch)
        params.append('page', currentPage.toString())
        
        const response = await fetch(`/api/vacancies?${params.toString()}`)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        
        const data = await response.json()
        setVacancies(data.vacancies || [])
        setTotalPages(Math.ceil((data.total || 0) / 12))
        setTotalVacancies(data.total || 0)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
        setError(`Failed to load apprenticeship vacancies. ${errorMessage}`)
      } finally {
        setIsLoading(false)
      }
    }

    loadVacancies()
  }, [postcode, sortBy, selectedCategory, selectedLevel, debouncedSearch, currentPage])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setIsSearching(true)
    setCurrentPage(1)
  }

  const handleExport = async () => {
    try {
      setIsLoading(true)
      // Fetch all vacancies for export
      const response = await fetch('/api/vacancies?limit=1000')
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      
      const data = await response.json()
      exportToCSV(data.vacancies || [])
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(`Failed to export vacancies. ${errorMessage}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Apprenticeships', href: '/apprenticeships' },
        { label: 'Vacancies', href: '/apprenticeships/vacancies' },
      ]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="relative text-3xl font-bold text-gray-900 mb-4 inline-block">
            <span className="relative z-10 leading-tight px-2">Apprenticeship Vacancies</span>
            <span 
              className="absolute inset-0 -inset-x-2 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
              aria-hidden="true"
            ></span>
          </h1>
          <p className="text-lg text-gray-600">
            Browse through {totalVacancies} apprenticeship opportunities in South Yorkshire
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-wrap gap-4 items-start">
            {/* Search Bar */}
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by title, company, or location..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
              {showFilters ? (
                <X className="h-5 w-5 ml-2" />
              ) : (
                <ChevronRight className="h-5 w-5 ml-2" />
              )}
            </button>

            {/* Export Button */}
            <button
              onClick={handleExport}
              className="inline-flex items-center px-4 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
            >
              <Download className="h-5 w-5 mr-2" />
              Export
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
              {/* Location Filter */}
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="postcode"
                    type="text"
                    placeholder="Enter postcode..."
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Main Content Area with Background */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {vacancies.length} of {totalVacancies} vacancies
              </p>
              {isSearching && (
                <p className="text-gray-600">
                  Searching...
                </p>
              )}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacancies.map((vacancy) => (
                  <div
                    key={vacancy.vacancyReference}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-emerald-600 mb-2">
                          <GraduationCap className="h-5 w-5" />
                          <span className="text-sm font-medium">{vacancy.apprenticeshipLevel}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 relative group-hover:text-emerald-700 transition-colors">
                          <span className="relative z-10">{vacancy.title}</span>
                          <span 
                            className="absolute inset-0 -inset-x-2 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg -rotate-[0.5deg] transform-gpu z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-hidden="true"
                          ></span>
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
            )}

            {/* Empty State */}
            {!isLoading && !error && vacancies.length === 0 && (
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

            {/* Pagination */}
            {!isLoading && !error && vacancies.length > 0 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 