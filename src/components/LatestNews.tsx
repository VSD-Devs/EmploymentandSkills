import React from 'react';

const LatestNews = () => {
  const newsItems = [
    {
      title: 'Students Go Higher in STEM Careers',
      date: '27 Sep 2024',
      category: 'blog'
    },
    {
      title: 'Students Go Higher in Health and Social Care',
      date: '27 Sep 2024',
      category: 'blog'
    },
    {
      title: 'Students Go Higher in Digital & Artificial Intelligence Careers',
      date: '27 Sep 2024',
      category: 'blog'
    },
    {
      title: 'Empowering careers through collaboration',
      date: '31 Jul 2024',
      category: 'news'
    },
    {
      title: 'Exploring surgical careers',
      date: '23 Mar 2024',
      category: 'news'
    },
    {
      title: 'Empowering students about the creative sector',
      date: '15 Mar 2024',
      category: 'news'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest blogs and news</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Blog Posts */}
          <div>
            {newsItems
              .filter(item => item.category === 'blog')
              .map((post, index) => (
                <div key={index} className="mb-6">
                  <a href="#" className="group">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </a>
                </div>
              ))}
            <button className="mt-6 px-5 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">
              Read more posts
            </button>
          </div>

          {/* News Items */}
          <div>
            {newsItems
              .filter(item => item.category === 'news')
              .map((news, index) => (
                <div key={index} className="mb-6">
                  <a href="#" className="group">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{news.date}</p>
                  </a>
                </div>
              ))}
            <button className="mt-6 px-5 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">
              Read more news
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 