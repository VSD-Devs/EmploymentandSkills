import YoungPeople from '@/components/YoungPeople'
import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Young People | Yorkshire Pathways',
  description: 'Explore opportunities in education, training, and careers for young people in South Yorkshire. From T-Levels to apprenticeships, find your path to success.',
}

export default function YoungPeoplePage() {
  return (
    <div>
      {/* Breadcrumbs Overlay */}
      <nav className="absolute top-20 left-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 bg-white/80 rounded-lg p-2 inline-block">
            <li>
              <Link 
                href="/" 
                className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </li>
            <li>
              <Link 
                href="/young-people" 
                className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors"
              >
                Young People
              </Link>
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <YoungPeople />
      </main>
    </div>
  )
} 