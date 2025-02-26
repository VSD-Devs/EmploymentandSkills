'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Briefcase, MapPin, Building2, GraduationCap, Clock, 
  ArrowLeft, ArrowRight, CalendarDays, ChevronLeft, 
  ExternalLink, Check, AlertCircle, Info, UserRound, Award, BookOpen
} from 'lucide-react'
import { DfeVacancy } from '@/services/dfeApi'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function VacancyDetailPage({ params }: { params: { reference: string } }) {
  const { reference } = params
  const [vacancy, setVacancy] = useState<DfeVacancy | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVacancyDetails = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(`/api/vacancies/${reference}`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setVacancy(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
        setError(`Failed to load apprenticeship details. ${errorMessage}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVacancyDetails()
  }, [reference])

  // Format date to British format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  // Format salary information
  const formatSalary = (vacancy: DfeVacancy) => {
    const wage = vacancy.wage
    if (!wage) return 'Salary details on application'

    // Include additional wage information if available
    const additionalInfo = wage.wageAdditionalInformation 
      ? ` (${wage.wageAdditionalInformation})`
      : ''

    switch (wage.wageType) {
      case 'Custom':
        if (wage.wageAmount) {
          const amount = wage.wageAmount.toLocaleString('en-GB')
          const unit = wage.wageUnit !== 'Unspecified' 
            ? ` ${wage.wageUnit.toLowerCase()}`
            : ''
          return `£${amount}${unit}${additionalInfo}`
        }
        return wage.wageAdditionalInformation || 'Salary details on application'
      case 'CompetitiveSalary':
        return `Competitive salary${additionalInfo}`
      case 'ApprenticeshipMinimum':
        return `Apprenticeship minimum wage${additionalInfo}`
      case 'NationalMinimum':
        return `National minimum wage${additionalInfo}`
      default:
        return wage.wageAdditionalInformation || 'Salary details on application'
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumbs */}
      <div className="mb-4 pl-4">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Apprenticeships', href: '/apprenticeships' },
          { label: 'Vacancies', href: '/apprenticeships/vacancies' },
          { label: vacancy?.title || 'Loading...', href: `/apprenticeships/vacancies/${reference}` },
        ]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin mb-6"></div>
            <p className="text-2xl text-gray-600">Loading apprenticeship details...</p>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="bg-red-50 rounded-xl p-8 border border-red-100 shadow-md max-w-3xl mx-auto text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-700 mb-4">Unable to load apprenticeship details</h2>
            <p className="text-xl text-red-600 mb-6">{error}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors text-lg"
              >
                Try Again
              </button>
              <Link
                href="/apprenticeships/vacancies"
                className="px-6 py-3 bg-white text-red-600 rounded-lg border border-red-200 hover:bg-red-50 transition-colors text-lg"
              >
                Return to Vacancies
              </Link>
            </div>
          </div>
        )}

        {/* Vacancy Details */}
        {!isLoading && !error && vacancy && (
          <>
            {/* Header Section - Add top margin */}
            <div className="relative mt-12 mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-700 shadow-xl">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-emerald-500 opacity-20 -mr-20 -mb-20"></div>
              
              <div className="px-8 py-12 relative z-10">
                <div className="flex flex-wrap items-center gap-3 text-emerald-100 mb-4">
                  <GraduationCap className="h-6 w-6" />
                  <span className="text-xl font-medium">{vacancy.apprenticeshipLevel}</span>
                  {vacancy.isDisabilityConfident && (
                    <span className="bg-blue-500/20 backdrop-blur-sm text-blue-50 px-3 py-1 rounded-full text-base font-medium inline-flex items-center gap-1 border border-blue-300/30">
                      <Check className="h-4 w-4" />
                      Disability Confident
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">{vacancy.title}</h1>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-white/90 mb-8 max-w-4xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base text-white/70">Employer</p>
                      <p className="text-xl font-medium">{vacancy.employerName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base text-white/70">Location</p>
                      <p className="text-xl font-medium">{vacancy.address.postcode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base text-white/70">Course</p>
                      <p className="text-xl font-medium">{vacancy.course.route}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base text-white/70">Duration</p>
                      <p className="text-xl font-medium">{vacancy.expectedDuration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={vacancy.vacancyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl text-xl font-medium"
                  >
                    Apply Now
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-emerald-600/30 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-emerald-600/40 transition-colors shadow-lg text-xl font-medium"
                  >
                    Get Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Quick Info Cards - Make more compact */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
                    <p className="text-base text-gray-500 mb-1">Salary</p>
                    <p className="text-xl font-semibold text-emerald-700">{formatSalary(vacancy)}</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
                    <p className="text-base text-gray-500 mb-1">Posted</p>
                    <p className="text-xl font-semibold text-emerald-700">{formatDate(vacancy.postedDate)}</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
                    <p className="text-base text-gray-500 mb-1">Closing Date</p>
                    <p className="text-xl font-semibold text-emerald-700">{formatDate(vacancy.closingDate)}</p>
                  </div>
                </div>
                
                {/* Description Section - Remove icon */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    {/* <Briefcase className="h-7 w-7 text-emerald-600" /> */}
                    About This Apprenticeship
                  </h2>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="whitespace-pre-line leading-relaxed text-xl">{vacancy.description}</p>
                  </div>
                </section>
                
                {/* Apprenticeship Standard Information - New Section */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    {/* <GraduationCap className="h-7 w-7 text-emerald-600" /> */}
                    Apprenticeship Standard Details
                  </h2>
                  
                  <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Standard Information */}
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-800 mb-4">Standard Information</h3>
                        <dl className="space-y-4">
                          <div>
                            <dt className="text-base text-emerald-700 font-medium">Standard</dt>
                            <dd className="text-xl">{vacancy.course.title || vacancy.course.route}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-base text-emerald-700 font-medium">Level</dt>
                            <dd className="text-xl">{vacancy.apprenticeshipLevel}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-base text-emerald-700 font-medium">Course Code</dt>
                            <dd className="text-xl">{vacancy.course.larsCode}</dd>
                          </div>
                          
                          {vacancy.expectedDuration && (
                            <div>
                              <dt className="text-base text-emerald-700 font-medium">Duration</dt>
                              <dd className="text-xl">{vacancy.expectedDuration}</dd>
                            </div>
                          )}
                          
                          <div className="mt-2">
                            <a 
                              href={`https://www.instituteforapprenticeships.org/apprenticeship-standards/?keywords=${encodeURIComponent(vacancy.course.title || vacancy.course.route)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-emerald-700 hover:text-emerald-600 font-medium"
                            >
                              View full standard information
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Location Section - Enhanced employer focus */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    Employer Location
                  </h2>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {vacancy.employerName}'s location:
                    </p>
                    <address className="not-italic text-gray-700 text-xl leading-relaxed">
                      {[
                        vacancy.address.addressLine1,
                        vacancy.address.addressLine2,
                        vacancy.address.addressLine3,
                        vacancy.address.addressLine4,
                        vacancy.address.postcode
                      ].filter(Boolean).join(', ')}
                    </address>
                  </div>
                </section>
                
                {/* Training Provider - Reduced prominence */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-gray-600" />
                    Training Provider
                  </h3>
                  <div className="p-5 border-l-4 border-gray-200">
                    <p className="text-xl text-gray-700">
                      Delivered by {vacancy.providerName}
                    </p>
                  </div>
                </section>
              </div>

              {/* Sidebar - Simplify cards */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4">Application Timeline</h3>
                  <div className="space-y-5">
                    <div>
                      <p className="text-base text-gray-500">Posted</p>
                      <p className="text-xl font-medium">{formatDate(vacancy.postedDate)}</p>
                    </div>
                    {/* Add other timeline items with same structure */}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4">Key Details</h3>
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-base text-gray-500">Hours per week</dt>
                      <dd className="text-xl font-medium">{vacancy.hoursPerWeek}</dd>
                    </div>
                    {/* Add other key details with same structure */}
                  </dl>
                </div>
              </div>
            </div>
            
            {/* Action Buttons - Bottom */}
            <div className="mt-12 border-t border-gray-100 pt-8 flex flex-wrap justify-between items-center">
              <Link 
                href="/apprenticeships/vacancies"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm text-lg"
              >
                <ChevronLeft className="h-5 w-5" />
                Back to vacancies
              </Link>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors shadow-sm text-lg font-medium"
                >
                  Get Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <a
                  href={vacancy.vacancyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors shadow-md hover:shadow-lg text-lg font-medium"
                >
                  Apply Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
} 