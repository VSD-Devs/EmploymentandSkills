'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight,
  ChevronLeft,
  Users,
  Target,
  CheckCircle2,
  FileCheck,
  ArrowLeft,
  Briefcase,
  Heart,
  Building2,
  MessageSquare,
  Stethoscope
} from 'lucide-react'

const WorkWellPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    employmentStatus: '',
    employer: '',
    healthIssues: '',
    supportType: '',
    referralSource: '',
    preferredContact: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/employment-support"
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2 text-gray-600" />
          <span className="text-gray-600 font-medium">Back to Programmes</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/work-well.jpg"
            alt="WorkWell Service"
            fill
            className="object-cover object-center brightness-[0.7] saturate-[0.85]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Heart className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">Early Intervention Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              WorkWell Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Early intervention support for individuals and employers to manage health conditions and maintain employment.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Get Support
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#overview"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How WorkWell Helps</h2>
            <p className="text-lg text-gray-600">
              Our WorkWell service provides early intervention support to help you manage health conditions and stay in work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Health Assessment",
                description: "Expert assessment of health-related barriers affecting your work life."
              },
              {
                icon: Building2,
                title: "Employer Support",
                description: "Guidance for employers on workplace adjustments and support measures."
              },
              {
                icon: MessageSquare,
                title: "Ongoing Support",
                description: "Regular check-ins and support to help you manage your condition at work."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is WorkWell Right for You?</h2>
            <p className="text-lg text-gray-600">
              Our service is designed for individuals who need support managing health conditions at work.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
              {[
                "Currently in work but struggling with health conditions",
                "Recently off work due to health issues",
                "Need support managing a health condition at work",
                "Employer looking for guidance on supporting staff",
                "Based in a participating NHS region",
                "Want to prevent health issues affecting work"
              ].map((criterion, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <FileCheck className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Support Request</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request WorkWell Support</h2>
            <p className="text-gray-600">
              Complete the form below to request support. Our team will contact you within 2 working days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="space-y-6">
                {[
                  { name: 'fullName', label: 'Full Name', type: 'text' },
                  { name: 'email', label: 'Email Address', type: 'email' },
                  { name: 'phone', label: 'Phone Number', type: 'tel' },
                  {
                    name: 'employmentStatus',
                    label: 'Current Situation',
                    type: 'select',
                    options: [
                      { value: '', label: 'Select your current situation' },
                      { value: 'working', label: 'Currently working but struggling' },
                      { value: 'sickLeave', label: 'On sick leave' },
                      { value: 'employer', label: 'Employer seeking support' }
                    ]
                  },
                  { name: 'employer', label: 'Employer Name (if applicable)', type: 'text' },
                  {
                    name: 'healthIssues',
                    label: 'Brief Description of Health Issues',
                    type: 'textarea'
                  },
                  {
                    name: 'supportType',
                    label: 'Type of Support Needed',
                    type: 'select',
                    options: [
                      { value: '', label: 'Select type of support needed' },
                      { value: 'assessment', label: 'Health assessment' },
                      { value: 'workplace', label: 'Workplace adjustments' },
                      { value: 'guidance', label: 'Employer guidance' },
                      { value: 'other', label: 'Other support' }
                    ]
                  },
                  {
                    name: 'referralSource',
                    label: 'How did you hear about us?',
                    type: 'select',
                    options: [
                      { value: '', label: 'Select referral source' },
                      { value: 'gp', label: 'GP/Healthcare Provider' },
                      { value: 'employer', label: 'Employer' },
                      { value: 'self', label: 'Self-referral' },
                      { value: 'other', label: 'Other' }
                    ]
                  },
                  {
                    name: 'preferredContact',
                    label: 'Preferred Contact Method',
                    type: 'select',
                    options: [
                      { value: '', label: 'Select preferred contact method' },
                      { value: 'email', label: 'Email' },
                      { value: 'phone', label: 'Phone' },
                      { value: 'text', label: 'Text Message' }
                    ]
                  }
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required={field.name !== 'employer'}
                      />
                    )}
                  </div>
                ))}

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Request
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default WorkWellPage 