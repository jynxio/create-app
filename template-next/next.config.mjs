/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            '/*': ['./content/**/*'],
        },
    },
    reactStrictMode: true,
};

export default nextConfig;
