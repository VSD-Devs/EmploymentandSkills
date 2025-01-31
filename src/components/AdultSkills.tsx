'use client'

import React from 'react'
import { Clock, CheckCircle2, Users, ChevronRight, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  employmentSupport: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  fundedTraining: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  mentalHealth: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
}

const AdultSkills = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/adult-skills-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
            quality={90}
          />
          <div className="absolute inset-0 bg-[#111827]/60 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium">Adult Skills & Training</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Transform Your Career<br />in Yorkshire
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Access funded support, training, and resources to help you thrive in Yorkshire's growing industries. Whether you're looking to upskill, change careers, or get back into work, we're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Free Support</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              All our services and courses are fully funded for Yorkshire residents.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Flexible Learning</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Choose from online, in-person, or hybrid learning options to suit your schedule.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Expert Support</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get guidance from industry professionals and career advisors.
            </p>
          </div>
        </div>
      </div>

      {/* Employment Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src={IMAGES.employmentSupport}
              alt="Employment support session"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">94% Success Rate</div>
                  <div className="text-gray-600">Our career guidance leads to successful job placements</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Career Development</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Employment Support</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Get personalised career guidance, CV writing support, and interview preparation from our expert advisors.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">One-to-one Career Coaching</h3>
                    <p className="text-gray-600">Personalised guidance sessions with experienced career advisors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Job Search Strategy</h3>
                    <p className="text-gray-600">Learn effective techniques to find and secure your ideal role</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Interview Skills Workshop</h3>
                    <p className="text-gray-600">Practice sessions to boost your confidence and performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/employment-support"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors text-lg shadow-sm"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/success-stories"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 group text-lg"
              >
                View Success Stories
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Funded Training Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Professional Development</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Funded Training</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Access fully funded courses and qualifications in Yorkshire's high-growth sectors.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Digital Skills Certifications</h3>
                    <p className="text-gray-600">Industry-standard digital skills training and certification</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Professional Qualifications</h3>
                    <p className="text-gray-600">Recognised qualifications to boost your career prospects</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Sector-Specific Training</h3>
                    <p className="text-gray-600">Specialised programmes for Yorkshire's growth industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/courses"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors text-lg shadow-sm"
              >
                Browse Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/course-catalogue"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500 group text-lg"
              >
                View Course Catalogue
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src={IMAGES.fundedTraining}
              alt="Training session"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-7 w-7 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">2,500+ Graduates</div>
                  <div className="text-gray-600">Successfully completed our training programmes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Health Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src={IMAGES.mentalHealth}
              alt="Mental health support"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">Confidential Support</div>
                  <div className="text-gray-600">Professional mental health and wellbeing services</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Wellbeing Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mental Health Support</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Access confidential mental health support and resources to help you maintain wellbeing during your career journey.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Counselling Services</h3>
                    <p className="text-gray-600">Professional, confidential support when you need it most</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Stress Management</h3>
                    <p className="text-gray-600">Learn techniques to manage work-related stress effectively</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Wellbeing Resources</h3>
                    <p className="text-gray-600">Access tools and guidance for maintaining mental health</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/mental-health-support"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors text-lg shadow-sm"
              >
                Get Support
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/wellbeing-resources"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-500 group text-lg"
              >
                View Resources
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#111827] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Need Help? We're Here For You</h2>
            <p className="text-gray-400 text-lg">
              Our team is ready to support you on your journey to success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-6 w-6 text-gray-400" />
                <h3 className="font-semibold text-gray-300 text-lg">Call us at</h3>
              </div>
              <p className="text-3xl font-bold mb-2">0800 123 4567</p>
              <p className="text-gray-400">Monday to Friday, 9am - 5pm</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-6 w-6 text-gray-400" />
                <h3 className="font-semibold text-gray-300 text-lg">Email us at</h3>
              </div>
              <p className="text-3xl font-bold mb-2">support@yorkshirepathways.com</p>
              <p className="text-gray-400">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdultSkills