import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="overview" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find your career pathway
          </h1>
          <p className="text-lg mb-6">
            Explore career sectors, skills bootcamps and resources to help you find your perfect role.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="#sectors" 
              className="bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Explore sectors
            </Link>
            <Link 
              href="/skills-assessment"
              className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Take skills assessment
            </Link>
          </div>
          
          <div className="mt-4 p-5 bg-blue-800/40 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Not sure which career path is right for you?</h3>
            <p className="mb-3">Take our skills assessment to discover suitable career paths and support programmes tailored to your needs.</p>
            <Link
              href="/skills-assessment"
              className="inline-block bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Start skills assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 