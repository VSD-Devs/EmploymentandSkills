import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  GraduationCap, 
  Building2, 
  Users, 
  ClipboardList, 
  Target,
  BookOpen
} from 'lucide-react'

export default function EducatorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Role Selection */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 py-24">
        <div className="absolute inset-0">
          {/* Stronger overlay with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/85" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
          <Image
            src="/images/educator-hero.jpg"
            alt=""
            fill
            className="object-cover opacity-75"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to SYMCA Education Hub
            </h1>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow-lg">
              Select your role below to access relevant resources, opportunities, and support tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Training Provider Card */}
            <Link 
              href="/educators/training-providers"
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl border border-white/10"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Provider or College</h2>
              <p className="text-gray-600 mb-6">
                Access procurement opportunities, funding streams, and partnership programmes to deliver training across South Yorkshire.
              </p>
              <div className="flex items-center text-emerald-600 group-hover:text-emerald-500">
                <span className="font-medium">View opportunities</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* School Card */}
            <Link 
              href="/educators/schools"
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">School</h2>
              <p className="text-gray-600 mb-6">
                Find training providers, access career resources, and connect with professionals to enhance your students' career education.
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-500">
                <span className="font-medium">Access resources</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Skills Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a stronger, more inclusive skills system that drives economic growth and creates opportunities for all across South Yorkshire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To create a world-class technical education and skills system that provides opportunities for all residents and meets employers' needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Priorities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Young people equipped with skills for the future</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Adults accessing retraining and upskilling opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Employers at the heart of the skills system</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Approach</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Collaborative partnerships with education providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Targeted investment in priority sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Data-driven decision making and evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Providers</h3>
              <p className="text-gray-600">
                Discover funding opportunities and deliver quality training across South Yorkshire.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schools</h3>
              <p className="text-gray-600">
                Access resources and connect with providers to enhance career education.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">
                Get help and guidance from our dedicated education team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const resources = [
  {
    title: 'Career Exploration Toolkit',
    description: 'Lesson plans and activities to help students explore different career paths.',
    image: '/images/resource-toolkit.jpg',
    href: '/educators/toolkit'
  },
  {
    title: 'Industry Insights',
    description: 'Up-to-date information about Yorkshire\'s key industries and future opportunities.',
    image: '/images/resource-insights.jpg',
    href: '/educators/insights'
  },
  {
    title: 'Skills Development',
    description: 'Resources to help students develop essential workplace skills.',
    image: '/images/resource-skills.jpg',
    href: '/educators/skills'
  }
]

const procurementOpportunities = [
  {
    title: 'Adult Education Budget',
    description: 'Deliver accredited qualifications and learning aims to adult learners.',
    icon: GraduationCap,
    requirements: [
      'Track record of quality provision',
      'Ofsted Grade 2 or above',
      'Financial health check',
      'Due diligence completion'
    ],
    href: '/educators/procurement/aeb'
  },
  {
    title: 'Skills Support',
    description: 'Provide training and support services to help people into employment.',
    requirements: [
      'Experience in employability training',
      'Local delivery capability',
      'Performance tracking systems',
      'Employer partnerships'
    ],
    href: '/educators/procurement/skills-support'
  },
  {
    title: 'Specialist Programmes',
    description: 'Deliver specialist training programmes in priority sectors.',
    icon: BookOpen,
    requirements: [
      'Sector expertise',
      'Industry-standard facilities',
      'Qualified training staff',
      'Quality assurance systems'
    ],
    href: '/educators/procurement/specialist'
  }
]

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