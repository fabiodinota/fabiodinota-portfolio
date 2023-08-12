/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'lottie.host'
            },
        ],
  },
}
   
  module.exports = nextConfig