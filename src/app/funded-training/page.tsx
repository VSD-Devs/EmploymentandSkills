'use client'

import React from 'react'
import { useState } from 'react'
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
  GraduationCap,
  FileCheck,
  Building2,
  BookOpen,
  ArrowRight,
  X,
  LightbulbIcon,
  Rocket,
  PieChart,
  Home
} from 'lucide-react'

const IMAGES = {
  hero: "/images/funded-hero.jpg",
  skillsBank: "/images/skills-bank.jpg",
  bootcamps: "/images/bootcamps.jpg",
  pattern: "/images/pattern.svg",
  multiply: "/images/multiply.png",
  fcfj: "/images/FCFJ-1.jpg",
  bootcampsImage2: "/images/bootcamps-image2.png"
}

type FormData = {
  fullName: string
  email: string
  phone: string
  companyName: string
  sector: string
  employeeCount: string
  trainingNeeds: string
  preferredProgramme: string
  referralSource: string
  additionalSupport: string
  [key: string]: string
}

interface Programme {
  icon: React.ElementType
  title: string
  description: string
  image: string
  features: string[]
}

interface ContactInfo {
  icon: React.ElementType
  title: string
  content: string
  subtext: string
}

interface AssessmentQuestion {
  id: number
  question: string
  options: {
    text: string
    outcome?: 'skills-bank' | 'skills-bootcamps' | 'growth-advisor'
    nextQuestion?: number
  }[]
}

const FundedTrainingPage: React.FC = () => {
  const [showAssessment, setShowAssessment] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [outcome, setOutcome] = useState<'skills-bank' | 'skills-bootcamps' | 'growth-advisor' | null>(null)

  const assessmentQuestions: AssessmentQuestion[] = [
    {
      id: 1,
      question: "What's your primary goal for seeking support?",
      options: [
        {
          text: "Develop existing workforce skills",
          nextQuestion: 2
        },
        {
          text: "Build talent pipeline and recruitment",
          outcome: 'skills-bootcamps'
        },
        {
          text: "Access funding for business growth",
          outcome: 'growth-advisor'
        }
      ]
    },
    {
      id: 2,
      question: "What type of training are you looking for?",
      options: [
        {
          text: "Bespoke training tailored to business needs",
          outcome: 'skills-bank'
        },
        {
          text: "Standardised industry-recognised qualifications",
          outcome: 'skills-bootcamps'
        },
        {
          text: "Not sure yet",
          outcome: 'growth-advisor'
        }
      ]
    }
  ]

  const outcomeDetails = {
    'skills-bank': {
      title: "Skills Bank is Your Best Match",
      description: "Skills Bank offers flexible, tailored training solutions with up to 60% funding available. Perfect for developing your existing workforce with bespoke training programmes.",
      icon: Briefcase,
      color: "emerald",
      cta: {
        text: "Learn About Skills Bank",
        href: "/skills-bank"
      }
    },
    'skills-bootcamps': {
      title: "Skills Bootcamps Fit Your Requirements",
      description: "Skills Bootcamps provide intensive, industry-recognised training to help you build your talent pipeline and upskill new or existing staff quickly.",
      icon: Rocket,
      color: "blue",
      cta: {
        text: "Explore Skills Bootcamps",
        href: "/skills-bootcamps"
      }
    },
    'growth-advisor': {
      title: "Speak to a Business Growth Advisor",
      description: "Our advisors can help you explore various funding options and support available for your business growth needs.",
      icon: PieChart,
      color: "purple",
      cta: {
        text: "Contact an Advisor",
        href: "#contact"
      }
    }
  }

  const handleOptionSelect = (option: AssessmentQuestion['options'][0]) => {
    if (option.outcome) {
      setOutcome(option.outcome)
    } else if (option.nextQuestion) {
      setCurrentQuestion(option.nextQuestion - 1)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setOutcome(null)
    setShowAssessment(false)
  }

  const programmes: Programme[] = [
    {
      icon: Users,
      title: 'Skills Bootcamps',
      description: 'Fast-track, flexible training in digital, technical, and construction skills. Perfect for quickly building in-demand capabilities within your workforce.',
      image: IMAGES.bootcamps,
      features: [
        'Up to 60% funding available',
        '12-16 week intensive courses',
        'Industry-recognized certifications',
        'Flexible learning options',
        'Immediate application of skills',
        'Leading industry trainers'
      ]
    },
    {
      icon: Briefcase,
      title: 'Skills Bank',
      description: 'Access direct funding support to invest in training that directly addresses your business needs and growth plans.',
      image: IMAGES.skillsBank,
      features: [
        'Up to 60% of training costs covered',
        'Tailored to your business needs',
        'Wide range of approved providers',
        'Quick application process',
        'Expert guidance available',
        'Flexible training delivery'
      ]
    },
    {
      icon: Target,
      title: 'Skills Consultation',
      description: 'Discover the right training solutions for your business through our free skills assessment service. Identify gaps and get personalised recommendations.',
      image: IMAGES.pattern,
      features: [
        'Free 30-minute consultation',
        'Personalised training roadmap',
        'Identify key skills gaps',
        'Funding eligibility check',
        'Sector-specific insights',
        'Quick implementation plan'
      ]
    }
  ]

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Call us at",
      content: "0808 178 3061",
      subtext: "Monday to Friday, 9am - 5pm"
    },
    {
      icon: Mail,
      title: "Email us at",
      content: "training@southyorkshire-ca.gov.uk",
      subtext: "We will respond within 24 hours"
    }
  ]

  const formSteps = [
    {
      title: "Company Details",
      fields: ["fullName", "email", "phone", "companyName"],
      icon: Users
    },
    {
      title: "Training Requirements",
      fields: ["sector", "employeeCount", "trainingNeeds", "preferredProgramme"],
      icon: GraduationCap
    }
  ]

  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    sector: '',
    employeeCount: '',
    trainingNeeds: '',
    preferredProgramme: '',
    referralSource: '',
    additionalSupport: ''
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

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
        handleNextStep()
      } else if (touchDiff < 0 && formStep > 1) {
        handlePrevStep()
      }
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        {/* Breadcrumbs Overlay */}
        <nav className="absolute top-4 left-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 bg-white/80 rounded-lg p-2 inline-block">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </li>
              <li>
                <Link 
                  href="/business" 
                  className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors"
                >
                  Business Support
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </li>
              <li aria-current="page">
                <span className="text-gray-800 font-medium text-sm">
                  Funded Training
                </span>
              </li>
            </ol>
          </div>
        </nav>

        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.webp"
            alt="Business professionals in South Yorkshire engaging in training"
            fill
            className="object-cover object-center object-[center_25%] brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">For South Yorkshire Businesses</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Funded Training for Businesses
            </h1>
            <p className="text-sm text-slate-200 mb-8 leading-relaxed">
              Skills Bank provides funding for businesses that can demonstrate how training will support their growth plans and build resilience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowAssessment(true)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors text-base sm:text-lg"
              >
                Skills Assessment
                <LightbulbIcon className="ml-2 h-5 w-5" />
              </button>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-base sm:text-lg"
              >
                Speak to Our Team
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Modal */}
      {showAssessment && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full mx-4 p-8">
            <button
              onClick={resetAssessment}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Skills Assessment
              </h2>
              <p className="text-slate-600">
                Answer a few quick questions to help us recommend the best option for your business.
              </p>
            </div>

            {!outcome ? (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-800">
                  {assessmentQuestions[currentQuestion].question}
                </h3>
                <div className="grid gap-4">
                  {assessmentQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                          <span className="text-slate-600 group-hover:text-emerald-600 font-medium">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-lg font-medium text-slate-700">
                          {option.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 ${
                  outcome === 'skills-bank' ? 'bg-emerald-100' :
                  outcome === 'skills-bootcamps' ? 'bg-blue-100' :
                  'bg-purple-100'
                }`}>
                  {React.createElement(outcomeDetails[outcome].icon, {
                    className: outcome === 'skills-bank' ? 'h-8 w-8 text-emerald-600' :
                              outcome === 'skills-bootcamps' ? 'h-8 w-8 text-blue-600' :
                              'h-8 w-8 text-purple-600'
                  })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {outcomeDetails[outcome].title}
                </h3>
                <p className="text-slate-600 mb-8">
                  {outcomeDetails[outcome].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={outcomeDetails[outcome].cta.href}
                    onClick={resetAssessment}
                    className={
                      outcome === 'skills-bank' ? 'inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors' :
                      outcome === 'skills-bootcamps' ? 'inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors' :
                      'inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors'
                    }
                  >
                    {outcomeDetails[outcome].cta.text}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <button
                    onClick={resetAssessment}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src={IMAGES.bootcampsImage2}
                alt="Skills Bootcamps"
                fill
                className="object-cover"
                style={{ objectPosition: 'top left' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <div className="h-[4.5rem] mb-4">
                <h2 className="relative text-2xl font-bold text-gray-900">
                  <span className="relative z-10 line-clamp-2 leading-tight block">Skills Bootcamps</span>
                  <span 
                    className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
                    aria-hidden="true"
                  ></span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">
                Intensive, flexible courses designed to quickly build in-demand capabilities within your workforce.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Up to 60% funding available</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">12-16 week intensive courses</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Industry-recognised certifications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="/images/skills-bank3.jpg"
                alt="Skills Bank"
                fill
                className="object-cover"
                style={{ objectPosition: 'top left' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <div className="h-[4.5rem] mb-4">
                <h2 className="relative text-2xl font-bold text-gray-900">
                  <span className="relative z-10 line-clamp-2 leading-tight block">Skills Bank</span>
                  <span 
                    className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
                    aria-hidden="true"
                  ></span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">
                Direct funding support to invest in training that addresses your business needs and growth plans.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Wide range of approved providers</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Quick application process</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="/images/skills-consultant.jpg"
                alt="Skills assessment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="h-[4.5rem] mb-4">
                <h2 className="relative text-2xl font-bold text-gray-900">
                  <span className="relative z-10 line-clamp-2 leading-tight block">Skills Consultation</span>
                  <span 
                    className="absolute inset-0 -mx-2 -my-1 bg-gradient-to-r from-emerald-100 via-emerald-50 to-white rounded-lg -rotate-[0.5deg] transform-gpu" 
                    aria-hidden="true"
                  ></span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed min-h-[4rem]">
                Get a free assessment of your workforce skills needs and personalised training recommendations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Free consultation session</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Personalised training roadmap</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <span className="text-lg">Funding eligibility check</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Bank Section */}
      <section id="programmes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/skills-bank3.jpg"
                alt="Skills Bank training session in progress"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 mb-6">
                <Briefcase className="h-5 w-5 text-emerald-600" />
                <span className="text-base font-medium text-emerald-900">Skills Bank</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                60% Funding Towards Business Training
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Skills Bank provides flexible funding to support training that directly addresses your business needs and growth plans. With up to 60% of training costs covered, you can invest in developing your workforce without significant financial burden.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Tailored to your business needs",
                  "Wide range of approved providers",
                  "Quick application process",
                  "Flexible training delivery",
                  "Support for multiple sectors"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/skills-bank"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500 group"
              >
                Learn More About Skills Bank
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Bootcamps Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-base font-medium text-blue-900">Skills Bootcamps</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Funded Workforce Development through Skills Bootcamps
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Skills Bootcamps offer intensive, flexible courses designed to quickly build in-demand capabilities within your workforce. These programmes focus on specific skills gaps in key sectors, with courses lasting 12-16 weeks.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Digital and Technical Skills",
                  "Construction and Green Skills",
                  "Leadership and Management",
                  "Industry-recognised certifications",
                  "Immediate application in the workplace"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/skills-bootcamps"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 group"
              >
                Explore Skills Bootcamps
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src={"/images/skills-hub.jpg"}
                alt="Skills Bootcamp training session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-slate-50 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-slate-50/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-100/80 backdrop-blur-sm mb-8 border border-emerald-200/50">
              <Mail className="h-6 w-6 text-emerald-700" />
              <span className="text-lg font-medium text-emerald-900">Training Enquiries</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Need Help Finding the Right Support?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our specialists will guide you through the options and help maximise your funding opportunities.
            </p>
          </div>

          <form className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200/80 hover:border-emerald-200/60 transition-colors">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-slate-700 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-lg"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-base font-medium text-slate-700 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-lg"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-slate-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-lg"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-base font-medium text-slate-700 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-lg"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-slate-700 mb-3">
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-lg"
                  placeholder="Describe your training needs and goals..."
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-base text-slate-500">
                  We aim to respond within two working days
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all shadow-sm hover:shadow-emerald-200 text-lg hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default FundedTrainingPage
