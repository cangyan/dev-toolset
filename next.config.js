/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the deprecated pwa configuration from here
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

// PWA configuration is handled through the manifest.json file
// and service worker registration in _app.js
module.exports = nextConfig;
