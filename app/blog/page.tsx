import Link from 'next/link';
import Image from 'next/image';

import ripples from '@/public/logos/ripples.png';

import { Card } from '@/app/components/Carousel';
import { InteractiveList } from '@/app/components/InteractiveList';
import categories from '../categories';
import routes from './routes';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title:
		'Patripples | Web Development and Design in Michigan by Patrick Yambrick',
	description:
		'Patripples: a web development and tech hub by Patrick Yambrick. Based in Michigan, Patrick offers personalized websites and business solutions.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section className={`width-full center margin-bottom-sm`}>
				<div className={`icon-container centered`}>
					<Image src={ripples.src} fill loading="eager" alt="Ripple logo" />
				</div>
				<h1 id="top" className={`lowercase style-1`}>
					Blog by Patrick Yambrick.
				</h1>
				<InteractiveList categories={categories} routes={routes} />
			</section>

			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
