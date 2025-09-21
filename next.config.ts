//* @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/').pop() : 'meu-projeto';

const NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // ⚡ desativa a otimização de imagens para export
  },
};

module.exports = NextConfig;
