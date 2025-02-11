import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, BookOpen, Users, ArrowRight, Building } from 'lucide-react'

export default function RecruitmentSupportPage() {
  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/recruitment-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#111827]/80" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-emerald-600/30 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
              <Users className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium tracking-wide uppercase">Recruitment Support</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Build Your Perfect Team in South Yorkshire
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Access local authority support, fully-funded training programmes, and recruitment guidance to develop your workforce.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Support Options */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Apprenticeships Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 mb-6">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-600">Apprenticeships</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Apprenticeship Support</h2>
                <p className="text-gray-600 mb-6">Access guidance and funding to develop your workforce through apprenticeships, with support from your local authority.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Full funding available through the apprenticeship levy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Support with apprenticeship standards and assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Guidance on developing existing staff through higher-level apprenticeships</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Bootcamps Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 mb-6">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Skills Training</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fast-Track Training Programmes</h2>
                <p className="text-gray-600 mb-6">Connect with local training providers and access funded programmes to upskill your workforce quickly.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Digital, technical, and construction skills courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Flexible training schedules to suit your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Industry-recognised qualifications and certifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local Authority Support Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Local Authority Support</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each local authority in South Yorkshire offers dedicated support to help businesses with recruitment and workforce development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Sheffield',
                  link: 'https://www.sheffield.gov.uk/business',
                },
                {
                  name: 'Rotherham',
                  link: 'https://www.rotherham.gov.uk/business',
                },
                {
                  name: 'Doncaster',
                  link: 'https://www.doncaster.gov.uk/business',
                },
                {
                  name: 'Barnsley',
                  link: 'https://www.barnsley.gov.uk/business',
                }
              ].map((authority) => (
                <Link
                  key={authority.name}
                  href={authority.link}
                  className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                      <Building className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{authority.name}</h3>
                      <p className="text-sm text-gray-600">Contact your local team</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact your local authority's business support team to discuss your recruitment needs and discover available funding opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl text-gray-900 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 