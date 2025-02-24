import BusinessSupportPage from '@/components/BusinessSupportPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Growth Support | South Yorkshire Skills',
  description: 'Access expert advice, funding and resources to grow your business in South Yorkshire. Learn about the Made Smarter programme and connect with local growth advisors.',
}

export default function BusinessSupportPageWrapper() {
  return (
    <main>
      <BusinessSupportPage />
    </main>
  )
} 