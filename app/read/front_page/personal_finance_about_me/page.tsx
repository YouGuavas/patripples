import type { Metadata } from 'next';
import Collapsible from '@/app/components/blog/Collapsible';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

import will_i from '@/public/scenes/movies/will_i.jpg';
import will_ii from '@/public/scenes/movies/will_ii.jpg';

import patrick_prius from '@/public/scenes/patrick/patrick_prius.svg';

export const metadata: Metadata = {
	title:
		"Patripples | 'Personal Finance: All About Me (How to Start Your Small Business From Anywhere)' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Personal Finance: All About Me (How to Start Your Small Business From Anywhere).' Understanding Pride is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Personal Finance: All About Me (How to Start Your Small Business From
				Anywhere)
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Tuesday, Mar 10, 2026'}
				edited={'Tuesday, Mar 10, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>Happy Tuesday!</p>
			<p className={`paragraph width-full block left-align`}>
				<Link
					className={` spaced color-2 rounded darken`}
					href="/read/front_page/seo_basics_bounce_rate"
				>
					My last post
				</Link>{' '}
				was too heavy. Too steeped in religion and religious imagery.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Hope you all don&apos;t mind if I focus on lightweight fiction this time
				around.
			</p>

			<p className={`paragraph width-full block left-align`}>
				Want to skip past the dated pop culture and modern anime and get right
				to the real lesson?{' '}
				<Link className={` spaced color-2 rounded darken`} href="#bounce_rate">
					Be My Guest
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Or you can click or tap any header you see from this point on to
				collapse or expand the relevant section.
			</p>
			<Collapsible title="Humble Beginnings">
				<p className={`paragraph width-full block left-align`}>
					I make the references I make here because I know that a segment of my
					friends will relate to and feel energized by them.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/dK0OxWzkdBg?si=AoHkWdoAD3bjcfLF"
						title="Galand Vs. Escanor"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Who is the character in the video?
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://nanatsu-no-taizai.fandom.com/wiki/Escanor"
					>
						Lion&apos;s Sin of Pride, Escanor
					</Link>
					. We&apos;ll get there.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Let&apos;s talk about me first.
				</p>
			</Collapsible>

			<Collapsible title="All About Me" bg="bg-6">
				<p className={`paragraph width-full block left-align`}>
					Ready to get{' '}
					<Link
						className={` spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Stranger_than_Fiction_(2006_film)"
					>
						Stranger Than Fiction
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Have you ever seen the{' '}
					<Link
						className={` spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Will_Ferrell"
					>
						Will Ferrell
					</Link>{' '}
					movie,{' '}
					<Link
						className={` spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/The_Other_Guys"
					>
						The Other Guys
					</Link>
					, co-starring{' '}
					<Link
						className={` spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Mark_Wahlberg"
					>
						Mark Wahlberg
					</Link>{' '}
					and{' '}
					<Link
						className={` spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Eva_Mendes"
					>
						Eva Mendes
					</Link>
					?
				</p>
				<div className={`jumbo-container centered`}>
					<Image
						src={will_i.src}
						fill
						alt={`Patrick gives a sermon at Saint Peter\'s Basilica.`}
					/>
				</div>

				<p className={`paragraph width-full block left-align`}>
					I am a lot like the Will Ferrell character.
				</p>

				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/MrUYnOFZc2M?si=tmyklvHB-qRs0OKq"
						title="America!"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Heck, I even drive a Prius.
				</p>

				<p className={`paragraph width-full block left-align`}>
					(Not my background photo and not my Prius - mine just looks similar.)
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={patrick_prius.src}
						fill
						alt={`Patrick gives a sermon at Saint Peter\'s Basilica.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>America!</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Humble Beginnings (Take Two)
				</h3>
				<p className={`paragraph width-full block left-align`}>
					I mentioned in my last article that my mom ran a small business during
					and after the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="#https://en.wikipedia.org/wiki/2008_financial_crisis"
					>
						2008 Financial Crisis
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Fortunately for us all, that means we were{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=Matthew%2019%3A21-23&version=KJV"
					>
						perfectly
					</Link>{' '}
					poor.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Can you imagine what I&apos;d be like with money?
				</p>
				<p className={`paragraph width-full block left-align`}>
					We did our best to help and guide the people around us through those
					times. Many were seeking shelter from the storm.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/-gsDBuHwqbM?si=E-TCZRaJxDhc6M3E"
						title="Shelter From the Storm - Bob Dylan"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>

				<p className={`paragraph width-full block left-align`}>
					Prior to being poor post-2008, we were poor pre-2008.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.brookings.edu/articles/obamas-economic-policies-were-not-pretty-but-they-were-right/"
					>
						Thanks, Obama
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A trusted authority figure kept rationalizing his nickel and dime
					expenditures as something which &quot;isn&apos;t going to make us or
					break us.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					For some reason, we were always broke at the end of the month.
				</p>
				<p className={`paragraph width-full block left-align`}>
					System must have been broken.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We received lots of eviction notices. One each month.
				</p>
				<p className={`paragraph width-full block left-align`}>
					One time, our landlord succeeded.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I got to watch the moving men take all of my toys out to the road when
					I was 8.
				</p>

				<p className={`paragraph width-full block left-align`}>
					From then on, I stopped asking for toys or other gifts from my
					parents.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I told them that I would prefer to receive money instead.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What did I use the money for?
				</p>
				<p className={`paragraph width-full block left-align`}>
					A 9-year-old boy starts receiving money at every holiday - of course
					he&apos;s going to spend it all on candy and video games.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or so you&apos;d think.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://youtube.com/embed/63LrvayPxq4?si=2TUUz8MuLgGXqDi7"
						title="Audited My Parents"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					I had been quietly auditing my parents since I became aware of what an
					eviction was.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Whenever that authority figure would make an expenditure that he
					falsely justified, I would keep track, and tuck that amount of money
					away.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Whenever one or the other would buy a pack of cigarettes, I would warn
					them about the drawbacks to their health and to our stability.
				</p>
				<p className={`paragraph width-full block left-align`}>
					At the end of the month, when we were inevitably short anyway -
					suddenly we weren&apos;t.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I would lend my parents money so that we could make our bills.
				</p>
				<p className={`paragraph width-full block left-align`}>
					They would pay me back with{' '}
					<Link href="https://en.wikipedia.org/wiki/Interest">interest</Link>.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Then they would be slightly shorter the next month, and need another
					loan.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Talk about{' '}
					<Link href="https://www.investopedia.com/terms/c/compoundreturn.asp">
						compounding returns
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Lessons learned.
				</p>
				<h3
					id="bounce_rate"
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Time To Grow Up
				</h3>
				<p className={`paragraph width-full block left-align`}>
					And lessons taught.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A segment of my audience will remember having benefited from these
					learnings when I functionally co-taught my own high school accounting
					class.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A handful of you have recently expressed to me that your financial
					positions are quite good as a result of your discipline - that makes
					me proud.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The story doesn&apos;t stop there, though it does not continue here.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I even later had a Gator phase.
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image src={will_ii.src} fill alt={`Will Ferrell as Gator.`} />
				</div>

				<p className={`paragraph width-full block left-align`}>
					But that is a story from another time. If you can&apos;t bear to wait,
					check out{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="/read/journal/vibe_patrol_1"
					>
						Vibe Patrol
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It is honestly pretty funny how similar we are.
				</p>
			</Collapsible>

			<Collapsible title="Rise of the Undefeated Sun">
				<p className={`paragraph width-full block left-align`}>
					&quot;When a man&apos;s ways please the Lord, he maketh even his
					enemies to be at peace with him.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Better is a little with righteousness than great revenues without
					right.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A man&apos;s heart deviseth his way: but the Lord directeth his steps.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					A divine sentence is in the lips of the king: his mouth transgresseth
					not in judgment.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A just weight and balance are the Lord&apos;s: all the weights of the
					bag are his work.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It is an abomination to kings to commit wickedness: for the throne is
					established by righteousness.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Righteous lips are the delight of kings; and they love him that
					speaketh right.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The wrath of a king is as messengers of death: but a wise man will
					pacify it.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In the light of the king&apos;s countenance is life; and his favour is
					as a cloud of the latter rain.
				</p>
				<p className={`paragraph width-full block left-align`}>
					How much better is it to get wisdom than gold! and to get
					understanding rather to be chosen than silver!
				</p>
				<p className={`paragraph width-full block left-align`}>
					The highway of the upright is to depart from evil: he that keepeth his
					way preserveth his soul.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Pride goeth before destruction, and an haughty spirit before a fall.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Better it is to be of an humble spirit with the lowly, than to divide
					the spoil with the proud.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					-Proverbs 16:7-19
				</p>
				<hr />
				<p className={`paragraph width-full block left-align`}>
					Remember Escanor, from before?
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/3lm6oNBVRz0?si=IP9m7u3u7UHDCyHA"
						title="Galand Vs. Escanor"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					He is a member of the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://nanatsu-no-taizai.fandom.com/wiki/Seven_Deadly_Sins_(Group)"
					>
						Seven Deadly Sins
					</Link>{' '}
					- inspired by, but not to be confused with the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Seven_deadly_sins"
					>
						Seven Deadly Sins
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Each member has received a marking received in a past chapter for
					crimes they committed (or were framed for) - which are relevant to
					their respective sin.
				</p>
				<p className={`paragraph width-full block left-align`}>
					These markings correspond, naturally, with the Seven Deadly Sins -
					Lust, Envy, Greed, Sloth, Gluttony, Pride, and Wrath.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The Sins fight against a group of demons called the Ten Commandments.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Each also has a{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://nanatsu-no-taizai.fandom.com/wiki/Sacred_Treasure"
					>
						Sacred Treasure
					</Link>{' '}
					which amplifies any innate powers, or powers received from their
					markings - that&apos;s what the axe is about in these videos. You
					don&apos;t need to do any further reading on the treasures for this
					post unless you are curious - this knowledge is enough.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Escanor&apos;s sin was being too prideful.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Escanor has a major, unrequited crush on the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://nanatsu-no-taizai.fandom.com/wiki/Merlin"
					>
						Boar&apos;s Sin of Gluttony, Merlin
					</Link>{' '}
					- an ageless witch.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Not all, but most of his actions are driven by his desire to impress
					and protect her.
				</p>
				<p className={`paragraph width-full block left-align`}>
					During the night, he is meek, timid, and hopelessly devoted to Merlin.
				</p>
				<p className={`paragraph width-full block left-align`}>
					However, as the sun rises toward its peak at high noon -
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://youtube.com/embed/ghGg_7GZZVI?si"
						title="Galand Vs. Escanor"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					- Escanor grows toward his own peak as The One.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When he reaches this state at exactly noon, he becomes the most
					powerful being in extistence for one minute.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is typically about all he needs.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Many underestimate him. If only they had read &apos;The Art of
					War.&apos;
				</p>
				<p className={`paragraph width-full block left-align`}>
					This results in swift consequences.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/umwRJaElqAw?si=0By6sYFlrKl6M099"
						title="Galand Vs. Escanor"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					(Make no racial superiority inferences based on Escanor&apos;s
					&apos;pinnacle of all races&apos; comment - he is referring to humans,
					angels, demons, and faeries - and more importantly, to his own pride
					and capability).
				</p>
				<p className={`paragraph width-full block left-align`}>
					These consequences are never born of fear or hatred.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/9BdG8cXm7JU?si=4rECTkdIx5rnhMci"
						title="Estarossa Vs. Escanor"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					But instead out of pity for those unworthy of his sunshine or too weak
					to fight back in a meaningful way.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or a desire to protect his friends, and humanity itself.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Though he is not the &apos;leader&apos; or the face of his group,
					Escanor is its powerhouse.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As we learned in these videos, Escanor&apos;s pride has been turned
					into a weapon in the fight against evil, to great effect.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And he will only grow more powerful as we approach the inevitable
					sunshine of summer.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I can&apos;t wait - can you?
				</p>
			</Collapsible>

			<Collapsible
				title="What Does All This Mean For Your Small Business And You?"
				bg="bg-6"
			>
				<p className={`paragraph width-full block left-align`}>
					Maybe you know an Escanor?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or maybe you are one and don&apos;t know it.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/l5-gja10qkw?si=2Rjo66WZNP1_eVWP"
						title="My Name is Human - Highly Suspect"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>

				<p className={`paragraph width-full block left-align`}>
					No matter who you start as in this world, you can climb to the highest
					peaks if you act with courage, loyalty, and righteousness.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I would know - if we know each other or if you have been visible to
					me, I have probably been quietly auditing you (I can&apos;t help it;
					it&apos;s just how I am).
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you aren&apos;t too proud: drop one piece of that project
					you&apos;ve been sitting on this week and watch the water ripple.
				</p>
			</Collapsible>

			<Footer
				title={
					"'Personal Finance: All About Me (How to Start Your Small Business From Anywhere)'"
				}
			/>
		</main>
	);
}
