/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['view.tsx'],
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
