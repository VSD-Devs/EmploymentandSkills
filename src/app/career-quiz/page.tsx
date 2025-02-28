'use client';

import { useState } from 'react';
import CareerQuizResults from '@/components/CareerQuizResults';
import { quizQuestions, careerProfiles } from '@/data/careerQuizData';
import type { CareerProfile } from '@/data/careerQuizData';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

interface QuizOption {
  id: string;
  text: string;
  paths: string[];
}

const getPathwaySlug = (sector: string): string => {
  const pathwayMap: { [key: string]: string } = {
    'Technology': 'digital-tech',
    'Healthcare': 'health-care',
    'Engineering': 'engineering',
    'Business': 'business',
    'Creative': 'creative',
    'Education': 'education',
    'Construction': 'construction',
    'Manufacturing': 'manufacturing'
  };
  return pathwayMap[sector] || 'digital-tech'; // Default to digital-tech if no match
};

export default function CareerQuizPage() {
  const [currentStage, setCurrentStage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<CareerProfile | null>(null);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion === quizQuestions[currentStage - 1].options.length - 1) {
      if (currentStage === 2) {
        setRecommendations(getCareerProfile(newAnswers));
      } else {
        setCurrentStage(2);
        setCurrentQuestion(0);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getCareerProfile = (userAnswers: string[]): CareerProfile => {
    // Count the paths that match each profile
    const profileScores: { [key: string]: number } = {};
    
    // Get all paths from answers
    const selectedPaths = userAnswers.flatMap(answerId => {
      const question = quizQuestions[currentStage - 1];
      const option = question.options.find(opt => opt.id === answerId);
      return option ? option.paths : [];
    });

    // Score each profile based on matching sectors
    Object.entries(careerProfiles).forEach(([profile, data]) => {
      const matchingPaths = selectedPaths.filter(path => 
        data.recommendedSectors.includes(path)
      );
      profileScores[profile] = matchingPaths.length;
    });

    // Find the profile with the highest score
    const bestMatch = Object.entries(profileScores)
      .sort(([,a], [,b]) => b - a)[0][0];

    return careerProfiles[bestMatch];
  };

  const handleRetake = () => {
    setCurrentStage(1);
    setCurrentQuestion(0);
    setAnswers([]);
    setRecommendations(null);
  };

  const currentQuestions = quizQuestions[currentStage - 1];
  const question = currentQuestions;

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Career Quiz', href: '/career-quiz' },
          ]} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {recommendations ? (
          <CareerQuizResults
            recommendations={recommendations}
            isDetailedAnalysis={currentStage === 2}
            onRetake={handleRetake}
          />
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-zinc-900 mb-4">
                Career Path Discovery Quiz
              </h1>
              <p className="text-lg text-zinc-600">
                {currentStage === 1
                  ? 'Discover your ideal career path by answering a few questions about your interests and preferences.'
                  : 'Let\'s dive deeper into your professional strengths and aspirations.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-zinc-500">
                    Stage {currentStage} of 2
                  </span>
                  <span className="text-sm font-medium text-zinc-500">
                    Question {currentQuestion + 1} of {question.options.length}
                  </span>
                </div>
                <div className="w-full bg-zinc-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / question.options.length) * 100}%`
                    }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-zinc-900 mb-8">
                {question.question}
              </h2>

              <div className="grid gap-4">
                {question.options.map((option: QuizOption) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                  >
                    <span className="block text-lg font-medium text-zinc-900">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 