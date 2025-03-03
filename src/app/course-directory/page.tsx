'use client'

import React, { useState, useEffect } from 'react'
import { Search, MapPin, Building2, ChevronRight, ChevronLeft, X, Download, Briefcase, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { 
  Course, 
  getPaginatedCourses, 
  getProviderInfo, 
  getCategories, 
  getLevels, 
  CourseFilters,
  getPathways,
  Pathway,
  Role 
} from '@/lib/utils'

// Re-use the CourseCard and Pagination components from the courses page
const CourseCard = ({ course }: { course: Course }) => {
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
        </div>
        
        {course.pathways && course.pathways.length > 0 && (
          <div className="mb-4 mt-2">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-start gap-2 text-slate-700 mb-2">
                <Briefcase className="h-4 w-4 mt-1 flex-shrink-0 text-emerald-600" />
                <span className="text-sm font-medium">Career Pathways:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.pathways.map(pathway => {
                  const pathwayData: Pathway | undefined = getPathways().find((p: Pathway) => p.slug === pathway);
                  return (
                    <Link
                      key={pathway}
                      href={`/pathways/${pathway}`}
                      className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {pathwayData ? pathwayData.title : pathway.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Link>
                  );
                })}
              </div>
              
              {/* Roles section */}
              <div className="mt-2">
                <p className="text-xs font-medium text-slate-700 mb-1">Related Roles:</p>
                <div className="flex flex-wrap gap-2">
                  {(() => {
                    // Get all unique roles from all pathways
                    const allRoles = new Set<string>();
                    course.pathways.forEach(pathway => {
                      const pathwayData = getPathways().find((p: Pathway) => p.slug === pathway);
                      if (pathwayData) {
                        pathwayData.roles.forEach(role => allRoles.add(role.title));
                      }
                    });
                    
                    // Convert to array and get first 2 roles
                    const roleArray = Array.from(allRoles);
                    return (
                      <>
                        {roleArray.slice(0, 2).map((roleTitle) => (
                          <span
                            key={roleTitle}
                            className="text-xs px-2 py-1 bg-white rounded-full border border-slate-200 text-slate-600"
                          >
                            {roleTitle}
                          </span>
                        ))}
                        {roleArray.length > 2 && (
                          <span className="text-xs px-2 py-1 bg-white rounded-full border border-slate-200 text-slate-600">
                            +{roleArray.length - 2} more
                          </span>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link
            href={`/funded-training-for-adults/${course.slug}`}
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-emerald-500/20"
          >
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }: { 
  currentPage: number; 
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  // Show max 5 pages with ellipsis
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
    for (const i of range) {
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
        className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5 text-slate-700" />
      </button>
      
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`dots-${index}`} className="px-4 py-2 text-slate-600">
              {page}
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={`px-4 py-2 rounded-lg min-w-[40px] transition-all ${
                currentPage === page
                  ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
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
        className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5 text-slate-700" />
      </button>
    </div>
  );
};

// Add CSV export function
const exportToCSV = (courses: Course[]) => {
  // Define CSV headers
  const headers = [
    'Course Title',
    'Provider',
    'Category',
    'Level',
    'Funding Model',
    'Provider Website',
    'Provider Address',
    'Provider Contact'
  ].join(',')

  // Convert courses to CSV rows
  const rows = courses.map(course => {
    const provider = getProviderInfo(course.provider)
    return [
      `"${course.title.replace(/"/g, '""')}"`,
      `"${provider.name.replace(/"/g, '""')}"`,
      `"${course.category}"`,
      `"${course.level}"`,
      `"${course.fundingModel}"`,
      `"${provider.website}"`,
      `"${provider.address.replace(/"/g, '""')}"`,
      `"${provider.phone}"`
    ].join(',')
  })

  // Combine headers and rows
  const csv = [headers, ...rows].join('\n')

  // Create and trigger download
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `south-yorkshire-courses-${new Date().toISOString().split('T')[0]}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function CourseDirectoryPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<CourseFilters>({
    provider: 'All',
    category: 'All',
    level: 'All',
    search: ''
  })

  const providers = React.useMemo(() => {
    const uniqueProviders = new Set(courses.map((course: Course) => course.provider))
    return ['All', ...Array.from(uniqueProviders)]
  }, [courses])

  // Fetch courses on mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses')
        const data = await response.json()
        setCourses(data)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  // Get paginated and filtered courses
  const paginatedData = getPaginatedCourses(courses, currentPage, 6, filters)

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Adults', href: '/adults' },
            { label: 'Funded Training', href: '/funded-training-for-adults' },
            { label: 'Course Directory', href: '/course-directory' },
          ]} />
        </div>
      </div>

      {/* Hero Section - Redesigned to match the funded-training-for-adults page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-800/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          <div className="absolute top-20 left-5 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-emerald-300 mr-2" />
              <span className="text-sm font-medium text-white">Course Directory</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Funded Course <span className="text-emerald-300">Directory</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed">
              Browse our complete range of fully funded courses and find the best opportunity to develop your skills in South Yorkshire.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => exportToCSV(courses)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-800 hover:bg-slate-100 transition-all font-medium shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span>Export All Courses (CSV)</span>
              </button>
            </div>
            
            <div className="mt-4 inline-flex items-center gap-2 bg-emerald-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30">
              <span className="text-sm text-emerald-300 font-medium">
                {courses.length} Courses Available
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 mb-8">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search by course name or provider..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base shadow-sm"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                aria-label="Search courses"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Active Filters */}
            {(filters.provider !== 'All' || filters.category !== 'All' || filters.level !== 'All' || filters.search) && (
              <div className="flex flex-wrap gap-2">
                <div className="text-sm text-slate-600 font-medium mr-2 py-1">Active filters:</div>
                {filters.provider !== 'All' && (
                  <button
                    onClick={() => setFilters({ ...filters, provider: 'All' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 transition-colors"
                  >
                    Provider: {filters.provider ? getProviderInfo(filters.provider).name : 'All'}
                    <X className="h-4 w-4" />
                  </button>
                )}
                {filters.category !== 'All' && (
                  <button
                    onClick={() => setFilters({ ...filters, category: 'All' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 transition-colors"
                  >
                    Category: {filters.category}
                    <X className="h-4 w-4" />
                  </button>
                )}
                {filters.level !== 'All' && (
                  <button
                    onClick={() => setFilters({ ...filters, level: 'All' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 transition-colors"
                  >
                    Level: {filters.level}
                    <X className="h-4 w-4" />
                  </button>
                )}
                {filters.search && (
                  <button
                    onClick={() => setFilters({ ...filters, search: '' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 transition-colors"
                  >
                    Search: {filters.search}
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => {
                    setFilters({
                      provider: 'All',
                      category: 'All',
                      level: 'All',
                      search: ''
                    })
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Clear all filters
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Filters Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Provider Filter */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Provider:</p>
                <select
                  value={filters.provider}
                  onChange={(e) => setFilters({ ...filters, provider: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-base shadow-sm"
                >
                  <option value="All">All Providers</option>
                  {providers.filter(p => p !== 'All').map((provider) => {
                    const providerInfo = getProviderInfo(provider)
                    return (
                      <option key={provider} value={provider}>
                        {providerInfo?.name || provider}
                      </option>
                    )
                  })}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Category:</p>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-base shadow-sm"
                >
                  <option value="All">All Categories</option>
                  {getCategories().map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Level:</p>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-base shadow-sm"
                >
                  <option value="All">All Levels</option>
                  {getLevels().map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid - Redesigned */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center p-4 bg-emerald-50 rounded-full">
              <div className="h-8 w-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-lg text-slate-600 mt-4">Loading courses...</p>
          </div>
        ) : paginatedData.courses.length > 0 ? (
          <>
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4">
                <Building2 className="h-4 w-4 text-emerald-800" />
                <span className="text-sm font-medium text-emerald-900">
                  Showing {paginatedData.courses.length} of {paginatedData.totalCourses} courses
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedData.courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={paginatedData.totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="text-lg text-slate-700 mb-6">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setFilters({
                  provider: 'All',
                  category: 'All', 
                  level: 'All',
                  search: ''
                })
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-emerald-500/20"
            >
              Clear Filters
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </main>
  )
} 