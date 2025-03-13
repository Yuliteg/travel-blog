/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH
  }
};

export default nextConfig;
