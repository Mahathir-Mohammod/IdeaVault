/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "http://localhost:5000/api/auth/:path*",
      },
    ];
  },
};

export default nextConfig;
