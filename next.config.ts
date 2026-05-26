import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export requires unoptimized images (no server to resize them)
    unoptimized: true,
  },
};

export default nextConfig;
