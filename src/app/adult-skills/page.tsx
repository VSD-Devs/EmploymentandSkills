import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Use dynamic import with no SSR for the AdultSkills component
const AdultSkills = dynamic(() => import('@/components/AdultSkills'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse text-lg text-gray-600">Loading...</div>
      </div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'Adult Skills & Employment Support | South Yorkshire',
  description: 'Access funded support, training, and resources to help you thrive in Yorkshire\'s growing industries.',
}

export default function AdultSkillsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdultSkills />
    </main>
  )
} 