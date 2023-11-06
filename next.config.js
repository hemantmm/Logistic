/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites()
    {
        return [
            {
                source:'/products/:path*',
                destination:'/products/product-detail'
            }
        ]
    }
}
