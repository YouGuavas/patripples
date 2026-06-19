import React from 'react';
//import Image from 'next/image';
import Nav from '@/app/components/nav';
import Image from 'next/image';

import google_qr from '@/public/qr_codes/google_review.png';

import Tips from '@/app/components/Tips';
import UpdateTicker from '@/app/components/widgets/UpdateTicker';
import {
	ShareButtonsGroup,
	ReviewButtonsGroup,
	FollowButtonsGroup,
} from './components/widgets/SocialButtons';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import routes from './routes';

//import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { UrlProviderWrapper } from './UrlProviderWrapper';
import { ThemeProviderWrapper } from './ThemeProviderWrapper';
import CartButton from './components/shop/listings/CartButton';

declare global {
	interface Window {
		Snipcart: any;
	}
}
// ...existing code...

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://app.snipcart.com" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />

				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
				/>
			</head>
			<body className={`bg-5`}>
				<ThemeProviderWrapper>
					<UrlProviderWrapper>
						<CartButton />
						<UpdateTicker
							updates={[
								{
									text: "Read 'Holiday Edition: Saint Patrick\'s Day' - out now.",
									href: '/read/front_page/holiday_special_saint_patrick',
								},

								{
									text: 'Shop coming soon. Demo out now (not live).',
									href: '/shop',
								},
							]}
						/>
						<div className="fixed flex column left-align py-2">
							<ShareButtonsGroup /> <ReviewButtonsGroup />
						</div>
						<div
							hidden
							suppressHydrationWarning
							id="snipcart"
							data-api-key="OGU2OWMwOGMtNjM2Mi00MWEyLTlhYmUtYjA1MTA4YzY5MzNkNjM4MTI3MDA4NDE3MzEzOTgy"
							data-config-modal-style="side"
						></div>
						<div className="fixed flex column right py-2">
							<FollowButtonsGroup />
						</div>
						<Nav routes={routes} />
						<Tips />
						{children}
						<div className="flex column centered center">
							<p className={`paragraph width-half block left-align`}>
								If you haven&apos;t already, feel free to leave me the Google
								review you think I deserve:
							</p>
							<div className="image-container width-full center margin-bottom-xl">
								<Image
									loading="lazy"
									fetchPriority="low"
									quality={70}
									width={150}
									height={150}
									src={google_qr.src}
									alt="Google Review QR Code"
								/>
							</div>
						</div>
					</UrlProviderWrapper>
				</ThemeProviderWrapper>
			</body>
			<script
				async
				src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
				defer
			></script>
			<Analytics />
		</html>
	);
}
