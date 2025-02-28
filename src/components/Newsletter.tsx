'use client'

import { useState } from 'react';
import { Mail, ArrowRight, Bell } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your newsletter service
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 mb-3">
              <Bell className="h-4 w-4 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">Stay informed</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Get South Yorkshire opportunities in your inbox
            </h2>
            <p className="text-gray-600 text-base">
              Receive personalised career updates, local events, and exclusive resources—all tailored to help you thrive in our region.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 min-w-[280px]">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  required
                  aria-label="Email address"
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium shadow-sm whitespace-nowrap"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Thank you for subscribing to our updates!</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 text-red-600 text-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 