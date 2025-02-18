'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Trophy, Users, Building2, MapPin, Star, ArrowUpRight, BookOpen, Beaker, Globe, CheckCircle, Rocket, ChevronRight, Laptop, Stethoscope, Cog, Briefcase } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

const UniversityPage = () => {
  const universities = [
    {
      name: 'Sheffield Hallam University',
      description: 'A modern university focused on real-world experience and professional career development. Known for strong industry connections and practical learning approaches.',
      image: '/images/shu.jpg',
      url: 'https://www.shu.ac.uk/courses',
      location: 'Sheffield City Centre & Collegiate Campus',
      facts: [
        {
          icon: <Trophy className="w-5 h-5" />,
          title: 'Teaching Excellence',
          description: 'Silver TEF Award | 86% student satisfaction'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Student Community',
          description: '32,000 students | 4,000 international'
        },
        {
          icon: <Building2 className="w-5 h-5" />,
          title: 'Industry Links',
          description: '1,800+ employer partnerships'
        }
      ]
    },
    {
      name: 'University of Sheffield',
      description: 'A world-renowned Russell Group university known for research excellence and innovative teaching. Offering a wide range of courses across multiple disciplines.',
      image: '/images/uniofsheffield.jpeg',
      url: 'https://www.sheffield.ac.uk/courses',
      location: 'Sheffield City Centre & Western Bank',
      facts: [
        {
          icon: <Star className="w-5 h-5" />,
          title: 'World Ranking',
          description: 'Top 100 World University'
        },
        {
          icon: <Beaker className="w-5 h-5" />,
          title: 'Research Excellence',
          description: '92% of research rated world-leading'
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Global Community',
          description: '29,000 students from 150 countries'
        }
      ]
    }
  ]

  const pathways = [
    {
      title: "Digital & Technology",
      description: "Develop skills in software development, data analysis, and cyber security",
      icon: <Laptop className="w-6 h-6" />,
      colour: "blue"
    },
    {
      title: "Healthcare & Medicine",
      description: "Train for careers in nursing, medicine, and allied health professions",
      icon: <Stethoscope className="w-6 h-6" />,
      colour: "green"
    },
    {
      title: "Engineering & Manufacturing",
      description: "Learn about advanced manufacturing, robotics, and sustainable engineering",
      icon: <Cog className="w-6 h-6" />,
      colour: "orange"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Young People', href: '/young-people' },
        { label: 'University', href: '/university' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/university-hero.jpg"
            alt="University opportunities in South Yorkshire"
            fill
            className="object-cover object-center brightness-[0.7] saturate-[0.85]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium tracking-wide text-blue-400 uppercase">Higher Education</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Discover Your Future at South Yorkshire's Universities
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join over 60,000 students at our world-class universities, offering innovative courses and excellent career prospects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Universities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from two prestigious universities, each offering unique strengths and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {universities.map((uni, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium">{uni.location}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                  <p className="text-gray-600 mb-6">{uni.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {uni.facts.map((fact, factIndex) => (
                      <div key={factIndex} className="space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                          {fact.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{fact.title}</div>
                          <div className="text-xs text-gray-600">{fact.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={uni.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  >
                    <span>View Courses</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Pathways Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Career Pathways</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore courses aligned with South Yorkshire's growing industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-${pathway.colour}-600 bg-${pathway.colour}-100 mb-4`}>
                  {pathway.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pathway.title}</h3>
                <p className="text-gray-600">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporting Your Journey</h2>
              <div className="space-y-4">
                {[
                  { icon: <BookOpen className="w-5 h-5" />, text: "Course guidance and application support" },
                  { icon: <Building2 className="w-5 h-5" />, text: "Modern accommodation options" },
                  { icon: <Users className="w-5 h-5" />, text: "Vibrant student communities" },
                  { icon: <Briefcase className="w-5 h-5" />, text: "Career development services" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/student-support.jpg"
                alt="Student support services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore courses, compare universities, and find the perfect path for your future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.shu.ac.uk/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <span>Sheffield Hallam Courses</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="https://www.sheffield.ac.uk/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <span>University of Sheffield Courses</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UniversityPage 