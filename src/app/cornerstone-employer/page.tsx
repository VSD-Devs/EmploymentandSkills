'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, ChevronRight, Users, Briefcase, HeartHandshake, GraduationCap } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

const CornerstoneEmployerPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Cornerstone Employer', href: '/cornerstone-employer' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/cornerstone.jpg"
            alt="Cornerstone employers making a difference"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-blue-300 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <Briefcase className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Cornerstone Employer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Lead the Change in Yorkshire's Future
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Join our network of influential businesses shaping careers education and creating opportunities for young people.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/cornerstone-employer"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Become a Cornerstone Employer
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#learn-more"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is a Cornerstone Employer Section */}
      <div id="learn-more" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase">What is a Cornerstone Employer?</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Partnership for Change</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A Cornerstone Employer is a business of any size that provides high-quality careers outreach and opportunities for young people aligned with the local economy.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Local Impact</h3>
                    <p className="text-gray-600">Work within a geographical area to target local careers education</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Community Collaboration</h3>
                    <p className="text-gray-600">Partner with like-minded businesses to drive greater impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Strategic Leadership</h3>
                    <p className="text-gray-600">Shape and inform education, parents and careers guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/images/cornerstone.jpg"
              alt="Cornerstone employer impact"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">Community Leader</div>
                  <div className="text-gray-600">Drive local education change</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Become a Cornerstone Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Become a Cornerstone Employer?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join a network of businesses making a real difference in careers education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Mobility</h3>
              <p className="text-gray-600">
                Work strategically with your local Careers Hub team to support those who face the most barriers to reach their potential
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Collaborate with like-minded businesses and partners to drive greater impact at scale
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Education</h3>
              <p className="text-gray-600">
                Deliver quality careers education outreach in your area through the Employer Standards Framework
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Make a Difference in Yorkshire's Future
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our network of Cornerstone Employers and help shape the future of careers education in your region.
          </p>
          <Link
            href="/register-interest"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-sm"
          >
            Register Your Interest
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default CornerstoneEmployerPage 