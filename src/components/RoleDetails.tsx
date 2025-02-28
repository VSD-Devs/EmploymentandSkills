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
  Star
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
  const gradientClass = categoryTheme?.gradient || 'from-blue-600 to-indigo-700';
  const primaryColor = categoryTheme?.color || 'blue';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${gradientClass} text-white pb-16 sm:pb-20 lg:pb-24`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Pathways', href: '/pathways' },
            { label: role.category ? role.category.charAt(0).toUpperCase() + role.category.slice(1) : 'Pathways', href: `/pathways/${role.category || ''}` },
            { label: role.title, href: '#' },
          ]} className="mb-8" />
          
          <div className="max-w-3xl">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Star className="h-4 w-4 text-white/80" />
              <span className="text-xs md:text-sm font-medium text-white">Career Path</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">{role.title}</h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">{role.description}</p>
          </div>
        </div>
      </div>

      {/* Salary Section */}
      <div className="container mx-auto px-4 -mt-8 sm:-mt-10 lg:-mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200/50">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Building2 className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-${primaryColor}-600`} />
            Salary Expectations
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className={`bg-${primaryColor}-50 rounded-lg p-4 sm:p-6 border border-${primaryColor}-100`}>
              <p className={`text-${primaryColor}-900 font-semibold mb-2`}>Entry Level</p>
              <p className={`text-2xl sm:text-3xl font-bold text-${primaryColor}-700`}>{role.salary.entry}</p>
              <p className={`text-${primaryColor}-600 text-sm mt-2`}>Starting salary</p>
            </div>
            <div className={`bg-${primaryColor}-50 rounded-lg p-4 sm:p-6 border border-${primaryColor}-100`}>
              <p className={`text-${primaryColor}-900 font-semibold mb-2`}>Experienced</p>
              <p className={`text-2xl sm:text-3xl font-bold text-${primaryColor}-700`}>{role.salary.experienced}</p>
              <p className={`text-${primaryColor}-600 text-sm mt-2`}>Mid-career salary</p>
            </div>
            <div className={`bg-${primaryColor}-50 rounded-lg p-4 sm:p-6 border border-${primaryColor}-100`}>
              <p className={`text-${primaryColor}-900 font-semibold mb-2`}>Senior Level</p>
              <p className={`text-2xl sm:text-3xl font-bold text-${primaryColor}-700`}>{role.salary.senior}</p>
              <p className={`text-${primaryColor}-600 text-sm mt-2`}>Experienced professional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths Grid */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <SectionHeading 
          title="Education Pathways"
          subtitle="Routes into the profession"
          description="Choose the educational journey that suits your learning style and career goals"
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* University Path */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-gray-200/50">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">University Route</h3>
                  <p className="text-blue-100 font-medium">Traditional degree pathway</p>
                </div>
              </div>
              <p className="text-white/90 text-base sm:text-lg">{role.paths.university.description}</p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">              
              <div className="bg-blue-50 rounded-lg p-5 sm:p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Entry Requirements
                </h4>
                <ul className="space-y-3">
                  {role.paths.university.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-900">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border border-blue-100">
                  <p className="text-blue-900 font-semibold mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Duration
                  </p>
                  <p className="text-blue-800 text-lg">{role.paths.university.duration}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border border-blue-100">
                  <p className="text-blue-900 font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Qualification Level
                  </p>
                  <p className="text-blue-800 text-lg">{role.paths.university.qualificationLevel}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Key Providers:</h4>
                <ul className="space-y-2">
                  {role.paths.university.providers?.map((provider, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">{provider}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Apprenticeship Path */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-gray-200/50">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Apprenticeship Route</h3>
                  <p className="text-green-100 font-medium">Learn while you earn</p>
                </div>
              </div>
              <p className="text-white/90 text-base sm:text-lg">{role.paths.apprenticeship.description}</p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">              
              <div className="bg-green-50 rounded-lg p-5 sm:p-6 border border-green-100">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Entry Requirements
                </h4>
                <ul className="space-y-3">
                  {role.paths.apprenticeship.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-green-900">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-green-50 rounded-lg p-4 sm:p-5 border border-green-100">
                  <p className="text-green-900 font-semibold mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Duration
                  </p>
                  <p className="text-green-800 text-lg">{role.paths.apprenticeship.duration}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 sm:p-5 border border-green-100">
                  <p className="text-green-900 font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Qualification Level
                  </p>
                  <p className="text-green-800 text-lg">{role.paths.apprenticeship.qualificationLevel}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Training Providers:</h4>
                <ul className="space-y-2">
                  {role.paths.apprenticeship.providers?.map((provider, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 mr-3 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">{provider}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Bootcamps Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Fast-track your career with Skills Bootcamps"
            subtitle="Accelerated Learning"
            description="Intensive, short-duration courses designed to quickly build in-demand skills and connect you with employers"
            className="mb-10"
          />

          <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200/50">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:w-3/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                      <Laptop className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Skills Bootcamps for {role.title}s</h3>
                  </div>
                  <p className="text-white/90 text-base sm:text-lg mb-6">
                    Skills Bootcamps are flexible courses of up to 16 weeks, designed to help you gain industry-specific skills and fast-track you into work.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <LinkButton
                      href="/bootcamps"
                      variant="secondary"
                      size="lg"
                      className="bg-white text-indigo-600 hover:bg-white/90"
                    >
                      Explore Skills Bootcamps
                    </LinkButton>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-2/5 relative h-48">
                  <Image
                    src="/images/bootcamp.jpg"
                    alt="Skills Bootcamp training"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Free for eligible participants</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <p className="font-medium text-indigo-900">Fast-tracked</p>
                  </div>
                  <p className="text-indigo-800">Complete training in just 8-16 weeks</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-indigo-600" />
                    <p className="font-medium text-indigo-900">Employer Linked</p>
                  </div>
                  <p className="text-indigo-800">Connected directly with local employers</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <p className="font-medium text-indigo-900">Industry Recognized</p>
                  </div>
                  <p className="text-indigo-800">Gain valued qualifications and certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Day-to-Day */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <SectionHeading 
          title="Skills & Work Environment"
          subtitle="On the Job"
          description="What you'll be doing day-to-day and the skills needed to succeed"
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Skills Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200/50 transition-all hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-600" />
              Key Skills
            </h3>
            <div className="bg-purple-50 rounded-lg p-5 sm:p-6 border border-purple-100">
              <ul className="space-y-4">
                {role.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-900 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-to-Day Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200/50 transition-all hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-orange-600" />
              Day-to-Day Activities
            </h3>
            <div className="bg-orange-50 rounded-lg p-5 sm:p-6 border border-orange-100">
              <ul className="space-y-4">
                {role.dayToDay.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-orange-900 font-medium">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Work Environment */}
        <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200/50 transition-all hover:shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-teal-600" />
            Work Environment
          </h3>
          <div className="bg-teal-50 rounded-lg p-5 sm:p-6 border border-teal-100">
            <p className="text-teal-900 text-lg leading-relaxed">{role.workEnvironment}</p>
          </div>
        </div>
      </div>

      {/* Career Growth Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Future Career Opportunities"
            subtitle="Career Growth"
            description="Where this role can take you in the future"
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Workflow className="w-5 h-5 text-white" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Next Career Steps</h3>
                </div>
                <p className="text-white/90">Potential progression paths from this role</p>
              </div>
              <div className="p-5 sm:p-6">
                <ul className="space-y-3">
                  {role.careerPathway.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="bg-gradient-to-r from-purple-600 to-violet-700 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Presentation className="w-5 h-5 text-white" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Future Roles</h3>
                </div>
                <p className="text-white/90">Potential job titles you could progress to</p>
              </div>
              <div className="p-5 sm:p-6">
                <ul className="space-y-3">
                  {role.careerPathway.potentialRoles.map((futureRole, index) => (
                    <li key={index} className="flex items-start bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <Briefcase className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-900">{futureRole}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Trends - If available */}
          {role.industryTrends && (
            <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-5 h-5 text-white" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Industry Trends</h3>
                </div>
                <p className="text-white/90">Key developments shaping this profession</p>
              </div>
              <div className="p-5 sm:p-6">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {role.industryTrends.map((trend, index) => (
                    <li key={index} className="flex items-start bg-amber-50 p-3 rounded-lg border border-amber-100">
                      <PenTool className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-900">{trend}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to pursue a career as a {role.title}?</h2>
            <p className="text-xl text-white/90 mb-8">Explore training opportunities, apprenticeships and courses to help you gain the skills you need to succeed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton
                href="/training"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90"
              >
                Find Training Opportunities
              </LinkButton>
              
              <LinkButton
                href="/apprenticeships"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Apprenticeships
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Testimonials - if available */}
        {role.testimonials && role.testimonials.length > 0 && (
          <div className="mt-10 sm:mt-16">
            <SectionHeading 
              title="Hear from Professionals"
              subtitle="Success Stories"
              description="Insights from professionals who have built successful careers in this field"
              className="mb-10"
            />
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {role.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 relative min-h-[150px] sm:min-h-full">
                      <Image 
                        src={testimonial.imageUrl || "/images/testimonial-placeholder.jpg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                      <p className="text-gray-700 italic">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Local Employers - if available */}
        {role.localEmployers && role.localEmployers.length > 0 && (
          <div className="mt-10 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Local Employers in South Yorkshire</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {role.localEmployers.map((employer, index) => (
                  <li key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <span className="font-medium text-gray-700">{employer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 