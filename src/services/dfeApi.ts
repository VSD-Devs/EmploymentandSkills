import axios from 'axios';

// For server-side API calls
const DFE_API_KEY = process.env.DFE_API_KEY;
// For client-side API calls (if needed)
const PUBLIC_DFE_API_KEY = process.env.NEXT_PUBLIC_DFE_API_KEY;

// Use the appropriate key based on environment
const API_KEY = DFE_API_KEY || PUBLIC_DFE_API_KEY;

if (!API_KEY) {
  console.error('DFE API Key is not set in environment variables');
}

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
      if (!API_KEY) {
        throw new Error('DFE API Key is not configured');
      }

      // Debug log the full request details
      const requestConfig = {
        url: `${DFE_API_BASE_URL}/vacancy`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': API_KEY,
          'X-Version': '1',
        },
        params,
      };

      console.log('DFE API Request Configuration:', {
        url: requestConfig.url,
        headers: {
          ...requestConfig.headers,
          'Ocp-Apim-Subscription-Key': API_KEY ? `${API_KEY.substring(0, 3)}...${API_KEY.substring(API_KEY.length - 3)}` : 'NOT_SET'
        },
        params: requestConfig.params,
        nodeEnv: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV,
        isServer: typeof window === 'undefined'
      });

      const response = await axios.get(requestConfig.url, {
        headers: requestConfig.headers,
        params: requestConfig.params,
        validateStatus: null, // Allow any status code to pass through to our error handling
        timeout: 10000, // 10 second timeout
      });

      // Log response status and headers
      console.log('DFE API Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        dataType: typeof response.data,
        isHTML: typeof response.data === 'string' && response.data.includes('<!DOCTYPE html>'),
      });

      if (response.status !== 200) {
        throw new Error(`DFE API returned status ${response.status}: ${JSON.stringify(response.data)}`);
      }

      if (typeof response.data === 'string') {
        if (response.data.includes('<!DOCTYPE html>')) {
          throw new Error('DFE API returned HTML instead of JSON. Possible authentication issue.');
        }
        throw new Error(`Unexpected response format: ${response.data.substring(0, 100)}...`);
      }

      // Validate response structure
      if (!response.data || !Array.isArray(response.data.vacancies)) {
        throw new Error(`Invalid response structure: ${JSON.stringify(response.data)}`);
      }

      return response.data;
    } catch (error: any) {
      // Enhanced error logging
      const errorDetails = {
        message: error.message,
        name: error.name,
        status: error.response?.status,
        statusText: error.response?.statusText,
        responseHeaders: error.response?.headers,
        responseType: error.response?.data ? typeof error.response.data : undefined,
        responsePreview: error.response?.data ? 
          (typeof error.response.data === 'string' ? 
            error.response.data.substring(0, 200) : 
            JSON.stringify(error.response.data).substring(0, 200)
          ) : undefined,
        config: error.config ? {
          url: error.config.url,
          method: error.config.method,
          headers: {
            ...error.config.headers,
            'Ocp-Apim-Subscription-Key': 'REDACTED'
          },
          params: error.config.params,
        } : undefined,
        stack: error.stack
      };

      console.error('Detailed DFE API Error:', errorDetails);
      throw error;
    }
  },

  async getVacancyByReference(reference: string) {
    try {
      if (!API_KEY) {
        throw new Error('DFE API Key is not configured');
      }

      const response = await axios.get(`${DFE_API_BASE_URL}/vacancy/${reference}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY,
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
      if (!API_KEY) {
        throw new Error('DFE API Key is not configured');
      }

      const response = await axios.get(`${DFE_API_BASE_URL}/referencedata/courses`, {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY,
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