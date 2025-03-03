import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';

// Update dynamic configuration for Vercel
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = 300 // revalidate every 5 minutes

// Simple cache object
const cache: {
  [key: string]: {
    data: Record<string, unknown>;
    timestamp: number;
  };
} = {};

const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export async function GET(
  request: Request,
  { params }: { params: { reference: string } }
) {
  const { reference } = params;
  
  if (!reference) {
    return NextResponse.json(
      { error: 'Vacancy reference is required' },
      { status: 400 }
    );
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  try {
    // Check cache first
    const cacheKey = `vacancy-${reference}`;
    const now = Date.now();

    if (cache[cacheKey] && (now - cache[cacheKey].timestamp) < CACHE_DURATION) {
      return NextResponse.json(cache[cacheKey].data, { headers });
    }

    // Fetch the vacancy details
    const vacancyDetails = await dfeApi.getVacancyByReference(reference);
    
    // Cache the result
    cache[cacheKey] = {
      data: vacancyDetails,
      timestamp: now
    };

    return NextResponse.json(vacancyDetails, { headers });
  } catch (error) {
    console.warn('Error fetching vacancy details:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch vacancy details', message: (error as Error).message },
      { status: 500, headers }
    );
  }
} 