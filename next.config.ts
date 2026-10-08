import type { NextConfig } from "next";
import { projectRedirects } from "./src/content/links";

const nextConfig: NextConfig = {
  async redirects() {
    return projectRedirects();
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
