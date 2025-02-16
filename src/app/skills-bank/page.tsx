'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Building2, MapPin, Building, LineChart, GraduationCap, HelpCircle } from 'lucide-react'
import SkillsBankEligibilityChecker from '@/components/SkillsBankEligibilityChecker'
import SkillsBankEligibilityModal from '@/components/SkillsBankEligibilityModal'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const applicationSteps = [
    {
      title: 'Online Application',
      description: 'Submit your application outlining your business needs, growth plans, and how the training will support your objectives. Our Skills Advisors can provide free guidance throughout this process.'
    },
    {
      title: 'Growth Plan Review',
      description: 'Our team reviews your growth plans and assesses how the proposed training will contribute to your business objectives and resilience.'
    },
    {
      title: 'Skills Deal',
      description: 'Successful applicants receive a Skills Deal outlining the agreed funding contribution (up to 60%) and training plan.'
    },
    {
      title: 'Training Delivery',
      description: 'Book and complete your training with your chosen provider, then claim your funding contribution.'
    }
  ]

  const benefits = [
    {
      title: 'Up to 60% Funding',
      description: 'Receive up to 60% of your training costs, making high-quality training more accessible for your business.'
    },
    {
      title: 'Business Growth',
      description: 'Invest in training that directly supports your growth plans and business objectives.'
    },
    {
      title: 'Increased Resilience',
      description: 'Build a stronger, more adaptable workforce ready for future challenges.'
    }
  ]

  const eligibilityCriteria = [
    {
      title: 'Location',
      mainCriteria: 'Based in South Yorkshire',
      details: ['Sheffield', 'Rotherham', 'Doncaster', 'Barnsley'],
      icon: 'MapPin'
    },
    {
      title: 'Business Status',
      mainCriteria: 'Active and Trading',
      details: ['Registered business', 'Self-employed', 'Social enterprise', 'Charity'],
      icon: 'Building'
    },
    {
      title: 'Growth Plans',
      mainCriteria: 'Clear Development Strategy',
      details: ['Business expansion', 'Skills development', 'Productivity improvement', 'Market growth'],
      icon: 'LineChart'
    },
    {
      title: 'Training Needs',
      mainCriteria: 'Identified Skills Gaps',
      details: ['Staff development', 'New technologies', 'Process improvement', 'Leadership skills'],
      icon: 'GraduationCap'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs Component */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Business Support', href: '/business-support' },
        { label: 'Funded Training', href: '/funded-training' },
        { label: 'Skills Bank', href: '/skills-bank' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/skills-bank-hero.jpg"
            alt="Skills bank opportunities in South Yorkshire"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Skills Bank</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Receive up to 60% Funding towards training costs for your business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Skills Bank provides funding for businesses that can demonstrate how training will support their growth plans and build resilience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              >
                Check Your Eligibility
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <Link
                href="#benefits"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                View Benefits
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-600 mb-6">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">About Skills Bank</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business with Skills Bank</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Skills Bank is a unique initiative designed to boost South Yorkshire's economy by investing in its workforce. We provide up to 60% funding for business training, helping organisations like yours develop the skills needed for sustainable growth.
                </p>
                <p className="text-lg text-gray-600">
                  By supporting businesses to invest in their people, we're building a stronger, more resilient regional economy. Our funding helps reduce the cost barrier to professional development, enabling businesses to access high-quality training that might otherwise be out of reach.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <Building2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    Supporting Business Growth
                  </h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Access up to 60% funding for your training needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Develop your workforce's skills and capabilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Enhance your business's competitive advantage</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-emerald-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <LineChart className="h-5 w-5 text-emerald-600" />
                    </div>
                    Purpose
                  </h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Strengthen South Yorkshire's economic growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Create more opportunities for local talent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Build a more resilient regional workforce</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="p-2 rounded-lg bg-emerald-100">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Eligibility Check</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Eligibility</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your business must meet these key criteria to access Skills Bank funding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    {criteria.title}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">{criteria.mainCriteria}</p>
                  <ul className="space-y-2">
                    {criteria.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 rounded-xl p-8 border border-emerald-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Sure About Your Eligibility?</h3>
                <p className="text-gray-600">
                  Our Skills Advisors can help determine if your business qualifies for funding
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors whitespace-nowrap"
              >
                Speak to an Advisor
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SkillsBankEligibilityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Why Skills Bank */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/skills-bank-learning2.jpg"
                alt="South Yorkshire building"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Skills Bank?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Skills Bank is designed to help businesses invest in their workforce through targeted training that delivers real business benefits. With up to 60% funding available, you can access high-quality training that might otherwise be out of reach.
                </p>
                <ul className="space-y-4">
                  {[
                    'Significant funding contribution up to 60%',
                    'Tailored training solutions for your business needs',
                    'Support for business growth and resilience',
                    'Access to high-quality training providers',
                    'Expert guidance throughout the process'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
What's the process?
            </p>
          </div>
          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="p-2 rounded-lg bg-emerald-100">
                <HelpCircle className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">FAQs</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about Skills Bank funding
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Can a new business be supported through Skills Bank?',
                answer: 'New businesses can be supported through Skills Bank providing they have been trading for at least 12 months.'
              },
              {
                question: 'Can Skills Bank support a charity or third sector organisation?',
                answer: 'Skills Bank funding is set aside for businesses that can provide a business case to show growth.'
              },
              {
                question: 'Can national employers be approached?',
                answer: 'The expectation is that the employer has a permanent base within South Yorkshire.'
              },
              {
                question: 'Is there any training that cannot be supported?',
                answer: 'Skills Bank will not usually support certain types of training.'
              },
              {
                question: 'Is there a restriction on the value of financial support?',
                answer: 'The Subsidy Control Regime applies with a ceiling of approximately £350,000.'
              },
              {
                question: 'Do employees need to live in South Yorkshire?',
                answer: 'No, the employer must be based in South Yorkshire and this must be the employee\'s official base of work.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md">
                <button
                  className="flex justify-between items-center w-full p-4 text-left text-gray-900 font-semibold hover:bg-emerald-100 transition-colors"
                  onClick={() => {
                    const answerElement = document.getElementById(`faq-answer-${index}`);
                    if (answerElement) {
                      answerElement.classList.toggle('hidden');
                    }
                  }}
                >
                  <span className="text-lg">{faq.question}</span>
                  <HelpCircle className="h-5 w-5 text-emerald-600" />
                </button>
                <p id={`faq-answer-${index}`} className="hidden p-4 text-gray-600 text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                Our Skills Advisors are here to help. Get in touch for personalised guidance on your Skills Bank application.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              >
                Contact Our Advisors
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Advisors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Skills Advisors</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated Skills Advisors are here to guide you through the application process, helping you to identify your challenges and opportunities, and ensure you receive the benefits you're eligible for. Our Skills Advisors work closely with businesses to prioritise the completion of successful applications.
              </p>
              <p className="text-gray-600">
                Unsuccessful applicants will receive immediate feedback and the option to be referred to a Skills Advisor.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero-business.jpg"
                alt="Skills advisor helping a business"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Find Out More</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="localAuthority" className="block text-sm font-medium text-gray-700 mb-1">
                What Local Authority Area is Your Business Based In?
              </label>
              <select
                id="localAuthority"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select an option</option>
                <option value="barnsley">Barnsley</option>
                <option value="doncaster">Doncaster</option>
                <option value="rotherham">Rotherham</option>
                <option value="sheffield">Sheffield</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  )
} 