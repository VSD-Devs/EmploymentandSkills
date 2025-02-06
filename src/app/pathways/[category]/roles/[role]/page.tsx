import { notFound } from 'next/navigation';
import { sectorData } from '@/data/sectors';
import { roleData } from '@/data/roles';
import RoleDetails from '@/components/RoleDetails';

// Generate static params for all roles in all sectors
export async function generateStaticParams() {
  const params: { category: string; role: string }[] = [];
  Object.entries(sectorData).forEach(([category, sector]) => {
    sector.careerProgression.levels.forEach(level => {
      level.roles.forEach(role => {
        const roleSlug = role.toLowerCase().replace(/\s+/g, '-');
        if (roleData[roleSlug]) {
          params.push({
            category,
            role: roleSlug
          });
        }
      });
    });
  });
  return params;
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function RolePage({ 
  params 
}: { 
  params: { category: string; role: string } 
}) {
  const sector = sectorData[params.category];
  const role = roleData[params.role];

  if (!sector || !role) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      <RoleDetails role={role} />
    </main>
  );
} 