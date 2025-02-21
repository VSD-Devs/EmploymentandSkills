'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
        <p className="text-lg text-gray-600 mb-8">
          We apologise for the inconvenience. Please try again or contact our support team.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Support
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
} 