'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ChevronDown, Briefcase, Users, GraduationCap, BookOpen, LineChart, Building2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { performSearch } from '@/utils/search'
import SearchResults from './SearchResults'
import { cn } from "@/lib/utils";

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

// Define navigation dropdown items
interface DropdownItem {
  title: string
  description?: string
  url: string
  icon?: React.ReactNode
}

interface SubMenu {
  [key: string]: {
    items: DropdownItem[]
  }
}

const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeoutId, setDropdownTimeoutId] = useState<NodeJS.Timeout | null>(null)
  
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})
  
  // Define submenu items
  const subMenus: SubMenu = {
    adultSkills: {
      items: [
        { 
          title: 'Employment Support',
          description: 'Career Development',
          url: '/employment-support',
          icon: <Briefcase className="w-5 h-5" /> 
        },
        { 
          title: 'Funded Training',
          description: 'Professional Development',
          url: '/funded-training-for-adults',
          icon: <Users className="w-5 h-5" /> 
        },
        { 
          title: 'Apprenticeships',
          description: 'Career Change & Progression',
          url: '/apprenticeships',
          icon: <GraduationCap className="w-5 h-5" /> 
        }
      ]
    },
    educators: {
      items: [
        {
          title: 'Colleges & Training Providers',
          description: 'Deliver Skills Training',
          url: '/educators/training-providers',
          icon: <Briefcase className="w-5 h-5" />
        },
        {
          title: 'Schools',
          description: 'Career Education',
          url: '/educators/schools',
          icon: <GraduationCap className="w-5 h-5" />
        }
      ]
    },
    youngPeople: {
      items: [
        {
          title: 'T-Levels',
          description: 'Technical Qualifications',
          url: '/t-levels-for-students',
          icon: <GraduationCap className="w-5 h-5" />
        },
        {
          title: 'University',
          description: 'Explore Higher Education',
          url: '/university',
          icon: <GraduationCap className="w-5 h-5" />
        },
        {
          title: 'Skills & Training',
          description: 'Build Your Future',
          url: '/skills-training',
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          title: 'Career Planning',
          description: 'Find Your Path',
          url: '/plan-your-career',
          icon: <Briefcase className="w-5 h-5" />
        }
      ]
    },
    business: {
      items: [
        {
          title: 'Funding & Training',
          description: 'Access funding to grow your business',
          url: '/funded-training',
          icon: <LineChart className="w-5 h-5" />
        },
        {
          title: 'Start-ups',
          description: 'Launch your business journey',
          url: '/startup-support',
          icon: <Building2 className="w-5 h-5" />
        },
        {
          title: 'Recruitment',
          description: 'Find and develop talent',
          url: '/recruitment-support',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: 'Community & Schools',
          description: 'Build your future workforce',
          url: '/community-schools',
          icon: <GraduationCap className="w-5 h-5" />
        },
        {
          title: 'Business Growth',
          description: 'Advice to scale your business',
          url: '/business-support',
          icon: <Building2 className="w-5 h-5" />
        }
      ]
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
      
      // Close dropdown when clicking outside
      if (activeDropdown && dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setShowResults(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [activeDropdown])

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

  // Dropdown handling functions with delay for better UX
  const handleMouseEnter = (dropdownId: string) => {
    if (dropdownTimeoutId) {
      clearTimeout(dropdownTimeoutId)
      setDropdownTimeoutId(null)
    }
    setActiveDropdown(dropdownId)
  }

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay before closing for better UX
    setDropdownTimeoutId(timeoutId)
  }

  return (
    <nav className="bg-slate-50 border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-600 group-hover:bg-blue-700 rotate-45 flex items-center justify-center transition-colors">
                <div className="-rotate-45 text-white font-bold text-lg">SY</div>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                PATHWAYS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <div className="relative"
                 onMouseEnter={() => handleMouseEnter('youngPeople')}
                 onMouseLeave={handleMouseLeave}
                 ref={(el) => {
                   dropdownRefs.current['youngPeople'] = el;
                   return undefined;
                 }}
            >
              <Link 
                href="/young-people"
                className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold inline-flex items-center ${
                  isActive('/young-people')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-expanded={activeDropdown === 'youngPeople'}
                aria-haspopup="true"
              >
                Young People
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'youngPeople' ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown menu for Young People */}
              {activeDropdown === 'youngPeople' && (
                <div 
                  className="absolute left-0 mt-1 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden focus:outline-none z-50 transform origin-top-left transition-all duration-200 ease-out"
                >
                  <div className="p-2">
                    {subMenus.youngPeople.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="p-1 bg-slate-100 rounded-md">
                          {item.icon}
                        </div>
                        <div>
                          <span className="font-medium">{item.title}</span>
                          {item.description && (
                            <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Adult Skills with Dropdown */}
            <div className="relative"
                 onMouseEnter={() => handleMouseEnter('adultSkills')}
                 onMouseLeave={handleMouseLeave}
                 ref={(el) => {
                   dropdownRefs.current['adultSkills'] = el;
                   return undefined;
                 }}
            >
              <Link 
                href="/adult-skills"
                className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold inline-flex items-center ${
                  isActive('/adult-skills')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-expanded={activeDropdown === 'adultSkills'}
                aria-haspopup="true"
              >
                Adults
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'adultSkills' ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown menu for Adults */}
              {activeDropdown === 'adultSkills' && (
                <div 
                  className="absolute left-0 mt-1 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden focus:outline-none z-50 transform origin-top-left transition-all duration-200 ease-out"
                >
                  <div className="p-2">
                    {subMenus.adultSkills.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="group flex items-start gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="p-1.5 bg-slate-100 group-hover:bg-blue-100 rounded-lg transition-colors">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {item.description && (
                            <p className="text-xs text-slate-500 group-hover:text-slate-600">{item.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Educators with Dropdown */}
            <div className="relative"
                 onMouseEnter={() => handleMouseEnter('educators')}
                 onMouseLeave={handleMouseLeave}
                 ref={(el) => {
                   dropdownRefs.current['educators'] = el;
                   return undefined;
                 }}
            >
              <Link 
                href="/educators"
                className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold inline-flex items-center ${
                  isActive('/educators')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-expanded={activeDropdown === 'educators'}
                aria-haspopup="true"
              >
                Educators
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'educators' ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown menu for Educators */}
              {activeDropdown === 'educators' && (
                <div 
                  className="absolute left-0 mt-1 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden focus:outline-none z-50 transform origin-top-left transition-all duration-200 ease-out"
                >
                  <div className="p-2">
                    {subMenus.educators.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="p-1 bg-slate-100 rounded-md">
                          {item.icon}
                        </div>
                        <div>
                          <span className="font-medium">{item.title}</span>
                          {item.description && (
                            <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Business with Dropdown */}
            <div className="relative"
                 onMouseEnter={() => handleMouseEnter('business')}
                 onMouseLeave={handleMouseLeave}
                 ref={(el) => {
                   dropdownRefs.current['business'] = el;
                   return undefined;
                 }}
            >
              <Link 
                href="/business"
                className={`px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold inline-flex items-center ${
                  isActive('/business')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-expanded={activeDropdown === 'business'}
                aria-haspopup="true"
              >
                Businesses
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'business' ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown menu for Business */}
              {activeDropdown === 'business' && (
                <div 
                  className="absolute left-0 mt-1 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden focus:outline-none z-50 transform origin-top-left transition-all duration-200 ease-out"
                >
                  <div className="p-2">
                    {subMenus.business.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="p-1 bg-slate-100 rounded-md">
                          {item.icon}
                        </div>
                        <div>
                          <span className="font-medium">{item.title}</span>
                          {item.description && (
                            <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
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
                <div className="-rotate-45 text-white font-bold text-lg">SY</div>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Move search to the top */}
          <div className="px-4 py-3 border-b border-slate-200">
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

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <nav className="space-y-2">
              {/* Young People with Dropdown */}
              <div>
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
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                  {subMenus.youngPeople.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isActive(item.url)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="p-1 bg-slate-100 rounded-md">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Adults Section with Submenus */}
              <div>
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
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                  {subMenus.adultSkills.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isActive(item.url)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="p-1 bg-slate-100 rounded-md">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Educators with Dropdown */}
              <div>
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
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                  {subMenus.educators.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isActive(item.url)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="p-1 bg-slate-100 rounded-md">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Business with Dropdown */}
              <div>
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
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                  {subMenus.business.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isActive(item.url)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="p-1 bg-slate-100 rounded-md">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation