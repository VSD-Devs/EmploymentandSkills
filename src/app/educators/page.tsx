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
  FileText,
  TrendingUp,
  Target,
  Lightbulb,
  Scale,
  Heart,
  Leaf
} from 'lucide-react'
import { sectorData } from '@/data/sectors'

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
              <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white mb-6">
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
          </div>
        </div>
      </div>

      {/* South Yorkshire Plan for Good Growth Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <Target className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Regional Strategy</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              South Yorkshire Plan for Good Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our vision for inclusive, sustainable growth that benefits all of South Yorkshire's people and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Innovation & Enterprise",
                description: "Building a stronger, more innovative economy through research, development and enterprise support.",
                color: "blue"
              },
              {
                icon: Heart,
                title: "People & Skills",
                description: "Developing a skilled workforce through high-quality education and training opportunities.",
                color: "emerald"
              },
              {
                icon: Leaf,
                title: "Sustainable Growth",
                description: "Creating sustainable communities and transitioning to a net-zero carbon economy.",
                color: "amber"
              }
            ].map((pillar, index) => (
              <div key={index} className={`bg-${pillar.color}-50 rounded-xl p-8 border border-${pillar.color}-100`}>
                <div className={`w-12 h-12 bg-${pillar.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <pillar.icon className={`h-6 w-6 text-${pillar.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Strategy Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                <Lightbulb className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Skills Strategy</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                South Yorkshire Skills Strategy 2021-2030
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach to developing the skills needed for economic growth and social inclusion.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "World-class technical education",
                    description: "Delivering high-quality technical education aligned with employer needs"
                  },
                  {
                    title: "Adult skills and lifelong learning",
                    description: "Supporting adults to upskill and retrain throughout their careers"
                  },
                  {
                    title: "Employer engagement",
                    description: "Working closely with employers to identify and meet skills needs"
                  },
                  {
                    title: "Digital skills",
                    description: "Ensuring everyone has the digital skills needed for work and life"
                  }
                ].map((priority, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{priority.title}</h3>
                    <p className="text-gray-600">{priority.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/skills-strategy.jpg"
                alt="Students and tutors collaborating in a modern learning environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">75%</div>
                    <div className="text-sm">of employers report skills gaps</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">£1.7bn</div>
                    <div className="text-sm">investment in skills by 2030</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Labour Market Intelligence Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Labour Market Intelligence</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Regional Skills Demand
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-time insights into South Yorkshire's employment and skills landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(sectorData)
              .slice(0, 6)
              .map(([key, sector]) => (
                <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{sector.title}</h3>
                    <div className="space-y-4">
                      {sector.stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600">{stat.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{stat.number}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">In-demand skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {sector.skills.specialist.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/our-region"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              View Full Regional Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Support for Education Providers */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support for Education Providers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access resources and support to help deliver high-quality education and training
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/educators/training-providers"
              className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/training-providers.jpg"
                  alt="Training provider delivering session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
              </div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Training Providers</h3>
                <p className="text-white/90 mb-6">
                  Resources and support for delivering apprenticeships and vocational training
                </p>
                <div className="inline-flex items-center text-white">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="/educators/schools"
              className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/schools.jpg"
                  alt="School classroom session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
              </div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Schools & Colleges</h3>
                <p className="text-white/90 mb-6">
                  Support for careers education and employer engagement
                </p>
                <div className="inline-flex items-center text-white">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 