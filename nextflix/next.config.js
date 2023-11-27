/** @type {import('next').NextConfig} */

const nextConfig = {  
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/original/**',
          },
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/w500/**',
          },

        ],
      },
}

module.exports = nextConfig

const withTM = require('next-transpile-modules')(['@stripe/firestore-stripe-payments']); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode:true,
});