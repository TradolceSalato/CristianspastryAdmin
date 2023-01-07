/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/img/logos/mark.svg?color=indigo&shade=600',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
