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
  BookOpen,
  ArrowRight
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

      {/* Hero Section - Enhanced with modern design elements */}
      <div className="relative bg-[#0e1b3d] py-32 flex items-center min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/funded-training-hero.jpg"
            alt="Funded training opportunities in South Yorkshire"
            fill
            className="object-cover object-center object-[center_25%] brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/90 via-[#0e1b3d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0e1b3d]/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#ffffff05_50%,transparent_100%)] opacity-70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-blue-300 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Mayoral Combined Authority</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Funded Training<br className="hidden sm:block" /> Opportunities
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
              Access fully funded training programs to enhance your skills and advance your career in South Yorkshire.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <button
                onClick={() => setShowEligibilityChecker(true)}
                aria-label="Check your eligibility for funded training"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Check Eligibility
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <Link
                href="#fully-funded"
                aria-label="View fully funded training options"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Explore Options
                <ChevronRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation - Sticky on Desktop, Fixed on Mobile */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-4 md:space-x-8 py-4">
              <a 
                href="#fully-funded" 
                className="group relative px-4 py-3 flex-shrink-0 rounded-xl transition-all duration-300 hover:bg-emerald-50/80 hover:transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-900 whitespace-nowrap">
                    Fully Funded
                  </span>
                </div>
              </a>
              <a 
                href="#partially-funded" 
                className="group relative px-4 py-3 flex-shrink-0 rounded-xl transition-all duration-300 hover:bg-purple-50/80 hover:transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 text-purple-600">
                    <Percent className="h-6 w-6" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-900 whitespace-nowrap">
                    Partially Funded
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div>
        {/* Fully Funded Section - Enhanced with decorative elements */}
        <section id="fully-funded" className="relative py-24 bg-gray-50">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-emerald-50 to-white opacity-30 blur-3xl" />
            <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-emerald-50 to-white opacity-30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-50/90 border-emerald-600 mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                <span className="text-base font-medium text-emerald-700">No Cost to Your Business</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Fully Funded Training Programmes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These programmes are completely free for eligible businesses and employees
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
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
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group">
                  <div className="relative h-56">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                          <option.icon className="h-6 w-6 text-${option.color}-700" />
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
                              <span className={`text-${option.color}-600 font-bold`}>•</span>
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
                              <span className={`text-${option.color}-600 font-bold`}>•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href={option.link}
                        className={`w-full inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-${option.color}-400 focus:ring-offset-2`}
                      >
                        Learn More About {option.title}
                        <ChevronRight className="ml-3 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partially Funded Section - Enhanced with decorative elements */}
        <section id="partially-funded" className="relative py-24 bg-white">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-50 to-white opacity-30 blur-3xl" />
            <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-50 to-white opacity-30 blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-purple-50/90 border-purple-600 mb-6">
                <Percent className="w-8 h-8 text-purple-700" />
                <span className="text-base font-medium text-purple-700">Subsidised Training</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Partially Funded Programmes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cost-effective training solutions with significant funding support
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
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
                <div key={index} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group">
                  <div className="relative h-56">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                          <option.icon className="h-6 w-6 text-${option.color}-700" />
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
                              <span className={`text-${option.color}-600 font-bold`}>•</span>
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
                              <span className={`text-${option.color}-600 font-bold`}>•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href={option.link}
                        className={`w-full inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-${option.color}-400 focus:ring-offset-2`}
                      >
                        Learn More About {option.title}
                        <ChevronRight className="ml-3 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced with modern design */}
        <div id="contact" className="relative bg-[#0e1b3d] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 text-emerald-300 mb-6">
                <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="text-base font-medium tracking-wide uppercase">Get in Touch</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Need More Information?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Our team is here to help you understand and access the right funding options for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                  <div className="relative bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <contact.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-300 text-lg mb-2">{contact.title}</h3>
                        <p className="text-2xl font-bold mb-2 text-white">{contact.content}</p>
                        <p className="text-base text-gray-400">{contact.subtext}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Checker Modal - Enhanced with modern design */}
      {showEligibilityChecker && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-8 relative">
            <button
              onClick={resetChecker}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1"
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
                      className="w-full px-6 py-4 text-left text-lg font-medium rounded-xl border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
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
                        className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                      >
                        Contact Us
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
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
                        className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                      >
                        Contact Us
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
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