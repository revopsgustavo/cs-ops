/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  allowedDevOrigins: ['127.0.0.1'],
  basePath: isGitHubPages ? '/cs-ops' : '',
  assetPrefix: isGitHubPages ? '/cs-ops/' : undefined,
};
export default nextConfig;
