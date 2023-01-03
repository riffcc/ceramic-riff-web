/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SUBDOMAIN_INFURA_IPFS_GATEWAY}.infura-ipfs.io`]
  }
}
