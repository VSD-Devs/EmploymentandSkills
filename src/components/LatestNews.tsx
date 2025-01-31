import Link from 'next/link'

const LatestNews = () => {
  const newsItems = [
    {
      title: 'Students Go Higher in STEM Careers',
      date: '27 Sep 2024',
      category: 'blog',
      slug: 'students-go-higher-in-stem-careers'
    },
    {
      title: 'Students Go Higher in Health and Social Care',
      date: '27 Sep 2024',
      category: 'blog',
      slug: 'students-go-higher-in-health-and-social-care'
    },
    {
      title: 'Students Go Higher in Digital & Artificial Intelligence Careers',
      date: '27 Sep 2024',
      category: 'blog',
      slug: 'students-go-higher-in-digital-ai-careers'
    },
    {
      title: 'Empowering careers through collaboration',
      date: '31 Jul 2024',
      category: 'news',
      slug: 'empowering-careers-through-collaboration'
    },
    {
      title: 'Exploring surgical careers',
      date: '23 Mar 2024',
      category: 'news',
      slug: 'exploring-surgical-careers'
    },
    {
      title: 'Empowering students about the creative sector',
      date: '15 Mar 2024',
      category: 'news',
      slug: 'empowering-students-creative-sector'
    }
  ]

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
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </Link>
                </div>
              ))}
            <Link 
              href="/blog"
              className="mt-6 px-5 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 inline-block"
            >
              Read more posts
            </Link>
          </div>

          {/* News Items */}
          <div>
            {newsItems
              .filter(item => item.category === 'news')
              .map((news, index) => (
                <div key={index} className="mb-6">
                  <Link href={`/news/${news.slug}`} className="group">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{news.date}</p>
                  </Link>
                </div>
              ))}
            <Link 
              href="/news"
              className="mt-6 px-5 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 inline-block"
            >
              Read more news
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews 