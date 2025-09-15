import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://clockworq.ai',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Clockworq.ai',
  },
  turbopack: {
    // Explicitly set the root to silence multi-lockfile warning in OneDrive envs
    root: __dirname,
  },
  // Railway deployment configuration
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
};

export default nextConfig;
