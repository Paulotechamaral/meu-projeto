/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // já necessário para exportação estática
  images: {
    unoptimized: true, // desativa otimização de imagens
  },
  basePath: process.env.NODE_ENV === "production" ? "/meu-projeto" : "",
};

export default nextConfig;
