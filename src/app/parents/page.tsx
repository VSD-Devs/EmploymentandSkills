import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ParentsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-6">
              Support Your Child\'s Career Journey
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Get the information and resources you need to help your child make informed decisions about their future career.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/parents/guide"
                className="bg-white text-teal-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-white/90 transition-colors inline-flex items-center"
              >
                Parent\'s Guide
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/parents/support"
                className="bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-teal-600 transition-colors inline-flex items-center"
              >
                Get Support
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Resources for Parents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link 
                key={index}
                href={resource.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center text-teal-600 group-hover:text-teal-500">
                    <span className="font-medium">Learn more</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Common Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <faq.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 mb-4">{faq.answer}</p>
                <Link 
                  href={faq.href}
                  className="text-teal-600 font-medium hover:text-teal-500 inline-flex items-center"
                >
                  Read more
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const resources = [
  {
    title: 'Career Pathways Guide',
    description: 'Understanding different career paths and opportunities in Yorkshire.',
    image: '/images/parent-guide.jpg',
    href: '/parents/pathways'
  },
  {
    title: 'Education Options',
    description: 'Learn about different education and training options available.',
    image: '/images/parent-education.jpg',
    href: '/parents/education'
  },
  {
    title: 'Supporting Choices',
    description: 'How to support your child in making career decisions.',
    image: '/images/parent-support.jpg',
    href: '/parents/choices'
  }
]

const faqs = [
  {
    question: 'What are the options after GCSEs?',
    answer: 'Explore the different paths including A-levels, T-levels, and apprenticeships.',
    icon: ChevronRight,
    href: '/parents/post-gcse'
  },
  {
    question: 'How to find work experience?',
    answer: 'Guide to finding valuable work experience opportunities in Yorkshire.',
    icon: ChevronRight,
    href: '/parents/work-experience'
  },
  {
    question: 'Understanding apprenticeships',
    answer: 'Everything you need to know about modern apprenticeship programs.',
    icon: ChevronRight,
    href: '/parents/apprenticeships'
  }
] 