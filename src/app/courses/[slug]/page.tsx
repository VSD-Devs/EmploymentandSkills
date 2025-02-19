import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Building2, MapPin, Phone, Globe, ChevronRight } from 'lucide-react'
import { getCourseBySlug, getProviderInfo } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug)
  if (!course) return { title: 'Course Not Found' }
  
  return {
    title: course.title,
    description: `Learn more about ${course.title} offered by ${course.provider}`,
  }
}

export default async function CoursePage({ params }: Props) {
  const course = await getCourseBySlug(params.slug)
  if (!course) notFound()

  const provider = getProviderInfo(course.provider)

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs items={[
        { label: 'Courses', href: '/courses' },
        { label: course.title, href: `/courses/${params.slug}` },
      ]} />

      <div className="relative bg-[#111827] py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/training-provider.jpg"
            alt={course.title}
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white mb-4">
              {course.fundingModel}
            </span>
            <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Offered by {provider.name}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Course Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600">
                  This course is fully funded for eligible participants through the Adult Skills Fund (ASF).
                  Contact the training provider for detailed information about course content, duration, and start dates.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-600">Age 19 or over</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-600">Resident in South Yorkshire</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-600">Right to work in the UK</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Provider Information */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Provider</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">{provider.name}</h3>
                    <p className="text-gray-600 mt-1">{provider.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">{provider.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Contact</h3>
                    <p className="text-gray-600 mt-1">{provider.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Website</h3>
                    <a 
                      href={provider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 mt-1 inline-block"
                    >
                      Visit provider website
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Enquire Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 