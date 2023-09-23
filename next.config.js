/** @type {import('next').NextConfig} */
const nextConfig = {
    pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
}

module.exports = nextConfig
