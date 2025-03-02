'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { performSearch } from '@/utils/search'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search as SearchIcon, ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams?.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isSearching, setIsSearching] = useState(false)
  
  // Get unique categories from search results
  const uniqueCategories = Array.from(new Set(searchResults.map(result => result.category)))
  const categories = ['all', ...uniqueCategories]
  
  // Filter results by active category
  const filteredResults = activeCategory === 'all' 
    ? searchResults 
    : searchResults.filter(result => result.category === activeCategory)
  
  // Perform search when page loads if query exists
  useEffect(() => {
    if (initialQuery) {
      setIsSearching(true)
      const results = performSearch(initialQuery)
      setSearchResults(results)
      setIsSearching(false)
    }
  }, [initialQuery])
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    const results = performSearch(searchQuery)
    setSearchResults(results)
    setIsSearching(false)
    
    // Update URL with search query without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('q', searchQuery)
    window.history.pushState({}, '', url.toString())
  }
  
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Search Results</h1>
        
        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Search for skills, courses, careers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
            <Button type="submit" className="px-6" disabled={isSearching}>
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </form>
        
        {searchResults.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">
                Found {searchResults.length} results for "{initialQuery}"
              </p>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-700">Filter by:</span>
              </div>
            </div>
            
            {/* Category tabs */}
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
              <TabsList className="mb-4 flex-wrap">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize"
                  >
                    {category}
                    {category === 'all' ? ` (${searchResults.length})` : ` (${searchResults.filter(r => r.category === category).length})`}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="space-y-4">
                  {filteredResults.map((result, index) => (
                    <Link 
                      href={result.url} 
                      key={index}
                      className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                            {result.title}
                          </h2>
                          <p className="text-slate-600 mt-1">
                            {result.description}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-700">
                              {result.category}
                            </span>
                            <span className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline">
                              View page <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="text-center py-10">
            {initialQuery ? (
              <div className="space-y-3">
                <p className="text-lg text-slate-700">No results found for "{initialQuery}"</p>
                <p className="text-slate-500">Try using different keywords or check your spelling</p>
              </div>
            ) : (
              <p className="text-lg text-slate-700">Enter a search term to find resources, courses, and information</p>
            )}
          </div>
        )}
        
        {/* Popular searches */}
        {searchResults.length === 0 && (
          <div className="mt-10 border-t border-slate-200 pt-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Popular searches</h2>
            <div className="flex flex-wrap gap-2">
              {['Apprenticeships', 'T-Levels', 'Courses', 'Jobs', 'Skills training', 'Funded courses', 'Business support'].map((term) => (
                <Link 
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="px-3 py-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-md text-sm transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Loading fallback component
function SearchLoading() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="h-10 w-48 bg-slate-200 animate-pulse rounded mb-6"></div>
        <div className="h-12 bg-slate-200 animate-pulse rounded mb-8"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border border-slate-200 rounded-lg">
              <div className="h-6 w-3/4 bg-slate-200 animate-pulse rounded mb-2"></div>
              <div className="h-4 bg-slate-200 animate-pulse rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-slate-200 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  )
} 