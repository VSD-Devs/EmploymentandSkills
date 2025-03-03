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
  CheckCircle2,
  X,
  MessageSquare,
  MapPin,
  Star,
  Heart,
  ArrowRight,
  Clipboard,
  Monitor,
  FileCheck,
  Calendar
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

// Import types and constants
import { FormData } from './types'
import { 
  IMAGES, 
  SKILL_CATEGORIES, 
  CAREER_PATHS, 
  SUCCESS_STORIES,
  QUESTIONS,
  FORM_STEPS,
  COMMON_BARRIERS
} from './constants'

import ActionButton from '../../components/ui/ActionButton'
import SectionHeading from '../../components/ui/SectionHeading'
import PathwayExplorer from './components/PathwayExplorer'

const EmploymentSupportPage = () => {
  // Core state
  const [activeSection, setActiveSection] = useState('overview')
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const [showSkillsAssessment, setShowSkillsAssessment] = useState(false)
  
  // Skills assessment state
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0)
  const [skillsCompleted, setSkillsCompleted] = useState(false)
  
  // Eligibility checker state
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  
  // Career pathfinder state
  const [selectedCareerPath, setSelectedCareerPath] = useState<string | null>(null)
  
  // Success stories state
  const [activeStory, setActiveStory] = useState(0)
  const storyIntervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Form state
  const [formStep, setFormStep] = useState(1)
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
  const [barriersTags, setBarriersTags] = useState<string[]>([])
  const [showSubmitSuccess, setShowSubmitSuccess] = useState(false)
  
  // Mobile responsiveness
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Handle eligibility checker answers
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  // Determine eligibility based on answers
  const isEligible = () => {
    return !answers.some((answer, index) => 
      QUESTIONS[index].disqualifyIf !== null && 
      answer === QUESTIONS[index].disqualifyIf
    )
  }

  // Suggest a programme based on eligibility answers
  const suggestedProgramme = () => {
    const situation = answers[2] // Current situation answer
    
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
        ...prev.skills,
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
  }

  // Form navigation
  const handleNextStep = () => {
    const currentFields = FORM_STEPS[formStep - 1].fields
    const hasErrors = currentFields.some(field => !formData[field as keyof typeof formData])
    
    if (!hasErrors) {
      setFormStep(prev => Math.min(prev + 1, FORM_STEPS.length))
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
      console.log('Form submitted with data:', formData)
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

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

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

  // Store barriers in form data when they change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      barriers: barriersTags
    }))
  }, [barriersTags])

  // Handler for programme selection in the Pathway Explorer
  const handlePathwayProgrammeSelect = (programme: string) => {
    setFormData(prev => ({
      ...prev,
      preferredProgramme: programme
    }))
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection('apply')
  }

  return (
    <main 
      className="min-h-screen bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Adult Skills', href: '/adult-skills' },
            { label: 'Employment Support', href: '/employment-support' },
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="relative bg-gradient-to-br from-blue-800 to-indigo-900 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-sm border border-blue-500/30">
                <Sparkles className="h-4 w-4 text-blue-300" />
                <span className="text-xs md:text-sm font-medium text-blue-100">Personalised Support</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
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
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-900 font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
                  aria-label="Start skills assessment"
                >
                  Start Skills Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setShowEligibilityChecker(true)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-700/50 text-white font-medium backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700/70 transition-colors"
                  aria-label="Check your eligibility"
                >
                  Check Eligibility
                  <CheckCircle2 className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Replaced features card with image */}
            <div className="md:w-1/2 relative mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-blue-500/20 blur-3xl"></div>
                <Image 
                  src="/images/enterprise-advisor.webp"
                  alt="Smiling diverse colleagues working together in office"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
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
                  className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
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

      {/* Mobile Navigation Bar */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between py-2">
            {[
              { id: 'overview', icon: Users, label: 'Overview' },
              { id: 'assessment', icon: Target, label: 'Assessment' },
              { id: 'pathfinder', icon: MapPin, label: 'Careers' },
              { id: 'apply', icon: CheckCircle2, label: 'Apply' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center px-3 py-1.5 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  setActiveSection(item.id)
                }}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Assessment Section */}
      <section id="assessment" className="relative bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Section Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-2">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-800">Self-Assessment Tool</span>
            </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Discover Your Employment Strengths</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our skills assessment helps you identify your talents, address your challenges, and find the right support tailored to your unique situation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Star, title: "Identify Your Strengths", description: "Understand what skills you already have" },
                  { icon: MessageSquare, title: "Uncover Opportunities", description: "See which careers match your abilities" },
                  { icon: CheckCircle2, title: "Find Skill Gaps", description: "Learn what skills to develop" },
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
            <div className="md:w-1/2 relative mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 z-20">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl font-bold text-blue-600">9</div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-gray-900">Key Skills Assessed</h3>
                      <p className="text-xs text-gray-600">Takes approximately 5-10 minutes to complete</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image 
                    src="/images/skills-bank-learning.jpg" 
                    alt="Person completing a skills assessment" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathfinder Section */}
      <section id="pathfinder" className="relative bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <MapPin className="h-4 w-4 text-blue-600" />
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
                className={`group relative rounded-xl overflow-hidden border ${
                  selectedCareerPath === path.id 
                    ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-2' 
                    : 'border-gray-200 hover:border-blue-200'
                } transition-all duration-300 bg-white shadow-sm hover:shadow-md`}
              >
                {/* Path Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  {/* Replace with actual image when available */}
                  <Image
                    src={path.image || '/images/employment-support/career-placeholder.jpg'}
                    alt={path.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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

      {/* Programmes Section */}
      <section id="programmes" className={`py-16 md:py-24 ${activeSection === 'programmes' ? 'bg-blue-50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Support Programmes"
            subtitle="Tailored Support for Your Needs"
            description="Our programmes are designed to provide the right support at the right time, helping you overcome barriers to employment and build a sustainable career."
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: 'Connect to Work Programme',
                description: 'Specialised support for people with health conditions or complex barriers to employment, focused on finding sustainable work.',
                image: IMAGES.connectToWork || '/images/employment-support/connect-placeholder.jpg',
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
                image: IMAGES.workWell || '/images/employment-support/workwell-placeholder.jpg',
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
                image: IMAGES.integrated || '/images/employment-support/integrated-placeholder.jpg',
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
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  {/* Replace with actual image when available */}
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
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
      
      {/* Pathways Section */}
      <section id="pathways" className={`py-16 md:py-24 ${activeSection === 'pathways' ? 'bg-blue-50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Career Pathways"
            subtitle="Discover Your Potential Career Journey"
            description="Explore various career paths that align with your skills and interests. Each pathway includes the key skills needed, example job roles, and our recommended support programmes."
            className="mb-12"
          />
          
          <PathwayExplorer onProgrammeSelect={handlePathwayProgrammeSelect} />
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Not sure which pathway is right for you? Our skills assessment can help identify your strengths and match you with suitable career options.
            </p>
            <button
              onClick={() => setShowSkillsAssessment(true)}
              className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm md:text-base font-medium shadow-sm"
            >
              Take Skills Assessment
              <Target className="ml-2 h-5 w-5" />
            </button>
      </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section id="success-stories" className={`py-16 md:py-24 ${activeSection === 'success-stories' ? 'bg-blue-50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Real Stories, Real Results"
            subtitle="Success Stories"
            description="See how our support has helped people just like you overcome barriers and find meaningful employment that works for their unique situation."
            className="mb-12"
          />
          
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeStory * 100}%)` }}
              >
                {SUCCESS_STORIES.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image column */}
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={story.image}
                            alt={story.name}
                            fill
                            className="object-cover"
                          />
            </div>
                        
                        {/* Content column */}
                        <div className="p-6 md:p-8">
                          <div className="mb-4 inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            {story.outcome}
          </div>
          
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{story.name}</h3>
                          
                          <div className="space-y-4 mb-6">
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">The Challenge</h4>
                              <p className="text-gray-700">{story.challenge}</p>
                  </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Our Solution</h4>
                              <p className="text-gray-700">{story.solution}</p>
              </div>
            </div>

                          <blockquote className="relative border-l-4 border-blue-600 pl-4 italic text-gray-700">
                            "{story.quote}"
                          </blockquote>
                  </div>
              </div>
            </div>
          </div>
                ))}
        </div>
      </div>

            {/* Navigation controls */}
            <div className="mt-8 flex justify-between items-center">
              <button 
                onClick={() => setActiveStory(prev => Math.max(prev - 1, 0))}
                disabled={activeStory === 0}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Indicators for mobile */}
              <div className="flex space-x-2">
                {SUCCESS_STORIES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      activeStory === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
        </div>

              <button 
                onClick={() => setActiveStory(prev => Math.min(prev + 1, SUCCESS_STORIES.length - 1))}
                disabled={activeStory === SUCCESS_STORIES.length - 1}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className={`py-16 md:py-24 ${activeSection === 'apply' ? 'bg-blue-50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Apply for Support"
            subtitle="Get Started Today"
            description="Complete the application form below to begin your journey towards meaningful employment. Our team will review your application and get in touch within 2 working days."
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            {showSubmitSuccess ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to our employment support service. We've received your application and a member of our team will be in touch within 2 working days to discuss next steps.
                </p>
                  <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
            </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Form Steps Indicator */}
                <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    {FORM_STEPS.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            formStep > index + 1
                              ? 'bg-blue-600 text-white'
                              : formStep === index + 1
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {formStep > index + 1 ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
                        </div>
                        <div className={`hidden sm:block ml-3 ${formStep >= index + 1 ? 'text-gray-900' : 'text-gray-400'}`}>
                          <div className="text-sm font-medium">{step.title}</div>
                        </div>
                        {index < FORM_STEPS.length - 1 && (
                          <div className={`hidden sm:block w-12 h-0.5 mx-2 ${formStep > index + 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  {formStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                      <p className="text-gray-600 text-sm">This information helps us create your personalised support plan.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`block w-full rounded-md border ${formErrors.fullName ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                            placeholder="Your full name"
                            required
                          />
                          {formErrors.fullName && <p className="text-sm text-red-600">{formErrors.fullName}</p>}
            </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`block w-full rounded-md border ${formErrors.email ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                            placeholder="your.email@example.com"
                            required
                          />
                          {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}
          </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                          onChange={handleInputChange}
                            className={`block w-full rounded-md border ${formErrors.phone ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                            placeholder="Your phone number"
                          required
                          />
                          {formErrors.phone && <p className="text-sm text-red-600">{formErrors.phone}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                          onChange={handleInputChange}
                            className={`block w-full rounded-md border ${formErrors.dateOfBirth ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                          required
                        />
                          {formErrors.dateOfBirth && <p className="text-sm text-red-600">{formErrors.dateOfBirth}</p>}
                    </div>
                  </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`block w-full rounded-md border ${formErrors.address ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                          placeholder="Your street address"
                          required
                        />
                        {formErrors.address && <p className="text-sm text-red-600">{formErrors.address}</p>}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City/Town</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`block w-full rounded-md border ${formErrors.city ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                            placeholder="Your city or town"
                            required
                          />
                          {formErrors.city && <p className="text-sm text-red-600">{formErrors.city}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postcode</label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            className={`block w-full rounded-md border ${formErrors.postcode ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                            placeholder="Postcode"
                            required
                          />
                          {formErrors.postcode && <p className="text-sm text-red-600">{formErrors.postcode}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                {/* Form Navigation */}
                  <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
                    {formStep > 1 ? (
                    <button
                        type="button"
                      onClick={handlePrevStep}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                      Previous Step
                    </button>
                    ) : (
                      <div></div>
                  )}
                    
                    {formStep < FORM_STEPS.length ? (
                    <button
                        type="button"
                      onClick={handleNextStep}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Next Step
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
                  
                  {formErrors.submit && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-sm text-red-600">{formErrors.submit}</p>
              </div>
                  )}
          </form>
        </div>
            )}
            
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-900 mb-1">Need help with your application?</h3>
                  <p className="text-sm text-blue-800 mb-2">
                    Our team is available Monday to Friday, 9am to 5pm to assist you with your application.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="tel:+441234567890" 
                      className="inline-flex items-center text-sm text-blue-700 hover:text-blue-800"
                    >
                      <Phone className="h-4 w-4 mr-2" /> 01234 567 890
                    </a>
                    <a 
                      href="mailto:support@example.com" 
                      className="inline-flex items-center text-sm text-blue-700 hover:text-blue-800"
                    >
                      <Mail className="h-4 w-4 mr-2" /> support@example.com
                    </a>
          </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Assessment Modal */}
      {showSkillsAssessment && (
        <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setShowSkillsAssessment(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                aria-label="Close assessment"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>

              <div className="p-6 md:p-8">
                {!skillsCompleted ? (
                  <>
                    {/* Header */}
                    <div className="mb-6 md:mb-8">
                      <div className="flex items-center justify-between mb-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200">
                          <Target className="h-4 w-4 text-blue-600" />
                          <span className="text-xs font-medium text-blue-800">Skills Assessment</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Step {currentSkillCategory + 1} of {SKILL_CATEGORIES.length}
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {SKILL_CATEGORIES[currentSkillCategory].name}
                      </h2>
                      <p className="text-gray-600">
                        {SKILL_CATEGORIES[currentSkillCategory].description}
                      </p>
                    </div>

                    {/* Skill Rating Area */}
                    <div className="space-y-8">
                      {SKILL_CATEGORIES[currentSkillCategory].skills.map((skill, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                              <h3 className="font-medium text-gray-900 mb-1">{skill.name}</h3>
                              <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                            
                            <div className="flex items-center gap-2">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <button
                                  key={level}
                                  onClick={() => handleSkillLevelChange(skill.name, level)}
                                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                    formData.skills[skill.name] === level
                                      ? 'bg-blue-600 text-white shadow-md'
                                      : formData.skills[skill.name] && formData.skills[skill.name] > level
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                  }`}
                                  aria-label={`Rate ${skill.name} as ${level}`}
                                >
                                  {level}
                                </button>
                              ))}
                  </div>
                </div>
                          
                          {/* Skill level labels */}
                          <div className="flex justify-between mt-2 text-xs text-gray-500 px-1">
                            <span>Beginner</span>
                            <span>Advanced</span>
                </div>
              </div>
            ))}
          </div>
                    
                    {/* Navigation buttons */}
                    <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between">
                      {currentSkillCategory > 0 ? (
                        <button
                          onClick={handlePrevSkillCategory}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </button>
                      ) : (
                        <div></div>
                      )}
                      
                      <button
                        onClick={handleNextSkillCategory}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        {currentSkillCategory < SKILL_CATEGORIES.length - 1 ? (
                          <>Next <ChevronRight className="ml-2 h-4 w-4" /></>
                        ) : (
                          <>Complete Assessment <CheckCircle2 className="ml-2 h-4 w-4" /></>
                        )}
                      </button>
        </div>
                  </>
                ) : (
                  // Results screen
                  <div className="pb-6 overflow-y-auto max-h-[80vh] md:max-h-none">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">Your Skills Assessment Results</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        Based on your responses, we've identified your key strengths and areas for development, along with recommended programmes and career paths.
                      </p>
      </div>

                    {/* Results Tabs */}
                    <div className="mb-6">
                      <div className="border-b border-gray-200 overflow-x-auto pb-1">
                        <nav className="flex -mb-px space-x-4 md:space-x-8 min-w-max" aria-label="Tabs">
                          {['Strengths', 'Recommended Programmes', 'Career Paths'].map((tab, i) => (
            <button
                              key={i}
                              className={`py-2 md:py-3 px-1 border-b-2 font-medium text-xs md:text-sm ${
                                i === 0 
                                  ? 'border-blue-600 text-blue-600' 
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                              }`}
                            >
                              {tab}
            </button>
                          ))}
                        </nav>
                      </div>
                    </div>
                    
                    {/* Strengths Overview */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Key Strengths</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(formData.skills)
                          .filter(([_, level]) => level >= 4)
                          .slice(0, 4)
                          .map(([skill, level], index) => (
                            <div key={index} className="bg-blue-50 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3">
                              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-sm md:text-base text-gray-900">{skill}</h4>
                                <div className="flex items-center mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1 ${
                                        i < (level as number) ? 'bg-blue-600' : 'bg-gray-300'
                                      }`} 
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                </div>

                      <div className="mt-4 text-sm text-gray-600">
                        <p className="text-xs md:text-sm">
                          You've demonstrated strong skills in the areas above. These are valuable for various career paths and employers in South Yorkshire.
                        </p>
                      </div>
                    </div>
                    
                    {/* Recommended Programmes */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Programmes</h3>
                      
                      <div className="space-y-4">
                        {/* Primary Recommendation */}
                        <div className="border border-blue-200 bg-blue-50 rounded-xl p-4 md:p-5">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 mb-3">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                <span className="text-xs font-medium text-blue-800">Best Match</span>
                              </div>
                              <h4 className="text-xl font-semibold text-gray-900 mb-2">Connect to Work Programme</h4>
                              <p className="text-gray-700 mb-3">
                                This programme offers specialised support focusing on your individual needs and barriers to employment. You'll receive one-to-one support from an employment specialist.
                              </p>
                              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>Personalised career planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>Skills development opportunities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>In-work support for up to 6 months</span>
                                </li>
                              </ul>
                            </div>
                            <div className="md:w-1/4 flex flex-col justify-center">
                    <button
                                onClick={() => {
                                  setFormData(prev => ({
                                    ...prev,
                                    preferredProgramme: 'Connect to Work Programme'
                                  }))
                                  setShowSkillsAssessment(false)
                                  document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                                  setActiveSection('apply')
                                  
                                  // Set form step to ensure user starts at the beginning
                                  setFormStep(1)
                                  
                                  // Focus on the first form field after scrolling
                                  setTimeout(() => {
                                    const fullNameField = document.getElementById('fullName')
                                    if (fullNameField instanceof HTMLInputElement) {
                                      fullNameField.focus()
                                    }
                                  }, 500)
                                }}
                                className="w-full py-2.5 px-4 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
                              >
                                Apply Now
                    </button>
                              <Link 
                                href="#programmes" 
                                className="mt-2 text-center text-sm text-blue-600 hover:text-blue-800"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setShowSkillsAssessment(false)
                                  document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })
                                  setActiveSection('programmes')
                                }}
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        {/* Secondary Recommendation */}
                        <div className="border border-gray-200 rounded-xl p-4 md:p-5">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">WorkWell Service</h4>
                              <p className="text-gray-700 mb-3">
                                This service provides support for health-related barriers to employment, including guidance on workplace adjustments and condition management.
                              </p>
                              <Link 
                                href="#programmes" 
                                className="text-sm text-blue-600 hover:text-blue-800"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setShowSkillsAssessment(false)
                                  document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })
                                  setActiveSection('programmes')
                                }}
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Recommended Career Paths */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Career Paths</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {CAREER_PATHS.slice(0, 2).map((path, index) => (
                          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <div className="flex flex-col md:flex-row">
                              <div className="relative h-36 md:w-1/3">
                                <Image
                                  src={path.image || '/images/employment-support/career-placeholder.jpg'}
                                  alt={path.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                                <div className="absolute bottom-3 left-4 right-4 md:hidden">
                                  <h4 className="text-lg font-bold text-white">{path.title}</h4>
                                </div>
                              </div>
                              
                              <div className="p-4 md:w-2/3">
                                <h4 className="text-lg font-bold text-gray-900 hidden md:block mb-2">{path.title}</h4>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {path.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <span 
                                      key={skillIndex} 
                                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                                  <button
                                    onClick={() => {
                                      setSelectedCareerPath(path.id)
                                      setShowSkillsAssessment(false)
                                      document.getElementById('pathfinder')?.scrollIntoView({ behavior: 'smooth' })
                                      setActiveSection('pathfinder')
                                      
                                      // Find the career path with matching ID and set form data
                                      const selectedPath = CAREER_PATHS.find(cp => cp.id === path.id)
                                      if (selectedPath) {
                                        setFormData(prev => ({
                                          ...prev,
                                          employmentGoals: `Interested in ${selectedPath.title}`,
                                          preferredProgramme: selectedPath.programmes[0] || ''
                                        }))
                                      }
                                    }}
                                    className="text-sm text-blue-600 hover:text-blue-800"
                                  >
                                    Explore This Path
                                  </button>
                                  
                                  <Link 
                                    href={`/pathways/${path.id.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-xs md:text-sm text-gray-600 hover:text-gray-800"
                                  >
                                    View on Pathways
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 text-center">
                        <Link 
                          href="/pathways" 
                          className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium"
                        >
                          Explore All Career Pathways
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                      <button
                        onClick={() => {
                          setCurrentSkillCategory(0)
                          setSkillsCompleted(false)
                        }}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Retake Assessment
                      </button>
                      
                      <div className="flex gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => setShowSkillsAssessment(false)}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
                        >
                          Close Results
                        </button>
                        
                        <button
                          onClick={() => {
                            setShowSkillsAssessment(false)
                            document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                            setActiveSection('apply')
                            setFormStep(1)
                          }}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 rounded-lg border border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 text-sm font-medium"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Eligibility Checker Modal - to be implemented next */}
      {showEligibilityChecker && (
        <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => resetChecker()}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                aria-label="Close checker"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>

              <div className="p-6 md:p-8">
                {!showResult ? (
                  <>
                    {/* Header */}
                    <div className="mb-6 md:mb-8">
                      <div className="flex items-center justify-between mb-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          <span className="text-xs font-medium text-blue-800">Eligibility Checker</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Question {currentQuestion + 1} of {QUESTIONS.length}
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {QUESTIONS[currentQuestion].question}
                      </h2>
                      <p className="text-gray-600">
                        Please select the option that best describes your situation.
                      </p>
                    </div>

                    {/* Answer Options */}
                    <div className="space-y-3">
                      {QUESTIONS[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(option)}
                          className="w-full flex items-center p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors text-left"
                        >
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-800">{option}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  // Results screen
                  <div className="text-center">
                {isEligible() ? (
                  <>
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">You're Eligible!</h2>
                        <p className="text-gray-600 mb-6">
                          Based on your answers, you're eligible for support through our employment programmes.
                        </p>
                        
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6 text-left">
                          <h3 className="text-lg font-semibold text-blue-900 mb-2">Recommended Programme</h3>
                          <p className="text-gray-700 mb-4">
                            We suggest the <span className="font-semibold">{suggestedProgramme()}</span> based on your current situation.
                          </p>
                          <button
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                preferredProgramme: suggestedProgramme()
                              }))
                              resetChecker()
                              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                              setActiveSection('apply')
                            }}
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
                      >
                        Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                      <button
                            onClick={() => {
                              resetChecker()
                              document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })
                              setActiveSection('programmes')
                            }}
                            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium"
                          >
                            View All Programmes
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </button>
                          
                          <button
                            onClick={() => {
                              setShowEligibilityChecker(false)
                              setShowSkillsAssessment(true)
                            }}
                            className="inline-flex items-center px-4 py-2 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 text-sm font-medium"
                          >
                            Take Skills Assessment
                            <Target className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                        <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                          <MessageSquare className="h-8 w-8 text-orange-600" />
                    </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">We Need More Information</h2>
                        <p className="text-gray-600 mb-6">
                          Based on your answers, we'd like to have a conversation to better understand your situation and how we might be able to help.
                        </p>
                        
                        <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6 text-left">
                          <h3 className="text-lg font-semibold text-orange-900 mb-2">Get Personalised Advice</h3>
                          <p className="text-gray-700 mb-4">
                            Our team can provide personalised guidance on available support options.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 text-sm">
                            <a 
                              href="tel:+441234567890" 
                              className="inline-flex items-center text-orange-700 hover:text-orange-800"
                            >
                              <Phone className="h-4 w-4 mr-2" /> 01234 567 890
                            </a>
                            <a 
                              href="mailto:support@example.com" 
                              className="inline-flex items-center text-orange-700 hover:text-orange-800"
                            >
                              <Mail className="h-4 w-4 mr-2" /> support@example.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <button
                            onClick={() => {
                              resetChecker()
                              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                              setActiveSection('apply')
                            }}
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
                          >
                            Apply Anyway
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </button>
                          
                      <button
                        onClick={resetChecker}
                            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium"
                      >
                            Restart Checker
                            <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default EmploymentSupportPage 