import Link from 'next/link';
import { sectorData } from '@/data/sectors';
import SectorPageContent from '@/components/SectorPageContent';

// List of all valid sector slugs
const validSlugs = [
  'healthcare',
  'digital-tech',
  'manufacturing',
  'construction',
  'logistics-transport',
  'creative-media',
  'business-finance',
  'education-training',
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

export default function SectorPage({ params }: { params: { category: string } }) {
  const sector = sectorData[params.category];

  if (!sector) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sector Not Found</h1>
          <p className="text-gray-600 mb-8">The sector you are looking for does not exist.</p>
          <Link 
            href="/pathways"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors"
          >
            View All Sectors
          </Link>
        </div>
      </div>
    );
  }

  return <SectorPageContent sector={sector} />;
}