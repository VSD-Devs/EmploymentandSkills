'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, X, ArrowLeft, Sparkles } from 'lucide-react'
import { quizQuestions, careerProfiles, sectorToRoles } from '../data/careerQuizData'
import { sectorData } from '../data/sectors'
import { careerPaths } from '../data/careerPaths'
import { roleData } from '@/data/roles'
import type { CareerProfile } from '../data/careerQuizData'

// Map quiz paths to sector slugs
const pathToSectorMap: { [key: string]: string } = {
  'tech': 'digital-tech',
  'creative': 'creative-media',
  'healthcare': 'healthcare',
  'manufacturing': 'manufacturing',
  'business-finance': 'business-finance',
  'trades': 'construction',
  'logistics': 'logistics-transport',
  'hospitality': 'hospitality-tourism'
}

interface CareerQuizProps {
  // No props needed anymore
}

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[][]>([])
  const [showResults, setShowResults] = useState(false)
  const [showIntermediate, setShowIntermediate] = useState(false)
  const [stage, setStage] = useState<1 | 2>(1)

  const traitDescriptions: { [key: string]: string } = {
    analytical: 'strong analytical and logical thinking abilities',
    'problem-solving': 'excellent problem-solving capabilities',
    technical: 'natural aptitude for technical concepts',
    creative: 'creative and innovative mindset',
    innovative: 'forward-thinking approach to challenges',
    artistic: 'strong artistic sensibilities',
    caring: 'genuine care for others\' wellbeing',
    'detail-oriented': 'meticulous attention to detail',
    responsible: 'high sense of responsibility',
    leadership: 'natural leadership qualities',
    strategic: 'strategic thinking abilities',
    practical: 'hands-on practical approach',
    patient: 'patient and understanding nature',
    communicative: 'excellent communication skills',
    organised: 'strong organisational abilities'
  }

  const handleAnswer = (paths: string[]) => {
    const newAnswers = [...answers, paths]
    
    if (currentQuestion === 4) {
      setAnswers(newAnswers)
      setShowIntermediate(true)
    } else if (currentQuestion === 9) {
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
    setShowResults(false)
    // Add scroll to top
    const quizContainer = document.querySelector('.quiz-scroll-container')
    if (quizContainer) {
      quizContainer.scrollTop = 0
    }
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
    // Add scroll to top
    const quizContainer = document.querySelector('.quiz-scroll-container')
    if (quizContainer) {
      quizContainer.scrollTop = 0
    }
  }

  const getRecommendedPaths = () => {
    const pathCount: { [key: string]: number } = {}
    const traitCount: { [key: string]: number } = {}
    
    // Count occurrences of each career path
    answers.forEach(pathArray => {
      pathArray.forEach(path => {
        pathCount[path] = (pathCount[path] || 0) + 1
      })
    })
    
    // Sort paths by count and get top 3
    const topPaths = Object.entries(pathCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([path]) => path)

    // Get recommended roles based on top paths
    const recommendedRoles = topPaths
      .flatMap(path => {
        const sectorSlug = pathToSectorMap[path] || path
        return sectorToRoles[sectorSlug] || []
      })
      .filter((role, index, self) => self.indexOf(role) === index) // Remove duplicates

    // Get profile type based on paths
    const profileType = getProfileType(topPaths)
    const profile = careerProfiles[profileType]
      
    return {
      paths: topPaths,
      roles: recommendedRoles,
      profile: profile,
      allTraits: Object.keys(traitCount)
    }
  }

  const getProfileType = (paths: string[]): string => {
    const profileScores: { [key: string]: number } = {}
    
    // Score each profile based on matching sectors
    Object.entries(careerProfiles).forEach(([profile, data]) => {
      const matchingPaths = paths.filter(path => {
        const sectorSlug = pathToSectorMap[path] || path
        return data.recommendedSectors.includes(sectorSlug)
      })
      profileScores[profile] = matchingPaths.length
    })

    // Find the profile with the highest score
    return Object.entries(profileScores)
      .sort(([,a], [,b]) => b - a)[0][0]
  }

  const getPersonalitySummary = (traits: string[]) => {
    return traits.map(trait => traitDescriptions[trait] || trait).join(', ')
  }

  const getSectorInsights = (paths: string[]) => {
    return paths.map(path => {
      const slug = getPathwaySlug(path)
      const sector = sectorData[slug]
      if (!sector) return null

      return {
        title: sector.title,
        description: sector.description,
        stats: sector.stats || [],
        skills: {
          general: sector.skills?.general || [],
          specialist: sector.skills?.specialist || []
        },
        careerProgression: sector.careerProgression || []
      }
    }).filter(Boolean)
  }

  const getPathwaySlug = (path: string): string => {
    const pathwayMap: { [key: string]: string } = {
      'Technology': 'digital-tech',
      'Healthcare': 'health-care',
      'Engineering': 'engineering',
      'Business': 'business',
      'Creative': 'creative',
      'Education': 'education',
      'Construction': 'construction',
      'Manufacturing': 'manufacturing'
    };
    return pathwayMap[path] || 'digital-tech'; // Default to digital-tech if no match
  }

  const getPathwayInfo = (path: string) => {
    const slug = getPathwaySlug(path)
    const sector = sectorData[slug]
    return {
      title: sector?.title || path.replace('-', ' '),
      description: sector?.description || `Explore opportunities in Yorkshire's ${path.replace('-', ' ')} sector`
    }
  }

  const getRoleSector = (roleSlug: string): string => {
    // Use the roleToSector mapping from CareerQuizResults
    const roleToSector: { [key: string]: string } = {
      'hospitality-manager': 'hospitality-tourism',
      'events-coordinator': 'hospitality-tourism',
      'data-analyst': 'digital-tech',
      'junior-developer': 'digital-tech',
      'software-developer': 'digital-tech',
      'digital-project-manager': 'digital-tech',
      'healthcare-assistant': 'healthcare',
      'care-worker': 'healthcare',
      'support-worker': 'healthcare',
      'registered-nurse': 'healthcare',
      'specialist-practitioner': 'healthcare',
      'team-leader': 'business-finance',
      'financial-advisor': 'business-finance',
      'manufacturing-technician': 'manufacturing',
      'production-supervisor': 'manufacturing',
      'manufacturing-engineer': 'manufacturing',
      'site-supervisor': 'construction',
      'project-manager': 'construction',
      'construction-manager': 'construction',
      'digital-designer': 'creative-media',
      'content-creator': 'creative-media'
    };
    
    const sector = roleToSector[roleSlug];
    if (!sector) {
      console.error(`No sector mapping found for role: ${roleSlug}`);
      return 'digital-tech';
    }
    return sector;
  };

  const renderResults = () => {
    const recommendations = getRecommendedPaths()
    const { profile, roles } = recommendations
    const isDetailedAnalysis = stage === 2

    return (
      <div className="max-w-5xl">
        {!isDetailedAnalysis && (
          <div className="bg-emerald-50 rounded-2xl p-6 mb-8 border-2 border-emerald-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold">1/2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900">Initial Career Matches</h3>
                  <p className="text-emerald-700">Complete stage 2 for a detailed career profile and personalised recommendations</p>
                </div>
              </div>
              <button
                onClick={startSecondStage}
                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl"
              >
                Continue to Stage 2
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Profile Summary */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900">Your Career Profile</h3>
          </div>
          
          {isDetailedAnalysis ? (
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-zinc-800 mb-3">Comprehensive Profile Analysis</h4>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  {profile.description} Your responses throughout both stages of the assessment indicate a strong alignment with careers that require these qualities. The second stage of questions has helped refine these matches to ensure they align closely with your specific strengths and preferences.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-zinc-800 mb-3">Key Professional Traits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.traits.map((trait, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4 text-emerald-700" />
                      </div>
                      <span className="text-zinc-700">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-800 mb-3">Sector Compatibility Analysis</h4>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  Based on your comprehensive profile, you show particularly high compatibility with roles in these sectors. Each sector offers unique opportunities that align with your traits:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {profile.recommendedSectors.map((sector, index) => (
                    <div key={index} className="bg-white/50 rounded-xl p-4">
                      <h5 className="font-medium text-emerald-800 mb-2">
                        {sector.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </h5>
                      <p className="text-sm text-zinc-600">
                        Your {profile.traits[index] || profile.traits[0]} would be particularly valuable in this sector.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-zinc-800 mb-3">Initial Profile Analysis</h4>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  {profile.description} These initial matches are based on your responses to the first set of questions. Continue to the detailed assessment for a more comprehensive analysis.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-zinc-800 mb-3">Key Traits Identified</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-zinc-800 mb-3">Initial Sector Matches</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.recommendedSectors.map((sector, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-emerald-800"
                    >
                      {sector.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recommended Roles */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-zinc-900">Recommended Roles</h3>
            {!isDetailedAnalysis && (
              <p className="text-zinc-600">Continue for detailed role analysis</p>
            )}
          </div>
          <div className="grid gap-6">
            {roles.map((roleSlug) => {
              const role = roleData[roleSlug]
              if (!role) return null

              return (
                <Link
                  key={roleSlug}
                  href={`/pathways/${getRoleSector(roleSlug)}/roles/${roleSlug}`}
                  onClick={resetQuiz}
                  className="block bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {role.title}
                    </h4>
                    <p className="text-emerald-100 mb-6">{role.description}</p>
                    
                    <div className="mb-6 p-4 bg-emerald-700/50 rounded-xl backdrop-blur-sm">
                      <h5 className="text-base font-medium text-white mb-2">Why This Role Matches You</h5>
                      {isDetailedAnalysis ? (
                        <div className="space-y-3">
                          <p className="text-emerald-100">
                            Your {profile.traits.slice(0, 2).join(' and ')} align perfectly with the requirements of a {role.title.toLowerCase()}. 
                            This role particularly benefits from {profile.traits[2] || profile.traits[0]}, which you've demonstrated consistently in your responses.
                          </p>
                          <p className="text-emerald-100">
                            Your answers in the detailed assessment showed strong alignment with the key responsibilities and work environment of this role.
                          </p>
                        </div>
                      ) : (
                        <p className="text-emerald-100">
                          Your {profile.traits[0]} and {profile.traits[1]} suggest you would excel in this role. Complete the detailed assessment to learn more about specific role requirements and opportunities.
                        </p>
                      )}
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-emerald-700/30 rounded-lg p-3">
                        <h5 className="font-medium text-white mb-1">Entry Level</h5>
                        <p className="text-emerald-100">{role.salary.entry}</p>
                      </div>
                      <div className="bg-emerald-700/30 rounded-lg p-3">
                        <h5 className="font-medium text-white mb-1">Experienced</h5>
                        <p className="text-emerald-100">{role.salary.experienced}</p>
                      </div>
                      <div className="bg-emerald-700/30 rounded-lg p-3">
                        <h5 className="font-medium text-white mb-1">Senior Level</h5>
                        <p className="text-emerald-100">{role.salary.senior}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium text-white mb-2">Key Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-700/30 text-emerald-50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {isDetailedAnalysis && (
                      <div className="mb-4">
                        <h5 className="font-medium text-white mb-2">Entry Routes</h5>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-emerald-700/30">
                            <h6 className="font-medium text-white mb-2">{role.paths.university.title}</h6>
                            <p className="text-sm text-emerald-100">{role.paths.university.description}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-emerald-700/30">
                            <h6 className="font-medium text-white mb-2">{role.paths.apprenticeship.title}</h6>
                            <p className="text-sm text-emerald-100">{role.paths.apprenticeship.description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="inline-flex items-center text-emerald-100 group">
                      <span className="group-hover:underline">View full role details</span>
                      <ChevronRight className="ml-1 h-5 w-5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {isDetailedAnalysis && (
          <div className="mt-12 bg-zinc-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-medium text-zinc-700 mb-3">Recommended Actions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-600">Explore detailed job roles in your recommended sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-600">Research training and qualification requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-600">Connect with professionals in your chosen sectors</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-medium text-zinc-700 mb-3">Available Support</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-600">Career guidance and mentoring programmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-600">Skills development workshops and courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-600">Industry networking events and job fairs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-8 mt-8 border-t border-zinc-100">
          <button
            onClick={resetQuiz}
            className="text-lg text-emerald-600 font-medium hover:text-emerald-500"
          >
            Retake Quiz
          </button>
          <Link
            href="/pathways"
            className="inline-flex items-center text-lg text-white bg-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Pathways
            <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    )
  }

  // Filter questions based on current stage
  const currentStageQuestions = quizQuestions.filter(q => q.stage === stage)

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-zinc-100">
      <div className="quiz-scroll-container">
        <div className="p-6 md:p-8 lg:p-12">
          {showResults ? (
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Your Career Recommendations</h2>
              <p className="text-lg text-zinc-600 mb-10">
                Based on your answers, here are the career paths that might interest you:
              </p>
              
              {renderResults()}
            </div>
          ) : showIntermediate ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Great progress! Ready for more insights?
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                You've completed the first stage of questions. Continue to stage 2 for more personalised career recommendations.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button
                  onClick={startSecondStage}
                  className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium text-lg"
                >
                  Continue to Stage 2
                </button>
                <button
                  onClick={() => setShowResults(true)}
                  className="px-8 py-4 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-200 transition-colors font-medium text-lg"
                >
                  See Current Results
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Progress indicator */}
              <div className="mb-10">
                <div className="hidden md:flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-zinc-900">
                    Question {stage === 1 ? currentQuestion + 1 : currentQuestion - 4} 
                    <span className="text-zinc-400 ml-3">
                      (Stage {stage} of 2)
                    </span>
                  </h2>
                  <span className="text-lg text-zinc-500">
                    {stage === 1 ? currentQuestion + 1 : currentQuestion - 4} of 5
                  </span>
                </div>
                <div className="w-full bg-zinc-200 rounded-full h-3">
                  <div
                    className="bg-emerald-600 h-3 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((stage === 1 ? currentQuestion + 1 : currentQuestion - 4) / 5) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-zinc-900 mb-8">
                  {currentStageQuestions[stage === 1 ? currentQuestion : currentQuestion - 5].question}
                </h3>
                <div className="grid gap-4">
                  {currentStageQuestions[stage === 1 ? currentQuestion : currentQuestion - 5].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.paths)}
                      className="text-left p-6 rounded-xl border-2 border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors active:bg-emerald-100"
                    >
                      <span className="text-lg font-medium text-zinc-900">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex justify-between items-center pt-8 border-t border-zinc-100">
                <button
                  onClick={() => setCurrentQuestion(Math.max(stage === 1 ? 0 : 5, currentQuestion - 1))}
                  disabled={currentQuestion === (stage === 1 ? 0 : 5)}
                  className="text-lg text-zinc-600 font-medium hover:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <div className="text-base text-zinc-500">
                  Your answers are saved automatically
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CareerQuiz