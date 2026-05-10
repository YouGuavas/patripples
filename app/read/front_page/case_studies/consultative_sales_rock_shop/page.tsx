import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';
import { MC_Question } from '@/app/components/quizzes/MC_Question';
import Collapsible from '@/app/components/blog/Collapsible';
import TableOfContents from '@/app/components/blog/TableOfContents';

import tally from '@/public/testimonials/general/tally.png';

export const metadata: Metadata = {
	title:
		"Patripples | 'Case Study: Consultative Selling In A Rock Shop' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Holiday Edition: Saint Patrick\'s Day.' Understanding the Pace of War is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Case Study: Consultative Selling In A Rock Shop
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Friday, May 8, 2026'}
				edited={'Friday, May 8, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>
				When I first started working with the Rock Shop, I was surprised to hear
				that they were struggling to keep up with certain aspects of the
				business.
			</p>
			<p className={`paragraph width-full block left-align`}>
				With a loyal customer base evidenced by a high Google review count,
				great products, and knowledgeable staff, I expected that they would be
				on top of their game in all domains.
			</p>
			<p className={`paragraph width-full block left-align`}>
				After all, they had been doing a great job of building a community
				around their shop. I was drawn in by a set of high value friends who
				followed their Facebook page.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I had been in the midst of an entrepreneurial sprint, going door to door
				and pitching my digital optimization services, when I spotted the
				shop&apos;s listing about a position. This triggered my curiosity,
				although I was sure I would skip working for them in the advertised
				position and skip to fixing their digital dilemma.
			</p>
			<p className={`paragraph width-full block left-align`}>
				With a wild 6 second load time for their website on non-fiber
				connections, I knew that I could immediately change their lives by
				overhauling their website and surrounding ecosystem day one.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Although decreasing that load time from 6 seconds to 2 seconds and
				clarifying their shipping policy could triple their online sales, the
				shop decided that they did not want that.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				So I devised a plot.
			</p>{' '}
			<h2
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Get Good, Sales
			</h2>
			<p className={`paragraph width-full block left-align`}>
				I would get them some good sales.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>So I did.</p>{' '}
			<div className={`jumbo-container centered`}>
				<Image
					fetchPriority="high"
					loading="eager"
					src={tally.src}
					fill
					alt={`35/38.`}
				/>
			</div>
			<p className={`paragraph width-full block left-align`}>
				In the pictured tally, I under-represent the true volume of the day. In
				this tally, I was only able to count out 29 walk-ins. In reality, there
				were 38 on the day.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}></p>
			<hr />
			<TableOfContents
				title="Sections"
				sections={['Overcoming Skepticism', 'Quiz']}
			/>
			<hr />
			<h2
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				How To Come Back Strong
			</h2>
			<p className={`paragraph width-full block left-align`}>
				That mission, as we know, turned out to be a success - resulting in the
				conversion of much of Ireland to Christianity.
			</p>
			<Collapsible id="1" bg="bg-6" title="I - Overcoming Skepticism">
				<p className={`paragraph width-full block left-align`}>
					Further, it is believed that Patrick created the Celtic cross:
				</p>
				<div className={` centered`}>
					<Image
						fetchPriority="low"
						loading="lazy"
						src={celtic_cross.src}
						height={450}
						width={250}
						alt={`Patrick cosplays a saint.`}
					/>
				</div>
			</Collapsible>
			<Collapsible id="2" title="II - Quiz">
				<p className={`paragraph width-full block left-align`}>
					Short post for today! Saint Patrick is cool, and there are a lot of
					lessons in his story about the power of perseverance, and about the
					value immigrants can contribute to a nation. You should really be
					reading up on Saint Brigid, linked above. Talk about an icon.
					Here&apos;s a quick quiz on Saint Patrick:
				</p>

				<MC_Question
					question="4. What symbol did Saint Patrick use to explain the Holy Trinity?"
					answers={[
						'A - the cross',
						'B - the infinity symbol',
						'C - the peace sign',
						'D - a shamrock',
					]}
					correct={4}
				/>
			</Collapsible>
			<Footer title={"'Holiday Edition: Saint Patrick\'s Day'"} />
		</main>
	);
}
