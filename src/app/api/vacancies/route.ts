import { NextResponse } from 'next/server';
import { dfeApi } from '@/services/dfeApi';
import type { VacancySort } from '@/services/dfeApi';

// In-memory cache for development. In production, use a proper database
let vacanciesCache: any = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');
    const sort = searchParams.get('sort') as VacancySort || 'AgeDesc';

    const currentTime = Date.now();
    const cacheKey = `${postcode || 'default'}-${sort}`;

    // Check if we need to refresh the cache
    if (!vacanciesCache?.[cacheKey] || currentTime - lastFetchTime > CACHE_DURATION) {
      // Base params
      const params: any = {
        pageSize: 100,
        postedInLastNumberOfDays: 30,
        Sort: sort,
      };

      // If postcode is provided, use it for location-based search
      if (postcode) {
        // In a real app, you'd want to use a postcode lookup service to get lat/lon
        // For now, we'll keep using Sheffield coordinates
        params.lat = 53.3811;
        params.lon = -1.4701;
        params.distanceInMiles = 50; // Increased radius when searching by postcode
      } else {
        // Default South Yorkshire search
        params.lat = 53.3811;
        params.lon = -1.4701;
        params.distanceInMiles = 20;
      }

      const response = await dfeApi.getVacancies(params);

      if (!vacanciesCache) vacanciesCache = {};
      vacanciesCache[cacheKey] = response;
      lastFetchTime = currentTime;
    }

    return NextResponse.json(vacanciesCache[cacheKey]);
  } catch (error) {
    console.error('Error in vacancies API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vacancies' },
      { status: 500 }
    );
  }
} 