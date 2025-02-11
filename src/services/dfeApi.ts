import axios from 'axios';

const DFE_API_KEY = process.env.DFE_API_KEY;
const DFE_API_BASE_URL = 'https://api.apprenticeships.education.gov.uk/vacancies';

export type VacancySort = 'AgeDesc' | 'AgeAsc' | 'DistanceDesc' | 'DistanceAsc' | 'ExpectedStartDateDesc' | 'ExpectedStartDateAsc';

export interface DfeVacancyResponse {
  vacancies: DfeVacancy[];
  total: number;
  totalFiltered: number;
  totalPages: number;
}

export interface DfeVacancy {
  title: string;
  description: string;
  numberOfPositions: number;
  postedDate: string;
  closingDate: string;
  startDate: string;
  wage: {
    wageType: 'ApprenticeshipMinimum' | 'NationalMinimum' | 'Custom' | 'CompetitiveSalary';
    wageAmount?: number;
    wageUnit: 'Unspecified' | 'Weekly' | 'Monthly' | 'Annually';
    wageAdditionalInformation?: string;
    workingWeekDescription?: string;
  };
  hoursPerWeek: number;
  expectedDuration: string;
  address: {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    addressLine4?: string;
    postcode: string;
  };
  location: {
    lat: number;
    lon: number;
  };
  distance?: number;
  employerName: string;
  employerWebsiteUrl?: string;
  course: {
    larsCode: number;
    title: string;
    level: number;
    route: string;
  };
  apprenticeshipLevel: string;
  providerName: string;
  isDisabilityConfident: boolean;
  vacancyUrl: string;
  vacancyReference: string;
  isNationalVacancy: boolean;
}

export interface GetVacanciesParams {
  pageNumber?: number;
  pageSize?: number;
  lat?: number;
  lon?: number;
  distanceInMiles?: number;
  postedInLastNumberOfDays?: number;
  standardLarsCode?: number[];
  routes?: string[];
  Sort?: VacancySort;
}

export const dfeApi = {
  async getVacancies(params: GetVacanciesParams): Promise<DfeVacancyResponse> {
    try {
      // Log the request configuration (without sensitive data)
      console.log('DFE API Request:', {
        url: `${DFE_API_BASE_URL}/vacancy`,
        params,
        hasApiKey: !!DFE_API_KEY,
      });

      const response = await axios.get(`${DFE_API_BASE_URL}/vacancy`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': DFE_API_KEY,
          'X-Version': '1',
        },
        params,
        validateStatus: (status) => status < 500, // Handle 4xx errors in the catch block
      });

      if (response.status !== 200) {
        throw new Error(`DFE API returned status ${response.status}: ${JSON.stringify(response.data)}`);
      }

      if (typeof response.data === 'string') {
        throw new Error(`Unexpected response format: ${response.data.substring(0, 100)}...`);
      }

      return response.data;
    } catch (error: any) {
      console.error('DFE API Error:', {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        url: error.config?.url,
      });
      throw error;
    }
  },

  async getVacancyByReference(reference: string) {
    try {
      const response = await axios.get(`${DFE_API_BASE_URL}/vacancy/${reference}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': DFE_API_KEY,
          'X-Version': '1',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching DfE vacancy:', error);
      throw error;
    }
  },

  async getCourses() {
    try {
      const response = await axios.get(`${DFE_API_BASE_URL}/referencedata/courses`, {
        headers: {
          'Ocp-Apim-Subscription-Key': DFE_API_KEY,
          'X-Version': '1',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching DfE courses:', error);
      throw error;
    }
  },
}; 