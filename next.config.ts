/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Forces Next.js to create a static 'out' folder
  images: { unoptimized: true }, // Required for static exports
  trailingSlash: true,       // Helps Cloudflare route to /post-job/ correctly
};

export default nextConfig;