import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.logo.com', 'flagcdn.com'],
    unoptimized: true // Eğer statik export kullanıyorsanız
  }
};

export default nextConfig;
