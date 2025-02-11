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
      {/* Hero Section - Made more official looking */}
      <div className="relative bg-[#1a365d] py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/90 to-[#1a365d]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-emerald-300 mb-6">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-base font-medium tracking-wide uppercase">South Yorkshire Combined Authority</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              Access Funded Training for Your Business
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
              Discover a range of fully and partially funded training opportunities to upskill your workforce and drive business growth in Yorkshire.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation - Made more prominent */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-12">
            <a href="#fully-funded" className="py-6 text-base font-medium text-gray-700 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-colors">
              Fully Funded Options
            </a>
            <a href="#partially-funded" className="py-6 text-base font-medium text-gray-700 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-colors">
              Subsidised Options
            </a>
          </div>
        </div>
      </div>

      {/* Fully Funded Section - Improved spacing and typography */}
      <section id="fully-funded" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 rounded-full bg-emerald-100 text-emerald-700 text-base font-medium mb-6">
              No Cost to Your Business
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fully Funded Training Programmes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These programmes are completely free for eligible businesses and employees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {fundingOptions.fullyFunded.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-56">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{option.description}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="space-y-3">
                        {option.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {option.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/adult-skills-funding"
                      className={`w-full inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-colors`}
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

      {/* Partially Funded Section - Matching improvements */}
      <section id="partially-funded" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 rounded-full bg-purple-100 text-purple-700 text-base font-medium mb-6">
              Subsidised Training
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partially Funded Programmes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cost-effective training solutions with significant funding support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {fundingOptions.partiallyFunded.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-56">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-${option.color}-100 flex items-center justify-center`}>
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{option.description}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="space-y-3">
                        {option.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {option.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/skills-bank"
                      className={`w-full inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-${option.color}-600 hover:bg-${option.color}-500 transition-colors`}
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