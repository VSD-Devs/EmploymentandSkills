'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, ChevronRight, GraduationCap, Briefcase, MessageSquare, Building2, BookOpen, PenTool, Calendar, MapPin, Quote } from 'lucide-react'

const marketplaceListings = [
  {
    type: 'Career Talk',
    title: 'Digital Careers Insight Session',
    description: 'Looking for tech professionals to discuss careers in software development and cyber security.',
    school: 'Meadowhead School',
    yearGroup: 'Year 10 & 11',
    timing: 'March 2024',
    date: 'Posted 2 days ago',
    href: '/educators/marketplace/digital-careers'
  },
  {
    type: 'Mock Interviews',
    title: 'Practice Interview Day',
    description: 'Seeking professionals to conduct mock interviews and provide feedback to sixth form students.',
    school: 'Notre Dame High School',
    yearGroup: 'Year 12',
    timing: 'April 2024',
    date: 'Posted 1 week ago',
    href: '/educators/marketplace/mock-interviews'
  },
  {
    type: 'Workshop',
    title: 'Engineering Workshop',
    description: 'Need engineering professionals to run hands-on workshops showcasing different engineering disciplines.',
    school: 'Silverdale School',
    yearGroup: 'Year 9',
    timing: 'May 2024',
    date: 'Posted 3 days ago',
    href: '/educators/marketplace/engineering-workshop'
  }
]

const opportunities = [
  {
    title: 'Mock Interviews',
    description: 'Help students prepare for their future careers by conducting practice interviews and providing valuable feedback.',
    icon: <MessageSquare className="w-6 h-6" />,
    duration: '2-3 hours',
    impact: 'Medium term',
    color: 'blue'
  },
  {
    title: 'Work Experience',
    description: 'Offer structured work placements to give students real-world exposure to your industry and workplace.',
    icon: <Briefcase className="w-6 h-6" />,
    duration: '1-2 weeks',
    impact: 'Long term',
    color: 'emerald'
  },
  {
    title: 'Industry Projects',
    description: 'Provide real business challenges for students to solve, helping them develop practical skills and understanding.',
    icon: <PenTool className="w-6 h-6" />,
    duration: 'Flexible',
    impact: 'Long term',
    color: 'purple'
  },
  {
    title: 'Career Talks',
    description: 'Share your career journey and industry insights to inspire students about future possibilities.',
    icon: <Users className="w-6 h-6" />,
    duration: '1 hour',
    impact: 'Short term',
    color: 'blue'
  },
  {
    title: 'Mentoring',
    description: 'Build ongoing relationships with students to provide guidance and support their career development.',
    icon: <GraduationCap className="w-6 h-6" />,
    duration: 'Ongoing',
    impact: 'Long term',
    color: 'emerald'
  },
  {
    title: 'Skills Workshops',
    description: 'Deliver practical sessions to help students develop specific industry-relevant skills.',
    icon: <BookOpen className="w-6 h-6" />,
    duration: '2-4 hours',
    impact: 'Medium term',
    color: 'purple'
  }
]

const testimonials = [
  {
    quote: "Being able to share my tech industry experience with local students has been incredibly rewarding. It's amazing to see their enthusiasm for digital careers grow.",
    author: "Sarah Johnson",
    role: "Software Developer",
    company: "Sheffield Digital",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "The mock interview sessions gave me a chance to directly impact young people's confidence. Many of them have since joined our apprenticeship programme.",
    author: "Mark Thompson",
    role: "HR Director",
    company: "Yorkshire Manufacturing",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "Working with local schools has helped us build strong community ties and identify future talent. It's a win-win for everyone involved.",
    author: "Lisa Chen",
    role: "Community Engagement Manager",
    company: "Leeds Tech Hub",
    image: "/images/testimonial-3.jpg"
  }
]

const colorClasses = {
  blue: {
    card: 'bg-blue-50 border-blue-100',
    icon: 'bg-blue-100 text-blue-600',
    duration: 'bg-blue-100/50 text-blue-700'
  },
  emerald: {
    card: 'bg-emerald-50 border-emerald-100',
    icon: 'bg-emerald-100 text-emerald-600',
    duration: 'bg-emerald-100/50 text-emerald-700'
  },
  purple: {
    card: 'bg-purple-50 border-purple-100',
    icon: 'bg-purple-100 text-purple-600',
    duration: 'bg-purple-100/50 text-purple-700'
  }
}

const OpportunitiesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: [],
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your backend
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent z-10" />
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-8 relative">
              <Image
                src="/images/opportunities-hero.jpg"
                alt="Business and education partnerships"
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
            </div>
            <div className="col-span-4 relative">
              <Image
                src="/images/community-impact.jpg"
                alt="Community impact"
                fill
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Shape Their Future</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Experience Can Transform Young Lives in Yorkshire
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Join our network of local professionals making a real difference in education. Share your expertise, inspire the next generation, and help build Yorkshire's future workforce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors text-lg"
              >
                View Opportunities
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#register"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 text-lg"
              >
                Register Interest
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Banner */}
      <div className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-emerald-200">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-emerald-200">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">87%</div>
              <div className="text-emerald-200">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Opportunities */}
      <div id="opportunities" className="relative bg-gray-50 py-16 sm:py-24">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-gray-50 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse current requests from local schools and colleges, or register your interest for future opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {marketplaceListings.map((listing, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      {listing.type}
                    </span>
                    <span className="text-sm text-gray-500">{listing.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{listing.title}</h3>
                  <p className="text-gray-600 mb-6">{listing.description}</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <Building2 className="w-4 h-4 mr-2" />
                      {listing.school}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {listing.yearGroup}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {listing.timing}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={listing.href}
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors font-medium"
                    >
                      Express Interest
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ways to Help Section with Image */}
      <div className="relative py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/mentoring-session.jpg"
                  alt="Mentoring session in progress"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ways You Can Help
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  From quick sessions to long-term partnerships, there are many ways to share your expertise and inspire the next generation.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className={`${colorClasses[opportunity.color].card} rounded-xl p-6 border transition-all hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full ${colorClasses[opportunity.color].icon} flex items-center justify-center flex-shrink-0`}>
                      {opportunity.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xl mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="flex items-center gap-3">
                        <div className={`text-sm px-3 py-1 rounded-full ${colorClasses[opportunity.color].duration}`}>
                          <Clock className="w-4 h-4 inline-block mr-1" />
                          {opportunity.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear from Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover how local professionals are making a difference in Yorkshire's education
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-emerald-200" />
                  <blockquote className="relative">
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <footer className="mt-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-12 w-12 rounded-full"
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-emerald-600">{testimonial.company}</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form - Updated with image split */}
      <div id="register" className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
            src="/images/registration-hero.jpg"
            alt="People collaborating"
            fill
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register Your Interest</h2>
              <p className="mt-4 text-lg text-gray-600">
                Let us know how you'd like to help, and we'll connect you with relevant opportunities in your area.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700">Job Title</label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in (select all that apply)</label>
                    <div className="space-y-2">
                      {opportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`interest-${index}`}
                            name="interests"
                            value={opportunity.title}
                            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-gray-600">
                            {opportunity.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Tell us about your experience and how you'd like to help..."
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpportunitiesPage 