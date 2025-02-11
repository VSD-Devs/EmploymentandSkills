import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';
import type { VacancySort } from '@/services/dfeApi';
import { fallbackVacancies } from '@/data/fallbackVacancies';

// Simple cache object
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
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  try {
    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');
    const sort = searchParams.get('sort') as VacancySort || 'AgeDesc';

    const cacheKey = `${postcode || 'default'}-${sort}`;
    const now = Date.now();

    // Check cache first
    if (cache[cacheKey] && (now - cache[cacheKey].timestamp) < CACHE_DURATION) {
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
    for (let i = 0; i < MAX_RETRIES; i++) {
      try {
        const response = await dfeApi.getVacancies(params);
        
        // Cache the successful response
        cache[cacheKey] = {
          data: response,
          timestamp: now
        };

        return NextResponse.json(response, { headers });
      } catch (error) {
        if (i === MAX_RETRIES - 1) {
          // If all retries failed, return fallback data
          return NextResponse.json(fallbackVacancies, { headers });
        }
        await delay(RETRY_DELAY * (i + 1));
      }
    }

    return NextResponse.json(fallbackVacancies, { headers });
  } catch (error) {
    return NextResponse.json(fallbackVacancies, { headers });
  }
} 