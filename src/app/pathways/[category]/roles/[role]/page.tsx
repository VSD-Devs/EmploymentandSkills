import { notFound } from 'next/navigation';
import { sectorData } from '@/data/sectors';
import { roleData } from '@/data/roles';
import RoleDetails from '@/components/RoleDetails';
import { sectorToRoles } from '@/data/careerQuizData';

// Role to pathway mapping - matching the URL structure /pathways/[pathway]/roles/[role]
const roleToPathway: { [key: string]: string } = {
  'financial-advisor': 'business-finance',
  'data-analyst': 'digital-tech',
  'healthcare-assistant': 'health-care',
  'care-worker': 'health-care',
  'registered-nurse': 'health-care',
  'specialist-practitioner': 'health-care',
  'team-leader': 'business-finance',
  'support-worker': 'health-care',
  'senior-care-worker': 'health-care',
  'care-manager': 'health-care',
  'hospitality-manager': 'hospitality-tourism',
  'events-coordinator': 'hospitality-tourism'
};

// Generate static params for all roles in all sectors
export async function generateStaticParams() {
  const params: { category: string; role: string }[] = [];
  
  // Add roles from sectorToRoles mapping (this is the primary source)
  Object.entries(sectorToRoles).forEach(([category, roles]) => {
    roles.forEach(roleSlug => {
      if (roleData[roleSlug]) {
        // Ensure we don't add duplicate paths
        const existingPath = params.find(p => p.role === roleSlug);
        if (!existingPath) {
          params.push({
            category,
            role: roleSlug
          });
        }
      }
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