'use client'

import React from 'react'
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
  Building2,
  Calculator,
  Percent,
  BookOpen
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'

const FundedTrainingPage = () => {
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  // Questions for eligibility checker
  const questions = [
    {
      question: "Are you aged 19 or over?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "Are you based in Yorkshire?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "What is your current employment status?",
      options: [
        "Employed",
        "Self-employed",
        "Unemployed",
        "None of the above"
      ],
      disqualifyIf: "None of the above"
    },
    {
      question: "What is your current highest qualification level?",
      options: [
        "Below Level 3",
        "Level 3",
        "Level 4 or above",
        "Not sure"
      ],
      disqualifyIf: "Level 4 or above"
    }
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const isEligible = () => {
    return !answers.some((answer, index) => answer === questions[index].disqualifyIf)
  }

  const resetChecker = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setShowEligibilityChecker(false)
  }

  return (
    <div className="bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Funded Training', href: '/funded-training' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-12 md:py-20 min-h-[320px] md:min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/funded-training-hero.jpg"
            alt="Funded training opportunities in South Yorkshire"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
              Funded Training Opportunities
            </h1>
            <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
              Access fully funded training programs to enhance your skills and advance your career in South Yorkshire.
            </p>
            <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
              <Link
                href="/funded-training#apply"
                className="inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 rounded-lg bg-blue-600 text-white text-sm md:text-base font-medium hover:bg-blue-500 transition-colors"
              >
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation - Bottom on Mobile, Top on Desktop */}
      <div className="md:sticky md:top-0 fixed bottom-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-t md:border-t-0 md:border-b border-gray-200 shadow-lg md:shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center min-w-max">
            <div className="flex space-x-1 py-1">
              <a 
                href="#fully-funded" 
                className="group relative px-3 md:px-4 py-2 md:py-3 flex-shrink-0 rounded-lg md:rounded-xl transition-colors hover:bg-emerald-50"
              >
                <div className="relative z-10 flex flex-col items-center gap-0.5 md:gap-1">
                  <div className="h-5 w-5 md:h-6 md:w-6 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="text-[11px] md:text-sm font-medium text-gray-900 whitespace-nowrap">
                    Fully Funded
                  </span>
                </div>
              </a>
              <a 
                href="#partially-funded" 
                className="group relative px-3 md:px-4 py-2 md:py-3 flex-shrink-0 rounded-lg md:rounded-xl transition-colors hover:bg-purple-50"
              >
                <div className="relative z-10 flex flex-col items-center gap-0.5 md:gap-1">
                  <div className="h-5 w-5 md:h-6 md:w-6 text-purple-600">
                    <Percent className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="text-[11px] md:text-sm font-medium text-gray-900 whitespace-nowrap">
                    Partially Funded
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections with bottom padding for mobile */}
      <div className="pb-16 md:pb-0">
        {/* Fully Funded Section */}
        <section id="fully-funded" className="py-8 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs md:text-sm font-medium mb-3 md:mb-4">
                No Cost to Your Business
              </span>
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Fully Funded Training Programmes</h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These programmes are completely free for eligible businesses and employees
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-12">
              {[
                {
                  title: 'Adult Skills Funding',
                  icon: GraduationCap,
                  color: 'emerald',
                  description: 'Fully funded training for eligible employees',
                  requirements: [
                    'Maximum salary of £24,000',
                    'No higher than a full level 3 qualification',
                    'Aged 19 or over',
                    'Living in Yorkshire'
                  ],
                  benefits: [
                    'Complete cost coverage',
                    'Flexible learning options',
                    'Industry-recognised qualifications',
                    'Career progression opportunities'
                  ],
                  image: '/images/hero-yorkshire.jpg',
                  link: '/adult-skills-funding'
                },
                {
                  title: 'Multiply Programme',
                  icon: Calculator,
                  color: 'blue',
                  description: 'Free maths training for your workforce',
                  requirements: [
                    'Employees aged 19 or over',
                    'Below Level 2 maths qualification',
                    'Based in Yorkshire'
                  ],
                  benefits: [
                    'Improve workplace numeracy',
                    'Boost productivity',
                    'Enhance problem-solving skills',
                    'Flexible delivery options'
                  ],
                  image: '/images/hero-business.jpg',
                  link: '/multiply-programme'
                }
              ].map((option, index) => (
                <div key={index} className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-xl overflow-hidden border border-gray-100 hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-40 md:h-56">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                          <option.icon className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{option.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-8">
                    <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">{option.description}</p>
                    
                    <div className="space-y-4 md:space-y-8">
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">Requirements</h4>
                        <ul className="space-y-2 md:space-y-3">
                          {option.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-600">
                              <span className="text-emerald-600 font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">Benefits</h4>
                        <ul className="space-y-2 md:space-y-3">
                          {option.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-600">
                              <span className="text-emerald-600 font-bold">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-10">
                      <Link
                        href={option.link}
                        className={`w-full inline-flex justify-center items-center px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-lg font-medium text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-colors`}
                      >
                        Learn More About {option.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partially Funded Section */}
        <section id="partially-funded" className="py-8 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                Subsidised Training
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Partially Funded Programmes</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cost-effective training solutions with significant funding support
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              {[
                {
                  title: 'Skills Bank',
                  icon: Percent,
                  color: 'purple',
                  description: 'Up to 60% funding towards training costs',
                  requirements: [
                    'Business based in Yorkshire',
                    'Clear growth plans',
                    'Commitment to workforce development'
                  ],
                  benefits: [
                    'Substantial cost savings',
                    'Tailored training solutions',
                    'Support for business growth',
                    'Wide range of eligible courses'
                  ],
                  image: '/images/hero-yorkshire.jpg',
                  link: '/skills-bank'
                },
                {
                  title: 'Skills Bootcamps',
                  icon: BookOpen,
                  color: 'teal',
                  description: 'Intensive training with employer contribution',
                  requirements: [
                    '10% contribution for SMEs',
                    '30% contribution for large organisations',
                    'Sector-specific training',
                    'Must lead to job or promotion'
                  ],
                  benefits: [
                    'Industry-led curriculum',
                    'Fast-track skills development',
                    'Immediate workplace application',
                    'Access to skilled talent'
                  ],
                  image: '/images/hero-business.jpg',
                  link: '/skills-bootcamps'
                }
              ].map((option, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                          <option.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{option.description}</p>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-3">
                          {option.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                              <span className="text-purple-600 font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                        <ul className="space-y-3">
                          {option.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                              <span className="text-purple-600 font-bold">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href={option.link}
                        className={`w-full inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-colors`}
                      >
                        Learn More About {option.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact" className="relative bg-[#111827] text-white py-8 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Need More Information?</h2>
              <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto">
                Our team is here to help you understand and access the right funding options for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  icon: Phone,
                  title: "Call us at",
                  content: "0808 178 3061",
                  subtext: "Monday to Friday, 9am - 5pm"
                },
                {
                  icon: Mail,
                  title: "Email us at",
                  content: "workingwin@shaw-trust.org.uk",
                  subtext: "We will respond within 24 hours"
                }
              ].map((contact, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 rounded-lg md:rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                  <div className="relative bg-gray-800/50 backdrop-blur rounded-lg md:rounded-xl p-4 md:p-8 border border-gray-700">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <contact.icon className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-300 text-base md:text-lg mb-1 md:mb-2">{contact.title}</h3>
                        <p className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">{contact.content}</p>
                        <p className="text-sm md:text-base text-gray-400">{contact.subtext}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Checker Modal */}
      {showEligibilityChecker && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl md:rounded-2xl w-full max-w-2xl p-4 md:p-8 relative">
            <button
              onClick={resetChecker}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            
            {!showResult ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-emerald-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full px-6 py-4 text-left text-lg font-medium rounded-xl border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                {isEligible() ? (
                  <>
                    <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Great news! You may be eligible for funding
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Based on your answers, you appear to be eligible for our funded training programmes. Contact us to discuss your options and start your journey.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        href="#contact"
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors"
                      >
                        Contact Us
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-amber-100 mx-auto flex items-center justify-center">
                      <HelpCircle className="h-10 w-10 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Let's explore other options
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Based on your answers, you might not be eligible for our fully funded programmes. However, we have other funding options that could help. Contact us to discuss alternatives.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        href="#contact"
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors"
                      >
                        Contact Us
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default FundedTrainingPage 