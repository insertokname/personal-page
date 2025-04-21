import type { NextConfig } from "next";

const isAction = process.env.DEPLOY_IS_GH_ACTION === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isAction ? '/personal-page' : '',
  assetPrefix: isAction ? '/personal-page' : '',
  trailingSlash: true,
};

export default nextConfig;
