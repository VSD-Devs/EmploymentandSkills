'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, X, ArrowLeft, Sparkles } from 'lucide-react'
import { quizQuestions } from '../data/careerQuizData'
import { sectorData } from '../data/sectors'

// Map quiz paths to sector slugs
const pathToSectorMap: { [key: string]: string } = {
  'tech': 'digital-tech',
  'creative': 'creative-media',
  'healthcare': 'healthcare',
  'manufacturing': 'manufacturing',
  'business': 'business',
  'trades': 'construction',
  'logistics': 'logistics-transport',
  'hospitality': 'hospitality-tourism'
}

interface CareerQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareerQuiz = ({ isOpen, onClose }: CareerQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[][]>([])
  const [showResults, setShowResults] = useState(false)
  const [showIntermediate, setShowIntermediate] = useState(false)
  const [stage, setStage] = useState<1 | 2>(1)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleAnswer = (paths: string[]) => {
    const newAnswers = [...answers, paths]
    
    if (currentQuestion === 4 && stage === 1) {
      setAnswers(newAnswers)
      setShowIntermediate(true)
    } else if (currentQuestion < quizQuestions.length - 1 && stage === 2) {
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
    } else if (currentQuestion === 9 && stage === 2) {
      setAnswers(newAnswers)
      setShowResults(true)
    } else {
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const startSecondStage = () => {
    setStage(2)
    setShowIntermediate(false)
    setCurrentQuestion(5)
  }

  const skipSecondStage = () => {
    setShowResults(true)
    setShowIntermediate(false)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setShowIntermediate(false)
    setStage(1)
  }

  const getRecommendedPaths = () => {
    const pathCount: { [key: string]: number } = {}
    
    // Count occurrences of each career path
    answers.forEach(pathArray => {
      pathArray.forEach(path => {
        pathCount[path] = (pathCount[path] || 0) + 1
      })
    })
    
    // Sort paths by count and get top 3
    return Object.entries(pathCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([path]) => path)
  }

  const getPathwaySlug = (path: string) => {
    return pathToSectorMap[path] || path
  }

  const getPathwayInfo = (path: string) => {
    const slug = getPathwaySlug(path)
    const sector = sectorData[slug]
    return {
      title: sector?.title || path.replace('-', ' '),
      description: sector?.description || `Explore opportunities in Yorkshire's ${path.replace('-', ' ')} sector`
    }
  }

  const renderPathwayCards = (paths: string[]) => (
    <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-8">
      {paths.map((path, index) => {
        const pathInfo = getPathwayInfo(path)
        const pathwaySlug = getPathwaySlug(path)
        return (
          <Link
            key={index}
            href={`/pathways/${pathwaySlug}`}
            className="group bg-white p-4 md:p-6 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2 capitalize">
              {pathInfo.title}
            </h3>
            <p className="text-zinc-600 mb-4 line-clamp-3">
              {pathInfo.description}
            </p>
            <div className="flex items-center text-emerald-600 group-hover:text-emerald-500">
              <span className="font-medium">Explore pathway</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </div>
          </Link>
        )
      })}
    </div>
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex md:items-center justify-center overflow-hidden">
      <div className="relative w-full h-full md:h-auto md:max-w-4xl md:mx-4 md:my-8">
        <div className="relative h-full md:h-auto bg-white md:rounded-2xl shadow-2xl overflow-auto">
          {/* Mobile-friendly header with back/close button */}
          <div className="sticky top-0 z-10 bg-white border-b border-zinc-100 px-4 py-4 md:hidden">
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  if (currentQuestion > 0 && !showResults && !showIntermediate) {
                    setCurrentQuestion(currentQuestion - 1)
                  } else {
                    resetQuiz()
                    onClose()
                  }
                }}
                className="p-2 -ml-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label={currentQuestion > 0 ? "Previous question" : "Close quiz"}
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <span className="font-medium text-zinc-900">Career Quiz</span>
              <button
                onClick={() => {
                  resetQuiz()
                  onClose()
                }}
                className="p-2 -mr-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label="Close quiz"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Desktop close button */}
          <button
            onClick={() => {
              resetQuiz()
              onClose()
            }}
            className="hidden md:flex items-center justify-center absolute -top-3 -right-3 w-10 h-10 bg-zinc-900 text-white hover:bg-zinc-800 rounded-full transition-colors shadow-lg border-2 border-white"
            aria-label="Close quiz"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-4 md:p-8 md:pt-12">
            {showResults ? (
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Your Career Recommendations</h2>
                <p className="text-zinc-600 mb-8">
                  Based on your answers, here are the career paths that might interest you:
                </p>
                
                {renderPathwayCards(getRecommendedPaths())}

                <div className="flex justify-between items-center pt-6 border-t border-zinc-100">
                  <button
                    onClick={resetQuiz}
                    className="text-emerald-600 font-medium hover:text-emerald-500"
                  >
                    Retake Quiz
                  </button>
                  <Link
                    href="/pathways"
                    className="inline-flex items-center text-white bg-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors"
                    onClick={onClose}
                  >
                    Explore All Pathways
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ) : showIntermediate ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900">Initial Results</h2>
                </div>
                
                <p className="text-zinc-600 mb-8">
                  Based on your first 5 answers, here are some career paths that might interest you. 
                  Would you like to answer 5 more questions for more accurate results?
                </p>

                {renderPathwayCards(getRecommendedPaths())}

                <div className="flex justify-between items-center pt-6 border-t border-zinc-100">
                  <button
                    onClick={skipSecondStage}
                    className="text-emerald-600 font-medium hover:text-emerald-500"
                  >
                    Keep These Results
                  </button>
                  <button
                    onClick={startSecondStage}
                    className="inline-flex items-center text-white bg-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors"
                  >
                    Get More Accurate Results
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Progress indicator */}
                <div className="mb-8">
                  <div className="hidden md:flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-zinc-900">
                      Question {currentQuestion + 1} 
                      <span className="text-zinc-400 ml-2">
                        (Stage {stage} of 2)
                      </span>
                    </h2>
                    <span className="text-zinc-500">
                      {currentQuestion + 1} of {stage === 1 ? 5 : 10}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${stage === 1 
                          ? ((currentQuestion + 1) / 5) * 100 
                          : ((currentQuestion + 1) / 10) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                  <div className="grid gap-3 md:gap-4">
                    {quizQuestions[currentQuestion].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.paths)}
                        className="text-left p-4 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors active:bg-emerald-100"
                      >
                        <span className="font-medium text-zinc-900">{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex justify-between items-center pt-6 border-t border-zinc-100">
                  <button
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="text-zinc-600 font-medium hover:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <div className="text-sm text-zinc-500">
                    Your answers are saved automatically
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerQuiz