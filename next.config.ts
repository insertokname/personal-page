import type { NextConfig } from "next";

const isAction = process.env.DEPLOY_IS_GH_ACTION ==  'true';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: isAction? '/personal-page':'',
};

export default nextConfig;
