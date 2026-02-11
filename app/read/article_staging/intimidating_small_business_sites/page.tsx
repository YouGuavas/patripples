import Image from 'next/image';
import Link from 'next/link';
import raditz_goku from '@/public/memes/raditz_goku.jpeg';

import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

export const metadata: Metadata = {
	title:
		"Patripples | 'Why So Many Small Business Sites Come Across as Intimidating (And How Not To)' by Patrick Yambrick",
	description:
		"Patrick's Pitfalls is a series dedicated to sharing painfully earned wisdom in a digestible format. This one is about vague wording, how it crushes web traffic, and how to fix it. Written by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Why Are So Many Small Business Websites So Intimidating? (And How To
				Make Sure Yours Isn&apos;t)
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Thursday, Feb 5, 2026'}
				edited={'Thursday, Feb 5, 2026'}
			/>

			<br />
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					My Old Small Business Website Was Intimidating.
				</h2>

				<p className={`paragraph width-full block left-align`}>
					My old site was intimidating. And it wasn&apos;t the only one.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you are visiting this personal website, you likely never visited
					that one.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Everything on there signaled &quot;this is a guy who thinks he&apos;s
					smarter than me.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Of course, that was not my intent. As a local web developer, writer,
					and freelancer based in Flint, Michigan, my intent was altruistic: to
					help local small businesses, creatives, entrepreneurs, and other
					competent solo operators to establish or strengthen their digital
					presence - and stay human while doing it.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Small Business Websites Are Intimidating.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I don&apos;t know about you, but I think a lot of small business
					websites are intimidating. Not all, but many.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Perhaps you feel the same way?
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Why Are Small Business Websites So Intimidating?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Like me, most small business website owners probably do not intend to
					scare their users and potential clients off.
				</p>

				<Image
					src={raditz_goku.src}
					height={500}
					width={250}
					alt={`Raditz stands triumphantly over Goku.`}
				/>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Why Is Vague Wording Bad?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					We can keep AI and the algorithm happy by being clear, focused,
					concise, and direct. Before I share my next ad or blog post, I am
					going to take the extra time to scan it for simplifications,
					clarifications, and anything in the tone which implies grandiosity or
					smugness on my part. If you find yourself with less traffic than you
					feel you reasonably deserve, I invite you to try the same.{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="/contact"
					>
						Let me know
					</Link>{' '}
					what happens.
				</p>
			</section>

			<Footer title={"'Patrick's Pitfalls - Vague Wording'"} />
		</main>
	);
}
