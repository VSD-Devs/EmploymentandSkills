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
  Network,
  Heart,
  Handshake,
  Building2,
  GraduationCap,
  HelpingHand
} from 'lucide-react'

const IntegratedSupportPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    supportNeeded: '',
    currentServices: '',
    healthcareProvider: '',
    preferredContact: '',
    additionalInfo: ''
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
            src="/images/integrated-support.jpg"
            alt="Integrated Support Network"
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
              <Network className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">Community Support Network</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Integrated Support Network
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access a network of local services and community resources to support your journey to better health and employment.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Access Support
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Support Network</h2>
            <p className="text-lg text-gray-600">
              We connect you with local services and resources to provide comprehensive support for your health and employment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HelpingHand,
                title: "Local Services",
                description: "Connect with healthcare providers, community groups, and support services in your area."
              },
              {
                icon: Building2,
                title: "Professional Support",
                description: "Access debt advice, benefits guidance, and healthcare referrals through our network."
              },
              {
                icon: Handshake,
                title: "Community Resources",
                description: "Benefit from peer support groups and community-based activities to support your wellbeing."
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

      {/* Available Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-lg text-gray-600">
              Our network provides access to a wide range of support services to help you achieve your goals.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
              {[
                "Healthcare referrals and assessments",
                "Mental health support services",
                "Debt and benefits advice",
                "Local community support groups",
                "Employment skills workshops",
                "Wellbeing activities and programmes"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <FileCheck className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Support Request</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Support Services</h2>
            <p className="text-gray-600">
              Complete the form below to connect with our support network. We will match you with the most appropriate services.
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
                    name: 'location',
                    label: 'Your Location',
                    type: 'text',
                    placeholder: 'City or postcode'
                  },
                  {
                    name: 'supportNeeded',
                    label: 'What support do you need?',
                    type: 'select',
                    options: [
                      { value: '', label: 'Select type of support needed' },
                      { value: 'health', label: 'Healthcare support' },
                      { value: 'mental', label: 'Mental health support' },
                      { value: 'financial', label: 'Financial advice' },
                      { value: 'community', label: 'Community support' },
                      { value: 'multiple', label: 'Multiple types of support' }
                    ]
                  },
                  {
                    name: 'currentServices',
                    label: 'Are you currently accessing any support services?',
                    type: 'textarea',
                    placeholder: 'Please describe any services you are currently using'
                  },
                  {
                    name: 'healthcareProvider',
                    label: 'Healthcare Provider (if applicable)',
                    type: 'text'
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
                  },
                  {
                    name: 'additionalInfo',
                    label: 'Additional Information',
                    type: 'textarea',
                    placeholder: 'Any other information that might help us support you better'
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
                        placeholder={field.placeholder}
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
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required={!['healthcareProvider'].includes(field.name)}
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

export default IntegratedSupportPage 