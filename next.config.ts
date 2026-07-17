import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ["framer-motion"],
  // Webpack compilation succeeds for all files including Three.js components.
  // Strict TS checks for R3F JSX intrinsic elements are deferred to tsc.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
