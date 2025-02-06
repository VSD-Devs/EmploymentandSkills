export interface EligibilityCriteria {
  age: number
  residency: string
  employmentStatus: string
  qualificationLevel: string
}

export interface Course {
  id: string
  title: string
  provider: string
  level: string
  duration: string
  fundingType: 'Fully Funded' | 'Co-Funded' | 'Advanced Learner Loan'
  startDate: string
  location: string
  description: string
  qualifications: string[]
  sectors: string[]
}

export type FundingType = 'Fully Funded' | 'Co-Funded' | 'Advanced Learner Loan' 