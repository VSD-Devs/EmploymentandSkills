import YoungPeople from '@/components/YoungPeople'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Young People | South Yorkshire Careers',
  description: 'Explore career opportunities, apprenticeships, and educational pathways for young people in South Yorkshire.',
}

export default function YoungPeoplePage() {
  return (
    <main>
      <YoungPeople />
    </main>
  )
} 