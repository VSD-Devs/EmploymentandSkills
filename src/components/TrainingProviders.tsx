import React from 'react';
import { 
  GraduationCap, 
  Rocket, 
  Building2, 
  Users,
  ChevronRight,
  ClipboardList,
  Calendar,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TrainingProviders = () => {
  const frameworks = [
    {
      title: 'Adult Skills Fund',
      description: 'Support adults aged 19+ to gain qualifications and skills for employment and career progression.',
      icon: Users,
      color: 'emerald',
      features: [
        'Fully funded qualifications up to Level 2',
        'Support for essential digital skills',
        'Flexible learning options',
        'Focus on employability outcomes'
      ],
      requirements: [
        'Track record of quality provision',
        'Ofsted Grade 2 or above',
        'Financial health check',
        'Due diligence completion'
      ],
      image: '/images/hero-yorkshire.jpg',
      href: '/educators/procurement/adult-skills-fund'
    },
    {
      title: 'Skills Bootcamps',
      description: 'Intensive, sector-specific training programmes designed to fast-track learners into employment.',
      icon: Rocket,
      color: 'blue',
      features: [
        'Industry-led curriculum',
        '12-16 week programmes',
        'Guaranteed job interviews',
        'Focus on digital and technical skills'
      ],
      requirements: [
        'Industry expertise',
        'Employer partnerships',
        'Track record of delivery',
        'Job outcome focus'
      ],
      image: '/images/hero-business.jpg',
      href: '/educators/procurement/skills-bootcamps'
    },
    {
      title: 'Skills Bank',
      description: 'Bespoke training solutions to help businesses develop their workforce and drive growth.',
      icon: Building2,
      color: 'purple',
      features: [
        'Co-designed with employers',
        'Flexible delivery models',
        'Support for business growth',
        'Targeted sector support'
      ],
      requirements: [
        'Business training expertise',
        'Flexible delivery models',
        'Sector specialisation',
        'Quality assurance systems'
      ],
      image: '/images/hero-yorkshire.jpg',
      href: '/educators/procurement/skills-bank'
    },
    {
      title: 'Apprenticeship Hub',
      description: 'Supporting the delivery of high-quality apprenticeships across South Yorkshire.',
      icon: GraduationCap,
      color: 'teal',
      features: [
        'Apprenticeship levy support',
        'Employer-provider matching',
        'Quality assurance framework',
        'End-to-end support'
      ],
      requirements: [
        'Based in South Yorkshire',
        'Commitment to apprenticeships',
        'Long-term development focus',
        'Structured training plan'
      ],
      image: '/images/hero-business.jpg',
      href: '/educators/procurement/apprenticeship-hub'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-yorkshire.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#111827]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">For Training Providers & Colleges</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Partner with SYMCA to Deliver Quality Training
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {frameworks.map((framework) => (
                <div 
                  key={framework.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center gap-2"
                >
                  <framework.icon className="h-6 w-6 text-emerald-400" />
                  <span className="text-white font-medium text-sm">{framework.title}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
              Access funding opportunities and support to deliver high-quality training across South Yorkshire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#frameworks"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-white/90 transition-colors inline-flex items-center"
              >
                View Opportunities
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/educators"
                className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-emerald-500/30 transition-colors inline-flex items-center"
              >
                Back to Selection
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center min-w-max">
            <div className="flex space-x-1 py-1">
              {frameworks.map((framework) => (
                <a 
                  key={framework.title}
                  href={`#${framework.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className={`group relative px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 rounded-xl hover:bg-${framework.color}-50/80`}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className={`h-6 w-6 text-gray-600 group-hover:text-${framework.color}-600 group-hover:scale-105`}>
                      <framework.icon className="h-6 w-6" />
                    </div>
                    <span className={`text-sm sm:text-base font-medium text-gray-900 group-hover:text-${framework.color}-600 whitespace-nowrap`}>
                      {framework.title}
                    </span>
                    <div className={`h-0.5 w-0 bg-${framework.color}-600 group-hover:w-full transition-all duration-50`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Framework Cards */}
      <div id="frameworks" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with SYMCA and local authorities to deliver high-quality training and education services across South Yorkshire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((framework) => (
              <div
                key={framework.title}
                id={framework.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={framework.image}
                    alt={framework.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${framework.color}-100 flex items-center justify-center`}>
                        <framework.icon className={`h-5 w-5 text-${framework.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{framework.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{framework.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {framework.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className={`text-${framework.color}-600 font-bold`}>•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Features & Benefits</h4>
                      <ul className="space-y-2">
                        {framework.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className={`text-${framework.color}-600 font-bold`}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={framework.href}
                      className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-xl text-white bg-${framework.color}-600 hover:bg-${framework.color}-500 transition-colors`}
                    >
                      Learn More About {framework.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Framework */}
      <div id="quality" className="bg-white py-16 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-sm font-medium">Quality Assurance</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Quality Framework</h2>
              <p className="text-gray-600 text-lg mb-8">
                We maintain high standards through our comprehensive quality framework, ensuring the best outcomes for learners across South Yorkshire.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Regular Quality Reviews</h3>
                    <p className="text-gray-600">Comprehensive assessment of delivery standards and learner outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Development</h3>
                    <p className="text-gray-600">Access to training and development opportunities for your staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance Monitoring</h3>
                    <p className="text-gray-600">Regular monitoring and reporting of key performance indicators</p>
                  </div>
                </div>
              </div>
              <Link
                href="/educators/quality-framework"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500"
              >
                Learn more about our framework
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/quality-framework.jpg"
                alt="Quality assurance in education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProviders;