import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

import kash from '@/public/photos/portraits/kash_patel.jpg';
import pete from '@/public/photos/portraits/pete_hegseth.jpg';
import steve from '@/public/photos/portraits/stephen_miller.jpg';

import br1 from '@/public/data/analytics/bounce_rate.png';
import br2 from '@/public/data/analytics/bounce_rate_ii.png';
import br3 from '@/public/data/analytics/bounce_rate_iii.png';

import pc from '@/public/scenes/patrick_goes_to_church.svg';

export const metadata: Metadata = {
	title:
		"Patripples | 'SEO Basics: If Thou Wouldst Be Perfect (How to Improve Your Bounce Rate)' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'SEO Basics: If Thou Wouldst Be Perfect (How to Improve Your Bounce Rate).' Understanding the Bible is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<section className={`py-2 px-1`}>
				<h1
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					SEO Basics: If Thou Wouldst Be Perfect (How to Improve Your Bounce
					Rate)
				</h1>
				<ByLine
					author={`Patrick Yambrick`}
					date={'Monday, Mar 9, 2026'}
					edited={'Monday, Mar 9, 2026'}
				/>
				<p className={`paragraph width-full block left-align`}>
					Want to skip past the politics and religion and get right to the real
					lesson?{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="#bounce_rate"
					>
						Be My Guest
					</Link>
					.
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={pc.src}
						fill
						alt={`Patrick gives a sermon at Saint Peter\'s Basilica.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Privacy disclaimer before you click on any embedded songs or videos in
					this article: although I track no data on you when you use these
					embeds, the services from which I source them (frequently YouTube) do.
					If you are curious to learn more, check out the{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/read/contact"
					>
						Contact and Questions
					</Link>{' '}
					Page. All music, videos, and their relevant rights belong to the
					original creators and posters, and to the relevant hosting sites. If I
					need to take anything down, you already know how to find the contact
					page. Let me know.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I don&apos;t fancy myself a prophet, savior, or anything like that. I
					also do not mean to appropriate any struggles. This is just what is on
					my mind - and the minds of many - right now. I struggle to write
					laser-focused SEO pieces while we do whatever it is that we are doing
					in the world. Enjoy, and{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/contact"
					>
						Let Me Know
					</Link>{' '}
					if anything I say or do is against the rules.
				</p>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Take Me To Church.
				</h2>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/MYSVMgRr6pw?si=QvNEOFWFv6A8Pn2O
"
						title="Take Me To Church - Hozier"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					I don&apos;t fancy myself a prophet, savior, or anything like that. I
					also do not mean to appropriate any struggles. This is just what is on
					my mind - and the minds of many - right now. I struggle to write
					laser-focused SEO pieces while we do whatever it is that we are doing
					in the world. Enjoy, and{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/contact"
					>
						Let Me Know
					</Link>{' '}
					if anything I say or do is against the rules.
				</p>
				<p className={`paragraph width-full block left-align`}>
					My sincerest hope is that many of my readers can launch successful
					small businesses which leverage my technical and general knowledge to
					boost themselves.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I hope for this because I know that many of my friends work hard and
					pay taxes because they want to see social good done with their money.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And for those that do prefer to keep to themselves socially - they
					care that their taxes go into building and maintaining our
					infrastructure, and toward defending our shared home.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sure enough, instead of that, those dollars are going to - ah, this
					can&apos;t be right...
				</p>
				<p className={`paragraph width-full block left-align`}>
					Billionaires manipulating the oil market to strategically{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.nbcnews.com/world/iran/live-blog/live-updates-iran-war-oil-prices-khamenei-supreme-leader-israel-trump-rcna262378"
					>
						Drive Your Gas Prices Up
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Let me plug a book here, by{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Ron_Chernow"
					>
						Ron Chernow
					</Link>{' '}
					- called{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Ron_Chernow"
					>
						Titan
					</Link>
					. Titan is a biography about another billionaire: John D. Rockefeller
					- and his merry band of &quot;barons&quot; - who made their money by
					forming an oil trust and using their influence to... you guessed it...
				</p>
				<p className={`paragraph width-full block left-align`}>
					...manipulate the oil market to strategically drive consumer prices
					up.
				</p>
				<p className={`paragraph width-full block left-align`}>
					(Even though the prices went down overall.)
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Let&apos;s Talk About JC.
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Do you remember when I claimed in{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/read/front_page/michigan_tale_two_cities/"
					>
						My Last Article
					</Link>{' '}
					that{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/read/front_page/michigan_tale_two_cities/"
					>
						Johnny Cash
					</Link>{' '}
					is my cousin?
				</p>
				<p className={`paragraph width-full block left-align`}>
					I still don&apos;t know whether that&apos;s true. I did spend some
					time during my youth in Tennessee, in Carter County (shout out{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Elizabethton,_Tennessee"
					>
						Elizabethton
					</Link>
					).
				</p>
				<p className={`paragraph width-full block left-align`}>
					I hope it didn&apos;t offend anyone when I{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.oneforisrael.org/did-jesus-use-magic-and-sorcery/"
					>
						referenced those witches
					</Link>
					. Sometimes divinity looks like sorcery to a non-believer.
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Cash Is King.
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Who&apos;s Cash?
				</p>
				<p className={`paragraph width-full block left-align`}>
					The Man In Black.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/9bifZBxG0Gg"
						title="Man In Black - Johnny Cash"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Not to be confused with the Chicken in Black.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Who&apos;s that?
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/DTP9__vi3d4"
						title="Chicken In Black - Johnny Cash"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					The Chicken in Black - or, the{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.nytimes.com/2026/03/09/business/export-import-bank-trump-rare-earth-minerals.html"
					>
						Manhattan Flash
					</Link>
					.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Who&apos;s that?
				</p>
				<p className={`paragraph width-full block left-align`}>
					An orange bank robber from{' '}
					<Link href="https://en.wikipedia.org/wiki/New_York_City">
						New York City
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Are you guys tired of{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.imdb.com/title/tt0701115/"
					>
						The Simpsons
					</Link>{' '}
					calling it yet?
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={kash.src}
						fill
						alt={`Kash Patel. Photo credit McGill University`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Good thing{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Kash_Patel"
					>
						Kash
					</Link>{' '}
					isn&apos;t{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=Matthew%2025%3A31-46&version=NIV"
					>
						King
					</Link>
					.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/RRKJiM9Njr8?si=82qCxlIWlH-1_3XF"
						title="Welcome to the Black Parade - My Chemical Romance"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					And that some thought{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.grunge.com/619743/what-you-didnt-know-about-johnny-cashs-time-as-a-minister/"
					>
						Johnny Was a Prophet
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Mr. Cash stood for the poor, the downtrodden, the sick, the addicts,
					Native Americans, and those in need.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What do you stand for?
				</p>
			</section>

			<section>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Fear No Evil
				</h2>
				<p className={`paragraph width-full block left-align`}>
					&quot;In the Lord put I my trust: how say ye to my soul, Flee as a
					bird to your mountain?
				</p>
				<p className={`paragraph width-full block left-align`}>
					For, lo, the wicked bend their bow, they make ready their arrow upon
					the string, that they may privily shoot at the upright in heart.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					If the foundations be destroyed, what can the righteous do?
				</p>
				<p className={`paragraph width-full block left-align`}>
					The Lord is in his holy temple, the Lord's throne is in heaven: his
					eyes behold, his eyelids try, the children of men.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					The Lord trieth the righteous: but the wicked and him that loveth
					violence his soul hateth.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Upon the wicked he shall rain snares, fire and brimstone, and an
					horrible tempest: this shall be the portion of their cup.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					For the righteous Lord loveth righteousness; his countenance doth
					behold the upright.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					-
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=Psalm%2011&version=KJV"
					>
						Psalm 11 (KJV)
					</Link>
				</p>
				<hr />
				<p className={`paragraph width-full block left-align`}>
					I didn&apos;t go to church growing up - my dad rightly didn&apos;t
					trust{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.pbs.org/newshour/nation/dozens-of-catholic-priests-molested-hundreds-of-rhode-island-victims-over-decades-multiyear-investigation-reveals"
					>
						The Priests
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That doesn&apos;t mean we didn&apos;t put our faith in ol&apos; JC -
					he raised me on{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=Psalm%2023&version=KJV"
					>
						Psalm 23
					</Link>
					:
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/Iw3d5LIpoHw?si=lTxp7DGLoOtKpte6"
						title="Welcome to the Black Parade - My Chemical Romance"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					That taught me to do my best never to{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.psychologytoday.com/us/basics/anxiety/the-biology-of-anxiety"
					>
						Act In Fear
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Many were raised differently from me.
				</p>
				<p className={`paragraph width-full block left-align`}>
					My chief learning from the lessons of Christianity and Catholicism is
					that we should also do our best to strive toward a Christlike life,
					however imperfect our effort.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Did you know that when we act in fear, our{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://my.clevelandclinic.org/health/body/24894-amygdala"
					>
						Amygdala
					</Link>{' '}
					(the part of the brain responsible for aggression) takes over, and our{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://my.clevelandclinic.org/health/body/prefrontal-cortex"
					>
						Prefrontal Cortex
					</Link>{' '}
					(the part of the brain responsible for our personality and judgement)
					shuts off.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I&apos;ve had a therapist describe it to me as &quot;Clasp one hand
					into a fist, then wrap your other hand around that fist. When we are
					angry or anxious, that second, clasped hand goes away, leaving us only
					with the fist of fear.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Did you know that alcohol{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3031714/"
					>
						ramps that effect
					</Link>
					?
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={pete.src}
						fill
						alt={`Pete Hegseth and the fist of fear. Photo credit Fox News.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					What do you think - should we rename{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.centralnebraskatoday.com/2026/03/09/hegseth-warns-more-casualties-expected-in-operation-epic-fury-against-iran/"
					>
						Operation Epic Fury
					</Link>
					?
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					A Pale Rider Cometh
				</h2>
				<p className={`paragraph width-full block left-align`}>
					&quot;For precept must be upon precept, precept upon precept; line
					upon line, line upon line; here a little, and there a little:
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					For with stammering lips and another tongue will he speak to this
					people.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					To whom he said, This is the rest wherewith ye may cause the weary to
					rest; and this is the refreshing: yet they would not hear.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					But the word of the Lord was unto them precept upon precept, precept
					upon precept; line upon line, line upon line; here a little, and there
					a little; that they might go, and fall backward, and be broken, and
					snared, and taken.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Wherefore hear the word of the Lord, ye scornful men, that rule this
					people which is in Jerusalem.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Because ye have said, We have made a covenant with death, and with
					hell are we at agreement; when the overflowing scourge shall pass
					through, it shall not come unto us: for we have made lies our refuge,
					and under falsehood have we hid ourselves:
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Therefore thus saith the Lord God, Behold, I lay in Zion for a
					foundation a stone, a tried stone, a precious corner stone, a sure
					foundation: he that believeth shall not make haste.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Judgment also will I lay to the line, and righteousness to the
					plummet: and the hail shall sweep away the refuge of lies, and the
					waters shall overflow the hiding place.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					And your covenant with death shall be disannulled, and your agreement
					with hell shall not stand; when the overflowing scourge shall pass
					through, then ye shall be trodden down by it.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					-
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=Isaiah%2028&version=KJV"
					>
						Isaiah 28:10-18 (KJV)
					</Link>
				</p>
				<hr />
				<div id={`disruptions`} className={` centered`}>
					<Image
						src={steve.src}
						width={350}
						height={450}
						alt={`Stephen Miller, the pale rider. Photo credit Wikipedia.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					This is{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.theguardian.com/us-news/2025/jun/15/trump-immigration-stephen-miller-influence#:~:text=Miller%2C%2039%2C%20may%20have%20been%20the%20true,figures%20fell%20far%20short%20of%20pre%2Delection%20promises."
					>
						Stephen Miller
					</Link>
					.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/5EcsBgxXDqc?si=rPQR8-9VsAF7cX8F"
						title="Welcome to the Black Parade - My Chemical Romance"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					He is just a guy.
				</p>
				<p className={`paragraph width-full block left-align`}>
					An advisor to the president or something - I don&apos;t know that much
					about politics.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I have heard that he is a pretty competent speech writer, and that he
					is a master of subtle influence.
				</p>
				<p className={`paragraph width-full block left-align`}>You tell me.</p>
				<p className={`paragraph width-full block left-align`}>
					I am not a sensationalist. I am proud to be an American.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					I refuse to believe that{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Joseph_Goebbels"
					>
						Stephen Miller is the second coming of Joseph Goebbels
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Nor can it be said that{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Gr%C3%ADma_Wormtongue"
					>
						Stephen Miller is a real-life Grima Wormtongue
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And under absolutely no circumstances is anybody to believe that{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/%C3%89minence_grise"
					>
						Stephen Miller is the Grey Eminence of Our Nation
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I shouldn&apos;t cast doubt onto our elected officials. They are under
					enough pressure.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What&apos;s that?{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.npr.org/2026/01/11/nx-s1-5670312/how-far-does-stephen-millers-influence-extend-in-trumps-white-house"
					>
						Stephen Miller is Not An Elected Official
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>Hm.</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Why Do You Care So Much About What The Administration Is Doing?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					I care because many of my friends are of various Native and Latin
					American lineages - in many cases, it&apos;s both.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Did you know my other cousin was{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://the-young-riders.fandom.com/wiki/Buck_Cross"
					>
						Buck Cross
					</Link>{' '}
					from{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/The_Young_Riders"
					>
						The Young Riders
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Yep.{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Gregg_Rainwater"
					>
						Gregg Rainwater
					</Link>
					, also from Flint.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That one I know for certain.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Regardless of my very real familial (via one of my many grandmas)
					connection to Mr. Rainwater, or my dubious relationship to Johnny Cash
					- who spent significant time and energy championing the rights and
					fighting for the{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Native_Americans_in_the_United_States"
					>
						Natives
					</Link>{' '}
					of this land - I believe that what we are doing goes too far.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/Odlw8WdsZS8"
						title="One - Birdtalker"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Like Mr. Cash, I understand that things can&apos;t be perfect sunshine
					and rainbows every day.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As I said in a previous article: &quot;Sometimes we get smacked by the
					consequences of our own actions.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					The more broadly we apply that to &quot;them,&quot; the more fervently
					it will be applied to &quot;us&quot; when the tables inevitably turn.
				</p>
				<p className={`paragraph width-full block left-align`}>
					They most always do.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Where will you stand when the game of musical chairs comes to an end?
					Will you be righteous still?
				</p>
			</section>
			<section>
				<h2
					id="bounce_rate"
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					SEO Basics - How To Decrease Your Bounce Rate
				</h2>

				<p className={`paragraph width-full block left-align`}>
					Creating engaging, mixed media content like this that keeps users
					coming back for more is the best way to decrease (improve) your{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Bounce_rate"
					>
						Bounce Rate
					</Link>
					. Now you know.
				</p>
				<ul
					id={`disruptions`}
					className={`flex row centered center width-full gap-large roman-deco`}
				>
					<li>
						<Link
							className={`rounded darken`}
							href="/read/front_page/michigan_landowners_ai_data_centers_eminent_domain/"
						>
							<Image
								src={br1.src}
								width={250}
								height={150}
								alt={`Bounce Rate 1`}
							/>
						</Link>
					</li>
					<li>
						<Link
							className={`rounded darken`}
							href="/read/front_page/flint_tale_two_cities/"
						>
							<Image
								src={br2.src}
								width={250}
								height={150}
								alt={`Bounce Rate 2.`}
							/>
						</Link>
					</li>
					<li>
						<Link
							className={`rounded darken`}
							href="/read/front_page/seo_basics_how_to_read_graphs/"
						>
							<Image
								src={br3.src}
								width={250}
								height={150}
								alt={`Bounce Rate 3.`}
							/>
						</Link>
					</li>
				</ul>
				<p className={`paragraph width-full block left-align`}>
					Clicking or tapping on any of these screenshots will take you to the
					article I posted which prompted my checking my bounce rate for that
					screen shot.
				</p>
			</section>
			<section>
				<h2
					id="bounce_rate"
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does All This Mean For Your Small Business And You?
				</h2>
				<div className={`jumbo-container centered`}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/-QWsZQGY-dM"
						title="The Man Comes Around - Johnny Cash"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>

				<p className={`paragraph width-full block left-align`}>
					It means that no matter who you are in this world, you can climb the
					golden ladder if you act with courage, benevolence, and righteousness.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Why not you, too?
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you fear no evil: drop one piece of that project you&apos;ve been
					sitting on this week and watch the water ripple.
				</p>
			</section>

			<Footer
				title={"'SEO Basics: How to Read Graphs (Women\'s Day Edition)'"}
			/>
		</main>
	);
}
