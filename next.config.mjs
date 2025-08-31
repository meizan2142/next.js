/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**"
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: '/products',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/meals',
                destination: '/time',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
