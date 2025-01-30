import React, { useEffect } from 'react';
import { Briefcase, GraduationCap, Heart, ArrowRight, Phone, Mail, CheckCircle2, Clock, Users, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Image constants to ensure consistent loading and prevent typos
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
  careerGuidance: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
  training: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070",
  wellbeing: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=2070",
  contact: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
};

const AdultSkills = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle smooth scrolling when hash changes
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative h-[85vh] bg-zinc-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={IMAGES.hero}
            alt="Modern Yorkshire skyline showing business district"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/70 to-zinc-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-white/90 text-sm font-medium">Free Support Available</span>
              </div>
              <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
                Transform Your Career in Yorkshire
              </h1>
              <p className="text-2xl text-zinc-200 mb-10 leading-relaxed">
                Access free support, training, and resources to help you thrive in Yorkshire's growing industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-zinc-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-zinc-100 transition-colors inline-flex items-center group">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                  View Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="relative -mt-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Free Support</h3>
              </div>
              <p className="text-zinc-600">All our services and courses are fully funded for Yorkshire residents.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Flexible Learning</h3>
              </div>
              <p className="text-zinc-600">Choose from online, in-person, or hybrid learning options to suit your schedule.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Expert Support</h3>
              </div>
              <p className="text-zinc-600">Get guidance from industry professionals and career advisors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Employment Support */}
        <div id="employment" className="scroll-mt-24 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={IMAGES.careerGuidance}
                  alt="Professional career guidance session in Yorkshire"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-xl border border-zinc-100 max-w-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-700" />
                  </div>
                  <p className="text-lg font-bold text-zinc-900">94% Success Rate</p>
                </div>
                <p className="text-zinc-600">Our career guidance leads to successful job placements</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Employment Support</h2>
              <p className="text-xl text-zinc-600 mb-8">
                Get personalised career guidance, CV writing support, and interview preparation from our expert advisors.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-blue-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">One-to-one career coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-blue-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Job search strategy development</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-blue-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Interview skills workshops</span>
                </li>
              </ul>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center group">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Funded Training */}
        <div id="training" className="scroll-mt-24 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Funded Training</h2>
              <p className="text-xl text-zinc-600 mb-8">
                Access fully funded courses and qualifications in Yorkshire's high-growth sectors.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Digital skills certifications</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Industry-recognised qualifications</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Sector-specific training programmes</span>
                </li>
              </ul>
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-800 transition-colors inline-flex items-center group">
                Browse Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={IMAGES.training}
                  alt="Modern training facility with diverse group of professionals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border border-zinc-100 max-w-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-emerald-700" />
                  </div>
                  <p className="text-lg font-bold text-zinc-900">2,500+ Graduates</p>
                </div>
                <p className="text-zinc-600">Successfully completed our training programmes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mental Health Support */}
        <div id="wellbeing" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={IMAGES.wellbeing}
                  alt="Supportive wellbeing consultation in a comfortable environment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-xl border border-zinc-100 max-w-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-purple-700" />
                  </div>
                  <p className="text-lg font-bold text-zinc-900">Confidential Support</p>
                </div>
                <p className="text-zinc-600">Professional mental health and wellbeing services</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Mental Health Support</h2>
              <p className="text-xl text-zinc-600 mb-8">
                Access confidential mental health support and resources to help you maintain wellbeing during your career journey.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-purple-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Confidential counselling services</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-purple-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Stress management workshops</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-purple-700" />
                  </div>
                  <span className="ml-3 text-zinc-600">Wellbeing resources and tools</span>
                </li>
              </ul>
              <button className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-800 transition-colors inline-flex items-center group">
                Get Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="scroll-mt-24 relative py-24 mt-24 bg-zinc-900">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.contact}
            alt="Yorkshire business district at dusk"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-900/95"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Need Help? We're Here For You</h2>
            <p className="text-xl text-zinc-300">Our team is ready to support you on your journey to success.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center space-x-6 border border-white/10">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Call us at</p>
                <p className="text-2xl font-medium text-white">0800 123 4567</p>
                <p className="text-white/60 mt-1">Monday to Friday, 9am - 5pm</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center space-x-6 border border-white/10">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Email us at</p>
                <p className="text-2xl font-medium text-white">support@yorkshirepathways.com</p>
                <p className="text-white/60 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdultSkills; 