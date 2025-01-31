import Vision from '@/components/Vision'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Vision | South Yorkshire Pathways',
  description: 'Discover South Yorkshire Mayoral Combined Authority\'s vision for skills development and career guidance across Sheffield, Barnsley, Rotherham, and Doncaster.',
}

export default function VisionPage() {
  return <Vision />
} 