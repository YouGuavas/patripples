import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';
import { MC_Question } from '@/app/components/quizzes/MC_Question';
import Collapsible from '@/app/components/blog/Collapsible';
import TableOfContents from '@/app/components/blog/TableOfContents';

import patrick_saint from '@/public/scenes/patrick/patrick_saint.svg';
import celtic_cross from '@/public/logos/celtic_cross.jpg';

export const metadata: Metadata = {
	title:
		"Patripples | 'Holiday Edition: Saint Patrick\'s Day' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Holiday Edition: Saint Patrick\'s Day.' Understanding the Pace of War is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Case Study: Consultative Selling And Community Building At The Rock Shop
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
				With a loyal customer base, strong online following, great products, and
				knowledgeable staff, I expected that they would be on top of their game
				in all domains.
			</p>
			<p className={`paragraph width-full block left-align`}>
				After all, they had been doing a great job of building a community
				around their shop. I was drawn in by a set of high value friends who
				followed the shop&apos;s Facebook page.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I had been in the midst of an entrepreneurial sprint, going door to door
				and pitching my digital optimization services, when I spotted the
				shop&apos;s listing about a position. This triggered my curiosity,
				although I was sure I would skip working for them.
			</p>
			<p className={`paragraph width-full block left-align`}>
				With a wild 6 second load time on their website, I knew that I could
				immediately change their lives by overhauling their website and
				surrounding ecosystem day one.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I was wrong. The owner and the resident organizational engineer
				explained that they had fallen a bit behind in recent weeks.
			</p>
			<p className={`paragraph width-full block left-align`}>
				The shop had just brought in a .
			</p>

			<div className={`jumbo-container centered`}>
				<Image
					fetchPriority="high"
					loading="eager"
					src={patrick_saint.src}
					fill
					alt={`Patrick cosplays a saint.`}
				/>
			</div>

			<p className={`paragraph width-full block left-align`}></p>
			<p className={`paragraph width-full block left-align`}>
				1 - Saint Patrick&apos;s{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.confessio.ie/etexts/confessio_english#"
				>
					Confessio
				</Link>
				.
			</p>
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
				Apparently born somewhere in Britain, Saint Patrick was kidnapped at
				around age 16 by Irish raiders, and there made to tend sheep for six
				years until his escape.
			</p>
			<p className={`paragraph width-full block left-align`}>
				It is through this connection to Ireland that we associate him with the
				country today.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Despite nearly dying to starvation and being captured a second time on
				his escape, Patrick eventually made it back to Britain.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Beginning in passage 23 of his{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.confessio.ie/etexts/confessio_english#"
				>
					Confessio
				</Link>
				, Patrick describes a dream he had upon his reunion with his parents in
				Britain, wherein he is handed a letter titled &quot;The Voice of the
				Irish.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				While reading this letter, Patrick explains that he imagined hearing a
				number of the locals calling out to him, asking that he return and walk
				among them - and that this moved him toward his later mission to bring
				Christianity to Ireland - a return to the land which once enslaved him,
				in the name of <em>their</em> salvation.
			</p>
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
