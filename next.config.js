/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
  },
  devIndicators: {
    buildActivity: true
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  logging: {
    level: 'verbose',
    fetches: {
      fullUrl: true
    }
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
  trailingSlash: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
  }
}

module.exports = nextConfig