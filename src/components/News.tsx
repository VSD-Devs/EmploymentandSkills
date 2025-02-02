import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const News = () => {
  const newsItems = [
    {
      title: "£5M Investment in Digital Skills Training",
      date: "March 1, 2024",
      category: "Funding",
      excerpt: "New funding announced to support digital skills development across South Yorkshire, benefiting over 1,000 residents.",
      image: "/images/news/digital-skills.jpg"
    },
    {
      title: "Manufacturing Sector Growth Report",
      date: "February 28, 2024",
      category: "Industry Insights",
      excerpt: "Latest report shows 15% growth in manufacturing jobs across the region, with continued expansion expected.",
      image: "/images/news/manufacturing.jpg"
    },
    {
      title: "New Apprenticeship Programs Launch",
      date: "February 25, 2024",
      category: "Education",
      excerpt: "Ten new apprenticeship programs launched in partnership with leading businesses in the green energy sector.",
      image: "/images/news/apprenticeship.jpg"
    }
  ];

  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full mb-6">
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
            <span className="text-emerald-700 text-sm font-medium">Latest Updates</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">Latest News</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in South Yorkshire&apos;s employment and skills sector
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-zinc-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-600 mb-4">{item.excerpt}</p>
                <Link
                  href="#read-more"
                  className="inline-flex items-center text-zinc-900 hover:text-emerald-600 font-medium transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#news-archive"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;