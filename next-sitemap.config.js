/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://www.shuttle.rs',
	generateRobotsTxt: true,
}
