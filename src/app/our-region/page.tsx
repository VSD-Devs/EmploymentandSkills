import Image from 'next/image'

export const metadata = {
  title: 'Our Region | South Yorkshire Pathways',
  description: `Discover South Yorkshire's economic landscape, our challenges, opportunities and vision for the future.`,
}

export default function OurRegionPage() {
  return (
    <main className="bg-gradient-to-b from-zinc-50 to-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[80vh]">
          <Image
            src="/images/region.jpg"
            alt="Aerial view of South Yorkshire"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/60 to-zinc-50"></div>
        </div>

        <div className="relative min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-white text-sm font-medium">Our Region</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                South Yorkshire
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed">
                A region of innovation, industry and opportunity, where traditional heritage meets future growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 mb-24">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center p-6 rounded-2xl bg-emerald-50">
              <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-3">1.4M</div>
              <div className="text-sm sm:text-base text-emerald-900 font-medium">Population</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-blue-50">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">4</div>
              <div className="text-sm sm:text-base text-blue-900 font-medium">Local Authorities</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-purple-50">
              <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-3">£34bn</div>
              <div className="text-sm sm:text-base text-purple-900 font-medium">Economic Output</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-amber-50">
              <div className="text-4xl sm:text-5xl font-bold text-amber-600 mb-3">68k</div>
              <div className="text-sm sm:text-base text-amber-900 font-medium">Businesses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Our Purpose */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-3xl -z-10"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">Our Purpose</h2>
            <div className="prose prose-zinc max-w-none">
              <p className="text-xl text-zinc-600 mb-6 leading-relaxed">
                South Yorkshire Mayoral Combined Authority (SYMCA) is dedicated to creating a stronger, greener, fairer region. We work to improve the lives of our communities by:
              </p>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Connecting people to opportunities through better transport and digital infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Supporting businesses to grow and innovate</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Developing a skilled workforce for current and future industries</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Creating sustainable communities and tackling the climate emergency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Ambition */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-3xl -z-10"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">Our Ambition</h2>
            <div className="prose prose-zinc max-w-none">
              <p className="text-xl text-zinc-600 mb-6 leading-relaxed">
                We aim to transform South Yorkshire into a region where:
              </p>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Innovation drives economic growth across all sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Every person has access to quality education and skills development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Our industrial heritage powers our sustainable future</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Communities thrive through inclusive growth and opportunity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mayor Section */}
        <div className="mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-transparent rounded-3xl"></div>
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Meet Our Mayor</h2>
              <p className="text-white text-lg mb-8 leading-relaxed">
                Oliver Coppard serves as the Mayor of South Yorkshire, championing our region's interests and driving forward our ambitious agenda for growth and innovation.
                He's committed to unlocking South Yorkshire's full potential and creating opportunities for all our residents.
              </p>
            </div>
            <div className="lg:h-[600px] relative">
              <Image
                src="/images/oliver-coppard.jpg"
                alt="Oliver Coppard, Mayor of South Yorkshire"
                className="object-cover rounded-3xl"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Key Sectors */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">Key Growth Sectors</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              South Yorkshire is home to world-class facilities and innovative businesses across multiple sectors
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Manufacturing',
                description: 'Home to the Advanced Manufacturing Innovation District and world-class research facilities.',
                icon: '🏭',
                color: 'bg-rose-50 text-rose-900'
              },
              {
                title: 'Digital & Creative',
                description: 'A growing hub for digital innovation, gaming, and creative industries.',
                icon: '💻',
                color: 'bg-purple-50 text-purple-900'
              },
              {
                title: 'Clean Energy',
                description: 'Leading the way in sustainable energy solutions and green technology.',
                icon: '🌱',
                color: 'bg-emerald-50 text-emerald-900'
              },
              {
                title: 'Healthcare Technology',
                description: 'Pioneering advancements in medical technology and healthcare innovation.',
                icon: '🏥',
                color: 'bg-blue-50 text-blue-900'
              },
              {
                title: 'Logistics & Rail',
                description: 'Strategic location and infrastructure supporting transport innovation.',
                icon: '🚂',
                color: 'bg-amber-50 text-amber-900'
              },
              {
                title: 'Professional Services',
                description: 'Growing centre for financial and professional services.',
                icon: '💼',
                color: 'bg-indigo-50 text-indigo-900'
              }
            ].map((sector, index) => (
              <div key={index} className={`${sector.color} rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow`}>
                <div className="text-4xl mb-6">{sector.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{sector.title}</h3>
                <p className="text-lg opacity-90">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Data Integration Notice */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Labour Market Intelligence</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are working to integrate real-time labour market data to provide insights into regional employment trends, skills gaps, and growth opportunities. This information will help inform decision-making for individuals, businesses, and training providers.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 