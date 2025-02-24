'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function SkillsBankPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Educators', href: '/educators' },
        { label: 'Procurement', href: '/educators/procurement' },
        { label: 'Skills Bank', href: '/educators/procurement/skills-bank' },
      ]} />

      {/* Hero Section */}
      <div className="relative bg-[#111827] py-20 min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/skills-bank.jpg"
            alt="Skills Bank framework"
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
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">Skills Bank</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Become a Skills Bank Provider
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Join our network of high-quality Skills Providers to match training to employer needs and provide employer choice.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/register-interest"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Register Your Interest
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase">About Skills Bank</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Economic Plan</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              The South Yorkshire Mayoral Combined Authority's Strategic Economic Plan (SEP) provides the blueprint for driving the region's recovery from COVID and transforming South Yorkshire's economy and society for people, businesses and places by 2041.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Local Impact</h3>
                    <p className="text-gray-600">Work within a geographical area to target local careers education</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Community Collaboration</h3>
                    <p className="text-gray-600">Partner with like-minded businesses to drive greater impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <Image
              src="/images/skills-bank.jpg"
              alt="Skills Bank impact"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Framework Section */}
        <div className="bg-gray-50 py-16 rounded-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Framework</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Skills Bank operates a dynamic Framework for high-quality training providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Flexible Training</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  Bespoke training and a range of methods to upskill employees can be developed to meet specific employer demand.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Sector Specialists</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  We're particularly keen to hear from sector specialists with niche offers to grow SYMCA businesses.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Skills Bank Framework
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Become part of our network of high-quality Skills Providers and help shape the future of workforce development in South Yorkshire.
          </p>
          <Link
            href="/register-interest"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-sm"
          >
            Register Your Interest
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
} 