import Link from 'next/link';
import { sectorData } from '@/data/sectors';
import { getAllSectors, getSector } from '@/lib/cms';
import SectorPageContent from '@/components/SectorPageContent';

// List of all valid sector slugs
const validSlugs = [
  'healthcare',
  'digital-tech',
  'manufacturing',
  'construction',
  'logistics-transport',
  'creative-media',
  'hospitality-tourism'
];

// Generate static params for all sectors
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    category: slug,
  }));
}

// For static site generation and better SEO
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default async function SectorPage({ params }: { params: { category: string } }) {
  // In production, this would fetch from CMS
  // const sector = await getSector(params.category);
  const sector = sectorData[params.category as keyof typeof sectorData];
  
  if (!sector || !validSlugs.includes(params.category)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">Sector not found</h1>
          <Link href="/pathways" className="text-emerald-600 hover:text-emerald-700">
            Return to sectors →
          </Link>
        </div>
      </div>
    );
  }

  return <SectorPageContent sector={sector} />;
}