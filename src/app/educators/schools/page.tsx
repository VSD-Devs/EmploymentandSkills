'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  Building2, 
  Users, 
  ClipboardList, 
  Calendar, 
  BookOpen,
  MessageSquare,
  GraduationCap
} from 'lucide-react'
import SchoolMarketplace from '@/components/SchoolMarketplace'
import Breadcrumbs from '@/components/Breadcrumbs'

const EducatorsSchoolsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Educators', href: '/educators' },
        { label: 'Schools', href: '/educators/schools' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/educators-schools-hero.jpg"
            alt="Educators supporting schools in South Yorkshire"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">For Schools</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enhance Your Career Education Programme
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Access resources and connect with training providers to deliver outstanding careers guidance and work-related learning.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link 
                href="#marketplace"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Post Opportunity
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/educators"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
              >
                Back to Selection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Access Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-sm font-medium">Provider Access Legislation</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Rights and Responsibilities</h2>
              <p className="text-gray-600 text-lg mb-8">
                The Provider Access Legislation ensures that schools provide opportunities for training providers to engage with pupils. Learn about your rights and how to facilitate meaningful encounters.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Access to All Pupils</h3>
                    <p className="text-gray-600">Opportunities to speak with pupils in years 8-13 about technical education and apprenticeships</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple Encounters</h3>
                    <p className="text-gray-600">At least six encounters with providers of approved technical education qualifications or apprenticeships</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Policy Requirements</h3>
                    <p className="text-gray-600">Schools must publish a policy statement setting out arrangements for provider access</p>
                  </div>
                </div>
              </div>
              <Link
                href="/educators/provider-access-guide"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500"
              >
                Download Provider Access Guide
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/provider-access.jpg"
                alt="Students engaging with education providers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Replace the marketplace section with the component */}
      <SchoolMarketplace listings={marketplaceListings} />

      {/* Resources Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Educational Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link 
                key={index}
                href={resource.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center text-emerald-600 group-hover:text-emerald-500">
                    <span className="font-medium">Access resources</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const resources = [
  {
    title: 'Career Exploration Toolkit',
    description: 'Lesson plans and activities to help students explore different career paths.',
    image: '/images/resource-toolkit.jpg',
    href: '/educators/toolkit'
  },
  {
    title: 'Industry Insights',
    description: 'Up-to-date information about Yorkshire\'s key industries and future opportunities.',
    image: '/images/resource-insights.jpg',
    href: '/educators/insights'
  },
  {
    title: 'Skills Development',
    description: 'Resources to help students develop essential workplace skills.',
    image: '/images/resource-skills.jpg',
    href: '/educators/skills'
  }
]

const marketplaceListings = [
  {
    type: 'Career Talk',
    title: 'Digital Careers Insight Session',
    description: 'Looking for tech professionals to discuss careers in software development and cyber security.',
    school: 'Meadowhead School',
    yearGroup: 'Year 10 & 11',
    timing: 'March 2024',
    date: 'Posted 2 days ago',
    href: '/educators/marketplace/digital-careers'
  },
  {
    type: 'Mock Interviews',
    title: 'Practice Interview Day',
    description: 'Seeking professionals to conduct mock interviews and provide feedback to sixth form students.',
    school: 'Notre Dame High School',
    yearGroup: 'Year 12',
    timing: 'April 2024',
    date: 'Posted 1 week ago',
    href: '/educators/marketplace/mock-interviews'
  },
  {
    type: 'Workshop',
    title: 'Engineering Workshop',
    description: 'Need engineering professionals to run hands-on workshops showcasing different engineering disciplines.',
    school: 'Silverdale School',
    yearGroup: 'Year 9',
    timing: 'May 2024',
    date: 'Posted 3 days ago',
    href: '/educators/marketplace/engineering-workshop'
  }
]

export default EducatorsSchoolsPage 