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
  fundingModel: string
  type: string
  category: string
  description: string
  location: string
  startDate: string
  deliveryMethod: string
  fundingInfo: string
  whatYoullLearn: string[]
  careerOpportunities: string[]
  qualifications: string[]
  sectors: string[]
  slug: string
}

export type FundingType = 'Fully Funded' | 'Co-Funded' | 'Advanced Learner Loan' 