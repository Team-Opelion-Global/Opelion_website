import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Compress responses
  compress: true,

  // Remove powered-by header
  poweredByHeader: false,

  // Strict production source maps off
  productionBrowserSourceMaps: false,
};

export default nextConfig;
