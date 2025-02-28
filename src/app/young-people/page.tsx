import YoungPeople from '@/components/YoungPeople'
import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: 'Young People | Yorkshire Pathways',
  description: 'Explore opportunities in education, training, and careers for young people in South Yorkshire. From T-Levels to apprenticeships, find your path to success.',
}

export default function YoungPeoplePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumbs at the very top of the page */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Young People', href: '/young-people' },
          ]} />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <YoungPeople />
      </main>
    </div>
  )
} 