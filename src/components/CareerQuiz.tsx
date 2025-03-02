'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, X, ArrowLeft, Sparkles, CheckCircle, Target, Compass, ArrowUpRight, ArrowRight } from 'lucide-react'
import { quizQuestions, careerProfiles, sectorToRoles } from '../data/careerQuizData'
import { sectorData } from '../data/sectors'
import { roleData } from '@/data/roles'
import type { CareerProfile } from '../data/careerQuizData'

// Add type definitions
type Trait = string;
type SectorSlug = string;

interface ProfileData {
  description: string;
  traits: Trait[];
  recommendedSectors: SectorSlug[];
}

// Add types for quiz questions and options
interface QuizOption {
  id: string;
  text: string;
  paths: string[];
  description?: string;
  icon?: string;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
  stage: 1 | 2;
  explanation?: string;
}

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
  isOpen: boolean;
  onClose: () => void;
}

const CareerQuiz: React.FC<CareerQuizProps> = ({ isOpen, onClose }) => {
  const [showFrontPage, setShowFrontPage] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[][]>([])
  const [showResults, setShowResults] = useState(false)
  const [showIntermediate, setShowIntermediate] = useState(false)
  const [stage, setStage] = useState<1 | 2>(1)

  // Load saved state on mount
  useEffect(() => {
    if (isOpen) {
      const savedState = localStorage.getItem('careerQuizState')
      if (savedState) {
        const { answers, stage, showResults } = JSON.parse(savedState)
        setAnswers(answers)
        setStage(stage)
        setShowResults(true)
        setShowFrontPage(false)
        localStorage.removeItem('careerQuizState') // Clear after restoring
      }
    }
  }, [isOpen])

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

  // Add useEffect to handle chatbot visibility and body scroll
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when quiz is open
      document.body.style.overflow = 'hidden';
      
      // Hide chatbot when quiz is open
      const chatbotElement = document.querySelector('[data-component="chatbot"]');
      if (chatbotElement) {
        chatbotElement.classList.add('hidden');
      }
    } else {
      // Re-enable body scroll when quiz is closed
      document.body.style.overflow = '';
      
      // Show chatbot when quiz is closed
      const chatbotElement = document.querySelector('[data-component="chatbot"]');
      if (chatbotElement) {
        chatbotElement.classList.remove('hidden');
      }
    }

    // Cleanup function to ensure chatbot is visible when component unmounts
    return () => {
      document.body.style.overflow = '';
      const chatbotElement = document.querySelector('[data-component="chatbot"]');
      if (chatbotElement) {
        chatbotElement.classList.remove('hidden');
      }
    };
  }, [isOpen]);

  const handleAnswer = (paths: string[]) => {
    const newAnswers = [...answers, paths]
    setShowFrontPage(false)
    
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

  // Save state before navigating to role
  const handleRoleClick = () => {
    const stateToSave = {
      answers,
      stage,
      showResults: true
    }
    localStorage.setItem('careerQuizState', JSON.stringify(stateToSave))
    onClose()
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
    setShowFrontPage(true)
    // Add scroll to top
    const quizContainer = document.querySelector('.quiz-scroll-container')
    if (quizContainer) {
      quizContainer.scrollTop = 0
    }
  }

  const startQuiz = () => {
    setShowFrontPage(false)
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

  const renderFrontPage = () => {
    return (
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Compass className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Career Pathways Quiz
          </h2>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
            Take our comprehensive career assessment to discover career paths that align with your skills, interests, and personal traits.
          </p>
        </div>

        <div className="bg-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border-2 border-emerald-100">
          <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-4">
            About This Assessment
          </h3>
          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-emerald-800">1</span>
              </div>
              <div>
                <h4 className="font-medium text-base text-zinc-900 mb-1">Two-Stage Assessment</h4>
                <p className="text-sm md:text-base text-zinc-600">
                  The quiz has two stages: personality traits (5 questions) and skills assessment (5 questions) to provide tailored recommendations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-emerald-800">2</span>
              </div>
              <div>
                <h4 className="font-medium text-base text-zinc-900 mb-1">Personalised Results</h4>
                <p className="text-sm md:text-base text-zinc-600">
                  You'll receive personalised career recommendations, detailed role information, and next steps based on your profile.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-emerald-800">3</span>
              </div>
              <div>
                <h4 className="font-medium text-base text-zinc-900 mb-1">Time Required</h4>
                <p className="text-sm md:text-base text-zinc-600">
                  The assessment takes approximately 5-10 minutes to complete. You can complete just stage 1 or both stages.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border-2 border-zinc-200">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-800 mb-4">
            Data Privacy Information
          </h3>
          <p className="text-sm md:text-base text-zinc-600 mb-4">
            We care about your privacy. Here's how we handle the data collected in this assessment:
          </p>
          <ul className="space-y-2 md:space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-zinc-600">
                Your results are stored locally on your device only
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-zinc-600">
                No personal identifiable information is collected
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-zinc-600">
                We use anonymous assessment data to improve our recommendations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-zinc-600">
                You can retake the assessment at any time
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={startQuiz}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-4 md:px-8 md:py-4 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg font-medium text-base md:text-lg group"
          >
            <span>Start Career Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-sm text-zinc-500">
            Takes approximately 5-10 minutes to complete
          </p>
        </div>
      </div>
    )
  }

  const renderResults = () => {
    const recommendations = getRecommendedPaths()
    const { profile, roles, paths } = recommendations
    const isDetailedAnalysis = stage === 2

    return (
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {!isDetailedAnalysis && (
          <div className="bg-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-emerald-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold">1/2</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-900">Initial Career Matches</h3>
                  <p className="text-sm md:text-base text-emerald-700">Complete stage 2 for a detailed career profile and personalised recommendations</p>
                </div>
              </div>
              <button
                onClick={startSecondStage}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full md:w-auto px-4 py-3 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-emerald-500 transition-colors shadow-md md:shadow-lg group"
              >
                <span>Continue to Stage 2</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Enhanced match score visualization */}
        <div className="bg-white rounded-xl md:rounded-2xl border-2 border-zinc-100 p-4 md:p-6 mb-6 md:mb-8 shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-3 md:mb-4">Your Career Match Scores</h3>
          <div className="space-y-4">
            {paths.map((path, index) => {
              const sectorSlug = pathToSectorMap[path] || path;
              const sector = sectorData[sectorSlug];
              const matchScore = 100 - (index * 15); // Simple scoring algorithm
              
              return (
                <div key={path} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-medium text-zinc-800">{sector?.title || path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    <span className="text-sm font-semibold text-emerald-700">{matchScore}% Match</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 rounded-full"
                      style={{ width: `${matchScore}%` }}
                    ></div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-500">
                    {sector?.description?.slice(0, 100) || `Careers in the ${path.replace(/-/g, ' ')} sector align with your profile`}{sector?.description?.length > 100 ? '...' : ''}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profile Summary - now with more detailed insights */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">Your Career Profile</h3>
          </div>
          
          {isDetailedAnalysis ? (
            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Comprehensive Profile Analysis</h4>
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                  {profile.description} Your responses throughout both stages of the assessment indicate a strong alignment with careers that require these qualities. The second stage of questions has helped refine these matches to ensure they align closely with your specific strengths and preferences.
                </p>
              </div>
              
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Key Professional Traits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {profile.traits.map((trait, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-emerald-700" />
                      </div>
                      <span className="text-sm md:text-base text-zinc-700">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Sector Compatibility Analysis</h4>
                <p className="text-sm md:text-base text-zinc-700 leading-relaxed mb-3 md:mb-4">
                  Based on your comprehensive profile, you show particularly high compatibility with roles in these sectors. Each sector offers unique opportunities that align with your traits:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {profile.recommendedSectors.map((sector, index) => (
                    <div key={index} className="bg-white/50 rounded-lg md:rounded-xl p-3 md:p-4">
                      <h5 className="font-medium text-sm md:text-base text-emerald-800 mb-1 md:mb-2">
                        {sector.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </h5>
                      <p className="text-xs md:text-sm text-zinc-600">
                        Your {profile.traits[index] || profile.traits[0]} would be particularly valuable in this sector.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* New: Yorkshire-specific insights */}
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Yorkshire Career Landscape</h4>
                <div className="bg-white/60 rounded-lg md:rounded-xl p-4 md:p-5">
                  <p className="text-sm md:text-base text-zinc-700 mb-3">
                    Based on your profile, here's how your career matches align with opportunities in Yorkshire:
                  </p>
                  <div className="space-y-3">
                    {paths.slice(0, 2).map((path, index) => {
                      const sectorSlug = pathToSectorMap[path] || path;
                      const sector = sectorData[sectorSlug];
                      return (
                        <div key={path} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-semibold text-emerald-700">{index + 1}</span>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-zinc-900">{sector?.title || path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h5>
                            <p className="text-xs text-zinc-600">
                              {`Yorkshire has a growing ${path.replace(/-/g, ' ')} sector with opportunities for professionals with your skills.`}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Initial Profile Analysis</h4>
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                  {profile.description} These initial matches are based on your responses to the first set of questions. Continue to the detailed assessment for a more comprehensive analysis.
                </p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Key Traits Identified</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-emerald-100 text-emerald-800"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Initial Sector Matches</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.recommendedSectors.map((sector, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-white text-emerald-800"
                    >
                      {sector.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* New: Brief Yorkshire context */}
              <div>
                <h4 className="text-base md:text-lg font-medium text-zinc-800 mb-2 md:mb-3">Yorkshire Opportunities</h4>
                <p className="text-sm md:text-base text-zinc-700 mb-3">
                  Yorkshire offers diverse career paths across multiple industries. Complete the second stage for region-specific insights related to your profile.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Recommended Roles - Enhanced with more details */}
        <div className="space-y-4 md:space-y-8">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-2">Recommended Roles</h3>
            <p className="text-base text-zinc-600 max-w-3xl mx-auto">
              Based on your profile, these roles in Yorkshire would be an excellent match for your skills and interests
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {roles.map((roleSlug) => {
              const role = roleData[roleSlug]
              if (!role) return null

              return (
                <Link
                  key={roleSlug}
                  href={`/pathways/${getRoleSector(roleSlug)}/roles/${roleSlug}`}
                  onClick={handleRoleClick}
                  className="block bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="p-4 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 md:mb-6">
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                          {role.title}
                        </h4>
                        <p className="text-sm md:text-base text-emerald-100 mb-2">{role.description}</p>
                        
                        {/* New: Location context */}
                        <div className="flex items-center text-xs text-emerald-200 gap-1 mb-4">
                          <span>Popular in: </span>
                          <span className="bg-emerald-700/50 px-2 py-0.5 rounded-full">Yorkshire</span>
                          {(role as any).popularLocations?.map((location: string, idx: number) => (
                            <span key={idx} className="bg-emerald-700/50 px-2 py-0.5 rounded-full">{location}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="hidden md:block md:flex-shrink-0 px-3 py-2 bg-emerald-700/50 rounded-lg backdrop-blur-sm self-start">
                        <span className="text-xs uppercase tracking-wide text-emerald-200">
                          {getRoleSector(roleSlug).replace(/-/g, ' ')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-emerald-700/50 rounded-lg md:rounded-xl backdrop-blur-sm">
                      <h5 className="text-sm md:text-base font-medium text-white mb-1 md:mb-2">Why This Role Matches You</h5>
                      {isDetailedAnalysis ? (
                        <div className="space-y-2 md:space-y-3">
                          <p className="text-xs md:text-sm text-emerald-100">
                            Your {profile.traits.slice(0, 2).join(' and ')} align perfectly with the requirements of a {role.title.toLowerCase()}. 
                            This role particularly benefits from {profile.traits[2] || profile.traits[0]}, which you've demonstrated consistently in your responses.
                          </p>
                          <p className="text-xs md:text-sm text-emerald-100">
                            Yorkshire's {getRoleSector(roleSlug).replace(/-/g, ' ')} sector is actively seeking professionals with your specific skill set, making this an opportune time to explore this career path.
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs md:text-sm text-emerald-100">
                          Your {profile.traits[0]} and {profile.traits[1]} suggest you would excel in this role. Complete the detailed assessment to learn more about specific role requirements and opportunities.
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                      <div className="bg-emerald-700/30 rounded-md md:rounded-lg p-2 md:p-3">
                        <h5 className="font-medium text-xs md:text-sm text-white mb-0.5 md:mb-1">Entry Level</h5>
                        <p className="text-xs md:text-sm text-emerald-100">{role.salary.entry}</p>
                      </div>
                      <div className="bg-emerald-700/30 rounded-md md:rounded-lg p-2 md:p-3">
                        <h5 className="font-medium text-xs md:text-sm text-white mb-0.5 md:mb-1">Experienced</h5>
                        <p className="text-xs md:text-sm text-emerald-100">{role.salary.experienced}</p>
                      </div>
                      <div className="bg-emerald-700/30 rounded-md md:rounded-lg p-2 md:p-3">
                        <h5 className="font-medium text-xs md:text-sm text-white mb-0.5 md:mb-1">Senior Level</h5>
                        <p className="text-xs md:text-sm text-emerald-100">{role.salary.senior}</p>
                      </div>
                    </div>
                    
                    {/* New: Growth & Development section */}
                    {isDetailedAnalysis && (
                      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-emerald-700/30 rounded-lg md:rounded-xl">
                        <h5 className="font-medium text-xs md:text-sm text-white mb-2">Growth & Development</h5>
                        <p className="text-xs text-emerald-100 mb-2">
                          This role offers clear progression paths with opportunities to advance to {(role as any).progression?.next || 'senior positions'} with experience.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                          <div className="flex-1 h-0.5 bg-emerald-300/50"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
                          <div className="flex-1 h-0.5 bg-emerald-300/50"></div>
                          <div className="w-4 h-4 rounded-full bg-emerald-300"></div>
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <h5 className="font-medium text-xs md:text-sm text-white mb-2">Key Skills</h5>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {role.skills.slice(0, 4).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-700/30 text-emerald-50"
                          >
                            {skill}
                          </span>
                        ))}
                        {role.skills.length > 4 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-700/30 text-emerald-50">
                            +{role.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {isDetailedAnalysis && (
                      <div className="mb-4">
                        <h5 className="font-medium text-xs md:text-sm text-white mb-2">Entry Routes</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                          <div className="p-3 md:p-4 rounded-md md:rounded-lg bg-emerald-700/30">
                            <h6 className="font-medium text-xs md:text-sm text-white mb-1 md:mb-2">{role.paths.university.title}</h6>
                            <p className="text-xs text-emerald-100">{role.paths.university.description}</p>
                          </div>
                          <div className="p-3 md:p-4 rounded-md md:rounded-lg bg-emerald-700/30">
                            <h6 className="font-medium text-xs md:text-sm text-white mb-1 md:mb-2">{role.paths.apprenticeship.title}</h6>
                            <p className="text-xs text-emerald-100">{role.paths.apprenticeship.description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="inline-flex items-center text-xs md:text-sm text-emerald-100 group">
                      <span className="group-hover:underline">View full role details</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {isDetailedAnalysis && (
          <div className="mt-8 md:mt-12 bg-zinc-50 rounded-xl md:rounded-2xl p-4 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-3 md:mb-4">Next Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="text-base font-medium text-zinc-900 mb-2">Explore Career Paths</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Browse detailed job profiles in your matched sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Research entry requirements and qualifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Look at job satisfaction and work-life balance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="text-base font-medium text-zinc-900 mb-2">Develop Your Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Find Yorkshire training providers and courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Explore apprenticeships and work-based learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Look for free online courses to build knowledge</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <ArrowRight className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="text-base font-medium text-zinc-900 mb-2">Take Action</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Connect with Yorkshire career advisors for guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Attend local job fairs and networking events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-zinc-600">Set up job alerts for relevant opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <h4 className="text-base font-medium text-emerald-800 mb-2">Did you know?</h4>
              <p className="text-sm text-emerald-700">
                Yorkshire's economy is growing, with exciting opportunities across digital tech, manufacturing, healthcare, and creative sectors. Now is a great time to start planning your career journey in the region.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 md:pt-8 mt-6 md:mt-8 border-t border-zinc-100">
          <button
            onClick={resetQuiz}
            className="text-base md:text-lg text-emerald-600 font-medium hover:text-emerald-500 text-center md:text-left w-full md:w-auto"
          >
            Retake Quiz
          </button>
          <Link
            href="/pathways"
            className="inline-flex items-center justify-center text-base md:text-lg text-white bg-emerald-600 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:bg-emerald-500 transition-colors shadow-md md:shadow-lg w-full md:w-auto"
            onClick={onClose}
          >
            Explore All Pathways
            <ChevronRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>
    )
  }

  // Filter questions based on current stage
  const currentStageQuestions = quizQuestions.filter(q => q.stage === stage) as QuizQuestion[];

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-h-full h-full md:h-auto md:max-w-7xl lg:max-w-[90%] xl:max-w-[80%] md:mx-4 md:my-8 flex items-center justify-center">
        {/* Desktop close button - Updated positioning and z-index */}
        <button
          onClick={() => {
            resetQuiz()
            onClose()
          }}
          className="hidden md:flex absolute -top-4 -right-4 w-12 h-12 bg-zinc-900 text-white hover:bg-zinc-800 rounded-full transition-colors shadow-lg border-2 border-white z-50 items-center justify-center"
          aria-label="Close quiz"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative bg-white w-full h-full md:h-auto md:max-h-[90vh] md:w-full md:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
          {/* Mobile-friendly header with back/close button */}
          <div className="sticky top-0 z-20 bg-white border-b border-zinc-100 px-4 py-4 flex items-center justify-between md:hidden">
            <button
              onClick={() => {
                if (showFrontPage) {
                  resetQuiz()
                  onClose()
                } else if (currentQuestion > (stage === 1 ? 0 : 5) && !showResults && !showIntermediate) {
                  setCurrentQuestion(currentQuestion - 1)
                } else if (showResults) {
                  setShowResults(false)
                  if (stage === 2) {
                    setCurrentQuestion(9)
                  } else {
                    setShowIntermediate(true)
                  }
                } else {
                  resetQuiz()
                  onClose()
                }
              }}
              className="p-2 -ml-1 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
              aria-label={currentQuestion > (stage === 1 ? 0 : 5) || showResults ? "Previous" : "Close quiz"}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <span className="font-medium text-base text-zinc-900">
              {showFrontPage ? "Career Assessment" : 
                (showResults ? "Your Results" : 
                  (showIntermediate ? "Stage 1 Complete" : `Career Quiz ${stage === 2 ? '- Stage 2' : ''} (${stage === 1 ? currentQuestion + 1 : currentQuestion - 4}/5)`)
                )
              }
            </span>
            <button
              onClick={() => {
                resetQuiz()
                onClose()
              }}
              className="p-2 -mr-1 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
              aria-label="Close quiz"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto quiz-scroll-container">
            <div className="px-4 py-5 md:p-8 lg:p-12">
              {showResults ? (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Your Career Recommendations</h2>
                  <p className="text-base md:text-lg text-zinc-600 mb-6 md:mb-10">
                    Based on your answers, we've identified career paths that match your skills and interests
                  </p>
                  
                  {renderResults()}
                </div>
              ) : showIntermediate ? (
                <div className="text-center max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 md:mb-6">
                    Great progress! Ready for more insights?
                  </h2>
                  <p className="text-base md:text-lg text-zinc-600 mb-6 md:mb-8">
                    You've completed the first stage of questions. Continue to the skills assessment for more personalised career recommendations.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 max-w-2xl mx-auto">
                    <button
                      onClick={startSecondStage}
                      className="w-full px-4 py-3 md:px-8 md:py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium text-base md:text-lg shadow-md group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Continue to Skills Assessment
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 z-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </button>
                    <button
                      onClick={() => setShowResults(true)}
                      className="w-full px-4 py-3 md:px-8 md:py-4 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-200 transition-colors font-medium text-base md:text-lg flex items-center justify-center gap-2"
                    >
                      <span>See Current Results</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : showFrontPage ? (
                renderFrontPage()
              ) : (
                <div>
                  {/* Top Quiz Header with icon - hidden on mobile */}
                  <div className="hidden md:flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Compass className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-zinc-900">Career Skills Assessment</h2>
                      <p className="text-zinc-600">Discover career paths that match your unique abilities</p>
                    </div>
                  </div>
                  
                  <div className="max-w-3xl md:max-w-4xl mx-auto">
                    {/* Progress indicator - simplified for mobile */}
                    <div className="mb-6 md:mb-10">
                      <div className="hidden md:flex items-center justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                          Question {stage === 1 ? currentQuestion + 1 : currentQuestion - 4} 
                          <span className="text-zinc-400 ml-3 text-base md:text-lg font-normal">
                            (Stage {stage} of 2)
                          </span>
                        </h3>
                        <span className="text-base md:text-lg text-zinc-500">
                          {stage === 1 ? currentQuestion + 1 : currentQuestion - 4} of 5
                        </span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${((stage === 1 ? currentQuestion + 1 : currentQuestion - 4) / 5) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-6 md:mb-10">
                      <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-5 md:mb-8">
                        {currentStageQuestions[stage === 1 ? currentQuestion : currentQuestion - 5].question}
                      </h3>
                      
                      {/* Enhanced question explanation */}
                      {currentStageQuestions[stage === 1 ? currentQuestion : currentQuestion - 5].explanation && (
                        <p className="text-zinc-600 mb-6 text-base md:text-lg">
                          {currentStageQuestions[stage === 1 ? currentQuestion : currentQuestion - 5].explanation}
                        </p>
                      )}
                      
                      <div className="grid gap-3 md:gap-4 md:grid-cols-1 lg:grid-cols-2">
                        {currentStageQuestions[stage === 1 ? currentQuestion : currentQuestion - 5].options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleAnswer(option.paths)}
                            className="relative text-left p-5 md:p-6 rounded-xl border-2 border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 active:bg-emerald-100 transition-all duration-300 group shadow-sm hover:shadow-md"
                          >
                            <div className="flex items-start gap-4">
                              {option.icon && (
                                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors duration-300">
                                  <span className="text-lg">{option.icon}</span>
                                </div>
                              )}
                              <div>
                                <span className="block text-base md:text-lg font-medium text-zinc-900 group-hover:text-emerald-700 mb-1 transition-colors">{option.text}</span>
                                {option.description && (
                                  <span className="block text-sm md:text-base text-zinc-500 group-hover:text-zinc-600 transition-colors">{option.description}</span>
                                )}
                              </div>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-emerald-500 flex items-center justify-center transition-colors">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform"></div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Only show on desktop, navigation and hints */}
                    <div className="hidden md:flex justify-between items-center pt-8 border-t border-zinc-100">
                      <button
                        onClick={() => setCurrentQuestion(Math.max(stage === 1 ? 0 : 5, currentQuestion - 1))}
                        disabled={currentQuestion === (stage === 1 ? 0 : 5)}
                        className="text-lg text-zinc-600 font-medium hover:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Previous
                      </button>
                      <div className="text-base text-zinc-500">
                        Your answers are saved automatically
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerQuiz