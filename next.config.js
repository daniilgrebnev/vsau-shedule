/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'
const withOffline = require('next-offline')

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
	dest: 'public',
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/],
	register: true,
	skipWaiting: true,

	// disable: prod ? false : true
})

const nextConfig = withPWA({
	output: 'export',
})
module.exports = nextConfig
