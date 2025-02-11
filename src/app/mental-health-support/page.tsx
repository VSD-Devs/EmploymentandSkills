'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  Heart, 
  Phone, 
  Mail, 
  Users, 
  Brain, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Target, 
  Briefcase, 
  ArrowRight, 
  FileCheck, 
  Building2, 
  GraduationCap, 
  X, 
  HelpCircle, 
  ArrowLeft, 
  User, 
  MapPin, 
  HeartHandshake, 
  ChevronLeft 
} from 'lucide-react'

// Define form data type
type FormData = {
  fullName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  postcode: string
  employmentStatus: string
  healthCondition: string
  supportNeeded: string
  hearAboutUs: string
  [key: string]: string // Add index signature
}

const MentalHealthSupport = () => {
  const [formStep, setFormStep] = useState(1)
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postcode: '',
    employmentStatus: '',
    healthCondition: '',
    supportNeeded: '',
    hearAboutUs: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Questions for eligibility checker
  const questions = [
    {
      question: "Are you aged 16 or over?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Do you live in South Yorkshire (Sheffield, Rotherham, Doncaster, or Barnsley)?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Do you have a physical and/or mental health condition that affects your daily life?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Are you currently employed or looking for work?",
      options: ["Yes, employed", "Yes, looking for work", "No, not interested in work"],
      disqualifyIf: "No, not interested in work"
    },
    {
      question: "Are you currently enrolled in another DWP employment programme?",
      options: ["Yes", "No"],
      disqualifyIf: "Yes"
    }
  ]

  const formSteps = [
    {
      title: "Personal Details",
      fields: ["fullName", "email", "phone", "dateOfBirth"],
      icon: User
    },
    {
      title: "Location",
      fields: ["address", "city", "postcode"],
      icon: MapPin
    },
    {
      title: "Employment & Health",
      fields: ["employmentStatus", "healthCondition"],
      icon: Briefcase
    },
    {
      title: "Support Requirements",
      fields: ["supportNeeded", "hearAboutUs"],
      icon: HeartHandshake
    }
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const isEligible = () => {
    return !answers.some((answer, index) => answer === questions[index].disqualifyIf)
  }

  const resetChecker = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setShowEligibilityChecker(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Handle form submission here
      // Replace console.log with actual form submission logic
      setFormSubmitted(true)
      // Add your form submission logic here
    } catch (error) {
      // Handle error appropriately
      setFormErrors({ submit: 'Failed to submit form. Please try again.' })
    }
  }

  const handleNextStep = () => {
    const currentFields = formSteps[formStep - 1].fields
    const hasErrors = currentFields.some(field => !formData[field])
    
    if (!hasErrors) {
      setFormStep(prev => Math.min(prev + 1, formSteps.length))
    } else {
      setFormErrors(
        currentFields.reduce((acc, field) => ({
          ...acc,
          [field]: !formData[field] ? 'This field is required' : ''
        }), {})
      )
    }
  }

  const handlePrevStep = () => {
    setFormStep(prev => Math.max(prev - 1, 1))
  }

  // Add touch handling for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 50
    const touchDiff = touchStart - touchEnd

    if (Math.abs(touchDiff) > SWIPE_THRESHOLD) {
      if (touchDiff > 0 && formStep < formSteps.length) {
        // Swipe left - next step
        handleNextStep()
      } else if (touchDiff < 0 && formStep > 1) {
        // Swipe right - previous step
        handlePrevStep()
      }
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0">
          <Image
            src="/images/mental-health-hero.jpg"
            alt="Mental health and wellbeing support services in South Yorkshire"
            fill
            className="object-cover object-center brightness-[0.7] saturate-[0.85]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Heart className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-100">WorkingWin Health Support</span>
              </div>

              {/* Main Content */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Supporting Your Mental Health<br className="hidden sm:block" /> and Wellbeing Journey
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Access free, confidential support to help manage your mental health and wellbeing. Our specialist team is here to support your journey to better health and employment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShowEligibilityChecker(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors group"
                >
                  Check Your Eligibility
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 group"
                >
                  Contact Support Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { number: "5,000+", label: "People Supported", icon: Users },
                  { number: "97%", label: "Success Rate", icon: Sparkles },
                  { number: "12m", label: "Duration of Support", icon: Clock }
                ].map((stat, index) => (
                  <div key={index} className="text-center px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-5 w-5 text-purple-300" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="relative py-12 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-purple-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-purple-200/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 border border-purple-200 mb-6 md:mb-8">
                <Brain className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-900">Key Features</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">How We Support You</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: Users,
                    title: 'Personalised Support',
                    description: 'One-to-one guidance from a dedicated Employment Specialist who will help identify your goals and develop a realistic action plan.'
                  },
                  {
                    icon: Briefcase,
                    title: 'In-Work Support',
                    description: 'Ongoing assistance to help manage health conditions at work, ensuring you can thrive in your current role.'
                  },
                  {
                    icon: Heart,
                    title: 'Health & Wellbeing Coaching',
                    description: 'Qualified coaches provide strategies to help you cope with health conditions in both work and daily life.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-4 bg-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                        {React.createElement(feature.icon, { className: "h-5 w-5 md:h-6 md:w-6 text-purple-600" })}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-2 group-hover:text-purple-700 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-200/30 rounded-3xl transform rotate-3" />
              <div className="relative h-[500px] rounded-2xl overflow-hidden transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/images/mental-health-hero.jpg"
                  alt="Working Win support session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-7 w-7 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-xl mb-1">Tailored Support</div>
                        <div className="text-gray-600">Personalised guidance for your unique needs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div id="eligibility" className="relative py-12 md:py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 border border-purple-200 mb-4">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Eligibility Criteria</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Who Can Access Support?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Check if you're eligible for our programme and take the first step towards better employment support.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-200/30 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-purple-100">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  </div>
                  Basic Requirements
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'Be aged 16 or over',
                    'Reside in Sheffield, Rotherham, Doncaster, or Barnsley',
                    'Have a physical or mental health condition (self-diagnosis accepted)',
                    'Have entitlement to public funds'
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-purple-100/50 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative bg-white rounded-xl p-8 shadow-sm border border-purple-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  Programme Duration
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Clock, text: 'For unemployed: Up to 12 months support, including 4 months in-work support' },
                    { icon: Clock, text: 'For employed/sick leave: Up to 4 months support to manage health conditions' },
                    { icon: ChevronRight, text: 'Must not be enrolled in another DWP employment programme' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {React.createElement(item.icon, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" })}
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form - Enhanced with better accessibility */}
      <div 
        id="apply" 
        className="relative bg-white md:bg-gradient-to-b md:from-white md:via-purple-50/30 md:to-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop decorative elements */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-purple-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-purple-200 mb-6 backdrop-blur-sm">
              <FileCheck className="h-5 w-5 text-purple-600" aria-hidden="true" />
              <span className="text-sm font-medium text-purple-900">Application Form</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" id="application-form">Start Your Journey Today</h2>
            <p className="text-gray-700">Complete the form below to begin your application for the Working Win programme.</p>
          </div>

          {/* Progress Steps - Desktop */}
          <div className="hidden md:block mb-12">
            <div className="flex justify-between items-center relative">
              {/* Progress line background */}
              <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200" />
              {/* Active progress line */}
              <div 
                className="absolute top-6 left-0 h-0.5 bg-purple-600 transition-all duration-300"
                style={{ width: `${((formStep - 1) / (formSteps.length - 1)) * 100}%` }}
              />
              
              {formSteps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 mb-2 transition-all duration-300 bg-white
                      ${formStep > index + 1 ? 'border-purple-600 bg-purple-600' : 
                        formStep === index + 1 ? 'border-purple-600' : 
                        'border-gray-300'}`}>
                      <StepIcon className={`w-6 h-6 transition-colors duration-300 ${
                        formStep > index + 1 ? 'text-white' : 
                        formStep === index + 1 ? 'text-purple-600' : 
                        'text-gray-400'
                      }`} />
                    </div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      formStep >= index + 1 ? 'text-purple-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Progress Steps - Mobile */}
          <div className="md:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 -mx-4 px-4 mb-6">
            <div className="flex justify-start overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x py-2">
              {formSteps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (index + 1 < formStep) {
                        setFormStep(index + 1)
                      }
                    }}
                    className={`group relative px-4 py-3 flex-shrink-0 rounded-xl snap-start mr-2 ${
                      formStep === index + 1 
                        ? 'bg-purple-50 border-2 border-purple-600' 
                        : formStep > index + 1
                        ? 'bg-purple-600'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <StepIcon className={`w-5 h-5 ${
                        formStep === index + 1 
                          ? 'text-purple-600'
                          : formStep > index + 1
                          ? 'text-white'
                          : 'text-gray-400'
                      }`} />
                      <span className={`text-sm font-medium whitespace-nowrap ${
                        formStep === index + 1 
                          ? 'text-purple-600'
                          : formStep > index + 1
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
            {/* Progress bar */}
            <div className="h-1 w-full bg-gray-200 rounded-full mb-2">
              <div
                className="h-1 bg-purple-600 rounded-full transition-all duration-300"
                style={{ width: `${((formStep) / formSteps.length) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" aria-labelledby="application-form" noValidate>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="space-y-6">
                {/* Form Fields - Show only current step */}
                {formSteps[formStep - 1].fields.map((field) => (
                  <div key={field} className="form-group animate-fadeIn">
                    <label htmlFor={field} className="block text-base font-medium text-gray-900 mb-2">
                      {field.split(/(?=[A-Z])/).join(' ')} <span className="text-purple-600">*</span>
                    </label>
                    <div className="relative">
                      {field === 'employmentStatus' ? (
                        <select
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 text-lg transition-colors hover:border-gray-300"
                          required
                        >
                          <option value="">Select status</option>
                          <option value="unemployed">Unemployed</option>
                          <option value="employed">Employed</option>
                          <option value="sickLeave">On Sick Leave</option>
                        </select>
                      ) : field === 'supportNeeded' ? (
                        <select
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 text-lg transition-colors hover:border-gray-300"
                          required
                        >
                          <option value="">Select support type</option>
                          <option value="findWork">Help finding work</option>
                          <option value="keepWork">Support maintaining current employment</option>
                          <option value="both">Both</option>
                        </select>
                      ) : field === 'hearAboutUs' ? (
                        <select
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 text-lg transition-colors hover:border-gray-300"
                          required
                        >
                          <option value="">Select option</option>
                          <option value="jobCentre">Job Centre</option>
                          <option value="gp">GP/Healthcare Provider</option>
                          <option value="friend">Friend/Family</option>
                          <option value="online">Online Search</option>
                          <option value="other">Other</option>
                        </select>
                      ) : (
                        <input
                          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'dateOfBirth' ? 'date' : 'text'}
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 text-lg transition-colors hover:border-gray-300"
                          required
                        />
                      )}
                      {formErrors[field] && (
                        <p className="mt-1 text-red-600 text-sm">
                          {formErrors[field]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Form Navigation */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-gray-200">
                  {formStep > 1 && (
                    <button
                      onClick={handlePrevStep}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-purple-600 hover:text-purple-500 border-2 border-purple-200 hover:border-purple-300 rounded-xl transition-colors"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" />
                      Previous Step
                    </button>
                  )}
                  {formStep < formSteps.length ? (
                    <button
                      onClick={handleNextStep}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors"
                    >
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Section - Enhanced with better visual presentation */}
      <div id="contact" className="relative bg-[#111827] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our team is here to answer any questions about the Working Win programme.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Phone,
                title: "Call us at",
                content: "0808 178 3061",
                subtext: "Monday to Friday, 9am - 5pm"
              },
              {
                icon: Mail,
                title: "Email us at",
                content: "workingwin@shaw-trust.org.uk",
                subtext: "We will respond within 24 hours"
              }
            ].map((contact, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="relative bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                      {React.createElement(contact.icon, { className: "h-6 w-6 text-purple-400" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 text-lg mb-2">{contact.title}</h3>
                      <p className="text-2xl font-bold mb-2 text-white">{contact.content}</p>
                      <p className="text-gray-400">{contact.subtext}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Checker Modal */}
      {showEligibilityChecker && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 p-8 relative">
            <button
              onClick={resetChecker}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            
            {!showResult ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full px-6 py-4 text-left text-lg font-medium rounded-xl border-2 border-purple-100 hover:border-purple-500 hover:bg-purple-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                {isEligible() ? (
                  <>
                    <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Great news! Working Win could help you
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Based on your answers, you appear to be eligible for our programme. We encourage you to apply and start your journey with Working Win.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        href="#apply"
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-amber-100 mx-auto flex items-center justify-center">
                      <HelpCircle className="h-10 w-10 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      We may not be the right fit
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Based on your answers, Working Win might not be the best programme for you at this time. However, we would still encourage you to contact us to discuss your situation.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        href="#contact"
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors"
                      >
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default MentalHealthSupport