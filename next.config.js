/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/photo-*',
            },
            {
                protocol: 'https',
                hostname: 'https://res.cloudinary.com',
                port: '',
                pathname: '/dz86avoad/image/upload/*',
            }
        ],
    },
}

module.exports = nextConfig
