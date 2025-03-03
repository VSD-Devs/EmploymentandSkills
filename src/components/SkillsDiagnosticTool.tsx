'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  X, 
  MessageSquare, 
  BrainCircuit, 
  Building2, 
  Users, 
  Target, 
  Rocket, 
  GraduationCap, 
  ListChecks,
  Clock,
  Tag,
  MapPin,
  Briefcase,
  LineChart,
  Percent
} from 'lucide-react'

// Define interfaces for the diagnostic questions and categories
interface DiagnosticQuestion {
  id: number
  question: string
  options: {
    text: string
    value: string
    score?: Record<string, number>
    nextQuestion?: number
  }[]
  allowMultiple?: boolean
  required?: boolean
}

interface DiagnosticCategory {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  threshold: number
  eligibilityCriteria?: string[]
  recommendation?: string
  fundingAvailable?: string
  cta: {
    text: string
    href: string
  }
}

const SkillsDiagnosticTool: React.FC = () => {
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [scores, setScores] = useState<Record<string, number>>({
    'skills-bank': 0,
    'skills-bootcamps': 0,
    'apprenticeships': 0,
    'bespoke-solutions': 0,
    'national-programmes': 0
  })
  const [completed, setCompleted] = useState(false)
  const [eligibleFor, setEligibleFor] = useState<string[]>([])
  const [topRecommendation, setTopRecommendation] = useState<string | null>(null)
  const [inSouthYorkshire, setInSouthYorkshire] = useState<boolean | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [businessSize, setBusinessSize] = useState<string | null>(null)
  const [trainingNeeds, setTrainingNeeds] = useState<string[]>([])
  const [businessGoals, setBusinessGoals] = useState<string[]>([])

  // Define the diagnostic questions
  const diagnosticQuestions: DiagnosticQuestion[] = [
    {
      id: 1,
      question: "Is your business located in South Yorkshire (Sheffield, Rotherham, Barnsley, or Doncaster)?",
      options: [
        {
          text: "Yes",
          value: "yes",
          score: {
            'skills-bank': 10,
            'skills-bootcamps': 10,
            'apprenticeships': 10,
            'bespoke-solutions': 10,
            'national-programmes': 5
          }
        },
        {
          text: "No",
          value: "no",
          score: {
            'skills-bank': -100,
            'skills-bootcamps': 0,
            'apprenticeships': 0,
            'bespoke-solutions': -30,
            'national-programmes': 10
          }
        }
      ],
      required: true
    },
    {
      id: 2,
      question: "How many employees does your business have?",
      options: [
        {
          text: "1-9 employees",
          value: "micro",
          score: {
            'skills-bank': 8,
            'skills-bootcamps': 6,
            'apprenticeships': 4,
            'bespoke-solutions': 7
          }
        },
        {
          text: "10-49 employees",
          value: "small",
          score: {
            'skills-bank': 10,
            'skills-bootcamps': 8,
            'apprenticeships': 8,
            'bespoke-solutions': 9
          }
        },
        {
          text: "50-249 employees",
          value: "medium",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 10,
            'apprenticeships': 10,
            'bespoke-solutions': 10
          }
        },
        {
          text: "250+ employees",
          value: "large",
          score: {
            'skills-bank': 7,
            'skills-bootcamps': 9,
            'apprenticeships': 9,
            'bespoke-solutions': 8
          }
        }
      ],
      required: true
    },
    {
      id: 3,
      question: "What are your primary business goals for the next 12 months?",
      options: [
        {
          text: "Business growth and expansion",
          value: "growth",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 7,
            'apprenticeships': 8,
            'bespoke-solutions': 9
          }
        },
        {
          text: "Improving productivity and efficiency",
          value: "productivity",
          score: {
            'skills-bank': 10,
            'skills-bootcamps': 8,
            'apprenticeships': 7,
            'bespoke-solutions': 8
          }
        },
        {
          text: "Innovation and product development",
          value: "innovation",
          score: {
            'skills-bank': 7,
            'skills-bootcamps': 9,
            'apprenticeships': 6,
            'bespoke-solutions': 10
          }
        },
        {
          text: "Workforce development and retention",
          value: "workforce",
          score: {
            'skills-bank': 8,
            'skills-bootcamps': 8,
            'apprenticeships': 10,
            'bespoke-solutions': 7
          }
        },
        {
          text: "Digital transformation",
          value: "digital",
          score: {
            'skills-bank': 6,
            'skills-bootcamps': 10,
            'apprenticeships': 7,
            'bespoke-solutions': 9
          }
        }
      ],
      allowMultiple: true,
      required: true
    },
    {
      id: 4,
      question: "Which skills areas does your workforce need development in?",
      options: [
        {
          text: "Leadership and management",
          value: "leadership",
          score: {
            'skills-bank': 10,
            'skills-bootcamps': 6,
            'apprenticeships': 8,
            'bespoke-solutions': 9
          }
        },
        {
          text: "Digital and technical skills",
          value: "digital",
          score: {
            'skills-bank': 7,
            'skills-bootcamps': 10,
            'apprenticeships': 9,
            'bespoke-solutions': 8
          }
        },
        {
          text: "Sales and marketing",
          value: "sales",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 7,
            'apprenticeships': 8,
            'bespoke-solutions': 7
          }
        },
        {
          text: "Operations and manufacturing",
          value: "operations",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 8,
            'apprenticeships': 7,
            'bespoke-solutions': 9
          }
        },
        {
          text: "Customer service and support",
          value: "customer",
          score: {
            'skills-bank': 8,
            'skills-bootcamps': 7,
            'apprenticeships': 9,
            'bespoke-solutions': 8
          }
        },
        {
          text: "Project management",
          value: "project",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 9,
            'apprenticeships': 7,
            'bespoke-solutions': 8
          }
        }
      ],
      allowMultiple: true,
      required: true
    },
    {
      id: 5,
      question: "What is your preferred timeframe for implementing training?",
      options: [
        {
          text: "Immediate (within 1-2 months)",
          value: "immediate",
          score: {
            'skills-bank': 7,
            'skills-bootcamps': 10,
            'apprenticeships': 4,
            'bespoke-solutions': 8
          }
        },
        {
          text: "Short-term (3-6 months)",
          value: "short",
          score: {
            'skills-bank': 10,
            'skills-bootcamps': 9,
            'apprenticeships': 7,
            'bespoke-solutions': 9
          }
        },
        {
          text: "Medium-term (6-12 months)",
          value: "medium",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 7,
            'apprenticeships': 10,
            'bespoke-solutions': 10
          }
        },
        {
          text: "Long-term (12+ months)",
          value: "long",
          score: {
            'skills-bank': 7,
            'skills-bootcamps': 6,
            'apprenticeships': 9,
            'bespoke-solutions': 7
          }
        }
      ],
      required: true
    },
    {
      id: 6,
      question: "What's your budget per employee for training and development?",
      options: [
        {
          text: "Low budget (seeking maximum funding)",
          value: "low",
          score: {
            'skills-bank': 9,
            'skills-bootcamps': 10,
            'apprenticeships': 10,
            'bespoke-solutions': 6
          }
        },
        {
          text: "Medium budget (willing to part-fund)",
          value: "medium",
          score: {
            'skills-bank': 10,
            'skills-bootcamps': 9,
            'apprenticeships': 8,
            'bespoke-solutions': 9
          }
        },
        {
          text: "High budget (seeking quality regardless of cost)",
          value: "high",
          score: {
            'skills-bank': 7,
            'skills-bootcamps': 7,
            'apprenticeships': 6,
            'bespoke-solutions': 10
          }
        },
        {
          text: "Unsure - need guidance on options",
          value: "unsure",
          score: {
            'skills-bank': 8,
            'skills-bootcamps': 8,
            'apprenticeships': 8,
            'bespoke-solutions': 8
          }
        }
      ],
      required: true
    }
  ]

  // Define the diagnostic categories/outcomes
  const diagnosticCategories: DiagnosticCategory[] = [
    {
      id: 'skills-bank',
      title: 'Skills Bank',
      description: 'Tailored training solutions with up to 60% funding support for businesses in South Yorkshire. Perfect for developing existing workforce with bespoke programmes.',
      icon: Briefcase,
      color: 'emerald',
      threshold: 40,
      eligibilityCriteria: [
        'Based in South Yorkshire',
        'Businesses of any size, but preferably SMEs',
        'Clear growth or productivity goals',
        'Ability to part-fund training costs'
      ],
      recommendation: 'Skills Bank is ideal for businesses seeking flexible, tailored training solutions that directly address your specific needs. With up to 60% funding available, this programme offers excellent value.',
      fundingAvailable: 'Up to 60% of eligible training costs',
      cta: {
        text: 'Learn More About Skills Bank',
        href: '/skills-bank'
      }
    },
    {
      id: 'skills-bootcamps',
      title: 'Skills Bootcamps',
      description: 'Intensive, industry-focused training courses lasting 12-16 weeks. Ideal for quickly upskilling staff in digital, technical, and construction skills.',
      icon: Rocket,
      color: 'blue',
      threshold: 40,
      eligibilityCriteria: [
        'Open to all UK businesses',
        'Focused on digital, technical, and construction skills',
        'Immediate to short-term training needs',
        'Seeking standardised, recognised qualifications'
      ],
      recommendation: 'Skills Bootcamps offer fast-track training in high-demand skills areas. They\'re perfect if you need to quickly build capabilities within your workforce or want to hire pre-trained individuals.',
      fundingAvailable: '70% government subsidy for SMEs, 90% for small businesses (less than 250 employees)',
      cta: {
        text: 'Explore Skills Bootcamps',
        href: '/skills-bootcamps'
      }
    },
    {
      id: 'apprenticeships',
      title: 'Apprenticeships',
      description: 'Develop talent through work-based learning programmes combining practical training with study. Suitable for new hires or upskilling existing staff.',
      icon: GraduationCap,
      color: 'purple',
      threshold: 40,
      eligibilityCriteria: [
        'UK businesses of any size',
        'Ability to support an apprentice for 12+ months',
        'Desire to develop talent through on-the-job training',
        'Looking for long-term workforce development'
      ],
      recommendation: 'Apprenticeships offer a cost-effective way to develop loyal, skilled employees. They combine work-based learning with academic study and are available at various levels, from GCSE equivalent to master\'s degree.',
      fundingAvailable: '95-100% government funding depending on business size and apprentice age',
      cta: {
        text: 'Discover Apprenticeships',
        href: '/apprenticeships'
      }
    },
    {
      id: 'bespoke-solutions',
      title: 'Bespoke Training Solutions',
      description: 'Custom training programmes designed specifically for your business needs, with partial funding options available through various schemes.',
      icon: Target,
      color: 'amber',
      threshold: 40,
      eligibilityCriteria: [
        'UK businesses seeking specialised training',
        'Specific or niche training requirements',
        'Preference for tailored training delivery',
        'Ability to part-fund training costs'
      ],
      recommendation: 'For businesses with unique training needs that don\'t fit standard programmes, our bespoke solutions offer maximum flexibility. We can help identify applicable funding schemes to reduce costs.',
      fundingAvailable: 'Varies by scheme, typically 30-50% of eligible costs',
      cta: {
        text: 'Discuss Bespoke Solutions',
        href: '/contact'
      }
    },
    {
      id: 'national-programmes',
      title: 'National Skills Programmes',
      description: 'Government-backed training initiatives available across the UK, designed to address national skills shortages and support workforce development.',
      icon: MapPin,
      color: 'indigo',
      threshold: 40,
      eligibilityCriteria: [
        'Any UK-registered business',
        'May have specific sector or size requirements',
        'Typically focused on addressing national skills gaps',
        'Various application processes depending on scheme'
      ],
      recommendation: 'As your business is outside South Yorkshire, we recommend exploring these national funding options that are available regardless of your location. Many offer significant funding for workforce training and development.',
      fundingAvailable: 'Varies by programme - from partial subsidies to full funding',
      cta: {
        text: 'Explore National Programmes',
        href: '/national-skills-programmes'
      }
    }
  ]

  // Reset error when question changes
  useEffect(() => {
    setError(null)
    setSelectedOptions(answers[currentQuestion + 1] || [])
  }, [currentQuestion, answers])

  // Handle option selection
  const handleOptionSelect = (optionValue: string) => {
    setError(null)
    const question = diagnosticQuestions[currentQuestion]
    
    // For single-select questions
    if (!question.allowMultiple) {
      setSelectedOptions([optionValue])
      
      // Special handling for location question
      if (question.id === 1) {
        setInSouthYorkshire(optionValue === 'yes')
      }
      
      // Special handling for business size question
      if (question.id === 2) {
        setBusinessSize(optionValue)
      }
      
      return
    }
    
    // For multi-select questions
    setSelectedOptions(prev => {
      if (prev.includes(optionValue)) {
        return prev.filter(value => value !== optionValue)
      } else {
        return [...prev, optionValue]
      }
    })
    
    // Track business goals
    if (question.id === 3) {
      setBusinessGoals(prev => {
        if (prev.includes(optionValue)) {
          return prev.filter(value => value !== optionValue)
        } else {
          return [...prev, optionValue]
        }
      })
    }
    
    // Track training needs
    if (question.id === 4) {
      setTrainingNeeds(prev => {
        if (prev.includes(optionValue)) {
          return prev.filter(value => value !== optionValue)
        } else {
          return [...prev, optionValue]
        }
      })
    }
  }

  // Handle next question button
  const handleNextQuestion = () => {
    const currentQ = diagnosticQuestions[currentQuestion]
    
    // Validate if required
    if (currentQ.required && selectedOptions.length === 0) {
      setError('Please select at least one option to continue')
      return
    }
    
    // Store answers
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: selectedOptions
    }))
    
    // Track location in South Yorkshire for special case
    if (currentQ.id === 1) {
      setInSouthYorkshire(selectedOptions.includes('yes'))
    }
    
    // Update scores
    const newScores = { ...scores }
    selectedOptions.forEach(optionValue => {
      const option = currentQ.options.find(opt => opt.value === optionValue)
      if (option && option.score) {
        Object.entries(option.score).forEach(([category, score]) => {
          newScores[category] = (newScores[category] || 0) + score
        })
      }
    })
    setScores(newScores)
    
    // Move to next question or complete
    if (currentQuestion < diagnosticQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedOptions([])
    } else {
      // Determine eligibility and recommendations
      completeAssessment(newScores)
    }
  }

  // Handle previous question button
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  // Handle assessment completion
  const completeAssessment = (finalScores: Record<string, number>) => {
    // Special case for businesses outside South Yorkshire
    if (inSouthYorkshire === false) {
      // Penalize South Yorkshire-specific programmes but keep national ones
      finalScores['skills-bank'] = -100; // Not eligible
      finalScores['bespoke-solutions'] -= 30; // Less likely
      finalScores['national-programmes'] += 20; // More relevant
    }
    
    // Apply additional weighting based on business size
    if (businessSize) {
      switch(businessSize) {
        case 'micro':
          finalScores['skills-bank'] += 3;
          finalScores['skills-bootcamps'] += 5;
          break;
        case 'small':
          finalScores['skills-bank'] += 5;
          finalScores['apprenticeships'] += 3;
          break;
        case 'medium':
          finalScores['skills-bank'] += 2;
          finalScores['apprenticeships'] += 5;
          break;
        case 'large':
          finalScores['bespoke-solutions'] += 5;
          finalScores['apprenticeships'] += 4;
          break;
      }
    }
    
    // Determine which programmes the user is eligible for
    const eligibleProgrammes = diagnosticCategories
      .filter(category => finalScores[category.id] >= category.threshold)
      .map(category => category.id)
    
    setEligibleFor(eligibleProgrammes)
    
    // Find top recommendation (highest score)
    if (eligibleProgrammes.length > 0) {
      const topScore = Math.max(...eligibleProgrammes.map(id => finalScores[id]))
      const topProgramme = eligibleProgrammes.find(id => finalScores[id] === topScore) || eligibleProgrammes[0]
      setTopRecommendation(topProgramme)
    }
    
    setCompleted(true)
  }

  // Handle restart
  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setScores({
      'skills-bank': 0,
      'skills-bootcamps': 0,
      'apprenticeships': 0,
      'bespoke-solutions': 0,
      'national-programmes': 0
    })
    setCompleted(false)
    setEligibleFor([])
    setTopRecommendation(null)
    setInSouthYorkshire(null)
    setSelectedOptions([])
    setError(null)
    setBusinessSize(null)
    setTrainingNeeds([])
    setBusinessGoals([])
  }

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / diagnosticQuestions.length) * 100

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl overflow-hidden">
      {!completed ? (
        <div>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-2">
            <div
              className="bg-blue-600 h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="p-6">
            {/* Question counter */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-gray-500">
                Question {currentQuestion + 1} of {diagnosticQuestions.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            
            {/* Question */}
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              {diagnosticQuestions[currentQuestion].question}
            </h3>
            
            {/* Options */}
            <div className="space-y-3 mb-8">
              {diagnosticQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option.value)}
                  className={`w-full text-left p-4 rounded-lg border-2 ${
                    selectedOptions.includes(option.value)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } transition-all`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {selectedOptions.includes(option.value) ? (
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <span className="text-base font-medium text-slate-800">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}
            
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestion === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={handleNextQuestion}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                {currentQuestion === diagnosticQuestions.length - 1 ? 'Get Results' : 'Next'} 
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          {/* Results header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Your Skills Diagnostic Results
            </h2>
            <p className="text-slate-600">
              Based on your responses, we've identified the most suitable training and funding options for your business
            </p>
          </div>
          
          {eligibleFor.length > 0 ? (
            <div className="space-y-6">
              {/* Top recommendation */}
              {topRecommendation && (
                <div className="mb-8 border-2 border-blue-500 rounded-xl overflow-hidden bg-blue-50">
                  <div className="bg-blue-600 p-4 text-white">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Rocket className="mr-2 h-5 w-5" />
                      Top Recommendation
                    </h3>
                  </div>
                  
                  <div className="p-5">
                    {diagnosticCategories
                      .filter(category => category.id === topRecommendation)
                      .map(category => (
                        <div key={category.id}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-full bg-${category.color}-100 flex items-center justify-center flex-shrink-0`}>
                              {React.createElement(category.icon, {
                                className: `h-6 w-6 text-${category.color}-600`
                              })}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-slate-900 mb-1">
                                {category.title}
                              </h4>
                              <p className="text-slate-700 mb-4">
                                {category.description}
                              </p>
                              
                              <div className="mb-4">
                                <h5 className="text-sm font-semibold text-slate-800 mb-2 flex items-center">
                                  <Tag className="mr-2 h-4 w-4" />
                                  Funding Available
                                </h5>
                                <p className="text-sm bg-white p-2 rounded border border-slate-200">
                                  {category.fundingAvailable}
                                </p>
                              </div>
                              
                              <div className="mb-4">
                                <h5 className="text-sm font-semibold text-slate-800 mb-2 flex items-center">
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  Our Recommendation
                                </h5>
                                <p className="text-sm bg-white p-2 rounded border border-slate-200">
                                  {inSouthYorkshire === false && category.id === 'national-programmes' 
                                    ? `As your business is outside South Yorkshire, we recommend focusing on national funding programmes. ${category.recommendation}`
                                    : category.recommendation}
                                </p>
                              </div>
                              
                              <div className="mb-4">
                                <h5 className="text-sm font-semibold text-slate-800 mb-2 flex items-center">
                                  <ListChecks className="mr-2 h-4 w-4" />
                                  Eligibility
                                </h5>
                                <ul className="text-sm bg-white p-2 rounded border border-slate-200 space-y-1">
                                  {category.eligibilityCriteria?.map((criterion, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                      <span>{criterion}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <Link
                                href={category.cta.href}
                                className={`inline-flex items-center px-4 py-2 bg-${category.color}-600 text-white rounded-lg hover:bg-${category.color}-700 transition-colors`}
                              >
                                {category.cta.text}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              {/* Other eligible options */}
              {eligibleFor.length > 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Other Suitable Options
                  </h3>
                  
                  <div className="space-y-4">
                    {eligibleFor
                      .filter(id => id !== topRecommendation)
                      .map(id => {
                        const category = diagnosticCategories.find(cat => cat.id === id)
                        if (!category) return null
                        
                        return (
                          <div key={id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-full bg-${category.color}-100 flex items-center justify-center flex-shrink-0`}>
                                {React.createElement(category.icon, {
                                  className: `h-5 w-5 text-${category.color}-600`
                                })}
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-1">
                                  {category.title}
                                </h4>
                                <p className="text-sm text-slate-600 mb-3">
                                  {category.description}
                                </p>
                                <div className="mb-3">
                                  <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                    {category.fundingAvailable}
                                  </span>
                                </div>
                                <Link
                                  href={category.cta.href}
                                  className="text-blue-600 font-medium text-sm hover:text-blue-800 inline-flex items-center"
                                >
                                  {category.cta.text}
                                  <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              )}
              
              {/* Next steps */}
              <div className="mt-8 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center">
                  <ArrowRight className="mr-2 h-5 w-5 text-blue-600" />
                  Next Steps
                </h3>
                <p className="text-slate-700 mb-4">
                  To proceed with your chosen training option, we recommend:
                </p>
                <ol className="space-y-2 text-sm text-slate-600 list-decimal pl-5">
                  <li>Review the programme details by following the links above</li>
                  <li>Book a consultation with our skills advisors for personalised guidance</li>
                  <li>Prepare documentation about your business and training needs</li>
                  <li>Begin your application process for funding support</li>
                </ol>
              </div>
            </div>
          ) : (
            <div className="text-center p-6 bg-amber-50 border border-amber-200 rounded-xl mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {inSouthYorkshire === false ? 
                  "Limited Funding Options Available" : 
                  "Additional Assessment Needed"}
              </h3>
              <p className="text-slate-700 mb-4">
                {inSouthYorkshire === false ? 
                  "Unfortunately, most of our funding programmes are specifically for businesses based in South Yorkshire. The primary skills and training support we offer is regionally focused." : 
                  "We need more information about your specific business needs to provide accurate recommendations."}
              </p>
              
              {inSouthYorkshire === false && (
                <div className="mb-6 text-left p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Alternative Options:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Explore nationwide Skills Bootcamps which are available to businesses across England</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Consider apprenticeship programmes which offer training support across the UK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Contact your local Growth Hub or LEP who may offer similar support in your region</span>
                    </li>
                  </ul>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Speak to a Skills Advisor
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center px-5 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Restart Diagnostic
                </button>
              </div>
            </div>
          )}
          
          {/* Restart button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleRestart}
              className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
            >
              Start New Diagnostic
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillsDiagnosticTool 