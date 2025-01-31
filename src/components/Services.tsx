import React from 'react';
import { Users, GraduationCap, Building2, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'For Individuals',
      description: 'Career guidance, training opportunities, and job search support to help you achieve your professional goals.',
      icon: Users,
      link: '#individuals'
    },
    {
      title: 'Businesses',
      description: 'Access funding, find talent, and develop your workforce with our comprehensive business support services.',
      icon: Building2,
      link: '#businesses'
    },
    {
      title: 'Training Providers',
      description: 'Partner with us to deliver high-quality training programs and reach more learners across South Yorkshire.',
      icon: GraduationCap,
      link: '#providers'
    },
    {
      title: 'Events & Workshops',
      description: 'Join our regular events and workshops to network, learn, and grow your skills.',
      icon: Calendar,
      link: '#events'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Supporting workforce development and economic growth across South Yorkshire
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <span className="inline-block p-3 rounded-full bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
                  <service.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-500">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;