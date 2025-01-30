import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerQuiz = () => {
  return (
    <section className="bg-emerald-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-500 px-4 py-2 rounded-full mb-4">
              <span className="text-emerald-50 text-base font-medium">Career Discovery</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Find Your Perfect Career Path in Yorkshire
            </h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Take our interactive career quiz to discover personalised recommendations based on your interests and skills. Connect with local opportunities across South Yorkshire.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right hidden md:block">
              <div className="text-emerald-200 text-base mb-1">Quick Assessment</div>
              <div className="font-medium text-white text-lg">5 minutes to complete</div>
            </div>
            <Link 
              to="/career-quiz"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-50 transition-all inline-flex items-center group whitespace-nowrap"
            >
              Take Career Quiz
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerQuiz;