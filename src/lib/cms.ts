import { SectorData, Sector } from '@/types/sector';
import { Building2, Users, Banknote } from 'lucide-react';

// This is just an example - replace with your actual CMS fetching logic
async function fetchFromCMS(endpoint: string) {
  // Example using fetch - replace with your CMS SDK
  const response = await fetch(`${process.env.CMS_API_URL}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_KEY}`
    }
  });
  return response.json();
}

// Convert CMS data to our Sector type
function mapCMSDataToSector(cmsData: any): Sector {
  // Map icon strings to actual icon components
  const iconMap = {
    'building': Building2,
    'users': Users,
    'banknote': Banknote
  };

  return {
    title: cmsData.title,
    description: cmsData.description,
    stats: cmsData.stats.map((stat: any) => ({
      icon: iconMap[stat.icon as keyof typeof iconMap],
      number: stat.number,
      label: stat.label
    })),
    careerProgression: {
      title: cmsData.careerProgression.title,
      levels: cmsData.careerProgression.levels
    },
    skills: {
      general: cmsData.skills.general,
      specialist: cmsData.skills.specialist
    },
    greenJobs: {
      title: cmsData.greenJobs.title,
      description: cmsData.greenJobs.description,
      roles: cmsData.greenJobs.roles
    }
  };
}

// Fetch all sectors
export async function getAllSectors(): Promise<SectorData> {
  const cmsData = await fetchFromCMS('sectors');
  
  // Convert to our format
  const sectors: SectorData = {};
  cmsData.forEach((item: any) => {
    sectors[item.slug] = mapCMSDataToSector(item);
  });
  
  return sectors;
}

// Fetch a single sector
export async function getSector(slug: string): Promise<Sector | null> {
  try {
    const cmsData = await fetchFromCMS(`sectors/${slug}`);
    return mapCMSDataToSector(cmsData);
  } catch (error) {
    console.error(`Error fetching sector ${slug}:`, error);
    return null;
  }
}

// Cache the results in production
let cachedSectors: SectorData | null = null;

export async function getCachedSectors(): Promise<SectorData> {
  if (process.env.NODE_ENV === 'production' && cachedSectors) {
    return cachedSectors;
  }
  
  cachedSectors = await getAllSectors();
  return cachedSectors;
} 