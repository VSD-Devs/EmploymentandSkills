'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

interface Region {
  id: string
  name: string
  description: string
  features: string[]
  colour: string
  stats: {
    businesses: string
    jobs: string
    output: string
  }
}

const regions: Region[] = [
  {
    id: 'sheffield',
    name: 'Sheffield',
    description: 'A city of innovation and industry, leading the way in advanced manufacturing and digital technologies. Home to two world-class universities and a thriving creative sector.',
    features: ['Advanced Manufacturing', 'Digital Industries', 'Higher Education', 'Creative & Cultural'],
    colour: 'emerald',
    stats: {
      businesses: '15,000+',
      jobs: '280,000+',
      output: '£12B+'
    }
  },
  {
    id: 'barnsley',
    name: 'Barnsley',
    description: 'Combining rich industrial heritage with emerging digital and creative sectors. A town embracing transformation while maintaining its strong community values.',
    features: ['Digital Campus', 'Cultural Industries', 'Manufacturing', 'Logistics'],
    colour: 'blue',
    stats: {
      businesses: '8,000+',
      jobs: '85,000+',
      output: '£4B+'
    }
  },
  {
    id: 'rotherham',
    name: 'Rotherham',
    description: 'A hub for advanced manufacturing and engineering excellence. Home to the Advanced Manufacturing Park and innovative technology companies.',
    features: ['Advanced Manufacturing', 'Engineering', 'Technology Innovation', 'Green Energy'],
    colour: 'purple',
    stats: {
      businesses: '7,000+',
      jobs: '95,000+',
      output: '£5B+'
    }
  },
  {
    id: 'doncaster',
    name: 'Doncaster',
    description: 'A key logistics hub with growing creative and digital industries. Strategic location with excellent connectivity and diverse economic opportunities.',
    features: ['Logistics', 'Rail Engineering', 'Aviation', 'Digital & Creative'],
    colour: 'amber',
    stats: {
      businesses: '9,000+',
      jobs: '130,000+',
      output: '£6B+'
    }
  }
]

const SouthYorkshireMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const getRegionData = (id: string) => regions.find(region => region.id === id)
  const isRegionActive = (id: string) => activeRegion === id || hoveredRegion === id

  const getRegionColour = (id: string) => {
    const region = getRegionData(id)
    if (!region) return 'text-zinc-300'
    
    const isActive = isRegionActive(id)
    switch (region.colour) {
      case 'emerald':
        return isActive ? 'fill-emerald-500' : 'fill-emerald-200'
      case 'blue':
        return isActive ? 'fill-blue-500' : 'fill-blue-200'
      case 'purple':
        return isActive ? 'fill-purple-500' : 'fill-purple-200'
      case 'amber':
        return isActive ? 'fill-amber-500' : 'fill-amber-200'
      default:
        return 'fill-zinc-200'
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* SVG Map */}
      <div className="relative aspect-square bg-white rounded-2xl shadow-lg p-8">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          role="img"
          aria-label="Interactive map of South Yorkshire regions"
        >
          {/* Simplified SVG paths for South Yorkshire regions */}
          <path
            id="sheffield"
            d="M200,250 L250,300 L200,350 L150,300 Z"
            className={`${getRegionColour('sheffield')} transition-colors cursor-pointer`}
            onMouseEnter={() => setHoveredRegion('sheffield')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setActiveRegion('sheffield')}
            role="button"
            aria-label="Sheffield region"
            tabIndex={0}
          />
          <path
            id="barnsley"
            d="M200,150 L250,200 L200,250 L150,200 Z"
            className={`${getRegionColour('barnsley')} transition-colors cursor-pointer`}
            onMouseEnter={() => setHoveredRegion('barnsley')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setActiveRegion('barnsley')}
            role="button"
            aria-label="Barnsley region"
            tabIndex={0}
          />
          <path
            id="rotherham"
            d="M250,200 L300,250 L250,300 L200,250 Z"
            className={`${getRegionColour('rotherham')} transition-colors cursor-pointer`}
            onMouseEnter={() => setHoveredRegion('rotherham')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setActiveRegion('rotherham')}
            role="button"
            aria-label="Rotherham region"
            tabIndex={0}
          />
          <path
            id="doncaster"
            d="M300,150 L350,200 L300,250 L250,200 Z"
            className={`${getRegionColour('doncaster')} transition-colors cursor-pointer`}
            onMouseEnter={() => setHoveredRegion('doncaster')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setActiveRegion('doncaster')}
            role="button"
            aria-label="Doncaster region"
            tabIndex={0}
          />
        </svg>
      </div>

      {/* Region Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {activeRegion ? (
          <div>
            {regions
              .filter(region => region.id === activeRegion)
              .map(region => (
                <div key={region.id} className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl bg-${region.colour}-500/20 flex items-center justify-center`}>
                      <MapPin className={`w-5 h-5 text-${region.colour}-500`} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">{region.name}</h3>
                  </div>

                  <p className="text-zinc-600 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-zinc-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-zinc-900">{region.stats.businesses}</p>
                      <p className="text-sm text-zinc-600">Businesses</p>
                    </div>
                    <div className="bg-zinc-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-zinc-900">{region.stats.jobs}</p>
                      <p className="text-sm text-zinc-600">Jobs</p>
                    </div>
                    <div className="bg-zinc-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-zinc-900">{region.stats.output}</p>
                      <p className="text-sm text-zinc-600">Economic Output</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {region.features.map(feature => (
                      <span
                        key={feature}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-${region.colour}-500/10 text-${region.colour}-700`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-medium text-zinc-900 mb-2">Select a Region</h3>
            <p className="text-zinc-600">
              Click on any region in the map to view detailed information about its economy, opportunities, and key features.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SouthYorkshireMap 