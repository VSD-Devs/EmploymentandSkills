import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Briefcase, GraduationCap, BookOpen, MapPin, PoundSterling, TrendingUp, Users, Clock, Brain, Target, Lightbulb, CheckCircle2, Star, Sparkles, ArrowRight, Rocket, Zap } from 'lucide-react';
import { careerProfiles, quizQuestions } from '../data/careerQuizData';
import CareerCard from '../components/CareerCard';
import SkillCard from '../components/SkillCard';

const CareerQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Add scroll restoration on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Accessibility - Ensure screen readers announce question changes
  useEffect(() => {
    if (!isWelcomeScreen && !showResults) {
      const questionAnnouncement = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
      document.title = `Career Quiz - ${questionAnnouncement}`;
    }
  }, [currentQuestion, isWelcomeScreen, showResults]);

  // Update the scroll management useEffect
  useEffect(() => {
    if (!isWelcomeScreen || showResults) {
      window.scrollTo(0, 0);
    }
  }, [isWelcomeScreen, showResults]);

  const handleAnswer = (questionId: number, trait: string) => {
    setSelectedAnswer(trait);
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, [questionId]: trait }));
      setSelectedAnswer(null);
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        window.scrollTo(0, 0);
      } else {
        setShowResults(true);
        window.scrollTo(0, 0);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      window.scrollTo(0, 0);
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

  if (isWelcomeScreen) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 text-base font-medium">Yorkshire Careers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                Discover Your Career Path in Yorkshire
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Get personalised career recommendations matched to local opportunities. Our quiz helps you explore careers that align with your skills, values, and aspirations in South Yorkshire.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    setIsWelcomeScreen(false);
                  }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-emerald-700 transition-all inline-flex items-center justify-center group shadow-lg shadow-emerald-200"
                >
                  Start Quiz
                  <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center space-x-3 text-zinc-600">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span className="text-base">Quick 5-minute assessment</span>
                </div>
              </div>
            </div>

            {/* Right Content - Quiz Preview */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 shadow-xl shadow-emerald-100">
              <div className="flex items-start space-x-6 mb-8">
                <div className="bg-emerald-500/30 rounded-2xl p-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">What You'll Discover</h2>
                  <p className="text-lg text-emerald-100 leading-relaxed">
                    Uncover career paths that match your potential, with direct connections to local opportunities and learning resources.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center space-x-4 mb-3">
                    <MapPin className="h-6 w-6 text-white" />
                    <h3 className="text-lg font-semibold text-white">Local Focus</h3>
                  </div>
                  <p className="text-emerald-100">Yorkshire-based opportunities and employers</p>
                </div>
                <div className="bg-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center space-x-4 mb-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                    <h3 className="text-lg font-semibold text-white">Clear Path</h3>
                  </div>
                  <p className="text-emerald-100">Training and progression routes</p>
                </div>
              </div>

              <div className="bg-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <p className="text-white font-medium">Personalised career matches</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <p className="text-white font-medium">Salary insights and demand</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <p className="text-white font-medium">Skills development guidance</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <p className="text-white font-medium">Local networking opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const dominantTraits = calculateDominantTraits();
    const primaryTrait = dominantTraits[0];
    const profile = careerProfiles[primaryTrait];

    if (!profile) {
      return (
        <div className="min-h-screen bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-zinc-900 mb-4">Oops! Something went wrong</h1>
            <p className="text-lg text-zinc-600 mb-8">We couldn't generate your results. Please try again.</p>
            <button 
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
              }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Retake Quiz</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 text-base font-medium">Your Results</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Your Career Profile</h1>
              <p className="text-xl text-zinc-600">{profile.description}</p>
            </div>

            {/* Career Matches */}
            {profile.careers.map((career, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden">
                <div className="p-8 md:p-10">
                  {/* Career Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 rounded-2xl p-4 flex-shrink-0">
                        <Briefcase className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">{career.title}</h2>
                        <p className="text-lg text-zinc-600">{career.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="bg-emerald-50 px-5 py-3 rounded-xl">
                        <div className="flex items-center space-x-2">
                          <PoundSterling className="h-5 w-5 text-emerald-600" />
                          <span className="font-semibold text-lg text-emerald-900">{career.salary}</span>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-medium">{career.demand}</span>
                    </div>
                  </div>

                  {/* Career Details Grid */}
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Career Progression */}
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
                          Career Progression
                        </h3>
                        <div className="bg-zinc-50 rounded-2xl p-6 space-y-4">
                          <div className="relative">
                            <div className="absolute left-2.5 top-3 bottom-3 w-px bg-emerald-200"></div>
                            <div className="space-y-6">
                              <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-500"></div>
                                <div>
                                  <h4 className="font-medium text-emerald-900">Entry Level</h4>
                                  <p className="text-zinc-600">{career.progression.entry}</p>
                                </div>
                              </div>
                              <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-500"></div>
                                <div>
                                  <h4 className="font-medium text-emerald-900">Mid Level</h4>
                                  <p className="text-zinc-600">{career.progression.mid}</p>
                                </div>
                              </div>
                              <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-500"></div>
                                <div>
                                  <h4 className="font-medium text-emerald-900">Senior Level</h4>
                                  <p className="text-zinc-600">{career.progression.senior}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-zinc-200">
                            <span className="text-sm text-emerald-600 font-medium">{career.progression.timeline}</span>
                          </div>
                        </div>
                      </div>

                      {/* Required Skills */}
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center">
                          <GraduationCap className="h-5 w-5 text-emerald-600 mr-2" />
                          Key Skills
                        </h3>
                        <div className="space-y-4">
                          {profile.skills.map((skill, idx) => (
                            <div key={idx} className="bg-zinc-50 rounded-2xl p-6">
                              <h4 className="font-medium text-emerald-900 mb-2">{skill.name}</h4>
                              <p className="text-zinc-600 mb-4">{skill.description}</p>
                              <div className="space-y-2">
                                {skill.learning_resources.map((resource, idx) => (
                                  <div key={idx} className="flex items-center space-x-2 text-emerald-600">
                                    <BookOpen className="h-4 w-4" />
                                    <span className="text-sm">{resource}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Local Opportunities */}
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center">
                          <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                          Local Opportunities
                        </h3>
                        <div className="bg-zinc-50 rounded-2xl p-6 space-y-6">
                          <div>
                            <h4 className="font-medium text-emerald-900 mb-3">Top Employers</h4>
                            <div className="space-y-2">
                              {career.localOpportunities.employers.map((employer, idx) => (
                                <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                                  <Briefcase className="h-5 w-5 text-emerald-600" />
                                  <span className="text-zinc-600">{employer}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-emerald-900 mb-3">Relevant Courses</h4>
                            <div className="space-y-3">
                              {career.localOpportunities.courses.map((course, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl">
                                  <div className="flex items-start space-x-3">
                                    <GraduationCap className="h-5 w-5 text-emerald-600 mt-1" />
                                    <div>
                                      <h5 className="font-medium text-zinc-900">{course.type}</h5>
                                      <p className="text-sm text-zinc-600">{course.provider}</p>
                                      <div className="flex items-center space-x-2 mt-1 text-sm text-emerald-600">
                                        <MapPin className="h-4 w-4" />
                                        <span>{course.location}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-emerald-900 mb-3">Networking</h4>
                            <div className="space-y-2">
                              {career.localOpportunities.networking.map((network, idx) => (
                                <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                                  <Users className="h-5 w-5 text-emerald-600" />
                                  <span className="text-zinc-600">{network}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Projects */}
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center">
                          <Target className="h-5 w-5 text-emerald-600 mr-2" />
                          Example Projects
                        </h3>
                        <div className="bg-zinc-50 rounded-2xl p-6">
                          <div className="space-y-3">
                            {career.keyProjects.map((project, idx) => (
                              <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-zinc-600">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all inline-flex items-center justify-center group shadow-lg shadow-emerald-200"
              >
                <span>Retake Quiz</span>
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  if (!isWelcomeScreen && !showResults) {
    return (
      <div className="min-h-screen bg-white" id="quiz-section">
        <div className="max-w-4xl mx-auto py-16 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-emerald-50 px-6 py-3 rounded-full mb-8">
              <Brain className="h-6 w-6 text-emerald-600" />
              <span className="text-lg font-medium text-emerald-700">Question {currentQuestion + 1} of {quizQuestions.length}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-2">
              <div className="h-2 bg-emerald-100 rounded-full">
                <div 
                  className="h-2 bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm text-emerald-600 font-medium">
              {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
            </span>
          </div>

          {/* Question Card */}
          <div className="bg-emerald-600 rounded-3xl p-10 shadow-xl mb-8">
            <div className="space-y-8">
              {/* Question */}
              <div>
                <h1 className="text-3xl font-bold text-white mb-4" role="heading">
                  {question.question}
                </h1>
                <p className="text-lg text-emerald-100">Select your answer:</p>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(question.id, option.trait)}
                    className={`w-full group relative ${
                      selectedAnswer === option.trait
                        ? 'bg-white'
                        : 'bg-white/90 hover:bg-white'
                    } p-6 rounded-xl transition-all duration-300 border-2 ${
                      selectedAnswer === option.trait
                        ? 'border-emerald-300 shadow-lg'
                        : 'border-transparent'
                    }`}
                    role="radio"
                    aria-checked={selectedAnswer === option.trait}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          selectedAnswer === option.trait 
                            ? 'bg-emerald-100' 
                            : 'bg-emerald-50'
                        }`}>
                          <Star className={`h-5 w-5 ${
                            selectedAnswer === option.trait 
                              ? 'text-emerald-600' 
                              : 'text-emerald-500'
                          }`} />
                        </div>
                        <span className="text-lg font-medium text-emerald-900">
                          {option.text}
                        </span>
                      </div>
                      <ArrowRight className={`h-5 w-5 transition-all duration-300 ${
                        selectedAnswer === option.trait 
                          ? 'text-emerald-600 translate-x-1' 
                          : 'text-emerald-400 group-hover:translate-x-1'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-emerald-500">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  currentQuestion === 0
                    ? 'text-emerald-300 cursor-not-allowed'
                    : 'text-white hover:bg-emerald-500'
                }`}
                aria-label="Previous question"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>
            </div>
          </div>

          {/* Tips Box */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-xl p-2.5">
                <Lightbulb className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium text-emerald-900 text-lg mb-2">Pro Tip</h3>
                <p className="text-emerald-700">
                  Take your time to consider each option. Your honest answers will help us provide the most accurate career recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CareerQuizPage; 
