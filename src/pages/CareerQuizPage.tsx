import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Briefcase, GraduationCap } from 'lucide-react';
import { careerProfiles, quizQuestions } from '../data/careerQuizData';
import CareerCard from '../components/CareerCard';
import SkillCard from '../components/SkillCard';

const CareerQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, trait: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: trait }));
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateDominantTraits = () => {
    const traitCounts: Record<string, number> = {};
    Object.values(answers).forEach(trait => {
      traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });
    return Object.entries(traitCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)
      .map(([trait]) => trait);
  };

  if (showResults) {
    const dominantTraits = calculateDominantTraits();
    const primaryTrait = dominantTraits[0];
    const profile = careerProfiles[primaryTrait];

    return (
      <div className="min-h-screen bg-zinc-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg inline-flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-emerald-700 font-medium">Results Ready</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-zinc-900">Your Career Profile</h1>
              <p className="text-zinc-600">{profile.description}</p>
            </div>

            <div className="grid gap-4">
              {/* Career Cards */}
              <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Briefcase className="h-5 w-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-zinc-900">Recommended Careers</h2>
                </div>
                <div className="space-y-2">
                  {profile.careers.map((career, idx) => (
                    <CareerCard key={idx} career={career} />
                  ))}
                </div>
              </div>

              {/* Skills Cards */}
              <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-zinc-900">Key Skills</h2>
                </div>
                <div className="space-y-2">
                  {profile.skills.map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors inline-flex items-center space-x-2"
              >
                <span>Retake Quiz</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  return (
    <div className="min-h-screen bg-zinc-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-zinc-600">
                <span>Question {currentQuestion + 1}/{quizQuestions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-1.5">
                <div 
                  className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div>
              <h1 className="text-xl font-bold text-zinc-900 mb-4">{question.question}</h1>
              <div className="space-y-2">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(question.id, option.trait)}
                    className="w-full text-left p-3 rounded-lg border-2 border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-700 group-hover:text-emerald-700">{option.text}</span>
                      <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded transition-colors ${
                  currentQuestion === 0
                    ? 'text-zinc-300 cursor-not-allowed'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>
              <div className="flex space-x-1">
                {quizQuestions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      idx === currentQuestion ? 'bg-emerald-600' : 'bg-zinc-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuizPage; 
