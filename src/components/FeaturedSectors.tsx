import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    name: "Advanced Manufacturing",
    description: "South Yorkshire is home to cutting-edge manufacturing facilities driving innovation in aerospace, automotive and more.",
    icon: "/images/icons/manufacturing.svg",
    image: "/images/sectors/manufacturing.jpg",
    slug: "/sectors/advanced-manufacturing"
  },
  {
    name: "Digital & Technology",
    description: "From software development to cyber security, our digital sector is rapidly expanding with new opportunities.",
    icon: "/images/icons/digital.svg",
    image: "/images/sectors/digital.jpg",
    slug: "/sectors/digital-technology"
  },
  {
    name: "Health & Wellbeing",
    description: "Healthcare innovation and services create meaningful careers that make a difference to our communities.",
    icon: "/images/icons/health.svg",
    image: "/images/sectors/healthcare.jpg",
    slug: "/sectors/health-wellbeing"
  },
  {
    name: "Green Energy",
    description: "Be part of the renewable energy revolution with careers in sustainability and clean technology.",
    icon: "/images/icons/energy.svg",
    image: "/images/sectors/green-energy.jpg",
    slug: "/sectors/green-energy"
  }
];

export default function FeaturedSectors() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 mb-3">
            <span className="text-xs font-medium text-gray-700">Growth Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            South Yorkshire's Key Sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover thriving industries with excellent career opportunities throughout our region
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {sectors.map((sector, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={sector.image} 
                  alt={sector.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />
              </div>
              
              <div className="relative z-10 p-6 min-h-[280px] flex flex-col justify-end text-white">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{sector.name}</h3>
                  <p className="text-gray-200 mb-4">{sector.description}</p>
                </div>
                <Link 
                  href={sector.slug} 
                  className="mt-auto inline-flex items-center text-white font-medium border-b border-white/40 hover:border-white pb-1 self-start transition-all"
                >
                  Explore careers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/sectors"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-md text-base"
          >
            View all sectors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 