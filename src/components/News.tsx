import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "£5M Investment in Digital Skills Training",
      date: "March 1, 2024",
      category: "Funding",
      excerpt: "New funding announced to support digital skills development across South Yorkshire, benefiting over 1,000 residents.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Manufacturing Sector Growth Report",
      date: "February 28, 2024",
      category: "Industry Insights",
      excerpt: "Latest report shows 15% growth in manufacturing jobs across the region, with continued expansion expected.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "New Apprenticeship Programs Launch",
      date: "February 25, 2024",
      category: "Education",
      excerpt: "Ten new apprenticeship programs launched in partnership with leading businesses in the green energy sector.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay updated with the latest developments in South Yorkshire's employment and skills sector
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
                <a
                  href="#read-more"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#news-archive"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All News
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;