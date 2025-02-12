'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Target, Users, MapPin } from 'lucide-react'
import Newsletter from './Newsletter'
import { OptimizedImage } from './OptimizedImage'

const Vision = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImage
            src="/images/oliver-coppard.jpg"
            alt="Oliver Coppard, South Yorkshire Mayor"
            fill
            priority
            className="object-cover opacity-90"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#111827]/60 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium">Mayor's Vision</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">
                  Transforming South Yorkshire's Future Together
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  South Yorkshire Mayor Oliver Coppard's vision for creating a unified platform that connects residents, businesses, and communities with opportunities for growth and development across our region.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors text-lg shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors text-lg border border-white/10 hover:border-white/20"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src="/images/oliver-coppard.jpg"
                    alt="Oliver Coppard, South Yorkshire Mayor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <p className="text-white font-medium mb-2">Oliver Coppard</p>
                    <p className="text-white/70 text-sm">South Yorkshire Mayor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative bg-gray-50">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 h-8 sm:h-16 overflow-hidden -translate-y-[99%]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full text-gray-50"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[460px] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/images/path.jpg"
                alt="Our mission in action - supporting career pathways"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-8 -right-12 bg-white rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 backdrop-blur-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Our Mission</div>
                    <div className="text-gray-600">Building a stronger South Yorkshire through skills</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <span className="text-sm font-medium tracking-wide uppercase">Our Purpose</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering South Yorkshire's Future</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We're dedicated to creating pathways to success for everyone in South Yorkshire, focusing on skills development, career opportunities, and inclusive growth.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Skills Development</h3>
                      <p className="text-gray-600">Providing access to quality training and education</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Regional Growth</h3>
                      <p className="text-gray-600">Supporting economic development across South Yorkshire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Community Impact</h3>
                      <p className="text-gray-600">Creating opportunities in Sheffield, Barnsley, Rotherham, and Doncaster</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              Our values guide everything we do, ensuring we deliver the best possible outcomes for South Yorkshire's communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-emerald-600" />,
                title: 'Inclusive Growth',
                description: 'Creating opportunities for everyone across South Yorkshire, regardless of background or circumstances.'
              },
              {
                icon: <Target className="h-8 w-8 text-emerald-600" />,
                title: 'Innovation',
                description: 'Embracing new ideas and approaches to solve regional challenges.'
              },
              {
                icon: <MapPin className="h-8 w-8 text-emerald-600" />,
                title: 'Local Focus',
                description: 'Understanding and meeting the unique needs of each South Yorkshire community.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default Vision 