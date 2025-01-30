import React from 'react';
import { Search, FileText, Compass, BookOpen } from 'lucide-react';

const Individuals = () => {
  const resources = [
    {
      title: 'Career Planning',
      description: 'Expert guidance on career paths and development opportunities in South Yorkshire.',
      icon: Compass,
      link: '#career-planning'
    },
    {
      title: 'CV Support',
      description: 'Professional advice on creating standout CVs and application materials.',
      icon: FileText,
      link: '#cv-support'
    },
    {
      title: 'Job Search',
      description: 'Access to local job opportunities and application support.',
      icon: Search,
      link: '#job-search'
    },
    {
      title: 'Training Courses',
      description: 'Find funded training opportunities to enhance your skills.',
      icon: BookOpen,
      link: '#training'
    }
  ];

  const successStories = [
    {
      name: "Emma Thompson",
      story: "Through the Hub's support, I completed a digital skills course and secured a role in tech.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      outcome: "Now working as Junior Developer"
    },
    {
      name: "James Wilson",
      story: "The career guidance helped me transition from retail to manufacturing through an apprenticeship.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      outcome: "Completed Advanced Manufacturing Apprenticeship"
    }
  ];

  return (
    <div id="individuals" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">For Individuals</h2>
          <p className="mt-4 text-xl text-gray-600">
            Take the next step in your career with our support
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <resource.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{resource.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{resource.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div key={story.name} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={story.image}
                      alt={story.name}
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-lg font-medium text-gray-900">{story.name}</div>
                    <p className="mt-2 text-gray-600">{story.story}</p>
                    <div className="mt-4 text-blue-600 font-medium">{story.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individuals;