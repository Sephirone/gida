import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.logo.com', 'flagcdn.com']
  }
};

export default nextConfig;
