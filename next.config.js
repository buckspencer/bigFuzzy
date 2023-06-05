/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"replicate.delivery",
			"lh3.googleusercontent.com",
			"cdn.sanity.io",
		],
	},
};

module.exports = nextConfig;
