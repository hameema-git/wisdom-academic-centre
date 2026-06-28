/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.29.55",
  ],
}

export default nextConfig