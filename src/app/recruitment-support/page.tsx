'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, BookOpen, Users, ArrowRight, Building, Briefcase, ChevronRight, Clock, Trophy, Target, CheckCircle, XCircle, PieChart, BarChart4, BadgeHelp, Lightbulb, PenTool, Wallet, GanttChartSquare, Banknote, Calendar, LucideIcon, CheckSquare, Handshake, Star, Quote, TrendingUp, ChevronLeft, ChevronDown, Mail, Phone, MessageSquare } from 'lucide-react'

type ColorType = 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';

interface RecruitmentProgramme {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  eligibility: string[];
  funding: {
    available: boolean;
    details: string;
  };
  timeframe: string;
  color: ColorType;
  link: string;
}

const recruitmentProgrammes: RecruitmentProgramme[] = [
  {
    id: 'apprenticeships',
    title: 'Apprenticeships',
    tagline: 'Develop your workforce through on-the-job training',
    description: 'Build your future workforce by nurturing local talent. Apprenticeships combine work with study, allowing your business to grow its own skilled staff while receiving government support.',
    icon: <GraduationCap className="w-6 h-6" />,
    benefits: [
      'Shape young careers from the start',
      'Build skills tailored to your business needs',
      'Improve staff retention and loyalty',
      'Enhance diversity in your workplace',
      'Access fresh perspectives and ideas'
    ],
    eligibility: [
      'Any size business can hire apprentices',
      'Must provide genuine job with training',
      'Apprentice must work at least 30 hours per week',
      'Training must last at least 12 months'
    ],
    funding: {
      available: true,
      details: 'Small businesses may pay as little as 5% of training costs. £1,000 incentive payment for hiring apprentices aged 16-18.'
    },
    timeframe: '12 months to 4 years, depending on apprenticeship level',
    color: 'emerald',
    link: '/apprenticeships'
  },
  {
    id: 'skills-bootcamps',
    title: 'Skills Bootcamp Graduates',
    tagline: 'Ready-trained talent for immediate impact',
    description: 'Connect with motivated individuals who have completed intensive training in high-demand sectors. Skills Bootcamp graduates have industry-relevant qualifications and are job-ready.',
    icon: <BookOpen className="w-6 h-6" />,
    benefits: [
      'Access diverse, job-ready candidates',
      'No recruitment fees or lengthy processes',
      'Graduates have up-to-date, in-demand skills',
      'Training tailored to industry requirements',
      'Support for onboarding and integration'
    ],
    eligibility: [
      'Open to businesses of all sizes',
      'Must provide genuine employment opportunities',
      'Roles should match graduate skill areas',
      'Commitment to fair recruitment practices'
    ],
    funding: {
      available: false,
      details: 'No direct funding, but free recruitment support and candidate screening provided'
    },
    timeframe: 'Immediate placement following bootcamp completion',
    color: 'blue',
    link: '/bootcamps'
  },
  {
    id: 't-levels',
    title: 'T Levels',
    tagline: 'Industry placements for young talent',
    description: 'Host industry placements for 16-19 year olds studying T Levels, the new technical qualification equivalent to 3 A Levels. Students spend at least 45 days in the workplace as part of their course.',
    icon: <Clock className="w-6 h-6" />,
    benefits: [
      'Build a talent pipeline for junior roles',
      'Develop staff mentoring skills',
      'Fresh perspectives from young learners',
      'No cost to your business',
      'Flexible placement scheduling'
    ],
    eligibility: [
      'Must provide meaningful work experience',
      'Need capacity to supervise young people',
      'Placement must relate to student\'s course',
      'Minimum of 315 hours/45 days placement'
    ],
    funding: {
      available: true,
      details: 'Completely free for employers. Government may provide support with costs for equipment, administration, or staff time.'
    },
    timeframe: '45 days minimum, can be arranged flexibly',
    color: 'purple',
    link: '/t-levels'
  },
  {
    id: 'connect-to-work',
    title: 'Connect to Work',
    tagline: 'Helping disadvantaged groups into employment',
    description: 'Support individuals from disadvantaged backgrounds into employment. The Connect to Work programme offers tailored support for both candidates and employers to ensure successful long-term placements.',
    icon: <Handshake className="w-6 h-6" />,
    benefits: [
      'Access motivated, pre-screened candidates',
      'Ongoing support for both employer and employee',
      'Increase workplace diversity and inclusion',
      'Contribute to community development',
      'Improve corporate social responsibility'
    ],
    eligibility: [
      'Open to employers of all sizes',
      'Must provide sustainable employment',
      'Commitment to inclusive workplace practices',
      'Willingness to provide reasonable adjustments'
    ],
    funding: {
      available: true,
      details: 'Wage subsidies available for first 6 months. Additional funding for workplace adaptations if needed.'
    },
    timeframe: 'Ongoing programme with immediate placement opportunities',
    color: 'amber',
    link: '/connect-to-work'
  },
  {
    id: 'work-well',
    title: 'Work Well Programme',
    tagline: 'Supporting health and wellbeing in the workplace',
    description: 'The Work Well Programme helps businesses create healthier workplaces and support employees with health conditions to remain in or return to work. Includes recruitment support for those with health barriers.',
    icon: <CheckSquare className="w-6 h-6" />,
    benefits: [
      'Support for recruiting people with health conditions',
      'Advice on workplace adjustments and accessibility',
      'Training for managers on supporting health at work',
      'Increased retention and reduced sick leave',
      'Access to health and wellbeing resources'
    ],
    eligibility: [
      'Yorkshire-based businesses of any size',
      'Commitment to workplace health and wellbeing',
      'Willingness to implement reasonable adjustments',
      'Participation in programme evaluation'
    ],
    funding: {
      available: true,
      details: 'Grants available for workplace adaptations. Free health-focused recruitment support and training.'
    },
    timeframe: 'Continuous support with immediate benefits',
    color: 'rose',
    link: '/work-well'
  }
];

// Enhanced success stories with more detailed metrics
interface BusinessImpact {
  metric: string;
  value: string;
  icon: React.ReactNode;
}

interface SuccessStory {
  id: string;
  programme: string;
  programmePath: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  image: string;
  logo: string;
  businessSize: string;
  industry: string;
  impact: BusinessImpact[];
  challenge: string;
  solution: string;
}

const successStories: SuccessStory[] = [
  {
    id: 'tech-solutions',
    programme: 'Apprenticeships',
    programmePath: '/apprenticeships',
    quote: "The support we received in setting up our apprenticeship programme was invaluable. We've now hired 5 apprentices who are making a real impact on our business growth and innovation.",
    author: "James Wilson",
    role: "Operations Director",
    company: "Yorkshire Tech Solutions",
    location: "Sheffield",
    image: "/images/success-story-1.jpg",
    logo: "/images/logos/yorkshire-tech.png",
    businessSize: "SME (25-49 employees)",
    industry: "Information Technology",
    impact: [
      { 
        metric: "Staff retention increase", 
        value: "32%", 
        icon: <Users className="w-5 h-5" />
      },
      { 
        metric: "Cost saving on recruitment", 
        value: "£45,000", 
        icon: <Wallet className="w-5 h-5" />
      },
      { 
        metric: "New skills introduced", 
        value: "6", 
        icon: <GraduationCap className="w-5 h-5" />
      }
    ],
    challenge: "Struggling to find skilled developers with knowledge of our specific tech stack, while facing high recruitment agency fees and long time-to-hire periods.",
    solution: "Partnered with local colleges to develop a tailored apprenticeship programme focusing on our required skills. Created a mentoring structure to support apprentices."
  },
  {
    id: 'sheffield-digital',
    programme: 'Skills Bootcamp Graduates',
    programmePath: '/bootcamps',
    quote: "Skills bootcamp graduates brought exactly the digital marketing expertise we needed. The recruitment process was smooth, and the pre-screening ensured candidates matched our requirements perfectly.",
    author: "Sarah Ahmed",
    role: "HR Manager",
    company: "Sheffield Digital",
    location: "Sheffield",
    image: "/images/success-story-2.jpg",
    logo: "/images/logos/sheffield-digital.png",
    businessSize: "SME (10-24 employees)",
    industry: "Digital Marketing",
    impact: [
      { 
        metric: "Time-to-hire reduced", 
        value: "65%", 
        icon: <Clock className="w-5 h-5" />
      },
      { 
        metric: "New client acquisition", 
        value: "+12", 
        icon: <Briefcase className="w-5 h-5" />
      },
      { 
        metric: "ROI on hiring process", 
        value: "280%", 
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    challenge: "Needed to quickly scale our digital marketing team to handle new clients, but struggled to find candidates with up-to-date skills in rapidly evolving digital channels.",
    solution: "Recruited three graduates from digital marketing skills bootcamps who brought fresh knowledge of emerging platforms and analytics tools."
  },
  {
    id: 'barnsley-manufacturing',
    programme: 'T Levels',
    programmePath: '/t-levels',
    quote: "T Level industry placements have transformed how we develop junior talent. These young people bring energy, fresh perspectives and digital literacy that has improved our processes.",
    author: "Richard Brooks",
    role: "Production Manager",
    company: "Barnsley Manufacturing Ltd",
    location: "Barnsley",
    image: "/images/success-story-4.jpg",
    logo: "/images/logos/barnsley-manufacturing.png",
    businessSize: "Medium (50-99 employees)",
    industry: "Manufacturing",
    impact: [
      { 
        metric: "Process efficiency improved", 
        value: "18%", 
        icon: <TrendingUp className="w-5 h-5" />
      },
      { 
        metric: "New permanent hires", 
        value: "3", 
        icon: <Users className="w-5 h-5" />
      },
      { 
        metric: "Staff development hours", 
        value: "120+", 
        icon: <GraduationCap className="w-5 h-5" />
      }
    ],
    challenge: "An ageing workforce with traditional skill sets, struggling to modernise processes and attract younger talent into the manufacturing sector.",
    solution: "Hosted T Level students for industrial placements, creating a pipeline of young talent with technical education and practical experience."
  },
  {
    id: 'yorkshire-innovators',
    programme: 'Connect to Work',
    programmePath: '/connect-to-work',
    quote: "Connect to Work helped us tap into a diverse talent pool we hadn't considered before. The ongoing support for both us and the employees has led to excellent retention rates.",
    author: "Michael Chen",
    role: "Talent Acquisition Lead",
    company: "Yorkshire Innovators",
    location: "Doncaster",
    image: "/images/success-story-3.jpg",
    logo: "/images/logos/yorkshire-innovators.png",
    businessSize: "Medium (100-249 employees)",
    industry: "Research & Development",
    impact: [
      { 
        metric: "Workforce diversity increased", 
        value: "28%", 
        icon: <Users className="w-5 h-5" />
      },
      { 
        metric: "Retention rate", 
        value: "92%", 
        icon: <Target className="w-5 h-5" />
      },
      { 
        metric: "Innovation increase", 
        value: "35%", 
        icon: <Lightbulb className="w-5 h-5" />
      }
    ],
    challenge: "Limited diversity in our R&D team was affecting our product innovation. Traditional recruitment channels weren't helping us reach diverse candidates.",
    solution: "Partnered with Connect to Work to reach candidates from different backgrounds, with additional support for workplace integration and ongoing mentoring."
  }
];

const colorClasses: Record<ColorType, {
  card: string;
  icon: string;
  button: string;
  tag: string;
  light: string;
}> = {
  emerald: {
    card: 'bg-emerald-50 border-emerald-100',
    icon: 'bg-emerald-100 text-emerald-600',
    button: 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100',
    tag: 'bg-emerald-100/50 text-emerald-700',
    light: 'text-emerald-700'
  },
  blue: {
    card: 'bg-blue-50 border-blue-100',
    icon: 'bg-blue-100 text-blue-600',
    button: 'text-blue-700 bg-blue-50 hover:bg-blue-100',
    tag: 'bg-blue-100/50 text-blue-700',
    light: 'text-blue-700'
  },
  purple: {
    card: 'bg-purple-50 border-purple-100',
    icon: 'bg-purple-100 text-purple-600',
    button: 'text-purple-700 bg-purple-50 hover:bg-purple-100',
    tag: 'bg-purple-100/50 text-purple-700',
    light: 'text-purple-700'
  },
  amber: {
    card: 'bg-amber-50 border-amber-100',
    icon: 'bg-amber-100 text-amber-600',
    button: 'text-amber-700 bg-amber-50 hover:bg-amber-100',
    tag: 'bg-amber-100/50 text-amber-700',
    light: 'text-amber-700'
  },
  rose: {
    card: 'bg-rose-50 border-rose-100',
    icon: 'bg-rose-100 text-rose-600',
    button: 'text-rose-700 bg-rose-50 hover:bg-rose-100',
    tag: 'bg-rose-100/50 text-rose-700',
    light: 'text-rose-700'
  }
}

export default function RecruitmentSupportPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [activeProgramme, setActiveProgramme] = useState<string | null>(null)
  const [activeStory, setActiveStory] = useState<string>(successStories[0].id)

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    setCurrentStep(currentStep + 1)
  }

  // Assessment questions
  const assessmentQuestions = [
    {
      id: 'recruitment_challenge',
      question: 'What is your biggest recruitment challenge?',
      options: [
        { value: 'finding_candidates', label: 'Finding qualified candidates' },
        { value: 'skills_gap', label: 'Skills gaps in applicants' },
        { value: 'retention', label: 'Retaining staff' },
        { value: 'resource', label: 'Lack of recruitment resources' },
        { value: 'cost', label: 'Cost of hiring' }
      ]
    },
    {
      id: 'timeframe',
      question: 'How quickly do you need to fill positions?',
      options: [
        { value: 'immediate', label: 'Immediately (1-4 weeks)' },
        { value: 'short_term', label: 'Short term (1-3 months)' },
        { value: 'long_term', label: 'Long term (3+ months)' },
        { value: 'ongoing', label: 'Ongoing/continuous recruitment' }
      ]
    },
    {
      id: 'training_capacity',
      question: 'What is your capacity to train new staff?',
      options: [
        { value: 'high', label: 'Extensive training resources available' },
        { value: 'medium', label: 'Some training capacity' },
        { value: 'low', label: 'Limited training capacity' },
        { value: 'none', label: 'No capacity to train' }
      ]
    }
  ]

  // Determine which recruitment options to emphasize based on answers
  const getRecommendations = () => {
    if (!answers.recruitment_challenge) return null

    const recommendations = {
      title: '',
      description: '',
      primaryOptions: [] as string[],
      secondaryOptions: [] as string[]
    }

    // Logic to determine recommendations based on answers
    if (answers.recruitment_challenge === 'finding_candidates') {
      recommendations.title = 'Expand Your Candidate Pipeline'
      recommendations.description = 'Based on your needs, these programmes can help you find qualified candidates:'
      
      if (answers.timeframe === 'immediate') {
        recommendations.primaryOptions = ['Skills Bootcamp Graduates', 'Work Well Programme']
        recommendations.secondaryOptions = ['Connect to Work', 'Graduate Schemes']
      } else {
        recommendations.primaryOptions = ['Apprenticeships', 'T Levels']
        recommendations.secondaryOptions = ['Skills Bootcamp Graduates', 'Graduate Schemes']
      }
    } else if (answers.recruitment_challenge === 'skills_gap') {
      recommendations.title = 'Build Skills In-House'
      recommendations.description = 'These options can help you develop talent with the exact skills you need:'
      
      if (answers.training_capacity === 'high' || answers.training_capacity === 'medium') {
        recommendations.primaryOptions = ['Apprenticeships', 'T Levels']
        recommendations.secondaryOptions = ['Skills Bootcamp Partnerships', 'Graduate Development']
      } else {
        recommendations.primaryOptions = ['Skills Bootcamp Graduates', 'Connect to Work']
        recommendations.secondaryOptions = ['Work Well Programme', 'Local Training Partnerships']
      }
    }
    // Additional logic would be added for other challenge types

    return recommendations
  }

  const recommendations = getRecommendations()

  // Handler for programme card clicks
  const handleProgrammeClick = (id: string) => {
    setActiveProgramme(activeProgramme === id ? null : id)
  }

  // Add new handler for success story navigation
  const handleStoryChange = (id: string) => {
    setActiveStory(id)
  }

  return (
    <div className="bg-white">
      {/* Hero Section - Completely Redesigned */}
      <div className="relative bg-[#1e293b] py-20 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-[#1e293b]/90 to-[#1e293b]/80 z-10" />
          <Image
            src="/images/recruitment-hero.jpg"
            alt="Business team discussing recruitment"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Recruitment Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Solving Your Workforce Challenges
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Struggling to find the right talent? We connect Yorkshire businesses with local recruitment programmes, funding opportunities, and talent pipelines to build resilient teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors text-lg"
              >
                Take Recruitment Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                href="#recruitment-programmes"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-lg"
              >
                Explore Solutions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Common Recruitment Challenges Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Recruitment Challenges</h2>
            <p className="text-lg text-gray-600">
              Many Yorkshire businesses face these obstacles when building their workforce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PieChart className="h-6 w-6" />,
                title: "Skills Shortages",
                description: "Difficulty finding candidates with the specific skills your business needs"
              },
              {
                icon: <BarChart4 className="h-6 w-6" />,
                title: "High Recruitment Costs",
                description: "Expensive recruitment fees and lengthy hiring processes that drain resources"
              },
              {
                icon: <BadgeHelp className="h-6 w-6" />,
                title: "Retention Issues",
                description: "High turnover rates and challenges retaining quality team members"
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Assessment Tool */}
      <div id="assessment" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Recruitment Solutions Finder</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Answer a few quick questions about your recruitment challenges to find the most suitable programmes and support
              </p>
            </div>

            {currentStep < assessmentQuestions.length ? (
              <div className="mb-6">
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(currentStep / assessmentQuestions.length) * 100}%` }}></div>
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    Question {currentStep + 1} of {assessmentQuestions.length}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {assessmentQuestions[currentStep].question}
                </h3>
                
                <div className="space-y-3">
                  {assessmentQuestions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                      onClick={() => handleAnswerSelect(assessmentQuestions[currentStep].id, option.value)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {recommendations && (
                  <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{recommendations.title}</h3>
                    <p className="text-gray-600 mb-6">{recommendations.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Recommended Solutions:</h4>
                      <div className="space-y-2">
                        {recommendations.primaryOptions.map((option, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {recommendations.secondaryOptions.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Also Consider:</h4>
                        <div className="space-y-2">
                          {recommendations.secondaryOptions.map((option, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full border-2 border-indigo-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-800">{option}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-indigo-100">
                      <Link 
                        href="#recruitment-programmes"
                        className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                      >
                        View all recruitment programmes
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <button 
                    onClick={() => setCurrentStep(0)}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Start again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recruitment Programmes Detailed Section */}
      <div id="recruitment-programmes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recruitment Programmes</h2>
            <p className="text-lg text-gray-600">
              Explore the different recruitment pathways available to Yorkshire businesses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recruitmentProgrammes.map((programme) => (
              <div 
                key={programme.id}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  activeProgramme === programme.id ? 'ring-2 ring-gray-900' : 'hover:shadow-lg'
                }`}
              >
                {/* Card Header with Image */}
                <div className="relative h-48">
                  <Image 
                    src={`/images/recruitment-${programme.id}.jpg`} 
                    alt={programme.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${colorClasses[programme.color].icon}`}>
                        {programme.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{programme.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">{programme.tagline}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="bg-white p-5 border border-gray-100 border-t-0 rounded-b-xl">
                  <p className="text-gray-700 mb-4">{programme.description}</p>
                  
                  {/* Key Indicators */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600 gap-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{programme.timeframe}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 gap-1">
                      <Banknote className="h-4 w-4 text-gray-400" />
                      <span>{programme.funding.available ? 'Funding available' : 'No direct funding'}</span>
                    </div>
                  </div>

                  {/* Toggle Details Button */}
                  <button
                    onClick={() => handleProgrammeClick(programme.id)}
                    className={`w-full mt-2 group inline-flex items-center justify-between px-4 py-2 rounded-lg ${colorClasses[programme.color].button} transition-colors`}
                  >
                    <span className="font-medium">
                      {activeProgramme === programme.id ? 'Show less' : 'View details'}
                    </span>
                    <ChevronRight className={`h-5 w-5 transition-transform ${activeProgramme === programme.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>

                  {/* Expanded Details */}
                  {activeProgramme === programme.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          {programme.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className={`h-5 w-5 ${colorClasses[programme.color].light} flex-shrink-0 mt-0.5`} />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Eligibility */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Eligibility & Requirements</h4>
                        <ul className="space-y-2">
                          {programme.eligibility.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${colorClasses[programme.color].icon} mt-2 flex-shrink-0`} />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Funding Details */}
                      <div className="mb-4 bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Funding Information</h4>
                        <p className="text-gray-700 text-sm">{programme.funding.details}</p>
                      </div>

                      {/* Learn More Link */}
                      <Link
                        href={programme.link}
                        className={`inline-flex items-center font-medium ${colorClasses[programme.color].light} hover:underline`}
                      >
                        Learn more about {programme.title}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories - Enhanced Section */}
      <div id="success-stories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-indigo-600 mb-4">
              <Star className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Success Stories</span>
              <Star className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Business Impact</h2>
            <p className="text-lg text-gray-600">
              See how Yorkshire businesses have overcome recruitment challenges with our supported programmes
            </p>
          </div>

          {/* Story Navigation */}
          <div className="flex items-center justify-center space-x-2 mb-12 flex-wrap">
            {successStories.map((story) => (
              <button
                key={story.id}
                onClick={() => handleStoryChange(story.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors my-2
                  ${activeStory === story.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {story.company}
              </button>
            ))}
          </div>

          {/* Featured Success Story */}
          {successStories.map((story) => activeStory === story.id && (
            <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="lg:flex">
                {/* Left Column - Image and Company Info */}
                <div className="lg:w-5/12 relative">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={story.image}
                      alt={`${story.company} success story`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                    
                    {/* Company Info Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center">
                          <Image
                            src={story.logo}
                            alt={story.company}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{story.company}</h3>
                          <p className="text-gray-200 text-sm">{story.location}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                          {story.industry}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                          {story.businessSize}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Story Details */}
                <div className="lg:w-7/12 p-6 lg:p-8">
                  {/* Programme Tag */}
                  <Link
                    href={story.programmePath}
                    className="inline-flex items-center mb-4 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    <span className="mr-1">{story.programme}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200 transform -scale-x-100" />
                    <blockquote className="text-lg text-gray-700 italic pl-6">
                      "{story.quote}"
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={story.image}
                          alt={story.author}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-900">{story.author}</p>
                        <p className="text-sm text-gray-600">{story.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Impact Metrics */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {story.impact.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600 mr-2">
                            {item.icon}
                          </div>
                          <p className="text-sm text-gray-600">{item.metric}</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Challenge and Solution */}
                  <div className="border-t border-gray-100 pt-6 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-2">The Challenge</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-2">The Solution</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Story Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => {
                const currentIndex = successStories.findIndex(s => s.id === activeStory);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : successStories.length - 1;
                handleStoryChange(successStories[prevIndex].id);
              }}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={() => {
                const currentIndex = successStories.findIndex(s => s.id === activeStory);
                const nextIndex = currentIndex < successStories.length - 1 ? currentIndex + 1 : 0;
                handleStoryChange(successStories[nextIndex].id);
              }}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Personalised Recruitment Support</h2>
            <p className="text-lg text-gray-600">
              Our team of recruitment specialists can provide tailored advice for your business needs
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left side - Contact information */}
              <div className="md:w-5/12 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Our Team</h3>
                <p className="mb-8">
                  Our recruitment specialists work with local authorities across South Yorkshire to provide the best support for your business.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 text-indigo-200" />
                    <div>
                      <p className="font-medium">Email us at</p>
                      <a href="mailto:recruitment@southyorkshire.gov.uk" className="text-white hover:text-indigo-100">
                        recruitment@southyorkshire.gov.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-3 text-indigo-200" />
                    <div>
                      <p className="font-medium">Call us</p>
                      <a href="tel:01142734567" className="text-white hover:text-indigo-100">
                        0114 273 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-3 text-indigo-200" />
                    <div>
                      <p className="font-medium">Book a consultation</p>
                      <p className="text-indigo-100">30-minute free virtual meeting</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Local authority links */}
              <div className="md:w-7/12 bg-white p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Local Authority Support</h3>
                <p className="text-gray-600 mb-6">
                  Each local authority in South Yorkshire has dedicated business support teams who can help with your recruitment needs:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'Sheffield',
                      link: 'https://www.sheffield.gov.uk/business',
                      contact: '0114 273 4567'
                    },
                    {
                      name: 'Rotherham',
                      link: 'https://www.rotherham.gov.uk/business',
                      contact: '01709 382121'
                    },
                    {
                      name: 'Doncaster',
                      link: 'https://www.doncaster.gov.uk/business',
                      contact: '01302 735555'
                    },
                    {
                      name: 'Barnsley',
                      link: 'https://www.barnsley.gov.uk/business',
                      contact: '01226 773555'
                    }
                  ].map((authority) => (
                    <Link
                      key={authority.name}
                      href={authority.link}
                      className="group flex flex-col p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                    >
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-indigo-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">{authority.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Business Support Team</p>
                      <p className="text-sm text-indigo-600">{authority.contact}</p>
                      <div className="mt-2 text-indigo-600 text-sm font-medium group-hover:underline">
                        Visit website
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm font-medium"
                  >
                    Contact our central team
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 