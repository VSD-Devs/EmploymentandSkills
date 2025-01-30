import React from 'react';
import { ChevronRight } from 'lucide-react';

const YoungPeople = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <div className="relative bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Students in education and training"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">
              What's next after you leave school or college?
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Not everyone is sure about what they want to do when they leave school or college. That's ok, you're not alone. 
              It can be quite daunting understanding all your options and figuring out what's the right path for you.
              To help, you can do our career quiz or explore the options below:
            </p>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-500 transition-colors inline-flex items-center group shadow-lg">
              Take Career Quiz
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Going to sixth form or college */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
              alt="Students in sixth form"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Going to sixth form or college</h2>
              <p className="text-zinc-600 mb-6">
                There are many sixth forms or colleges in West Yorkshire to choose from.
                Find out about the different qualifications and courses available.
              </p>
              <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                Find out more
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Going to university */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
              alt="Students at university"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Going to university</h2>
              <p className="text-zinc-600 mb-6">
                Get the facts about university and higher education. Find out about courses, universities, and how to apply.
              </p>
              <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                Find out more
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Apprenticeships and T Levels */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
              alt="Apprentice working"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Apprenticeships and T Levels</h2>
              <p className="text-zinc-600 mb-6">
                Find out everything you need to know about apprenticeships and T Levels to decide if they're the right choice for you.
              </p>
              <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                Find out more
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Getting a job or volunteering */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
              alt="Young person volunteering"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Getting a job or volunteering</h2>
              <p className="text-zinc-600 mb-6">
                Feel prepared for your first steps into employment and learn how to find your first job opportunity.
              </p>
              <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                Find out more
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Make the most of the careers support available
          </h2>
          <p className="text-lg text-zinc-600 text-center mb-12 max-w-3xl mx-auto">
            You don't have to make big life decisions on your own. Get one-to-one advice from people who know all about careers, training opportunities and education. They can answer any questions you may have and help you really understand your options.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Careers Support */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Career advisor helping student"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Careers support</h3>
                <p className="text-zinc-600 mb-6">
                  Get one-to-one support from experts you can trust for finding opportunities.
                </p>
                <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                  Find out more
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* National Careers Service */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
              <div className="h-48 bg-[#e51b77] flex items-center justify-center p-8">
                <span className="text-white text-2xl font-bold text-center">National Careers Service</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">National Careers Service</h3>
                <p className="text-zinc-600 mb-6">
                  Access careers advice you can trust with free National Careers Service support.
                </p>
                <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                  Find out more
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Prince's Trust */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-200">
              <div className="h-48 bg-[#e0052b] flex items-center justify-center p-8">
                <span className="text-white text-2xl font-bold text-center">Prince's Trust</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Prince's Trust</h3>
                <p className="text-zinc-600 mb-6">
                  Access proven advice about your personal situation and how they can help.
                </p>
                <button className="text-emerald-600 font-medium inline-flex items-center group hover:text-emerald-500 transition-colors">
                  Find out more
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungPeople; 