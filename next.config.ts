import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
  For SEO, performance, and maintainability, the best solution is:
  using a server-side redirect in next.config.js
  */
 
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // 307
      },
    ];
  },
};

export default nextConfig;
