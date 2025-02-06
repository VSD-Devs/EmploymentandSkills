import { MetadataRoute } from 'next'
import { sitemap as sitemapData } from '@/data/sitemap'

interface SitemapItem {
  title: string;
  path: string;
  description?: string;
  children?: SitemapItem[];
}

function flattenSitemapItems(items: SitemapItem[]): MetadataRoute.Sitemap {
  return items.reduce((acc: MetadataRoute.Sitemap, item) => {
    const flatItem = {
      url: `https://employmentandskills.vercel.app${item.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.7
    }
    
    acc.push(flatItem)
    
    if (item.children) {
      acc.push(...flattenSitemapItems(item.children))
    }
    
    return acc
  }, [])
}

export default function sitemap(): MetadataRoute.Sitemap {
  return flattenSitemapItems(sitemapData)
} 