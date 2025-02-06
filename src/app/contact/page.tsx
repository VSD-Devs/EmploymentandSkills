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

const submitForm = async (formData: Record<string, string>) => {
  // Implement your form submission logic here
  // For now, we'll just return a resolved promise
  return Promise.resolve()
}

export default function ContactPage() {
  const [selectedOption, setSelectedOption] = useState<ContactOption | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Replace console.log with proper form handling
      await submitForm(formData) // You'll need to implement this function
    } catch (error) {
      setFormErrors({ submit: 'Failed to submit form. Please try again.' })
    }
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
                <div className={`