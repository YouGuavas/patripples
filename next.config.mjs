/** @type {import('next').NextConfig} */
import withSerWister from '@serwist/nextjs';
const withSerwist = withSerWistInit({
	swSrc: 'app/sw.ts',
	swDest: 'public/sw.js',
	disable: process.env.NODE_ENV === 'development',
});
const nextConfig = {
	reactStrictMode: true,
};

export default withSerwist(nextConfig);
