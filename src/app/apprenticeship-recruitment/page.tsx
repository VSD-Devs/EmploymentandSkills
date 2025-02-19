import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Briefcase, PoundSterling, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ApprenticeshipRecruitmentPage() {
  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/apprenticeship-recruitment.jpg"
            alt="Apprenticeship recruitment and development"
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
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Apprenticeship Recruitment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Grow Your Team with<br className="hidden sm:block" /> Apprenticeships
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-6">
              Your comprehensive guide to recruiting and developing apprentices in South Yorkshire, with full funding support and expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#process"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
              >
                Start Recruiting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#funding"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Learn About Funding
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Apprenticeships?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apprenticeships offer a cost-effective way to develop skilled, loyal employees while accessing government funding and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PoundSterling className="h-6 w-6" />,
                title: "Government Funding",
                description: "Access apprenticeship levy funding to cover training costs, with additional incentives available."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Tailored Development",
                description: "Shape your apprentices' skills to match your business needs through structured training programmes."
              },
              {
                icon: <Briefcase className="h-6 w-6" />,
                title: "Increased Retention",
                description: "Build loyal team members who understand your business from the ground up."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-emerald-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Recruitment Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'll guide you through each step of recruiting an apprentice, from planning to onboarding.
            </p>
          </div>

          <div className="grid gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Meet with our team to discuss your needs and identify suitable apprenticeship programmes."
              },
              {
                step: "2",
                title: "Funding Assessment",
                description: "We'll help you understand available funding options and calculate potential costs."
              },
              {
                step: "3",
                title: "Programme Selection",
                description: "Choose from a range of apprenticeship standards that match your business requirements."
              },
              {
                step: "4",
                title: "Recruitment Support",
                description: "Get help with job descriptions, advertising, and selecting candidates."
              },
              {
                step: "5",
                title: "Training Provider Match",
                description: "Connect with quality-assured training providers in South Yorkshire."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex gap-6 items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-emerald-600">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Funding Section */}
      <div id="funding" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 mb-6">
                <PoundSterling className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-600">Funding Support</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apprenticeship Levy Funding</h2>
              <p className="text-lg text-gray-600 mb-8">
                Understanding your funding options is crucial. We'll help you navigate the apprenticeship levy and additional support available.
              </p>
              <div className="space-y-4">
                {[
                  "Full funding available for training costs",
                  "Additional incentives for hiring young apprentices",
                  "Support with wage costs and equipment",
                  "Guidance on levy transfers and sharing"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/apprenticeship-funding.jpg"
                alt="Apprenticeship funding and support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Apprenticeship Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you every step of the way. Get in touch to discuss your apprenticeship needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl text-gray-900 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-3 rounded-xl text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                View Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 