'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ChevronRight, Users, Building2, GraduationCap, HeartHandshake } from 'lucide-react'
import SchoolMarketplace from '@/components/SchoolMarketplace'
import Breadcrumbs from '@/components/Breadcrumbs'

const giveAnHourListings = [
  {
    type: 'Career Talk',
    title: 'Digital Careers Insight',
    description: 'Looking for tech professionals to discuss careers in software development',
    school: 'Meadowhead School',
    yearGroup: 'Year 10 & 11',
    timing: 'March 2024',
    date: 'Posted 2 days ago',
    href: '/give-an-hour/digital-careers'
  },
  {
    type: 'Mock Interviews',
    title: 'Practice Interview Day',
    description: 'Seeking professionals to conduct mock interviews for sixth form students',
    school: 'Notre Dame High School',
    yearGroup: 'Year 12',
    timing: 'April 2024',
    date: 'Posted 1 week ago',
    href: '/give-an-hour/mock-interviews'
  },
  {
    type: 'Workshop',
    title: 'Engineering Workshop',
    description: 'Need engineering professionals to run hands-on workshops',
    school: 'Silverdale School',
    yearGroup: 'Year 9',
    timing: 'May 2024',
    date: 'Posted 3 days ago',
    href: '/give-an-hour/engineering-workshop'
  }
]

const GiveAnHourPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Give an Hour', href: '/give-an-hour' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/give-an-hour-hero.jpg"
            alt="Volunteering opportunities in South Yorkshire"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-purple-300 mb-4">
              <div className="p-1.5 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-400/20">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Give an Hour</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Give an hour, make a difference
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Share your career journey and inspire the next generation. Your experience can help shape a young person's future career choices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/give-an-hour"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors"
              >
                Register Interest
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Get Involved</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How You Can Help</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We would like to invite you to give an hour and make a difference to the future career choices that a young person makes.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Career Talks</h3>
                    <p className="text-gray-600">Share your career journey and insights with students</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Mock Interviews</h3>
                    <p className="text-gray-600">Help students prepare for their future careers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Workplace Visits</h3>
                    <p className="text-gray-600">Show students what your workplace is really like</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/images/give-hour.jpg"
              alt="Volunteer session"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-1">Quick Impact</div>
                  <div className="text-gray-600">Just one hour can inspire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="bg-purple-50 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-medium tracking-wide uppercase">Benefits to Your Business</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Get Involved?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              84% of employers say that engagement is encouraging young people to take up careers in their sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Local Connections</h3>
              <p className="text-gray-600">
                An opportunity to give back to your local community and develop connections with local schools
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Develop Your Team</h3>
              <p className="text-gray-600">
                Give young people a better understanding of your industry and develop your current workforce
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Future Talent Pipeline</h3>
              <p className="text-gray-600">
                Build a future talent pipeline and help shape the skills of tomorrow's workforce
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-sm font-medium tracking-wide uppercase">Our Impact</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Making a Difference Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our community is helping to shape the future of young people in Yorkshire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">1,000+</div>
              <div className="text-sm text-gray-600">Hours Given</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-600">Volunteers</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">10,000+</div>
              <div className="text-sm text-gray-600">Students Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-50 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join our network of volunteers and help shape the future workforce of Yorkshire. Your hour can make all the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/give-an-hour"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors text-lg shadow-sm"
              >
                Register Your Interest
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/volunteer-stories"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-500 group text-lg"
              >
                Read Volunteer Stories
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add SchoolMarketplace at the bottom */}
      <SchoolMarketplace listings={giveAnHourListings} showPostOpportunity={false} />
    </main>
  )
}

export default GiveAnHourPage 