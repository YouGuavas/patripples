import Link from 'next/link';
import Image from 'next/image';

import ripples from '@/public/logos/ripples.png';
import { cards } from './index_cards';

import { Card } from '@/app/components/Carousel';
import Collapsible from './components/blog/Collapsible';

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
					Welcome to patripples.
				</h1>
				<Card
					title={cards[0].title}
					style="image"
					description={cards[0].description}
					image={{
						src: cards[0].image.src,
						alt: cards[0].image.alt,
						fill: cards[0].image.fill,
						loading: 'eager',
						fetchPriority: 'high',
						priority: true,
					}}
				/>
			</section>

			<section
				className={`width-full flex gap-medium margin-top-sm margin-bottom-sm`}
			>
				<div className={`center width-half`}>
					<h3 className={`lowercase spaced style-1 thin`}>What is here.</h3>{' '}
					<ul
						className={`no-deco pad-none centered flex column gap-small left-align width-full`}
					>
						<li>
							<strong>Projects and Rates</strong> – Find out what I offer you
							and how much it will cost.
						</li>
						<li>
							<strong>Digital Business Tools</strong> – Ever wonder what
							it&apos;d be like if an SEO master chose to break all the rules?
							You can find exactly that in my writings.
						</li>{' '}
						<li>
							<strong>SVG Art and Browser Games</strong> – Want to explore a
							narrative while creeping through a dungeon? Go check out{' '}
							<Link className={`style-1 no-deco`} href="/games/dungeon">
								Dungeon
							</Link>
							.
						</li>
					</ul>{' '}
				</div>
				<div className={`center width-half`}>
					<h3 className={`lowercase spaced style-1 thin`}>How I Help You.</h3>{' '}
					<ul
						className={`no-deco pad-none centered flex column gap-small left-align width-full`}
					>
						<li>
							<strong>Drive You Sales</strong> - Want more sales? I will
							translate my high in-person conversion rate into a repeatable
							strategy for you.
						</li>
						<li>
							<strong>Build On Your Small Business Systems</strong> - Clunky
							inventory system slowing you down? Get ahold of me.
						</li>
						<li>
							<strong>Talk About You</strong> - Do you do great work for others,
							and still struggle to sell yourself? Let me help.
						</li>
					</ul>{' '}
				</div>
			</section>

			<section
				className={`width-full flex gap-medium margin-top-sm margin-bottom-sm flex column center`}
			>
				<h2 className={`lowercase spaced style-1 thin`}>
					Check Out My Latest Youtube Videos.
				</h2>{' '}
				<iframe
					width="450"
					height="315"
					src="https://www.youtube.com/embed/I2sZ4MJ13Vo?si=zg9ZanvZl9hgrtvB"
					title="Engineering Independence"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</section>
			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
