'use client';

import { Role } from '@/types/role';
import { ArrowRight, GraduationCap, Briefcase, Brain, Calendar, Award, Building2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CareerQuizButton from './CareerQuizButton';

export default function RoleDetails({ role }: { role: Role }) {
  const [showQuizReturn, setShowQuizReturn] = useState(false);

  useEffect(() => {
    // Check if we came from the career quiz
    const hasQuizState = localStorage.getItem('careerQuizState') !== null;
    setShowQuizReturn(hasQuizState);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {showQuizReturn && (
              <div className="mb-6">
                <CareerQuizButton variant="secondary" className="!bg-emerald-600 hover:!bg-emerald-500 !text-white !px-4 !py-2 !rounded-full">
                  <div className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Quiz Results</span>
                  </div>
                </CareerQuizButton>
              </div>
            )}
            <div className="inline-flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-sm font-medium">Career Path</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{role.title}</h1>
            <p className="text-xl text-zinc-200 leading-relaxed">{role.description}</p>
          </div>
        </div>
      </div>

      {/* Salary Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center">
            <Building2 className="w-6 h-6 mr-3 text-emerald-600" />
            Salary Expectations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-emerald-900 font-semibold mb-2">Entry Level</p>
              <p className="text-3xl font-bold text-emerald-700">{role.salary.entry}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-emerald-900 font-semibold mb-2">Experienced</p>
              <p className="text-3xl font-bold text-emerald-700">{role.salary.experienced}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-emerald-900 font-semibold mb-2">Senior Level</p>
              <p className="text-3xl font-bold text-emerald-700">{role.salary.senior}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* University Path */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 border-zinc-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <GraduationCap className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">University Route</h3>
                <p className="text-blue-700 font-medium">Traditional degree pathway</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-zinc-700 text-lg">{role.paths.university.description}</p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Requirements
                </h4>
                <ul className="space-y-3">
                  {role.paths.university.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      <span className="text-blue-900">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-900 font-semibold mb-1 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Duration
                  </p>
                  <p className="text-blue-800">{role.paths.university.duration}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-900 font-semibold mb-1 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Level
                  </p>
                  <p className="text-blue-800">{role.paths.university.qualificationLevel}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Apprenticeship Path */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-emerald-600 border-zinc-200">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                <Briefcase className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">Apprenticeship Route</h3>
                <p className="text-emerald-700 font-medium">Learn while you earn</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-zinc-700 text-lg">{role.paths.apprenticeship.description}</p>
              
              <div className="bg-emerald-50 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Requirements
                </h4>
                <ul className="space-y-3">
                  {role.paths.apprenticeship.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 bg-emerald-500 rounded-full"></span>
                      <span className="text-emerald-900">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-emerald-900 font-semibold mb-1 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Duration
                  </p>
                  <p className="text-emerald-800">{role.paths.apprenticeship.duration}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-emerald-900 font-semibold mb-1 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Level
                  </p>
                  <p className="text-emerald-800">{role.paths.apprenticeship.qualificationLevel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Day-to-Day */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-purple-600" />
              Key Skills
            </h3>
            <div className="bg-purple-50 rounded-lg p-6">
              <ul className="space-y-4">
                {role.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 mr-3 bg-purple-500 rounded-full"></span>
                    <span className="text-purple-900 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-to-Day Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-orange-600" />
              Day-to-Day Activities
            </h3>
            <div className="bg-orange-50 rounded-lg p-6">
              <ul className="space-y-4">
                {role.dayToDay.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-orange-500 rounded-full"></span>
                    <span className="text-orange-900 font-medium">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Work Environment */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
          <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
            <Building2 className="w-6 h-6 mr-3 text-teal-600" />
            Work Environment
          </h3>
          <div className="bg-teal-50 rounded-lg p-6">
            <p className="text-teal-900 text-lg">{role.workEnvironment}</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/training"
            className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Training Opportunities
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 