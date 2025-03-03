'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  ArrowRight, 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  GraduationCap, 
  Rocket, 
  Lightbulb, 
  Briefcase,
  CheckCircle
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

const SouthYorkshireAdvancePage = () => {
  const [selectedAuthority, setSelectedAuthority] = React.useState<string>('');
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    currentEmployment: '',
    careerGoals: '',
    heardAbout: '',
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleAuthorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthority(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    // For now, we'll just show a success message
    setFormSubmitted(true);
  };

  // Authority-specific information
  const authorityInfo = {
    sheffield: {
      team: 'Sheffield Advance Team',
      email: 'advance.sheffield@southyorkshire.gov.uk',
      phone: '0114 123 4567',
      address: 'Sheffield Town Hall, Pinstone Street, Sheffield, S1 2HH',
      additionalRequirements: 'Please note that Sheffield residents may be asked to provide proof of residency.'
    },
    rotherham: {
      team: 'Rotherham Advance Team',
      email: 'advance.rotherham@southyorkshire.gov.uk',
      phone: '01709 123 456',
      address: 'Rotherham Town Hall, The Crofts, Moorgate Street, Rotherham, S60 2TH',
      additionalRequirements: 'Rotherham applications require a recent employment history (last 3 years).'
    },
    doncaster: {
      team: 'Doncaster Advance Team',
      email: 'advance.doncaster@southyorkshire.gov.uk',
      phone: '01302 123 456',
      address: 'Doncaster Council House, College Road, Doncaster, DN1 3AD',
      additionalRequirements: 'Doncaster residents should attach a CV if available (not mandatory).'
    },
    barnsley: {
      team: 'Barnsley Advance Team',
      email: 'advance.barnsley@southyorkshire.gov.uk',
      phone: '01226 123 456',
      address: 'Barnsley Town Hall, Church Street, Barnsley, S70 2TA',
      additionalRequirements: 'Barnsley applicants may be invited to an initial group information session.'
    }
  };
  
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Adult Skills', href: '/adult-skills' },
            { label: 'Funded Training', href: '/funded-training-for-adults' },
            { label: 'South Yorkshire Advance', href: '/south-yorkshire-advance' },
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-4">
                <span className="text-sm font-medium text-blue-800">Career Advancement</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                South Yorkshire <span className="text-blue-600">Advance</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                Helping South Yorkshire residents progress into higher-skilled roles with better pay through funded training and career support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link 
                  href="#eligibility" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center"
                >
                  Check Eligibility
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#apply" 
                  className="bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Image - Right side */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
                {/* Large Featured Image */}
                <div className="rounded-xl overflow-hidden mb-4 relative h-64">
                  <Image 
                    src="/images/advance-programme.jpg"
                    alt="South Yorkshire Advance programme participants in a professional setting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <Rocket className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">Career Growth</h3>
                      <p className="text-xs text-slate-600">Advance your career</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">Better Pay</h3>
                      <p className="text-xs text-slate-600">Increase your income</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm">Fully Funded</h3>
                      <p className="text-xs text-slate-600">No cost to participants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-blue-900">Programme Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About South Yorkshire Advance
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              Helping you move forward in your career with funded training and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  The South Yorkshire Advance programme is designed to help adults in South Yorkshire progress in their careers by gaining higher-level skills that lead to better job opportunities and increased earning potential.
                </p>
                <p>
                  This fully funded initiative supports individuals who are currently employed but looking to advance their careers, those seeking to enter high-growth sectors, or people returning to the workforce after a break.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">What We Offer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Tailored career pathway development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Industry-recognised qualifications in growth sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>One-to-one career coaching and mentoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Connections to employers seeking skilled workers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              <div className="relative rounded-xl overflow-hidden h-64 mb-6">
                <Image 
                  src="/images/career-growth.jpg" 
                  alt="Professionals collaborating in a modern workplace environment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Focus Areas:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Digital & Technology",
                  "Healthcare & Life Sciences",
                  "Engineering & Manufacturing",
                  "Green Energy & Sustainability",
                  "Business & Leadership",
                  "Creative & Cultural Industries"
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-blue-900">Programme Benefits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How You'll Benefit
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              South Yorkshire Advance offers a range of benefits to help you progress in your career
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Career Progression",
                description: "Gain the skills and qualifications needed to progress to higher-level roles with better pay and opportunities.",
                icon: <Rocket className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Industry Relevance",
                description: "Training developed with employers to ensure the skills gained are in high demand in the local economy.",
                icon: <Briefcase className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Personal Support",
                description: "One-to-one career coaching to help you identify the right path and overcome barriers to progression.",
                icon: <Users className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Flexible Learning",
                description: "Options to study part-time, evenings, or weekends to fit around your current work commitments.",
                icon: <Calendar className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Employer Connections",
                description: "Direct links to employers looking to recruit skilled individuals into growing sectors.",
                icon: <Building2 className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Future-proof Skills",
                description: "Focus on developing skills for the industries of tomorrow, safeguarding your career for the future.",
                icon: <Lightbulb className="h-6 w-6 text-blue-600" />
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-blue-800">Eligibility Criteria</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                See if You're <span className="text-blue-600">Eligible</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                South Yorkshire Advance is designed to help specific groups of people advance their careers.
              </p>
              
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">You may be eligible if you are:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Aged 19 or over</span>
                      <p className="text-slate-700 mt-1">Must be at least 19 years old at the start of the programme</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">South Yorkshire resident</span>
                      <p className="text-slate-700 mt-1">Living in Sheffield, Rotherham, Doncaster, or Barnsley</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Employed or self-employed</span>
                      <p className="text-slate-700 mt-1">Currently working (including low hours, zero-hour contracts, or self-employment)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-slate-900">Looking to progress</span>
                      <p className="text-slate-700 mt-1">Seeking to advance in your current career or transition to a new sector</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Link
                href="#apply"
                className="text-base bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center"
              >
                Check Your Eligibility
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-6 shadow-lg">
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/eligibility-check.jpg"
                    alt="A person checking their eligibility for the South Yorkshire Advance programme"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Success story */}
              <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Success Story</h3>
                    <p className="text-slate-700 italic mb-3">
                      "The South Yorkshire Advance programme helped me transition from a customer service role to a digital marketing position, increasing my salary by over 30%."
                    </p>
                    <p className="text-blue-700 font-medium">James, Sheffield - Programme Graduate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="py-12 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-100 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-blue-900">Get Started</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to Apply
            </h2>
            <p className="text-base sm:text-lg text-slate-800">
              Follow these simple steps to start your journey with South Yorkshire Advance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Check Eligibility",
                description: "Review the eligibility criteria to ensure the programme is right for you",
                icon: <CheckCircle className="h-6 w-6 text-blue-600" />
              },
              {
                step: "2",
                title: "Complete Application",
                description: "Fill out our simple online application form with your details and career goals",
                icon: <Briefcase className="h-6 w-6 text-blue-600" />
              },
              {
                step: "3",
                title: "Career Consultation",
                description: "Have a one-to-one consultation with our career advisors to plan your pathway",
                icon: <Users className="h-6 w-6 text-blue-600" />
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all h-full relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-2">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received</h3>
                  <p className="text-slate-700 mb-6 max-w-lg mx-auto">
                    Thank you for your interest in the South Yorkshire Advance programme. 
                    Your application has been received and the {selectedAuthority ? authorityInfo[selectedAuthority as keyof typeof authorityInfo].team : 'local'} team will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-blue-600 underline font-medium"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Apply for South Yorkshire Advance</h3>
                  <p className="text-slate-700 mb-6">
                    Complete the form below to begin your application. Our team will review your details and contact you to arrange a career consultation.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Local Authority Selection */}
                    <div className="grid sm:grid-cols-1 gap-4 sm:gap-6 mb-6">
                      <div>
                        <label htmlFor="authority" className="block text-sm font-medium text-slate-700 mb-1">
                          Select your local authority <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="authority"
                          name="authority"
                          value={selectedAuthority}
                          onChange={handleAuthorityChange}
                          required
                          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Please select</option>
                          <option value="sheffield">Sheffield</option>
                          <option value="rotherham">Rotherham</option>
                          <option value="doncaster">Doncaster</option>
                          <option value="barnsley">Barnsley</option>
                        </select>
                      </div>
                    </div>

                    {selectedAuthority && (
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-blue-800 mb-2">
                          {authorityInfo[selectedAuthority as keyof typeof authorityInfo].team} Information
                        </h4>
                        <p className="text-sm text-slate-700 mb-2">
                          {authorityInfo[selectedAuthority as keyof typeof authorityInfo].additionalRequirements}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-blue-800">
                          <span>Contact:</span>
                          <a 
                            href={`mailto:${authorityInfo[selectedAuthority as keyof typeof authorityInfo].email}`}
                            className="underline hover:text-blue-600"
                          >
                            {authorityInfo[selectedAuthority as keyof typeof authorityInfo].email}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Personal Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Personal Information</h4>
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="postcode" className="block text-sm font-medium text-slate-700 mb-1">
                            Postcode <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Career Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Career Information</h4>
                      <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="currentEmployment" className="block text-sm font-medium text-slate-700 mb-1">
                            Current Employment Status <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="currentEmployment"
                            name="currentEmployment"
                            value={formData.currentEmployment}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Please select</option>
                            <option value="Employed full-time">Employed full-time</option>
                            <option value="Employed part-time">Employed part-time</option>
                            <option value="Zero-hour contract">Zero-hour contract</option>
                            <option value="Self-employed">Self-employed</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="careerGoals" className="block text-sm font-medium text-slate-700 mb-1">
                            What are your career goals? <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="careerGoals"
                            name="careerGoals"
                            value={formData.careerGoals}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Briefly describe your career aspirations and what you hope to achieve through the programme."
                          ></textarea>
                        </div>
                        <div>
                          <label htmlFor="heardAbout" className="block text-sm font-medium text-slate-700 mb-1">
                            How did you hear about South Yorkshire Advance?
                          </label>
                          <select
                            id="heardAbout"
                            name="heardAbout"
                            value={formData.heardAbout}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Please select</option>
                            <option value="Website">South Yorkshire website</option>
                            <option value="Social Media">Social media</option>
                            <option value="Friend or Family">Friend or family</option>
                            <option value="Job Centre">Job Centre</option>
                            <option value="Employer">Employer</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Sheffield-specific fields */}
                    {selectedAuthority === 'sheffield' && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Sheffield Information</h4>
                        <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                          <div>
                            <label htmlFor="sheffieldSector" className="block text-sm font-medium text-slate-700 mb-1">
                              Which Sheffield growth sector are you most interested in?
                            </label>
                            <select
                              id="sheffieldSector"
                              name="sheffieldSector"
                              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Please select</option>
                              <option value="Advanced Manufacturing">Advanced Manufacturing</option>
                              <option value="Digital & Creative">Digital & Creative</option>
                              <option value="Healthcare Technologies">Healthcare Technologies</option>
                              <option value="Low Carbon">Low Carbon & Environmental Technologies</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rotherham-specific fields */}
                    {selectedAuthority === 'rotherham' && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Rotherham Information</h4>
                        <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                          <div>
                            <label htmlFor="rotherhamPreference" className="block text-sm font-medium text-slate-700 mb-1">
                              Preferred training location in Rotherham
                            </label>
                            <select
                              id="rotherhamPreference"
                              name="rotherhamPreference"
                              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Please select</option>
                              <option value="Rotherham Town Centre">Rotherham Town Centre</option>
                              <option value="Maltby">Maltby</option>
                              <option value="Wath">Wath</option>
                              <option value="No preference">No preference</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Doncaster-specific fields */}
                    {selectedAuthority === 'doncaster' && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Doncaster Information</h4>
                        <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="doncasterCV"
                              name="doncasterCV"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="doncasterCV" className="text-sm font-medium text-slate-700">
                              I will email my CV to advance.doncaster@southyorkshire.gov.uk
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Barnsley-specific fields */}
                    {selectedAuthority === 'barnsley' && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Barnsley Information</h4>
                        <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                          <div>
                            <label htmlFor="barnsleySession" className="block text-sm font-medium text-slate-700 mb-1">
                              Available for group information sessions
                            </label>
                            <select
                              id="barnsleySession"
                              name="barnsleySession"
                              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Please select</option>
                              <option value="Weekday daytime">Weekday daytime</option>
                              <option value="Weekday evening">Weekday evening</option>
                              <option value="Weekend">Weekend</option>
                              <option value="Not available">Not available for group sessions</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* GDPR Consent */}
                    <div className="mt-4">
                      <div className="flex items-start gap-2">
                        <div className="flex items-center h-5 mt-1">
                          <input
                            id="gdprConsent"
                            name="gdprConsent"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                        </div>
                        <label htmlFor="gdprConsent" className="text-sm text-slate-700">
                          I consent to the South Yorkshire Mayoral Combined Authority collecting and processing my personal data for the purpose of my application to the Advance programme. I understand that my information will be shared with the relevant Local Authority team. <span className="text-red-500">*</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative px-6 py-10 md:py-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-slate-800 shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] mix-blend-overlay opacity-10"></div>
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have questions?</h2>
                <p className="text-slate-300 mb-6">
                  Our team is here to help you navigate your career advancement journey
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 rounded-lg bg-white text-blue-800 hover:bg-slate-100 transition-colors font-medium inline-flex items-center justify-center shadow-lg"
                  >
                    Get In Touch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="/faq" 
                    className="px-6 py-3 rounded-lg bg-blue-800/40 text-white border border-white/30 hover:bg-blue-800/60 transition-colors font-medium inline-flex items-center justify-center"
                  >
                    Read FAQs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-xl text-white font-medium mb-2">Call us directly</p>
                <p className="text-2xl text-white font-bold mb-3">0123 456 7890</p>
                <p className="text-slate-300 italic">Monday-Friday, 9am-5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SouthYorkshireAdvancePage 