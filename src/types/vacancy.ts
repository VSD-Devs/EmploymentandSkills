export interface DfeVacancy {
  id: string
  title: string
  description: string
  employer: {
    name: string
    website?: string
  }
  wage: {
    amount: number
    interval: string
  }
  course: {
    title: string
    level: number
    route: string
  }
  location: {
    postcode: string
    town: string
    distance?: number
  }
  closingDate: string
  startDate: string
  postedDate: string
  applicationUrl: string
}

export interface DfeVacancyResponse {
  results: DfeVacancy[]
  total: number
  page: number
  pageSize: number
  _debug?: Record<string, unknown>
} 