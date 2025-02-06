/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This will generate a static build
  distDir: 'dist',   // This specifies the output directory
  images: {
    unoptimized: true, // Required for static export
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
    buildActivity: false
  },
  // Enable React Strict Mode for better development
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true
}

module.exports = nextConfig 