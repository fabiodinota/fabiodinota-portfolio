import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: {
		minimumCacheTTL: 14400,
		remotePatterns: [
			{
				hostname: "lottie.host",
			},
		],
	},
};

export default nextConfig;
