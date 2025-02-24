'use client'

import { Factory, ArrowRight, CheckCircle2, Quote, Building2, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Manufacturing pattern SVG component
const ManufacturingPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" width="100%" height="100%">
    <pattern id="manufacturing-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M20 0L0 10v20l20 10l20-10V10L20 0zm0 8l12 6v12l-12 6l-12-6V14l12-6z" fill="currentColor"/>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#manufacturing-pattern)"/>
  </svg>
);

// ... existing code ...
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-manufacturing.jpg"
            alt="Made Smarter - Digital transformation for manufacturing businesses in South Yorkshire"
            fill
            className="object-cover object-center object-[center_25%] brightness-50"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-amber-300 mb-4">
              <div className="p-1.5 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-400/20">
                <Factory className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Made Smarter</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Digital Transformation<br className="hidden sm:block" /> for Manufacturing
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Boost productivity, growth and sustainability in your manufacturing business through digital technology adoption, innovation and skills development.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-300 mb-1">50%</div>
                <div className="text-sm text-gray-300">Match Funding Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-300 mb-1">30%</div>
                <div className="text-sm text-gray-300">Average Productivity Boost</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-300 mb-1">155+</div>
                <div className="text-sm text-gray-300">Businesses Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-300 mb-1">£3M+</div>
                <div className="text-sm text-gray-300">Funding Delivered</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/made-smarter/digital-assessment"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-500 transition-colors"
              >
                Digital Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/made-smarter/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Get Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <div className="relative bg-gray-900 py-24">
        <ManufacturingPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-300 mb-4">
              <div className="p-1.5 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-400/20">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Eligibility</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Is Your Business Eligible?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Made Smarter support is available to manufacturing businesses that meet the following criteria:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Building2 className="h-8 w-8 text-amber-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Manufacturing Business</h3>
              <p className="text-gray-300">
                Your business must be primarily engaged in manufacturing activities within South Yorkshire.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Users className="h-8 w-8 text-amber-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">SME Status</h3>
              <p className="text-gray-300">
                Your business should be an SME with fewer than 250 employees and turnover under £50 million.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Trophy className="h-8 w-8 text-amber-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Growth Ambition</h3>
              <p className="text-gray-300">
                You should have clear ambitions to grow through digital technology adoption.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/made-smarter/eligibility-check"
              className="inline-flex items-center px-6 py-3 rounded-xl text-white bg-amber-600 hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl"
            >
              Check Your Eligibility
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative bg-gray-50 py-24">
        <div className="absolute inset-0">
          <ManufacturingPattern />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                <Trophy className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how manufacturers across South Yorkshire have transformed their businesses with Made Smarter support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/case-study-1.jpg"
                  alt="Advanced Engineering Ltd case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Engineering Ltd</h3>
                <p className="text-gray-600 mb-4">
                  30% productivity increase through robotics automation and digital twin technology.
                </p>
                <Link
                  href="/made-smarter/case-studies/advanced-engineering"
                  className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/case-study-2.jpg"
                  alt="Precision Components case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Components</h3>
                <p className="text-gray-600 mb-4">
                  Reduced waste by 25% with IoT sensors and predictive maintenance.
                </p>
                <Link
                  href="/made-smarter/case-studies/precision-components"
                  className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/case-study-3.jpg"
                  alt="Smart Manufacturing Ltd case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Manufacturing Ltd</h3>
                <p className="text-gray-600 mb-4">
                  40% energy cost reduction through smart factory implementation.
                </p>
                <Link
                  href="/made-smarter/case-studies/smart-manufacturing"
                  className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-white py-24">
        <div className="absolute inset-0">
          <ManufacturingPattern />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                <Quote className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Testimonials</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from manufacturers who have transformed their businesses with Made Smarter support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 rounded-xl p-8 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-200" />
              <p className="text-gray-700 mb-6 relative z-10">
                "Made Smarter's support was transformative for our business. The digital roadmap they helped us create gave us clear direction, and the funding made implementation possible. We've seen a 40% increase in productivity."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600">Operations Director, Advanced Engineering Ltd</div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-8 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-200" />
              <p className="text-gray-700 mb-6 relative z-10">
                "The expertise and guidance from Made Smarter were invaluable. They helped us identify the right technologies and supported us through the entire implementation process. Our efficiency has improved dramatically."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-2.jpg"
                    alt="Mark Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mark Thompson</div>
                  <div className="text-gray-600">CEO, Precision Components</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
// ... existing code ...
