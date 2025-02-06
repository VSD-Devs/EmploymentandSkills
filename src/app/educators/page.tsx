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
      {/* Hero Section with Role Selection */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/educator-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 to-zinc-900/90" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-sm font-medium">Education Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shaping South Yorkshire's Future
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join us in building a skilled workforce for tomorrow. Access resources, funding, and support tailored to your role.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Training Provider Card */}
            <Link 
              href="/educators/training-providers"
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-emerald-600/0 to-emerald-600/5 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Provider or College</h2>
                <p className="text-gray-600 mb-6">
                  Access procurement opportunities, funding streams, and partnership programmes to deliver training across South Yorkshire.
                </p>
                <div className="flex items-center text-emerald-600 group-hover:text-emerald-500">
                  <span className="font-medium">View opportunities</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* School Card */}
            <Link 
              href="/educators/schools"
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/5 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">School</h2>
                <p className="text-gray-600 mb-6">
                  Find training providers, access career resources, and connect with professionals to enhance your students' career education.
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-500">
                  <span className="font-medium">Access resources</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
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
                    { number: "£15M+", label: "Annual Funding" },
                    { number: "10k+", label: "Learners Supported" },
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