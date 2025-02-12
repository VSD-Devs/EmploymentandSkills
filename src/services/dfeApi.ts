import axios from 'axios';

// Get the appropriate API key based on environment
const getApiKey = () => {
  // Vercel Production
  if (process.env.VERCEL_ENV === 'production') {
    return process.env.VERCEL_DFE_API_KEY || process.env.DFE_API_KEY;
  }
  
  // Vercel Preview
  if (process.env.VERCEL_ENV === 'preview') {
    return process.env.PREVIEW_DFE_API_KEY || process.env.DFE_API_KEY;
  }
  
  // Vercel Development or Local
  return process.env.DFE_API_KEY || process.env.NEXT_PUBLIC_DFE_API_KEY;
};

const API_KEY = getApiKey();

if (!API_KEY) {
  console.error('DFE API Key is not set in environment variables');
}

const DFE_API_BASE_URL = 'https://api.apprenticeships.education.gov.uk/vacancies';

// Enhanced environment checking
const checkEnvironment = () => {
  const envInfo = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    IS_VERCEL: process.env.VERCEL === '1',
    HAS_DFE_KEY: !!process.env.DFE_API_KEY,
    HAS_VERCEL_DFE_KEY: !!process.env.VERCEL_DFE_API_KEY,
    HAS_PREVIEW_DFE_KEY: !!process.env.PREVIEW_DFE_API_KEY,
    HAS_PUBLIC_DFE_KEY: !!process.env.NEXT_PUBLIC_DFE_API_KEY,
    DFE_KEY_LENGTH: process.env.DFE_API_KEY?.length,
    VERCEL_DFE_KEY_LENGTH: process.env.VERCEL_DFE_API_KEY?.length,
    PREVIEW_DFE_KEY_LENGTH: process.env.PREVIEW_DFE_API_KEY?.length,
    PUBLIC_DFE_KEY_LENGTH: process.env.NEXT_PUBLIC_DFE_API_KEY?.length,
    VERCEL_URL: process.env.VERCEL_URL,
    VERCEL_REGION: process.env.VERCEL_REGION,
    IS_SERVER: typeof window === 'undefined',
    RUNTIME_ENV: process.env.RUNTIME_ENV || 'unknown',
    SELECTED_KEY_SOURCE: getApiKey() === process.env.VERCEL_DFE_API_KEY ? 'VERCEL' :
                        getApiKey() === process.env.PREVIEW_DFE_API_KEY ? 'PREVIEW' :
                        getApiKey() === process.env.DFE_API_KEY ? 'REGULAR' :
                        getApiKey() === process.env.NEXT_PUBLIC_DFE_API_KEY ? 'PUBLIC' : 'NONE'
  };

  console.log('🔍 Environment Check:', envInfo);
  return envInfo;
};

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
      // Check environment on each request
      const envInfo = checkEnvironment();

      if (!API_KEY) {
        const error = new Error('DFE API Key is not configured');
        console.error('🚨 API Key Missing:', {
          error: error.message,
          envInfo,
          stack: error.stack
        });
        throw error;
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

      console.log('📡 DFE API Request:', {
        url: requestConfig.url,
        headers: {
          ...requestConfig.headers,
          'Ocp-Apim-Subscription-Key': `${API_KEY.substring(0, 3)}...${API_KEY.substring(API_KEY.length - 3)}`
        },
        params: requestConfig.params,
        envInfo
      });

      const response = await axios.get(requestConfig.url, {
        headers: requestConfig.headers,
        params: requestConfig.params,
        validateStatus: null,
        timeout: 10000,
      });

      console.log('✅ DFE API Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        dataType: typeof response.data,
        isHTML: typeof response.data === 'string' && response.data.includes('<!DOCTYPE html>'),
        data: response.data ? 'Data present' : 'No data'
      });

      if (response.status !== 200) {
        const error = new Error(`DFE API Error: ${response.status}`);
        console.error('🚨 API Error:', {
          error: error.message,
          status: response.status,
          statusText: response.statusText,
          data: response.data,
          envInfo
        });
        throw error;
      }

      if (typeof response.data === 'string') {
        const error = new Error('Invalid response format');
        console.error('🚨 Invalid Response:', {
          error: error.message,
          responseType: typeof response.data,
          preview: response.data.substring(0, 100),
          envInfo
        });
        throw error;
      }

      return response.data;
    } catch (error) {
      console.error('🚨 Unhandled Error:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        envInfo: checkEnvironment()
      });
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