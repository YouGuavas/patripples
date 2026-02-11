import Image from 'next/image';
import Link from 'next/link';
import salt_guy from '@/public/memes/salt_guy.svg';
import patrick_super_bowl from '@/public/characters/patrick_super_bowl.svg';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

export const metadata: Metadata = {
	title:
		"Patripples | 'How Small Businesses Can Stay Steady During Disruption' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'How Small Businesses Can Stay Steady During Disruption.' Consistency and foresight are key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How Small Businesses Benefit From Governor Gretchen Whitmer&apos;s
				Balanced Budget
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Monday, Feb 11, 2026'}
				edited={'Monday, Feb 11, 2026'}
			/>

			<br />
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is A Disruption?
				</h2>

				<p className={`paragraph width-full block left-align`}>Bad Bunny.</p>
				<p className={`paragraph width-full block left-align`}>Kid Rock.</p>
				<p className={`paragraph width-full block left-align`}>Greenland.</p>
				<p className={`paragraph width-full block left-align`}>ChatGPT.</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={patrick_super_bowl.src}
						fill
						alt={`Patrick attends the Super Bowl.`}
					/>
				</div>
			</section>

			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does All This Mean For Your Small Business And You?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					Remember that huge boulder from the section about{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="#disruptions"
					>
						disruptions
					</Link>
					? That boulder is the Super Bowl. You can&apos;t lift that. Neither
					can I. We are just some guys. Or you might be a she or a they. The
					point remains: even though we can&apos;t lift one boulder, we can drop
					a bunch of pebbles. Those pebbles are what steady business is about:
					small, consistent actions done well, compounding over time.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You are here because you are curious about the Bad Bunny Super Bowl
					Halftime Show, Kid Rock, Greenland, or{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="/hire"
					>
						Web Development and Design for your small business
					</Link>
					. You don&apos;t need me to tell you how to run your business. Keep
					doing what you know how to do, and use your adaptability and
					attunement to the moment the same way your ancestors taught you to
					season your food:
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image src={salt_guy.src} fill alt={`Just the right touch.`} />
				</div>
				<p className={`paragraph width-full block left-align`}>
					With just the right touch.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The Super Bowl is a boulder.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That idea you&apos;ve been sitting on is a pocket full of pebbles.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Drop that thing this week and watch the water ripple.
				</p>
			</section>

			<Footer
				title={"'How Small Businesses Can Stay Steady During Disruption'"}
			/>
		</main>
	);
}
