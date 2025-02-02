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
    <div className="relative bg-gradient-to-b from-slate-50/50 via-blue-50/50 to-slate-50/50">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-16 overflow-hidden -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100/50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1 mb-6">
                    <Bell className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">Stay Connected</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Get Yorkshire Pathways Updates
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Subscribe to our newsletter for the latest updates on employment support, funded training and business opportunities across South Yorkshire.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex gap-3 text-sm text-gray-600">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Weekly curated resources</span>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-600">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>No spam, unsubscribe anytime</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                        aria-label="Email address"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 font-semibold group shadow-lg shadow-blue-500/25"
                      aria-label="Subscribe to newsletter"
                    >
                      Subscribe to Updates
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                  
                  {status === 'success' && (
                    <div className="mt-4 flex items-center gap-2 text-emerald-600">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Thank you for subscribing! We'll be in touch soon.</span>
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="mt-4 flex items-center gap-2 text-red-600">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                  
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 