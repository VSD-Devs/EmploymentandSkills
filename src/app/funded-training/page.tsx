'use client'

import React from 'react'
import { useState, useEffect } from 'react'
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
  Home,
  ChevronUp,
  Menu,
  Code2
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

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
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
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

  // Track scroll position for QuickNav and BackToTop
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ['overview', 'skills-bank', 'skills-bootcamps', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      sectionElements.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Funded Training', href: '/funded-training' },
          ]} />
        </div>
      </div>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-[#111827] py-32 flex items-center min-h-[600px]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                  <Building2 className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">For South Yorkshire Businesses</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Funded Training for Businesses
              </h1>
              <p className="text-base md:text-lg text-slate-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Funded training opportunities are available for businesses that can demonstrate how training initiatives will support their growth objectives and enhance resilience.
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

        {/* Quick Navigation - Desktop */}
        <div className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-100 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex space-x-6 py-4">
                <a 
                  href="#overview" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('overview');
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'overview' 
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                  aria-current={activeSection === 'overview' ? 'page' : undefined}
                >
                  Overview
                </a>
                <a 
                  href="#skills-bank" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills-bank');
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'skills-bank' 
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                  aria-current={activeSection === 'skills-bank' ? 'page' : undefined}
                >
                  Skills Bank
                </a>
                <a 
                  href="#skills-bootcamps" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills-bootcamps');
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'skills-bootcamps' 
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                  aria-current={activeSection === 'skills-bootcamps' ? 'page' : undefined}
                >
                  Skills Bootcamps
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'contact' 
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                  aria-current={activeSection === 'contact' ? 'page' : undefined}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-around">
              <div className="flex py-2 w-full justify-between">
                <a 
                  href="#overview" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('overview');
                  }}
                  aria-label="View overview section"
                  className={`group px-3 py-2 flex-1 flex flex-col items-center rounded-lg transition-all ${
                    activeSection === 'overview' 
                      ? 'text-emerald-800 shadow-md transform -translate-y-1 bg-emerald-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Target className={`w-5 h-5 ${
                    activeSection === 'overview' ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Overview</span>
                </a>
                
                <a 
                  href="#skills-bank" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills-bank');
                  }}
                  aria-label="View Skills Bank section"
                  className={`group px-3 py-2 flex-1 flex flex-col items-center rounded-lg transition-all ${
                    activeSection === 'skills-bank' 
                      ? 'text-emerald-800 shadow-md transform -translate-y-1 bg-emerald-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Briefcase className={`w-5 h-5 ${
                    activeSection === 'skills-bank' ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Skills Bank</span>
                </a>
                
                <a 
                  href="#skills-bootcamps" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills-bootcamps');
                  }}
                  aria-label="View Skills Bootcamps section"
                  className={`group px-3 py-2 flex-1 flex flex-col items-center rounded-lg transition-all ${
                    activeSection === 'skills-bootcamps' 
                      ? 'text-emerald-800 shadow-md transform -translate-y-1 bg-emerald-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <BookOpen className={`w-5 h-5 ${
                    activeSection === 'skills-bootcamps' ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Bootcamps</span>
                </a>
                
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  aria-label="View contact section"
                  className={`group px-3 py-2 flex-1 flex flex-col items-center rounded-lg transition-all ${
                    activeSection === 'contact' 
                      ? 'text-emerald-800 shadow-md transform -translate-y-1 bg-emerald-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Mail className={`w-5 h-5 ${
                    activeSection === 'contact' ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className={`fixed right-4 bottom-20 md:bottom-4 z-40 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/50 transition-all duration-300 ${
            showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <ChevronUp className="w-5 h-5 text-gray-600" />
        </button>

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
        <div id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16 relative z-10 scroll-mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Skills Bootcamps",
                description: "Intensive, flexible courses designed to quickly build in-demand capabilities within your workforce.",
                features: ["Up to 60% funding available", "12-16 week intensive courses", "Industry-recognised certifications"],
                image: IMAGES.bootcampsImage2,
                icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
                alt: "Skills Bootcamps training session",
                href: "#skills-bootcamps"
              },
              {
                title: "Skills Bank",
                description: "Direct funding support to invest in training that addresses your business needs and growth plans.",
                features: ["Tailored to your business needs", "Wide range of approved providers", "Quick application process"],
                image: "/images/skills-bank3.jpg",
                icon: <Briefcase className="h-5 w-5 text-emerald-600" />,
                alt: "Skills Bank training programme",
                href: "#skills-bank"
              },
              {
                title: "Skills Consultation",
                description: "Get a free assessment of your workforce skills needs and personalised training recommendations.",
                features: ["Free consultation session", "Personalised training roadmap", "Funding eligibility check"],
                image: "/images/skills-consultant.jpg",
                icon: <Target className="h-5 w-5 text-emerald-600" />,
                alt: "Skills consultant providing advice",
                href: "#contact"
              }
            ].map((card, index) => (
              <div key={index} className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="h-[4.5rem] mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 mb-3">
                      {card.icon}
                      <span className="text-sm font-medium text-emerald-900">{card.title}</span>
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="space-y-4 mb-6 flex-grow">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                          <ChevronRight className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        </div>
                        <span className="text-base sm:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={card.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(card.href.replace('#', ''));
                    }}
                    className="inline-flex items-center justify-center w-full px-5 py-3 mt-auto rounded-lg bg-emerald-50 text-emerald-700 font-medium hover:bg-emerald-100 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Bank Section */}
        <section id="skills-bank" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-auto lg:h-[600px]">
                  <Image
                    src="/images/skills-bank3.jpg"
                    alt="Skills Bank training session showing professionals collaborating on business growth strategies"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 to-transparent mix-blend-multiply" />
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-5 lg:-right-5 max-w-xs bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Programme Impact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <FileCheck className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-600">60%</div>
                        <div className="text-sm text-slate-600">of training costs covered</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-600">500+</div>
                        <div className="text-sm text-slate-600">South Yorkshire businesses supported</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 mb-6">
                  <Briefcase className="h-5 w-5 text-emerald-600" />
                  <span className="text-base font-medium text-emerald-900">Skills Bank</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  60% Funding Towards <span className="text-emerald-600">Business Training</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Skills Bank provides flexible funding to support training that directly addresses your business needs and growth plans. With up to 60% of training costs covered, you can invest in developing your workforce without significant financial burden.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Tailored Training",
                      description: "Custom programmes aligned with your business needs",
                      icon: <Target className="h-6 w-6 text-emerald-600" />
                    },
                    {
                      title: "Wide Provider Network",
                      description: "Access to quality-assured training providers",
                      icon: <Users className="h-6 w-6 text-emerald-600" />
                    },
                    {
                      title: "Quick Application",
                      description: "Streamlined process with minimal paperwork",
                      icon: <Clock className="h-6 w-6 text-emerald-600" />
                    },
                    {
                      title: "Flexible Delivery",
                      description: "On-site, remote or blended learning options",
                      icon: <Sparkles className="h-6 w-6 text-emerald-600" />
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                      <div className="mt-1 flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/skills-bank"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-sm hover:shadow-emerald-200 group"
                  >
                    Learn More About Skills Bank
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors"
                  >
                    Speak to an Advisor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Bootcamps Section */}
        <section id="skills-bootcamps" className="py-20 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 mb-6">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-base font-medium text-blue-900">Skills Bootcamps</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Funded Workforce Development through <span className="text-blue-600">Skills Bootcamps</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Skills Bootcamps offer intensive, flexible courses designed to quickly build in-demand capabilities within your workforce. These programmes focus on specific skills gaps in key sectors, with courses lasting 12-16 weeks.
                </p>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8 overflow-hidden">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                    {[
                      {
                        title: "Digital & Technical",
                        items: ["Coding & Programming", "Cybersecurity", "Data Analytics", "Cloud Services"]
                      },
                      {
                        title: "Construction & Green Skills",
                        items: ["Sustainable Construction", "Renewable Energy", "Green Building", "Retrofit Skills"]
                      }
                    ].map((category, idx) => (
                      <div key={idx} className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                          {idx === 0 ? (
                            <div className="p-1.5 rounded-md bg-blue-100">
                              <Code2 className="h-5 w-5 text-blue-600" />
                            </div>
                          ) : (
                            <div className="p-1.5 rounded-md bg-emerald-100">
                              <Building2 className="h-5 w-5 text-emerald-600" />
                            </div>
                          )}
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Industry-recognised certifications",
                    "Immediate application in the workplace",
                    "Short, intensive training periods",
                    "Aligned with employer needs",
                    "Funding for both new and existing staff"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/skills-bootcamps"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-sm hover:shadow-blue-200 group"
                  >
                    Explore Skills Bootcamps
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
                  >
                    Request Information
                  </Link>
                </div>
              </div>
              <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-auto lg:h-[600px]">
                  <Image
                    src={"/images/skills-hub.jpg"}
                    alt="Skills Bootcamp practical training session with diverse learners"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent mix-blend-multiply" />
                </div>
                
                {/* Bootcamp Duration Feature */}
                <div className="absolute -bottom-5 -left-5 md:left-auto md:-right-5 max-w-xs bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Bootcamp Duration
                  </h3>
                  <div className="relative pt-8">
                    <div className="h-2 bg-slate-100 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full w-[50%]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>Week 1</span>
                      <span>Week 8</span>
                      <span>Week 16</span>
                    </div>
                    <div className="absolute top-0 left-[50%] -translate-x-1/2 bg-blue-600 text-white text-sm font-medium py-1 px-2 rounded">
                      12-16 Weeks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative bg-slate-50 py-24 scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-slate-50/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
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

            <div className="grid lg:grid-cols-5 gap-8 mb-16">
              <div className="lg:col-span-3">
                <form className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 hover:border-emerald-200/60 transition-colors h-full">
                  <div className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-base font-medium text-slate-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-base"
                          placeholder="Your full name"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-base font-medium text-slate-700 mb-2">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-base"
                          placeholder="Your company name"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-base font-medium text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-base"
                          placeholder="your.email@company.com"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-base font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-base"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-base font-medium text-slate-700 mb-2">
                        I'm interested in <span className="text-red-500">*</span>
                      </label>
                      <select 
                        id="interest" 
                        name="interest"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-base"
                        aria-required="true"
                      >
                        <option value="">Please select an option</option>
                        <option value="skills-bank">Skills Bank funding</option>
                        <option value="skills-bootcamps">Skills Bootcamps</option>
                        <option value="consultation">Skills consultation</option>
                        <option value="multiple">Multiple programmes</option>
                        <option value="not-sure">Not sure - need guidance</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-base font-medium text-slate-700 mb-2">
                        How Can We Help? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 text-base"
                        placeholder="Describe your training needs and goals..."
                        aria-required="true"
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                        aria-required="true"
                      />
                      <label htmlFor="consent" className="ml-3 block text-sm text-slate-700">
                        I consent to South Yorkshire Combined Authority contacting me <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        <span className="text-red-500">*</span> Required fields
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all shadow-sm hover:shadow text-base"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 shadow-sm text-white h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <p className="text-slate-300 mb-8">
                    Our team is here to help you find the right training solution for your business. Contact us today.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-800/30 flex items-center justify-center mt-1">
                        <Phone className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-emerald-300">Call us at</p>
                        <a href="tel:08081783061" className="text-lg font-semibold text-white hover:text-emerald-200 transition-colors">
                          0808 178 3061
                        </a>
                        <p className="text-sm text-slate-400 mt-1">Monday to Friday, 9am - 5pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-800/30 flex items-center justify-center mt-1">
                        <Mail className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-emerald-300">Email us at</p>
                        <a href="mailto:training@southyorkshire-ca.gov.uk" className="text-lg font-semibold text-white hover:text-emerald-200 transition-colors">
                          training@southyorkshire-ca.gov.uk
                        </a>
                        <p className="text-sm text-slate-400 mt-1">We aim to respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 mt-auto">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-emerald-700" />
                      </div>
                      <div className="text-xl font-bold text-white">Business Growth Team</div>
                    </div>
                    <p className="text-slate-300">
                      Our dedicated Business Growth Advisors can provide free impartial guidance on all aspects of your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "How much funding is available for training?",
                    answer: "Through Skills Bank, businesses can access up to 60% funding for training costs. The exact amount depends on your business size, sector, and growth objectives."
                  },
                  {
                    question: "Who is eligible for Skills Bootcamps?",
                    answer: "Skills Bootcamps are available to businesses in South Yorkshire. They're suitable for both existing staff development and for new employee training."
                  },
                  {
                    question: "How long does the application process take?",
                    answer: "The application process is streamlined for efficiency. Initial approval can be obtained within 2-3 weeks, with funding decisions typically made within 4-6 weeks."
                  },
                  {
                    question: "Can I choose my own training provider?",
                    answer: "Yes, through Skills Bank you can work with your preferred provider if they meet our quality standards. For Skills Bootcamps, we work with a network of approved providers."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h4 className="text-lg font-medium text-slate-900">{faq.question}</h4>
                      <span className="ml-6 flex-shrink-0 rounded-full bg-emerald-50 p-1.5 text-emerald-700 group-open:rotate-180 transition-transform">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FundedTrainingPage
