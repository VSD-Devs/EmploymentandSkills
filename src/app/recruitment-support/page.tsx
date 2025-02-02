import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, BookOpen, Users, PlusCircle, ArrowRight, Briefcase } from 'lucide-react'

export default function RecruitmentSupportPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Shorter */}
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
            Find and Develop Your Perfect Team
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Access fully-funded training programmes and recruitment support to build your workforce in Yorkshire.
          </p>
        </div>
      </div>

      {/* Main Content - Grid Layout */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Apprenticeships Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Professional mentoring an apprentice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/20">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Apprenticeships</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Apprenticeship Levy Support</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Access full funding for training through the levy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Develop existing staff through higher-level apprenticeships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Get guidance on standards and assessment</span>
                  </li>
                </ul>
                <Link
                  href="/register-interest"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl w-full justify-center"
                >
                  Get Started
                  <PlusCircle className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Skills Bootcamps Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                  alt="Skills bootcamp training session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/20">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">Skills Bootcamps</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Fast-Track Training</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Digital, technical, and construction skills courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Flexible training around work schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Industry-recognised qualifications</span>
                  </li>
                </ul>
                <Link
                  href="/register-interest"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg hover:shadow-xl w-full justify-center"
                >
                  Learn More
                  <PlusCircle className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Post Vacancy Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Business team meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/20">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-white">Post Vacancy</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Advertise Positions</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reach qualified candidates across Yorkshire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Get matched with suitable candidates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Full recruitment process guidance</span>
                  </li>
                </ul>
                <Link
                  href="/post-vacancy"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl w-full justify-center"
                >
                  Post a Vacancy
                  <PlusCircle className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Banner */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help Choosing?</h2>
                <p className="text-gray-600">
                  Our recruitment specialists can guide you through the best options for your business.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 