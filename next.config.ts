import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProduction ? '/multi-space' : ''
};

export default nextConfig;
