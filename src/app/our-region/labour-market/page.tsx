'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building2, 
  GraduationCap,
  ArrowUpRight,
  ArrowRight,
  FileText,
  Target,
  ChevronRight
} from 'lucide-react'
import { lmiService, type LMIData } from '@/services/lmiApi'

const defaultStats = {
  employment: {
    rate: 74.5,
    total: 650000,
    byIndustry: []
  },
  economy: {
    gdp: 21500,
    gvaPerHead: 21500,
    businessCount: 45000,
    averageWage: 28500
  },
  skills: {
    shortages: [
      {
        occupation: 'Digital Skills',
        demandLevel: 8,
        requiredSkills: ['Programming', 'Data Analysis']
      }
    ],
    gaps: [
      {
        sector: 'Manufacturing',
        percentage: 28,
        commonGaps: ['Digital Skills', 'Process Automation']
      }
    ]
  },
  forecasts: [
    {
      sector: 'Digital & Technology',
      growthRate: 12.5,
      newJobs: 5000,
      timeframe: '2023-2025'
    },
    {
      sector: 'Green Energy',
      growthRate: 15.2,
      newJobs: 3500,
      timeframe: '2023-2025'
    }
  ]
};

export default function LabourMarketPage() {
  const [lmiData, setLmiData] = useState<LMIData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const data = await lmiService.getAllLMIData()
        setLmiData(data)
      } catch (err) {
        setError('Failed to load labour market data')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const stats = lmiData || defaultStats

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Labour Market Intelligence</h1>
          <p className="text-xl text-zinc-200 max-w-3xl">
            Real-time insights into South Yorkshire's employment landscape, skills demands, and economic trends
          </p>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Employment Rate</h3>
            <p className="text-3xl font-bold text-indigo-600">{stats.employment?.rate?.toFixed(1) || '0'}%</p>
            <p className="text-zinc-600 mt-2">of working age population</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Active Businesses</h3>
            <p className="text-3xl font-bold text-indigo-600">{stats.economy?.businessCount?.toLocaleString() || '0'}</p>
            <p className="text-zinc-600 mt-2">registered in the region</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">GVA per Head</h3>
            <p className="text-3xl font-bold text-indigo-600">£{stats.economy?.gvaPerHead?.toLocaleString() || '0'}</p>
            <p className="text-zinc-600 mt-2">economic output per person</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Average Annual Wage</h3>
            <p className="text-3xl font-bold text-indigo-600">£{stats.economy?.averageWage?.toLocaleString() || '0'}</p>
            <p className="text-zinc-600 mt-2">for full-time workers</p>
          </div>
        </div>
      </div>

      {/* Skills Demand Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Current Skills Landscape</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Skills Shortages</h3>
            <p className="text-3xl font-bold text-indigo-600">
              {((stats.skills.shortages?.length || 0) * 5).toFixed(0)}%
            </p>
            <p className="text-zinc-600 mt-2">of businesses report skills shortages</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Skills Gaps</h3>
            <p className="text-3xl font-bold text-indigo-600">
              {((stats.skills.gaps?.length || 0) * 7).toFixed(0)}%
            </p>
            <p className="text-zinc-600 mt-2">of workforce require upskilling</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Hard-to-Fill Vacancies</h3>
            <p className="text-3xl font-bold text-indigo-600">
              {stats.skills.shortages?.length > 0 
                ? ((stats.skills.shortages.filter(s => s?.demandLevel > 7).length / stats.skills.shortages.length) * 100).toFixed(0) 
                : '0'}%
            </p>
            <p className="text-zinc-600 mt-2">of vacancies are hard to fill</p>
          </div>
        </div>
      </div>

      {/* Growth Forecast Section */}
      <div className="bg-zinc-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Growth Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(stats.forecasts || []).map((forecast, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">{forecast.sector}</h3>
                <p className="text-3xl font-bold text-indigo-600">{forecast.growthRate?.toFixed(1) || '0'}%</p>
                <p className="text-zinc-600 mt-2">projected growth by {forecast.timeframe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources & Support */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Resources & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/educators" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">For Education Providers</h3>
              <p className="text-zinc-600">Access resources and support to help align your provision with regional needs</p>
            </div>
          </Link>
          <Link href="/employers" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">For Employers</h3>
              <p className="text-zinc-600">Find information about skills funding, training programmes and recruitment support</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 