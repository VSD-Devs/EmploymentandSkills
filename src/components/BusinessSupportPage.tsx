'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, LineChart, Lightbulb, Users, Landmark, ArrowRight, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Newsletter from '@/components/Newsletter'

const BusinessSupportPage = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Business Support', href: '/business' },
        { label: 'Business Growth', href: '/business-support' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
            alt="Business growth support and advisory services in South Yorkshire"
            fill
            className="object-cover object-center object-[center_25%] brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-purple-300 mb-4">
              <div className="p-1.5 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-400/20">
                <LineChart className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Business Growth</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Business Support to<br className="hidden sm:block" /> Grow Your Business
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Access practical advice, funding opportunities, and specialist support to help your South Yorkshire business thrive and expand.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/made-smarter"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors"
              >
                Made Smarter Programme
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#advisors"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Local Growth Advisors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Practical Support for Yorkshire Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you're looking to adopt new technologies, expand your operations, or access funding, our team of experts can provide the guidance and support you need to achieve your growth ambitions.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-purple-50 rounded-xl p-8 shadow-sm border border-purple-100">
              <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Adopt digital technologies to improve productivity, efficiency and resilience with the Made Smarter programme.
              </p>
              <Link href="/made-smarter" className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 shadow-sm border border-purple-100">
              <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Advisors</h3>
              <p className="text-gray-600 mb-4">
                Connect with dedicated growth advisors based in your local authority who understand the specific needs of your area.
              </p>
              <Link href="#advisors" className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700">
                Find your advisor <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 shadow-sm border border-purple-100">
              <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Funding & Grants</h3>
              <p className="text-gray-600 mb-4">
                Discover and access government grants and funding opportunities to support your business growth plans.
              </p>
              <Link href="#grants" className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700">
                Explore funding <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Made Smarter Section */}
      <div id="made-smarter" className="bg-gray-50 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-50 to-white opacity-20 blur-3xl" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-50 to-white opacity-20 blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-purple-500 bg-purple-50 mb-6">
                <Lightbulb className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Made Smarter</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Transformation for Manufacturers</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Made Smarter helps manufacturing businesses adopt digital technologies to boost productivity, growth, and sustainability. The programme offers:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Free impartial advice and expert guidance on digital transformation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Digital roadmapping to identify the right technologies for your business</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Funding support for digital technology projects (up to 50% match-funded)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Leadership and skills development programmes</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  The programme is designed for SME manufacturers looking to adopt technologies such as AI, IoT, robotics, additive manufacturing, and more.
                </p>
              </div>
              <Link
                href="/made-smarter"
                className="inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors bg-purple-600 hover:bg-purple-500 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Digital manufacturing technology in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-100 text-purple-600">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Made Smarter</div>
                    <div className="text-gray-600">Boosting productivity through technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Growth Advisors Section */}
      <div id="advisors" className="bg-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-50 to-white opacity-20 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-50 to-white opacity-20 blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Business advisor meeting with client"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-8 -left-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform translate-x-20 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-100 text-purple-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Local Advisors</div>
                    <div className="text-gray-600">Tailored support for your area</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-purple-500 bg-purple-50 mb-6">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Growth Advisors</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Authority Growth Advisors</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Our network of dedicated growth advisors are based in local authorities across South Yorkshire, providing tailored support to businesses in their areas.
                </p>
                
                <div className="mt-6 space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sheffield</h3>
                    <p className="text-gray-600 mb-3">
                      Sheffield City Council's Business Growth Team offers free, impartial advice to help businesses of all sizes start, grow and thrive in Sheffield.
                    </p>
                    <Link 
                      href="https://www.sheffield.gov.uk/business-economy/business-support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700"
                    >
                      Contact Sheffield advisors <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Barnsley</h3>
                    <p className="text-gray-600 mb-3">
                      Barnsley's Enterprising Barnsley team provides specialist support to help local businesses start, develop and expand.
                    </p>
                    <Link 
                      href="https://www.enterprisingbarnsley.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700"
                    >
                      Contact Barnsley advisors <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Doncaster</h3>
                    <p className="text-gray-600 mb-3">
                      Business Doncaster offers a range of services to help businesses start, grow and relocate to Doncaster.
                    </p>
                    <Link 
                      href="https://businessdoncaster.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700"
                    >
                      Contact Doncaster advisors <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rotherham</h3>
                    <p className="text-gray-600 mb-3">
                      RiDO (Rotherham Investment & Development Office) provides comprehensive business support services for Rotherham businesses.
                    </p>
                    <Link 
                      href="https://www.rido.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700"
                    >
                      Contact Rotherham advisors <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Grants Section */}
      <div id="grants" className="bg-gray-50 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-50 to-white opacity-20 blur-3xl" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-50 to-white opacity-20 blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-purple-500 bg-purple-50 mb-6">
                <Landmark className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Funding Opportunities</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Grants and Funding</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  The UK Government offers a wide range of grants and funding opportunities to support business growth, innovation, and development. These include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Innovation grants for research and development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Export and international trade support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Green technology and sustainability funding</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Skills development and training grants</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Regional growth initiatives</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Our advisors can help you navigate the funding landscape and identify the most suitable opportunities for your business. We can also provide support with application processes to increase your chances of success.
                </p>
              </div>
              <Link
                href="https://www.find-government-grants.service.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors bg-purple-600 hover:bg-purple-500 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&q=80"
                alt="Financial growth and funding concept"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-100 text-purple-600">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl mb-1">Government Grants</div>
                    <div className="text-gray-600">Funding to fuel your growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to grow your business?
                </h2>
                <p className="mt-4 text-lg text-purple-100 max-w-3xl">
                  Our team of experts is ready to help you navigate the support landscape and access the resources you need to achieve your growth ambitions.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                  >
                    Get in touch
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    href="/events"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800"
                  >
                    Upcoming events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default BusinessSupportPage 