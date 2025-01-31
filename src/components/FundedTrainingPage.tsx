import { Building2, Calculator, GraduationCap, Percent, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const FundedTrainingPage = () => {
  const fundingOptions = [
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
    },
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] py-24 overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-purple-600/30 to-blue-600/30 mix-blend-overlay" />
        
        <div 
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Funding Opportunities</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Access Funded Training<br />for Your Business
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
              Discover a range of fully and partially funded training opportunities to upskill your workforce and drive business growth in Yorkshire.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid md:grid-cols-4 gap-6">
            {fundingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full bg-${option.color}-50 flex items-center justify-center`}>
                    {option.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{option.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      {fundingOptions.map((option, index) => (
        <div key={index} className={`relative ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-8 -right-12 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm transform -translate-x-20 border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-${option.color}-100 text-${option.color}-600`}>
                        {option.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-xl mb-1">{option.title}</div>
                        <div className="text-gray-600">{option.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${option.color}-50 border-${option.color}-500 mb-6`}>
                  {option.icon}
                  <span className="text-sm font-medium">{option.title}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{option.description}</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {option.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-1 w-5 h-5 rounded-full bg-${option.color}-100 flex items-center justify-center flex-shrink-0`}>
                            <div className={`w-2 h-2 rounded-full bg-${option.color}-600`} />
                          </div>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {option.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-1 w-5 h-5 rounded-full bg-${option.color}-100 flex items-center justify-center flex-shrink-0`}>
                            <div className={`w-2 h-2 rounded-full bg-${option.color}-600`} />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 rounded-xl text-white transition-colors bg-${option.color}-600 hover:bg-${option.color}-500 shadow-lg hover:shadow-xl`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FundedTrainingPage 