/** @type {import('next').NextConfig} */
const nextConfig = {
      async headers() {
        return [
          {
            // CORS headers path for all routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "https://beaded-wear.vercel.app" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      },
      images: {
        domains: ['cdn.sanity.io'],
      },  
      eslint: {
        ignoreDuringBuilds: true, 
      },
};

export default nextConfig;
