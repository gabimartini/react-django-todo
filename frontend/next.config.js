/** @type {import('next').NextConfig} */
require("dotenv").config

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader','css-loader'
      ],
    })
 
    return config
  },
}

module.exports = nextConfig
