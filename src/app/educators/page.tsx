import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  GraduationCap, 
  Building2, 
  Users, 
  BookOpen,
  ArrowRight,
  BarChart3,
  Network,
  CheckCircle2,
  FileText
} from 'lucide-react'

export default function EducatorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0">
          <Image
            src="/images/educator-hero.jpg"
            alt="Education and training facilities in South Yorkshire"
            fill
            className="object-cover object-center brightness-[0.7] saturate-[0.85]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111827]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <FileText className="h-4 w-4 text-blue-300" />
                <span className="text-sm font-medium text-blue-100">South Yorkshire Education Hub</span>
              </div>

              {/* Main Content */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Shaping South Yorkshire's<br className="hidden sm:block" /> Future Workforce
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Join us in building a skilled workforce for tomorrow. Access resources, funding, and support tailored to your role in education.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/educators/training-providers"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors group"
                >
                  Training Providers
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/educators/schools"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20 group"
                >
                  Schools & Colleges
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { number: "250+", label: "Education Partners" },
                  { number: "£45M+", label: "Annual Funding" },
                  { number: "20k+", label: "Learners Supported" }
                ].map((stat, index) => (
                  <div key={index} className="text-center px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a network of education providers helping to shape South Yorkshire's future workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Innovation Support",
                description: "Access cutting-edge teaching resources and methodologies"
              },
              {
                icon: BarChart3,
                title: "Growth Opportunities",
                description: "Expand your reach with funded training programmes"
              },
              {
                icon: Network,
                title: "Industry Connections",
                description: "Connect with leading employers in South Yorkshire"
              },
              {
                icon: Users,
                title: "Community Impact",
                description: "Make a real difference in learners' lives"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="relative p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    <feature.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Skills Strategy</h2>
              <p className="text-lg text-gray-600 mb-8">
                Building a stronger, more inclusive skills system that drives economic growth and creates opportunities for all across South Yorkshire.
              </p>
              <div className="space-y-6">
                {[
                  "Young people equipped with skills for the future",
                  "Adults accessing retraining and upskilling opportunities",
                  "Employers at the heart of the skills system",
                  "Data-driven decision making and evaluation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "250+", label: "Education Partners" },
                  { number: "£45M+", label: "Annual Funding" },
                  { number: "20k+", label: "Learners Supported" },
                  { number: "95%", label: "Partner Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 