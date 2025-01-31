import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function EducatorsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-6">
              Empower Your Students\' Future Careers
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Access resources and support to help your students explore career opportunities in Yorkshire\'s growing industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/educators/resources"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-white/90 transition-colors inline-flex items-center"
              >
                Teaching Resources
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/educators/events"
                className="bg-emerald-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-emerald-600 transition-colors inline-flex items-center"
              >
                Upcoming Events
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Educational Resources</h2>
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
                  <div className="flex items-center text-emerald-600 group-hover:text-emerald-500">
                    <span className="font-medium">Access resources</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How We Support Educators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="text-emerald-600 font-medium hover:text-emerald-500 inline-flex items-center"
                >
                  Learn more
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

const services = [
  {
    title: 'School Partnerships',
    description: 'Connect with local businesses for student work experience and site visits.',
    icon: ChevronRight,
    href: '/educators/partnerships'
  },
  {
    title: 'Professional Development',
    description: 'Training and support for careers leaders and teachers.',
    icon: ChevronRight,
    href: '/educators/development'
  },
  {
    title: 'Events & Workshops',
    description: 'Careers fairs and workshops for your students.',
    icon: ChevronRight,
    href: '/educators/events'
  }
] 