import { useRouter } from 'next/navigation'

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
}

const SearchResults = ({ results, isVisible, onClose }: SearchResultsProps) => {
  const router = useRouter()

  if (!isVisible || results.length === 0) return null

  const handleResultClick = (url: string) => {
    router.push(url)
    onClose()
  }

  return (
    <div 
      className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50"
      role="listbox"
      aria-label="Search results"
    >
      <div className="p-2">
        {results.map((result, index) => (
          <button
            key={index}
            onClick={() => handleResultClick(result.url)}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-md group transition-colors"
            role="option"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-900 group-hover:text-blue-600">
                  {result.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {result.description}
                </p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {result.category}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchResults 