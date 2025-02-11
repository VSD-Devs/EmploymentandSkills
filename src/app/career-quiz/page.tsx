'use client';

import CareerQuiz from '@/components/CareerQuiz'
import { ArrowRight, Building2, GraduationCap, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export default function CareerQuizPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Government-style header banner */}
      <div className="w-full bg-emerald-700 text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">South Yorkshire Combined Authority</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb with government styling */}
      <div className="border-b border-zinc-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-zinc-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/pathways" className="hover:underline">Career Pathways</Link>
            <span>/</span>
            <span className="text-zinc-900">Career Assessment</span>
          </nav>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main content area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - Main content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Career Assessment Service
            </h1>
            <div className="prose prose-zinc max-w-none mb-8">
              <p className="text-lg text-zinc-600">
                This official South Yorkshire service helps residents discover local career opportunities and funded training programmes. Our assessment is designed in partnership with regional employers and education providers.
              </p>
            </div>

            {/* Quiz Component */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <CareerQuiz />
            </div>
          </div>

          {/* Right column - Key information */}
          <div className="lg:col-span-1">
            {/* Service Information Box */}
            <div className="bg-zinc-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-zinc-900 mb-4">Service Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-zinc-900">Who can use this service</h3>
                    <p className="text-sm text-zinc-600">Available to all South Yorkshire residents aged 16 and over</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-zinc-900">Coverage Area</h3>
                    <p className="text-sm text-zinc-600">Sheffield, Rotherham, Doncaster, and Barnsley</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-zinc-900">Support Available</h3>
                    <p className="text-sm text-zinc-600">Career guidance, training funds, and employment support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-xl font-semibold text-zinc-900 mb-4">Regional Statistics</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
                  <span className="text-zinc-600">Local Employers</span>
                  <span className="font-semibold text-emerald-600">1,000+</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
                  <span className="text-zinc-600">Career Pathways</span>
                  <span className="font-semibold text-emerald-600">15+</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
                  <span className="text-zinc-600">Training Courses</span>
                  <span className="font-semibold text-emerald-600">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">Success Rate</span>
                  <span className="font-semibold text-emerald-600">89%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 