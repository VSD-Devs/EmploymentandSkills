'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Mail, Phone, MapPin, MessageSquare, Building2, GraduationCap, Users, Briefcase, BookOpen, ArrowRight } from 'lucide-react'

interface ContactOption {
  id: string
  title: string
  description: string
  email: string
  phone?: string
  color: keyof typeof colorClasses
  icon: React.ReactNode
  formFields?: string[]
}

const colorClasses = {
  indigo: {
    button: 'border-indigo-500 bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-500',
    badge: 'bg-indigo-50 text-indigo-700',
    gradient: 'from-indigo-50 to-white'
  },
  emerald: {
    button: 'border-emerald-500 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-50 to-white'
  },
  violet: {
    button: 'border-violet-500 bg-violet-50',
    icon: 'bg-violet-100 text-violet-600',
    link: 'bg-violet-600 hover:bg-violet-500',
    badge: 'bg-violet-50 text-violet-700',
    gradient: 'from-violet-50 to-white'
  },
  sky: {
    button: 'border-sky-500 bg-sky-50',
    icon: 'bg-sky-100 text-sky-600',
    link: 'bg-sky-600 hover:bg-sky-500',
    badge: 'bg-sky-50 text-sky-700',
    gradient: 'from-sky-50 to-white'
  },
  rose: {
    button: 'border-rose-500 bg-rose-50',
    icon: 'bg-rose-100 text-rose-600',
    link: 'bg-rose-600 hover:bg-rose-500',
    badge: 'bg-rose-50 text-rose-700',
    gradient: 'from-rose-50 to-white'
  }
} as const

const contactOptions: ContactOption[] = [
  {
    id: 'young-people',
    title: 'Support for Young People',
    description: 'Get guidance on education, careers, and opportunities for young people.',
    email: 'youth@yorkshirepathways.org',
    phone: '0800 123 4567',
    color: 'indigo',
    icon: <GraduationCap className="w-6 h-6" />,
    formFields: ['name', 'age', 'school', 'interest']
  },
  {
    id: 'adult-skills',
    title: 'Adult Skills and Training',
    description: 'Enquire about adult education, skills development, and career changes.',
    email: 'adults@yorkshirepathways.org',
    phone: '0800 123 4568',
    color: 'emerald',
    icon: <Users className="w-6 h-6" />,
    formFields: ['name', 'currentSector', 'desiredSkills']
  },
  {
    id: 'business',
    title: 'Business Partnerships',
    description: 'Connect with us about apprenticeships, training, and business collaboration.',
    email: 'business@yorkshirepathways.org',
    phone: '0800 123 4569',
    color: 'violet',
    icon: <Briefcase className="w-6 h-6" />,
    formFields: ['companyName', 'sector', 'employeeCount', 'interest']
  },
  {
    id: 'educators',
    title: 'Education Providers',
    description: 'Information for schools, colleges, and training providers.',
    email: 'educators@yorkshirepathways.org',
    phone: '0800 123 4570',
    color: 'sky',
    icon: <BookOpen className="w-6 h-6" />,
    formFields: ['institutionName', 'role', 'studentCount']
  },
  {
    id: 'general',
    title: 'General Enquiries',
    description: 'For all other queries and support needs.',
    email: 'info@yorkshirepathways.org',
    phone: '0800 123 4571',
    color: 'rose',
    icon: <Building2 className="w-6 h-6" />
  }
]

export default function ContactPage() {
  const [selectedOption, setSelectedOption] = useState<ContactOption | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-16 sm:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/path.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Dotted grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-soft-light"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-indigo-400 mb-4">
            <div className="p-2 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20">
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-sm">
            Contact Yorkshire Pathways
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
            We&apos;re here to help you find the right support and guidance. Choose your path below, and we&apos;ll connect you with the right team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        {!selectedOption ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option)}
                className={`group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-${option.color}-500 hover:shadow-lg transition-all text-left relative overflow-hidden`}
              >
                {/* Decorative gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${colorClasses[option.color].gradient}`} />
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses[option.color].icon}`}>
                    {option.icon}
                  </div>
                  <h2 className={`text-2xl font-semibold text-slate-900 group-hover:text-${option.color}-600 mb-2`}>
                    {option.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{option.description}</p>
                  <div className={`inline-flex items-center text-${option.color}-600`}>
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <button
                onClick={() => setSelectedOption(null)}
                className={`text-${selectedOption.color}-600 hover:text-${selectedOption.color}-700 font-medium mb-6 flex items-center`}
              >
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                Back to all options
              </button>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[selectedOption.color].button} mb-6`}>
                {selectedOption.icon}
                <span className="text-sm font-medium">{selectedOption.title}</span>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Reach Us</h2>
                  <p className="text-slate-600">{selectedOption.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className={`w-6 h-6 text-${selectedOption.color}-600 mt-1`} />
                    <div>
                      <h3 className="font-medium text-slate-900">Email</h3>
                      <a href={`mailto:${selectedOption.email}`} className={`text-${selectedOption.color}-600 hover:text-${selectedOption.color}-700`}>
                        {selectedOption.email}
                      </a>
                    </div>
                  </div>
                  
                  {selectedOption.phone && (
                    <div className="flex items-start space-x-3">
                      <Phone className={`w-6 h-6 text-${selectedOption.color}-600 mt-1`} />
                      <div>
                        <h3 className="font-medium text-slate-900">Phone</h3>
                        <a href={`tel:${selectedOption.phone}`} className={`text-${selectedOption.color}-600 hover:text-${selectedOption.color}-700`}>
                          {selectedOption.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    <MapPin className={`w-6 h-6 text-${selectedOption.color}-600 mt-1`} />
                    <div>
                      <h3 className="font-medium text-slate-900">Visit Us</h3>
                      <p className="text-slate-600">
                        Yorkshire Pathways<br />
                        123 Career Street<br />
                        Leeds, LS1 1AB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {selectedOption.formFields?.map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-slate-700 mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-xl text-white transition-colors ${colorClasses[selectedOption.color].link} shadow-lg hover:shadow-xl`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 