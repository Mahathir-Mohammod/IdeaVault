/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    globalNotFound: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "https://ideavault-server-gamma.vercel.app/api/auth/:path*",
      },
    ];
  },
};

export default nextConfig;