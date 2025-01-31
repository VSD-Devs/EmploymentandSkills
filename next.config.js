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
  },
}

module.exports = nextConfig 