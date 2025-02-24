import { Metadata } from 'next'
import { Factory, ArrowRight, CheckCircle2, Quote, Building2, Trophy, Users, Briefcase, GraduationCap, Lightbulb, Clock, PoundSterling, FileText, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Made Smarter | Digital Transformation for Manufacturing | South Yorkshire',
  description: 'Transform your manufacturing business with Made Smarter. Access funding, support and resources for digital technology adoption, innovation and skills development.',
}

export default function MadeSmarterPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs Component */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">Made Smarter</li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/made-smarter-hero.png"
            alt="Made Smarter background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6">Transform Your Manufacturing Business</h1>
              <p className="text-lg mb-8">
                Access funding, dedicated support and resources for digital technology adoption, 
                innovation and skills development across South Yorkshire.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="#benefits" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900">
                  Benefits for Businesses
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/made-smarter-hero.jpg"
                alt="Smart factory floor with modern manufacturing equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2">£1.2M+</h3>
              <p className="text-gray-700">Funding Allocated</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Building2 className="h-12 w-12 text-amber-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2">85+</h3>
              <p className="text-gray-700">Businesses Supported</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2">230+</h3>
              <p className="text-gray-700">Workforce Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for your business Section */}
      <div id="benefits" className="relative bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Business</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <PoundSterling className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Financial Support</h3>
              <p className="text-gray-700">
                Access match funding for digital technology projects, with opportunities for grants up to £20,000.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <Lightbulb className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Innovation Guidance</h3>
              <p className="text-gray-700">
                Receive tailored advice from digital technology specialists to identify the right solutions for your business.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <GraduationCap className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Skills Development</h3>
              <p className="text-gray-700">
                Upskill your workforce with digital training programmes and access to industry placement students.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <Briefcase className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">T Level Industry Placements</h3>
              <p className="text-gray-700">
                Host T Level students for 45+ days to support your digital projects while developing future talent.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <Clock className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Productivity Gains</h3>
              <p className="text-gray-700">
                Implement time-saving technologies to streamline operations and reduce waste in your production processes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <FileText className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Personalised Roadmap</h3>
              <p className="text-gray-700">
                Develop a clear digital transformation strategy tailored to your specific business needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { 
                  step: 1, 
                  title: 'Initial Consultation', 
                  description: 'Book a free consultation with our digital advisors to discuss your business needs and challenges.' 
                },
                { 
                  step: 2, 
                  title: 'Digital Assessment', 
                  description: 'Receive a comprehensive assessment of your current digital capabilities and identify opportunities for improvement.' 
                },
                { 
                  step: 3, 
                  title: 'Tailored Action Plan', 
                  description: 'Get a personalised digital roadmap with recommended technologies and implementation strategies.' 
                },
                { 
                  step: 4, 
                  title: 'Funding Application', 
                  description: 'Apply for match funding to support your digital technology projects with guidance from our team.' 
                },
                { 
                  step: 5, 
                  title: 'Implementation Support', 
                  description: 'Receive ongoing support during the implementation phase, including access to skills development and T Level industry placements.' 
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/contact" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 inline-flex items-center">
                Start Your Digital Journey <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <div className="relative bg-[#0E1A2D] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Programme Eligibility</h2>
            <div className="grid gap-6 text-left">
              {[
                { title: 'Manufacturing Business', icon: Factory },
                { title: 'Based in South Yorkshire', icon: CheckCircle2 },
                { title: '10+ Employees', icon: CheckCircle2 },
                { title: 'Seeking Digital Transformation', icon: CheckCircle2 },
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg">
                  <item.icon className="h-6 w-6 text-amber-500 mr-4" aria-hidden="true" />
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-8">
              Not sure if you qualify? Contact our team for a free consultation.
            </p>
            <div className="mt-8">
              <Link href="/eligibility-checker" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center">
                Check Your Eligibility <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* T Level Industry Placements Section */}
      <div className="relative bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">T Level Industry Placements</h2>
              <p className="text-gray-700 mb-6">
                T Levels help young people develop technical and work-ready skills for the manufacturing sector. 
                By hosting a T Level student, your business can:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 mr-3 mt-0.5" aria-hidden="true" />
                  <span>Build a talent pipeline for future positions, apprenticeships and recruitment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 mr-3 mt-0.5" aria-hidden="true" />
                  <span>Bring fresh perspectives and digital skills into your business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 mr-3 mt-0.5" aria-hidden="true" />
                  <span>Support specific digital projects for a minimum of 45 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 mr-3 mt-0.5" aria-hidden="true" />
                  <span>Develop your existing staff's mentoring and management skills</span>
                </li>
              </ul>
              <Link href="/t-level-placements" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 inline-flex items-center">
                Learn About T Level Placements <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image 
                src="/images/t-level-placement.jpg"
                alt="T Level student working in a manufacturing environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/images/case-study-${item}.jpg`}
                    alt={`Case study ${item} showing manufacturing improvements`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Manufacturer Increases Output by 40%</h3>
                  <p className="text-gray-700 mb-4">Through adoption of IoT and automation solutions</p>
                  <Link href={`/case-studies/${item}`} className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/case-studies" className="text-amber-600 hover:text-amber-700 font-medium flex items-center justify-center">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-50 p-8 rounded-xl">
                <Quote className="h-8 w-8 text-amber-600 mb-4 rotate-180" aria-hidden="true" />
                <p className="text-gray-700 mb-4">
                  "The Made Smarter programme transformed our production line. We've reduced waste by 25% 
                  and improved delivery times significantly."
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/images/testimonial-${item}.jpg`}
                      alt={`Portrait of testimonial ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-gray-600 text-sm">CEO, Manufacturing Co</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="relative bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Digital Assessment Tool</h3>
              <p className="text-gray-700 mb-4">
                Evaluate your current digital maturity and identify areas for improvement with our free assessment tool.
              </p>
              <Link href="/resources/digital-assessment" className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                Access Tool <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <GraduationCap className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Skills Development</h3>
              <p className="text-gray-700 mb-4">
                Explore our range of digital skills training programmes for manufacturing businesses.
              </p>
              <Link href="/resources/skills-development" className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                View Programmes <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <HelpCircle className="h-10 w-10 text-amber-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">FAQs</h3>
              <p className="text-gray-700 mb-4">
                Find answers to commonly asked questions about the Made Smarter programme and digital transformation.
              </p>
              <Link href="/resources/faqs" className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                Read FAQs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-[#0E1A2D] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Get in touch with our team today to start your digital transformation journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/events" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 