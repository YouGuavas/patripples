import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

import vercel_i from '@/public/data/graphs/Vercel I.png';
import vercel_ii from '@/public/data/graphs/Vercel II.png';
import vercel_iii from '@/public/data/graphs/Vercel III.png';

import bounce from '@/public/data/analytics/bounce_rate.png';

import genesee from '@/public/scenes/Genesee.png';
import patrick_kettering from '@/public/scenes/patrick_kettering_university.svg';
import elon_musk from '@/public/photos/portraits/elon_musk.jpg';
import rockets from '@/public/site_screenshots/ai/69_rockets.png';

export const metadata: Metadata = {
	title:
		"Patripples | 'Small Business: SEO Basics - How to Read Graphs' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Small Business: SEO Basics - How to Read Graphs' Consistency and foresight are key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<section className={`py-2 px-1`}>
				<h1
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Small Business: SEO Basics - How to Read Graphs
				</h1>
				<iframe
					className="rounded"
					data-testid="embed-iframe"
					src="https://open.spotify.com/embed/track/3QHOeZLrjWV3R1ps587v7c?utm_source=generator"
					width="60%"
					height="152"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Did you know Johnny Cash was my cousin? But that&apos;s a story for
					another time. Talk about big shoes to try and fill.
				</p>
				<ByLine
					author={`Patrick Yambrick`}
					date={'Wednesday, Mar 4, 2026'}
					edited={'Wednesday, Mar 4, 2026'}
				/>
				<p className={`paragraph width-full block left-align`}>
					If you want to skip my life story and get straight into the details,{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="#what_is_seo"
					>
						Be My Guest
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In this piece, I will focus strictly on business. I will explore the
					learnings I have gained from observing and analyzing my surroundings -
					both digital and physical.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While it is tempting to let this spiral into a condemnation of
					Operation Epic Fury, and of the idea of war with Iran, people from
					where I&apos;m from understand that the world keeps turning, and the
					show goes on no matter what. I will explore my view of the recent
					international goings on in a separate piece. A war in the Middle East
					is never as simple as it seems.
				</p>
			</section>
			<section className={`bg-6 py-2 px-1`}>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Genesee Jr./Sr. High School - Early Beginnings
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I learned how to read graphs at{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Genesee_School_District"
					>
						Genesee Jr./Sr. High School
					</Link>{' '}
					in Genesee, Michigan .
				</p>
				<div className={`jumbo-container centered`}>
					<Image
						src={genesee.src}
						fill
						alt={`Patrick stands outside Genesee High School.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					To some, that means I am unqualified to read graphs.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Someone tell that to{' '}
					<Link
						className={`lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Tom_Gores"
					>
						Tom Gores
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or{' '}
					<Link
						className={`lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Alec_Gores"
					>
						Alec Gores
					</Link>{' '}
					- a{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://wmich.edu/?utm_source=google&utm_medium=ppc&utm_campaign=epm_brand_25-26&utm_content=brand_ai&gad_source=1&gad_campaignid=11770649183&gclid=Cj0KCQiA8KTNBhD_ARIsAOvp6DJHDOgsuZ7v4GC30FEaxUJF6EKww9IJi6R4tPU0qtE3nHHzPAnZxiQaAq0DEALw_wcB"
					>
						Western Michigan University
					</Link>{' '}
					legend of a different sort from my great uncle Bill, who I mentioned
					in{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/read/front_page/michigan_landowners_ai_data_centers_eminent_domain"
					>
						My Last Article
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or any of the talented doctors and others who have passed through
					those halls.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While attending Genesee Jr./Sr. High School, I met a man - Ms.
					Shock&apos;s brother, if you know either of them - who had taught
					himself calculus there before it was offered as a class. He had done
					so using books he found at his school library. Such a quaint town.
				</p>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Kettering University - A Quick Stop
				</h2>
				<div className={`jumbo-container centered`}>
					<Image
						src={patrick_kettering.src}
						fill
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Kettering University in Flint, Michigan is a respected experiential
					engineering university. Formerly the General Motors Institute,
					Kettering specializes in preparing mechanical and industrial engineers
					- and adjacent entrepreneurs - for success in a variety of domains.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Kettering, Kettering...
				</p>
				<p className={`paragraph width-full block left-align`}>Hmm...</p>
				<p className={`paragraph width-full block left-align`}>
					Did anyone who went there before me set a really high bar?
				</p>
				<p className={`paragraph width-full block left-align`}>Oh, yeah...</p>
				<p className={`paragraph width-full block left-align`}>
					<Link href="https://en.wikipedia.org/wiki/Mary_Barra">
						Mary Barra
					</Link>{' '}
					went there.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link href="https://www.muslimsforamericanprogress.org/jacqueline-el-sayed">
						Dr. Jacqueline El-Sayed
					</Link>{' '}
					(<Link href="">Dr. Abdul El-Sayed&apos;s</Link> stepmother) was a
					professor and advisor there. I even got to meet her once or twice.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Talk about big shoes to fill.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I got real good at reading graphs there, and then I dropped out.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Mission accomplished.
				</p>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Time Away - Self-guided Study
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Just in time to miss out on the water crisis, and be around when{' '}
					<Link href="https://en.wikipedia.org/wiki/Peyton_Manning">
						Peyton Manning
					</Link>{' '}
					won that <Link href="">Super Bowl</Link> for the{' '}
					<Link href="">Broncos</Link>, I found myself in{' '}
					<Link href="">Engelwood</Link> from 2014-2018 - right around the
					corner from{' '}
					<Link href="https://en.wikipedia.org/wiki/Cherry_Hills_Village,_Colorado">
						Cherry Hills
					</Link>
					. Remember the celebrations?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Since most of my readers aren&apos;t from Denver and weren&apos;t
					around for the celebrations - which involved a bunch of otherwise
					well-mannered people tearing their own city apart - how about that bit
					from earlier about the guy who taught himself calculus with textbooks?
				</p>
				<p className={`paragraph width-full block left-align`}>I did that.</p>
				<p className={`paragraph width-full block left-align`}>
					With a bunch of stuff.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Graphs. Calculus. Programming. Muchas lenguas.
				</p>
				<p className={`paragraph width-full block left-align`}>No novias.</p>
				<iframe
					className={`rounded centered`}
					data-testid="embed-iframe"
					src="https://open.spotify.com/embed/track/1IHWl5LamUGEuP4ozKQSXZ?utm_source=generator"
					width="60%"
					height="152"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					(Though rumor has it, a certain South African&apos;s sister was on
					Tinder around Boulder.)
				</p>
				<div className={`centered`}>
					<Image src={elon_musk.src} width={250} height={300} alt={`Elon.`} />
				</div>
				<p className={`paragraph width-full block left-align`}>
					Not to pick any fights - I prefer to settle my scores in a field where
					the other guy has a chance.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Like rocket science.
				</p>
				<div className={`jumbo-container centered`}>
					<Image src={rockets.src} fill alt={`Elon.`} />
				</div>
				<p className={`paragraph width-full block left-align`}>
					Although I appreciate the 69 reference - there is a time and a place.
				</p>
				<p className={`paragraph width-full block left-align`}>
					There were a lot of women in the arts and music scene on Tinder around
					then, too.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I was fortunate to witness how a collective comes together.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I was 21. Shame me all you want for having been a Tinder user.
				</p>
				<p className={`paragraph width-full block left-align`}>
					During that time, I also met some much older businesswomen passing
					through the local airport.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I know{' '}
					<Link href="https://en.wikipedia.org/wiki/Tim_Allen#Legal_issues">
						Tim Allen
					</Link>{' '}
					knows what I&apos;m talking about.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I biked 20-40 miles a day in Denver air.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Played basketball against some D-I guys at Pioneer Park in Commerce
					City.
				</p>
				<p className={`paragraph width-full block left-align`}>
					My brother got dunked on like 20 times.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We lost a lot of games together.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I had a good time.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					More importantly, I learned in intimate detail how the network effect
					works.
				</p>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					A Return to My Roots - Bringing it Back to Genesee
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Remember Tom and Alec Gores, from before?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Oh yeah, they have a lot of money and power now, and at least one of
					them is looking to revitalize areas of Flint and Detroit.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Their first major business venture together was a learning experience
					- not a flop, rather a chance for them both to test the waters and to
					take something away from it.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Although it resulted in their parting ways and pursuing different
					paths, that business venture set the stage for both of their later
					success, which has been fueled along the way by what looks to me from
					the outside like a heated, but growth-oriented, sibling rivalry.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sounds a little like me being first, first, first, best, best, best,
					and all of my surrogate little brothers around getting dunked on 20
					times, then us breaking the team up only to find that it was us as a
					collective that were a problem - not the individual pieces.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A lot of them have beaten me to important milestones.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sometimes, a person needs to press the issue and make those first
					steps happen so that those who come after can follow up with 20 dunks
					of their own.
				</p>
			</section>

			<section className={`bg-5 py-2 px-1`}>
				<h2
					id="what_is_seo"
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					What is SEO?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Oh, right, this is an SEO article for small businesses in and around
					Flint, Michigan in the time of AI, Operation Epic Fury, and the war in
					Iran. Here, watch a starter video from some guy.
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/MYE6T_gd7H0?si=msiZzzbP0AIO9-7I"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					You don&apos;t have to buy what he&apos;s selling.
				</p>
				<p className={`paragraph width-full block left-align`}>
					SEO stands for Search Engine Optimization.
				</p>

				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					How Is My Small Business Site&apos;s SEO Determined?
				</h3>
				<p className={`paragraph width-full block left-align`}>
					A site&apos;s SEO depends on a few things. To name a few: user intent,
					how many high-quality backlinks you have, and on-page optimizations.
					In the context of this site, consider that every time I link to
					another site on my page here, it is also a backlink to that site.
					Likewise, whenever anybody trustworthy and authoritative externally
					posts a hyperlink to my own site, that is a backlink, which in turn
					boosts my SEO.
				</p>

				<h4
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					SEO Basic: User Intent
				</h4>
				<p className={`paragraph width-full block left-align`}>
					First, search engines look for high-quality content that satisfies
					user intent.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What that means is that they send a digital crawler to your page, it
					consumes your content, and tests against several benchmarks. In the
					age of AI, one likely - but not guaranteed - future outcome is for
					those crawlers and their benchmarks to become more and more
					sophisticated. As that happens, they are going to filter more and more
					copy and paste automated content out.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I will create a post in the future where I dive into that concept more
					thoroughly and support it with research.
				</p>
				<p className={`paragraph width-full block left-align`}>
					For now, understand that recent trends suggest to me that an authentic
					voice with a unique, entertaining, non-overwhelming delivery is
					likelier than average to succeed in search - that is: getting ranked
					on Google, and seeing more conversions.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you are a simple web development and SEO solopreneur - and I am
					breaking the rules every single day here - you do not want to optimize
					for national political or other searches.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Think about it: a guy from Denver lands on this page where I&apos;m
					talking about Flint, Michigan-area small businesses and how they can
					leverage SEO to their advantage, gets confused, goes away.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That&apos;s one facet of how you get a high bounce rate.
				</p>
				<div className={`centered`}>
					<Image
						src={bounce.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>

				<h4
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					SEO Basic:
				</h4>
				<div className={`centered`}>
					<Image
						src={vercel_i.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
				<div className={`centered`}>
					<Image
						src={vercel_ii.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
				<div className={`centered`}>
					<Image
						src={vercel_iii.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
			</section>
			<section className={`bg-6 py-2 px-1`}>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Kettering
				</h2>
				<p className={`paragraph width-full block left-align`}>
					If you want to skip my life story and get straight into the details,{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="#what_is_seo"
					>
						Be My Guest
					</Link>
					.
				</p>
				<div className={`centered`}>
					<Image
						src={vercel_i.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
				<div className={`centered`}>
					<Image
						src={vercel_ii.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
				<div className={`centered`}>
					<Image
						src={vercel_iii.src}
						height={250}
						width={450}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
			</section>

			<Footer title={"'Michigan Landowners: How AI Data Centers Impact You'"} />
		</main>
	);
}
