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
import { Button } from '@/components/ui/button'
import BootcampRecruitment from "@/components/BootcampRecruitment"

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
        <BootcampRecruitment />
      </section>

      {/* Get Involved CTA */}
      <section id="get-involved" className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner With Our Bootcamps
            </h2>
            <p className="text-lg text-white/90">
              Whether you want to shape training content or recruit top talent, we'll help you connect with the right Bootcamp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Employer Partnerships Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Employer Partnerships</h3>
                  <p className="text-gray-600">Collaborate on curriculum design and delivery</p>
                  <Button className="mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Recruitment Services Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Recruitment Services</h3>
                  <p className="text-gray-600">Access our pool of trained candidates</p>
                  <Button className="mt-4">
                    View Talent Pool
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 