import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

interface SearchResultsProps {
  results: SearchResult[]
  isVisible: boolean
  onClose: () => void
  query?: string
}

const SearchResults = ({ results, isVisible, onClose, query }: SearchResultsProps) => {
  const router = useRouter()
  const resultsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1)
  }, [results])

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isVisible || results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex(prev => (prev > 0 ? prev - 1 : prev))
        break
      case 'Enter':
        e.preventDefault()
        if (activeIndex >= 0) {
          navigateToResult(results[activeIndex].url)
        }
        break
      case 'Escape':
        e.preventDefault()
        onClose()
        break
    }
  }

  // Navigate to result page
  const navigateToResult = (url: string) => {
    router.push(url)
    onClose()
  }

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && resultsRef.current) {
      const activeItem = resultsRef.current.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [activeIndex])

  if (!isVisible || results.length === 0) return null

  // Group results by category for better organization
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = []
    }
    acc[result.category].push(result)
    return acc
  }, {} as Record<string, SearchResult[]>)

  return (
    <div 
      className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-slate-200 max-h-96 overflow-y-auto z-50"
      role="listbox"
      aria-label="Search results"
      ref={resultsRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="sticky top-0 bg-white border-b border-slate-100 p-2 flex justify-between items-center">
        <p className="text-sm text-slate-500 font-medium">
          {results.length} {results.length === 1 ? 'result' : 'results'} 
          {query ? ` for "${query}"` : ''}
        </p>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-100 rounded-full"
          aria-label="Close search results"
        >
          <X className="h-4 w-4 text-slate-500" />
        </button>
      </div>

      <div className="p-2">
        {Object.entries(groupedResults).map(([category, categoryResults]) => (
          <div key={category} className="mb-3">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-1">
              {category}
            </h3>
            <div className="mt-1 space-y-1">
              {categoryResults.map((result, index) => {
                const resultIndex = results.findIndex(r => r.url === result.url)
                return (
                  <button
                    key={result.url}
                    data-index={resultIndex}
                    onClick={() => navigateToResult(result.url)}
                    className={`w-full text-left p-3 rounded-md transition-colors group flex items-start justify-between ${
                      resultIndex === activeIndex 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'hover:bg-slate-50'
                    }`}
                    role="option"
                    aria-selected={resultIndex === activeIndex}
                  >
                    <div className="flex-1 pr-3">
                      <p className={`font-medium ${resultIndex === activeIndex ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'}`}>
                        {result.title}
                      </p>
                      <p className={`text-sm mt-1 line-clamp-2 ${resultIndex === activeIndex ? 'text-blue-600' : 'text-slate-600'}`}>
                        {result.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <ArrowRight className={`h-4 w-4 ${resultIndex === activeIndex ? 'text-blue-500' : 'text-slate-400 group-hover:text-blue-500'}`} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
        <Link 
          href={query ? `/search?q=${encodeURIComponent(query)}` : '/search'} 
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          onClick={onClose}
        >
          View all results
        </Link>
      </div>
    </div>
  )
}

export default SearchResults 