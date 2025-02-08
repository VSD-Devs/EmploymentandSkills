'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { performSearch } from '@/utils/search'
import SearchResults from './SearchResults'

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname?.startsWith(path)
  }

  return (
    <nav className="bg-slate-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-600 group-hover:bg-blue-700 rotate-45 flex items-center justify-center transition-colors">
                <div className="-rotate-45 text-white font-bold">Y</div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">YORKSHIRE PATHWAYS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link 
              href="/young-people"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/young-people')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Young People
            </Link>
            <Link 
              href="/adult-skills"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/adult-skills')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Adults
            </Link>
            <Link 
              href="/business"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/business')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Businesses
            </Link>
            <Link 
              href="/educators"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/educators')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Educators
            </Link>
            <Link 
              href="/parents"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/parents')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Parents
            </Link>
            <Link 
              href="/events"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/events')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Events
            </Link>
            <Link 
              href="/contact"
              className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold ${
                isActive('/contact')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Contact
            </Link>
            <div ref={searchContainerRef} className="relative ml-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-64 pl-3 pr-10 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-500"
                  aria-label="Search website"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
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
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2"
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
        ref={mobileMenuRef}
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out`}
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" aria-hidden="true" />
        
        {/* Menu content */}
        <div className="relative w-full max-w-xs h-full bg-white shadow-xl flex flex-col">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center">
                <div className="-rotate-45 text-white font-bold">Y</div>
              </div>
              <span className="text-lg font-bold text-slate-800">YORKSHIRE PATHWAYS</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <nav className="space-y-2">
              <Link
                href="/young-people"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/young-people')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Young People
              </Link>
              <Link
                href="/adult-skills"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/adult-skills')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Adults
              </Link>
              <Link
                href="/business"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/business')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Businesses
              </Link>
              <Link
                href="/educators"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/educators')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Educators
              </Link>
              <Link
                href="/parents"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/parents')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Parents
              </Link>
              <Link
                href="/events"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/events')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold ${
                  isActive('/contact')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-3 pr-10 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-500"
                  aria-label="Search website"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                  aria-label="Submit search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
              {showResults && (
                <div className="absolute inset-x-0 top-full mt-2 px-4">
                  <SearchResults
                    results={searchResults}
                    isVisible={showResults}
                    onClose={() => setShowResults(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 