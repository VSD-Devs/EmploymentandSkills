import React from 'react';
import { 
  Rocket, 
  Building2, 
  Users,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Bell,
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
      {/* Hero Section - Added back */}
      <div className="relative bg-zinc-900 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-yorkshire.jpg"
            alt="South Yorkshire landscape"
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
              Opportunities in South Yorkshire
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Deliver high-quality training across South Yorkshire and help build a skilled workforce for our region's future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#frameworks"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-emerald-500 transition-colors inline-flex items-center"
              >
                View Frameworks
                <ChevronRight className="ml-2 h-5 w-5" />
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

      {/* Frameworks Section */}
      <div id="frameworks" className="py-24">
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
                className={`bg-${framework.color}-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between`}
              >
                <div className="relative h-56 flex items-center justify-center">
                  <div className={`w-full h-full bg-${framework.color}-600 flex items-center justify-center`}>
                    <h3 className="text-2xl font-bold text-white">{framework.title}</h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{framework.description}</p>
                    <ul className="space-y-3 mb-8">
                      {framework.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                          <ChevronRight className={`h-5 w-5 text-${framework.color}-600 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={framework.href}
                    className={`w-full inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-${framework.color}-600 hover:bg-${framework.color}-700 transition-colors mt-6`}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ProContract Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Access Opportunities via ProContract
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  All procurement opportunities are advertised through ProContract. Register to receive notifications about:
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'New funding opportunities',
                  'Framework updates',
                  'Tender submissions',
                  'Contract awards'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Bell className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">How to Register</h3>
              <ol className="space-y-6">
                {[
                  'Visit ProContract portal',
                  'Create an account as a supplier',
                  'Set up your areas of interest',
                  'Enable notification preferences'
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-lg text-gray-700">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <a 
                  href="https://procontract.due-north.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition-colors"
                >
                  Register on ProContract
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Context Section */}
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