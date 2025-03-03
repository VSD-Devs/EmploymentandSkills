'use client'

import React, { useState, useEffect, Fragment } from 'react'
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
  Code2,
  MapPin,
  Handshake,
  TrendingUp,
  Badge,
  ShoppingBag,
  Check,
  Send,
  BrainCircuit as BrainIcon,
  LightbulbIcon as Lightbulb,
  ArrowUp,
  ClipboardCheck
} from 'lucide-react'
import { 
  Dialog, 
  Transition 
} from '@headlessui/react'
import { X as XMarkIcon } from 'lucide-react'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import SkillsDiagnosticModal from '@/components/SkillsDiagnosticModal'

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
  const [showSkillsDiagnostic, setShowSkillsDiagnostic] = useState(false)
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
  const [isVisible, setIsVisible] = useState(true)

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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Hero Text Content */}
              <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
                <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-4">
                  <span className="text-sm font-medium text-blue-800">Business Growth & Training</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                  Funded Training <span className="text-blue-600">for Businesses</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                  Access funding to upskill your workforce, develop essential capabilities, and drive business growth in South Yorkshire.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <button 
                    onClick={() => setShowSkillsDiagnostic(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center"
                  >
                    Start Skills Diagnostic
                    <BrainIcon className="ml-2 h-5 w-5" />
                  </button>
                  <Link 
                    href="#contact" 
                    className="bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                  >
                    Contact Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              {/* Hero Key Features - Right side */}
              <div className="md:col-span-6 lg:col-span-7 relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
                  {/* Large Featured Image */}
                  <div className="rounded-xl overflow-hidden mb-4 relative h-52">
                    <Image 
                      src="/images/hero-business.webp"
                      alt="Business professionals in a training environment"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1 text-sm">Skilled Workforce</h3>
                        <p className="text-xs text-slate-600">Develop talent in-house</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <PieChart className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1 text-sm">Business Growth</h3>
                        <p className="text-xs text-slate-600">Increase productivity & profits</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <Rocket className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1 text-sm">Up to 60% Funding</h3>
                        <p className="text-xs text-slate-600">Reduce training costs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Navigation Bar */}
        <div className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-1 text-blue-800 font-bold text-xl">
                <Building2 className="h-6 w-6" />
                <span>Business Funding</span>
              </div>
              
              <div className="flex items-center gap-6">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'funding-options', label: 'Funding Options' },
                  { id: 'eligibility', label: 'Eligibility' },
                  { id: 'success-stories', label: 'Success Stories' },
                  { id: 'contact', label: 'Apply Now' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
                      activeSection === item.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    {item.label}
                  </a>
                ))}
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
                      ? 'text-blue-800 shadow-md transform -translate-y-1 bg-blue-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Target className={`w-5 h-5 ${
                    activeSection === 'overview' ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Overview</span>
                </a>
                
                <a 
                  href="#funding-options" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('funding-options');
                  }}
                  aria-label="View funding options section"
                  className={`group px-3 py-2 flex-1 flex flex-col items-center rounded-lg transition-all ${
                    activeSection === 'funding-options' 
                      ? 'text-blue-800 shadow-md transform -translate-y-1 bg-blue-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Briefcase className={`w-5 h-5 ${
                    activeSection === 'funding-options' ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Funding</span>
                </a>
                
                <a 
                  href="#eligibility" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('eligibility');
                  }}
                  aria-label="View eligibility section"
                  className={`group px-3 py-2 flex-1 flex flex-col items-center rounded-lg transition-all ${
                    activeSection === 'eligibility' 
                      ? 'text-blue-800 shadow-md transform -translate-y-1 bg-blue-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <CheckCircle2 className={`w-5 h-5 ${
                    activeSection === 'eligibility' ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Eligibility</span>
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
                      ? 'text-blue-800 shadow-md transform -translate-y-1 bg-blue-50'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Mail className={`w-5 h-5 ${
                    activeSection === 'contact' ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="text-xs mt-1 font-medium">Apply</span>
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

        {/* Skills Diagnostic Modal */}
        <SkillsDiagnosticModal 
          isOpen={showSkillsDiagnostic} 
          onClose={() => setShowSkillsDiagnostic(false)} 
        />

        {/* Overview Section */}
        <section id="overview" className="py-12 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-medium text-blue-900">Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Skills Diagnostic Tool
              </h2>
              <p className="text-base sm:text-lg text-slate-800">
                Our Skills Diagnostic tool will help identify the right funding and training options for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    Navigating the world of business training and funding can be complex. That's why we've created a personalised approach to help you find the perfect solution for your business.
                  </p>
                  <p>
                    Our comprehensive Skills Diagnostic tool analyses your business needs, goals, and current workforce to recommend the most suitable funding programmes and training solutions.
                  </p>
                  <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Why use our Skills Diagnostic?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Personalised recommendations based on your specific business needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Quick assessment that takes less than 3 minutes to complete</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Identify the highest funding percentage available for your circumstances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Receive tailored advice on next steps to secure your funding</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="h-6 w-6 text-amber-500" />
                    <h4 className="font-semibold text-slate-900">Did you know?</h4>
                  </div>
                  <p className="text-slate-700">
                    Businesses that undergo a skills diagnostic before training are 43% more likely to see measurable improvements in workforce performance and productivity.
                  </p>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={() => setShowSkillsDiagnostic(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium inline-flex items-center justify-center shadow-lg hover:shadow-blue-600/20"
                  >
                    Start Your Skills Diagnostic
                    <BrainIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Skills Diagnostic</h3>
                  <p className="text-blue-100">
                    Answer a few questions about your business to get personalised training recommendations
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">1</div>
                      <div>
                        <h4 className="font-medium text-slate-900">Tell us about your business</h4>
                        <p className="text-sm text-slate-600">Location, size, and sector information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">2</div>
                      <div>
                        <h4 className="font-medium text-slate-900">Share your business goals</h4>
                        <p className="text-sm text-slate-600">What you want to achieve with training</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">3</div>
                      <div>
                        <h4 className="font-medium text-slate-900">Identify skills needs</h4>
                        <p className="text-sm text-slate-600">Areas where your workforce needs development</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">4</div>
                      <div>
                        <h4 className="font-medium text-slate-900">Get recommendations</h4>
                        <p className="text-sm text-slate-600">Personalised funding and training solutions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="text-indigo-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm italic text-slate-700">
                          "The skills diagnostic helped us identify exactly what training our team needed. The funding recommendations saved us thousands of pounds."
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          — Sarah T., Operations Director, Sheffield Manufacturing
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowSkillsDiagnostic(true)}
                    className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium inline-flex items-center justify-center"
                  >
                    Start Diagnostic
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Options Section */}
        <section id="funding-options" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-medium text-blue-900">Funding Options</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Funded Options for Your Business
              </h2>
              <p className="text-base sm:text-lg text-slate-800">
                Explore the range of funded training programmes available to help your business grow and develop
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Fully Funded Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-200/60 overflow-hidden flex flex-col h-full">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-800 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">Adult Skills Funding</span>
                    <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-medium">Fully Funded</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Adult Skills Funding
                  </h3>
                  <p className="text-slate-600">
                    Access fully funded training for eligible employees in South Yorkshire, helping them develop essential workplace skills.
                  </p>
                </div>
                <div className="p-6 flex-grow">
                  <h4 className="font-medium text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Business based in South Yorkshire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Employees aged 19+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">UK/EU resident with right to work</span>
                    </li>
                  </ul>
                  <Link
                    href="/adult-skills"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium mt-auto"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Skills Bank Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-200/60 overflow-hidden flex flex-col h-full">
                <div className="p-6 bg-indigo-50 border-b border-indigo-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full text-sm font-medium">Skills Bank</span>
                    <span className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full text-xs font-medium">Up to 60% Funded</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Skills Bank
                  </h3>
                  <p className="text-slate-600">
                    Tailored training solutions with significant funding support to help your business achieve its growth ambitions.
                  </p>
                </div>
                <div className="p-6 flex-grow">
                  <h4 className="font-medium text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Business based in South Yorkshire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Clear growth plans for your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Commitment to staff development</span>
                    </li>
                  </ul>
                  <Link
                    href="/skills-bank"
                    className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-medium mt-auto"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Skills Bootcamps Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-200/60 overflow-hidden flex flex-col h-full">
                <div className="p-6 bg-purple-50 border-b border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-800 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium">Skills Bootcamps</span>
                    <span className="text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full text-xs font-medium">Co-investment</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Skills Bootcamps
                  </h3>
                  <p className="text-slate-600">
                    Intensive, flexible training courses in high-demand skills areas with employer contribution required.
                  </p>
                </div>
                <div className="p-6 flex-grow">
                  <h4 className="font-medium text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">10% cost for SMEs (under 250 staff)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">30% cost for large employers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Courses run for up to 16 weeks</span>
                    </li>
                  </ul>
                  <Link
                    href="/skills-bootcamps"
                    className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium mt-auto"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="py-16 md:py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm font-medium text-blue-800">Eligibility Criteria</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Is Your Business <span className="text-blue-600">Eligible?</span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                  Our funding programmes have specific criteria to ensure resources reach businesses that will benefit most and contribute to South Yorkshire's economic growth.
                </p>
                
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Common Requirements:</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-lg font-medium text-slate-900">South Yorkshire Based</span>
                        <p className="text-slate-700 mt-1">Business must be located in Sheffield, Doncaster, Barnsley, or Rotherham</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-lg font-medium text-slate-900">Small to Medium Enterprise</span>
                        <p className="text-slate-700 mt-1">Many programmes are limited to SMEs with fewer than 250 employees</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-lg font-medium text-slate-900">Growth Ambitions</span>
                        <p className="text-slate-700 mt-1">Demonstrable plans for business growth or workforce development</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={() => setShowAssessment(true)}
                  className="text-base bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center"
                >
                  Check Your Eligibility Now
                  <Lightbulb className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                  <div className="relative rounded-xl overflow-hidden h-64 mb-6">
                    <Image
                      src="/images/business-meeting.jpg"
                      alt="Business team discussing training opportunities"
                      fill
                      className="object-cover"
                    />
                    
                    {/* Business testimonial overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="space-y-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Handshake className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-slate-700 italic">
                                "The Skills Bank funding allowed us to develop critical digital skills in our team, directly contributing to 30% business growth."
                              </p>
                              <p className="text-blue-700 font-medium text-sm mt-1">Sheffield Tech Solutions - Managing Director</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional eligibility information */}
                  <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Additional Considerations:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-600">Each funding programme has specific eligibility criteria - we can help determine the best fit</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-600">Some sectors may have priority access to certain funding streams</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-600">Our team can provide a personalised assessment of your eligibility</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="case-studies" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-medium text-blue-900">Success Stories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Businesses Transformed Through Training
              </h2>
              <p className="text-base sm:text-lg text-slate-700">
                See how South Yorkshire businesses have leveraged funded training to accelerate growth and success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Success Story 1 */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg transition-all hover:shadow-xl group">
                <div className="h-48 relative">
                  <Image
                    src="/images/manufacturing-business.jpg"
                    alt="Manufacturing business in Sheffield"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">Sheffield Engineering Ltd</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-700">Manufacturing</span>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Transformed their production processes through leadership and digital skills training, leading to:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">20% increase in productivity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">15% reduction in waste</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">30% growth in revenue</span>
                    </li>
                  </ul>
                  <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-500">Funding Used:</span>
                      <p className="text-sm font-medium text-slate-800">Skills Bank (60% funded)</p>
                    </div>
                    <Link href="/case-studies/sheffield-engineering" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg transition-all hover:shadow-xl group">
                <div className="h-48 relative">
                  <Image
                    src="/images/tech-office.jpg"
                    alt="Technology company in Rotherham"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">Rotherham Digital Solutions</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Code2 className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-700">Technology</span>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Used Skills Bootcamps to upskill their development team in cloud technologies, resulting in:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">3 new enterprise clients secured</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">40% increase in client retention</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">25% revenue growth in 6 months</span>
                    </li>
                  </ul>
                  <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-500">Funding Used:</span>
                      <p className="text-sm font-medium text-slate-800">Skills Bootcamps (90% funded)</p>
                    </div>
                    <Link href="/case-studies/rotherham-digital" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg transition-all hover:shadow-xl group">
                <div className="h-48 relative">
                  <Image
                    src="/images/retail-business.jpg"
                    alt="Retail business in Doncaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">Doncaster Retail Group</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <ShoppingBag className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-700">Retail</span>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Revitalised their business through digital marketing and customer service training:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">35% increase in online sales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">28% improvement in staff satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">50% reduction in staff turnover</span>
                    </li>
                  </ul>
                  <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-500">Funding Used:</span>
                      <p className="text-sm font-medium text-slate-800">Adult Skills Funding (100% funded)</p>
                    </div>
                    <Link href="/case-studies/doncaster-retail" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md hover:shadow-xl"
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-medium text-white">Apply Now</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to grow your business?
              </h2>
              <p className="text-base sm:text-lg text-blue-100">
                Our team can help you identify the right funding options and create a training plan that meets your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Callback</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="business-name" className="block text-sm font-medium text-slate-700 mb-1">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="business-name"
                        name="business-name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="contact-name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">
                      Interested in <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a funding option</option>
                      <option value="skills-bank">Skills Bank</option>
                      <option value="skills-bootcamps">Skills Bootcamps</option>
                      <option value="adult-funding">Adult Skills Funding</option>
                      <option value="not-sure">Not sure - need guidance</option>
                    </select>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg"
                    >
                      Submit Request
                    </button>
                    <p className="text-xs text-slate-500 mt-2 text-center">
                      We'll respond within one working day
                    </p>
                  </div>
                </form>
              </div>
              
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Our Business Team</h3>
                <p className="text-blue-100 mb-8">
                  Our dedicated team of business advisors can help you navigate the funding options and find the right solution for your business needs.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Call us on</p>
                      <a href="tel:0808 178 9901" className="text-xl font-bold text-white hover:text-blue-200">
                        0808 178 9901
                      </a>
                      <p className="text-sm text-blue-200 mt-1">Monday to Friday, 9am - 5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Email us at</p>
                      <a href="mailto:business@southyorkshire-ca.gov.uk" className="text-xl font-bold text-white hover:text-blue-200">
                        business@southyorkshire-ca.gov.uk
                      </a>
                      <p className="text-sm text-blue-200 mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Need advice?</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Our team can provide a free, no-obligation consultation to discuss your business needs and the funding options available to you.
                  </p>
                  <Link
                    href="/business-support"
                    className="inline-flex items-center text-white font-medium hover:text-blue-200"
                  >
                    Learn about our business support services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FundedTrainingPage;
