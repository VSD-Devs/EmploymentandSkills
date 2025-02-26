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

const _salaryRanges = [
  { min: 0, max: 10000, label: 'Up to £10,000' },
  { min: 10000, max: 15000, label: '£10,000 - £15,000' },
  { min: 15000, max: 20000, label: '£15,000 - £20,000' },
  { min: 20000, max: 25000, label: '£20,000 - £25,000' },
  { min: 25000, max: Infinity, label: '£25,000+' },
];

const _southYorkshirePostcodes = [
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
    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;
    
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      } else if (i === left - 1 || i === right + 1) {
        pages.push('...');
      }
    }
    
    return pages.filter((page, index, array) => page !== array[index - 1]);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white border border-emerald-200 text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          typeof page === 'string' ? (
            <span key={`dots-${index}`} className="px-3 py-2 text-gray-500">
              {page}
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg min-w-[40px] text-base ${
                currentPage === page
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-emerald-200 text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              {page}
            </button>
          )
        ))}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white border border-emerald-200 text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50"
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
        params.append('limit', '9')
        
        const response = await fetch(`/api/vacancies?${params.toString()}`)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        
        const data = await response.json()
        setVacancies(data.vacancies || [])
        setTotalPages(Math.ceil((data.total || 0) / 9))
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
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Apprenticeships', href: '/apprenticeships' },
            { label: 'Vacancies', href: '/apprenticeships/vacancies' },
          ]} />
        </div>
      </div>

      {/* Updated Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700 shadow-xl">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-emerald-500 opacity-20 -mr-20 -mb-20"></div>
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-emerald-400 opacity-20 -ml-10 -mt-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Header Content */}
          <div className="text-center mt-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apprenticeship Vacancies
            </h1>
            <p className="text-lg text-emerald-100">
              Browse through {totalVacancies} opportunities in South Yorkshire
            </p>
          </div>

          {/* Search and Filters - Updated styling */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-start">
              {/* Search Bar */}
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by title, company, or location..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-emerald-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-3 rounded-lg bg-white text-emerald-700 border border-emerald-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
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
                className="inline-flex items-center px-4 py-3 rounded-lg bg-white text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Export
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/20">
                {/* Location Filter */}
                <div>
                  <label htmlFor="postcode" className="block text-base font-medium text-white mb-3">
                    <MapPin className="inline-block h-5 w-5 text-white mr-1" />
                    Location
                  </label>
                  <div className="relative">
                    <input
                      id="postcode"
                      type="text"
                      placeholder="Enter postcode (e.g. S1 2BJ)..."
                      className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent text-base backdrop-blur-sm"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label htmlFor="category" className="block text-base font-medium text-white mb-3">
                    <Building2 className="inline-block h-5 w-5 text-white mr-1" />
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-white focus:border-transparent text-base backdrop-blur-sm"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="text-base bg-emerald-900">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <div>
                  <label htmlFor="sort" className="block text-base font-medium text-white mb-3">
                    <SlidersHorizontal className="inline-block h-5 w-5 text-white mr-1" />
                    Sort By
                  </label>
                  <select
                    id="sort"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-white focus:border-transparent text-base backdrop-blur-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value} className="text-base bg-emerald-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area - Adjusted spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-24">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Results Count - Simplified */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-700 font-medium text-lg">
              {totalVacancies} opportunities found
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700 mx-auto mb-4"></div>
              <p className="text-gray-700 text-lg">Loading apprenticeships...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 bg-red-50 rounded-xl border border-red-100">
              <p className="text-red-700 text-lg">{error}</p>
            </div>
          )}

          {/* Vacancies Grid - Improved accessibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacancies.map((vacancy) => (
              <div
                key={vacancy.vacancyReference}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 group"
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

          {/* Empty State */}
          {!isLoading && !error && vacancies.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <Search className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <p className="text-gray-900 font-medium mb-2 text-xl">
                No apprenticeships found
              </p>
              <p className="text-gray-700 text-lg">
                Try adjusting your search criteria or browse all opportunities
              </p>
            </div>
          )}

          {/* Pagination - Styled to match design */}
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
    </main>
  )
} 