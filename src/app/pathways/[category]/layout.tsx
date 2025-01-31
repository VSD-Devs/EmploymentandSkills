import { Metadata } from 'next';

// Add metadata generation
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} Careers - South Yorkshire Pathways`,
    description: `Explore career opportunities and training pathways in ${params.category} across South Yorkshire.`,
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 