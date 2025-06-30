
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // allowedDevOrigins is causing issues, removing it for now.
  },
  webpack: (config) => {
    // This is to suppress the "require.extensions is not supported by webpack" warning from Handlebars, a Genkit dependency.
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /require.extensions is not supported by webpack/,
    ];
    return config;
  },
};

export default nextConfig;
