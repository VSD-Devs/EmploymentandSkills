// Server Component
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCourseBySlug, getProviderInfo } from '@/lib/utils'
import CoursePageClient from './CoursePageClient'

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

  return <CoursePageClient course={course} provider={provider} />
} 