import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/EnglishDailyLab",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
