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
				Holiday Edition: Saint Patrick&apos;s Day
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Tuesday, Mar 17, 2026'}
				edited={'Tuesday, Mar 17, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>
				Happy Saint Patrick&apos;s Day! If I had the time, I would do a double
				feature on{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.britannica.com/biography/Saint-Brigit-of-Ireland"
				>
					Saint Brigid
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I wouldn&apos;t consider much of a Patrick if I didn&apos;t make a Saint
				Patrick&apos;s Day post.
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

			<p className={`paragraph width-full block left-align`}>
				&quot;My name is Patrick. I am a sinner, a simple country person, and
				the least of all believers. I am looked down upon by many. My father was
				Calpornius. He was a deacon; his father was Potitus, a priest, who lived
				at Bannavem Taburniae. His home was near there, and that is where I was
				taken prisoner. I was about sixteen at the time. At that time, I did not
				know the true God. I was taken into captivity in Ireland, along with
				thousands of others. We deserved this, because we had gone away from
				God, and did not keep his commandments. We would not listen to our
				priests, who advised us about how we could be saved. The Lord brought
				his strong anger upon us, and scattered us among many nations even to
				the ends of the earth. It was among foreigners that it was seen how
				little I was.&quot;
			</p>
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
					Despite this, during his day, Patrick was viewed by many with malice,
					and with suspicion.
				</p>
				<p className={`paragraph width-full block left-align`}>
					He was accused by his peers - as well as his superiors in the church -
					of having returned to Ireland with the intent of seeking office for
					the sake of seeking office - or due to some other ambition or
					financial motive.
				</p>
				<p className={`paragraph width-full block left-align`}>
					He writes in his Confessio, &quot;My defence was that I remained on in
					Ireland, and that not of my own choosing, until I almost perished.
					However, it was very good for me, since God straightened me out, and
					he prepared me for what I would be today. I was far different then
					from what I am now, and I have care for others, and I have enough to
					do to save them. In those days I did not even have concern for my own
					welfare.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Perhaps this preparatory period, paired with such skepticism from his
					peers and superiors, is exactly what Patrick needed in order to
					overcome the adversity he would face during his 30 years of missionary
					work.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Through his youthful years, he gained familiarity with the local
					language and culture, which helped him in his later mission by
					catalyzing local trust.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					I am sure that there is science for this, though it is intuitive to me
					and maybe to many of you: when a message is delivered in one&apos;s
					natural language, that message tends to land more fully with the
					listener.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Many know the story of how he used the shamrock to illustrate the idea
					of the Holy Trinity existing as one being in three parts.
				</p>
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
				<p className={`paragraph width-full block left-align`}>
					By combining the traditional cross of Christ with Celtic sun
					symbolism.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When we see our traditions and our way of being incorporated into
					something new - rather than simply being consumed and disposed of - we
					are much more open to change.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Food for thought in an era of increasing division and
					AI-monoculture-driven change.
				</p>
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
					question="1. Where was Saint Patrick born?"
					answers={['A - Ireland', 'B - Australia', 'C - Britain', 'D - Italy']}
					correct={3}
				/>
				<MC_Question
					question="2. Why did Saint Patrick initially travel to Ireland?"
					answers={[
						'A - to start a mission',
						'B - he was kidnapped',
						'C - it was a vacation',
						'D - he was a drifter',
					]}
					correct={2}
				/>
				<MC_Question
					question="3. How old was Saint Patrick when he returned home to his parents?"
					answers={['A - 32', 'B - 22', 'C - 42', 'D - 28']}
					correct={2}
				/>
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
				<MC_Question
					question="5. What symbol is believed to have come about through the combining of the traditional cross with sun symbols?"
					answers={[
						'A - Shamrock Shake',
						'B - Celtic Cross',
						'C - Pagan Preamble',
						'D - Irish Insignia',
					]}
					correct={2}
				/>
			</Collapsible>
			<Footer title={"'Holiday Edition: Saint Patrick\'s Day'"} />
		</main>
	);
}
