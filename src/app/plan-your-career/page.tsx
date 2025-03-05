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
    },
    {
      title: "Funded Training",
      description: "Find training opportunities to develop your skills",
      icon: <Briefcase className="h-6 w-6" />,
      link: '/funded-training-for-adults'
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
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Plan Your Career', href: '/plan-your-career' },
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-teal-900 py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-sm border border-blue-500/30">
                <Compass className="h-4 w-4 text-blue-300" />
                <span className="text-xs md:text-sm font-medium text-blue-100">Career Planning</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Plan Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">South Yorkshire</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                Discover pathways, explore opportunities, and get the guidance you need to build a successful future
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-blue-600/50 text-white font-medium backdrop-blur-sm border border-blue-500/50 hover:bg-blue-600/70 transition-colors text-sm sm:text-base w-full xs:w-auto"
                >
                  Take Career Quiz
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <Link
                  href="#tools"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base w-full xs:w-auto"
                >
                  View Career Tools
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-6 sm:mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-blue-500/20 blur-3xl"></div>
                <Image 
                  src="/images/careers-hero.jpg"
                  alt="Diverse young professionals discussing career paths"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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