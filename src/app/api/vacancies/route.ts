import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';
import type { VacancySort } from '@/services/dfeApi';
import { fallbackVacancies } from '@/data/fallbackVacancies';

// Update dynamic configuration for Vercel
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = 300 // revalidate every 5 minutes

// Simple cache object
const cache: {
  [key: string]: {
    data: any;
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
    params?: any;
    attempt?: number;
  };
  errors: Array<{
    type?: string;
    attempt?: number;
    message: string;
    status?: number;
    data?: any;
    stack?: string;
  }>;
  usedFallback: boolean;
  source?: string;
  success?: boolean;
}

const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Helper function to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

    const params: any = {
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

    for (let i = 0; i < MAX_RETRIES; i++) {
      try {
        debugInfo.apiCallInfo.attempt = i + 1;
        const response = await dfeApi.getVacancies(params);
        
        cache[cacheKey] = {
          data: response,
          timestamp: now
        };

        const successResponse = {
          ...response,
          _debug: { ...debugInfo, success: true }
        };
        return NextResponse.json(successResponse, { headers });
      } catch (error: any) {
        const errorInfo = {
          attempt: i + 1,
          message: error.message,
          status: error.response?.status,
          data: error.response?.data
        };
        debugInfo.errors.push(errorInfo);

        if (i === MAX_RETRIES - 1) {
          debugInfo.usedFallback = true;
          const fallbackResponse = {
            ...fallbackVacancies,
            _debug: debugInfo
          };
          return NextResponse.json(fallbackResponse, { headers });
        }
        await delay(RETRY_DELAY * (i + 1));
      }
    }

    debugInfo.usedFallback = true;
    const fallbackResponse = {
      ...fallbackVacancies,
      _debug: debugInfo
    };
    return NextResponse.json(fallbackResponse, { headers });
  } catch (error: any) {
    debugInfo.errors.push({
      type: 'RouteHandler',
      message: error.message,
      stack: error.stack
    });
    debugInfo.usedFallback = true;
    const errorResponse = {
      ...fallbackVacancies,
      _debug: debugInfo
    };
    return NextResponse.json(errorResponse, { headers });
  }
} 