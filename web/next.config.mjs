/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  
    transpilePackages: ['antd'],
    async headers() {
        return [
            {
                source: "/v1/iam/:path*", // 修改为与后端地址对应的路由前缀
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "http://localhost:8080", // 设置允许访问的源
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Content-Type, Authorization",
                    },
                ],
            },
        ];
    },    
};

export default nextConfig;
