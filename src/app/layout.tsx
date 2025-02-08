import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import AccessibilityToolbar from '@/components/AccessibilityToolbar'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'South Yorkshire Pathways - Career Development in Yorkshire',
  description: 'Connecting South Yorkshire\'s future workforce with opportunities for growth and development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <ScrollToTop />
          <Navigation />
          <AccessibilityToolbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
} 