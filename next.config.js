/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['github.com'],
	},
	async rewrites() {
		return [
			{
				source: '/rss.xml',
				destination: '/api/rss',
			},
		]
	},
	redirects() {
		return [
			{
				source: '/blog',
				destination: '/blog/tags/all',
				permanent: true,
			},
		]
	},
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig
