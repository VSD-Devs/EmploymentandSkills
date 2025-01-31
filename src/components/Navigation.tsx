'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import { performSearch } from '@/utils/search'
import SearchResults from './SearchResults'

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = performSearch(searchQuery)
    setSearchResults(results)
    setShowResults(true)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.length >= 2) {
      const results = performSearch(query)
      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center">
                <div className="-rotate-45 text-white font-bold">Y</div>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">YORKSHIRE PATHWAYS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/young-people"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Young People
            </Link>
            <Link 
              href="/adult-skills"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Adult Skills
            </Link>
            <Link 
              href="/business"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Businesses
            </Link>
            <Link 
              href="/educators"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Educators
            </Link>
            <Link 
              href="/parents"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Parents
            </Link>
            <div ref={searchContainerRef} className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Submit search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
              <SearchResults
                results={searchResults}
                isVisible={showResults}
                onClose={() => setShowResults(false)}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden border-b border-gray-100`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            href="/young-people"
            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Young People
          </Link>
          <Link
            href="/adult-skills"
            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Adult Skills
          </Link>
          <Link
            href="/business"
            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Businesses
          </Link>
          <Link
            href="/educators"
            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Educators
          </Link>
          <Link
            href="/parents"
            className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Parents
          </Link>
          <form onSubmit={handleSearch} className="relative mt-2">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Search"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Submit search"
            >
              <Search className="h-5 w-5" />
            </button>
            <SearchResults
              results={searchResults}
              isVisible={showResults}
              onClose={() => setShowResults(false)}
            />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 