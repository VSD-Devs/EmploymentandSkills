import React from 'react';
import { Briefcase, GraduationCap, PoundSterling, Users } from 'lucide-react';

const Employers = () => {
  const benefits = [
    {
      title: 'Funding Support',
      description: 'Access grants and financial support for workforce development and training programs.',
      icon: PoundSterling,
    },
    {
      title: 'Apprenticeships',
      description: 'Get support in setting up and managing apprenticeship programs.',
      icon: GraduationCap,
    },
    {
      title: 'Talent Pool',
      description: 'Connect with skilled local candidates and recruitment support services.',
      icon: Users,
    },
    {
      title: 'Business Growth',
      description: 'Access resources and support for scaling your business in South Yorkshire.',
      icon: Briefcase,
    },
  ];

  const testimonials = [
    {
      quote: "The Hub's support has been invaluable in helping us develop our apprenticeship program.",
      author: "Sarah Johnson",
      role: "HR Director",
      company: "Sheffield Manufacturing Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Thanks to the funding and support, we've been able to upskill our entire workforce.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Rotherham Tech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div id="employers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">For Employers</h2>
          <p className="mt-4 text-xl text-gray-600">
            Partner with us to develop your workforce and grow your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{benefit.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;