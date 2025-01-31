import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Code2, 
  GraduationCap, 
  Building2, 
  Users, 
  Laptop,
  Brain,
  Target,
  ArrowRight,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Categories data
const categories = [
  'digital',
  'healthcare',
  'manufacturing',
  'logistics',
  'finance',
  'education'
];

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

// Add metadata generation
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} Careers - South Yorkshire Pathways`,
    description: `Explore career opportunities and training pathways in ${params.category} across South Yorkshire.`,
  };
}

const digitalData = {
  title: 'Digital & Technology',
  description: 'The digital sector in Yorkshire is rapidly growing, with opportunities spanning software development, cybersecurity, data analysis, and digital transformation.',
  headerImage: '/images/categories/digital.jpg',
  keySkills: [
    {
      icon: Laptop,
      title: 'Technical Skills',
      skills: ['Programming', 'Web Development', 'Database Management', 'Cloud Computing']
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      skills: ['Analytical Thinking', 'Debugging', 'System Design', 'Logic']
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Communication', 'Team Collaboration', 'Project Management', 'Adaptability']
    }
  ],
  pathways: [
    {
      title: 'University Route',
      duration: '3-4 years',
      description: 'Traditional degree pathway with work placement opportunities. Gain comprehensive theoretical knowledge alongside practical experience through industry placements.',
      icon: GraduationCap
    },
    {
      title: 'Apprenticeship',
      duration: '18-24 months',
      description: 'Learn while you earn with hands-on industry experience. Split your time between workplace training and structured learning.',
      icon: Building2
    },
    {
      title: 'Bootcamp',
      duration: '12-16 weeks',
      description: 'Intensive practical training perfect for career changers. Focus on job-ready skills through project-based learning.',
      icon: Target
    }
  ],
  progression: [
    {
      level: 'Entry Level',
      roles: ['Junior Developer', 'IT Support', 'Junior Data Analyst'],
      timeframe: '0-2 years',
      skills: ['Programming Basics', 'Problem Solving', 'Communication'],
      salary: '£24,000 - £30,000'
    },
    {
      level: 'Mid Level',
      roles: ['Software Developer', 'Systems Administrator', 'Data Scientist'],
      timeframe: '2-5 years',
      skills: ['Advanced Programming', 'Project Management', 'Technical Leadership'],
      salary: '£35,000 - £50,000'
    },
    {
      level: 'Senior Level',
      roles: ['Senior Developer', 'Technical Architect', 'IT Manager'],
      timeframe: '5+ years',
      skills: ['System Architecture', 'Team Leadership', 'Strategic Planning'],
      salary: '£50,000 - £80,000'
    }
  ]
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Validate category
  if (!categories.includes(params.category)) {
    notFound();
  }

  // In a real app, we would fetch data based on the category
  const data = digitalData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[#111827]">
        <Image
          src={data.headerImage}
          alt={data.title}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/90 to-[#111827]/70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col h-full justify-center">
            <Link href="/pathways" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Pathways
            </Link>
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium">Career Pathways</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{data.title}</h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Key Skills Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {data.keySkills.map((skillSet, index) => {
              const IconComponent = skillSet.icon;
              return (
                <div key={index} className="relative group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                  <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{skillSet.title}</h3>
                    <ul className="space-y-3">
                      {skillSet.skills.map((skill, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-lg">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Training Pathways */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-emerald-600 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-sm font-medium tracking-wide uppercase">Education Options</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Training Pathways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.pathways.map((pathway, index) => {
              const IconComponent = pathway.icon;
              return (
                <div key={index} className="group relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                  <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"></div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{pathway.title}</h3>
                      <span className="text-lg text-emerald-600 font-medium">({pathway.duration})</span>
                    </div>
                    <p className="text-lg text-gray-600">{pathway.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Career Progression */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-emerald-600 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-sm font-medium tracking-wide uppercase">Your Journey</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Career Progression</h2>
          <div className="space-y-6">
            {data.progression.map((level, index) => {
              const progressionColors = [
                'bg-white',
                'bg-white',
                'bg-white'
              ];
              return (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg ring-4 ring-white">
                          <span className="font-bold text-2xl text-white">{index + 1}</span>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" 
                             style={{ 
                               animationDuration: '3s',
                               animationIterationCount: 'infinite',
                               animationDelay: `${index * 0.5}s`
                             }}
                        ></div>
                        <div className="absolute -inset-2 rounded-full border-2 border-emerald-200/50 animate-[spin_8s_linear_infinite]"></div>
                      </div>
                    </div>
                    <div className={`flex-1 ${progressionColors[index]} rounded-xl shadow-lg p-8 relative overflow-hidden transform transition-all hover:shadow-xl border border-gray-100`}>
                      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"></div>
                      <div className="relative">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                            <p className="text-lg font-medium text-emerald-600">{level.salary}</p>
                          </div>
                          <span className="text-lg text-emerald-600 font-medium">{level.timeframe}</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3 text-lg">Common Roles</h4>
                            <div className="flex flex-wrap gap-3">
                              {level.roles.map((role, i) => (
                                <span key={i} className="bg-emerald-50 px-4 py-2 rounded-full text-lg text-emerald-700">
                                  {role}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3 text-lg">Key Skills</h4>
                            <div className="flex flex-wrap gap-3">
                              {level.skills.map((skill, i) => (
                                <span key={i} className="bg-gray-50 px-4 py-2 rounded-full text-lg text-gray-700">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < data.progression.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5">
                      <div className="h-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent animate-pulse"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Job Vacancies CTA */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Looking for Job Opportunities?</h2>
                <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
                  Explore current digital and technology vacancies across South Yorkshire. 
                  Find roles that match your skills and experience level.
                </p>
              </div>
              <Link 
                href="/vacancies/digital"
                className="inline-flex items-center bg-white text-emerald-700 px-8 py-4 rounded-xl font-medium hover:bg-emerald-50 transition-colors whitespace-nowrap text-lg group"
              >
                View Vacancies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}