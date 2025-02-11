import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';
import type { VacancySort } from '@/services/dfeApi';

// Simple cache object that works well with Vercel's serverless functions
const cache: {
  [key: string]: {
    data: any;
    timestamp: number;
  };
} = {};

const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export async function GET(request: Request) {
  try {
    // Check if API key is available
    if (!process.env.DFE_API_KEY) {
      console.error('DFE_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'API configuration error - Missing API key' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');
    const sort = searchParams.get('sort') as VacancySort || 'AgeDesc';

    // Log the incoming request details
    console.log('Incoming vacancies request:', {
      postcode,
      sort,
      apiKeyPresent: !!process.env.DFE_API_KEY,
      apiKeyLength: process.env.DFE_API_KEY?.length,
    });

    const cacheKey = `${postcode || 'default'}-${sort}`;
    const now = Date.now();

    // Check cache first
    if (cache[cacheKey] && (now - cache[cacheKey].timestamp) < CACHE_DURATION) {
      return NextResponse.json(cache[cacheKey].data);
    }

    // Base params
    const params: any = {
      pageSize: 100,
      postedInLastNumberOfDays: 30,
      Sort: sort,
    };

    // If postcode is provided, use it for location-based search
    if (postcode) {
      // Using Sheffield coordinates for demo
      params.lat = 53.3811;
      params.lon = -1.4701;
      params.distanceInMiles = 50;
    } else {
      // Default South Yorkshire search
      params.lat = 53.3811;
      params.lon = -1.4701;
      params.distanceInMiles = 20;
    }

    const response = await dfeApi.getVacancies(params);

    // Update cache
    cache[cacheKey] = {
      data: response,
      timestamp: now
    };

    return NextResponse.json(response);
  } catch (error: any) {
    // Enhanced error logging
    const errorDetails = {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      isAxiosError: error.isAxiosError,
      config: error.config ? {
        url: error.config.url,
        method: error.config.method,
        params: error.config.params,
      } : undefined
    };

    console.error('Detailed error in vacancies API route:', errorDetails);

    // If we get HTML instead of JSON, return a more specific error
    if (error.response?.data && typeof error.response.data === 'string' && 
        error.response.data.includes('<!DOCTYPE html>')) {
      return NextResponse.json(
        { 
          error: 'Invalid API response',
          details: 'The DFE API returned an HTML error page instead of JSON. This usually indicates an authentication or configuration issue.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to fetch vacancies',
        details: errorDetails.message,
        status: errorDetails.status
      },
      { status: error.response?.status || 500 }
    );
  }
} 