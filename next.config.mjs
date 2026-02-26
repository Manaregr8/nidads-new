/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // modern browsers only, avoid polyfilling/transpiling baseline ES features
  experimental: {
    modern: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
