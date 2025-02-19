import { courses as coursesData } from '@/data/courses'

export function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  fundingModel: string;
  slug: string;
  category: string;
  level: string;
  type: string;
  description: string;
  location: string;
  duration: string;
  startDate: string;
  deliveryMethod: string;
  fundingInfo: string;
  whatYoullLearn: string[];
  careerOpportunities: string[];
  qualifications?: string[];
  sectors?: string[];
  pathways?: string[];
  fundingType?: string;
}

// Helper function to determine course category based on title
function getCourseCategory(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('digital') || titleLower.includes('it') || titleLower.includes('cyber') || titleLower.includes('programming') || titleLower.includes('software') || titleLower.includes('website')) {
    return 'Digital & IT';
  }
  if (titleLower.includes('health') || titleLower.includes('care') || titleLower.includes('mental') || titleLower.includes('counselling')) {
    return 'Health & Social Care';
  }
  if (titleLower.includes('business') || titleLower.includes('management') || titleLower.includes('leadership') || titleLower.includes('administration')) {
    return 'Business & Management';
  }
  if (titleLower.includes('construction') || titleLower.includes('engineering') || titleLower.includes('electrical') || titleLower.includes('plumbing') || titleLower.includes('welding')) {
    return 'Construction & Engineering';
  }
  if (titleLower.includes('english') || titleLower.includes('maths') || titleLower.includes('mathematics') || titleLower.includes('esol')) {
    return 'Essential Skills';
  }
  if (titleLower.includes('employability') || titleLower.includes('career') || titleLower.includes('work')) {
    return 'Employability';
  }
  
  return 'Other Courses';
}

// Helper function to determine course level based on title
function getCourseLevel(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('level 1')) return 'Level 1';
  if (titleLower.includes('level 2')) return 'Level 2';
  if (titleLower.includes('level 3')) return 'Level 3';
  if (titleLower.includes('entry')) return 'Entry Level';
  if (titleLower.includes('diploma')) return 'Diploma';
  if (titleLower.includes('certificate')) return 'Certificate';
  if (titleLower.includes('award')) return 'Award';
  
  return 'Other';
}

export interface PaginatedCourses {
  courses: Course[];
  totalPages: number;
  currentPage: number;
  totalCourses: number;
}

export interface CourseFilters {
  provider?: string;
  category?: string;
  level?: string;
  search?: string;
}

// Add pathway-related helper functions
export interface Pathway {
  title: string;
  slug: string;
  description: string;
  roles: Role[];
}

export interface Role {
  title: string;
  level: string;
  salary?: string;
  description: string;
  requiredSkills: string[];
  recommendedCourses?: string[]; // Array of course slugs
}

export function getPathways(): Pathway[] {
  return [
    {
      title: 'Digital & Technology',
      slug: 'digital-tech',
      description: 'Career paths in software development, IT infrastructure, cybersecurity, and digital services',
      roles: [
        {
          title: 'Software Developer',
          level: 'Entry Level to Advanced',
          salary: '£25,000 - £65,000',
          description: 'Design and build software applications',
          requiredSkills: ['Programming', 'Problem Solving', 'Web Development'],
          recommendedCourses: []
        },
        {
          title: 'Digital Marketing Specialist',
          level: 'Entry Level to Intermediate',
          salary: '£22,000 - £45,000',
          description: 'Manage digital marketing campaigns and social media',
          requiredSkills: ['Social Media', 'Content Creation', 'Analytics'],
          recommendedCourses: []
        },
        {
          title: 'Cybersecurity Analyst',
          level: 'Entry Level to Advanced',
          salary: '£30,000 - £70,000',
          description: 'Protect organisations from cyber threats and security breaches',
          requiredSkills: ['Network Security', 'Risk Assessment', 'Security Tools'],
          recommendedCourses: []
        },
        {
          title: 'IT Support Specialist',
          level: 'Entry Level to Intermediate',
          salary: '£20,000 - £35,000',
          description: 'Provide technical support and maintain IT systems',
          requiredSkills: ['Technical Support', 'Problem Solving', 'Customer Service'],
          recommendedCourses: []
        },
        {
          title: 'Data Analyst',
          level: 'Entry Level to Advanced',
          salary: '£25,000 - £55,000',
          description: 'Analyse data and create insights for business decision-making',
          requiredSkills: ['Data Analysis', 'Statistics', 'Data Visualization'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Healthcare & Social Care',
      slug: 'healthcare',
      description: 'Careers in health services, social care, and mental health support',
      roles: [
        {
          title: 'Healthcare Assistant',
          level: 'Entry Level',
          salary: '£18,000 - £24,000',
          description: 'Support healthcare professionals in patient care',
          requiredSkills: ['Patient Care', 'Communication', 'Health & Safety'],
          recommendedCourses: []
        },
        {
          title: 'Social Care Worker',
          level: 'Entry Level to Intermediate',
          salary: '£20,000 - £28,000',
          description: 'Provide care and support to vulnerable individuals',
          requiredSkills: ['Safeguarding', 'Care Planning', 'Communication'],
          recommendedCourses: []
        },
        {
          title: 'Mental Health Support Worker',
          level: 'Entry Level to Intermediate',
          salary: '£21,000 - £30,000',
          description: 'Support individuals with mental health conditions',
          requiredSkills: ['Mental Health Awareness', 'Counselling Skills', 'Risk Assessment'],
          recommendedCourses: []
        },
        {
          title: 'Adult Care Worker',
          level: 'Entry Level',
          salary: '£18,000 - £25,000',
          description: 'Provide care and support to adults with various needs',
          requiredSkills: ['Personal Care', 'Empathy', 'Health & Safety'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Business & Management',
      slug: 'business',
      description: 'Career paths in business administration, leadership, and professional services',
      roles: [
        {
          title: 'Business Administrator',
          level: 'Entry Level to Intermediate',
          salary: '£18,000 - £28,000',
          description: 'Manage office procedures and administrative tasks',
          requiredSkills: ['Organisation', 'Communication', 'IT Skills'],
          recommendedCourses: []
        },
        {
          title: 'Project Manager',
          level: 'Intermediate to Advanced',
          salary: '£30,000 - £60,000',
          description: 'Plan and deliver projects within organisations',
          requiredSkills: ['Project Planning', 'Leadership', 'Stakeholder Management'],
          recommendedCourses: []
        },
        {
          title: 'Team Leader',
          level: 'Entry Level to Intermediate',
          salary: '£25,000 - £35,000',
          description: 'Lead and manage teams to achieve objectives',
          requiredSkills: ['Leadership', 'Communication', 'Problem Solving'],
          recommendedCourses: []
        },
        {
          title: 'HR Assistant',
          level: 'Entry Level to Intermediate',
          salary: '£20,000 - £30,000',
          description: 'Support human resources functions and employee relations',
          requiredSkills: ['HR Policies', 'Recruitment', 'Employee Relations'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Construction & Engineering',
      slug: 'construction',
      description: 'Careers in building, engineering, and technical trades',
      roles: [
        {
          title: 'Construction Worker',
          level: 'Entry Level',
          salary: '£18,000 - £30,000',
          description: 'Work on construction sites and building projects',
          requiredSkills: ['Health & Safety', 'Physical Fitness', 'Teamwork'],
          recommendedCourses: []
        },
        {
          title: 'Electrical Engineer',
          level: 'Intermediate to Advanced',
          salary: '£28,000 - £50,000',
          description: 'Design and maintain electrical systems',
          requiredSkills: ['Electrical Systems', 'Problem Solving', 'Technical Drawing'],
          recommendedCourses: []
        },
        {
          title: 'Maintenance Technician',
          level: 'Entry Level to Intermediate',
          salary: '£22,000 - £35,000',
          description: 'Maintain and repair equipment and facilities',
          requiredSkills: ['Mechanical Skills', 'Troubleshooting', 'Preventive Maintenance'],
          recommendedCourses: []
        },
        {
          title: 'Civil Engineering Technician',
          level: 'Entry Level to Intermediate',
          salary: '£22,000 - £35,000',
          description: 'Support civil engineering projects and construction works',
          requiredSkills: ['Technical Drawing', 'Mathematics', 'Construction Methods'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Essential Skills',
      slug: 'essential',
      description: 'Fundamental skills for work and life',
      roles: [
        {
          title: 'Administrative Assistant',
          level: 'Entry Level',
          salary: '£18,000 - £25,000',
          description: 'Provide administrative support in office environments',
          requiredSkills: ['Organisation', 'Communication', 'Computer Skills'],
          recommendedCourses: []
        },
        {
          title: 'Customer Service Representative',
          level: 'Entry Level',
          salary: '£18,000 - £24,000',
          description: 'Handle customer inquiries and provide service',
          requiredSkills: ['Communication', 'Problem Solving', 'Customer Service'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Creative & Digital Media',
      slug: 'creative-media',
      description: 'Careers in digital content creation, design, and media production',
      roles: [
        {
          title: 'Graphic Designer',
          level: 'Entry Level to Advanced',
          salary: '£20,000 - £45,000',
          description: 'Create visual content for digital and print media',
          requiredSkills: ['Design Software', 'Creativity', 'Visual Communication'],
          recommendedCourses: []
        },
        {
          title: 'Content Creator',
          level: 'Entry Level to Intermediate',
          salary: '£18,000 - £35,000',
          description: 'Produce engaging content for various platforms',
          requiredSkills: ['Content Writing', 'Social Media', 'Video Production'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Hospitality & Tourism',
      slug: 'hospitality',
      description: 'Careers in hospitality services, tourism, and customer experience',
      roles: [
        {
          title: 'Hospitality Manager',
          level: 'Entry Level to Advanced',
          salary: '£22,000 - £40,000',
          description: 'Manage hospitality operations and customer service',
          requiredSkills: ['Customer Service', 'Team Management', 'Operations'],
          recommendedCourses: []
        },
        {
          title: 'Events Coordinator',
          level: 'Entry Level to Intermediate',
          salary: '£20,000 - £35,000',
          description: 'Plan and coordinate events and conferences',
          requiredSkills: ['Event Planning', 'Organisation', 'Customer Relations'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Manufacturing & Production',
      slug: 'manufacturing',
      description: 'Careers in manufacturing, production operations, and industrial processes',
      roles: [
        // Entry Level Roles
        {
          title: 'Production Operative',
          level: 'Entry Level',
          salary: '£18,000 - £25,000',
          description: 'Operate and monitor manufacturing equipment and production lines',
          requiredSkills: ['Machine Operation', 'Health & Safety', 'Quality Control'],
          recommendedCourses: []
        },
        {
          title: 'Assembly Line Worker',
          level: 'Entry Level',
          salary: '£18,000 - £24,000',
          description: 'Assemble products and components on production lines',
          requiredSkills: ['Manual Dexterity', 'Attention to Detail', 'Teamwork'],
          recommendedCourses: []
        },
        {
          title: 'Warehouse Production Operative',
          level: 'Entry Level',
          salary: '£18,000 - £24,000',
          description: 'Handle materials and products in manufacturing environments',
          requiredSkills: ['Material Handling', 'Organisation', 'Physical Fitness'],
          recommendedCourses: []
        },
        {
          title: 'Packing Operative',
          level: 'Entry Level',
          salary: '£18,000 - £23,000',
          description: 'Pack and prepare products for shipment',
          requiredSkills: ['Attention to Detail', 'Physical Stamina', 'Quality Checking'],
          recommendedCourses: []
        },
        // Intermediate Level Roles
        {
          title: 'Quality Control Inspector',
          level: 'Intermediate',
          salary: '£22,000 - £32,000',
          description: 'Ensure products meet quality standards and specifications',
          requiredSkills: ['Quality Assurance', 'Documentation', 'Problem Solving'],
          recommendedCourses: []
        },
        {
          title: 'Production Team Leader',
          level: 'Intermediate',
          salary: '£25,000 - £35,000',
          description: 'Lead and coordinate production teams',
          requiredSkills: ['Leadership', 'Communication', 'Process Improvement'],
          recommendedCourses: []
        },
        {
          title: 'Maintenance Technician',
          level: 'Intermediate',
          salary: '£24,000 - £35,000',
          description: 'Maintain and repair manufacturing equipment',
          requiredSkills: ['Technical Skills', 'Troubleshooting', 'Preventive Maintenance'],
          recommendedCourses: []
        },
        {
          title: 'CNC Machine Operator',
          level: 'Intermediate',
          salary: '£23,000 - £32,000',
          description: 'Operate computer-controlled manufacturing equipment',
          requiredSkills: ['CNC Programming', 'Technical Drawing', 'Precision Work'],
          recommendedCourses: []
        },
        // Advanced Level Roles
        {
          title: 'Manufacturing Engineer',
          level: 'Advanced',
          salary: '£35,000 - £50,000',
          description: 'Design and improve manufacturing processes',
          requiredSkills: ['Process Engineering', 'Project Management', 'Technical Design'],
          recommendedCourses: []
        },
        {
          title: 'Production Manager',
          level: 'Advanced',
          salary: '£40,000 - £60,000',
          description: 'Manage overall production operations and strategy',
          requiredSkills: ['Operations Management', 'Strategic Planning', 'Team Leadership'],
          recommendedCourses: []
        },
        {
          title: 'Quality Assurance Manager',
          level: 'Advanced',
          salary: '£38,000 - £55,000',
          description: 'Oversee quality control systems and improvement initiatives',
          requiredSkills: ['Quality Management Systems', 'Regulatory Compliance', 'Process Improvement'],
          recommendedCourses: []
        },
        {
          title: 'Continuous Improvement Manager',
          level: 'Advanced',
          salary: '£35,000 - £50,000',
          description: 'Lead process improvement and efficiency initiatives',
          requiredSkills: ['Lean Manufacturing', 'Six Sigma', 'Change Management'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Transport & Logistics',
      slug: 'transport-logistics',
      description: 'Careers in transportation, warehousing, and supply chain operations',
      roles: [
        {
          title: 'Warehouse Operative',
          level: 'Entry Level',
          salary: '£18,000 - £24,000',
          description: 'Manage warehouse operations and stock control',
          requiredSkills: ['Stock Management', 'Health & Safety', 'Physical Fitness'],
          recommendedCourses: []
        },
        {
          title: 'Logistics Coordinator',
          level: 'Entry Level to Intermediate',
          salary: '£22,000 - £35,000',
          description: 'Coordinate transportation and delivery operations',
          requiredSkills: ['Organisation', 'Communication', 'Problem Solving'],
          recommendedCourses: []
        },
        {
          title: 'Supply Chain Assistant',
          level: 'Entry Level to Intermediate',
          salary: '£20,000 - £30,000',
          description: 'Support supply chain operations and inventory management',
          requiredSkills: ['Inventory Management', 'Data Entry', 'Coordination'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Environmental & Green Skills',
      slug: 'environmental',
      description: 'Careers in sustainability, renewable energy, and environmental protection',
      roles: [
        {
          title: 'Renewable Energy Technician',
          level: 'Entry Level to Advanced',
          salary: '£25,000 - £45,000',
          description: 'Install and maintain renewable energy systems',
          requiredSkills: ['Technical Skills', 'Health & Safety', 'Problem Solving'],
          recommendedCourses: []
        },
        {
          title: 'Sustainability Coordinator',
          level: 'Entry Level to Intermediate',
          salary: '£22,000 - £35,000',
          description: 'Support environmental initiatives and sustainability programmes',
          requiredSkills: ['Environmental Awareness', 'Project Management', 'Communication'],
          recommendedCourses: []
        },
        {
          title: 'Waste Management Operative',
          level: 'Entry Level',
          salary: '£18,000 - £28,000',
          description: 'Manage waste collection and recycling operations',
          requiredSkills: ['Health & Safety', 'Environmental Regulations', 'Physical Fitness'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Education & Training',
      slug: 'education',
      description: 'Careers in teaching, training, and educational support',
      roles: [
        {
          title: 'Teaching Assistant',
          level: 'Entry Level to Intermediate',
          salary: '£18,000 - £25,000',
          description: 'Support teachers and help students in educational settings',
          requiredSkills: ['Communication', 'Patience', 'Behaviour Management'],
          recommendedCourses: []
        },
        {
          title: 'Adult Education Tutor',
          level: 'Intermediate to Advanced',
          salary: '£22,000 - £35,000',
          description: 'Teach adult learners in various subjects',
          requiredSkills: ['Teaching', 'Subject Knowledge', 'Assessment'],
          recommendedCourses: []
        },
        {
          title: 'Learning Support Worker',
          level: 'Entry Level',
          salary: '£18,000 - £24,000',
          description: 'Support learners with additional needs',
          requiredSkills: ['Special Needs Support', 'Patience', 'Communication'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Retail & Customer Service',
      slug: 'retail',
      description: 'Careers in retail operations and customer service',
      roles: [
        {
          title: 'Retail Team Leader',
          level: 'Entry Level to Intermediate',
          salary: '£20,000 - £28,000',
          description: 'Lead retail teams and manage store operations',
          requiredSkills: ['Leadership', 'Customer Service', 'Stock Management'],
          recommendedCourses: []
        },
        {
          title: 'Visual Merchandiser',
          level: 'Entry Level to Intermediate',
          salary: '£18,000 - £28,000',
          description: 'Design and create retail displays',
          requiredSkills: ['Creativity', 'Visual Design', 'Organisation'],
          recommendedCourses: []
        },
        {
          title: 'Customer Service Manager',
          level: 'Intermediate',
          salary: '£25,000 - £35,000',
          description: 'Manage customer service teams and operations',
          requiredSkills: ['Leadership', 'Problem Solving', 'Communication'],
          recommendedCourses: []
        }
      ]
    },
    {
      title: 'Financial Services',
      slug: 'financial',
      description: 'Careers in banking, insurance, and financial operations',
      roles: [
        {
          title: 'Financial Services Administrator',
          level: 'Entry Level',
          salary: '£20,000 - £28,000',
          description: 'Process financial transactions and maintain records',
          requiredSkills: ['Attention to Detail', 'Numeracy', 'Data Entry'],
          recommendedCourses: []
        },
        {
          title: 'Insurance Claims Handler',
          level: 'Entry Level to Intermediate',
          salary: '£22,000 - £30,000',
          description: 'Process and assess insurance claims',
          requiredSkills: ['Customer Service', 'Analysis', 'Communication'],
          recommendedCourses: []
        },
        {
          title: 'Banking Customer Service',
          level: 'Entry Level',
          salary: '£19,000 - £25,000',
          description: 'Provide customer service in banking environments',
          requiredSkills: ['Customer Service', 'Financial Knowledge', 'Communication'],
          recommendedCourses: []
        }
      ]
    }
  ];
}

// Define keyword mappings for better matching
const pathwayKeywords: { [key: string]: string[] } = {
  'digital-tech': ['digital', 'it', 'computer', 'software', 'web', 'cyber', 'programming', 'technology', 'coding', 'security', 'network', 'data', 'analytics', 'database', 'cloud'],
  'healthcare': ['health', 'care', 'mental', 'social', 'counselling', 'medical', 'wellbeing', 'therapy', 'support work', 'nursing', 'clinical', 'patient'],
  'business': ['business', 'management', 'administration', 'leadership', 'project', 'office', 'professional', 'enterprise', 'hr', 'finance', 'accounting', 'marketing'],
  'construction': ['construction', 'engineering', 'electrical', 'building', 'maintenance', 'mechanical', 'plumbing', 'welding', 'civil', 'surveying', 'architecture'],
  'essential': ['english', 'maths', 'mathematics', 'esol', 'numeracy', 'literacy', 'communication', 'essential', 'basic', 'life skills', 'employability'],
  'creative-media': ['creative', 'design', 'media', 'digital media', 'graphics', 'video', 'animation', 'photography', 'content', 'social media'],
  'hospitality': ['hospitality', 'tourism', 'hotel', 'catering', 'events', 'customer service', 'food', 'beverage', 'restaurant', 'travel'],
  'manufacturing': ['manufacturing', 'production', 'operator', 'assembly', 'factory', 'quality control', 'machine', 'industrial', 'technician'],
  'transport-logistics': ['transport', 'logistics', 'warehouse', 'supply chain', 'stock', 'inventory', 'distribution', 'shipping', 'freight'],
  'environmental': ['environmental', 'green', 'sustainability', 'renewable', 'energy', 'recycling', 'waste', 'climate', 'eco'],
  'education': ['education', 'teaching', 'training', 'learning', 'tutor', 'classroom', 'school', 'assessment', 'sen'],
  'retail': ['retail', 'shop', 'store', 'sales', 'customer service', 'merchandising', 'stock', 'till', 'pos'],
  'financial': ['finance', 'banking', 'insurance', 'mortgage', 'credit', 'financial services', 'accounts', 'banking']
};

export function matchCourseToPathways(course: Course): string[] {
  const matchedPathways: string[] = [];
  
  // Convert course details to lowercase for matching
  const courseTitle = course.title.toLowerCase();
  const courseCategory = course.category.toLowerCase();
  
  // Check each pathway's keywords for matches
  Object.entries(pathwayKeywords).forEach(([pathway, keywords]) => {
    if (
      keywords.some(keyword => 
        courseTitle.includes(keyword) || 
        courseCategory.includes(keyword)
      )
    ) {
      matchedPathways.push(pathway);
    }
  });
  
  return matchedPathways;
}

// Update the getCourses function to include pathway matching
export async function getCourses(): Promise<Course[]> {
  try {
    const response = await fetch('/images/ASF provision.csv');
    const csvText = await response.text();
    
    // Skip header row and parse CSV
    const rows = csvText.split('\n').slice(1);
    
    const courses = rows.map((row, index) => {
      const [provider, _, title, fundingModel] = row.split(',');
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      // Map CSV data to Course interface
      const course: Course = {
        id: `course-${index + 1}`,
        title: title.trim(),
        provider: provider.trim(),
        fundingModel: fundingModel.trim(),
        type: getCourseCategory(title),
        category: getCourseCategory(title),
        level: getCourseLevel(title),
        description: `${title.trim()} offered by ${provider.trim()}`,
        location: 'South Yorkshire',
        duration: '12 weeks',
        startDate: 'Flexible start dates',
        deliveryMethod: 'Flexible',
        fundingInfo: 'Fully funded for eligible learners',
        whatYoullLearn: ['Course specific skills and knowledge'],
        careerOpportunities: ['Various opportunities in ' + getCourseCategory(title)],
        qualifications: [title.trim()],
        sectors: [getCourseCategory(title)],
        slug: slug,
        fundingType: 'Fully Funded'
      };
      
      return course;
    });

    return courses.filter(course => course.title && course.provider);
  } catch (error) {
    console.error('Error loading courses:', error);
    return [];
  }
}

export async function getPaginatedCourses(
  page: number = 1,
  pageSize: number = 9,
  filters: CourseFilters = {}
): Promise<PaginatedCourses> {
  const allCourses = await getCourses();
  
  // Apply filters
  const filteredCourses = allCourses.filter(course => {
    const matchesProvider = !filters.provider || filters.provider === 'All' || 
      course.provider === filters.provider;
    const matchesCategory = !filters.category || filters.category === 'All' || 
      course.category === filters.category;
    const matchesLevel = !filters.level || filters.level === 'All' || 
      course.level === filters.level;
    const matchesSearch = !filters.search || 
      course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.provider.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesProvider && matchesCategory && matchesLevel && matchesSearch;
  });

  // Calculate pagination
  const totalCourses = filteredCourses.length;
  const totalPages = Math.ceil(totalCourses / pageSize);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  // Get courses for current page
  const paginatedCourses = filteredCourses.slice(start, end);

  return {
    courses: paginatedCourses,
    totalPages,
    currentPage,
    totalCourses
  };
}

export function getCategories(): string[] {
  return [
    'All',
    'Digital & IT',
    'Health & Social Care',
    'Business & Management',
    'Construction & Engineering',
    'Essential Skills',
    'Employability',
    'Other Courses'
  ];
}

export function getLevels(): string[] {
  return [
    'All',
    'Entry Level',
    'Level 1',
    'Level 2',
    'Level 3',
    'Certificate',
    'Diploma',
    'Award',
    'Other'
  ];
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const courses = await getCourses();
  const course = courses.find(course => course.slug === slug);
  
  if (!course) return null;
  
  // Add missing properties required by CoursePageClient
  return {
    ...course,
    type: course.fundingModel,
    deliveryMethod: 'Face to Face',
    fundingInfo: 'This course is fully funded',
    whatYoullLearn: ['Course content to be announced'],
    careerOpportunities: ['Career opportunities to be announced'],
    startDate: 'Starting soon',
    duration: '12 weeks',
  };
}

export function getProviderInfo(providerName: string) {
  const providers = {
    'BARNSLEY COLLEGE': {
      name: 'Barnsley College',
      website: 'https://www.barnsley.ac.uk',
      description: 'A leading further education college in South Yorkshire, offering a wide range of courses and qualifications.',
      address: 'Church Street, Barnsley, South Yorkshire, S70 2YW',
      phone: '01226 216 123'
    },
    'BARNSLEY METROPOLITAN BOROUGH COUNCIL': {
      name: 'Barnsley Metropolitan Borough Council',
      website: 'https://www.barnsley.gov.uk',
      description: 'Local authority providing adult education and training services in Barnsley.',
      address: 'Church Street, Barnsley, S70 2TA',
      phone: '01226 773 555'
    },
    'CHESTERFIELD COLLEGE': {
      name: 'Chesterfield College',
      website: 'https://www.chesterfield.ac.uk',
      description: 'A modern learning environment offering vocational courses and professional qualifications.',
      address: 'Infirmary Road, Chesterfield, S41 7NG',
      phone: '01246 500 500'
    },
    'DERBYSHIRE COUNTY COUNCIL': {
      name: 'Derbyshire County Council',
      website: 'https://www.derbyshire.gov.uk',
      description: 'Local authority providing adult education and community learning across Derbyshire.',
      address: 'County Hall, Matlock, DE4 3AG',
      phone: '01629 533 190'
    },
    'DONCASTER COUNCIL': {
      name: 'Doncaster Council',
      website: 'https://www.doncaster.gov.uk',
      description: 'Local authority offering adult learning and skills development programmes in Doncaster.',
      address: 'Civic Office, Waterdale, Doncaster, DN1 3BU',
      phone: '01302 736 000'
    }
  };

  return providers[providerName as keyof typeof providers] || {
    name: providerName,
    website: '#',
    description: 'Training provider in South Yorkshire.',
    address: 'South Yorkshire',
    phone: 'Contact for details'
  };
} 