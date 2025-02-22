'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight,
  ChevronLeft,
  Briefcase, 
  Phone, 
  Mail, 
  Users, 
  Target, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  FileCheck,
  X,
  MessageSquare,
  HelpCircle,
  GraduationCap
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

// Define form data type
type FormData = {
  fullName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  postcode: string
  healthCondition: string
  currentStatus: string
  employmentGoals: string
  preferredProgramme: string
  referralSource: string
  additionalSupport: string
  [key: string]: string // Add index signature
}

// At the top of the file, add these image constants
const IMAGES = {
  hero: "/images/mental-health-hero.jpg",
  support: "/images/mental-health-hero.jpg",
  pattern: "/images/pattern.svg",
  connectToWork: "/images/connect-to-work.jpg",
  workWell: "/images/work-well.jpg",
  integrated: "/images/integrated-support.jpg"
}

const EmploymentSupportPage = () => {
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
    healthCondition: '',
    currentStatus: '',
    employmentGoals: '',
    preferredProgramme: '',
    referralSource: '',
    additionalSupport: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  // Questions for eligibility checker
  const questions = [
    {
      question: "Are you aged 16 or over?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Do you have a health condition or disability that affects your daily life?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Which best describes your current situation?",
      options: [
        "Currently employed but struggling with health conditions",
        "Recently unemployed due to health conditions",
        "Looking for work and have complex barriers",
        "None of the above"
      ],
      disqualifyIf: "None of the above"
    },
    {
      question: "Where do you live?",
      options: [
        "England or Wales",
        "Outside England and Wales"
      ],
      disqualifyIf: "Outside England and Wales"
    },
    {
      question: "Are you currently enrolled in another employment support programme?",
      options: ["Yes", "No"],
      disqualifyIf: "Yes"
    }
  ]

  const formSteps = [
    {
      title: "Personal Details",
      fields: ["fullName", "email", "phone", "dateOfBirth"],
      icon: Users
    },
    {
      title: "Location",
      fields: ["address", "city", "postcode"],
      icon: MessageSquare
    },
    {
      title: "Health & Employment",
      fields: ["healthCondition", "currentStatus", "employmentGoals"],
      icon: Target
    },
    {
      title: "Programme Selection",
      fields: ["preferredProgramme", "referralSource", "additionalSupport"],
      icon: MessageSquare
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
      setFormSubmitted(true)
    } catch (error) {
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

  // Add touch handlers for mobile swipe
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
      // Handle section navigation based on swipe
      const sections = ['overview', 'programmes', 'eligibility', 'apply']
      const currentIndex = sections.indexOf(activeSection)
      
      if (touchDiff > 0 && currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1]
        document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(nextSection)
      } else if (touchDiff < 0 && currentIndex > 0) {
        const prevSection = sections[currentIndex - 1]
        document.getElementById(prevSection)?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(prevSection)
      }
    }
  }

  // Handle scroll to update active section
  const handleScroll = useCallback(() => {
    const sections = ['overview', 'programmes', 'eligibility', 'apply']
    const scrollPosition = window.scrollY + window.innerHeight / 2

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const sectionTop = element.offsetTop
        const sectionBottom = sectionTop + element.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section)
        }
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <main 
      className="min-h-screen bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Employment Support', href: '/employment-support' },
      ]} />

      {/* Hero Section - Mobile Optimized */}
      <div className="relative bg-[#111827] py-12 md:py-20 min-h-[400px] md:min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Employment support and career development services"
            fill
            className="object-cover object-center brightness-[0.7] saturate-[0.85]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              {/* Badge - Mobile Optimized */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6">
                <Briefcase className="h-4 w-4 text-blue-300" />
                <span className="text-xs md:text-sm font-medium text-blue-100">Career Development Support</span>
              </div>

              {/* Main Content - Mobile Optimized */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Your Journey to Career Success Starts Here
              </h1>
              <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
                Access free, personalised employment support to help you find work, change careers, or progress in your current role. Our specialist team is here to guide your journey.
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-4">
                <button
                  onClick={() => setShowEligibilityChecker(true)}
                  className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors text-sm md:text-base"
                >
                  Check Your Eligibility
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
                <Link
                  href="#contact"
                  className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-sm md:text-base"
                >
                  Contact Support Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Quick Stats - Mobile Optimized */}
              <div className="mt-8 md:mt-12 grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto">
                {[
                  { number: "7,500+", label: "People Supported", icon: Users },
                  { number: "89%", label: "Success Rate", icon: Sparkles },
                  { number: "6m", label: "Duration", icon: Clock }
                ].map((stat, index) => (
                  <div key={index} className="text-center px-2 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center justify-center mb-1 md:mb-2">
                      <stat.icon className="h-4 md:h-5 w-4 md:w-5 text-blue-300" />
                    </div>
                    <div className="text-base md:text-2xl font-bold text-white mb-0.5 md:mb-1">{stat.number}</div>
                    <div className="text-[10px] md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between py-2">
            {[
              { id: 'overview', icon: Users, label: 'Overview' },
              { id: 'programmes', icon: Briefcase, label: 'Programmes' },
              { id: 'eligibility', icon: CheckCircle2, label: 'Eligibility' },
              { id: 'apply', icon: FileCheck, label: 'Apply' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center px-3 py-1 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="relative py-8 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-4 md:mb-6">
              <Target className="h-4 md:h-5 w-4 md:w-5 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-blue-900">Our Programmes</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">How We Support You</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">Choose from our specialist programmes designed to support your journey to employment and wellbeing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: Users,
                title: 'Connect to Work Programme',
                description: 'Specialised support for disabled people and those with health conditions or complex barriers to find sustainable employment.',
                image: IMAGES.connectToWork,
                features: [
                  'Personalised employment support',
                  'Health condition management',
                  'Complex barrier solutions'
                ]
              },
              {
                icon: MessageSquare,
                title: 'WorkWell Service',
                description: 'Early intervention support with expert assessment of health-related barriers to work, including tailored plans and employer guidance.',
                image: IMAGES.workWell,
                features: [
                  'Expert health assessments',
                  'Employer support available',
                  'Early intervention focus'
                ]
              },
              {
                icon: Briefcase,
                title: 'Integrated Support Network',
                description: 'Access to local services, clinical and non-clinical support, and community resources including debt advice and healthcare referrals.',
                image: IMAGES.integrated,
                features: [
                  'Local service connections',
                  'Healthcare referrals',
                  'Debt and benefits advice'
                ]
              }
            ].map((programme, index) => (
              <div key={index} className="group relative bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Programme Image */}
                <div className="relative h-36 md:h-48 w-full overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-7 md:w-8 h-7 md:h-8 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center">
                        <programme.icon className="h-3.5 md:h-4 w-3.5 md:w-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-base md:text-lg">{programme.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Programme Content */}
                <div className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{programme.description}</p>
                  
                  <div className="space-y-2 md:space-y-3">
                    {programme.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 md:mt-6">
                    <Link
                      href={`/employment-support/${index === 0 ? 'connect-to-work' : index === 1 ? 'workwell' : 'integrated-support'}`}
                      className="inline-flex items-center text-sm md:text-base text-blue-600 font-medium hover:text-blue-500 group"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div id="eligibility" className="relative py-8 md:py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-3 md:mb-4">
              <Sparkles className="h-4 md:h-5 w-4 md:w-5 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-blue-900">Eligibility Criteria</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Who Can Access Support?</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">Check if you're eligible for our programme and take the first step towards better employment support.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/30 rounded-xl md:rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative bg-white rounded-lg md:rounded-xl p-4 md:p-8 shadow-sm border border-blue-100">
                <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-6 flex items-center gap-2 md:gap-3">
                  <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="h-4 md:h-5 w-4 md:w-5 text-blue-600" />
                  </div>
                  Connect to Work
                </h3>
                <ul className="space-y-2 md:space-y-4">
                  {[
                    'Be aged 16 or over',
                    'Reside in England or Wales',
                    'Have a disability or health condition',
                    'Face complex barriers to employment',
                    'Looking to find sustainable work'
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mt-0.5 md:mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-blue-100/50 rounded-xl md:rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative bg-white rounded-lg md:rounded-xl p-4 md:p-8 shadow-sm border border-blue-100">
                <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-6 flex items-center gap-2 md:gap-3">
                  <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-4 md:h-5 w-4 md:w-5 text-blue-600" />
                  </div>
                  WorkWell Service
                </h3>
                <ul className="space-y-2 md:space-y-4">
                  {[
                    'Currently in work but struggling with health conditions',
                    'Recently unemployed due to health conditions',
                    'Need early intervention support',
                    'Can be referred by GP, employer, or self-referral',
                    'Local to participating Integrated Care Systems'
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mt-0.5 md:mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{requirement}</span>
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
        className="relative bg-white md:bg-gradient-to-b md:from-white md:via-blue-50/30 md:to-white pb-20 md:pb-0"
      >
        {/* Desktop decorative elements */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/80 border border-blue-200 mb-4 md:mb-6 backdrop-blur-sm">
              <FileCheck className="h-4 md:h-5 w-4 md:w-5 text-blue-600" aria-hidden="true" />
              <span className="text-xs md:text-sm font-medium text-blue-900">Application Form</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4" id="application-form">Start Your Journey Today</h2>
            <p className="text-sm md:text-base text-gray-700">Complete the form below to begin your application for employment support.</p>
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
                    className={`group relative px-3 py-2 flex-shrink-0 rounded-lg snap-start mr-2 ${
                      formStep === index + 1 
                        ? 'bg-blue-50 border-2 border-blue-600' 
                        : formStep > index + 1
                        ? 'bg-blue-600'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <StepIcon className={`w-4 h-4 ${
                        formStep === index + 1 
                          ? 'text-blue-600'
                          : formStep > index + 1
                          ? 'text-white'
                          : 'text-gray-400'
                      }`} />
                      <span className={`text-xs whitespace-nowrap ${
                        formStep === index + 1 
                          ? 'text-blue-600'
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
                className="h-1 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((formStep) / formSteps.length) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" aria-labelledby="application-form" noValidate>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-blue-100">
              <div className="space-y-4 md:space-y-6">
                {/* Form Fields - Show only current step */}
                {formSteps[formStep - 1].fields.map((field) => (
                  <div key={field} className="form-group animate-fadeIn">
                    <label htmlFor={field} className="block text-sm md:text-base font-medium text-gray-900 mb-1.5 md:mb-2">
                      {field.split(/(?=[A-Z])/).join(' ')} <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      {field === 'currentStatus' || field === 'preferredProgramme' || field === 'referralSource' || field === 'healthCondition' ? (
                        <select
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-lg transition-colors hover:border-gray-300"
                          required
                        >
                          {/* Existing options */}
                          {/* ... existing code ... */}
                        </select>
                      ) : (
                        <input
                          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'dateOfBirth' ? 'date' : 'text'}
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-lg transition-colors hover:border-gray-300"
                          required
                        />
                      )}
                      {formErrors[field] && (
                        <p className="mt-1 text-xs md:text-sm text-red-600">
                          {formErrors[field]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Form Navigation */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 pt-6 md:pt-8 border-t border-gray-200">
                  {formStep > 1 && (
                    <button
                      onClick={handlePrevStep}
                      className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base text-blue-600 hover:text-blue-500 border-2 border-blue-200 hover:border-blue-300 rounded-lg md:rounded-xl transition-colors"
                    >
                      <ChevronLeft className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                      Previous Step
                    </button>
                  )}
                  {formStep < formSteps.length ? (
                    <button
                      onClick={handleNextStep}
                      className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-blue-600 text-white rounded-lg md:rounded-xl hover:bg-blue-500 transition-colors"
                    >
                      Next Step
                      <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-blue-600 text-white rounded-lg md:rounded-xl hover:bg-blue-500 transition-colors"
                    >
                      Submit Application
                      <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative bg-[#111827] text-white py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Need More Information?</h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto">
              Our team is here to answer any questions about our employment support services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg md:rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="relative bg-gray-800/50 backdrop-blur rounded-lg md:rounded-xl p-4 md:p-8 border border-gray-700">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gray-700 flex items-center justify-center">
                      <contact.icon className="h-5 md:h-6 w-5 md:w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 text-base md:text-lg mb-1 md:mb-2">{contact.title}</h3>
                      <p className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">{contact.content}</p>
                      <p className="text-sm md:text-base text-gray-400">{contact.subtext}</p>
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl md:rounded-2xl w-full max-w-2xl mx-auto p-4 md:p-8 relative">
            <button
              onClick={resetChecker}
              className="absolute right-2 md:right-4 top-2 md:top-4 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="h-5 md:h-6 w-5 md:w-6" />
            </button>
            
            {!showResult ? (
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm font-medium text-blue-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-xs md:text-sm text-gray-500">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                    <div
                      className="bg-blue-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid gap-2 md:gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full px-4 md:px-6 py-3 md:py-4 text-left text-sm md:text-lg font-medium rounded-lg md:rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4 md:space-y-6">
                {isEligible() ? (
                  <>
                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-8 md:h-10 w-8 md:w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Great news! We can help you
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
                      Based on your answers, you appear to be eligible for our employment support programme. We encourage you to apply and start your journey with us.
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
                      <Link
                        href="#apply"
                        onClick={resetChecker}
                        className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg md:rounded-xl hover:bg-blue-500 transition-colors text-sm md:text-base"
                      >
                        Apply Now
                        <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-gray-100 text-gray-700 rounded-lg md:rounded-xl hover:bg-gray-200 transition-colors text-sm md:text-base"
                      >
                        Close
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-amber-100 mx-auto flex items-center justify-center">
                      <HelpCircle className="h-8 md:h-10 w-8 md:w-10 text-amber-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      We may not be the right fit
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
                      Based on your answers, our employment support programme might not be the best fit for you at this time. However, we would still encourage you to contact us to discuss your situation.
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
                      <Link
                        href="#contact"
                        onClick={resetChecker}
                        className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg md:rounded-xl hover:bg-blue-500 transition-colors text-sm md:text-base"
                      >
                        Contact Us
                        <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="w-full md:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-gray-100 text-gray-700 rounded-lg md:rounded-xl hover:bg-gray-200 transition-colors text-sm md:text-base"
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

export default EmploymentSupportPage 