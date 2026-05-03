export { auth as middleware } from '@/auth';

export const config = {
	// Specify which routes this middleware should run on
	matcher: ['/admin/:path*', '/profile/:path*'],
};
