'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Briefcase, 
  Users, 
  Target, 
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ClipboardList,
  Handshake,
  GraduationCap,
  Search
} from 'lucide-react'

const IMAGES = {
  hero: "/images/bootcamps-hero.jpg",
  employers: "/images/employers-bootcamps.jpg",
  curriculum: "/images/curriculum-design.jpg",
  hiring: "/images/hiring-bootcamp.jpg"
}

export default function SkillsBootcampsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bootcamps-hero.webp"
            alt="Skills Bootcamp participants learning digital skills"
            fill
            className="object-cover object-center brightness-75"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-blue-300 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                <Briefcase className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">For South Yorkshire Employers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
              Shape Talent & Recruit Ready-Skilled Staff
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed">
              Collaborate with our Skills Bootcamps to develop exactly the skills your business needs and access job-ready talent.
            </p>
          </div>
        </div>
      </section>

      {/* Employer Involvement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.employers}
                alt="Employers discussing Skills Bootcamp curriculum"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 mb-6">
                <ClipboardList className="h-5 w-5 text-blue-600" />
                <span className="text-base font-medium text-blue-900">Shape Training</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Help Design What's Taught
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As an employer, you can directly influence Skills Bootcamp content to ensure participants gain the specific skills your business needs.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Consult on curriculum development",
                  "Provide real-world project briefs",
                  "Host site visits for participants",
                  "Deliver guest lectures/workshops",
                  "Help shape assessment criteria"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#get-involved"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 group"
              >
                Get Involved in Curriculum Design
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 mb-6">
                <Search className="h-5 w-5 text-emerald-600" />
                <span className="text-base font-medium text-emerald-900">Recruit Talent</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Hire Job-Ready Candidates
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Connect with motivated, trained individuals who have completed intensive training in your sector's key skills areas.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Interview participants during training",
                  "Access pre-screened candidates",
                  "Offer guaranteed interviews",
                  "Provide work trial opportunities",
                  "Recruit directly from talent pools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500 group"
              >
                Access Talent Pools
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-2">
              <Image
                src={IMAGES.hiring}
                alt="Employer interviewing Skills Bootcamp graduate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section id="get-involved" className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Partner With Our Bootcamps
            </h2>
            <p className="text-lg text-slate-300">
              Whether you want to shape training content or recruit top talent, we'll help you connect with the right Bootcamp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100/10 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-lg mb-2">Employer Partnerships</h3>
                  <p className="text-slate-300">Collaborate on curriculum design and delivery</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-lg mb-2">Recruitment Services</h3>
                  <p className="text-slate-300">Access our pool of trained candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 