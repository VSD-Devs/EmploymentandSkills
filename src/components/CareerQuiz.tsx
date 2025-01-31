'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: 'What type of work environment do you prefer?',
    options: [
      { id: 'a', text: 'Office-based with a team', sector: ['digital', 'business'] },
      { id: 'b', text: 'Active and hands-on', sector: ['healthcare', 'manufacturing'] },
      { id: 'c', text: 'Creative studio space', sector: ['creative', 'digital'] },
      { id: 'd', text: 'Mixed environments', sector: ['education', 'healthcare'] }
    ]
  },
  {
    id: 2,
    question: 'Which skills do you most enjoy using?',
    options: [
      { id: 'a', text: 'Problem-solving and analysis', sector: ['digital', 'engineering'] },
      { id: 'b', text: 'Communication and helping others', sector: ['healthcare', 'education'] },
      { id: 'c', text: 'Creative and design skills', sector: ['creative', 'digital'] },
      { id: 'd', text: 'Technical and practical skills', sector: ['manufacturing', 'engineering'] }
    ]
  },
  {
    id: 3,
    question: 'What interests you most about future industries?',
    options: [
      { id: 'a', text: 'Technology and innovation', sector: ['digital', 'engineering'] },
      { id: 'b', text: 'Sustainability and environment', sector: ['green', 'manufacturing'] },
      { id: 'c', text: 'Healthcare and wellbeing', sector: ['healthcare', 'science'] },
      { id: 'd', text: 'Creative and cultural impact', sector: ['creative', 'digital'] }
    ]
  }
]

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (sectorArray: string[]) => {
    const newAnswers = [...answers, ...sectorArray]
    
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setAnswers(newAnswers)
      setShowResults(true)
    }
  }

  const getRecommendedSectors = () => {
    const sectorCount: { [key: string]: number } = {}
    answers.forEach(sector => {
      sectorCount[sector] = (sectorCount[sector] || 0) + 1
    })
    
    return Object.entries(sectorCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([sector]) => sector)
  }

  if (showResults) {
    const recommendedSectors = getRecommendedSectors()
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Career Recommendations</h2>
          <p className="text-gray-600 mb-8">
            Based on your answers, here are the sectors that might interest you:
          </p>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {recommendedSectors.map((sector, index) => (
              <Link
                key={index}
                href={`/careers/${sector}`}
                className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">
                  {sector} Sector
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore opportunities in Yorkshire\'s {sector} industry
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-500">
                  <span className="font-medium">Learn more</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers([])
                setShowResults(false)
              }}
              className="text-blue-600 font-medium hover:text-blue-500"
            >
              Retake Quiz
            </button>
            <Link
              href="/careers"
              className="inline-flex items-center text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Explore All Careers
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Career Quiz</h2>
            <span className="text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {questions[currentQuestion].question}
          </h3>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.sector)}
                className="text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="text-gray-600 font-medium hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="text-sm text-gray-500">
            Your answers are saved automatically
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerQuiz