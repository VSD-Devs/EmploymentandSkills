import { SectorData, Sector } from '@/types/sector';
import { Building2, Users, Banknote } from 'lucide-react';
import { deliveryClient, handleKenticoResponse } from './kentico-config';

// Kentico content type codenames
const CONTENT_TYPES = {
  SECTOR: 'sector',
  SECTOR_LIST: 'sector_list'
};

// This is just an example - replace with your actual CMS fetching logic
async function fetchFromCMS(endpoint: string) {
  if (process.env.USE_KENTICO === 'true') {
    // Use Kentico delivery client
    if (endpoint.startsWith('sectors/')) {
      const slug = endpoint.split('/')[1];
      return handleKenticoResponse(
        deliveryClient.items()
          .type(CONTENT_TYPES.SECTOR)
          .equalsFilter('elements.slug', slug)
          .toPromise()
      );
    } else if (endpoint === 'sectors') {
      return handleKenticoResponse(
        deliveryClient.items()
          .type(CONTENT_TYPES.SECTOR)
          .toPromise()
      );
    }
  }

  // Fallback to current implementation
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

  if (process.env.USE_KENTICO === 'true') {
    const elements = cmsData.elements;
    return {
      title: elements.title.value,
      description: elements.description.value,
      stats: elements.stats.value.map((stat: any) => ({
        icon: iconMap[stat.icon as keyof typeof iconMap],
        number: stat.number,
        label: stat.label
      })),
      careerProgression: {
        title: elements.careerProgressionTitle.value,
        levels: elements.careerProgressionLevels.value
      },
      skills: {
        general: elements.generalSkills.value,
        specialist: elements.specialistSkills.value
      },
      greenJobs: {
        title: elements.greenJobsTitle.value,
        description: elements.greenJobsDescription.value,
        roles: elements.greenJobsRoles.value
      }
    };
  }

  // Fallback to current implementation
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