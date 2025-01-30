import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, GraduationCap, BookOpen, LineChart, Globe2, MessageSquare, PoundSterling } from 'lucide-react';

const colorClasses = {
  emerald: {
    button: 'border-emerald-500 shadow-emerald-100',
    icon: 'bg-emerald-50 text-emerald-600',
    link: 'bg-emerald-600 hover:bg-emerald-700'
  },
  blue: {
    button: 'border-blue-500 shadow-blue-100',
    icon: 'bg-blue-50 text-blue-600',
    link: 'bg-blue-600 hover:bg-blue-700'
  },
  indigo: {
    button: 'border-indigo-500 shadow-indigo-100',
    icon: 'bg-indigo-50 text-indigo-600',
    link: 'bg-indigo-600 hover:bg-indigo-700'
  },
  purple: {
    button: 'border-purple-500 shadow-purple-100',
    icon: 'bg-purple-50 text-purple-600',
    link: 'bg-purple-600 hover:bg-purple-700'
  },
  teal: {
    button: 'border-teal-500 shadow-teal-100',
    icon: 'bg-teal-50 text-teal-600',
    link: 'bg-teal-600 hover:bg-teal-700'
  }
} as const;

type ColorType = keyof typeof colorClasses;

interface TabContent {
  text: string[];
  image: string;
  alt: string;
  link: string;
  cta: string;
}

interface Tab {
  icon: React.ReactNode;
  color: ColorType;
  title: string;
  description: string;
  content: TabContent;
}

type TabsType = {
  [key: string]: Tab;
};

const BusinessPage = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs: TabsType = {
    enterprise: {
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'emerald',
      title: 'Enterprise Advisor',
      description: 'Connect with schools and inspire the next generation',
      content: {
        text: [
          'The Enterprise Advisor network is a national network of senior business volunteers connected to secondary schools and colleges to inspire young people for the world of work.',
          'Work closely with a local secondary school or college to create strong links between businesses and students, sharing your expertise and helping the next generation.'
        ],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
        alt: 'Enterprise advisors collaborating',
        link: '/register-interest',
        cta: 'Register your interest'
      }
    },
    skills: {
      icon: <LineChart className="w-6 h-6" />,
      color: 'blue',
      title: 'Skills & Funding',
      description: 'Access funding and connect with local advisors',
      content: {
        text: [
          'Get free support to develop your workforce through our local business advisors. We help you access funding for training, find the right training providers, and build talent pipelines.',
          'Available support includes grants for apprenticeships, subsidised training programmes, and expert guidance on skills development. Our advisors work with you to understand your needs and connect you with the right resources.'
        ],
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
        alt: 'Business skills training',
        link: '/skills-support',
        cta: 'Get Support'
      }
    },
    apprenticeship: {
      icon: <BookOpen className="w-6 h-6" />,
      color: 'blue',
      title: 'Apprenticeship Levy',
      description: 'Access funding and support for apprenticeships',
      content: {
        text: ['Get help with understanding how the apprenticeship levy works and ensure your apprenticeship opportunities are available to young people. Plus, learn about financial support - 95% of the training costs for apprenticeships.'],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        alt: 'Young apprentice learning',
        link: '/apprenticeship-support',
        cta: 'Find out more'
      }
    },
    business: {
      icon: <Building2 className="w-6 h-6" />,
      color: 'purple',
      title: 'Business Support',
      description: 'Access funding and practical support',
      content: {
        text: ['What are the most challenging areas in business right now for the support you require? What help is available? Are you eligible? Tell us more about your business and we\'ll help make a difference! We provide a single point of access to a wide range of local and practical support and funding.'],
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
        alt: 'Business consulting session',
        link: '/business-support',
        cta: 'Find out more'
      }
    },
    trade: {
      icon: <Globe2 className="w-6 h-6" />,
      color: 'teal',
      title: 'Trade & Export',
      description: 'Navigate international trade support',
      content: {
        text: ['We\'ve brought together resources to help you navigate the trade support landscape including the access to set up your export capability, where to access expertise and guidance and the financial support available to you.'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        alt: 'International trade meeting',
        link: '/trade-export',
        cta: 'Learn more'
      }
    }
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-zinc-900 text-white py-16">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Professional meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 text-lg font-medium mb-6">
            <Building2 className="w-5 h-5 mr-2" />
            For Businesses
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white max-w-2xl">How can we support you as a business?</h1>
          <p className="text-2xl text-zinc-200 max-w-3xl leading-relaxed mb-8">
            If your organisation wants to give back to the community and support young people but doesn't know where to start, we can help.
          </p>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`bg-white p-6 rounded-xl shadow-sm border-2 transition-all ${
                activeTab === key ? colorClasses[tab.color].button : 'border-transparent hover:border-zinc-200'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorClasses[tab.color].icon}`}>
                {tab.icon}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2 text-lg">{tab.title}</h3>
              <p className="text-base text-zinc-500">{tab.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-zinc-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${colorClasses[tabs[activeTab].color].icon}`}>
                {tabs[activeTab].icon}
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">{tabs[activeTab].title}</h2>
              {tabs[activeTab].content.text.map((paragraph, index) => (
                <p key={index} className="text-lg text-zinc-600 mb-6 leading-relaxed">{paragraph}</p>
              ))}
              <Link 
                to={tabs[activeTab].content.link}
                className={`inline-flex items-center space-x-3 text-white px-8 py-4 rounded-xl transition-colors shadow-sm text-base font-medium ${colorClasses[tabs[activeTab].color].link}`}
              >
                <span>{tabs[activeTab].content.cta}</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-full min-h-[500px]">
              <img 
                src={tabs[activeTab].content.image}
                alt={tabs[activeTab].content.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
          <div className="relative flex items-center justify-center space-x-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-white">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold text-white">Share Your Feedback</h2>
              <p className="text-zinc-300 text-base">Help us improve our resources</p>
            </div>
            <Link 
              to="/feedback"
              className="ml-auto inline-flex items-center space-x-2 bg-white text-zinc-900 px-6 py-3 rounded-lg hover:bg-zinc-100 transition-colors text-base font-medium"
            >
              <span>Give feedback</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage; 