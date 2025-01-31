import Image from 'next/image'
import { MapPin, Target, Users, Building2, Lightbulb } from 'lucide-react'

const Vision = () => {
  return (
    <div className="bg-zinc-50">
      {/* Hero Section with Mayor's Vision */}
      <div className="relative bg-zinc-900">
        <div className="absolute inset-0">
          <Image
            src="/images/oliver-coppard.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-emerald-400 text-sm font-medium">Our Vision</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                Transforming Skills Development in South Yorkshire
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Our mission is to create a unified platform that connects residents, businesses, and communities with opportunities for growth and development across South Yorkshire.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-1">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">One-Stop Skills Hub</h3>
                    <p className="text-white/70">A comprehensive platform making skills development accessible to everyone in South Yorkshire.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-1">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Community-Focused</h3>
                    <p className="text-white/70">Supporting residents, businesses, and educational institutions across our region.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-1">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Regional Growth</h3>
                    <p className="text-white/70">Driving economic development through targeted skills and training initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/oliver-coppard.jpg"
                  alt="Oliver Coppard, South Yorkshire Mayor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p className="text-white font-medium mb-2">Oliver Coppard</p>
                  <p className="text-white/70 text-sm">South Yorkshire Mayor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Authorities Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Local Authorities</h2>
            <p className="text-lg text-zinc-600">
              South Yorkshire comprises four distinctive areas, each contributing unique strengths to our region's economic landscape and future growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: 'Sheffield',
                description: 'A city of innovation and industry, leading the way in advanced manufacturing and digital technologies. Home to two world-class universities and a thriving creative sector.',
                colour: 'emerald',
                features: ['Advanced Manufacturing', 'Digital Industries', 'Higher Education', 'Creative & Cultural'],
                image: '/images/sheffield.jpg'
              },
              {
                name: 'Barnsley',
                description: 'Combining rich industrial heritage with emerging digital and creative sectors. A town embracing transformation while maintaining its strong community values.',
                colour: 'blue',
                features: ['Digital Campus', 'Cultural Industries', 'Manufacturing', 'Logistics'],
                image: '/images/barnsley.jpg'
              },
              {
                name: 'Rotherham',
                description: 'A hub for advanced manufacturing and engineering excellence. Home to the Advanced Manufacturing Park and innovative technology companies.',
                colour: 'purple',
                features: ['Advanced Manufacturing', 'Engineering', 'Technology Innovation', 'Green Energy'],
                image: '/images/rotherham.jpg'
              },
              {
                name: 'Doncaster',
                description: 'A key logistics hub with growing creative and digital industries. Strategic location with excellent connectivity and diverse economic opportunities.',
                colour: 'amber',
                features: ['Logistics', 'Rail Engineering', 'Aviation', 'Digital & Creative'],
                image: '/images/doncaster.jpg'
              }
            ].map((authority) => (
              <div key={authority.name} className="group relative bg-zinc-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={authority.image}
                    alt={`${authority.name} cityscape`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/20"></div>
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-${authority.colour}-500/20 backdrop-blur-sm flex items-center justify-center`}>
                      <MapPin className={`w-5 h-5 text-${authority.colour}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{authority.name}</h3>
                  </div>
                  
                  <p className="text-white/90 mb-6 line-clamp-3">
                    {authority.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {authority.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-white/10 backdrop-blur-sm text-white border border-white/10"
                      >
                        <Lightbulb className="w-4 h-4 mr-1.5 text-white/70" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Map */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">South Yorkshire Region</h3>
                <p className="text-lg text-white/80 mb-6">
                  Our combined authority brings together these four distinctive areas, creating a powerful economic region with diverse opportunities and shared ambitions for growth.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-2xl font-bold text-white">1.4M+</p>
                    <p className="text-sm text-white/70">Population</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-2xl font-bold text-white">68K+</p>
                    <p className="text-sm text-white/70">Businesses</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-2xl font-bold text-white">£34B+</p>
                    <p className="text-sm text-white/70">Economic Output</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/images/south-yorkshire-map.jpg"
                  alt="Map of South Yorkshire showing Sheffield, Barnsley, Rotherham, and Doncaster"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision 