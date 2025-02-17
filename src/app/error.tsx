'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Runtime error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="text-lg mb-6">Sorry, an unexpected error has occurred.</p>
      <button
        onClick={() => reset()}
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  )
} 