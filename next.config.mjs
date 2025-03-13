/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/",
  assetPrefix: "/recipe",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
