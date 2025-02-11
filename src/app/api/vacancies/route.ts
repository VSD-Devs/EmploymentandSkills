import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';
import type { VacancySort } from '@/services/dfeApi';
import { fallbackVacancies } from '@/data/fallbackVacancies';

// Simple cache object that works well with Vercel's serverless functions
const cache: {
  [key: string]: {
    data: any;
    timestamp: number;
  };
} = {};

const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Helper function to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: Request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Handle OPTIONS request for CORS
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    // Log environment info
    console.log('Environment:', {
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
      hasApiKey: !!process.env.DFE_API_KEY,
      apiKeyLength: process.env.DFE_API_KEY?.length,
    });

    // Check if API key is available
    if (!process.env.DFE_API_KEY) {
      console.warn('DFE_API_KEY is not set, using fallback data');
      return NextResponse.json(fallbackVacancies, { headers });
    }

    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');
    const sort = searchParams.get('sort') as VacancySort || 'AgeDesc';

    // Log the incoming request details
    console.log('Incoming vacancies request:', {
      url: request.url,
      postcode,
      sort,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
    });

    const cacheKey = `${postcode || 'default'}-${sort}`;
    const now = Date.now();

    // Check cache first
    if (cache[cacheKey] && (now - cache[cacheKey].timestamp) < CACHE_DURATION) {
      console.log('Returning cached data for key:', cacheKey);
      return NextResponse.json(cache[cacheKey].data, { headers });
    }

    // Base params
    const params: any = {
      pageSize: 100,
      postedInLastNumberOfDays: 30,
      Sort: sort,
    };

    if (postcode) {
      params.lat = 53.3811;
      params.lon = -1.4701;
      params.distanceInMiles = 50;
    } else {
      params.lat = 53.3811;
      params.lon = -1.4701;
      params.distanceInMiles = 20;
    }

    // Implement retry logic
    let lastError: any;
    for (let i = 0; i < MAX_RETRIES; i++) {
      try {
        console.log(`Attempt ${i + 1} to fetch vacancies`);
        const response = await dfeApi.getVacancies(params);
        
        console.log('Successfully fetched vacancies:', {
          totalVacancies: response.vacancies?.length,
          total: response.total,
          totalFiltered: response.totalFiltered,
        });

        cache[cacheKey] = {
          data: response,
          timestamp: now
        };

        return NextResponse.json(response, { headers });
      } catch (error: any) {
        lastError = error;
        console.warn(`Attempt ${i + 1} failed:`, {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });
        
        if (i < MAX_RETRIES - 1) {
          await delay(RETRY_DELAY * (i + 1));
        }
      }
    }

    console.error('All attempts to fetch vacancies failed:', {
      error: lastError.message,
      status: lastError.response?.status,
    });
    console.log('Falling back to static data');
    
    return NextResponse.json(fallbackVacancies, { headers });

  } catch (error: any) {
    console.error('Unhandled error in vacancies API route:', {
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(fallbackVacancies, { headers });
  }
} 