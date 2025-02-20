import type { Metadata } from 'next'
import AdultSkills from '@/components/AdultSkills'

export const metadata: Metadata = {
  title: 'Adult Skills & Employment Support | South Yorkshire',
  description: 'Access funded support, training, and resources to help you thrive in Yorkshire\'s growing industries.',
}

export default function AdultSkillsPage() {
  return (
    <main>
      <AdultSkills />
    </main>
  )
} 