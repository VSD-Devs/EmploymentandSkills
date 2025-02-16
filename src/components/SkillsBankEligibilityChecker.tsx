'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, XCircle, HelpCircle } from 'lucide-react'
import Link from 'next/link'

interface Question {
  id: string
  text: string
  options: {
    value: string
    label: string
  }[]
}

const questions: Question[] = [
  {
    id: 'location',
    text: 'Is your business based in South Yorkshire?',
    options: [
      { value: 'yes', label: 'Yes, based in Sheffield, Rotherham, Doncaster, or Barnsley' },
      { value: 'no', label: 'No, based elsewhere' }
    ]
  },
  {
    id: 'businessStatus',
    text: 'What is your business status?',
    options: [
      { value: 'registered', label: 'Registered business' },
      { value: 'self-employed', label: 'Self-employed' },
      { value: 'social-enterprise', label: 'Social enterprise' },
      { value: 'charity', label: 'Charity' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'growthPlans',
    text: 'Do you have clear business growth plans?',
    options: [
      { value: 'yes', label: 'Yes, we have defined growth objectives' },
      { value: 'partial', label: 'We are developing our growth strategy' },
      { value: 'no', label: 'No clear growth plans yet' }
    ]
  },
  {
    id: 'skillsGaps',
    text: 'Have you identified skills gaps in your organisation?',
    options: [
      { value: 'yes', label: 'Yes, we have specific training needs' },
      { value: 'partial', label: 'We are currently assessing our needs' },
      { value: 'no', label: 'No skills gaps identified' }
    ]
  }
]

export default function SkillsBankEligibilityChecker() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [isEligible, setIsEligible] = useState<boolean | null>(null)

  const handleAnswer = (value: string) => {
    // Create updated answers first
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value
    }
    
    // Update state immediately
    setAnswers(newAnswers)
    console.log('Updated answers:', newAnswers)

    // Check location first
    if (questions[currentQuestion].id === 'location' && value === 'no') {
      setIsEligible(false)
      setShowResults(true)
      return
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Use the newAnswers we just created rather than state
      const eligible = checkEligibility(newAnswers)
      console.log('Final eligibility result:', eligible)
      setIsEligible(eligible)
      setShowResults(true)
    }
  }

  const checkEligibility = (answers: Record<string, string>) => {
    console.log('Checking eligibility with answers:', answers)
    
    // Must be based in South Yorkshire
    if (answers.location !== 'yes') {
      console.log('Failed at location check')
      return false
    }

    // Must be a registered business type
    const validBusinessTypes = ['registered', 'self-employed', 'social-enterprise', 'charity']
    if (!validBusinessTypes.includes(answers.businessStatus)) {
      console.log('Failed at business status check')
      return false
    }

    // Must have at least partial growth plans
    if (!['yes', 'partial'].includes(answers.growthPlans)) {
      console.log('Failed at growth plans check')
      return false
    }

    // Must have at least partial skills gaps identified
    if (!['yes', 'partial'].includes(answers.skillsGaps)) {
      console.log('Failed at skills gaps check')
      return false
    }

    console.log('All checks passed - eligible!')
    return true
  }

  const resetChecker = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const isLocationIneligible = answers.location === 'no'

    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <div className="text-center mb-8">
          {isEligible ? (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Great News! You're Eligible</h3>
              <p className="text-gray-600 mb-8">
                Based on your answers, your business meets all the criteria for Skills Bank funding. Our Skills Advisors will help you access up to 60% funding for your training needs.
              </p>
            </>
          ) : isLocationIneligible ? (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
                <XCircle className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Eligible for Skills Bank Funding</h3>
              <p className="text-gray-600 mb-8">
                Unfortunately, Skills Bank funding is only available to businesses based in South Yorkshire (Sheffield, Rotherham, Doncaster, or Barnsley). We encourage you to explore other funding opportunities in your local area.
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                <HelpCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Talk About Your Needs</h3>
              <p className="text-gray-600 mb-8">
                While you may not meet all our standard criteria, we'd still like to understand your business needs. Our Skills Advisors can help explore alternative support options.
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!isLocationIneligible && (
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              Speak to an Advisor
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          )}
          <button
            onClick={resetChecker}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Check Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Eligibility Checker</h3>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <p className="text-lg text-gray-700 font-medium mb-2">{questions[currentQuestion].text}</p>
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-2 bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
} 