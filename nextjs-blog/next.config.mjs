/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Khi deploy lên GitHub Pages (repo project) site nằm dưới /<tên-repo>/.
  // Biến BASE_PATH chỉ được đặt trong workflow, chạy local thì để trống.
  basePath: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
