'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './labour-market.css'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building2, 
  GraduationCap,
  BookOpen,
  Briefcase,
  ArrowRight,
  LineChart,
  Search,
  Target,
  Award
} from 'lucide-react'
import { lmiService, type LMIData } from '@/services/lmiApi'

export default function LabourMarketPage() {
  const [lmiData, setLmiData] = useState<LMIData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-teal-600"></div>
        <span className="ml-3 text-teal-800">Loading labour market data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 bg-red-50 p-4 rounded-lg">
          {error}
          <p className="text-sm mt-2">Please try again later or contact support if the problem persists.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Introduction */}
      <section className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Labour Market Intelligence</h1>
              <p className="text-xl text-teal-50 mb-8 max-w-2xl">
                Up-to-date insights into South Yorkshire's employment landscape, skills demands, and economic trends to help inform your decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#overview" 
                   onClick={() => setActiveTab('overview')}
                   className="bg-white text-teal-900 px-6 py-3 rounded-lg font-medium inline-flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Explore the data
                </a>
                <a href="#sectors" 
                   onClick={() => setActiveTab('sectors')}
                   className="bg-teal-800 border border-teal-200/30 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Sector analysis
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-teal-500/30 w-full">
                <h3 className="text-lg font-medium mb-4">Why this matters:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-teal-200 text-teal-800 p-1 rounded-full mr-3 mt-1">
                      <Target className="h-4 w-4" />
                    </div>
                    <span>Make informed career and business decisions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-200 text-teal-800 p-1 rounded-full mr-3 mt-1">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <span>Identify skills gaps and training opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-200 text-teal-800 p-1 rounded-full mr-3 mt-1">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <span>Spot growing sectors and future trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-slate-50 clip-path-wave-top"></div>
      </section>
      
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-4 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'overview' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('employment')}
              className={`px-4 py-4 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'employment' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <Users className="mr-2 h-4 w-4" />
              Employment
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-4 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'skills' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Skills Demand
            </button>
            <button 
              onClick={() => setActiveTab('sectors')}
              className={`px-4 py-4 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'sectors' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Key Sectors
            </button>
            <button 
              onClick={() => setActiveTab('forecast')}
              className={`px-4 py-4 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'forecast' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <LineChart className="mr-2 h-4 w-4" />
              Future Trends
            </button>
            <button 
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-4 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'resources' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-slate-600 hover:text-teal-600'}`}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </button>
          </nav>
        </div>
      </div>
      
      {/* Content Container */}
      <div id="content" className="container mx-auto px-4 py-12 max-w-7xl">
        {activeTab === 'overview' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">South Yorkshire at a Glance</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                A snapshot of our region's labour market and economy. Use these insights to understand
                the current landscape and identify opportunities.
              </p>
            </div>
            
            {/* Key Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all stat-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-1">Employment Rate</h3>
                    <p className="text-3xl font-bold text-teal-700">{lmiData?.employment?.rate?.toFixed(1) || '0'}%</p>
                    <p className="text-slate-600 mt-1 text-sm">of working age population</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-teal-700" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    <span className="text-teal-600 font-medium">+1.2% </span>
                    compared to last year
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all stat-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-1">Active Businesses</h3>
                    <p className="text-3xl font-bold text-teal-700">{lmiData?.economy?.businessCount?.toLocaleString() || '0'}</p>
                    <p className="text-slate-600 mt-1 text-sm">registered in the region</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-teal-700" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    <span className="text-teal-600 font-medium">+3.5% </span>
                    growth since last quarter
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all stat-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-1">GVA per Head</h3>
                    <p className="text-3xl font-bold text-teal-700">£{lmiData?.economy?.gvaPerHead?.toLocaleString() || '0'}</p>
                    <p className="text-slate-600 mt-1 text-sm">economic output per person</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-teal-700" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    <span className="text-teal-600 font-medium">+2.8% </span>
                    growth year-on-year
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all stat-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-1">Average Annual Wage</h3>
                    <p className="text-3xl font-bold text-teal-700">£{lmiData?.economy?.averageWage?.toLocaleString() || '0'}</p>
                    <p className="text-slate-600 mt-1 text-sm">for full-time workers</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-teal-700" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    <span className="text-teal-600 font-medium">+3.1% </span>
                    increase from previous year
                  </p>
                </div>
              </div>
            </div>
            
            {/* Growth & Opportunity Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Growth & Opportunity</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-medium text-slate-800 mb-4">Fastest Growing Sectors</h3>
                  <div className="space-y-4">
                    {(lmiData?.forecasts || []).slice(0, 3).map((forecast, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full bg-teal-${600 - (index * 100)}`}></div>
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-slate-700">{forecast.sector}</span>
                            <span className="font-bold text-teal-600">+{forecast.growthRate.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2 mt-1">
                            <div 
                              className="bg-teal-600 h-2 rounded-full" 
                              style={{ width: `${Math.min(100, forecast.growthRate * 5)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setActiveTab('forecast')}
                    className="mt-6 text-teal-700 flex items-center text-sm font-medium hover:text-teal-800"
                  >
                    View all growth forecasts
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-medium text-slate-800 mb-4">Skills in High Demand</h3>
                  <div className="space-y-4">
                    {(lmiData?.skills?.shortages || []).slice(0, 3).map((shortage, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`mt-1 w-3 h-3 rounded-full bg-teal-${600 - (index * 100)}`}></div>
                        <div className="ml-3">
                          <p className="font-medium text-slate-700">{shortage.occupation}</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {shortage.requiredSkills.slice(0, 2).map((skill, i) => (
                              <span key={i} className="inline-block bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">
                                {skill}
                              </span>
                            ))}
                            {shortage.requiredSkills.length > 2 && (
                              <span className="inline-block bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">
                                +{shortage.requiredSkills.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setActiveTab('skills')}
                    className="mt-6 text-teal-700 flex items-center text-sm font-medium hover:text-teal-800"
                  >
                    View all skills in demand
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-xl p-8 shadow-lg text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-3">Want to dig deeper?</h3>
                  <p className="text-teal-50 mb-6 md:mb-0">
                    Explore our detailed reports and resources for a comprehensive understanding of South Yorkshire's labour market.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className="bg-white text-teal-800 px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-teal-50"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    View resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'employment' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Employment in South Yorkshire</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Explore employment statistics by industry sector, demographic groups, and geographic areas across the region.
              </p>
            </div>
            
            {/* Employment Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-medium text-slate-800 mb-4">Employment Rate</h3>
                <div className="flex items-end space-x-3">
                  <p className="text-4xl font-bold text-teal-700">{lmiData?.employment?.rate?.toFixed(1) || '0'}%</p>
                  <div className="flex items-center mb-1 text-teal-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">+1.2%</span>
                  </div>
                </div>
                <p className="text-slate-500 mt-2 text-sm">
                  Percentage of working age population (16-64) in employment
                </p>
                <hr className="my-4 border-slate-100" />
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <p className="text-sm text-slate-500">Male</p>
                    <p className="text-lg font-semibold text-slate-700">76.8%</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Female</p>
                    <p className="text-lg font-semibold text-slate-700">72.2%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-medium text-slate-800 mb-4">Total Employment</h3>
                <div className="flex items-end space-x-3">
                  <p className="text-4xl font-bold text-teal-700">{(lmiData?.employment?.total ? (lmiData.employment.total / 1000).toFixed(1) : '0')}k</p>
                  <div className="flex items-center mb-1 text-teal-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">+0.8%</span>
                  </div>
                </div>
                <p className="text-slate-500 mt-2 text-sm">
                  Total number of people in employment across the region
                </p>
                <hr className="my-4 border-slate-100" />
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <p className="text-sm text-slate-500">Full-time</p>
                    <p className="text-lg font-semibold text-slate-700">74%</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Part-time</p>
                    <p className="text-lg font-semibold text-slate-700">26%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-medium text-slate-800 mb-4">Economic Inactivity</h3>
                <div className="flex items-end space-x-3">
                  <p className="text-4xl font-bold text-slate-700">21.3%</p>
                  <div className="flex items-center mb-1 text-emerald-600">
                    <TrendingUp className="h-4 w-4 mr-1" transform="rotate(180)" />
                    <span className="text-sm font-medium">-0.5%</span>
                  </div>
                </div>
                <p className="text-slate-500 mt-2 text-sm">
                  People of working age neither in employment nor seeking work
                </p>
                <hr className="my-4 border-slate-100" />
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-500">Students</p>
                    <p className="text-sm font-semibold text-slate-700">28%</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-500">Long-term sick</p>
                    <p className="text-sm font-semibold text-slate-700">24%</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-500">Looking after family/home</p>
                    <p className="text-sm font-semibold text-slate-700">21%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Employment by Industry */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6">Employment by Industry</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bar chart representation */}
                <div>
                  <div className="space-y-4">
                    {(lmiData?.employment?.byIndustry || []).map((industry, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-slate-700">{industry.sector}</span>
                          <span className="text-sm font-semibold text-slate-700">{industry.percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-3">
                          <div 
                            className={`bg-teal-${800 - (index % 3) * 100} h-3 rounded-full`} 
                            style={{ width: `${industry.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Insights & Analysis */}
                <div className="border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                  <h4 className="text-lg font-medium text-slate-800 mb-4">Key Insights</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-teal-50 p-1 rounded-full mr-3 mt-1">
                        <TrendingUp className="h-4 w-4 text-teal-700" />
                      </div>
                      <div>
                        <p className="text-slate-700">
                          <span className="font-medium">Healthcare</span> remains the largest employment sector, with growth expected to continue
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-50 p-1 rounded-full mr-3 mt-1">
                        <TrendingUp className="h-4 w-4 text-teal-700" />
                      </div>
                      <div>
                        <p className="text-slate-700">
                          <span className="font-medium">Digital & Technology</span> showing fastest growth at 15% year-on-year
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-50 p-1 rounded-full mr-3 mt-1">
                        <TrendingUp className="h-4 w-4 text-teal-700" />
                      </div>
                      <div>
                        <p className="text-slate-700">
                          <span className="font-medium">Advanced Manufacturing</span> continues to be a key specialisation for the region
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-lg font-medium text-slate-800 mb-3">Compare to national average</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Manufacturing</span>
                        <span className="text-sm font-medium text-teal-700">+5.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Digital & Technology</span>
                        <span className="text-sm font-medium text-teal-700">+2.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Financial Services</span>
                        <span className="text-sm font-medium text-red-600">-3.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Employment by Local Authority */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6">Employment Across South Yorkshire</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-lg font-medium text-slate-700 mb-2">Sheffield</h4>
                  <p className="text-2xl font-bold text-teal-700 mb-1">73.8%</p>
                  <p className="text-sm text-slate-500">Employment rate</p>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-sm text-slate-600">Key sectors: Digital, Education, Healthcare</p>
                  </div>
                </div>
                
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-lg font-medium text-slate-700 mb-2">Rotherham</h4>
                  <p className="text-2xl font-bold text-teal-700 mb-1">72.5%</p>
                  <p className="text-sm text-slate-500">Employment rate</p>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-sm text-slate-600">Key sectors: Manufacturing, Logistics</p>
                  </div>
                </div>
                
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-lg font-medium text-slate-700 mb-2">Doncaster</h4>
                  <p className="text-2xl font-bold text-teal-700 mb-1">74.1%</p>
                  <p className="text-sm text-slate-500">Employment rate</p>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-sm text-slate-600">Key sectors: Logistics, Retail, Aviation</p>
                  </div>
                </div>
                
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-lg font-medium text-slate-700 mb-2">Barnsley</h4>
                  <p className="text-2xl font-bold text-teal-700 mb-1">73.2%</p>
                  <p className="text-sm text-slate-500">Employment rate</p>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-sm text-slate-600">Key sectors: Distribution, Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action - Reports */}
            <div className="bg-slate-100 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Looking for more detailed employment data?</h3>
                  <p className="text-slate-600">Download our comprehensive quarterly employment reports.</p>
                </div>
                <button className="mt-4 md:mt-0 bg-teal-700 text-white px-5 py-2 rounded-lg font-medium inline-flex items-center hover:bg-teal-800">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Download reports
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'skills' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Skills Demand & Gaps</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Understand the skills employers are looking for, current skills shortages, and opportunities for upskilling across South Yorkshire.
              </p>
            </div>
            
            {/* Skills Insights Summary */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-r border-slate-100 pr-6">
                  <div className="flex items-center">
                    <div className="bg-teal-50 p-3 rounded-lg mr-4">
                      <GraduationCap className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800">Skills Shortages</h3>
                      <p className="text-sm text-slate-500">Jobs difficult to fill due to lack of skilled candidates</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-3xl font-bold text-teal-700">35%</p>
                    <p className="text-sm text-slate-500">of businesses report skills shortages</p>
                  </div>
                </div>
                
                <div className="border-r border-slate-100 px-6">
                  <div className="flex items-center">
                    <div className="bg-teal-50 p-3 rounded-lg mr-4">
                      <Target className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800">Skills Gaps</h3>
                      <p className="text-sm text-slate-500">Current workforce needing upskilling</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-3xl font-bold text-teal-700">28%</p>
                    <p className="text-sm text-slate-500">of employees lack all skills needed</p>
                  </div>
                </div>
                
                <div className="pl-6">
                  <div className="flex items-center">
                    <div className="bg-teal-50 p-3 rounded-lg mr-4">
                      <Award className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800">Training Investment</h3>
                      <p className="text-sm text-slate-500">Employer investment in workforce development</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-3xl font-bold text-teal-700">£1,250</p>
                    <p className="text-sm text-slate-500">average annual spend per employee</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills in High Demand */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Most In-Demand Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="flex items-center text-lg font-medium text-slate-800 mb-4">
                    <div className="bg-teal-50 p-2 rounded-lg mr-3">
                      <svg className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    Technical Skills
                  </h4>
                  
                  <div className="space-y-4">
                    {[
                      { skill: 'Data Analysis', demand: 95 },
                      { skill: 'Software Development', demand: 92 },
                      { skill: 'Cloud Computing', demand: 90 },
                      { skill: 'Cybersecurity', demand: 88 },
                      { skill: 'AI/Machine Learning', demand: 85 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                          <span className="text-xs font-medium text-teal-700">Demand: {item.demand}/100</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div 
                            className="bg-teal-600 h-2 rounded-full" 
                            style={{ width: `${item.demand}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="flex items-center text-lg font-medium text-slate-800 mb-4">
                    <div className="bg-teal-50 p-2 rounded-lg mr-3">
                      <svg className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    Soft Skills
                  </h4>
                  
                  <div className="space-y-4">
                    {[
                      { skill: 'Problem Solving', demand: 96 },
                      { skill: 'Communication', demand: 94 },
                      { skill: 'Adaptability', demand: 92 },
                      { skill: 'Collaboration', demand: 89 },
                      { skill: 'Critical Thinking', demand: 87 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                          <span className="text-xs font-medium text-teal-700">Demand: {item.demand}/100</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div 
                            className="bg-teal-600 h-2 rounded-full" 
                            style={{ width: `${item.demand}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Shortages by Occupation */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6">Skills Shortages by Occupation</h3>
              
              <div className="space-y-6">
                {(lmiData?.skills?.shortages || []).map((shortage, index) => (
                  <div key={index} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-medium text-slate-800 mb-2">{shortage.occupation}</h4>
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-slate-500 mr-3">Demand Level:</span>
                      <div className="w-48 bg-slate-100 rounded-full h-2 mr-3">
                        <div 
                          className="bg-teal-600 h-2 rounded-full" 
                          style={{ width: `${shortage.demandLevel * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-teal-700">{shortage.demandLevel}/10</span>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500 mb-2 block">Required Skills:</span>
                      <div className="flex flex-wrap gap-2">
                        {shortage.requiredSkills.map((skill, i) => (
                          <span key={i} className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Gaps by Sector */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6">Skills Gaps by Sector</h3>
              
              <div className="space-y-6">
                {(lmiData?.skills?.gaps || []).map((gap, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-medium text-slate-800">{gap.sector}</h4>
                      <div className="mt-2 flex items-center">
                        <div className="w-full bg-slate-100 rounded-full h-2 mr-3">
                          <div 
                            className="bg-teal-600 h-2 rounded-full" 
                            style={{ width: `${gap.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-teal-700">{gap.percentage}%</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Percentage of workforce with skills gaps</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-sm text-slate-500 mb-2">Common Skills Gaps:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {gap.commonGaps.map((skill, i) => (
                          <div key={i} className="bg-slate-50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-slate-700">{skill}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action - Training and Development */}
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-xl p-8 shadow-lg text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Close the skills gap</h3>
                  <p className="text-teal-50 mb-6 md:mb-0">
                    Access funding, support, and resources to upskill your workforce or develop your own skills for the jobs of tomorrow.
                  </p>
                </div>
                <div className="space-y-4">
                  <a href="#" className="block bg-white text-teal-800 px-6 py-3 rounded-lg font-medium text-center hover:bg-teal-50">
                    Explore training opportunities
                  </a>
                  <a href="#" className="block bg-teal-600 border border-white/30 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-teal-500">
                    Skills funding information
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'sectors' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Key Industry Sectors</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Explore South Yorkshire's key industry sectors, their economic contribution, and employment opportunities.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <button className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm">All Sectors</button>
                <button className="bg-white border border-slate-200 hover:border-teal-300 text-slate-700 px-4 py-1 rounded-full text-sm">Digital & Technology</button>
                <button className="bg-white border border-slate-200 hover:border-teal-300 text-slate-700 px-4 py-1 rounded-full text-sm">Advanced Manufacturing</button>
                <button className="bg-white border border-slate-200 hover:border-teal-300 text-slate-700 px-4 py-1 rounded-full text-sm">Healthcare</button>
                <button className="bg-white border border-slate-200 hover:border-teal-300 text-slate-700 px-4 py-1 rounded-full text-sm">Green Energy</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { 
                  name: 'Digital & Technology', 
                  color: 'teal',
                  employment: '45,000',
                  growth: '15%',
                  keySkills: ['Software Development', 'Data Analysis', 'Cybersecurity']
                },
                { 
                  name: 'Advanced Manufacturing', 
                  color: 'blue',
                  employment: '55,000',
                  growth: '7.8%',
                  keySkills: ['Precision Engineering', 'Automation', 'Quality Control']
                },
                { 
                  name: 'Healthcare', 
                  color: 'indigo',
                  employment: '75,000',
                  growth: '8.5%',
                  keySkills: ['Patient Care', 'Medical Technology', 'Healthcare Administration']
                },
                { 
                  name: 'Green Energy', 
                  color: 'emerald',
                  employment: '18,000',
                  growth: '15.2%',
                  keySkills: ['Renewable Systems', 'Energy Efficiency', 'Sustainable Design']
                }
              ].map((sector, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className={`bg-${sector.color}-700 text-white p-6`}>
                    <h3 className="text-xl font-bold">{sector.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-500">Employment</p>
                        <p className="text-2xl font-bold text-slate-800">{sector.employment}</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-500">Growth Rate</p>
                        <p className="text-2xl font-bold text-slate-800">{sector.growth}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {sector.keySkills.map((skill, i) => (
                          <span key={i} className={`inline-block bg-${sector.color}-50 text-${sector.color}-700 px-3 py-1 rounded-full text-sm`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-12">
              <p className="text-slate-500 mb-6">More detailed sector information will be available soon</p>
              <button className="bg-teal-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-teal-800">
                <Building2 className="mr-2 h-5 w-5" />
                Request sector report
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'forecast' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Future Trends & Forecasts</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Explore projections for South Yorkshire's economy and labour market over the next 2-5 years.
              </p>
            </div>
            
            {/* Key Forecast Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-medium text-slate-800 mb-4">Job Growth</h3>
                <div>
                  <p className="text-3xl font-bold text-teal-700">+16,500</p>
                  <p className="text-slate-600 mt-1">new jobs by 2025</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Regional average</span>
                    <span className="text-sm font-medium text-teal-700">+4.2%</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-slate-600">National average</span>
                    <span className="text-sm font-medium text-slate-700">+3.8%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-medium text-slate-800 mb-4">Wage Growth</h3>
                <div>
                  <p className="text-3xl font-bold text-teal-700">+8.5%</p>
                  <p className="text-slate-600 mt-1">projected by 2025</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Highest in</span>
                    <span className="text-sm font-medium text-teal-700">Digital (+12.3%)</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-slate-600">Lowest in</span>
                    <span className="text-sm font-medium text-slate-700">Retail (+4.1%)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-medium text-slate-800 mb-4">Economic Growth</h3>
                <div>
                  <p className="text-3xl font-bold text-teal-700">+5.2%</p>
                  <p className="text-slate-600 mt-1">GVA growth by 2025</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Pre-pandemic</span>
                    <span className="text-sm font-medium text-slate-700">+2.8%</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-slate-600">National projection</span>
                    <span className="text-sm font-medium text-slate-700">+4.7%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sector Growth Forecasts */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6">Sector Growth Forecasts</h3>
              
              <div className="space-y-6">
                {(lmiData?.forecasts || []).map((forecast, index) => (
                  <div key={index} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                      <div className="col-span-4 md:col-span-2">
                        <h4 className="text-lg font-medium text-slate-800">{forecast.sector}</h4>
                        <p className="text-sm text-slate-500">Timeframe: {forecast.timeframe}</p>
                      </div>
                      
                      <div className="col-span-2 md:col-span-2">
                        <p className="text-sm text-slate-500">Growth Rate</p>
                        <p className="text-xl font-bold text-teal-700">+{forecast.growthRate.toFixed(1)}%</p>
                      </div>
                      
                      <div className="col-span-2 md:col-span-2">
                        <p className="text-sm text-slate-500">New Jobs</p>
                        <p className="text-xl font-bold text-teal-700">+{forecast.newJobs.toLocaleString()}</p>
                      </div>
                      
                      <div className="col-span-4 md:col-span-2">
                        <div className="w-full bg-slate-100 rounded-full h-3 mt-2">
                          <div 
                            className="bg-teal-600 h-3 rounded-full" 
                            style={{ width: `${Math.min(100, forecast.growthRate * 5)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Emerging Opportunities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Emerging Opportunities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="bg-teal-50 p-3 rounded-full inline-block mb-4">
                    <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Green Economy</h4>
                  <p className="text-slate-600 mb-4">
                    Rapid growth in renewable energy, sustainable construction, and low-carbon technologies.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Projected 3,500+ new jobs</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">15.2% growth rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="bg-teal-50 p-3 rounded-full inline-block mb-4">
                    <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Health Technology</h4>
                  <p className="text-slate-600 mb-4">
                    Growth in digital health, medtech, and innovative healthcare delivery models.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Projected 2,800+ new jobs</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">12.8% growth rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="bg-teal-50 p-3 rounded-full inline-block mb-4">
                    <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Advanced Manufacturing</h4>
                  <p className="text-slate-600 mb-4">
                    Growth in automation, robotics, and high-value production techniques.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Projected 3,800+ new jobs</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">7.8% growth rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Download Reports */}
            <div className="bg-slate-100 rounded-xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Download Full Forecast Reports</h3>
                  <p className="text-slate-600 max-w-2xl">
                    Our detailed forecast reports provide in-depth analysis of future trends, opportunities and challenges for South Yorkshire's economy.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <button className="bg-teal-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-teal-800">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Labour Market Resources</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Access reports, data, funding information, and support to help you make informed decisions about skills, employment, and business growth.
              </p>
            </div>
            
            {/* Resources by Audience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-teal-700 text-white p-4">
                  <h3 className="text-lg font-medium">For Individuals</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-teal-700">Job Market Analysis by Sector</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-teal-700">Skills in Demand Guide</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-teal-700">Training & Education Opportunities</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-sky-700 text-white p-4">
                  <h3 className="text-lg font-medium">For Employers</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-sky-700">Workforce Development Guide</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-sky-700">Business Growth & Investment</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-sky-700">Recruitment Support</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-indigo-700 text-white p-4">
                  <h3 className="text-lg font-medium">For Education Providers</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-indigo-700">Curriculum Development</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-indigo-700">Industry Partnerships</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group">
                        <BookOpen className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-indigo-700">Skills Gap Analysis</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Reports and Publications */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-teal-600 mr-2" />
                Latest Reports and Publications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "South Yorkshire Labour Market Annual Review 2023",
                    date: "June 2023",
                    type: "PDF Report",
                    size: "4.2MB"
                  },
                  {
                    title: "Skills Priority Report 2023-2025",
                    date: "April 2023",
                    type: "PDF Report",
                    size: "3.8MB"
                  },
                  {
                    title: "Digital Skills Barometer",
                    date: "March 2023",
                    type: "PDF Report",
                    size: "2.5MB"
                  }
                ].map((report, index) => (
                  <a href="#" key={index} className="flex border border-slate-200 rounded-lg overflow-hidden hover:border-teal-300 hover:shadow-md transition-all">
                    <div className="bg-teal-50 p-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-teal-600" />
                    </div>
                    <div className="p-4 flex-grow">
                      <h4 className="text-sm font-medium text-slate-800 mb-1">{report.title}</h4>
                      <div className="flex items-center text-xs text-slate-500 space-x-3">
                        <span>{report.date}</span>
                        <span>{report.type}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Get in Touch */}
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-xl p-8 shadow-lg text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Need more specific information?</h3>
                  <p className="text-teal-50 mb-6">
                    Our labour market intelligence team can provide customised data and insights to support your planning and decision-making.
                  </p>
                  <button className="bg-white text-teal-800 px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-teal-50">
                    Contact the team
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-teal-400/30">
                  <h4 className="text-lg font-medium mb-4">We can help with:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-teal-200 text-teal-800 p-1 rounded-full mr-3 mt-1">
                        <Target className="h-4 w-4" />
                      </div>
                      <span>Custom data analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-200 text-teal-800 p-1 rounded-full mr-3 mt-1">
                        <Target className="h-4 w-4" />
                      </div>
                      <span>Sector-specific insights</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-200 text-teal-800 p-1 rounded-full mr-3 mt-1">
                        <Target className="h-4 w-4" />
                      </div>
                      <span>Skills forecasting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 