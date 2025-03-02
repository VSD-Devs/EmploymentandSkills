'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  ArrowRight, 
  Laptop, 
  BookOpen, 
  Briefcase, 
  Rocket, 
  GraduationCap,
  Target,
  Users,
  CheckCircle2,
  Star,
  MessageSquare,
  Heart
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

// Types and interfaces
interface SkillCourse {
  id: string;
  title: string;
  provider: string;
  description: string;
  level: string;
  duration: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

interface SuccessStory {
  id: string;
  name: string;
  age: number;
  location: string;
  story: string;
  outcome: string;
  image: string;
}

const SkillsTrainingPage = () => {
  // State management
  const [activeSection, setActiveSection] = useState('overview')
  const [activeCategory, setActiveCategory] = useState('digital')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [activeStory, setActiveStory] = useState(0)

  // Digital skills courses
  const digitalCourses: SkillCourse[] = [
    {
      id: 'natwest-digital',
      title: 'Digital Skills for Young People',
      provider: 'NatWest',
      description: 'Learn essential digital skills including coding basics, digital marketing, and online safety. This free course helps you build confidence in using technology for your future career.',
      level: 'Beginner',
      duration: '6 weeks (flexible)',
      image: '/images/digital-skills.jpg',
      link: 'https://www.natwest.com/learning/learning-for-young-people.html',
      tags: ['coding', 'digital marketing', 'free'],
      featured: true
    },
    {
      id: 'accenture-digital',
      title: 'Digital Skills Programme',
      provider: 'Accenture',
      description: 'Develop in-demand tech skills with Accenture\'s free digital programme. Learn about AI, cloud computing, and digital project management from industry experts.',
      level: 'Beginner to Intermediate',
      duration: '8 weeks',
      image: '/images/accenture-digital.jpg',
      link: 'https://www.accenture.com/gb-en/about/corporate-citizenship/digital-skills',
      tags: ['technology', 'AI', 'cloud computing', 'free']
    },
    {
      id: 'google-digital-garage',
      title: 'Digital Marketing Fundamentals',
      provider: 'Google Digital Garage',
      description: 'Master the basics of digital marketing with this comprehensive course from Google. Learn about search engines, social media, and how to promote yourself or a business online.',
      level: 'Beginner',
      duration: 'Self-paced',
      image: '/images/google-digital.jpg',
      link: 'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing',
      tags: ['digital marketing', 'social media', 'free', 'certificate']
    }
  ]

  // Entrepreneurship courses
  const entrepreneurCourses: SkillCourse[] = [
    {
      id: 'princes-trust-enterprise',
      title: 'Enterprise Programme',
      provider: 'The Prince\'s Trust',
      description: 'Turn your business idea into reality with support from The Prince\'s Trust. Get mentoring, funding and resources to start your own business.',
      level: 'Beginner',
      duration: '4 weeks + ongoing support',
      image: '/images/princes-trust.jpg',
      link: 'https://www.princes-trust.org.uk/help-for-young-people/support-starting-business',
      tags: ['business', 'mentoring', 'funding', 'free'],
      featured: true
    },
    {
      id: 'young-enterprise',
      title: 'Company Programme',
      provider: 'Young Enterprise',
      description: 'Experience running a real business with guidance from business volunteers. Develop entrepreneurial skills and learn about business operations firsthand.',
      level: 'Beginner',
      duration: 'Academic year',
      image: '/images/young-enterprise.jpg',
      link: 'https://www.young-enterprise.org.uk/programmes/company-programme/',
      tags: ['business', 'practical experience', 'teamwork']
    }
  ]

  // Essential skills courses
  const essentialCourses: SkillCourse[] = [
    {
      id: 'gov-toolkit-essential',
      title: 'Essential Skills for Work',
      provider: 'The Skills Toolkit',
      description: 'Build the essential skills employers are looking for, including communication, problem-solving, and teamwork. Free courses designed to boost your employability.',
      level: 'All levels',
      duration: 'Self-paced',
      image: '/images/essential-skills.jpg',
      link: 'https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit',
      tags: ['communication', 'problem-solving', 'free'],
      featured: true
    },
    {
      id: 'futurelearn-workplace',
      title: 'Workplace Essentials',
      provider: 'FutureLearn',
      description: 'Prepare for the workplace with courses covering professional communication, time management, and workplace etiquette. Learn how to make a great impression in any job.',
      level: 'Beginner',
      duration: '2-4 weeks',
      image: '/images/futurelearn.jpg',
      link: 'https://www.futurelearn.com/',
      tags: ['workplace', 'professional skills', 'free']
    }
  ]

  // Success stories
  const successStories: SuccessStory[] = [
    {
      id: 'story1',
      name: 'Jamie',
      age: 18,
      location: 'Sheffield',
      story: 'After finishing school, I wasn\'t sure what to do next. I took the NatWest Digital Skills course and discovered I had a talent for web design.',
      outcome: 'Now I\'m working as a junior web developer at a local agency and earning while I continue learning.',
      image: '/images/success-story1.jpg'
    },
    {
      id: 'story2',
      name: 'Sophia',
      age: 17,
      location: 'Rotherham',
      story: 'I always wanted to start my own business but didn\'t know where to begin. The Prince\'s Trust Enterprise Programme gave me the confidence and skills I needed.',
      outcome: 'I\'ve now launched my own small crafts business online and am making my first sales!',
      image: '/images/success-story2.jpg'
    },
    {
      id: 'story3',
      name: 'Liam',
      age: 19,
      location: 'Doncaster',
      story: 'I struggled with confidence in professional settings. The Essential Skills for Work course helped me develop my communication skills.',
      outcome: 'I successfully interviewed for an apprenticeship position and am now training in logistics.',
      image: '/images/success-story3.jpg'
    }
  ]

  // Handle touch swipe for mobile navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 50
    const touchDiff = touchStart - touchEnd

    if (Math.abs(touchDiff) > SWIPE_THRESHOLD) {
      const sections = ['overview', 'digital', 'entrepreneur', 'essential', 'stories', 'resources']
      const currentIndex = sections.indexOf(activeSection)
      
      if (touchDiff > 0 && currentIndex < sections.length - 1) {
        // Swipe left
        const nextSection = sections[currentIndex + 1]
        document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(nextSection)
      } else if (touchDiff < 0 && currentIndex > 0) {
        // Swipe right
        const prevSection = sections[currentIndex - 1]
        document.getElementById(prevSection)?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(prevSection)
      }
    }
  }

  // Handle scroll to update active section
  const handleScroll = useCallback(() => {
    const sections = ['overview', 'digital', 'entrepreneur', 'essential', 'stories', 'resources']
    const scrollPosition = window.scrollY + window.innerHeight / 3

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const sectionTop = element.offsetTop
        const sectionBottom = sectionTop + element.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section)
        }
      }
    })
  }, [])

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Rotate through success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory(prev => (prev + 1) % successStories.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [successStories.length])

  return (
    <main 
      className="min-h-screen bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Young People', href: '/young-people' },
        { label: 'Skills Training', href: '/skills-training' },
      ]} />

      {/* Hero Section */}
      <section id="overview" className="relative bg-gradient-to-br from-emerald-800 to-teal-900 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-700/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-700/50 backdrop-blur-sm border border-emerald-500/30">
                <Star className="h-4 w-4 text-emerald-300" />
                <span className="text-xs md:text-sm font-medium text-emerald-100">Free Skills Training</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">Future Skills</span>
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
                Discover free training opportunities to develop the skills employers are looking for. From digital skills to entrepreneurship, we've got you covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => {
                    document.getElementById('digital')?.scrollIntoView({ behavior: 'smooth' })
                    setActiveSection('digital')
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-900 font-medium hover:bg-emerald-50 transition-colors shadow-lg shadow-emerald-900/20"
                  aria-label="Explore digital skills courses"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-700/50 text-white font-medium backdrop-blur-sm border border-emerald-500/50 hover:bg-emerald-700/70 transition-colors"
                  aria-label="Take skills quiz"
                >
                  Find Your Skills
                  <Target className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 relative mt-8 md:mt-0">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <Image 
                  src="/images/skills-training.jpg"
                  alt="Young people developing skills through training"
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

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-1 text-emerald-800 font-bold text-xl">
              <BookOpen className="h-6 w-6" />
              <span>Skills Training</span>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'digital', label: 'Digital Skills' },
                { id: 'entrepreneur', label: 'Entrepreneurship' },
                { id: 'essential', label: 'Essential Skills' },
                { id: 'stories', label: 'Success Stories' },
                { id: 'resources', label: 'Resources' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
                    activeSection === item.id
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-emerald-600 hover:border-emerald-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    setActiveSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button
              onClick={() => setShowQuiz(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              Skills Quiz
              <Target className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between py-2">
            {[
              { id: 'overview', icon: Users, label: 'Overview' },
              { id: 'digital', icon: Laptop, label: 'Digital' },
              { id: 'entrepreneur', icon: Rocket, label: 'Business' },
              { id: 'essential', icon: Star, label: 'Skills' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center px-3 py-1.5 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-500'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  setActiveSection(item.id)
                }}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Skills Section */}
      <section id="digital" className="relative bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
              <Laptop className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Digital Skills</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Build In-Demand Digital Skills</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Digital skills are essential in today's job market. These free courses will help you develop the technical abilities employers are looking for.
            </p>
          </div>

          {/* Featured Course */}
          {digitalCourses.filter(course => course.featured).map(course => (
            <div key={course.id} className="mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg border border-emerald-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured Course
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-emerald-700">{course.provider}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-sm text-gray-600">{course.level}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map(tag => (
                      <span key={tag} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-md self-start"
                  >
                    Explore Course
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Other Digital Courses */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalCourses.filter(course => !course.featured).map(course => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-emerald-700">{course.provider}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-xs text-gray-600">{course.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors"
            >
              Explore More Digital Courses on Skills Toolkit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section id="entrepreneur" className="relative bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-4">
              <Rocket className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">Entrepreneurship</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Own Business</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have a business idea? These programmes will help you develop the skills and confidence to turn your idea into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {entrepreneurCourses.map((course, index) => (
              <div 
                key={course.id} 
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                  course.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-amber-200' : ''
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    {course.featured && (
                      <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Recommended
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-amber-700">{course.provider}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.tags.map(tag => (
                        <span key={tag} className="bg-amber-50 px-3 py-1 rounded-full text-xs font-medium text-amber-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-md self-start"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Entrepreneurship Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Consider Entrepreneurship?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Star className="h-6 w-6 text-amber-600" />,
                  title: "Be Your Own Boss",
                  description: "Create your own schedule and make decisions about your business direction."
                },
                {
                  icon: <Heart className="h-6 w-6 text-amber-600" />,
                  title: "Follow Your Passion",
                  description: "Turn something you love into a career and feel more fulfilled in your work."
                },
                {
                  icon: <Target className="h-6 w-6 text-amber-600" />,
                  title: "Unlimited Potential",
                  description: "Your earning potential is determined by your own efforts and innovation."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-amber-50 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="https://www.princes-trust.org.uk/help-for-young-people/support-starting-business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-md"
            >
              Explore All Entrepreneurship Programmes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Essential Skills Section */}
      <section id="essential" className="relative bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Essential Skills</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Workplace Ready Skills</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Develop the essential skills that employers value in every workplace, from communication to problem-solving.
            </p>
          </div>

          {/* Featured Essential Skills Course */}
          {essentialCourses.filter(course => course.featured).map(course => (
            <div key={course.id} className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg border border-blue-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured Course
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-700">{course.provider}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-sm text-gray-600">{course.level}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map(tag => (
                      <span key={tag} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md self-start"
                  >
                    Explore Course
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Other Essential Skills Courses */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialCourses.filter(course => !course.featured).map(course => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-700">{course.provider}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-xs text-gray-600">{course.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Essential Skills Employers Value */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Skills Employers Value</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
                  title: "Communication",
                  description: "Express ideas clearly and listen effectively to others"
                },
                {
                  icon: <Users className="h-6 w-6 text-blue-600" />,
                  title: "Teamwork",
                  description: "Work collaboratively with others towards shared goals"
                },
                {
                  icon: <Target className="h-6 w-6 text-blue-600" />,
                  title: "Problem Solving",
                  description: "Find solutions to challenges through critical thinking"
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />,
                  title: "Reliability",
                  description: "Consistently meet deadlines and fulfill responsibilities"
                }
              ].map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Explore All Skills Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="relative bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
              <Heart className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-800">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Stories from Young People</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how other young people in South Yorkshire have used free skills training to transform their futures.
            </p>
          </div>

          {/* Success Stories Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500"></div>
            
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={successStories[activeStory].image}
                  alt={`${successStories[activeStory].name}'s success story`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">{successStories[activeStory].name}, {successStories[activeStory].age}</h3>
                  <p className="text-sm text-white/80">{successStories[activeStory].location}</p>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Skills Journey</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 italic">"{successStories[activeStory].story}"</p>
                    <p className="text-gray-800 font-medium">{successStories[activeStory].outcome}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex space-x-2">
                    {successStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStory(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          index === activeStory ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                        aria-label={`View story ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setActiveStory(prev => (prev - 1 + successStories.length) % successStories.length)}
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                      aria-label="Previous story"
                    >
                      <span className="h-5 w-5 text-gray-600" aria-hidden="true">&#9664;</span>
                    </button>
                    <button
                      onClick={() => setActiveStory(prev => (prev + 1) % successStories.length)}
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                      aria-label="Next story"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/plan-your-career"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-md"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="relative bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
              <BookOpen className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Additional tools and resources to help you on your skills development journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* The Skills Toolkit */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-md border border-purple-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Skills Toolkit</h3>
              <p className="text-gray-600 mb-6">
                Free, high-quality digital and numeracy courses to help you build valuable skills and boost your career prospects.
              </p>
              <Link 
                href="https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Access the Toolkit
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>

            {/* National Careers Service */}
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 shadow-md border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">National Careers Service</h3>
              <p className="text-gray-600 mb-6">
                Free, impartial advice on careers, skills, and the job market. Access career tools, course information, and job search support.
              </p>
              <Link 
                href="https://nationalcareers.service.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit Website
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>

            {/* Youth Employment UK */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-md border border-emerald-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Youth Employment UK</h3>
              <p className="text-gray-600 mb-6">
                Free skills and careers resources for young people, including employability skills training and career advice.
              </p>
              <Link 
                href="https://www.youthemployment.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Explore Resources
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Local Support */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Support in South Yorkshire</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Advisors</h4>
                <p className="text-gray-600 mb-4">
                  Book a free appointment with a career advisor who can help you identify suitable skills training opportunities.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Book Appointment
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Workshops</h4>
                <p className="text-gray-600 mb-4">
                  Attend free local workshops to develop specific skills and meet potential employers.
                </p>
                <Link 
                  href="/events"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  View Upcoming Workshops
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Quiz Modal would go here */}
    </main>
  )
}

export default SkillsTrainingPage