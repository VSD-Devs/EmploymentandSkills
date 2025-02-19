import { Metadata } from 'next'
import { GraduationCap, BookOpen, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import type { FundingType } from '@/types/funding'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

// Define the type for our CSV course data
interface ASFCourse {
  'Provider name': string
  'Learning aim reference': string
  'Learning aim title': string
  'Funding model': string
}

// Read and parse the CSV file
const csvFilePath = path.join(process.cwd(), 'public/images/ASF provision.csv')
const csvData = fs.readFileSync(csvFilePath, 'utf-8')
const courses: ASFCourse[] = parse(csvData, {
  columns: true,
  skip_empty_lines: true
})

export const metadata: Metadata = {
  title: 'Adult Skills Funding | South Yorkshire',
  description: 'Access funded training opportunities in South Yorkshire. Check your eligibility and explore available courses to enhance your skills.',
}

const fundingTypeColors: Record<FundingType, { bg: string; text: string }> = {
  'Fully Funded': { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  'Co-Funded': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'Advanced Learner Loan': { bg: 'bg-purple-100', text: 'text-purple-800' },
}

const requirements = [
  'Maximum salary of £24,000',
  'No higher than a full level 3 qualification',
  'Aged 19 or over',
  'Living in Yorkshire'
]

const benefits = [
  'Complete cost coverage',
  'Flexible learning options',
  'Industry-recognised qualifications',
  'Career progression opportunities'
]

export default function AdultSkillsFunding() {
  return (
    <main className="flex-auto bg-zinc-50">
      <div className="relative bg-[#111827] py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/t-levels-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/90 to-[#111827]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Adult Skills Funding</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Fully Funded Training for Adults
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Access fully funded training opportunities to enhance your skills and advance your career in South Yorkshire.
            </p>
          </div>
        </div>
      </div>

      <Container className="mt-16 sm:mt-20">
        {/* Requirements and Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-emerald-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Requirements</h2>
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-emerald-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eligibility Checker Section */}
        <section className="mb-16 bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-emerald-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Check Your Eligibility
            </h2>
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <select
                    id="age"
                    className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select your age range</option>
                    <option value="19-23">19-23</option>
                    <option value="24-30">24-30</option>
                    <option value="31-40">31-40</option>
                    <option value="41+">41+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="residency" className="block text-sm font-medium text-gray-700 mb-2">
                    Residency
                  </label>
                  <select
                    id="residency"
                    className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select your residency status</option>
                    <option value="uk">UK Resident</option>
                    <option value="eu">EU Settled Status</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="employment" className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Status
                  </label>
                  <select
                    id="employment"
                    className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select your employment status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Qualification
                  </label>
                  <select
                    id="qualification"
                    className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select your highest qualification</option>
                    <option value="none">No Formal Qualifications</option>
                    <option value="gcse">GCSEs</option>
                    <option value="alevel">A-Levels</option>
                    <option value="degree">Degree</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-lg"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </section>

        {/* Available Courses Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course['Learning aim reference']}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course['Learning aim title']}
                    </h3>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {course['Funding model']}
                  </span>
                </div>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <dt className="sr-only">Provider</dt>
                    <dd className="text-gray-700">{course['Provider name']}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-emerald-100">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Need More Information?
          </h2>
          <p className="text-gray-700 mb-6">
            Our team is here to help you understand your funding options and find the right course for your career goals.
          </p>
          <button
            type="button"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-lg"
          >
            Contact Support
          </button>
        </section>
      </Container>
    </main>
  )
} 