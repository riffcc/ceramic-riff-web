/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_IPFS_GATEWAY]
  },
}
