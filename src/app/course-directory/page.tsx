'use client'

import React, { useState, useEffect } from 'react'
import { Search, MapPin, Building2, ChevronRight, ChevronLeft, X, Download, Briefcase } from 'lucide-react'
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
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
            {course.fundingModel}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-600 text-white">
            {course.level}
          </span>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-lg border border-blue-100/50 mt-4">
          <h3 className="text-xl font-bold text-gray-900">
            {course.title}
          </h3>
        </div>
        <div className="space-y-3 mt-4 flex-grow">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="h-5 w-5" />
            <span className="text-base">{provider.name}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span className="text-base">{provider.address}</span>
          </div>
          {course.pathways && course.pathways.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 text-gray-600">
                <Briefcase className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {course.pathways.map(pathway => {
                    const pathwayData: Pathway | undefined = getPathways().find((p: Pathway) => p.slug === pathway);
                    return (
                      <Link
                        key={pathway}
                        href={`/pathways/${pathway}`}
                        className="text-base px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        {pathwayData ? pathwayData.title : pathway.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Related Roles:</p>
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
                            className="text-sm px-2 py-1 bg-white rounded border border-gray-200 text-gray-600"
                          >
                            {roleTitle}
                          </span>
                        ))}
                        {roleArray.length > 2 && (
                          <span className="text-sm px-2 py-1 bg-white rounded border border-gray-200 text-gray-600">
                            +{roleArray.length - 2} more
                          </span>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6">
          <Link
            href={`/courses/${course.slug}`}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-base font-medium"
          >
            View Details
            <ChevronRight className="ml-2 h-5 w-5" />
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
                  ? 'bg-blue-600 text-white'
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
      <Breadcrumbs items={[
        { label: 'Courses', href: '/courses' },
        { label: 'Course Directory', href: '/course-directory' },
      ]} />

      <div className="relative bg-[#111827] py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-20" />
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-blue-100 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Course Directory</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Browse Courses</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Browse our complete range of fully funded courses and find the best opportunity to develop your skills.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col gap-6">
            {/* Search and Export Row */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder="Search by course name or provider..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  aria-label="Search courses"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => exportToCSV(courses)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px] justify-center text-base"
                >
                  <Download className="h-5 w-5" />
                  <span className="font-medium">Export to CSV</span>
                </button>
              </div>
            </div>

            {/* Active Filters */}
            {(filters.provider !== 'All' || filters.category !== 'All' || filters.level !== 'All' || filters.search) && (
              <div className="flex flex-wrap gap-2">
                {filters.provider !== 'All' && (
                  <button
                    onClick={() => setFilters({ ...filters, provider: 'All' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    Provider: {filters.provider ? getProviderInfo(filters.provider).name : 'All'}
                    <X className="h-4 w-4" />
                  </button>
                )}
                {filters.category !== 'All' && (
                  <button
                    onClick={() => setFilters({ ...filters, category: 'All' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    Category: {filters.category}
                    <X className="h-4 w-4" />
                  </button>
                )}
                {filters.level !== 'All' && (
                  <button
                    onClick={() => setFilters({ ...filters, level: 'All' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    Level: {filters.level}
                    <X className="h-4 w-4" />
                  </button>
                )}
                {filters.search && (
                  <button
                    onClick={() => setFilters({ ...filters, search: '' })}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 hover:bg-blue-100"
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
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Clear all filters
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Filters */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Provider Filter */}
              <div>
                <p className="text-base font-medium text-gray-500 mb-3">Provider:</p>
                <select
                  value={filters.provider}
                  onChange={(e) => setFilters({ ...filters, provider: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base"
                >
                  <option value="All">All Providers</option>
                  {Object.keys(getProviderInfo).map((provider) => (
                    <option key={provider} value={provider}>
                      {getProviderInfo(provider).name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-base font-medium text-gray-500 mb-3">Category:</p>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base"
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
                <p className="text-base font-medium text-gray-500 mb-3">Level:</p>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base"
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

        {/* Course Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Loading courses...</p>
          </div>
        ) : courses.length > 0 ? (
          <>
            <div className="mb-6 text-center">
              <p className="text-blue-600 font-medium">
                {paginatedData.totalCourses > 0 ? `Showing ${paginatedData.courses.length} of ${paginatedData.totalCourses} courses` : 'No courses found'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  )
} 