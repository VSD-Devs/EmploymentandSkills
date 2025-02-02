import Vision from '@/components/Vision'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Vision | Yorkshire Pathways',
  description: 'Discover our vision for transforming skills development and career opportunities across Yorkshire, creating pathways to success for everyone in our community.',
}

export default function VisionPage() {
  return <Vision />
} 