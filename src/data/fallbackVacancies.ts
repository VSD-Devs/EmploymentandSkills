import type { DfeVacancyResponse } from '@/services/dfeApi';

export const fallbackVacancies: DfeVacancyResponse = {
  vacancies: [
    {
      title: "Digital Marketing Apprentice",
      description: "Join our dynamic team as a Digital Marketing Apprentice...",
      numberOfPositions: 1,
      postedDate: new Date().toISOString(),
      closingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      startDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
      wage: {
        wageType: "ApprenticeshipMinimum",
        wageUnit: "Annually",
        workingWeekDescription: "Monday to Friday, 9am to 5pm"
      },
      hoursPerWeek: 37.5,
      expectedDuration: "18 months",
      address: {
        addressLine1: "Digital House",
        addressLine2: "Tech Park",
        postcode: "S1 1AA"
      },
      location: {
        lat: 53.3811,
        lon: -1.4701
      },
      employerName: "Digital Solutions Ltd",
      course: {
        larsCode: 123,
        title: "Digital Marketing",
        level: 3,
        route: "Digital"
      },
      apprenticeshipLevel: "Advanced",
      providerName: "Sheffield Digital Institute",
      isDisabilityConfident: true,
      vacancyUrl: "https://example.com/vacancy/123",
      vacancyReference: "VAC001",
      isNationalVacancy: false
    },
    {
      title: "Software Development Apprentice",
      description: "Exciting opportunity to start your career in software development...",
      numberOfPositions: 2,
      postedDate: new Date().toISOString(),
      closingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      startDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
      wage: {
        wageType: "Custom",
        wageAmount: 18000,
        wageUnit: "Annually",
        workingWeekDescription: "Monday to Friday, 9am to 5pm"
      },
      hoursPerWeek: 37.5,
      expectedDuration: "24 months",
      address: {
        addressLine1: "Tech Hub",
        addressLine2: "Innovation Centre",
        postcode: "S1 2BB"
      },
      location: {
        lat: 53.3811,
        lon: -1.4701
      },
      employerName: "Tech Innovations Ltd",
      course: {
        larsCode: 124,
        title: "Software Development Technician",
        level: 4,
        route: "Digital"
      },
      apprenticeshipLevel: "Higher",
      providerName: "Sheffield Digital Institute",
      isDisabilityConfident: true,
      vacancyUrl: "https://example.com/vacancy/124",
      vacancyReference: "VAC002",
      isNationalVacancy: false
    }
  ],
  total: 2,
  totalFiltered: 2,
  totalPages: 1
}; 