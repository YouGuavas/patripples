import React from 'react';
import Image from 'next/image';
import Nav from '@/app/components/nav';
import Tips from '@/app/components/Tips';
import UpdateTicker from '@/app/components/widgets/UpdateTicker';
import { ShareButtonsGroup } from './components/SocialButtons';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import { UrlProviderWrapper } from './UrlProviderWrapper';
import { ThemeProviderWrapper } from './ThemeProviderWrapper';
//import CartButton from './components/shop/listings/CartButton';

declare global {
	interface Window {
		Snipcart: any;
	}
}

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Orbitron:wght@400..900&family=Patrick+Hand&display=swap"
					rel="stylesheet"
				/>

				<link rel="preconnect" href="https://app.snipcart.com" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
				/>
			</Head>
			<body className={`${inter.className} bg-5`}>
				<ThemeProviderWrapper>
					<UrlProviderWrapper>
						{/*						<CartButton />
						 */}{' '}
						<UpdateTicker
							updates={[
								{
									text: "Read 'Patrick's Pitfalls - Vague Wording' - out now.",
									href: '/learn/read/vague_wording',
								},
							]}
						/>
						{
							//<ShareButtonsGroup />
						}{' '}
						<Nav />
						<Tips />
						{children}
					</UrlProviderWrapper>
				</ThemeProviderWrapper>
			</body>
			{/*<script
				async
				src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
			></script>
			<div
				hidden
				id="snipcart"
				data-api-key="OGU2OWMwOGMtNjM2Mi00MWEyLTlhYmUtYjA1MTA4YzY5MzNkNjM4MTI3MDA4NDE3MzEzOTgy"
			></div>*/}

			<Analytics />
		</html>
	);
}
