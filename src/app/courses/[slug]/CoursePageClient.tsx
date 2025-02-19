'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Building2, MapPin, Phone, Globe, ChevronRight, Clock, Calendar, GraduationCap, ExternalLink, HelpCircle, X, Briefcase } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useState } from 'react'

// Modal Component
const EligibilityModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">Eligibility Criteria</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Basic Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                  <span>Aged 19 or over</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                  <span>Living in South Yorkshire (Sheffield, Rotherham, Barnsley, or Doncaster)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                  <span>Right to work in the UK</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Additional Information</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                  <span>Some courses may have specific entry requirements or prerequisites</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                  <span>Priority may be given to unemployed individuals or those looking to upskill in their current role</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                  <span>Evidence of eligibility will be required during the application process</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                For specific eligibility questions or to discuss your circumstances, please contact our team or check the eligibility page.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-100">
          <div className="flex justify-end">
            <Link
              href="/eligibility"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Check Full Eligibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Provider {
  name: string;
  description: string;
  address: string;
  phone: string;
  website: string;
}

interface Course {
  title: string;
  slug: string;
  type: string;
  category: string;
  description: string;
  location: string;
  duration: string;
  startDate: string;
  deliveryMethod: string;
  fundingInfo: string;
  whatYoullLearn: string[];
  careerOpportunities: string[];
  provider: string;
}

interface CoursePageClientProps {
  course: Course;
  provider: Provider;
}

export default function CoursePageClient({ course, provider }: CoursePageClientProps) {
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs items={[
        { label: 'Courses', href: '/courses' },
        { label: course.title, href: `/courses/${course.slug}` },
      ]} />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
              {course.type}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
              {course.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {course.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Course Information */}
          <div className="lg:col-span-2">
            {/* Key Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Provider</p>
                    <p className="text-base sm:text-lg text-gray-900">{provider.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-base sm:text-lg text-gray-900">{course.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-base sm:text-lg text-gray-900">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Start Date</p>
                    <p className="text-base sm:text-lg text-gray-900">{course.startDate}</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {course.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  This course is delivered through {course.deliveryMethod.toLowerCase()} learning, making it {course.deliveryMethod === 'Face to Face' ? 'ideal for hands-on learners who prefer in-person instruction' : 'flexible and accessible for learners who prefer to study remotely'}. {course.fundingInfo} through the South Yorkshire Mayoral Combined Authority, supporting your journey towards a rewarding career in {course.category}.
                </p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <ul className="grid gap-4">
                {course.whatYoullLearn.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-lg text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <ul className="grid gap-4">
                {course.careerOpportunities.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-lg text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Provider Information */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Provider</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">{provider.name}</h3>
                    <p className="text-gray-600 mt-1">{provider.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">{provider.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Contact</h3>
                    <p className="text-gray-600 mt-1">{provider.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Website</h3>
                    <a 
                      href={provider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 mt-1 inline-block"
                    >
                      Visit provider website
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setIsEligibilityModalOpen(true)}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors gap-2"
                >
                  <HelpCircle className="h-5 w-5" />
                  Check Eligibility
                </button>

                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Enquire Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Modal */}
      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
      />
    </main>
  )
} 