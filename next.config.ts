import type { NextConfig } from "next";

const isAction = process.env.DEPLOY_IS_GH_ACTION === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
};

export default nextConfig;
