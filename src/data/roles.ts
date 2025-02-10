import { RoleData } from '@/types/role';
import { digitalRoles } from './digitalRoles';
import { businessRoles } from './businessRoles';
import { healthcareRoles } from './healthcareRoles';
import { creativeRoles } from './creativeRoles';
import { engineeringRoles } from './engineeringRoles';
import { hospitalityRoles } from './hospitalityRoles';

export const roleData: RoleData = {
  ...digitalRoles,
  ...businessRoles,
  ...healthcareRoles,
  ...creativeRoles,
  ...engineeringRoles,
  ...hospitalityRoles
}; 