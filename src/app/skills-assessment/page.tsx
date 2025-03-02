'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import dynamic from 'next/dynamic';
import { ChevronRight, Compass } from 'lucide-react';
import Link from 'next/link';

// Dynamically import the StandaloneCareerQuiz component to improve initial page load
const StandaloneCareerQuiz = dynamic(() => import('@/components/StandaloneCareerQuiz'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading assessment...</div>,
  ssr: false // Disable server-side rendering for this component as it uses localStorage
});

export default function SkillsAssessmentPage() {
  const [hasStarted, setHasStarted] = useState(false);
  
  return (
    <main className="min-h-screen bg-white">
      {!hasStarted ? (
        <div>
          {/* Hero section */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <Breadcrumbs 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Skills Assessment', href: '/skills-assessment' }
                ]}
                className="text-blue-100 mb-8"
              />
              
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Career path
                </h1>
                <p className="text-xl mb-8 text-blue-50">
                  Our skills assessment will help you identify suitable career paths based on your unique strengths, interests and preferences.
                </p>
                <button
                  onClick={() => setHasStarted(true)}
                  className="inline-flex items-center text-lg text-blue-800 bg-white px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg font-medium"
                >
                  Start Skills Assessment
                  <ChevronRight className="ml-2 h-6 w-6" />
                </button>
              </div>
            </div>
          </section>
          
          {/* Info section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">About the Skills Assessment</h2>
                    <p className="text-zinc-600">Discover how our assessment works and what you'll gain</p>
                  </div>
                </div>
                
                <div className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 mb-3">How it works</h3>
                      <p className="text-zinc-600 mb-4">
                        Our comprehensive skills assessment takes approximately 5 minutes to complete and consists of two stages:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">1</div>
                          <div className="text-zinc-600">
                            <strong className="text-zinc-800">Initial profiling</strong> - We'll ask about your preferences, working style and interests
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">2</div>
                          <div className="text-zinc-600">
                            <strong className="text-zinc-800">Detailed assessment</strong> - We'll refine your profile with more specific questions about your skills and career goals
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 mb-3">What you'll receive</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div className="text-zinc-600">Personalised career recommendations based on your profile</div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div className="text-zinc-600">Insights into your key professional traits and strengths</div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div className="text-zinc-600">Matching to suitable employment support programmes</div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <div className="text-zinc-600">Recommended learning and development opportunities</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 md:p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-3">Privacy commitment</h3>
                    <p className="text-zinc-600 mb-4">
                      We understand the importance of your data privacy. All information collected in this assessment:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <div className="text-zinc-600">Is only used to provide your personalised career recommendations</div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <div className="text-zinc-600">Can be anonymously saved in your browser for future sessions</div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <div className="text-zinc-600">Is never shared with third parties without your explicit consent</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center pt-6">
                    <button
                      onClick={() => setHasStarted(true)}
                      className="inline-flex items-center text-lg text-white bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-500 transition-colors shadow-lg font-medium"
                    >
                      Start Skills Assessment
                      <ChevronRight className="ml-2 h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <StandaloneCareerQuiz onReturn={() => setHasStarted(false)} />
      )}
    </main>
  );
} 