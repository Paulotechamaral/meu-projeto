/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // necessário para GitHub Pages
  images: {
    unoptimized: true, // 👈 desativa Image Optimization
  },
  basePath: "/meu-projeto",
  assetPrefix: "/meu-projeto/",
};

export default nextConfig;
