'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
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
  GraduationCap,
  MapPin,
  Star,
  RefreshCw,
  PieChart,
  Award,
  Gauge,
  BookOpen,
  Lightbulb,
  Heart,
  ArrowRight,
  Clipboard,
  BarChart3,
  LineChart,
  PanelRight
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

// Define skill assessment type
type SkillCategory = {
  name: string
  icon: React.ComponentType<any>
  skills: {
    name: string
    description: string
    levels: string[]
    userLevel?: number
  }[]
}

// Define career path type
type CareerPath = {
  id: string
  title: string
  description: string
  image: string
  skills: string[]
  programmes: string[]
  jobExamples: string[]
}

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
  skills: Record<string, number>
  barriers: string[]
  [key: string]: string | number | string[] | Record<string, number>
}

// Define success story type
type SuccessStory = {
  name: string
  image: string
  challenge: string
  solution: string
  outcome: string
  quote: string
}

// Image assets
const IMAGES = {
  hero: "/images/mental-health-hero.jpg",
  support: "/images/mental-health-hero.jpg",
  pattern: "/images/pattern.svg",
  connectToWork: "/images/connect-to-work.jpg",
  workWell: "/images/work-well.jpg",
  integrated: "/images/integrated-support.jpg",
  assessment: "/images/skills-assessment.jpg",
  pathfinder: "/images/career-pathfinder.jpg",
  successStories: "/images/success-stories.jpg"
}

// Constants for the skills assessment
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Communication",
    icon: MessageSquare,
    skills: [
      {
        name: "Verbal Communication",
        description: "Ability to effectively express yourself verbally",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      },
      {
        name: "Written Communication",
        description: "Ability to write clearly and effectively",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      },
      {
        name: "Active Listening",
        description: "Ability to listen attentively and respond appropriately",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      }
    ]
  },
  {
    name: "Technical Skills",
    icon: PanelRight,
    skills: [
      {
        name: "Digital Literacy",
        description: "Ability to use computers and digital tools",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      },
      {
        name: "Data Analysis",
        description: "Ability to interpret and use data",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      },
      {
        name: "Software Proficiency",
        description: "Ability to use relevant software applications",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      }
    ]
  },
  {
    name: "Personal Skills",
    icon: Heart,
    skills: [
      {
        name: "Time Management",
        description: "Ability to use time efficiently",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      },
      {
        name: "Problem Solving",
        description: "Ability to identify problems and find solutions",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      },
      {
        name: "Adaptability",
        description: "Ability to adjust to new conditions",
        levels: ["Basic", "Intermediate", "Advanced", "Expert"]
      }
    ]
  }
]

// Career paths
const CAREER_PATHS: CareerPath[] = [
  {
    id: "administrative",
    title: "Administrative & Office Support",
    description: "Roles that involve coordinating office functions, managing communications, and providing administrative support.",
    image: "/images/connect-to-work.jpg",
    skills: ["Digital Literacy", "Written Communication", "Time Management"],
    programmes: ["Connect to Work Programme", "Integrated Support Network"],
    jobExamples: ["Administrative Assistant", "Office Coordinator", "Customer Support Representative"]
  },
  {
    id: "healthcare",
    title: "Healthcare Support",
    description: "Roles in the healthcare sector providing support to healthcare professionals and patients.",
    image: "/images/work-well.jpg",
    skills: ["Active Listening", "Adaptability", "Time Management"],
    programmes: ["WorkWell Service", "Connect to Work Programme"],
    jobExamples: ["Healthcare Assistant", "Support Worker", "Care Coordinator"]
  },
  {
    id: "digital",
    title: "Digital & IT",
    description: "Roles in the technology sector managing systems, providing support, or creating digital content.",
    image: "/images/integrated-support.jpg",
    skills: ["Digital Literacy", "Problem Solving", "Software Proficiency"],
    programmes: ["Connect to Work Programme", "Integrated Support Network"],
    jobExamples: ["IT Support Technician", "Digital Content Creator", "Data Entry Specialist"]
  }
]

// Success stories
const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "Sarah",
    image: "/images/connect-to-work.jpg",
    challenge: "Long-term unemployment due to health conditions",
    solution: "Connect to Work Programme with personalised support",
    outcome: "Now working as an Administrative Assistant with flexible hours",
    quote: "The programme helped me rebuild my confidence and find a job that accommodates my health needs."
  },
  {
    name: "James",
    image: "/images/work-well.jpg",
    challenge: "Recently made redundant after 15 years in manufacturing",
    solution: "Skills assessment and targeted digital training",
    outcome: "Secured a role in IT support with a local company",
    quote: "I never thought I could change careers at my age, but the support showed me it was possible."
  },
  {
    name: "Priya",
    image: "/images/integrated-support.jpg",
    challenge: "Anxiety and depression making job searching difficult",
    solution: "Integrated Support Network with healthcare referrals",
    outcome: "Working part-time in retail while managing her health",
    quote: "Having support for both my mental health and employment needs made all the difference."
  }
]

const EmploymentSupportPage = () => {
  // Core state
  const [formStep, setFormStep] = useState(1)
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  // New state for enhanced features
  const [showSkillsAssessment, setShowSkillsAssessment] = useState(false)
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0)
  const [skillsCompleted, setSkillsCompleted] = useState(false)
  const [showCareerPathfinder, setShowCareerPathfinder] = useState(false)
  const [selectedCareerPath, setSelectedCareerPath] = useState<string | null>(null)
  const [activeStory, setActiveStory] = useState(0)
  const storyIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [barriersTags, setBarriersTags] = useState<string[]>([])
  const [showSubmitSuccess, setShowSubmitSuccess] = useState(false)

  // Form data
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
    skills: {},
    barriers: [],
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Common barriers for job seekers
  const commonBarriers = [
    "Health condition",
    "Lack of qualifications",
    "Caring responsibilities",
    "Transportation issues",
    "Digital access limitations",
    "Interview anxiety",
    "CV/Resume gaps",
    "Limited work experience",
    "Age concerns",
    "Language barriers"
  ]

  // Updated eligibility questions
  const questions = [
    {
      question: "Are you aged 16 or over?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Do you have a health condition or disability that affects your daily life?",
      options: ["Yes", "No", "Prefer not to say"],
      disqualifyIf: null
    },
    {
      question: "Which best describes your current situation?",
      options: [
        "Currently employed but struggling",
        "Recently unemployed (less than 12 months)",
        "Long-term unemployed (more than 12 months)",
        "Never been employed before",
        "Student or recent graduate"
      ],
      disqualifyIf: null
    },
    {
      question: "Where do you live?",
      options: [
        "England or Wales",
        "Scotland",
        "Northern Ireland",
        "Outside the UK"
      ],
      disqualifyIf: "Outside the UK"
    },
    {
      question: "What is your main employment goal?",
      options: [
        "Find any job as soon as possible",
        "Find a job that matches my skills",
        "Change careers completely",
        "Progress in my current career",
        "Start my own business"
      ],
      disqualifyIf: null
    }
  ]

  // Updated form steps
  const formSteps = [
    {
      title: "Personal Details",
      fields: ["fullName", "email", "phone", "dateOfBirth"],
      icon: Users
    },
    {
      title: "Location",
      fields: ["address", "city", "postcode"],
      icon: MapPin
    },
    {
      title: "Your Situation",
      fields: ["healthCondition", "currentStatus", "employmentGoals"],
      icon: Clipboard
    },
    {
      title: "Programme Selection",
      fields: ["preferredProgramme", "referralSource", "additionalSupport"],
      icon: Target
    }
  ]

  // Handle eligibility checker answers
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  // Determine eligibility based on answers
  const isEligible = () => {
    // Only disqualify on explicit disqualification criteria
    return !answers.some((answer, index) => 
      questions[index].disqualifyIf !== null && 
      answer === questions[index].disqualifyIf
    )
  }

  // Suggest a programme based on eligibility answers
  const suggestedProgramme = () => {
    // Simple logic to determine which programme might be best
    const situation = answers[2] // Current situation answer
    const goal = answers[4] // Employment goal answer
    
    if (answers[1] === "Yes" && ["Recently unemployed (less than 12 months)", "Long-term unemployed (more than 12 months)"].includes(situation)) {
      return "Connect to Work Programme"
    } else if (situation === "Currently employed but struggling") {
      return "WorkWell Service"
    } else {
      return "Integrated Support Network"
    }
  }

  // Reset eligibility checker
  const resetChecker = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setShowEligibilityChecker(false)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle skill level selection
  const handleSkillLevelChange = (skillName: string, level: number) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills as Record<string, number>,
        [skillName]: level
      }
    }))
  }

  // Handle barrier tag selection
  const handleBarrierToggle = (barrier: string) => {
    setBarriersTags(prev => {
      if (prev.includes(barrier)) {
        return prev.filter(b => b !== barrier)
      } else {
        return [...prev, barrier]
      }
    })
    
    setFormData(prev => ({
      ...prev,
      barriers: prev.barriers.includes(barrier) 
        ? prev.barriers.filter(b => b !== barrier)
        : [...prev.barriers, barrier]
    }))
  }

  // Form validation and navigation
  const handleNextStep = () => {
    const currentFields = formSteps[formStep - 1].fields
    const hasErrors = currentFields.some(field => !formData[field as keyof typeof formData])
    
    if (!hasErrors) {
      setFormStep(prev => Math.min(prev + 1, formSteps.length))
    } else {
      setFormErrors(
        currentFields.reduce((acc, field) => ({
          ...acc,
          [field]: !formData[field as keyof typeof formData] ? 'This field is required' : ''
        }), {})
      )
    }
  }

  const handlePrevStep = () => {
    setFormStep(prev => Math.max(prev - 1, 1))
  }

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here we would typically send the formData to a backend API
      // For this example, we'll just simulate success
      console.log('Form submitted with data:', formData)
      setFormSubmitted(true)
      setShowSubmitSuccess(true)
    } catch (error) {
      setFormErrors({ submit: 'Failed to submit form. Please try again.' })
    }
  }

  // Skills assessment navigation
  const handleNextSkillCategory = () => {
    if (currentSkillCategory < SKILL_CATEGORIES.length - 1) {
      setCurrentSkillCategory(prev => prev + 1)
    } else {
      setSkillsCompleted(true)
    }
  }

  const handlePrevSkillCategory = () => {
    if (currentSkillCategory > 0) {
      setCurrentSkillCategory(prev => prev - 1)
    }
  }

  // Handle touch events for swipe navigation
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
      const sections = ['overview', 'assessment', 'pathfinder', 'programmes', 'stories', 'apply']
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
    const sections = ['overview', 'assessment', 'pathfinder', 'programmes', 'stories', 'apply']
    const scrollPosition = window.scrollY + window.innerHeight / 3

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

  // Rotate through success stories
  useEffect(() => {
    storyIntervalRef.current = setInterval(() => {
      setActiveStory(prev => (prev + 1) % SUCCESS_STORIES.length)
    }, 8000)
    
    return () => {
      if (storyIntervalRef.current) {
        clearInterval(storyIntervalRef.current)
      }
    }
  }, [])

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Take the eligibility results and apply them to the form
  useEffect(() => {
    if (isEligible() && showResult) {
      // Auto-populate some form fields based on eligibility answers
      setFormData(prev => ({
        ...prev,
        currentStatus: answers[2],
        employmentGoals: answers[4],
        preferredProgramme: suggestedProgramme()
      }))
    }
  }, [showResult, answers])

  // Store barriers in form data when they change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      barriers: barriersTags
    }))
  }, [barriersTags])

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

      {/* Hero Section - Redesigned with better focus on job seekers */}
      <section id="overview" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            {/* Hero Content */}
            <div className="md:w-7/12 space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-sm border border-blue-500/30">
                <Sparkles className="h-4 w-4 text-blue-300" />
                <span className="text-xs md:text-sm font-medium text-blue-100">Personalised Support</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">Meaningful Employment</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                We understand finding a job can be challenging. Our free, personalised support helps you overcome barriers and build a career that works for your life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => {
                    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })
                    setActiveSection('assessment')
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-blue-900 font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
                >
                  Start Skills Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setShowEligibilityChecker(true)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-700/50 text-white font-medium backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700/70 transition-colors"
                >
                  Check Eligibility
                  <CheckCircle2 className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Hero Features Card */}
            <div className="md:w-5/12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-6 shadow-2xl shadow-blue-900/20">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  How We Help You Succeed
                </h2>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Target,
                      title: "Personalised Support Plan",
                      description: "Tailored to address your specific needs and goals."
                    },
                    {
                      icon: BookOpen,
                      title: "Skills Development",
                      description: "Training and resources to enhance your employability."
                    },
                    {
                      icon: Heart,
                      title: "Health & Wellbeing",
                      description: "Support for managing health conditions while working."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/40 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-blue-100" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                        <p className="text-sm text-blue-200">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { figure: "5,000+", label: "People Supported", icon: Users },
              { figure: "75%", label: "Success Rate", icon: CheckCircle2 },
              { figure: "100%", label: "Free Service", icon: Award },
              { figure: "3", label: "Specialised Programmes", icon: Briefcase }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">{stat.figure}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Navigation Bar - Enhanced with better icons and accessiblity */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between py-2">
            {[
              { id: 'overview', icon: Users, label: 'Overview' },
              { id: 'assessment', icon: Gauge, label: 'Assessment' },
              { id: 'pathfinder', icon: Target, label: 'Careers' },
              { id: 'apply', icon: FileCheck, label: 'Apply' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center px-3 py-1.5 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation - New sticky nav for better UX */}
      <div className="hidden md:block sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-1 text-blue-900 font-bold text-xl">
              <Briefcase className="h-6 w-6" />
              <span>Employment Support</span>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'assessment', label: 'Skills Assessment' },
                { id: 'pathfinder', label: 'Career Pathfinder' },
                { id: 'programmes', label: 'Programmes' },
                { id: 'apply', label: 'Apply Now' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium py-1 border-b-2 transition-colors ${
                    activeSection === item.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    setActiveSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button
              onClick={() => setShowEligibilityChecker(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Check Eligibility
              <CheckCircle2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Skills Assessment Section - NEW */}
      <section id="assessment" className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Section Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-2">
                <Gauge className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-800">Self-Assessment Tool</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Discover Your Employment Strengths</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our skills assessment helps you identify your talents, address your challenges, and find the right support tailored to your unique situation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Identify Your Strengths", description: "Understand what skills you already have" },
                  { icon: Lightbulb, title: "Uncover Opportunities", description: "See which careers match your abilities" },
                  { icon: RefreshCw, title: "Find Skill Gaps", description: "Learn what skills to develop" },
                  { icon: Target, title: "Personalised Support", description: "Get support matched to your needs" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setShowSkillsAssessment(true)}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Start Skills Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            {/* Image or Illustration */}
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={IMAGES.assessment}
                  alt="Person completing a skills assessment on a tablet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl font-bold text-blue-600">9</div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-gray-900">Key Skills Assessed</h3>
                      <p className="text-xs text-gray-600">Takes approximately 5-10 minutes to complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathfinder Section - NEW */}
      <section id="pathfinder" className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">Career Pathfinder</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Find Your Perfect Career Match</h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore potential career paths matched to your skills and circumstances. We've identified pathways that have proven successful for people with similar backgrounds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {CAREER_PATHS.map((path, index) => (
              <div 
                key={index} 
                className={`group relative rounded-2xl overflow-hidden border ${
                  selectedCareerPath === path.id 
                    ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-2' 
                    : 'border-gray-200 hover:border-blue-200'
                } transition-all duration-300 bg-white shadow-sm hover:shadow-md`}
              >
                {/* Path Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{path.title}</h3>
                  </div>
                </div>
                
                {/* Path Content */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Example Roles</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {path.jobExamples.map((job, jobIndex) => (
                        <li key={jobIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{job}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedCareerPath(path.id)
                      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                      setFormData(prev => ({
                        ...prev,
                        employmentGoals: `Interested in ${path.title}`,
                        preferredProgramme: path.programmes[0]
                      }))
                    }}
                    className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                      selectedCareerPath === path.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    Select This Path
                    {selectedCareerPath === path.id && <CheckCircle2 className="inline-block ml-2 h-4 w-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-6">
              Not sure which path is right for you? Take our assessment to get personalised recommendations.
            </p>
            <button
              onClick={() => setShowSkillsAssessment(true)}
              className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-blue-200 text-blue-700 text-sm font-medium hover:bg-blue-50 transition-colors"
            >
              Take Skills Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Updated Programmes Section - Revised for better UI/UX */}
      <section id="programmes" className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <Briefcase className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">Support Programmes</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Tailored Support for Your Needs</h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programmes are designed to provide the right support at the right time, helping you overcome barriers to employment and build a sustainable career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: 'Connect to Work Programme',
                description: 'Specialised support for people with health conditions or complex barriers to employment, focused on finding sustainable work.',
                image: IMAGES.connectToWork,
                features: [
                  'One-to-one employment specialist support',
                  'Health condition management advice',
                  'Access to training and qualifications',
                  'Job search assistance and preparation',
                  'In-work support for up to 6 months'
                ],
                eligibility: 'Individuals with health conditions or disabilities who face barriers to employment.'
              },
              {
                icon: Heart,
                title: 'WorkWell Service',
                description: 'Early intervention support with expert assessment of health-related barriers to work, helping you manage conditions while working.',
                image: IMAGES.workWell,
                features: [
                  'Health-focused employment support',
                  'Guidance for workplace adjustments',
                  'Condition management planning',
                  'Return to work support',
                  'Employer liaison services'
                ],
                eligibility: 'People currently in work but struggling, or recently unemployed due to health conditions.'
              },
              {
                icon: Briefcase,
                title: 'Integrated Support Network',
                description: 'Comprehensive support connecting you to local services, resources, and specialists to address all barriers to employment.',
                image: IMAGES.integrated,
                features: [
                  'Access to local specialist services',
                  'Benefit and debt advice',
                  'Housing and family support connections',
                  'Mental health and wellbeing services',
                  'Community engagement opportunities'
                ],
                eligibility: 'Available to all participants, providing wraparound support based on individual needs.'
              }
            ].map((programme, index) => (
              <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col">
                {/* Programme Header */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600/30 backdrop-blur-sm flex items-center justify-center">
                          <programme.icon className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{programme.title}</h3>
                      </div>
                      <p className="text-sm text-gray-300 line-clamp-2">{programme.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Programme Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {programme.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 -mx-5 px-5 py-4 mt-auto">
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">Who is this for?</h4>
                    <p className="text-xs text-blue-800">{programme.eligibility}</p>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          preferredProgramme: programme.title
                        }))
                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Apply for This Programme
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - NEW */}
      <section id="stories" className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">Success Stories</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Real Stories, Real Results</h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our support has helped people like you overcome barriers and find meaningful employment.
            </p>
          </div>
          
          {/* Success Story Carousel */}
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row">
              {/* Story Image */}
              <div className="md:w-1/2 relative">
                <div className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden">
                  <Image
                    src={SUCCESS_STORIES[activeStory].image}
                    alt={SUCCESS_STORIES[activeStory].name}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                      <Star className="h-4 w-4 text-yellow-300" />
                      <span className="text-xs font-medium text-white">Success Story</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{SUCCESS_STORIES[activeStory].name}</h3>
                    <p className="text-sm text-gray-200">{SUCCESS_STORIES[activeStory].outcome}</p>
                  </div>
                </div>
              </div>
              
              {/* Story Content */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">The Challenge</div>
                      <p className="text-gray-600">{SUCCESS_STORIES[activeStory].challenge}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">Our Solution</div>
                      <p className="text-gray-600">{SUCCESS_STORIES[activeStory].solution}</p>
                    </div>
                  </div>
                  
                  <blockquote className="relative border-l-4 border-blue-500 pl-4 italic text-gray-800 my-6">
                    "{SUCCESS_STORIES[activeStory].quote}"
                  </blockquote>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
                  <div className="text-sm text-gray-600">
                    Story {activeStory + 1} of {SUCCESS_STORIES.length}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setActiveStory(prev => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length)}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      onClick={() => setActiveStory(prev => (prev + 1) % SUCCESS_STORIES.length)}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Next story"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
              {SUCCESS_STORIES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeStory === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Assessment Modal */}
      {showSkillsAssessment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl mx-auto shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowSkillsAssessment(false)
                setCurrentSkillCategory(0)
                setSkillsCompleted(false)
              }}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-6 md:p-8">
              {!skillsCompleted ? (
                <>
                  {/* Header with Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Skills Assessment
                      </h3>
                      <span className="text-sm text-gray-500">
                        Step {currentSkillCategory + 1} of {SKILL_CATEGORIES.length}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentSkillCategory + 1) / SKILL_CATEGORIES.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Current Skill Category */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        {React.createElement(SKILL_CATEGORIES[currentSkillCategory].icon, { className: "h-5 w-5 text-blue-600" })}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {SKILL_CATEGORIES[currentSkillCategory].name} Skills
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      Rate your confidence level in each of the following skills:
                    </p>
                    
                    <div className="space-y-8">
                      {SKILL_CATEGORIES[currentSkillCategory].skills.map((skill, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                            <div>
                              <h5 className="text-base font-medium text-gray-900">{skill.name}</h5>
                              <p className="text-sm text-gray-600">{skill.description}</p>
                            </div>
                            <div className="md:text-right">
                              <div className="text-sm font-medium text-gray-700">
                                {formData.skills[skill.name] 
                                  ? skill.levels[formData.skills[skill.name] - 1] 
                                  : 'Not rated'}
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-2">
                            {skill.levels.map((level, levelIndex) => (
                              <button
                                key={levelIndex}
                                onClick={() => handleSkillLevelChange(skill.name, levelIndex + 1)}
                                className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                                  formData.skills[skill.name] === levelIndex + 1
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {level}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={handlePrevSkillCategory}
                      disabled={currentSkillCategory === 0}
                      className={`px-4 py-2 rounded-lg flex items-center gap-1 ${
                        currentSkillCategory === 0
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      Previous
                    </button>
                    
                    <button
                      onClick={handleNextSkillCategory}
                      className="px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-1"
                    >
                      {currentSkillCategory < SKILL_CATEGORIES.length - 1 ? 'Next' : 'Complete'}
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </>
              ) : (
                // Results Screen
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Assessment Complete!
                  </h3>
                  
                  <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Based on your responses, we've identified your key strengths and areas for development. Here's a summary of your skills profile:
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Strengths */}
                      <div>
                        <h4 className="flex items-center gap-2 text-green-700 font-semibold mb-3">
                          <Award className="h-5 w-5" />
                          Your Strengths
                        </h4>
                        
                        <ul className="space-y-2">
                          {Object.entries(formData.skills)
                            .filter(([_, level]) => level >= 3)
                            .slice(0, 3)
                            .map(([skillName], index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                                <span className="text-gray-800">{skillName}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                      
                      {/* Areas for Development */}
                      <div>
                        <h4 className="flex items-center gap-2 text-amber-700 font-semibold mb-3">
                          <Target className="h-5 w-5" />
                          Development Areas
                        </h4>
                        
                        <ul className="space-y-2">
                          {Object.entries(formData.skills)
                            .filter(([_, level]) => level <= 2)
                            .slice(0, 3)
                            .map(([skillName], index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Target className="h-4 w-4 text-amber-600 mt-0.5" />
                                <span className="text-gray-800">{skillName}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Employment Barriers */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-gray-900 font-semibold mb-3">Your Employment Barriers</h4>
                      <p className="text-sm text-gray-600 mb-3">Select any barriers that may affect your employment journey:</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {commonBarriers.map((barrier, index) => (
                          <button
                            key={index}
                            onClick={() => handleBarrierToggle(barrier)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                              barriersTags.includes(barrier)
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                          >
                            {barrier}
                            {barriersTags.includes(barrier) && <CheckCircle2 className="inline-block ml-1 h-3 w-3" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-3 justify-center">
                    <button
                      onClick={() => {
                        setShowSkillsAssessment(false)
                        document.getElementById('pathfinder')?.scrollIntoView({ behavior: 'smooth' })
                        setActiveSection('pathfinder')
                      }}
                      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                      Explore Career Matches
                      <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowSkillsAssessment(false)
                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                        setActiveSection('apply')
                      }}
                      className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors"
                    >
                      Apply for Support Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default EmploymentSupportPage 