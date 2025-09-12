import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Explicitly set the root to silence multi-lockfile warning in OneDrive envs
    root: __dirname,
  },
};

export default nextConfig;
