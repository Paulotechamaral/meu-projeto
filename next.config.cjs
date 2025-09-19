/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // necessário para GitHub Pages
  images: {
    unoptimized: true, // 👈 desativa Image Optimization
  },
};

export default nextConfig;
