'use client'

import { ArrowLeft, Building2, MapPin, Clock, Calendar, GraduationCap, ExternalLink, HelpCircle, X } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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

// This would typically come from an API/database
const COURSES = [
  {
    id: 1,
    title: 'Level 3 Diploma in IT & Telecoms',
    provider: 'Aim2Learn',
    providerUrl: 'https://aim2learn.org/',
    location: 'Sheffield',
    type: 'Professional',
    duration: '12 months',
    startDate: 'Flexible start dates',
    description: 'Comprehensive diploma covering IT and telecommunications, delivered face-to-face in Sheffield.',
    fundingInfo: 'Fully funded for eligible participants',
    category: 'Digital & IT',
    deliveryMethod: 'Face to Face',
    requirements: [
      'Aged 19 or over',
      'Living in South Yorkshire',
      'Right to work in the UK',
      'Basic computer literacy'
    ],
    whatYoullLearn: [
      'Network infrastructure and security',
      'Telecommunications systems',
      'IT support and troubleshooting',
      'Professional communication skills',
      'Project management basics'
    ],
    careerOpportunities: [
      'IT Support Technician',
      'Network Administrator',
      'Telecommunications Engineer',
      'Technical Support Specialist'
    ]
  },
  // Add other courses here...
]

export default function CoursePage() {
  const { id } = useParams() as { id: string };
  const course = COURSES.find(c => c.id === parseInt(id));
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <Link href="/courses" className="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/courses" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>
      </div>

      {/* Main Content */}
      <div>
        {/* Header - Full Width */}
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

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-8 sm:p-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Provider</p>
                    <p className="text-base sm:text-lg text-gray-900">{course.provider}</p>
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

              {/* Course Description */}
              <div className="mb-12">
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

              {/* Course Content in Two Columns */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  {/* What You'll Learn */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                    <ul className="grid gap-4">
                      {course.whatYoullLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <GraduationCap className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-lg text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                    <ul className="space-y-4">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-3 text-lg text-gray-600">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Career Opportunities */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                    <ul className="grid gap-4">
                      {course.careerOpportunities.map((career, index) => (
                        <li key={index} className="flex items-center gap-3 text-lg text-gray-600">
                          <div className="h-2.5 w-2.5 rounded-full bg-purple-600 flex-shrink-0" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Funding Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Funding Information</h2>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <p className="text-lg text-blue-900 flex-grow">{course.fundingInfo}</p>
                        <button
                          onClick={() => setIsEligibilityModalOpen(true)}
                          className="p-1.5 hover:bg-blue-100 rounded-full transition-colors flex-shrink-0"
                          aria-label="View eligibility criteria"
                        >
                          <HelpCircle className="h-6 w-6 text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={course.providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-500 transition-colors"
                >
                  Visit Provider Website
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <Link
                  href="/eligibility"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-100 text-gray-900 text-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
      />
    </div>
  )
} 