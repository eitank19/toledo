// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  cacheMaxMemorySize: 0,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  typescript: { ignoreBuildErrors: process.env.NODE_ENV === 'production' },
};

export default nextConfig;
