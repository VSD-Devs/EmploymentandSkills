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

// Static data for development
const staticData: LMIData = {
  employment: {
    rate: 74.5,
    total: 650000,
    byIndustry: [
      { sector: 'Digital & Technology', count: 45000, percentage: 15 },
      { sector: 'Manufacturing', count: 55000, percentage: 18 },
      { sector: 'Healthcare', count: 75000, percentage: 25 },
      { sector: 'Construction', count: 35000, percentage: 12 },
      { sector: 'Retail & Hospitality', count: 40000, percentage: 13 },
      { sector: 'Professional Services', count: 50000, percentage: 17 }
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
      },
      {
        occupation: 'Digital Marketing Specialists',
        demandLevel: 7.5,
        requiredSkills: ['Social Media', 'Content Strategy', 'Analytics']
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
    },
    {
      sector: 'Advanced Manufacturing',
      growthRate: 7.8,
      newJobs: 3800,
      timeframe: '2023-2025'
    }
  ]
}

class LMIService {
  async getEmploymentData() {
    return staticData.employment
  }

  async getSkillsData() {
    return staticData.skills
  }

  async getEconomicData() {
    return staticData.economy
  }

  async getForecastData() {
    return staticData.forecasts
  }

  async getAllLMIData(_filters?: LMIFilters): Promise<LMIData> {
    return staticData
  }
}

export const lmiService = new LMIService() 