import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ["framer-motion"],
  typescript: {
    ignoreBuildErrors: true,
  },
  // Force webpack (Turbopack has issues with framer-motion exports)
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      usedExports: false,
    };
    return config;
  },
};

export default nextConfig;
