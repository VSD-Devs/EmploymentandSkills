'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Trophy, Users, Building2, MapPin, Star, ArrowUpRight, BookOpen, Beaker, Globe, CheckCircle, Rocket } from 'lucide-react'

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
      ],
      highlights: [
        '300+ undergraduate courses',
        '£140m annual research income',
        'Top 10 for nursing education',
        '95% graduate employment rate',
        'Degree apprenticeships available',
        'State-of-the-art facilities'
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
            src="/images/sy-graduation-ceremony.jpg"
            alt="South Yorkshire graduation ceremony"
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
              <span className="text-sm font-medium tracking-wide uppercase">South Yorkshire Universities</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              South Yorkshire's Higher Education Network
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proudly supporting 60,000+ students across 2 world-class universities in the Sheffield City Region
            </p>
          </div>
        </div>
      </div>

      {/* South Yorkshire by Numbers */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">South Yorkshire by Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key facts about our higher education sector
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <GraduationCap className="h-8 w-8 mx-auto" />, title: "Total Students", value: "60,000+" },
              { icon: <Trophy className="h-8 w-8 mx-auto" />, title: "Graduate Retention", value: "78% stay in region" },
              { icon: <BookOpen className="h-8 w-8 mx-auto" />, title: "Courses Offered", value: "1,200+ programmes" },
              { icon: <Rocket className="h-8 w-8 mx-auto" />, title: "Graduate Startups", value: "200+ annually" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 mb-4">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.title}</div>
              </div>
            ))}
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

      {/* Why Study in South Yorkshire */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/sy-student-life.jpg"
                alt="Student life in South Yorkshire"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Study in South Yorkshire?</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>£200m+ annual investment in university facilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Strong industry partnerships with local employers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Vibrant student cities with affordable living costs</span>
                </li>
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Image
                  src="/sy-mca-logo.svg"
                  alt="South Yorkshire Mayoral Combined Authority"
                  width={180}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/sheffield-city-region-logo.svg"
                  alt="Sheffield City Region"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
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

      {/* Career Pathways Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Career Pathways
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore courses that lead to in-demand local careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital & Tech",
                careers: ["Software Developer", "Data Analyst", "Cyber Security"],
                icon: "💻",
                colour: "bg-blue-100"
              },
              {
                title: "Health & Social Care",
                careers: ["Nurse", "Social Worker", "Physiotherapist"],
                icon: "🏥",
                colour: "bg-green-100"
              },
              {
                title: "Advanced Manufacturing",
                careers: ["Engineering", "Product Design", "Robotics"],
                icon: "🔧",
                colour: "bg-orange-100"
              }
            ].map((pathway, index) => (
              <div key={index} className="p-6 rounded-xl">
                <div className={`${pathway.colour} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {pathway.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{pathway.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {pathway.careers.map((career, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Quote Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl text-gray-900">
            <p className="mb-4">
              "My degree gave me direct access to Sheffield's tech scene through industry placements. 
              I had a job offer before graduating!"
            </p>
            <footer className="text-gray-600">
              - Sarah, Computer Science Graduate now at local startup
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default UniversityPage 