import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "lottie.host",
			},
		],
	},
};

export default nextConfig;
