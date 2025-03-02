'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Building2, 
  GraduationCap, 
  BookOpen, 
  Users, 
  ArrowRight, 
  Building, 
  Briefcase, 
  ChevronRight, 
  ChevronLeft,
  Clock, 
  Trophy, 
  Target, 
  CheckCircle, 
  CheckCircle2,
  XCircle, 
  X,
  PieChart, 
  BarChart4, 
  BadgeHelp, 
  Lightbulb, 
  PenTool, 
  Wallet, 
  GanttChartSquare, 
  Banknote, 
  Calendar, 
  CheckSquare, 
  Handshake, 
  Star, 
  Quote, 
  TrendingUp, 
  ChevronDown, 
  Mail, 
  Phone, 
  MessageSquare,
  MapPin,
  Sparkles
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ActionButton from '@/components/ui/ActionButton'
import SectionHeading from '@/components/ui/SectionHeading'

type ColorType = 'teal' | 'indigo' | 'purple' | 'blue' | 'slate';

interface RecruitmentProgramme {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  eligibility: string[];
  funding: {
    available: boolean;
    details: string;
  };
  timeframe: string;
  color: ColorType;
  link: string;
}

const recruitmentProgrammes: RecruitmentProgramme[] = [
  {
    id: 'apprenticeships',
    title: 'Apprenticeships',
    tagline: 'Develop your workforce through on-the-job training',
    description: 'Build your future workforce by nurturing local talent. Apprenticeships combine work with study, allowing your business to grow its own skilled staff.',
    icon: <GraduationCap className="w-6 h-6" />,
    benefits: [
      'Shape young careers from the start',
      'Build skills tailored to your business needs',
      'Improve staff retention and loyalty',
      'Enhance diversity in your workplace',
      'Access fresh perspectives and ideas'
    ],
    eligibility: [
      'Any size business can hire apprentices',
      'Must provide genuine job with training',
      'Apprentice must work at least 30 hours per week',
      'Training must last at least 12 months'
    ],
    funding: {
      available: false,
      details: 'Guidance on training providers and qualification standards'
    },
    timeframe: '12 months to 4 years, depending on apprenticeship level',
    color: 'teal',
    link: '/apprenticeships'
  },
  {
    id: 'skills-bootcamps',
    title: 'Skills Bootcamp Graduates',
    tagline: 'Ready-trained talent for immediate impact',
    description: 'Connect with motivated individuals who have completed intensive training in high-demand sectors. Skills Bootcamp graduates have industry-relevant qualifications and are job-ready.',
    icon: <BookOpen className="w-6 h-6" />,
    benefits: [
      'Access diverse, job-ready candidates',
      'No recruitment fees or lengthy processes',
      'Graduates have up-to-date, in-demand skills',
      'Training tailored to industry requirements',
      'Support for onboarding and integration'
    ],
    eligibility: [
      'Open to businesses of all sizes',
      'Must provide genuine employment opportunities',
      'Roles should match graduate skill areas',
      'Commitment to fair recruitment practices'
    ],
    funding: {
      available: false,
      details: 'Free recruitment support and candidate screening provided'
    },
    timeframe: 'Immediate placement following bootcamp completion',
    color: 'indigo',
    link: '/bootcamps'
  },
  {
    id: 't-levels',
    title: 'T Levels',
    tagline: 'Industry placements for young talent',
    description: 'Host industry placements for 16-19 year olds studying T Levels, the new technical qualification equivalent to 3 A Levels. Students spend at least 45 days in the workplace as part of their course.',
    icon: <Clock className="w-6 h-6" />,
    benefits: [
      'Build a talent pipeline for junior roles',
      'Develop staff mentoring skills',
      'Fresh perspectives from young learners',
      'No cost to your business',
      'Flexible placement scheduling'
    ],
    eligibility: [
      'Must provide meaningful work experience',
      'Need capacity to supervise young people',
      'Placement must relate to student\'s course',
      'Minimum of 315 hours/45 days placement'
    ],
    funding: {
      available: false,
      details: 'Administrative support for setting up placements'
    },
    timeframe: '45 days minimum, can be arranged flexibly',
    color: 'purple',
    link: '/t-levels'
  },
  {
    id: 'connect-to-work',
    title: 'Connect to Work',
    tagline: 'Helping disadvantaged groups into employment',
    description: 'Support individuals from disadvantaged backgrounds into employment. The Connect to Work programme offers tailored support for both candidates and employers to ensure successful long-term placements.',
    icon: <Handshake className="w-6 h-6" />,
    benefits: [
      'Access motivated, pre-screened candidates',
      'Ongoing support for both employer and employee',
      'Increase workplace diversity and inclusion',
      'Contribute to community development',
      'Improve corporate social responsibility'
    ],
    eligibility: [
      'Open to employers of all sizes',
      'Must provide sustainable employment',
      'Commitment to inclusive workplace practices',
      'Willingness to provide reasonable adjustments'
    ],
    funding: {
      available: false,
      details: 'Comprehensive candidate matching and integration support'
    },
    timeframe: 'Ongoing programme with immediate placement opportunities',
    color: 'blue',
    link: '/connect-to-work'
  },
  {
    id: 'work-well',
    title: 'Work Well Programme',
    tagline: 'Supporting employee health and wellbeing',
    description: 'The Work Well Programme helps businesses support existing employees with health conditions to remain in or return to work, creating healthier workplace environments and improving staff wellbeing.',
    icon: <CheckSquare className="w-6 h-6" />,
    benefits: [
      'Signposting employees to WorkWell resources',
      'Support for employees applying to the programme',
      'Access to employee action plans',
      'Reduced absenteeism and improved retention',
      'Creating healthier workplace environments'
    ],
    eligibility: [
      'Yorkshire-based businesses of any size',
      'Existing employees with health conditions',
      'Commitment to workplace health and wellbeing',
      'Willingness to implement reasonable adjustments'
    ],
    funding: {
      available: false,
      details: 'Advisory services on health-focused workplace support'
    },
    timeframe: 'Continuous support for existing employees',
    color: 'slate',
    link: '/work-well'
  }
];

// Enhanced success stories with more detailed metrics
interface BusinessImpact {
  metric: string;
  value: string;
  icon: React.ReactNode;
}

interface SuccessStory {
  id: string;
  programme: string;
  programmePath: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  image: string;
  logo: string;
  businessSize: string;
  industry: string;
  impact: BusinessImpact[];
  challenge: string;
  solution: string;
}

const successStories: SuccessStory[] = [
  {
    id: 'tech-solutions',
    programme: 'Apprenticeships',
    programmePath: '/apprenticeships',
    quote: "The support we received in setting up our apprenticeship programme was invaluable. We've now hired 5 apprentices who are making a real impact on our business growth and innovation.",
    author: "James Wilson",
    role: "Operations Director",
    company: "Yorkshire Tech Solutions",
    location: "Sheffield",
    image: "/images/success-story-1.jpg",
    logo: "/images/logos/yorkshire-tech.png",
    businessSize: "SME (25-49 employees)",
    industry: "Information Technology",
    impact: [
      { 
        metric: "Staff retention increase", 
        value: "32%", 
        icon: <Users className="w-5 h-5" />
      },
      { 
        metric: "Cost saving on recruitment", 
        value: "£45,000", 
        icon: <Wallet className="w-5 h-5" />
      },
      { 
        metric: "New skills introduced", 
        value: "6", 
        icon: <GraduationCap className="w-5 h-5" />
      }
    ],
    challenge: "Struggling to find skilled developers with knowledge of our specific tech stack, while facing high recruitment agency fees and long time-to-hire periods.",
    solution: "Partnered with local colleges to develop a tailored apprenticeship programme focusing on our required skills. Created a mentoring structure to support apprentices."
  },
  {
    id: 'sheffield-digital',
    programme: 'Skills Bootcamp Graduates',
    programmePath: '/bootcamps',
    quote: "Skills bootcamp graduates brought exactly the digital marketing expertise we needed. The recruitment process was smooth, and the pre-screening ensured candidates matched our requirements perfectly.",
    author: "Sarah Ahmed",
    role: "HR Manager",
    company: "Sheffield Digital",
    location: "Sheffield",
    image: "/images/success-story-2.jpg",
    logo: "/images/logos/sheffield-digital.png",
    businessSize: "SME (10-24 employees)",
    industry: "Digital Marketing",
    impact: [
      { 
        metric: "Time-to-hire reduced", 
        value: "65%", 
        icon: <Clock className="w-5 h-5" />
      },
      { 
        metric: "New client acquisition", 
        value: "+12", 
        icon: <Briefcase className="w-5 h-5" />
      },
      { 
        metric: "ROI on hiring process", 
        value: "280%", 
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    challenge: "Needed to quickly scale our digital marketing team to handle new clients, but struggled to find candidates with up-to-date skills in rapidly evolving digital channels.",
    solution: "Recruited three graduates from digital marketing skills bootcamps who brought fresh knowledge of emerging platforms and analytics tools."
  },
  {
    id: 'barnsley-manufacturing',
    programme: 'T Levels',
    programmePath: '/t-levels',
    quote: "T Level industry placements have transformed how we develop junior talent. These young people bring energy, fresh perspectives and digital literacy that has improved our processes.",
    author: "Richard Brooks",
    role: "Production Manager",
    company: "Barnsley Manufacturing Ltd",
    location: "Barnsley",
    image: "/images/success-story-4.jpg",
    logo: "/images/logos/barnsley-manufacturing.png",
    businessSize: "Medium (50-99 employees)",
    industry: "Manufacturing",
    impact: [
      { 
        metric: "Process efficiency improved", 
        value: "18%", 
        icon: <TrendingUp className="w-5 h-5" />
      },
      { 
        metric: "New permanent hires", 
        value: "3", 
        icon: <Users className="w-5 h-5" />
      },
      { 
        metric: "Staff development hours", 
        value: "120+", 
        icon: <GraduationCap className="w-5 h-5" />
      }
    ],
    challenge: "An ageing workforce with traditional skill sets, struggling to modernise processes and attract younger talent into the manufacturing sector.",
    solution: "Hosted T Level students for industrial placements, creating a pipeline of young talent with technical education and practical experience."
  },
  {
    id: 'yorkshire-innovators',
    programme: 'Connect to Work',
    programmePath: '/connect-to-work',
    quote: "Connect to Work helped us tap into a diverse talent pool we hadn't considered before. The ongoing support for both us and the employees has led to excellent retention rates.",
    author: "Michael Chen",
    role: "Talent Acquisition Lead",
    company: "Yorkshire Innovators",
    location: "Doncaster",
    image: "/images/success-story-3.jpg",
    logo: "/images/logos/yorkshire-innovators.png",
    businessSize: "Medium (100-249 employees)",
    industry: "Research & Development",
    impact: [
      { 
        metric: "Workforce diversity increased", 
        value: "28%", 
        icon: <Users className="w-5 h-5" />
      },
      { 
        metric: "Retention rate", 
        value: "92%", 
        icon: <Target className="w-5 h-5" />
      },
      { 
        metric: "Innovation increase", 
        value: "35%", 
        icon: <Lightbulb className="w-5 h-5" />
      }
    ],
    challenge: "Limited diversity in our R&D team was affecting our product innovation. Traditional recruitment channels weren't helping us reach diverse candidates.",
    solution: "Partnered with Connect to Work to reach candidates from different backgrounds, with additional support for workplace integration and ongoing mentoring."
  }
];

const colorClasses: Record<ColorType, {
  card: string;
  icon: string;
  button: string;
  tag: string;
  light: string;
  gradient: string;
}> = {
  teal: {
    card: 'bg-teal-50 border-teal-100',
    icon: 'bg-teal-100 text-teal-700',
    button: 'text-teal-700 bg-teal-50 hover:bg-teal-100',
    tag: 'bg-teal-100/50 text-teal-800',
    light: 'text-teal-700',
    gradient: 'from-teal-600 to-teal-800'
  },
  indigo: {
    card: 'bg-indigo-50 border-indigo-100',
    icon: 'bg-indigo-100 text-indigo-700',
    button: 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100',
    tag: 'bg-indigo-100/50 text-indigo-800',
    light: 'text-indigo-700',
    gradient: 'from-indigo-600 to-indigo-800'
  },
  purple: {
    card: 'bg-purple-50 border-purple-100',
    icon: 'bg-purple-100 text-purple-700',
    button: 'text-purple-700 bg-purple-50 hover:bg-purple-100',
    tag: 'bg-purple-100/50 text-purple-800',
    light: 'text-purple-700',
    gradient: 'from-purple-600 to-purple-800'
  },
  blue: {
    card: 'bg-blue-50 border-blue-100',
    icon: 'bg-blue-100 text-blue-700',
    button: 'text-blue-700 bg-blue-50 hover:bg-blue-100',
    tag: 'bg-blue-100/50 text-blue-800',
    light: 'text-blue-700',
    gradient: 'from-blue-600 to-blue-800'
  },
  slate: {
    card: 'bg-slate-50 border-slate-100',
    icon: 'bg-slate-100 text-slate-700',
    button: 'text-slate-700 bg-slate-50 hover:bg-slate-100',
    tag: 'bg-slate-100/50 text-slate-800',
    light: 'text-slate-700',
    gradient: 'from-slate-600 to-slate-800'
  }
}

export default function RecruitmentSupportPage() {
  // Core state
  const [activeSection, setActiveSection] = useState('overview')
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const [showRecruitmentAssessment, setShowRecruitmentAssessment] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [activeProgramme, setActiveProgramme] = useState<string | null>(null)
  const [activeStory, setActiveStory] = useState<string>(successStories[0].id)
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formStep, setFormStep] = useState(1)
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    businessSize: '',
    industry: '',
    recruitmentNeed: '',
    message: '',
    consent: false
  })

  // Handler for section navigation
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    
    // Update URL with the section
    const url = new URL(window.location.href)
    url.hash = section
    window.history.pushState({}, '', url.toString())
  }

  // Handler for answer selection in the assessment
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    setCurrentStep(currentStep + 1)
    
    // If we've reached the end of the questions, show the result
    if (currentStep === assessmentQuestions.length - 1) {
      setShowResult(true)
    }
  }

  // Handler for programme card clicks
  const handleProgrammeClick = (id: string) => {
    setActiveProgramme(activeProgramme === id ? null : id)
  }

  // Handler for success story navigation
  const handleStoryChange = (id: string) => {
    setActiveStory(id)
  }
  
  // Reset the eligibility checker
  const resetChecker = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
    setShowEligibilityChecker(false)
  }
  
  // Form handling functions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    setFormData({
      ...formData,
      [name]: inputValue
    })
  }
  
  const handleNextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1)
    }
  }
  
  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1)
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsFormSubmitting(false)
      setFormSubmitted(true)
    }, 1500)
  }

  // Determine which recruitment options to emphasize based on answers
  const getRecommendations = () => {
    if (!answers.recruitment_challenge) return null

    const recommendations = {
      title: '',
      description: '',
      primaryOptions: [] as string[],
      secondaryOptions: [] as string[],
      supportOptions: [] as string[]
    }

    // Logic to determine recommendations based on answers
    if (answers.recruitment_challenge === 'finding_candidates') {
      recommendations.title = 'Expand Your Candidate Pipeline'
      recommendations.description = 'Based on your needs, these programmes can help you find qualified candidates:'
      
      if (answers.timeframe === 'immediate') {
        recommendations.primaryOptions = ['Skills Bootcamp Graduates', 'Connect to Work']
        recommendations.secondaryOptions = ['Graduate Schemes', 'Local Training Partnerships']
        recommendations.supportOptions = ['Work Well Programme for supporting existing staff wellbeing']
      } else {
        recommendations.primaryOptions = ['Apprenticeships', 'T Levels']
        recommendations.secondaryOptions = ['Skills Bootcamp Graduates', 'Graduate Schemes']
        recommendations.supportOptions = ['Work Well Programme for supporting existing staff wellbeing']
      }
    } else if (answers.recruitment_challenge === 'skills_gap') {
      recommendations.title = 'Build Skills In-House'
      recommendations.description = 'These options can help you develop talent with the exact skills you need:'
      
      if (answers.training_capacity === 'high' || answers.training_capacity === 'medium') {
        recommendations.primaryOptions = ['Apprenticeships', 'T Levels']
        recommendations.secondaryOptions = ['Skills Bootcamp Partnerships', 'Graduate Development']
        recommendations.supportOptions = ['Work Well Programme for supporting existing staff development']
      } else {
        recommendations.primaryOptions = ['Skills Bootcamp Graduates', 'Connect to Work']
        recommendations.secondaryOptions = ['Local Training Partnerships', 'In-house Training']
        recommendations.supportOptions = ['Work Well Programme for supporting existing staff development']
      }
    } else if (answers.recruitment_challenge === 'retention') {
      recommendations.title = 'Improve Staff Retention'
      recommendations.description = 'These approaches can help build a more loyal workforce:'
      
      recommendations.primaryOptions = ['Apprenticeships', 'Connect to Work']
      recommendations.secondaryOptions = ['In-house Training', 'Employee Development Programmes']
      recommendations.supportOptions = ['Work Well Programme for supporting employee health and wellbeing']
    } else if (answers.recruitment_challenge === 'resource') {
      recommendations.title = 'Recruitment Support Solutions'
      recommendations.description = 'These programmes offer comprehensive recruitment assistance:'
      
      recommendations.primaryOptions = ['Skills Bootcamp Graduates', 'Connect to Work']
      recommendations.secondaryOptions = ['Recruitment Partnerships', 'Local Authority Support']
      recommendations.supportOptions = ['Work Well Programme for your existing workforce']
    } else if (answers.recruitment_challenge === 'cost') {
      recommendations.title = 'Cost-Effective Recruitment'
      recommendations.description = 'These programmes offer support to streamline your recruitment process:'
      
      recommendations.primaryOptions = ['Apprenticeships', 'T Levels']
      recommendations.secondaryOptions = ['Connect to Work', 'Graduate Schemes']
      recommendations.supportOptions = ['Work Well Programme to support existing employee wellbeing']
    } else if (answers.recruitment_challenge === 'health_wellbeing') {
      recommendations.title = 'Support Employee Health & Wellbeing'
      recommendations.description = 'These programmes can help improve workplace wellbeing and support staff with health conditions:'
      
      recommendations.primaryOptions = ['Work Well Programme']
      recommendations.secondaryOptions = ['Connect to Work', 'Local Health Partnerships']
    }

    return recommendations
  }

  const recommendations = getRecommendations()

  // Assessment questions
  const assessmentQuestions = [
    {
      id: 'recruitment_challenge',
      question: 'What is your biggest recruitment challenge?',
      options: [
        { value: 'finding_candidates', label: 'Finding qualified candidates' },
        { value: 'skills_gap', label: 'Skills gaps in applicants' },
        { value: 'retention', label: 'Retaining staff' },
        { value: 'resource', label: 'Lack of recruitment resources' },
        { value: 'cost', label: 'Cost of hiring' },
        { value: 'health_wellbeing', label: 'Supporting employee health and wellbeing' }
      ]
    },
    {
      id: 'timeframe',
      question: 'How quickly do you need to fill positions?',
      options: [
        { value: 'immediate', label: 'Immediately (1-4 weeks)' },
        { value: 'short_term', label: 'Short term (1-3 months)' },
        { value: 'long_term', label: 'Long term (3+ months)' },
        { value: 'ongoing', label: 'Ongoing/continuous recruitment' }
      ]
    },
    {
      id: 'training_capacity',
      question: 'What is your capacity to train new staff?',
      options: [
        { value: 'high', label: 'Extensive training resources available' },
        { value: 'medium', label: 'Some training capacity' },
        { value: 'low', label: 'Limited training capacity' },
        { value: 'none', label: 'No capacity to train' }
      ]
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Business Support', href: '/business-support' },
          { label: 'Recruitment Support', href: '/recruitment-support' }
        ]}
      />

      {/* Hero Section - Redesigned */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm text-teal-300 mb-6">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Yorkshire Talent Network</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Connect With Yorkshire's Finest Talent
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We help businesses across South Yorkshire build stronger teams through tailored recruitment solutions, connecting you with qualified candidates ready to make an impact.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowRecruitmentAssessment(true)}
                  className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <BadgeHelp className="w-6 h-6" />
                    <span>Find Your Perfect Programme</span>
                    <span className="hidden lg:inline-flex items-center text-xs bg-white/20 px-2 py-1 rounded-full ml-1">
                      <Sparkles className="w-3 h-3 mr-1" /> Recruitment Tool
                    </span>
                  </div>
                </button>
                
                <button
                  onClick={() => document.getElementById('recruitment-programmes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 text-white font-medium"
                >
                  View Programmes
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                <Image
                  src="/images/recruitment-hero.jpg"
                  alt="Business team collaborating"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <Star className="h-5 w-5 text-amber-400" />
                    </div>
                    <p className="text-white font-medium">Trusted by 200+ Yorkshire businesses</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-3 mb-1">
                  <Users className="h-5 w-5 text-indigo-600" />
                  <span className="text-xs font-medium text-slate-500">Candidates Placed</span>
                </div>
                <p className="text-2xl font-bold text-slate-900">1,500+</p>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-3 mb-1">
                  <Building className="h-5 w-5 text-teal-600" />
                  <span className="text-xs font-medium text-slate-500">Local Partnerships</span>
                </div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section - Complete Redesign */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How We Support Your Recruitment"
            subtitle="Comprehensive recruitment solutions for South Yorkshire businesses"
            align="center"
          />
          
          <div className="mt-16 relative">
            {/* Connected line through the process */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-100 hidden md:block"></div>
            
            <div className="space-y-16 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 mb-4">
                    <span className="font-medium">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Understand Your Needs</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We start by deeply understanding your business, culture, and specific recruitment challenges to create a tailored approach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-end gap-2">
                      <span className="text-slate-700">In-depth consultation</span>
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span className="text-slate-700">Skills gap analysis</span>
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span className="text-slate-700">Recruitment strategy development</span>
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 md:mt-0 relative">
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-100/50 hidden md:block"></div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 relative">
                    <Image 
                      src="/images/recruitment-needs-analysis.jpg"
                      alt="Business needs analysis"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-amber-500" />
                        Strategic Consultation
                      </h4>
                      <p className="text-slate-600 text-sm">
                        We collaborate with your team to identify the exact skills and qualities your business needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connector dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-teal-400 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="mt-8 md:mt-0 order-2 md:order-1 relative">
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal-100/50 hidden md:block"></div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 relative">
                    <Image 
                      src="/images/talent-matching.jpg"
                      alt="Talent matching process"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Target className="h-5 w-5 text-teal-500" />
                        Precision Matching
                      </h4>
                      <p className="text-slate-600 text-sm">
                        We connect you with pre-screened candidates who match both technical requirements and company culture.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 mb-4">
                    <span className="font-medium">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Connect With Qualified Talent</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We leverage our extensive network to match you with candidates who have the exact skills your business needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">Access to pre-screened candidates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">Targeted skill matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">Cultural fit assessment</span>
                    </li>
                  </ul>
                </div>
                
                {/* Connector dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-teal-400 hidden md:block"></div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-800 mb-4">
                    <span className="font-medium">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Long-Term Success Support</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Our support doesn't end with placement. We provide ongoing assistance to ensure lasting success for both your business and new employees.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-end gap-2">
                      <span className="text-slate-700">Onboarding guidance</span>
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span className="text-slate-700">Regular check-ins</span>
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span className="text-slate-700">Development planning assistance</span>
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 md:mt-0 relative">
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-100/50 hidden md:block"></div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 relative">
                    <Image 
                      src="/images/ongoing-support.jpg"
                      alt="Ongoing recruitment support"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Handshake className="h-5 w-5 text-purple-500" />
                        Ongoing Partnership
                      </h4>
                      <p className="text-slate-600 text-sm">
                        We're committed to your long-term success, providing continuous support as your business grows.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connector dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-teal-400 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Assessment Modal */}
      {showRecruitmentAssessment && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => {
                  setShowRecruitmentAssessment(false)
                  setCurrentStep(0)
                  setAnswers({})
                  setShowResult(false)
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
                aria-label="Close assessment"
              >
                <X className="h-5 w-5 text-slate-700" />
              </button>

              <div className="relative">
                {/* Decorative header background */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-r from-teal-600 to-indigo-600"></div>
                <div className="absolute top-0 inset-x-0 h-24 bg-grid-pattern opacity-10"></div>
                
                {/* Content wrapper */}
                <div className="relative pt-12 px-6 md:px-8 pb-8">
                  {!showResult ? (
                    <div className="mt-8">
                      {/* Header */}
                      <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 p-4 mb-4 shadow-lg">
                          <Sparkles className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Find Your Perfect Match</h2>
                        <p className="text-slate-600 max-w-md mx-auto">
                          Answer a few simple questions and we'll recommend the ideal recruitment programme for your business needs.
                        </p>
                      </div>

                      {/* Progress indicator */}
                      <div className="mb-8">
                        <div className="flex justify-between mb-2">
                          {assessmentQuestions.map((_, index) => (
                            <div key={index} className="flex flex-col items-center">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-1
                                ${index < currentStep ? 'bg-teal-600 text-white' : 
                                  index === currentStep ? 'bg-indigo-600 text-white border-4 border-indigo-100' : 
                                  'bg-slate-200 text-slate-500'}`}>
                                {index < currentStep ? <CheckCircle className="h-5 w-5" /> : index + 1}
                              </div>
                              <span className="text-xs font-medium text-slate-500 hidden sm:block">
                                {index === 0 ? 'Challenge' : index === 1 ? 'Timeframe' : 'Capacity'}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-gradient-to-r from-teal-600 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-in-out" 
                            style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Question card */}
                      <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">
                          {assessmentQuestions[currentStep].question}
                        </h3>
                        
                        <div className="grid gap-3 sm:grid-cols-2">
                          {assessmentQuestions[currentStep].options.map((option) => (
                            <button
                              key={option.value}
                              className="flex flex-col items-start p-4 rounded-lg border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                              onClick={() => handleAnswerSelect(assessmentQuestions[currentStep].id, option.value)}
                            >
                              <span className="text-slate-800 font-medium group-hover:text-indigo-700 mb-2">{option.label}</span>
                              <div className="flex items-center justify-between w-full mt-auto">
                                <span className="text-xs text-slate-500 group-hover:text-indigo-600">Select this option</span>
                                <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-indigo-500 group-hover:bg-indigo-500 flex items-center justify-center transition-colors">
                                  <ChevronRight className="h-4 w-4 text-transparent group-hover:text-white" />
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8">
                      {/* Results header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-4 mb-4 shadow-lg">
                          <CheckCircle2 className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Perfect Match</h2>
                        <p className="text-slate-600 max-w-md mx-auto">
                          Based on your needs, we've identified these recruitment solutions that would work best for your business.
                        </p>
                      </div>

                      {recommendations && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mb-8">
                          {/* Header banner */}
                          <div className="bg-gradient-to-r from-teal-600 to-indigo-600 px-6 py-4 text-white">
                            <h3 className="text-xl font-bold mb-1">{recommendations.title}</h3>
                            <p className="text-teal-100 text-sm">{recommendations.description}</p>
                          </div>
                          
                          <div className="p-6">
                            {/* Primary recommendations */}
                            <div className="mb-8">
                              <h4 className="font-medium text-slate-900 mb-4 flex items-center">
                                <Star className="h-5 w-5 text-amber-500 mr-2" />
                                Top Recommendations
                              </h4>
                              
                              <div className="grid gap-4 sm:grid-cols-2">
                                {recommendations.primaryOptions.map((option, index) => {
                                  // Find the corresponding programme details
                                  const programme = recruitmentProgrammes.find(
                                    p => p.title === option || p.title.includes(option.split(' ')[0])
                                  );
                                  
                                  return (
                                    <div 
                                      key={index} 
                                      className={`rounded-lg border p-4 relative ${
                                        programme ? colorClasses[programme.color].card : 'bg-teal-50 border-teal-100'
                                      }`}
                                    >
                                      <div className="flex items-start gap-3 mb-3">
                                        <div className={`p-2 rounded-lg ${
                                          programme ? colorClasses[programme.color].icon : 'bg-teal-100 text-teal-700'
                                        }`}>
                                          {programme?.icon || <CheckCircle className="h-5 w-5" />}
                                        </div>
                                        <div>
                                          <h5 className="font-semibold text-slate-900">{option}</h5>
                                          <p className="text-sm text-slate-600">
                                            {programme?.tagline || 'Tailored recruitment solution'}
                                          </p>
                                        </div>
                                      </div>
                                      
                                      <Link 
                                        href={programme?.link || '#recruitment-programmes'} 
                                        className={`text-sm font-medium inline-flex items-center ${
                                          programme ? colorClasses[programme.color].light : 'text-teal-700'
                                        }`}
                                        onClick={() => {
                                          setShowRecruitmentAssessment(false);
                                          if (programme) setActiveProgramme(programme.id);
                                        }}
                                      >
                                        View programme details
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            
                            {/* Secondary recommendations */}
                            {recommendations.secondaryOptions.length > 0 && (
                              <div>
                                <h4 className="font-medium text-slate-900 mb-4 flex items-center">
                                  <BadgeHelp className="h-5 w-5 text-slate-500 mr-2" />
                                  Also Consider
                                </h4>
                                
                                <div className="grid gap-3 sm:grid-cols-2">
                                  {recommendations.secondaryOptions.map((option, index) => {
                                    const programme = recruitmentProgrammes.find(
                                      p => p.title === option || p.title.includes(option.split(' ')[0])
                                    );
                                    
                                    return (
                                      <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                                        <div className="p-1.5 rounded-md bg-white border border-slate-200">
                                          {programme?.icon || <CheckCircle className="h-4 w-4 text-slate-500" />}
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-slate-700">{option}</p>
                                          <Link 
                                            href={programme?.link || '#recruitment-programmes'} 
                                            className="text-xs text-slate-500 hover:text-indigo-600 inline-flex items-center mt-1"
                                            onClick={() => {
                                              setShowRecruitmentAssessment(false);
                                              if (programme) setActiveProgramme(programme.id);
                                            }}
                                          >
                                            Learn more
                                            <ChevronRight className="ml-0.5 h-3 w-3" />
                                          </Link>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                            
                            {/* Support for existing employees */}
                            {recommendations.supportOptions && recommendations.supportOptions.length > 0 && (
                              <div className="mt-6 pt-6 border-t border-slate-200">
                                <h4 className="font-medium text-slate-900 mb-4 flex items-center">
                                  <CheckSquare className="h-5 w-5 text-emerald-600 mr-2" />
                                  Support for Existing Staff
                                </h4>
                                
                                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                                  {recommendations.supportOptions.map((option, index) => {
                                    const isWorkWell = option.toLowerCase().includes('work well');
                                    
                                    return (
                                      <div key={index} className="flex items-start gap-3 mb-2 last:mb-0">
                                        <div className="p-1.5 rounded-md bg-white border border-emerald-200 flex-shrink-0 mt-0.5">
                                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-slate-800">{option}</p>
                                          {isWorkWell && (
                                            <Link 
                                              href="/work-well" 
                                              className="text-xs text-emerald-700 hover:text-emerald-800 inline-flex items-center mt-1"
                                              onClick={() => {
                                                setShowRecruitmentAssessment(false);
                                                setActiveProgramme('work-well');
                                              }}
                                            >
                                              Learn about Work Well
                                              <ChevronRight className="ml-0.5 h-3 w-3" />
                                            </Link>
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mt-6">
                    {showResult ? (
                      <>
                        <button 
                          onClick={() => {
                            setCurrentStep(0)
                            setAnswers({})
                            setShowResult(false)
                          }}
                          className="text-sm text-indigo-700 hover:text-indigo-800 font-medium"
                        >
                          <div className="flex items-center gap-1">
                            <ChevronLeft className="h-4 w-4" />
                            Start Again
                          </div>
                        </button>
                        
                        <button
                          onClick={() => {
                            setShowRecruitmentAssessment(false)
                            document.getElementById('recruitment-programmes')?.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-medium hover:shadow-md transition-shadow"
                        >
                          View All Programmes
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setShowRecruitmentAssessment(false)
                        }}
                        className="sm:ml-auto text-sm text-slate-600 hover:text-slate-800 font-medium"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recruitment Programmes Section - Redesigned */}
      <section id="recruitment-programmes" className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Recruitment Programmes"
            subtitle="Tailored solutions to meet your specific business needs"
            align="center"
          />
          
          <div className="mt-12 space-y-8">
            {/* Programme Selection Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
              {recruitmentProgrammes.map((programme) => (
                <button
                  key={programme.id}
                  onClick={() => handleProgrammeClick(programme.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${activeProgramme === programme.id
                      ? `bg-gradient-to-r ${colorClasses[programme.color].gradient} text-white shadow-md`
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                >
                  {programme.title}
                </button>
              ))}
              <button
                onClick={() => setActiveProgramme(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeProgramme === null
                    ? 'bg-gradient-to-r from-slate-600 to-slate-800 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
              >
                View All
              </button>
            </div>
            
            {/* Programme Cards - Grid View */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recruitmentProgrammes
                .filter(p => activeProgramme === null || p.id === activeProgramme)
                .map((programme) => (
                <div 
                  key={programme.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                >
                  {/* Card Header with Icon and Gradient */}
                  <div className={`p-6 bg-gradient-to-r ${colorClasses[programme.color].gradient}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                        {programme.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{programme.title}</h3>
                    </div>
                    <p className="text-white/90">{programme.tagline}</p>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-slate-700 mb-6">{programme.description}</p>
                    
                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <Star className={`h-5 w-5 ${colorClasses[programme.color].light}`} />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {programme.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className={`h-5 w-5 ${colorClasses[programme.color].light} flex-shrink-0 mt-0.5`} />
                            <span className="text-slate-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Timeline and Details */}
                    <div className="flex flex-wrap gap-4 mt-auto mb-4">
                      <div className="flex items-center text-sm text-slate-600 gap-1.5">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span>{programme.timeframe}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600 gap-1.5">
                        <Briefcase className="h-4 w-4 text-slate-400" />
                        <span>All business sizes</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={programme.link}
                      className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-gradient-to-r ${colorClasses[programme.color].gradient} text-white font-medium hover:opacity-90 transition-opacity mt-2`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Programme Detail View */}
            {activeProgramme && (
              <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                {recruitmentProgrammes
                  .filter(p => p.id === activeProgramme)
                  .map((programme) => (
                  <div key={programme.id} className="grid md:grid-cols-2">
                    <div className={`p-8 bg-gradient-to-br ${colorClasses[programme.color].gradient} text-white`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          {programme.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{programme.title}</h3>
                      </div>
                      
                      <p className="text-white/90 mb-8 text-lg">{programme.description}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-white/80" />
                            Programme Benefits
                          </h4>
                          <ul className="space-y-3">
                            {programme.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                                <span className="text-white/90">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="font-semibold text-slate-900 mb-4">Eligibility Requirements</h4>
                      <ul className="space-y-3 mb-8">
                        {programme.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className={`h-5 w-5 ${colorClasses[programme.color].light} flex-shrink-0 mt-0.5`} />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-slate-50 p-5 rounded-lg mb-8">
                        <h4 className="font-semibold text-slate-900 mb-2">Support Available</h4>
                        <p className="text-slate-700">{programme.funding.details}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-full ${colorClasses[programme.color].icon}`}>
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Programme Duration</p>
                            <p className="font-medium text-slate-900">{programme.timeframe}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-full ${colorClasses[programme.color].icon}`}>
                            <Users className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Eligibility</p>
                            <p className="font-medium text-slate-900">All business sizes</p>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        href={programme.link}
                        className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${colorClasses[programme.color].gradient} text-white font-medium hover:opacity-90 transition-opacity`}
                      >
                        Learn More About {programme.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <ActionButton 
              onClick={() => setShowRecruitmentAssessment(true)}
              color="indigo"
              icon={<CheckCircle2 className="w-5 h-5" />}
            >
              Find Your Perfect Programme
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Redesigned */}
      <section id="success-stories" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Success Stories"
            subtitle="How our programmes have helped Yorkshire businesses thrive"
            align="center"
          />
          
          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {successStories.map((story) => (
              <button
                key={story.id}
                onClick={() => handleStoryChange(story.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeStory === story.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {story.company}
              </button>
            ))}
          </div>
          
          {/* Main Story Display */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Left Column - Image & Logo */}
            <div className="md:col-span-5 lg:col-span-4">
              {successStories.map((story) => activeStory === story.id && (
                <div key={`image-${story.id}`} className="h-full flex flex-col">
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
                    <Image
                      src={story.image}
                      alt={`${story.company} team`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    
                    {/* Company Badge */}
                    <div className="absolute bottom-0 left-0 p-6 flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-md">
                        <Image
                          src={story.logo}
                          alt={story.company}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{story.company}</h3>
                        <p className="text-white/80 text-sm">{story.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="mt-6 bg-slate-50 rounded-xl p-5 flex-grow">
                    <h4 className="text-slate-900 font-medium mb-3">Company Profile</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Industry</span>
                        <span className="font-medium text-slate-900">{story.industry}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Size</span>
                        <span className="font-medium text-slate-900">{story.businessSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Programme</span>
                        <Link href={story.programmePath} className="font-medium text-indigo-600 hover:text-indigo-800">
                          {story.programme}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column - Story Content */}
            <div className="md:col-span-7 lg:col-span-8">
              {successStories.map((story) => activeStory === story.id && (
                <div key={`content-${story.id}`} className="bg-white rounded-xl shadow-md border border-slate-100 p-6 lg:p-8">
                  {/* Quote Section */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-3 -left-3 h-10 w-10 text-indigo-200 transform -scale-x-100" />
                    <blockquote className="text-lg md:text-xl text-slate-700 italic pl-8 leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                    <div className="mt-6 flex items-center">
                      <Image
                        className="h-12 w-12 rounded-full border-2 border-indigo-100"
                        src={story.image}
                        alt={story.author}
                        width={48}
                        height={48}
                      />
                      <div className="ml-3">
                        <p className="text-base font-semibold text-slate-900">{story.author}</p>
                        <p className="text-sm text-slate-600">{story.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Challenge and Solution Section */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 rounded-xl p-5">
                      <h4 className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
                        <BadgeHelp className="h-5 w-5 text-amber-500" />
                        The Challenge
                      </h4>
                      <p className="text-slate-700">{story.challenge}</p>
                    </div>
                    
                    <div className="bg-indigo-50 rounded-xl p-5">
                      <h4 className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
                        <Lightbulb className="h-5 w-5 text-indigo-500" />
                        The Solution
                      </h4>
                      <p className="text-slate-700">{story.solution}</p>
                    </div>
                  </div>
                  
                  {/* Impact Metrics Section */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-500" />
                      Business Impact
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {story.impact.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                              {item.icon}
                            </div>
                            <p className="text-slate-700 text-sm font-medium">{item.metric}</p>
                          </div>
                          <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={() => {
                const currentIndex = successStories.findIndex(s => s.id === activeStory);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : successStories.length - 1;
                handleStoryChange(successStories[prevIndex].id);
              }}
              className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
            
            {/* Story Indicators */}
            <div className="flex items-center gap-1.5">
              {successStories.map((story, index) => (
                <button
                  key={`indicator-${story.id}`}
                  onClick={() => handleStoryChange(story.id)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeStory === story.id ? 'w-6 bg-indigo-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to ${story.company} story`}
                />
              ))}
            </div>
            
            <button
              onClick={() => {
                const currentIndex = successStories.findIndex(s => s.id === activeStory);
                const nextIndex = currentIndex < successStories.length - 1 ? currentIndex + 1 : 0;
                handleStoryChange(successStories[nextIndex].id);
              }}
              className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 shadow-sm"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium shadow-sm"
            >
              Get Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/5 opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-teal-300 mb-6">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Let's Connect</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Recruitment?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our specialists are ready to provide personalised guidance for your business's recruitment needs across South Yorkshire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Tell Us About Your Recruitment Needs</h3>
                
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="bg-teal-100 text-teal-700 rounded-full p-3 mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                    <p className="text-slate-600 mb-6">
                      We've received your enquiry and will get back to you within one working day.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false)
                        setFormStep(1)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          position: '',
                          businessSize: '',
                          industry: '',
                          recruitmentNeed: '',
                          message: '',
                          consent: false
                        })
                      }}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Multi-step form progress indicator */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        {[1, 2, 3].map((step) => (
                          <div 
                            key={step} 
                            className={`flex items-center justify-center ${
                              step < formStep ? 'text-white' : step === formStep ? 'text-white' : 'text-slate-400'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              step < formStep 
                                ? 'bg-teal-600' 
                                : step === formStep 
                                  ? 'bg-indigo-600' 
                                  : 'bg-slate-200'
                            }`}>
                              {step < formStep ? <CheckCircle className="h-5 w-5" /> : step}
                            </div>
                            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-600">
                              {step === 1 ? 'Your Details' : step === 2 ? 'Business Info' : 'Requirements'}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="relative w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-600 to-indigo-600 transition-all duration-300"
                          style={{ width: `${(formStep / 3) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {formStep === 1 && (
                      <>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="you@example.com"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="Optional"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {formStep === 2 && (
                      <>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Enter your company name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-1">Your Role</label>
                          <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="e.g. HR Manager"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="businessSize" className="block text-sm font-medium text-slate-700 mb-1">Business Size</label>
                            <select
                              id="businessSize"
                              name="businessSize"
                              value={formData.businessSize}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                              <option value="">Select...</option>
                              <option value="1-9">1-9 employees</option>
                              <option value="10-49">10-49 employees</option>
                              <option value="50-249">50-249 employees</option>
                              <option value="250+">250+ employees</option>
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                            <select
                              id="industry"
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                              <option value="">Select...</option>
                              <option value="Manufacturing">Manufacturing</option>
                              <option value="Technology">Technology</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Retail">Retail</option>
                              <option value="Hospitality">Hospitality</option>
                              <option value="Construction">Construction</option>
                              <option value="Education">Education</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {formStep === 3 && (
                      <>
                        <div>
                          <label htmlFor="recruitmentNeed" className="block text-sm font-medium text-slate-700 mb-1">Primary Recruitment Need</label>
                          <select
                            id="recruitmentNeed"
                            name="recruitmentNeed"
                            value={formData.recruitmentNeed}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          >
                            <option value="">Select...</option>
                            <option value="Apprenticeships">Apprenticeships</option>
                            <option value="Skills Bootcamps">Skills Bootcamps</option>
                            <option value="T Levels">T Levels</option>
                            <option value="Connect to Work">Connect to Work</option>
                            <option value="Work Well">Work Well</option>
                            <option value="Other">Other / Not sure</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Information</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Tell us more about your recruitment challenges or specific requirements..."
                          ></textarea>
                        </div>
                        
                        <div className="flex items-start mt-4">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent as boolean}
                            onChange={handleInputChange}
                            required
                            className="h-5 w-5 mt-1 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                          />
                          <label htmlFor="consent" className="ml-3 block text-sm text-slate-600">
                            I consent to South Yorkshire Combined Authority contacting me about my enquiry. Your data will be processed in accordance with our <Link href="/privacy" className="text-indigo-600 hover:underline">privacy policy</Link>.
                          </label>
                        </div>
                      </>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-200">
                      {formStep > 1 && (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium"
                        >
                          <ChevronLeft className="mr-1 h-4 w-4" />
                          Back
                        </button>
                      )}
                      
                      {formStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="ml-auto inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium"
                        >
                          Continue
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isFormSubmitting}
                          className="ml-auto inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium disabled:opacity-70"
                        >
                          {isFormSubmitting ? (
                            <>
                              <span className="mr-2">Submitting</span>
                              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            </>
                          ) : (
                            'Submit Enquiry'
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Right Column - Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contact Our Team</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-xl mr-4">
                      <Mail className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Email us at</p>
                      <a href="mailto:recruitment@southyorkshire.gov.uk" className="text-slate-300 hover:text-white transition-colors">
                        recruitment@southyorkshire.gov.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-xl mr-4">
                      <Phone className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Call us</p>
                      <a href="tel:01142734567" className="text-slate-300 hover:text-white transition-colors">
                        0114 273 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-white/10 rounded-xl mr-4">
                      <MapPin className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Local Support Offices</p>
                      <ul className="space-y-1 text-slate-300">
                        <li>Sheffield Business Support</li>
                        <li>Rotherham Business Support</li>
                        <li>Doncaster Business Support</li>
                        <li>Barnsley Business Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">How quickly can I get recruitment support?</h4>
                    <p className="text-slate-300">
                      We aim to respond to all enquiries within one working day and can usually arrange an initial consultation within the same week.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Do you support businesses of all sizes?</h4>
                    <p className="text-slate-300">
                      Yes, our programmes are available to businesses of all sizes across South Yorkshire, from start-ups to large enterprises.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">What industries do you specialise in?</h4>
                    <p className="text-slate-300">
                      We support all industries but have particular expertise in manufacturing, digital, healthcare, and construction sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 