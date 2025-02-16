import Link from 'next/link'
import { Building2, Users, Calendar, ChevronRight } from 'lucide-react'

interface Listing {
  type: string
  title: string
  description: string
  school: string
  yearGroup: string
  timing: string
  date: string
  href: string
}

interface SchoolMarketplaceProps {
  listings: Listing[]
  showPostOpportunity?: boolean
}

export default function SchoolMarketplace({ listings, showPostOpportunity = true }: SchoolMarketplaceProps) {
  return (
    <div id="marketplace" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Opportunities To Support Local Schools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with training providers for career talks, mock interviews, and workshops.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                    {listing.type}
                  </span>
                  <span className="text-sm text-gray-500">{listing.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{listing.title}</h3>
                <p className="text-gray-600 mb-4">{listing.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>{listing.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{listing.yearGroup}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{listing.timing}</span>
                  </div>
                </div>
                <Link
                  href={listing.href}
                  className="block w-full text-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-500 transition-colors"
                >
                  Express Interest
                </Link>
              </div>
            </div>
          ))}
        </div>
        {showPostOpportunity && (
          <div className="text-center mt-12">
            <Link
              href="/educators/post-opportunity"
              className="inline-flex items-center bg-white border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Post an Opportunity
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 