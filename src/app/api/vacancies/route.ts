import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';
import type { VacancySort, DfeVacancy } from '@/services/dfeApi';
import { fallbackVacancies } from '@/data/fallbackVacancies';

// Update dynamic configuration for Vercel
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = 300 // revalidate every 5 minutes

// Define API response type
interface ApiResponse {
  vacancies: DfeVacancy[];
  total: number;
  _debug?: DebugInfo;
}

// Simple cache object
const cache: {
  [key: string]: {
    data: ApiResponse;
    timestamp: number;
  };
} = {};

interface DebugInfo {
  environment: {
    NODE_ENV: string | undefined;
    VERCEL_ENV: string | undefined;
    HAS_DFE_KEY: boolean;
    DFE_KEY_LENGTH: number;
    DFE_KEY_PREVIEW: string;
  };
  requestInfo: {
    postcode?: string | null;
    sort?: string;
    url?: string;
  };
  apiCallInfo: {
    params?: VacancySearchParams;
    attempt?: number;
  };
  errors: Array<{
    type?: string;
    attempt?: number;
    message: string;
    status?: number;
    data?: unknown;
    stack?: string;
  }>;
  usedFallback: boolean;
  source?: string;
  success?: boolean;
}

interface VacancySearchParams {
  pageSize: number;
  postedInLastNumberOfDays: number;
  Sort: VacancySort;
  lat?: number;
  lon?: number;
  distanceInMiles?: number;
}

const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes
const _MAX_RETRIES = 3;
const _RETRY_DELAY = 1000; // 1 second
const _delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: Request) {
  // Create a debug info object that we'll send back with the response
  const debugInfo: DebugInfo = {
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      HAS_DFE_KEY: !!process.env.DFE_API_KEY,
      DFE_KEY_LENGTH: process.env.DFE_API_KEY ? process.env.DFE_API_KEY.length : 0,
      DFE_KEY_PREVIEW: process.env.DFE_API_KEY ? `${process.env.DFE_API_KEY.substring(0, 3)}...${process.env.DFE_API_KEY.substring(process.env.DFE_API_KEY.length - 3)}` : 'NOT_SET'
    },
    requestInfo: {},
    apiCallInfo: {},
    errors: [],
    usedFallback: false
  };

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  try {
    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');
    const sort = searchParams.get('sort') as VacancySort || 'AgeDesc';

    // Add request info to debug
    debugInfo.requestInfo = {
      postcode,
      sort,
      url: request.url
    };

    const cacheKey = `${postcode || 'default'}-${sort}`;
    const now = Date.now();

    if (cache[cacheKey] && (now - cache[cacheKey].timestamp) < CACHE_DURATION) {
      const response = {
        ...cache[cacheKey].data,
        _debug: { ...debugInfo, source: 'cache' }
      };
      return NextResponse.json(response, { headers });
    }

    const params: VacancySearchParams = {
      pageSize: 100,
      postedInLastNumberOfDays: 30,
      Sort: sort,
    };

    if (postcode) {
      params.lat = 53.3811;
      params.lon = -1.4701;
      params.distanceInMiles = 15;
    } else {
      params.lat = 53.3811;
      params.lon = -1.4701;
      params.distanceInMiles = 15;
    }

    debugInfo.apiCallInfo = { params };

    const response = await dfeApi.getVacancies(params);
    let vacancies = response.vacancies;

    // Handle salary sorting
    if (sort === 'SalaryDesc' || sort === 'SalaryAsc') {
      vacancies = vacancies.sort((a, b) => {
        const getSalaryAmount = (vacancy: DfeVacancy) => {
          const wage = vacancy.wage;
          if (!wage || !wage.wageAmount) return 0;
          
          // Convert all wages to annual amount
          let amount = wage.wageAmount;
          if (wage.wageUnit === 'Weekly') {
            amount *= 52;
          } else if (wage.wageUnit === 'Monthly') {
            amount *= 12;
          }
          return amount;
        };

        const salaryA = getSalaryAmount(a);
        const salaryB = getSalaryAmount(b);

        return sort === 'SalaryDesc' ? salaryB - salaryA : salaryA - salaryB;
      });
    }

    const result = {
      vacancies,
      total: response.total,
      _debug: debugInfo
    };

    // Cache the results
    cache[cacheKey] = {
      data: result,
      timestamp: now
    };

    return NextResponse.json(result, { headers });
  } catch (error) {
    interface ApiError extends Error {
      response?: {
        status?: number;
        data?: unknown;
      };
    }
    
    const typedError = error as ApiError;
    debugInfo.errors.push({
      type: 'RouteHandler',
      message: typedError.message,
      stack: typedError.stack
    });
    debugInfo.usedFallback = true;
    const errorResponse = {
      ...fallbackVacancies,
      _debug: debugInfo
    };
    return NextResponse.json(errorResponse, { headers });
  }
} 