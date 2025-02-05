'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Trophy, Users, Building2, MapPin, Star, ArrowUpRight, BookOpen, Beaker, Globe } from 'lucide-react'

const UniversityPage = () => {
  const universities = [
    {
      name: 'Sheffield Hallam University',
      description: 'A modern university focused on real-world experience and professional career development. Known for strong industry connections and practical learning approaches.',
      image: '/images/shu-campus.jpg',
      url: 'https://www.shu.ac.uk/courses?page=0&perPage=25&query=&yearOfEntry=2025%2F26',
      location: 'Sheffield City Centre & Collegiate Campus',
      facts: [
        {
          icon: <Trophy className="w-5 h-5" />,
          title: 'Teaching Excellence',
          description: 'Silver TEF Award for teaching quality'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Student Community',
          description: '30,000+ students from 100+ countries'
        },
        {
          icon: <Building2 className="w-5 h-5" />,
          title: 'Modern Facilities',
          description: '£100m campus investment'
        }
      ],
      highlights: [
        'Practical, career-focused courses',
        'Strong industry partnerships',
        'City centre location',
        'Professional placements',
        'Modern learning facilities',
        'Excellent student support'
      ],
      colour: 'purple'
    },
    {
      name: 'University of Sheffield',
      description: 'A world-renowned Russell Group university known for research excellence and innovative teaching. Offering a wide range of courses across multiple disciplines.',
      image: '/images/uos-campus.jpg',
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
      ],
      highlights: [
        'Russell Group member',
        'World-class research facilities',
        'Award-winning Students\' Union',
        'Global reputation',
        'Research-led teaching',
        'Strong graduate prospects'
      ],
      colour: 'blue'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/university-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/80 to-[#111827]/60 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm font-medium tracking-wide uppercase">Universities in South Yorkshire</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Our Regional Universities
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore South Yorkshire's leading universities and find the right path for your future studies
            </p>
          </div>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {universities.map((uni, index) => (
            <div key={index} className="group relative">
              {/* Decorative background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                uni.colour === 'purple' 
                  ? 'from-purple-50 to-purple-100/50' 
                  : 'from-blue-50 to-blue-100/50'
              } transform transition-transform duration-300 group-hover:scale-[1.02]`} />
              
              <div className="relative p-8 rounded-2xl">
                {/* University Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-8">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm font-medium">{uni.location}</span>
                    </div>
                  </div>
                </div>

                {/* University Info */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">{uni.name}</h2>
                  <p className="text-gray-600">{uni.description}</p>

                  {/* Facts Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {uni.facts.map((fact, factIndex) => (
                      <div key={factIndex} className="space-y-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          uni.colour === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {fact.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{fact.title}</div>
                          <div className="text-sm text-gray-600">{fact.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Key Highlights</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {uni.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            uni.colour === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                          }`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={uni.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-all ${
                      uni.colour === 'purple' 
                        ? 'bg-purple-600 hover:bg-purple-500' 
                        : 'bg-blue-600 hover:bg-blue-500'
                    } shadow-lg hover:shadow-xl group`}
                  >
                    <span>Explore Courses</span>
                    <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more about studying in Sheffield and get help with your university application
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: 'Course Guides',
                description: 'Detailed information about different courses and entry requirements'
              },
              {
                icon: <Building2 className="h-6 w-6" />,
                title: 'Accommodation',
                description: 'Find the perfect student accommodation in Sheffield'
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Student Life',
                description: 'Learn about life as a student in Sheffield'
              }
            ].map((resource, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-white shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="relative p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversityPage 