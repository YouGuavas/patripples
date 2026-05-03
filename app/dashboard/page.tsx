import Link from 'next/link';
import Image from 'next/image';

import ripples from '@/public/logos/ripples.png';
import cartographer from '@/public/characters/cartographer_calcified.svg';
import pat from '@/public/characters/pat_solo.svg';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Patripples | Management Dashboard',
	description:
		'Patripples: a learning and web development hub by Patrick Yambrick. Based in Flint, Michigan, Patrick offers personalized websites and writing, together with relevant educational resources.',
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
					Welcome to your patripples dashboard.
				</h1>

				<h2 className={`lowercase spaced style-1 thin`}>
					Here&apos;s What You&apos;ll Find Here.
				</h2>
				<ul
					className={`no-deco pad-none centered width-half left-align flex column gap-medium`}
				>
					<li>I drive sales.</li>

					<li>I build websites with Nextjs.</li>

					<li>I build management tools with Python.</li>

					<li>I write and edit content that converts.</li>

					<li>I create logo and character SVGs in Inkscape.</li>
				</ul>
			</section>
		</main>
	);
}
