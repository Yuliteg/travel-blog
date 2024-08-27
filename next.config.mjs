/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/recipe",
  assetPrefix: "/recipe/",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
