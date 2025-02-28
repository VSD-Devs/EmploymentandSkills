import React from 'react';
import Link from 'next/link';

export default function BootcampsSection() {
  return (
    <section id="bootcamps" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Skills Bootcamps
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
          <div className="max-w-3xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Fast-track your career with skills bootcamps
            </h3>
            <p className="mb-6 text-gray-700">
              Our skills bootcamps offer intensive training in high-demand skills. 
              Complete a bootcamp in 8-16 weeks and get connected with local employers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Digital Skills</h4>
                <p className="text-sm text-gray-600">Web development, data analysis, cybersecurity</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Technical Skills</h4>
                <p className="text-sm text-gray-600">Engineering, manufacturing, construction</p>
              </div>
            </div>
            
            <Link 
              href="/bootcamps" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View all bootcamps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 