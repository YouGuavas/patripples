import React from 'react';
//import Image from 'next/image';
import Nav from '@/app/components/nav';
import UpdateTicker from '@/app/components/widgets/UpdateTicker';
//import { ShareButtonsGroup } from './components/SocialButtons';
//import { SpeedInsights } from '@vercel/speed-insights/next';

// ...existing code...

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body className={`bg-5`}>
				{
					//<ShareButtonsGroup />
				}{' '}
				<Nav />
				{children}
			</body>
		</html>
	);
}
