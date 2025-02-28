'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { roleData, categoryThemes } from '@/data/roles';

// Minimal diagnostic assessment component focused on performance
export default function SkillsDiagnosticPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [results, setResults] = useState<{
    supportProgrammes: Array<{id: string, name: string, url: string, description: string}>;
    recommendedRoles: Array<{slug: string, title: string, category: string}>;
    skillGaps: string[];
  } | null>(null);
  
  // Handle answer selection
  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Go to next step
  const handleNext = () => {
    window.scrollTo(0, 0);
    setStep(prev => prev + 1);
  };

  // Go to previous step
  const handleBack = () => {
    window.scrollTo(0, 0);
    setStep(prev => prev - 1);
  };

  // Process results on final step
  const processResults = () => {
    // Here we'd normally process the answers with a more sophisticated algorithm
    // This is simplified for demonstration purposes
    
    // 1. Determine support programmes based on employment status, education, and barriers
    const supportProgrammes = [];
    
    if (answers.employmentStatus === 'unemployed') {
      supportProgrammes.push({
        id: 'employment-support',
        name: 'Employment Support Service',
        url: '/employment-support',
        description: 'Personalised guidance to help you find work, including CV help and interview preparation.'
      });
    }
    
    if (answers.education === 'no-qualifications' || answers.skillLevel === 'beginner') {
      supportProgrammes.push({
        id: 'skills-bank',
        name: 'Skills Bank',
        url: '/skills-bank',
        description: 'Access funding for training to improve your essential skills and employability.'
      });
    }
    
    if (answers.age === 'under-25') {
      supportProgrammes.push({
        id: 'youth-employment',
        name: 'Youth Employment Initiative',
        url: '/youth-employment',
        description: 'Specialised support for young people looking to start their career journey.'
      });
    }
    
    // 2. Determine recommended roles based on interests and skills
    const recommendedRoles = [];
    const interests = answers.interests || [];
    
    // Simple matching algorithm - in a real app this would be more sophisticated
    for (const roleSlug in roleData) {
      const role = roleData[roleSlug];
      
      // Infer category from the role slug or data structure
      // For example, if roleSlug is 'junior-developer', it might belong to 'digital' category
      let category = '';
      if (roleSlug.includes('developer') || roleSlug.includes('engineer') || roleSlug.includes('analyst')) {
        category = 'digital';
      } else if (roleSlug.includes('business') || roleSlug.includes('finance') || roleSlug.includes('manager')) {
        category = 'business';
      } else if (roleSlug.includes('health') || roleSlug.includes('care') || roleSlug.includes('medical')) {
        category = 'healthcare';
      } else if (roleSlug.includes('design') || roleSlug.includes('media') || roleSlug.includes('art')) {
        category = 'creative';
      } else if (roleSlug.includes('engineering') || roleSlug.includes('mechanic')) {
        category = 'engineering';
      } else if (roleSlug.includes('chef') || roleSlug.includes('hospitality')) {
        category = 'hospitality';
      } else if (roleSlug.includes('construction') || roleSlug.includes('builder')) {
        category = 'construction';
      } else if (roleSlug.includes('teacher') || roleSlug.includes('education')) {
        category = 'education';
      }
      
      // Only include if it matches at least one interest area
      if (category && interests.includes(category)) {
        recommendedRoles.push({
          slug: roleSlug,
          title: role.title,
          category: category
        });
      }
    }
    
    // Limit to top 5 matches
    const limitedRoles = recommendedRoles.slice(0, 5);
    
    // 3. Determine skill gaps based on desired roles vs current skills
    const skillGaps = ['Communication skills', 'Digital literacy', 'Problem-solving'];
    
    // Set the results state
    setResults({
      supportProgrammes,
      recommendedRoles: limitedRoles,
      skillGaps
    });
  };

  // Process results when on the final step
  useEffect(() => {
    if (step === 5) {
      processResults();
    }
  }, [step]);
  
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/pathways"
          className="inline-flex items-center mb-8 text-blue-700 hover:text-blue-900"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Pathways
        </Link>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-100">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
          
          <div className="p-6 md:p-8">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Skills Diagnostic Assessment
                </h1>
                <p className="mb-6 text-gray-700">
                  Let's gather some basic information to help us understand your situation better.
                </p>
                
                <div className="space-y-6">
                  {/* Age group */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Age group</label>
                    <div className="space-y-2">
                      {['under-25', '25-40', '40-55', 'over-55'].map(age => (
                        <button
                          key={age}
                          onClick={() => handleAnswer('age', age)}
                          className={`w-full text-left px-4 py-3 rounded-lg border ${
                            answers.age === age 
                              ? 'bg-blue-50 border-blue-300 text-blue-700' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {age === 'under-25' ? 'Under 25' : 
                           age === '25-40' ? '25-40' : 
                           age === '40-55' ? '40-55' : 'Over 55'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Employment status */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Current employment status</label>
                    <div className="space-y-2">
                      {['employed', 'unemployed', 'student', 'career-change'].map(status => (
                        <button
                          key={status}
                          onClick={() => handleAnswer('employmentStatus', status)}
                          className={`w-full text-left px-4 py-3 rounded-lg border ${
                            answers.employmentStatus === status 
                              ? 'bg-blue-50 border-blue-300 text-blue-700' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {status === 'employed' ? 'Employed' : 
                           status === 'unemployed' ? 'Unemployed' : 
                           status === 'student' ? 'Student' : 'Looking to change careers'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={!answers.age || !answers.employmentStatus}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      !answers.age || !answers.employmentStatus
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
            
            {/* Step 2: Education & Skills */}
            {step === 2 && (
              <>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Education & Skills
                </h1>
                <p className="mb-6 text-gray-700">
                  Tell us about your educational background and current skill level.
                </p>
                
                <div className="space-y-6">
                  {/* Education */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Highest level of education</label>
                    <div className="space-y-2">
                      {['no-qualifications', 'gcse', 'a-level', 'degree', 'postgraduate'].map(edu => (
                        <button
                          key={edu}
                          onClick={() => handleAnswer('education', edu)}
                          className={`w-full text-left px-4 py-3 rounded-lg border ${
                            answers.education === edu 
                              ? 'bg-blue-50 border-blue-300 text-blue-700' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {edu === 'no-qualifications' ? 'No formal qualifications' : 
                           edu === 'gcse' ? 'GCSEs or equivalent' : 
                           edu === 'a-level' ? 'A-Levels or equivalent' : 
                           edu === 'degree' ? 'University degree' : 'Postgraduate qualification'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skill level */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Digital skill level</label>
                    <div className="space-y-2">
                      {['beginner', 'intermediate', 'advanced'].map(level => (
                        <button
                          key={level}
                          onClick={() => handleAnswer('skillLevel', level)}
                          className={`w-full text-left px-4 py-3 rounded-lg border ${
                            answers.skillLevel === level 
                              ? 'bg-blue-50 border-blue-300 text-blue-700' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {level === 'beginner' ? 'Beginner - Basic computer use' : 
                           level === 'intermediate' ? 'Intermediate - Comfortable with common software' : 
                           'Advanced - Technical skills and software proficiency'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!answers.education || !answers.skillLevel}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      !answers.education || !answers.skillLevel
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
            
            {/* Step 3: Career Interests */}
            {step === 3 && (
              <>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Career Interests
                </h1>
                <p className="mb-6 text-gray-700">
                  Select the sectors you're most interested in working in (select all that apply).
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['digital', 'business', 'healthcare', 'creative', 'engineering', 'hospitality', 'construction', 'education'].map(sector => (
                    <button
                      key={sector}
                      onClick={() => {
                        const currentInterests = answers.interests || [];
                        const updatedInterests = currentInterests.includes(sector)
                          ? currentInterests.filter((s: string) => s !== sector)
                          : [...currentInterests, sector];
                        handleAnswer('interests', updatedInterests);
                      }}
                      className={`px-4 py-3 rounded-lg border text-left ${
                        (answers.interests || []).includes(sector)
                          ? 'bg-blue-50 border-blue-300 text-blue-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {sector === 'digital' ? 'Digital & Tech' : 
                       sector === 'business' ? 'Business & Finance' : 
                       sector === 'healthcare' ? 'Healthcare' : 
                       sector === 'creative' ? 'Creative Industries' : 
                       sector === 'engineering' ? 'Engineering' : 
                       sector === 'hospitality' ? 'Hospitality' : 
                       sector === 'construction' ? 'Construction' : 'Education'}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!(answers.interests || []).length}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      !(answers.interests || []).length
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
            
            {/* Step 4: Barriers & Support Needs */}
            {step === 4 && (
              <>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Support Needs
                </h1>
                <p className="mb-6 text-gray-700">
                  What support would be most helpful for your career journey? (Select all that apply)
                </p>
                
                <div className="space-y-3">
                  {[
                    'cv-help', 'interview-skills', 'finding-opportunities', 
                    'training-courses', 'career-advice', 'work-experience', 
                    'confidence-building', 'accessibility-support'
                  ].map(need => (
                    <button
                      key={need}
                      onClick={() => {
                        const currentNeeds = answers.supportNeeds || [];
                        const updatedNeeds = currentNeeds.includes(need)
                          ? currentNeeds.filter((n: string) => n !== need)
                          : [...currentNeeds, need];
                        handleAnswer('supportNeeds', updatedNeeds);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg border ${
                        (answers.supportNeeds || []).includes(need)
                          ? 'bg-blue-50 border-blue-300 text-blue-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {need === 'cv-help' ? 'CV and application help' : 
                       need === 'interview-skills' ? 'Interview skills' : 
                       need === 'finding-opportunities' ? 'Finding job opportunities' : 
                       need === 'training-courses' ? 'Training courses' : 
                       need === 'career-advice' ? 'Career advice and guidance' : 
                       need === 'work-experience' ? 'Work experience or internships' : 
                       need === 'confidence-building' ? 'Confidence building' : 
                       'Accessibility support'}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!(answers.supportNeeds || []).length}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      !(answers.supportNeeds || []).length
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    See results
                  </button>
                </div>
              </>
            )}
            
            {/* Step 5: Results */}
            {step === 5 && results && (
              <>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Your Personalised Results
                </h1>
                <p className="mb-8 text-gray-700">
                  Based on your responses, we've created personalised recommendations for you.
                </p>
                
                {/* Support Programmes */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-blue-800">
                    Recommended Support Programmes
                  </h2>
                  
                  {results.supportProgrammes.length > 0 ? (
                    <div className="space-y-4">
                      {results.supportProgrammes.map(programme => (
                        <div key={programme.id} className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-700 mb-1">{programme.name}</h3>
                          <p className="text-gray-700 mb-3 text-sm">{programme.description}</p>
                          <Link 
                            href={programme.url}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Learn more →
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Based on your profile, we don't have specific support programmes to recommend. 
                      However, you may benefit from exploring our career resources.
                    </p>
                  )}
                </div>
                
                {/* Career Recommendations */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-blue-800">
                    Recommended Career Paths
                  </h2>
                  
                  {results.recommendedRoles.length > 0 ? (
                    <div className="space-y-3">
                      {results.recommendedRoles.map(role => {
                        const category = role.category;
                        const theme = categoryThemes[category as keyof typeof categoryThemes];
                        
                        return (
                          <Link 
                            key={role.slug}
                            href={`/pathways/${category}/roles/${role.slug}`}
                            className={`block p-4 rounded-lg bg-${theme?.color}-50 border border-${theme?.color}-100 hover:shadow-sm transition-shadow`}
                          >
                            <h3 className={`font-semibold text-${theme?.color}-700`}>{role.title}</h3>
                            <p className={`text-${theme?.color}-600 text-sm`}>
                              {category.charAt(0).toUpperCase() + category.slice(1)} sector
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      We couldn't find specific role matches based on your responses. 
                      Try exploring different sectors or adjusting your interests.
                    </p>
                  )}
                  
                  <div className="mt-4">
                    <Link 
                      href="/pathways"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Explore all career sectors →
                    </Link>
                  </div>
                </div>
                
                {/* Skills Development */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-blue-800">
                    Recommended Skills Development
                  </h2>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-indigo-700 mb-3">Skills to develop</h3>
                    <ul className="space-y-2">
                      {results.skillGaps.map(skill => (
                        <li key={skill} className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/bootcamps"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Explore skills bootcamps
                  </Link>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-8">
                  <h3 className="font-semibold text-gray-900 mb-2">What's next?</h3>
                  <p className="text-gray-700 mb-4">
                    Your results have been saved. You can return to this assessment at any time or explore
                    our resources to continue your career journey.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href="/employment-support"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Employment support
                    </Link>
                    <Link 
                      href="/pathways"
                      className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                      Career pathways
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 