import { Building2, Calculator, GraduationCap, Percent, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const FundedTrainingPage = () => {
  const fundingOptions = {
    fullyFunded: [
      {
        title: 'Adult Skills Funding',
        icon: <GraduationCap className="w-6 h-6" />,
        color: 'emerald',
        description: 'Fully funded training for eligible employees',
        requirements: [
          'Maximum salary of £24,000',
          'No higher than a full level 3 qualification',
          'Aged 19 or over',
          'Living in Yorkshire'
        ],
        benefits: [
          'Complete cost coverage',
          'Flexible learning options',
          'Industry-recognised qualifications',
          'Career progression opportunities'
        ],
        image: '/images/hero-yorkshire.jpg'
      },
      {
        title: 'Multiply Programme',
        icon: <Calculator className="w-6 h-6" />,
        color: 'blue',
        description: 'Free maths training for your workforce',
        requirements: [
          'Employees aged 19 or over',
          'Below Level 2 maths qualification',
          'Based in Yorkshire'
        ],
        benefits: [
          'Improve workplace numeracy',
          'Boost productivity',
          'Enhance problem-solving skills',
          'Flexible delivery options'
        ],
        image: '/images/hero-business.jpg'
      }
    ],
    partiallyFunded: [
      {
        title: 'Skills Bank',
        icon: <Percent className="w-6 h-6" />,
        color: 'purple',
        description: 'Up to 60% funding towards training costs',
        requirements: [
          'Business based in Yorkshire',
          'Clear growth plans',
          'Commitment to workforce development'
        ],
        benefits: [
          'Substantial cost savings',
          'Tailored training solutions',
          'Support for business growth',
          'Wide range of eligible courses'
        ],
        image: '/images/hero-yorkshire.jpg'
      },
      {
        title: 'Skills Bootcamps',
        icon: <BookOpen className="w-6 h-6" />,
        color: 'teal',
        description: 'Intensive training with employer contribution',
        requirements: [
          '10% contribution for SMEs',
          '30% contribution for large organisations',
          'Sector-specific training',
          'Must lead to job or promotion'
        ],
        benefits: [
          'Industry-led curriculum',
          'Fast-track skills development',
          'Immediate workplace application',
          'Access to skilled talent'
        ],
        image: '/images/hero-business.jpg'
      }
    ]
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
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
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Funding Opportunities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Access Funded Training for Your Business
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Discover a range of fully and partially funded training opportunities to upskill your workforce and drive business growth in Yorkshire.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <a href="#fully-funded" className="py-4 text-sm font-medium text-gray-700 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600">
              Fully Funded Options
            </a>
            <a href="#partially-funded" className="py-4 text-sm font-medium text-gray-700 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600">
              Partially Funded Options
            </a>
          </div>
        </div>
      </div>

      {/* Fully Funded Section */}
      <section id="fully-funded" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              No Cost to Your Business
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fully Funded Training Programmes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These programmes are completely free for eligible businesses and employees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingOptions.fullyFunded.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                        {option.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{option.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {option.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-xl text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-colors`}
                    >
                      Explore {option.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partially Funded Section */}
      <section id="partially-funded" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Subsidised Training
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partially Funded Programmes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cost-effective training solutions with significant funding support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingOptions.partiallyFunded.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                        {option.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{option.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {option.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-xl text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-colors`}
                    >
                      Explore {option.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FundedTrainingPage 