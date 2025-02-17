import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import Chatbot from '@/components/Chatbot'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Yorkshire Pathways',
  description: 'Discover apprenticeship opportunities and educational pathways in Yorkshire',
  manifest: '/manifest.json',
  themeColor: '#10b981',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <ScrollToTop />
          <Navigation />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <Chatbot />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
        <script 
          src="https://website-widgets.pages.dev/dist/sienna.min.js" 
          defer
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (window.Sienna) {
                  window.Sienna.init({
                    position: 'bottom-right',
                    contrast: true,
                    fontSize: true,
                    textSpacing: true,
                    dyslexic: true,
                    saturation: true,
                    linkHighlight: true
                  });
                }
              });
            `
          }}
        />
      </body>
    </html>
  )
}
