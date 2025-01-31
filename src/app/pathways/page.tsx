'use client';

import { useState } from 'react';
import { Search, Code2, Landmark, HardHat, Stethoscope, Truck, Factory, Microscope, GraduationCap, ArrowRight, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Career categories data
const careerCategories = [
  {
    id: 'digital',
    title: 'Digital & Technology',
    description: 'From software development to cybersecurity, discover opportunities in Yorkshire\'s growing tech sector.',
    icon: Code2,
    color: 'bg-blue-900',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-100',
    jobs: ['Software Developer', 'Data Analyst', 'Cybersecurity Specialist'],
    stats: { growth: '+22%', avgSalary: '£35k', jobs: '1.2k' },
    image: '/images/categories/digital.jpg'
  },
  {
    id: 'finance',
    title: 'Finance & Professional Services',
    description: 'Explore careers in banking, accounting, and financial services across South Yorkshire.',
    icon: Landmark,
    color: 'bg-emerald-900',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-900',
    borderColor: 'border-emerald-100',
    jobs: ['Accountant', 'Financial Advisor', 'Insurance Broker'],
    stats: { growth: '+15%', avgSalary: '£40k', jobs: '800+' },
    image: '/images/categories/finance.jpg'
  },
  {
    id: 'construction',
    title: 'Construction & Infrastructure',
    description: 'Build your future in construction, from trades to project management roles.',
    icon: HardHat,
    color: 'bg-amber-900',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-100',
    jobs: ['Construction Manager', 'Quantity Surveyor', 'Civil Engineer'],
    stats: { growth: '+18%', avgSalary: '£38k', jobs: '950+' },
    image: '/images/categories/construction.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    description: 'Make a difference in healthcare with roles from nursing to medical technology.',
    icon: Stethoscope,
    color: 'bg-red-900',
    lightColor: 'bg-red-50',
    textColor: 'text-red-900',
    borderColor: 'border-red-100',
    jobs: ['Nurse', 'Healthcare Assistant', 'Medical Technician'],
    stats: { growth: '+25%', avgSalary: '£32k', jobs: '1.5k' },
    image: '/images/categories/healthcare.jpg'
  },
  {
    id: 'logistics',
    title: 'Logistics & Transport',
    description: 'Keep Yorkshire moving with careers in logistics, transport, and supply chain management.',
    icon: Truck,
    color: 'bg-purple-900',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-900',
    borderColor: 'border-purple-100',
    jobs: ['Logistics Manager', 'Supply Chain Analyst', 'Fleet Coordinator'],
    stats: { growth: '+12%', avgSalary: '£35k', jobs: '600+' },
    image: '/images/categories/logistics.jpg'
  },
  {
    id: 'manufacturing',
    title: 'Advanced Manufacturing',
    description: 'Join Yorkshire\'s innovative manufacturing sector with roles in production and engineering.',
    icon: Factory,
    color: 'bg-slate-800',
    lightColor: 'bg-slate-50',
    textColor: 'text-slate-900',
    borderColor: 'border-slate-100',
    jobs: ['Production Engineer', 'Quality Control', 'Manufacturing Technician'],
    stats: { growth: '+20%', avgSalary: '£36k', jobs: '900+' },
    image: '/images/categories/manufacturing.jpg'
  },
  {
    id: 'research',
    title: 'Research & Innovation',
    description: 'Drive innovation in Yorkshire\'s research institutions and development centres.',
    icon: Microscope,
    color: 'bg-indigo-900',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-900',
    borderColor: 'border-indigo-100',
    jobs: ['Research Scientist', 'R&D Engineer', 'Laboratory Technician'],
    stats: { growth: '+16%', avgSalary: '£42k', jobs: '400+' },
    image: '/images/categories/research.jpg'
  },
  {
    id: 'education',
    title: 'Education & Training',
    description: 'Shape the future through careers in education and professional training.',
    icon: GraduationCap,
    color: 'bg-teal-900',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-900',
    borderColor: 'border-teal-100',
    jobs: ['Teacher', 'Training Coordinator', 'Education Consultant'],
    stats: { growth: '+14%', avgSalary: '£34k', jobs: '750+' },
    image: '/images/categories/education.jpg'
  }
];

export default function PathwaysPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Sectors' },
    { id: 'growing', label: 'Fastest Growing' },
    { id: 'entry', label: 'Entry Level' },
    { id: 'tech', label: 'Tech Focused' }
  ];

  const filteredCategories = careerCategories.filter(category =>
    (searchQuery === '' || 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.jobs.some(job => job.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section with gradient fade to content */}
      <div className="relative min-h-[400px] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/path.jpg"
            alt="Your career path starts here"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-900/85 to-zinc-50"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
              <span className="text-white text-sm font-semibold">South Yorkshire Skills Hub</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
              Your Journey to Success Starts Here
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl font-medium drop-shadow-sm">
              Explore opportunities across Yorkshire\'s growing industries. Find training, skills requirements, and progression routes tailored to your interests.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl">
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-lg">
                <div className="flex items-center">
                  <Search className="w-6 h-6 text-emerald-600 ml-4" />
                  <input
                    type="text"
                    placeholder="Search for industries, roles, or skills..."
                    className="w-full px-4 py-3 text-lg text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search careers and skills"
                  />
                </div>
                {searchQuery && (
                  <div className="absolute inset-x-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-zinc-100 py-2">
                    <p className="px-4 py-2 text-sm text-zinc-500">
                      {filteredCategories.length} results found
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-wrap gap-3">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedFilter === filter.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-zinc-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                href={`/pathways/${category.id}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header Section */}
                <div className={`${category.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {category.title}
                      </h2>
                      <p className="text-sm text-white/95 font-medium">
                        {category.jobs[0]} • {category.jobs[1]} • {category.jobs[2]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white">
                  <p className="text-zinc-700 mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex items-center justify-end text-emerald-800 group-hover:text-emerald-900">
                    <span className="text-sm font-medium">Explore Pathway</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
            <p className="text-emerald-50 mb-8">
              Take our career matching quiz to discover paths that align with your skills and interests.
            </p>
            <Link
              href="/career-quiz"
              className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
            >
              Start Career Quiz
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 