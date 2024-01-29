/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
