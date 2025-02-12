import axios from 'axios'

const NOMIS_API_BASE = 'https://www.nomisweb.co.uk/api/v01/dataset'
const ONS_API_BASE = 'https://api.beta.ons.gov.uk/v1'

// Types for LMI data
export interface LMIData {
  employment: {
    rate: number
    total: number
    byIndustry: {
      sector: string
      count: number
      percentage: number
    }[]
  }
  skills: {
    shortages: {
      occupation: string
      demandLevel: number
      requiredSkills: string[]
    }[]
    gaps: {
      sector: string
      percentage: number
      commonGaps: string[]
    }[]
  }
  economy: {
    gdp: number
    gvaPerHead: number
    businessCount: number
    averageWage: number
  }
  forecasts: {
    sector: string
    growthRate: number
    newJobs: number
    timeframe: string
  }[]
}

export interface LMIFilters {
  region?: string
  timeframe?: string
  sector?: string
}

// Fallback data for development and when API is unavailable
const fallbackData: LMIData = {
  employment: {
    rate: 74.5,
    total: 650000,
    byIndustry: [
      { sector: 'Digital & Technology', count: 45000, percentage: 15 },
      { sector: 'Manufacturing', count: 55000, percentage: 18 },
      { sector: 'Healthcare', count: 75000, percentage: 25 }
    ]
  },
  skills: {
    shortages: [
      {
        occupation: 'Software Developers',
        demandLevel: 8.5,
        requiredSkills: ['JavaScript', 'Python', 'Cloud Computing']
      },
      {
        occupation: 'Data Scientists',
        demandLevel: 8.2,
        requiredSkills: ['Machine Learning', 'Python', 'Data Analysis']
      },
      {
        occupation: 'Healthcare Workers',
        demandLevel: 7.8,
        requiredSkills: ['Patient Care', 'Medical Records', 'Clinical Skills']
      }
    ],
    gaps: [
      {
        sector: 'Digital & Technology',
        percentage: 35,
        commonGaps: ['AI/ML', 'Cybersecurity', 'Cloud Architecture']
      },
      {
        sector: 'Manufacturing',
        percentage: 28,
        commonGaps: ['Digital Skills', 'Advanced Machinery Operation', 'Process Automation']
      },
      {
        sector: 'Healthcare',
        percentage: 25,
        commonGaps: ['Digital Health Records', 'Telemedicine', 'Patient Data Analysis']
      }
    ]
  },
  economy: {
    gdp: 27500000000,
    gvaPerHead: 21500,
    businessCount: 45000,
    averageWage: 28500
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
    },
    {
      sector: 'Healthcare',
      growthRate: 8.5,
      newJobs: 4200,
      timeframe: '2023-2025'
    }
  ]
}

class LMIService {
  private async getNomisData(dataset: string, query: any) {
    try {
      // For now, return fallback data as we don't have API keys set up
      console.warn('Using fallback data - NOMIS API key not configured')
      return fallbackData
      
      // TODO: Uncomment and use this when API keys are configured
      // const response = await axios.get(`${NOMIS_API_BASE}/${dataset}`, {
      //   params: {
      //     geography: 'E47000002', // South Yorkshire code
      //     api_key: process.env.NEXT_PUBLIC_NOMIS_API_KEY,
      //     ...query
      //   }
      // })
      // return response.data
    } catch (error) {
      console.error('Error fetching NOMIS data:', error)
      return fallbackData
    }
  }

  private async getONSData(endpoint: string) {
    try {
      // For now, return fallback data as we don't have API keys set up
      console.warn('Using fallback data - ONS API key not configured')
      return fallbackData
      
      // TODO: Uncomment and use this when API keys are configured
      // const response = await axios.get(`${ONS_API_BASE}/${endpoint}`, {
      //   params: {
      //     area: 'E47000002', // South Yorkshire code
      //   },
      //   headers: {
      //     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ONS_API_KEY}`
      //   }
      // })
      // return response.data
    } catch (error) {
      console.error('Error fetching ONS data:', error)
      return fallbackData
    }
  }

  async getEmploymentData() {
    // Fetch employment rate and total employment
    const employmentData = await this.getNomisData('NM_1_1', {
      date: 'latest',
      measure: ['20100', '20201'], // Employment rate and total employment
      item: ['1', '2'] // All persons
    })

    // Fetch employment by industry
    const industryData = await this.getNomisData('NM_189_1', {
      date: 'latest',
      industry: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S']
    })

    return {
      rate: employmentData.rate,
      total: employmentData.total,
      byIndustry: this.transformIndustryData(industryData)
    }
  }

  async getSkillsData() {
    // This would typically come from Employer Skills Survey data
    // For now, returning mock data as the actual API isn't publicly available
    return {
      shortages: [
        {
          occupation: 'Software Developers',
          demandLevel: 8.5,
          requiredSkills: ['JavaScript', 'Python', 'Cloud Computing']
        },
        {
          occupation: 'Healthcare Workers',
          demandLevel: 7.8,
          requiredSkills: ['Patient Care', 'Medical Records', 'Clinical Skills']
        }
      ],
      gaps: [
        {
          sector: 'Digital & Technology',
          percentage: 35,
          commonGaps: ['AI/ML', 'Cybersecurity', 'Cloud Architecture']
        },
        {
          sector: 'Manufacturing',
          percentage: 28,
          commonGaps: ['Digital Skills', 'Advanced Machinery Operation', 'Process Automation']
        }
      ]
    }
  }

  async getEconomicData() {
    const gdpData = await this.getONSData('datasets/regional-gdp-by-year')
    const businessData = await this.getNomisData('NM_141_1', {
      date: 'latest'
    })
    const wageData = await this.getNomisData('NM_99_1', {
      date: 'latest'
    })

    return {
      gdp: gdpData.value,
      gvaPerHead: gdpData.value / gdpData.population,
      businessCount: businessData.total,
      averageWage: wageData.value
    }
  }

  async getForecastData() {
    // This would typically come from Working Futures or similar forecasting data
    // For now, returning mock data as the actual API isn't publicly available
    return [
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
  }

  private transformIndustryData(data: any) {
    // Transform raw NOMIS industry data into our format
    return Object.entries(data).map(([sector, value]: [string, any]) => ({
      sector,
      count: value.count,
      percentage: value.percentage
    }))
  }

  async getAllLMIData(filters?: LMIFilters): Promise<LMIData> {
    try {
      // For development and when APIs are not configured, return fallback data
      if (!process.env.NEXT_PUBLIC_NOMIS_API_KEY || !process.env.NEXT_PUBLIC_ONS_API_KEY) {
        console.warn('Using fallback data - API keys not configured')
        return fallbackData
      }

      // When API keys are configured, fetch real data
      const [employment, skills, economy, forecasts] = await Promise.all([
        this.getEmploymentData(),
        this.getSkillsData(),
        this.getEconomicData(),
        this.getForecastData()
      ])

      return {
        employment,
        skills,
        economy,
        forecasts
      }
    } catch (error) {
      console.error('Error fetching LMI data:', error)
      return fallbackData
    }
  }
}

export const lmiService = new LMIService() 