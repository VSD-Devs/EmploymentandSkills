import React from 'react';
import { ChevronRight, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerQuiz = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              <span className="text-emerald-700 text-base font-medium">Career Discovery</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              Find Your Perfect Career Path in Yorkshire
            </h2>
            
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              Take our interactive career quiz to discover personalised recommendations based on your interests and skills. Connect with local opportunities across South Yorkshire.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Link 
                to="/career-quiz"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-emerald-700 transition-all inline-flex items-center justify-center group shadow-lg shadow-emerald-200"
              >
                Start Career Quiz
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center space-x-3 text-zinc-600">
                <Clock className="h-5 w-5 text-emerald-600" />
                <span className="text-base">Takes only 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Content - Quiz Preview */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 shadow-xl shadow-emerald-100">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Sample Question</h3>
                <p className="text-emerald-50 mb-6">When faced with a complex problem, what's your natural approach?</p>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-white cursor-pointer hover:bg-white/20 transition-colors">
                    Break it down into smaller parts
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-white cursor-pointer hover:bg-white/20 transition-colors">
                    Brainstorm creative solutions
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <h4 className="font-medium text-white mb-2">Personalised</h4>
                  <p className="text-sm text-emerald-50">Tailored career recommendations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <h4 className="font-medium text-white mb-2">Local Focus</h4>
                  <p className="text-sm text-emerald-50">Yorkshire opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerQuiz;