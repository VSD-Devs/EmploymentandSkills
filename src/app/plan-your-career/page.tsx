'use client'

import { useState } from 'react'
import { ArrowRight, BookOpen, Briefcase, ChevronRight, Clock, GraduationCap, Map, Target, Users, Calendar, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CareerQuiz from '@/components/CareerQuiz'

export default function PlanYourCareer() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const localImages = {
    hero: '/images/local/career-planning-hero.jpg',
    skills: '/images/local/skills-workshop.jpg',
    advisor: '/images/local/career-advisor.jpg',
    event: '/images/local/career-event.jpg',
    map: '/images/local/south-yorkshire-map.jpg'
  }

  const steps = [
    {
      title: "Assess Your Skills",
      description: "Take our career quiz to discover your strengths and interests",
      icon: <Target className="w-6 h-6" />,
      image: localImages.skills,
      action: () => setIsQuizOpen(true)
    },
    {
      title: "Explore Local Opportunities",
      description: "Browse through different sectors and roles in South Yorkshire",
      icon: <Map className="w-6 h-6" />,
      image: localImages.map,
      action: () => window.location.href = '/pathways'
    },
    {
      title: "Meet Our Advisors",
      description: "Get personalised guidance from our local career experts",
      icon: <Users className="w-6 h-6" />,
      image: localImages.advisor,
      action: () => window.location.href = '/career-advice'
    },
    {
      title: "Attend Local Events",
      description: "Join career fairs and workshops in your area",
      icon: <Calendar className="w-6 h-6" />,
      image: localImages.event,
      action: () => window.location.href = '/events'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section with Local Imagery */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={localImages.hero}
            alt="Career planning and development in South Yorkshire"
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
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Career Development</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Plan Your Career Journey
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Take control of your professional future with our step-by-step career planning guide. Whether you're starting out or looking to progress, we'll help you navigate your path to success in South Yorkshire.
            </p>
          </div>
        </div>
      </div>

      {/* Local Authority Section */}
      <div className="bg-gray-50 py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Supported by South Yorkshire Authorities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our career planning services are backed by local councils and businesses, ensuring you get the best support for your future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Image
              src="/images/local/sheffield-council-logo.png"
              alt="Sheffield City Council"
              width={200}
              height={100}
              className="object-contain h-16"
            />
            <Image
              src="/images/local/rotherham-council-logo.png"
              alt="Rotherham Metropolitan Borough Council"
              width={200}
              height={100}
              className="object-contain h-16"
            />
            <Image
              src="/images/local/barnsley-council-logo.png"
              alt="Barnsley Metropolitan Borough Council"
              width={200}
              height={100}
              className="object-contain h-16"
            />
            <Image
              src="/images/local/doncaster-council-logo.png"
              alt="Doncaster Metropolitan Borough Council"
              width={200}
              height={100}
              className="object-contain h-16"
            />
          </div>
        </div>
      </div>

      {/* Planning Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Career Planning Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these steps to create a clear and actionable career plan tailored to your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-4 transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <button
                  onClick={step.action}
                  className="flex items-center text-emerald-600 group-hover:text-emerald-700 font-medium"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Pathways Section */}
      <div className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Career Pathways
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover different career routes available to young people in South Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education & Training</h3>
                <p className="text-gray-600 mb-4">
                  Explore university, college, and training options to build your qualifications
                </p>
                <Link
                  href="/education"
                  className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Apprenticeships</h3>
                <p className="text-gray-600 mb-4">
                  Earn while you learn with hands-on experience in your chosen industry
                </p>
                <Link
                  href="/apprenticeships"
                  className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Discover Opportunities
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Employment</h3>
                <p className="text-gray-600 mb-4">
                  Find entry-level jobs and start building your career experience
                </p>
                <Link
                  href="/jobs"
                  className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Browse Jobs
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Quiz Modal */}
      <CareerQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  )
} 