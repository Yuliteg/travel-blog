/** @type {import('next').NextConfig} */
const isProd = import.meta.env?.MODE === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/recipe" : "",
  assetPrefix: isProd ? "/recipe" : "",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
