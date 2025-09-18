/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_API: process.env.BASE_API,
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY
    },
};

export default nextConfig;
