'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, X, ArrowLeft, Sparkles, CheckCircle, Target, Compass, Home } from 'lucide-react'
import { quizQuestions, careerProfiles, sectorToRoles } from '../data/careerQuizData'
import { sectorData } from '../data/sectors'
import { roleData } from '@/data/roles'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import type { CareerProfile } from '../data/careerQuizData'

// Add type definitions
type Trait = string;
type SectorSlug = string;

interface ProfileData {
  description: string;
  traits: Trait[];
  recommendedSectors: SectorSlug[];
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

interface StandaloneCareerQuizProps {
  onReturn: () => void;
}

const StandaloneCareerQuiz: React.FC<StandaloneCareerQuizProps> = ({ onReturn }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[][]>([])
  const [showResults, setShowResults] = useState(false)
  const [showIntermediate, setShowIntermediate] = useState(false)
  const [stage, setStage] = useState<1 | 2>(1)

  // Load saved state on mount
  useEffect(() => {
    const savedState = localStorage.getItem('careerQuizState')
    if (savedState) {
      const { answers, stage, showResults } = JSON.parse(savedState)
      setAnswers(answers)
      setStage(stage)
      setShowResults(true)
      localStorage.removeItem('careerQuizState') // Clear after restoring
    }
  }, [])

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

  // Save state before navigating to role
  const handleRoleClick = () => {
    const stateToSave = {
      answers,
      stage,
      showResults: true
    }
    localStorage.setItem('careerQuizState', JSON.stringify(stateToSave))
  }

  const startSecondStage = () => {
    setStage(2)
    setShowIntermediate(false)
    setCurrentQuestion(5)
    setShowResults(false)
    // Scroll to top
    window.scrollTo(0, 0)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setShowIntermediate(false)
    setStage(1)
    // Scroll to top
    window.scrollTo(0, 0)
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
      <div className="max-w-5xl mx-auto">
        {!isDetailedAnalysis && (
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">1/2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Initial Career Matches</h3>
                  <p className="text-blue-700">Complete stage 2 for a detailed career profile and personalised recommendations</p>
                </div>
              </div>
              <button
                onClick={startSecondStage}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
              >
                Continue to Stage 2
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Profile Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
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
                      <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-blue-700" />
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
                      <h5 className="font-medium text-blue-800 mb-2">
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
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
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
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-blue-800"
                    >
                      {sector.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recommended Support Programmes - New Section */}
        {isDetailedAnalysis && (
          <div className="bg-indigo-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900">Recommended Support Programmes</h3>
            </div>
            
            <p className="text-zinc-700 mb-6">
              Based on your profile, we've identified these employment support programmes that can help you progress in your career journey:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Skills Bootcamps</h4>
                <p className="text-zinc-600 mb-3">
                  Intensive training courses designed to quickly build job-ready skills in your areas of interest.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    12-16 weeks
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Fully funded
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Job guarantee
                  </span>
                </div>
                <Link 
                  href="/bootcamps" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  View available bootcamps
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Career Mentoring</h4>
                <p className="text-zinc-600 mb-3">
                  One-to-one guidance from industry professionals to help you navigate your career path.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    6-month programme
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Monthly sessions
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Personalised advice
                  </span>
                </div>
                <Link 
                  href="/mentoring" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  Apply for mentoring
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">CV & Application Support</h4>
                <p className="text-zinc-600 mb-3">
                  Expert help with your CV, cover letters and job applications to maximise your chances of success.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    CV review
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Interview prep
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Application guidance
                  </span>
                </div>
                <Link 
                  href="/employment-support" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  Get application support
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Apprenticeship Matching</h4>
                <p className="text-zinc-600 mb-3">
                  Find and apply for apprenticeships that match your career goals and learning style.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Earn while you learn
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    All levels
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Local opportunities
                  </span>
                </div>
                <Link 
                  href="/apprenticeships" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  Find apprenticeships
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}

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
                  onClick={handleRoleClick}
                  className="block bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {role.title}
                    </h4>
                    <p className="text-blue-100 mb-6">{role.description}</p>
                    
                    <div className="mb-6 p-4 bg-blue-700/50 rounded-xl backdrop-blur-sm">
                      <h5 className="text-base font-medium text-white mb-2">Why This Role Matches You</h5>
                      {isDetailedAnalysis ? (
                        <div className="space-y-3">
                          <p className="text-blue-100">
                            Your {profile.traits.slice(0, 2).join(' and ')} align perfectly with the requirements of a {role.title.toLowerCase()}. 
                            This role particularly benefits from {profile.traits[2] || profile.traits[0]}, which you've demonstrated consistently in your responses.
                          </p>
                          <p className="text-blue-100">
                            Your answers in the detailed assessment showed strong alignment with the key responsibilities and work environment of this role.
                          </p>
                        </div>
                      ) : (
                        <p className="text-blue-100">
                          Your {profile.traits[0]} and {profile.traits[1]} suggest you would excel in this role. Complete the detailed assessment to learn more about specific role requirements and opportunities.
                        </p>
                      )}
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-700/30 rounded-lg p-3">
                        <h5 className="font-medium text-white mb-1">Entry Level</h5>
                        <p className="text-blue-100">{role.salary.entry}</p>
                      </div>
                      <div className="bg-blue-700/30 rounded-lg p-3">
                        <h5 className="font-medium text-white mb-1">Experienced</h5>
                        <p className="text-blue-100">{role.salary.experienced}</p>
                      </div>
                      <div className="bg-blue-700/30 rounded-lg p-3">
                        <h5 className="font-medium text-white mb-1">Senior Level</h5>
                        <p className="text-blue-100">{role.salary.senior}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium text-white mb-2">Key Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-700/30 text-blue-50"
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
                          <div className="p-4 rounded-lg bg-blue-700/30">
                            <h6 className="font-medium text-white mb-2">{role.paths.university.title}</h6>
                            <p className="text-sm text-blue-100">{role.paths.university.description}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-blue-700/30">
                            <h6 className="font-medium text-white mb-2">{role.paths.apprenticeship.title}</h6>
                            <p className="text-sm text-blue-100">{role.paths.apprenticeship.description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="inline-flex items-center text-blue-100 group">
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
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-zinc-600">Explore detailed job roles in your recommended sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-zinc-600">Research training and qualification requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-zinc-600">Connect with professionals in your chosen sectors</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-medium text-zinc-700 mb-3">Available Support</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-zinc-600">Career guidance and mentoring programmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-zinc-600">Skills development workshops and courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
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
            className="text-lg text-blue-600 font-medium hover:text-blue-500"
          >
            Retake Quiz
          </button>
          <div className="flex gap-4">
            <button
              onClick={onReturn}
              className="inline-flex items-center text-lg bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Return to Skills Assessment
            </button>
            <Link
              href="/pathways"
              className="inline-flex items-center text-lg text-white bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Pathways
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Filter questions based on current stage
  const currentStageQuestions = quizQuestions.filter(q => q.stage === stage)

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Skills Assessment', href: '/skills-assessment' },
            { label: 'Quiz', href: '#' }
          ]}
          className="mb-8"
        />

        {showResults ? (
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Your Career Recommendations</h2>
            <p className="text-lg text-zinc-600 mb-10">
              Based on your answers, we've identified career paths that match your skills and interests
            </p>
            
            {renderResults()}
          </div>
        ) : showIntermediate ? (
          <div className="text-center max-w-2xl mx-auto py-12">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">
              Great progress! Ready for more insights?
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              You've completed the first stage of questions. Continue to the skills assessment for more personalised career recommendations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={startSecondStage}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors font-medium text-lg shadow-md"
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
          <div className="max-w-3xl mx-auto">
            {/* Top Quiz Header with icon */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">Career Skills Assessment</h2>
                <p className="text-zinc-600">Discover career paths that match your unique abilities</p>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-zinc-900">
                  Question {stage === 1 ? currentQuestion + 1 : currentQuestion - 4} 
                  <span className="text-zinc-400 ml-3 text-lg font-normal">
                    (Stage {stage} of 2)
                  </span>
                </h3>
                <span className="text-lg text-zinc-500">
                  {stage === 1 ? currentQuestion + 1 : currentQuestion - 4} of 5
                </span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
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
                    className="text-left p-6 rounded-xl border-2 border-zinc-200 hover:border-blue-500 hover:bg-blue-50 transition-colors active:bg-blue-100 group"
                  >
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-zinc-900 group-hover:text-blue-700">{option.text}</span>
                      <ChevronRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-zinc-100">
              <button
                onClick={() => {
                  if (currentQuestion > (stage === 1 ? 0 : 5)) {
                    setCurrentQuestion(currentQuestion - 1);
                  } else {
                    onReturn();
                  }
                }}
                className="text-lg text-zinc-600 font-medium hover:text-zinc-900 flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {currentQuestion > (stage === 1 ? 0 : 5) ? 'Previous' : 'Exit Quiz'}
              </button>
              <div className="text-base text-zinc-500">
                Your answers are saved automatically
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StandaloneCareerQuiz 