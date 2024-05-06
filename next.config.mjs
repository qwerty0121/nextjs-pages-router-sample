/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
