import React from 'react';
import { BookOpen, Users, PoundSterling, BarChart } from 'lucide-react';

const TrainingProviders = () => {
  const benefits = [
    {
      title: 'Access to Funding',
      description: 'Connect with available funding streams and support for training delivery.',
      icon: PoundSterling
    },
    {
      title: 'Reach Learners',
      description: 'Promote your courses to individuals and businesses across South Yorkshire.',
      icon: Users
    },
    {
      title: 'Quality Framework',
      description: 'Access resources and support to maintain high-quality training delivery.',
      icon: BookOpen
    },
    {
      title: 'Performance Tracking',
      description: 'Monitor outcomes and impact through our reporting framework.',
      icon: BarChart
    }
  ];

  return (
    <div id="providers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Training Providers</h2>
          <p className="mt-4 text-xl text-gray-600">
            Partner with us to deliver high-quality training across South Yorkshire
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{benefit.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Become a Provider</h3>
              <p className="mt-4 text-lg text-gray-600">
                Join our network of quality-assured training providers
              </p>
            </div>
            <div className="mt-8">
              <div className="space-y-4">
                {[
                  'Access to funding opportunities',
                  'Marketing support and learner referrals',
                  'Quality assurance framework',
                  'Regular provider network meetings',
                  'Performance monitoring tools',
                  'Professional development opportunities'
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href="#register"
                  className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white shadow hover:bg-blue-700"
                >
                  Register Your Interest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProviders;