import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  GraduationCap, 
  Building2, 
  Users, 
  Target,
  BookOpen,
  ArrowRight,
  Lightbulb,
  BarChart3,
  Network
} from 'lucide-react'

export default function EducatorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/educator-hero.jpg"
            alt="Education and training facilities in South Yorkshire"
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
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Education Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Shaping South Yorkshire's Future Workforce
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              Join us in building a skilled workforce for tomorrow. Access resources, funding, and support tailored to your role in education.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/educators/training-providers"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
              >
                Training Providers
                <Users className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/educators/schools"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Schools & Colleges
                <Building2 className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a network of education providers helping to shape South Yorkshire's future workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation Support",
                description: "Access cutting-edge teaching resources and methodologies",
                color: "emerald"
              },
              {
                icon: BarChart3,
                title: "Growth Opportunities",
                description: "Expand your reach with funded training programmes",
                color: "blue"
              },
              {
                icon: Network,
                title: "Industry Connections",
                description: "Connect with leading employers in South Yorkshire",
                color: "purple"
              },
              {
                icon: Users,
                title: "Community Impact",
                description: "Make a real difference in learners' lives",
                color: "rose"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-${feature.color}-100 rounded-2xl transform transition-transform group-hover:scale-105`} />
                <div className="relative p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy Overview - Updated with better visuals */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Skills Strategy</h2>
              <p className="text-xl text-gray-600 mb-8">
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
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl transform -rotate-3" />
              <div className="relative bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "250+", label: "Education Partners" },
                    { number: "£45M+", label: "Annual Funding" },
                    { number: "20k+", label: "Learners Supported" },
                    { number: "95%", label: "Partner Satisfaction" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 