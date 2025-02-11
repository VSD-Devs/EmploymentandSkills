import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import Chatbot from '@/components/Chatbot'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Digital Career Hub',
  description: 'Explore digital careers, apprenticeships, and educational pathways',
  manifest: '/manifest.json',
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
        <script 
          src="https://website-widgets.pages.dev/dist/sienna.min.js" 
          defer
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
      </head>
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
        </ThemeProvider>
      </body>
    </html>
  )
} 