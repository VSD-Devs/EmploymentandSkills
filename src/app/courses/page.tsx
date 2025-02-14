'use server'

import React from 'react'
import { Search, MapPin, Building2, GraduationCap, ChevronRight, Filter, BookOpen, Calculator, Briefcase, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import ClientCoursePage from './ClientCoursePage'

// Fetch courses data
async function getCourses() {
  const jsonDirectory = path.join(process.cwd(), 'public/images')
  const fileContents = await fs.readFile(jsonDirectory + '/course.v1.json', 'utf8')
  return JSON.parse(fileContents)
}

export default async function CoursesPage() {
  const courses = await getCourses()
  
  return <ClientCoursePage courses={courses} />
} 