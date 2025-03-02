'use client';

import { Role } from '@/types/role';
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Brain, 
  Calendar, 
  Award, 
  Building2, 
  ArrowLeft, 
  Clock, 
  Check, 
  Lightbulb, 
  FileText, 
  Workflow, 
  PenTool,
  Laptop,
  Presentation,
  Star,
  ChevronRight,
  Users,
  Gem
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CareerQuizButton from './CareerQuizButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import ActionButton from '@/components/ui/ActionButton';
import LinkButton from '@/components/ui/LinkButton';
import { categoryThemes } from '@/data/roles';

export default function RoleDetails({ role }: { role: Role }) {
  const [showQuizReturn, setShowQuizReturn] = useState(false);

  useEffect(() => {
    // Check if we came from the career quiz
    const hasQuizState = localStorage.getItem('careerQuizState') !== null;
    setShowQuizReturn(hasQuizState);
  }, []);

  // Get the appropriate theme colors based on role category
  const categoryTheme = role.category ? categoryThemes[role.category as keyof typeof categoryThemes] : categoryThemes.digital;
  const gradientClass = `${categoryTheme?.gradientFrom || 'from-blue-500'} ${categoryTheme?.gradientTo || 'to-blue-700'}`;
  const primaryColor = categoryTheme?.textColor || 'text-blue-500';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - more immersive and modern */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${gradientClass} text-white pb-16 md:pb-32`}>
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Pathways', href: '/pathways' },
            { label: role.category ? role.category.charAt(0).toUpperCase() + role.category.slice(1) : 'Pathways', href: `/pathways/${role.category || ''}` },
            { label: role.title, href: '#' },
          ]} className="mb-8" darkMode={true} />
          
          <div className="max-w-4xl">
            {showQuizReturn && (
              <div className="mb-6">
                <CareerQuizButton variant="secondary" className="!bg-white/20 backdrop-blur-sm hover:!bg-white/30 !text-white !px-4 !py-2 !rounded-lg border border-white/30">
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Quiz Results</span>
                  </div>
                </CareerQuizButton>
              </div>
            )}
            
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 w-fit">
                <Star className="h-4 w-4 text-white/80" />
                <span className="text-xs md:text-sm font-medium text-white">Career Path</span>
              </div>
              
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{role.title}</h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">{role.description}</p>
              </div>
              
              {/* Key facts - quick overview section */}
              <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 px-4 py-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Schedule</p>
                    <p className="text-white font-medium">{role.workSchedule}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 px-4 py-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Work Options</p>
                    <p className="text-white font-medium">{role.remoteWorkOptions.split(' ')[0]}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 px-4 py-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Gem className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Experienced Salary</p>
                    <p className="text-white font-bold">{role.salary.experienced}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved edge for a more organic flow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" fill="#ffffff" opacity=".25" />
            <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" fill="#ffffff" opacity=".5" />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Salary Section - reimagined as a career value proposition */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Career Value Proposition"
            subtitle="Rewards & Compensation"
            description="What you can expect to earn at different stages of your career journey"
            className="mb-12 md:mb-16 text-center"
          />
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 p-1 w-full">
              <div className={`bg-gradient-to-br from-${primaryColor}-500 to-${primaryColor}-700 rounded-2xl overflow-hidden h-full transform transition-all hover:scale-[1.02] hover:shadow-xl`}>
                <div className="p-6 md:p-8 bg-white/90 m-[2px] rounded-2xl h-full flex flex-col">
                  <div className="mb-6">
                    <span className={`text-${primaryColor}-600 text-sm font-semibold uppercase tracking-wider`}>Starting Out</span>
                    <h3 className={`text-2xl md:text-4xl font-bold text-${primaryColor}-950 mt-1`}>{role.salary.entry}</h3>
                    <p className="text-gray-600 mt-2">Entry level position</p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-900 mb-3">What to expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Training & mentorship opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Building foundational skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Supervised work experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-1">
              <div className={`bg-gradient-to-br from-${primaryColor}-600 to-${primaryColor}-800 rounded-2xl overflow-hidden h-full transform transition-all hover:scale-[1.02] hover:shadow-xl`}>
                <div className="p-6 md:p-8 bg-white/90 m-[2px] rounded-2xl h-full flex flex-col">
                  <div className="mb-6">
                    <span className={`text-${primaryColor}-600 text-sm font-semibold uppercase tracking-wider`}>Mid-Career</span>
                    <h3 className={`text-3xl md:text-4xl font-bold text-${primaryColor}-950 mt-1`}>{role.salary.experienced}</h3>
                    <p className="text-gray-600 mt-2">3-5 years experience</p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-900 mb-3">What to expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">More autonomy and responsibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Leadership opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Specialised skill development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-1">
              <div className={`bg-gradient-to-br from-${primaryColor}-700 to-${primaryColor}-900 rounded-2xl overflow-hidden h-full transform transition-all hover:scale-[1.02] hover:shadow-xl`}>
                <div className="p-6 md:p-8 bg-white/90 m-[2px] rounded-2xl h-full flex flex-col">
                  <div className="mb-6">
                    <span className={`text-${primaryColor}-600 text-sm font-semibold uppercase tracking-wider`}>Senior Level</span>
                    <h3 className={`text-3xl md:text-4xl font-bold text-${primaryColor}-950 mt-1`}>{role.salary.senior}</h3>
                    <p className="text-gray-600 mt-2">Experienced professional</p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-900 mb-3">What to expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Strategic decision making</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Team leadership & mentoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className={`w-5 h-5 text-${primaryColor}-500 mt-0.5`} />
                        <span className="text-gray-700">Advanced expertise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Pathways - redesigned for better comparison */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Your Learning Journey"
            subtitle="Education Pathways"
            description="Choose the route that best matches your learning style and career goals"
            className="mb-12 text-center"
          />
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/50">
            {/* Pathway tabs */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">University Route</h3>
                    <p className="text-gray-600 mt-1">Traditional academic path</p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {role.paths.university.description}
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">{role.paths.university.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Qualification</p>
                      <p className="font-medium text-gray-900">{role.paths.university.qualificationLevel}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gray-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 p-3 rounded-xl">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Apprenticeship</h3>
                    <p className="text-gray-600 mt-1">Learn while you earn</p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {role.paths.apprenticeship.description}
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">{role.paths.apprenticeship.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Qualification</p>
                      <p className="font-medium text-gray-900">{role.paths.apprenticeship.qualificationLevel}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gray-50 p-6 md:p-8">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-3 rounded-xl">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Skills Bootcamp</h3>
                    <p className="text-gray-600 mt-1">Fast-track your skills</p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-700 leading-relaxed">
                  Skills Bootcamps are flexible courses designed to quickly build in-demand skills and fast-track you into employment.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">8-16 weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Key Feature</p>
                      <p className="font-medium text-gray-900">Employer connections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Detailed comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
              {/* University Requirements */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>University Requirements</span>
                </h4>
                <ul className="space-y-3">
                  {role.paths.university.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Providers:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {role.paths.university.providers?.map((provider, index) => (
                      <div key={index} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg border border-blue-100">
                        {provider}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Apprenticeship Requirements */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span>Apprenticeship Requirements</span>
                </h4>
                <ul className="space-y-3">
                  {role.paths.apprenticeship.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Benefits of apprenticeships section to replace providers */}
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Earn whilst you learn</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gain practical work experience</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">No student debt</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Bootcamp Benefits */}
              <div className="p-6 md:p-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <span>Bootcamp Benefits</span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Complete training in just 8-16 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Connected directly with local employers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gain valued qualifications and certificates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free for eligible participants</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <LinkButton 
                    href="/bootcamps"
                    variant="secondary"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>Explore Skills Bootcamps</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Day-to-Day */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="What You'll Do & Need"
            subtitle="Role Insights"
            description="The essential skills and daily responsibilities for success as a {role.title}"
            className="mb-12 text-center"
          />
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Role tabs navigation */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
              <div className="p-4 md:p-6 min-w-[150px] text-center border-b-2 border-purple-600 flex-shrink-0">
                <div className="mx-auto w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-medium text-gray-900">Key Skills</span>
              </div>
              
              <div className="p-4 md:p-6 min-w-[150px] text-center border-b-2 border-transparent flex-shrink-0">
                <div className="mx-auto w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <span className="font-medium text-gray-900">Daily Tasks</span>
              </div>
              
              <div className="p-4 md:p-6 min-w-[150px] text-center border-b-2 border-transparent flex-shrink-0">
                <div className="mx-auto w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                  <Building2 className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium text-gray-900">Work Environment</span>
              </div>
            </div>
            
            {/* Content area with skills as active tab */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side: Skills visualization */}
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Skills Breakdown</h3>
                  <div className="grid gap-4">
                    {role.skills.map((skill, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                          <span className="text-sm text-gray-500">Essential</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5" role="progressbar" aria-valuenow={95 - (index * 5)} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill} proficiency level`}>
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-purple-700 h-2.5 rounded-full" 
                            style={{ width: `${95 - (index * 5)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Desired qualifications */}
                  <div className="mt-8">
                    <h4 className="font-medium text-gray-900 mb-4">Recommended Qualifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.desiredQualifications.map((qual, index) => (
                        <span 
                          key={index} 
                          className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right side: Day-to-day tasks */}
                <div className="md:w-1/2 md:border-l md:border-gray-200 md:pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Day in the Life</h3>
                  <div className="space-y-4">
                    {role.dayToDay.map((activity, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-800">{activity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Work Environment - now as a standalone card below */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white h-full">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl inline-flex mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Work Environment</h3>
                  <p className="text-teal-50">What you can expect in your day-to-day workplace setting</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-700 text-lg leading-relaxed">{role.workEnvironment}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Working Hours</p>
                      <p className="font-medium text-gray-900">{role.workSchedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Laptop className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Remote Options</p>
                      <p className="font-medium text-gray-900">{role.remoteWorkOptions}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tools and Tech */}
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.toolsAndTech.map((tool, index) => (
                      <span 
                        key={index} 
                        className="bg-teal-50 text-teal-700 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Growth Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Your Future Development"
            subtitle="Career Growth"
            description="Build your long-term career journey from this role"
            className="mb-12 text-center"
          />
          
          {/* Visual career pathway with milestones */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-8 border border-gray-200 mb-12">
            {/* Three stage career journey visualization */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Current role */}
                <div className="relative">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900">Current Role</h3>
                    <p className="text-blue-600 font-medium">{role.title}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-gray-700 text-sm">
                      Building your foundation as a {role.title}, mastering core skills and gaining valuable experience.
                    </p>
                  </div>
                </div>
                
                {/* Mid-term progression */}
                <div className="relative">
                  <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-400 flex items-center justify-center mb-4 relative z-10">
                    <Workflow className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900">Next Steps</h3>
                    <p className="text-purple-600 font-medium">3-5 years</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 h-full">
                    <ul className="space-y-2">
                      {role.careerPathway.nextSteps.slice(0, 3).map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Long-term potential */}
                <div className="relative">
                  <div className="mx-auto w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-400 flex items-center justify-center mb-4 relative z-10">
                    <Presentation className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900">Future Roles</h3>
                    <p className="text-teal-600 font-medium">Long-term potential</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {role.careerPathway.potentialRoles.map((futureRole, index) => (
                        <span 
                          key={index} 
                          className="bg-teal-50 text-teal-700 rounded-full px-3 py-1 text-sm font-medium"
                        >
                          {futureRole}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Industry Trends in a modern tile layout */}
          {role.industryTrends && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Industry Trends</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {role.industryTrends.map((trendItem, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-amber-800 font-medium">{trendItem.trend}</div>
                    <div className="text-amber-700 mt-2 text-sm">{trendItem.impact}</div>
                    <div className="text-green-600 mt-2 text-sm font-medium">{trendItem.opportunity}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Reimagined CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl overflow-hidden">
            <div className="relative p-8 md:p-12">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to pursue a career as a {role.title}?</h2>
                  <p className="text-lg text-white/90 mb-8">Take the next step in your career journey by exploring training opportunities and vacancies in your area.</p>
                </div>
                
                <div className="md:w-1/3 flex flex-col gap-4">
                  <LinkButton
                    href="/training"
                    variant="secondary"
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>Find Training</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </LinkButton>
                  
                  <LinkButton
                    href="/jobs"
                    variant="outline"
                    size="lg"
                    className="w-full border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>Browse Vacancies</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials - if available */}
          {role.testimonials && role.testimonials.length > 0 && (
            <div className="mt-16">
              <SectionHeading 
                title="Hear from Professionals"
                subtitle="Success Stories"
                description="Insights from people who have built successful careers in this field"
                className="mb-10 text-center"
              />
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {role.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200/80 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 relative h-48 sm:h-auto">
                        <Image 
                          src={testimonial.imageUrl || "/images/testimonial-placeholder.jpg"}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="sm:w-2/3 p-6">
                        <div className="relative">
                          <p className="text-gray-700 italic mb-4 pl-4 before:content-['\201C'] before:text-4xl before:text-blue-200 before:absolute before:-top-2 before:-left-1">{testimonial.quote}</p>
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Local Employers - if available */}
          {role.localEmployers && role.localEmployers.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-2 rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Local Employers in South Yorkshire</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {role.localEmployers.map((employer, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-700">{employer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Back to top button */}
      <div className="flex justify-center pb-16">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 px-4 py-2 rounded-full shadow-sm"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
            <path d="m12 19-7-7 7-7"/>
            <path d="M5 12h14"/>
          </svg>
          <span>Back to top</span>
        </button>
      </div>
    </div>
  );
} 