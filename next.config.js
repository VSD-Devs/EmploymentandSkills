/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This will generate a static build
  distDir: 'dist',   // This specifies the output directory
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  devIndicators: {
    buildActivity: false
  },
  // Enable React Strict Mode for better development
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig 