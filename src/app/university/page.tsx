'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Trophy, Users, Building2, MapPin, Star, ArrowUpRight, BookOpen, Beaker, Globe, CheckCircle, ArrowRight, ChevronRight, Laptop, Stethoscope, Cog, Briefcase, Award, BookmarkIcon, Clock, BookOpen as BookOpenIcon } from 'lucide-react'
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

  // Key statistics for higher education in South Yorkshire
  const keyStats = [
    {
      number: "60,000+",
      label: "Students",
      description: "Join a vibrant community of learners from all over the world",
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600" />
    },
    {
      number: "300+",
      label: "Degree Programmes",
      description: "Choose from a diverse range of courses to match your interests and career goals",
      icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600" />
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Young People', href: '/young-people' },
            { label: 'University', href: '/university' },
          ]} />
        </div>
      </div>

      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/50 backdrop-blur-sm border border-blue-500/30">
                <GraduationCap className="h-4 w-4 text-blue-300" />
                <span className="text-xs md:text-sm font-medium text-blue-100">Higher Education</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Discover Your Future at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">South Yorkshire's</span> Universities
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                Join over 60,000 students at our world-class universities, offering innovative courses and excellent career prospects
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="https://www.shu.ac.uk/courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-white text-blue-900 font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20 text-sm sm:text-base w-full xs:w-auto"
                >
                  Explore SHU Courses
                  <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="https://www.sheffield.ac.uk/courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-blue-700/50 text-white font-medium backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700/70 transition-colors text-sm sm:text-base w-full xs:w-auto"
                >
                  UoS Courses
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-6 sm:mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-blue-500/20 blur-3xl"></div>
                <Image 
                  src="/images/university-hero.jpg"
                  alt="Students collaborating at a South Yorkshire university, showcasing the vibrant academic environment"
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

      {/* Quick Stats - MOBILE OPTIMIZED */}
      <div className="relative mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {keyStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-blue-100">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">{stat.label}</p>
                  </div>
                </div>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Universities Section - MOBILE OPTIMIZED */}
      <section id="universities" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-blue-50 opacity-70 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-blue-50 opacity-70"></div>
        <div className="absolute top-40 left-0 w-10 sm:w-20 h-64 sm:h-96 bg-gradient-to-b from-blue-50 via-blue-100/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 shadow-sm">
              <Building2 className="h-4 w-4 text-blue-700" />
              <span className="text-xs md:text-sm font-medium text-blue-700">Our Universities</span>
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Prestigious <span className="text-blue-600">Learning Institutions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Choose from two renowned universities in South Yorkshire, each offering unique strengths and opportunities for your future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
            {universities.map((uni, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  
                  {/* Floating location badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-md">
                    <div className="flex items-center gap-1.5 text-blue-800">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">{uni.location}</span>
                    </div>
                  </div>
                  
                  {/* University name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{uni.name}</h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <p className="text-gray-600 mb-6 sm:mb-8">{uni.description}</p>

                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    {uni.facts.map((fact, factIndex) => (
                      <div key={factIndex} className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                          {fact.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{fact.title}</div>
                          <div className="text-xs sm:text-sm text-gray-600 mt-0.5">{fact.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={uni.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg w-full justify-center sm:w-auto"
                  >
                    <span>View Courses</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section - MOBILE OPTIMIZED */}
      <section id="support" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 mb-4 shadow-sm">
              <Users className="h-4 w-4 text-blue-700" />
              <span className="text-xs md:text-sm font-medium text-blue-700">Student Support</span>
            </span>
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 max-w-2xl">
              Supporting Your <span className="text-blue-600">University Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 mb-6 sm:mb-8">
                Our universities offer comprehensive support services to help you succeed academically and personally throughout your studies:
              </p>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {[
                  { icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />, title: "Course guidance and application support", description: "Expert advice on choosing the right course and completing your UCAS application successfully" },
                  { icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />, title: "Modern accommodation options", description: "Comfortable and affordable housing options both on and off campus" },
                  { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />, title: "Vibrant student communities", description: "Join societies, sports teams, and social groups to make lifelong friends" },
                  { icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />, title: "Career development services", description: "Career coaching, CV workshops, interview training and job placement assistance" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <Link
                  href="https://www.ucas.com/undergraduate/applying-university"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 sm:px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-blue-600 text-white text-sm sm:text-base font-medium hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all w-full sm:w-auto justify-center"
                >
                  Learn About Applying
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl order-first md:order-last mb-8 md:mb-0">
              <Image
                src="/images/student-support.jpg"
                alt="Students receiving support and guidance from university staff"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-base sm:text-lg md:text-xl font-medium">Comprehensive support throughout your academic journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - MOBILE OPTIMIZED */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-90 z-0"></div>
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-400/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-indigo-400/20 blur-3xl rounded-full"></div>
        
        {/* Animated particle effects - purely decorative */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white/10" 
              style={{
                width: `${Math.random() * 5 + 2}rem`,
                height: `${Math.random() * 5 + 2}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 max-w-2xl mx-auto leading-tight">
              Ready to Begin Your University Journey in South Yorkshire?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Explore courses, compare universities, and find the perfect path for your future academic and career success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href="https://www.shu.ac.uk/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Sheffield Hallam Courses</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.sheffield.ac.uk/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-blue-700/50 text-white font-medium backdrop-blur-sm border border-white/30 hover:bg-blue-700/70 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                <span>University of Sheffield Courses</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-14 md:mt-16">
              <Link
                href="/contact"
                className="text-sm sm:text-base text-blue-100 hover:text-white underline hover:no-underline transition-colors"
              >
                Need help? Contact our advisors for guidance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UniversityPage 