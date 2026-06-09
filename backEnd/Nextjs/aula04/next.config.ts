import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["images-assets.nasa.gov"],
    },
    reactCompiler: true,
}

export default nextConfig
