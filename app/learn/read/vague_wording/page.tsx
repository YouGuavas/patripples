import Image from 'next/image';
import Link from 'next/link';
import raditz_goku from '@/public/memes/raditz_goku.jpeg';

import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';

export const metadata: Metadata = {
	title: "Patripples | 'What Is Patripples' by Patrick Yambrick",
	description: '. Written by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How Patrick Builds A Website
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Friday, Jan 30, 2026'}
				edited={'Friday, Jan 30, 2026'}
			/>

			<br />
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Are Patrick&apos;s Pitfalls?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I have always been a fan of the saying, "Smart people learn from their
					mistakes. Wise people learn from the mistakes of others." In that
					context, I offer you Patrick&apos;s Pitfalls: wisdom painfully earned
					and mistakes carelessly made, so that you don&apos;t waste your time
					doing the same.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As someone who likes to try their hand at everything, and who insists
					on doing it the wrong way first so that he can learn where the edges
					lie, I have much wisdom to share.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Patrick&apos;s Pitfalls is my attempt at bringing you brief, useful
					snippets of wisdom to make your life easier.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Today&apos;s Pitfall: Vague Wording.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					"Welcome to my class on tensor analysis. It is about tensors, etc.
					Hope that helps." We have all done something like this. If you are
					looking at this page, that is because you are an intelligent person.
					You are no doubt talented in your domain. When you think about that
					niche thing within your domain, you mentally conjure its shape so
					easily that you sometimes forget how hard it was for you to get where
					you are. How clear, meticulous, and deliberate you had to be while you
					were learning.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is not a knock. It is a compliment.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You have been working at your craft for <em>so</em> long that you have
					forgotten the pain that a past version of you struggled mightily with,
					and maybe never thought you&apos;d overcome.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you&apos;re a Dragon Ball fan, that&apos;s like what happened with
					Raditz.
				</p>
				<Image
					src={raditz_goku.src}
					height={500}
					width={250}
					alt={`Raditz stands triumphantly over Goku.`}
				/>
				<p className={`paragraph width-full block left-align`}>
					If you&apos;re not, it&apos;s like that kid who used to tease you in
					elementary school who you haven't seen or heard from in decades.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That&apos;s what you&apos;ve done with your craft. You should be
					proud. That said, it is contributing to your vaguely worded ads and
					posts. And that is limiting your traffic.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Why Is Vague Wording Bad?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					An excellent question. Vague wording kills ads in a number of ways.
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Web Traffic Limiter: Algorithmic Suppression
				</h3>
				<p className={`paragraph width-full block left-align`}>
					It is no secret that in 2026, AI and algorithms are dominating the
					internet. In order to see our traffic soar, we have to appease the
					digital deities of these ever-churning seas.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We&apos;ve got to make the algorithm happy.
				</p>
				<p className={`paragraph width-full block left-align`}>
					How do we appease AI?
				</p>
				<ul
					className={`no-deco pad-none centered flex column gap-small left-align width-full`}
				>
					<li>
						<strong>Clear Wording</strong> - AI and the algorithm like it when
						we are clear with our words. Clear wording helps any filtration
						system, digital or biological, to efficiently sift through our
						thought and emerge with something of meaning. This is good for small
						business owners and creatives alike.
					</li>
					<li>
						<strong>Focused Content</strong> - Where clear wording allows
						visitors, AI, and search engines to efficiently sift through the
						ideas within our words, delivering focused content helps those same
						observers to efficiently determine the directionality of our
						thoughts.
					</li>
					<li>
						<strong>Appropriate Tone</strong> - If wording helps with filtration
						efficiency, and content focus helps with determining thought
						directionality, then tone projects intent.
					</li>
				</ul>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Web Traffic Limiter: User Intimidation
				</h3>
				<p className={`paragraph width-full block left-align`}>
					AI and algorithms aside, we live in an anxiety society.
				</p>
			</section>
		</main>
	);
}
