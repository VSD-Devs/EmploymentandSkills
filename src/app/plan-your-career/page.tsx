'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Briefcase, ChevronRight, Clock, GraduationCap, Map, Target, Users, Calendar, Rocket, Brain, Lightbulb, Compass } from 'lucide-react'
import CareerQuiz from '@/components/CareerQuiz'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function PlanYourCareer() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const careerTools = [
    {
      title: "Career Quiz",
      description: "Discover your strengths and potential career paths with our interactive quiz",
      icon: <Brain className="w-6 h-6 text-fuchsia-600" />,
      image: '/images/career-quiz.jpg',
      action: () => setIsQuizOpen(true),
      cta: "Take the Quiz"
    },
    {
      title: "Skills Explorer",
      description: "Learn about the skills that employers are looking for in South Yorkshire",
      icon: <Lightbulb className="w-6 h-6 text-fuchsia-600" />,
      image: '/images/skills-explorer.jpg',
      link: '/skills',
      cta: "Explore Skills"
    },
    {
      title: "Career Compass",
      description: "Get personalised guidance from our friendly career advisors",
      icon: <Compass className="w-6 h-6 text-fuchsia-600" />,
      image: '/images/career-advisor.jpg',
      link: '/career-advice',
      cta: "Book a Session"
    }
  ]

  const pathways = [
    {
      title: "Apprenticeships",
      description: "Earn while you learn with hands-on experience",
      icon: <Briefcase className="h-6 w-6" />,
      link: '/apprenticeships'
    },
    {
      title: "College & University",
      description: "Explore academic routes and qualifications",
      icon: <GraduationCap className="h-6 w-6" />,
      link: '/university'
    },
    {
      title: "Training Courses",
      description: "Develop specific skills with focused training",
      icon: <BookOpen className="h-6 w-6" />,
      link: '/courses'
    },
    {
      title: "Work Experience",
      description: "Get real workplace experience locally",
      icon: <Users className="h-6 w-6" />,
      link: '/work-experience'
    }
  ]

  const successStories = [
    {
      name: "Alex",
      age: "18",
      story: "After using the career planning tools, I found my passion for digital marketing. Now I'm doing an apprenticeship at a local agency!",
      image: "/images/success-story-1.jpg"
    },
    {
      name: "Sarah",
      age: "17",
      story: "The career advisors helped me choose my A-levels. I'm now on track to study Engineering at university.",
      image: "/images/success-story-2.jpg"
    },
    {
      name: "Jordan",
      age: "19",
      story: "Through work experience placements, I discovered my love for healthcare. I'm now training to become a nurse.",
      image: "/images/success-story-3.jpg"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Plan Your Career', href: '/plan-your-career' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/planning.jpg"
            alt="Young people exploring career opportunities in South Yorkshire"
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
            <div className="inline-flex items-center gap-2 text-fuchsia-300 mb-4">
              <div className="p-1.5 rounded-lg bg-fuchsia-500/10 backdrop-blur-sm border border-fuchsia-400/20">
                <Compass className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Your Future Starts Here</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Plan Your Future Career
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Not sure what career path to take? We're here to help you explore your options and find your perfect career in South Yorkshire.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsQuizOpen(true)}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium transition-colors duration-200"
              >
                Take Career Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                href="/career-advice"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-colors duration-200"
              >
                Speak to an Advisor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Career Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tools to Guide Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our career planning tools to discover your perfect career path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerTools.map((tool, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-50 flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                {tool.action ? (
                  <button
                    onClick={tool.action}
                    className="flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    {tool.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <Link
                    href={tool.link}
                    className="flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    {tool.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Pathways Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Your Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover different career paths available to young people in South Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pathways.map((pathway, index) => (
              <Link
                key={index}
                href={pathway.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-fuchsia-50 group-hover:bg-fuchsia-100 flex items-center justify-center mb-4 transition-colors duration-300">
                  {pathway.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pathway.title}</h3>
                <p className="text-gray-600 mb-4">{pathway.description}</p>
                <div className="flex items-center text-fuchsia-600 group-hover:text-fuchsia-700 font-medium">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how other young people in South Yorkshire found their career path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={story.image}
                  alt={`${story.name}'s success story`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <span className="text-sm text-gray-500">Age {story.age}</span>
                </div>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Quiz Modal */}
      <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  )
} 