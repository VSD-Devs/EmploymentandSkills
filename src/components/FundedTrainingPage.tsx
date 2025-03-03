'use client'

import React, { useState } from 'react'
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
  ArrowRight,
  MapPin,
  Calendar,
  Handshake,
  Rocket,
  Lightbulb
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const FundedTrainingPage = () => {
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  // Questions for business eligibility checker
  const questions = [
    {
      question: "Is your business based in South Yorkshire?",
      options: ["Yes", "No"],
      disqualifyIf: "No"
    },
    {
      question: "How many employees does your business have?",
      options: [
        "1-9 employees",
        "10-49 employees",
        "50-249 employees",
        "250+ employees"
      ],
      disqualifyIf: ""
    },
    {
      question: "Which sector does your business operate in?",
      options: [
        "Manufacturing",
        "Digital & Technology",
        "Construction",
        "Retail & Hospitality",
        "Health & Social Care",
        "Other"
      ],
      disqualifyIf: ""
    },
    {
      question: "Are you looking to upskill existing staff or hire new talent?",
      options: [
        "Upskill existing staff",
        "Hire new talent",
        "Both"
      ],
      disqualifyIf: ""
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
    <main className="bg-white">
      {/* Breadcrumbs Component */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Business Support', href: '/business-support' },
            { label: 'Funded Training', href: '/funded-training' },
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
            alt="Business training and development in South Yorkshire"
            fill
            className="object-cover object-center mix-blend-overlay opacity-40"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-28 relative">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-800">For Businesses</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Grow Your Business with <span className="text-blue-300">Funded Training</span>
              </h1>
              
              <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
                Access substantial funding to develop your workforce and drive business growth in South Yorkshire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setShowEligibilityChecker(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center"
                >
                  Check Your Eligibility
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <Link 
                  href="#funding-options" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                >
                  Explore Funding Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Key Features - Right side */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
                {/* Large Featured Image */}
                <div className="rounded-xl overflow-hidden mb-6 relative h-52">
                  <Image 
                    src="/images/business-training.jpg"
                    alt="Business training session in a modern office environment"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Key Business Benefits Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-100/20 rounded-full flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-blue-200" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">Skilled Workforce</h3>
                      <p className="text-xs text-blue-100">Develop your team</p>
                    </div>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-100/20 rounded-full flex items-center justify-center mb-3">
                        <Rocket className="w-5 h-5 text-blue-200" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">Business Growth</h3>
                      <p className="text-xs text-blue-100">Expand capabilities</p>
                    </div>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-100/20 rounded-full flex items-center justify-center mb-3">
                        <Percent className="w-5 h-5 text-blue-200" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">Cost Savings</h3>
                      <p className="text-xs text-blue-100">Up to 100% funded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-1 text-blue-800 font-bold text-xl">
              <Building2 className="h-6 w-6" />
              <span>Business Funding</span>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'funding-options', label: 'Funding Options' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'case-studies', label: 'Success Stories' },
                { id: 'apply', label: 'Apply Now' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
                    false // Replace with state variable for active section
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    // Update active section state here
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-4">
              <span className="text-sm font-medium text-blue-900">Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Transform Your Business with Funded Training
            </h2>
            <p className="text-lg text-slate-600">
              Discover how our funding programmes can help your business develop skills, boost productivity, and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  Our business funding programmes are designed to help organisations in South Yorkshire upskill their workforce and access the talent they need to thrive. These initiatives are supported by the South Yorkshire Mayoral Combined Authority and other government bodies, offering significant cost savings on training.
                </p>
                <p>
                  Whether you're a small startup or an established enterprise, we have funding options to support your business growth and development objectives.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Key Benefits for Your Business:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Reduce training costs with up to 100% funding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Develop skilled employees to meet your business needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Access training from leading providers across the region</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Improve productivity, retention and business performance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              <div className="relative rounded-xl overflow-hidden h-64 mb-6">
                <Image 
                  src="/images/business-meeting.jpg" 
                  alt="Business team in a collaborative workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Training Solutions for:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Leadership & Management",
                  "Digital Skills",
                  "Technical Expertise",
                  "Industry Qualifications",
                  "Professional Development",
                  "Sector-specific Training"
                ].map((solution, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-700">{solution}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">
                    <span className="font-medium">Did you know?</span> Businesses that invest in employee training see an average of 24% higher profit margins compared to those who don't.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Options Section */}
      <section id="funding-options" className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-4">
              <span className="text-sm font-medium text-blue-900">Funding Programmes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Funding Options for Your Business
            </h2>
            <p className="text-lg text-slate-600">
              Explore our range of funding programmes designed to meet different business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fully Funded Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-slate-200">
              <div className="relative h-48">
                <Image
                  src="/images/fully-funded.jpg"
                  alt="Fully funded training options"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute left-6 bottom-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">100% Funded</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Adult Skills Funding</h3>
                <p className="text-slate-600 mb-6">
                  Fully funded training for eligible employees and businesses in key sectors across South Yorkshire.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {[
                      "Based in South Yorkshire",
                      "Employees aged 19+",
                      "UK/EU resident with right to work"
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/adult-skills-funding"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Skills Bank Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-slate-200">
              <div className="relative h-48">
                <Image
                  src="/images/skills-bank.jpg"
                  alt="Skills Bank funding"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute left-6 bottom-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 rounded-full">
                    <Percent className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">Up to 70% Funded</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Skills Bank</h3>
                <p className="text-slate-600 mb-6">
                  Tailored training solutions with significant funding to support your business growth objectives.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {[
                      "Business based in South Yorkshire",
                      "Clear growth plans or ambitions",
                      "Commitment to staff development"
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/skills-bank"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Skills Bootcamps Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-slate-200">
              <div className="relative h-48">
                <Image
                  src="/images/bootcamps-image2.png"
                  alt="Skills Bootcamps"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute left-6 bottom-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 rounded-full">
                    <BookOpen className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">Employer Contribution</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Skills Bootcamps</h3>
                <p className="text-slate-600 mb-6">
                  Intensive, flexible training courses to quickly develop in-demand skills in your workforce.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {[
                      "10% cost for SMEs, 30% for large employers",
                      "Available for new or existing employees",
                      "Courses run for up to 16 weeks"
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/skills-bootcamps"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-800">Business Eligibility</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Is Your Business <span className="text-blue-600">Eligible?</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our funding programmes have specific eligibility criteria to ensure support is targeted effectively. Check if your business qualifies.
              </p>
              
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Common Requirements:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">South Yorkshire Based</span>
                      <p className="text-slate-600 mt-1">Your business must be based in Sheffield, Doncaster, Barnsley or Rotherham</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Private Sector or Charity</span>
                      <p className="text-slate-600 mt-1">Must be a private sector business or registered charity - public sector organizations are not supported</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Growth Ambitions</span>
                      <p className="text-slate-600 mt-1">Demonstrated plans for business growth or workforce development</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={() => setShowEligibilityChecker(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center"
              >
                Check Your Eligibility Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/business-meeting.jpg"
                    alt="Business team discussing training opportunities"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Business testimonial overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Handshake className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-slate-700 italic">
                              "The Skills Bank funding allowed us to develop critical digital skills in our team, directly contributing to 30% business growth."
                            </p>
                            <p className="text-blue-700 font-medium text-sm mt-1">Sheffield Tech Solutions - Managing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional eligibility information */}
                <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Additional Considerations:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600">Each funding programme has specific eligibility criteria - we can help determine the best fit</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600">Some sectors may have priority access to certain funding streams</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600">Our team can provide a personalised eligibility assessment for your business</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">£25M+</div>
                  <p className="text-sm text-slate-600">in funding delivered to South Yorkshire businesses</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2,500+</div>
                  <p className="text-sm text-slate-600">businesses supported with training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="case-studies" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-4">
              <span className="text-sm font-medium text-blue-900">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Businesses Transformed Through Training
            </h2>
            <p className="text-lg text-slate-600">
              See how South Yorkshire businesses have leveraged funded training to drive growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-slate-200">
              <div className="relative h-48">
                <Image
                  src="/images/success-story-1.jpg"
                  alt="Digital agency team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute left-6 bottom-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-full">
                    <Building2 className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">Sheffield Digital Agency</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Marketing Excellence</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Through Skills Bank funding, we upskilled our entire team in advanced digital marketing techniques. This led to a 45% increase in client retention and 30% revenue growth within six months."
                </p>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 font-medium">Funding Used:</p>
                    <p className="text-sm text-slate-600">Skills Bank (60% funding)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-slate-200">
              <div className="relative h-48">
                <Image
                  src="/images/success-story-2.jpg"
                  alt="Manufacturing team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute left-6 bottom-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-full">
                    <Building2 className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">Rotherham Manufacturing</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Skills Development</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "The fully funded training allowed 12 of our production staff to gain essential technical qualifications. We've seen a 22% increase in productivity and reduced waste by 15%."
                </p>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 font-medium">Funding Used:</p>
                    <p className="text-sm text-slate-600">Adult Skills Funding (100% funded)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-slate-200">
              <div className="relative h-48">
                <Image
                  src="/images/success-story-3.jpg"
                  alt="Healthcare professionals"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute left-6 bottom-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-full">
                    <Building2 className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">Doncaster Healthcare</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Leadership Development</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Thanks to Skills Bootcamps, our management team gained critical leadership skills. Staff satisfaction scores improved by 40% and we've reduced turnover significantly."
                </p>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 font-medium">Funding Used:</p>
                    <p className="text-sm text-slate-600">Skills Bootcamps (90% funded)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Apply Now / Contact Section */}
      <section id="apply" className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <div className="relative px-6 py-12 md:p-12">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] mix-blend-overlay opacity-5"></div>
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
                    <Rocket className="h-4 w-4 text-blue-200" />
                    <span className="text-sm font-medium text-blue-100">Get Started Today</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
                  <p className="text-blue-100 text-lg mb-8">
                    Our team of business support experts will help you identify the best funding options for your organisation.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="h-5 w-5 text-blue-200" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200 mb-1">Call our Business Team</p>
                        <p className="text-xl font-bold text-white">0808 178 9901</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="h-5 w-5 text-blue-200" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200 mb-1">Email Us</p>
                        <p className="text-xl font-bold text-white">business@southyorkshire-ca.gov.uk</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Callback</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="business-name" className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                      <input
                        type="text"
                        id="business-name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Contact Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="funding-interest" className="block text-sm font-medium text-slate-700 mb-1">I'm interested in</label>
                      <select
                        id="funding-interest"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select an option</option>
                        <option value="skills-bank">Skills Bank</option>
                        <option value="adult-skills">Adult Skills Funding</option>
                        <option value="bootcamps">Skills Bootcamps</option>
                        <option value="not-sure">Not sure - need advice</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Request Callback
                    </button>
                    <p className="text-xs text-slate-500 text-center">
                      We'll get back to you within one working day
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <span className="text-sm font-medium text-blue-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
                      className="w-full px-6 py-4 text-left text-lg font-medium rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
                      Great news! Your business may be eligible
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Based on your answers, your business appears to be eligible for our funded training programmes. Contact our team to discuss your specific needs.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        href="#apply"
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Get in Touch
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
                      Let's explore your options
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      We'd like to learn more about your business needs. Our team can help identify alternative funding programmes that may be available to you.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        href="#apply"
                        onClick={resetChecker}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
    </main>
  )
}

export default FundedTrainingPage 