import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // distDir: process.env.NODE_ENV === 'production' ? '.next-prod' : '.next',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['images.unsplash.com', 'images.pexels.com'],
    },
};
export default nextConfig;
