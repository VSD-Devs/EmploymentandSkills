import React from 'react';
import { 
  GraduationCap, 
  Rocket, 
  Building2, 
  Users,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Bell,
  BookOpen,
  BarChart3
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TrainingProviders = () => {
  const frameworks = [
    {
      title: 'Adult Skills Fund',
      description: 'Support adults aged 19+ to gain qualifications and skills for employment.',
      icon: Users,
      color: 'emerald',
      features: [
        'Fully funded qualifications up to Level 2',
        'Essential digital skills training',
        'Flexible learning delivery',
        'Focus on employment outcomes'
      ],
      href: '/educators/procurement/adult-skills-fund'
    },
    {
      title: 'Skills Bootcamps',
      description: 'Intensive training programmes to fast-track learners into employment.',
      icon: Rocket,
      color: 'blue',
      features: [
        'Industry-led curriculum design',
        '12-16 week programmes',
        'Employer partnerships',
        'Digital & technical focus'
      ],
      href: '/educators/procurement/skills-bootcamps'
    },
    {
      title: 'Skills Bank',
      description: 'Bespoke training solutions to help businesses develop their workforce.',
      icon: Building2,
      color: 'purple',
      features: [
        'Co-designed with employers',
        'Flexible delivery models',
        'Business growth focus',
        'Sector-specific support'
      ],
      href: '/educators/procurement/skills-bank'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-zinc-900 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-yorkshire.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-white text-sm font-medium">Training Providers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Partner with SYMCA
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Deliver high-quality training across South Yorkshire and help build a skilled workforce for our region's future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://procontract.due-north.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-emerald-500 transition-colors inline-flex items-center"
              >
                View Opportunities on ProContract
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/our-region"
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-white/20 transition-colors inline-flex items-center border border-white/20"
              >
                About Our Region
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with Opportunities</h2>
              <p className="text-gray-600 mb-6">
                All procurement opportunities are advertised through ProContract. Register to receive notifications about:
              </p>
              <ul className="space-y-3">
                {[
                  'New funding opportunities',
                  'Framework updates',
                  'Tender submissions',
                  'Contract awards'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <Bell className="h-5 w-5 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Register</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-medium text-emerald-600">1</span>
                  <span className="text-gray-600">Visit ProContract portal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-medium text-emerald-600">2</span>
                  <span className="text-gray-600">Create an account as a supplier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-medium text-emerald-600">3</span>
                  <span className="text-gray-600">Set up your areas of interest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-medium text-emerald-600">4</span>
                  <span className="text-gray-600">Enable notification preferences</span>
                </li>
              </ol>
              <div className="mt-6">
                <a 
                  href="https://procontract.due-north.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500"
                >
                  Register on ProContract
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Frameworks */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our current frameworks and how you can get involved in delivering quality training across South Yorkshire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((framework) => (
              <div
                key={framework.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-${framework.color}-100 flex items-center justify-center mb-6`}>
                  <framework.icon className={`h-6 w-6 text-${framework.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{framework.title}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                <ul className="space-y-3 mb-8">
                  {framework.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <ChevronRight className={`h-5 w-5 text-${framework.color}-600 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={framework.href}
                  className={`inline-flex items-center text-${framework.color}-600 font-medium hover:text-${framework.color}-500`}
                >
                  Learn more
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Context */}
      <div className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Regional Context</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding South Yorkshire</h2>
              <p className="text-gray-600 text-lg mb-8">
                Get to know our region's economic landscape, growth sectors, and skills priorities to align your training provision with local needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { number: '1.4M', label: 'Population' },
                  { number: '68k', label: 'Businesses' },
                  { number: '£34bn', label: 'Economic Output' },
                  { number: '4', label: 'Local Authorities' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/our-region"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500"
              >
                Explore our region
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/south-yorkshire-map.svg"
                alt="Map of South Yorkshire"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProviders;