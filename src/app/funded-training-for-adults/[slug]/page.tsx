// Server Component
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCourseBySlug, getProviderInfo } from '@/lib/utils'
import CoursePageClient from './CoursePageClient'

interface Props {
  params: {
    slug: string
  }
}

async function getCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/courses`)
  if (!res.ok) throw new Error('Failed to fetch courses')
  return res.json()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const courses = await getCourses()
  const course = getCourseBySlug(courses, params.slug)
  if (!course) return { title: 'Course Not Found' }
  
  return {
    title: `${course.title} | South Yorkshire Business Training`,
    description: course.description,
  }
}

export default async function CoursePage({ params }: Props) {
  const courses = await getCourses()
  const course = getCourseBySlug(courses, params.slug)
  
  if (!course) {
    notFound()
  }

  const provider = getProviderInfo(course.provider)

  return <CoursePageClient course={course} provider={provider} />
} 