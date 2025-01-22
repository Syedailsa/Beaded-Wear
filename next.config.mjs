/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     config.cache = false;
    //     return config;
    //   },
      images: {
        domains: ['cdn.sanity.io'], // Adding Sanity's CDN domain 
      },  
      eslint: {
        ignoreDuringBuilds: true, // Disables ESLint during builds
      },
};

export default nextConfig;
