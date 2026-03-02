import Image from 'next/image';
import Link from 'next/link';
import pat_solo from '@/public/characters/pat_solo.svg';
import bill_yambrick from '@/public/photos/portraits/bill_yambrick.jpg';
import bill_clinton from '@/public/photos/portraits/bill_clinton.jpg';

import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

export const metadata: Metadata = {
	title:
		"Patripples | 'Michigan Landowners: What You Need To Know Ahead of the AI Data Center Invasion' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Michigan Landowners: What You Need To Know Ahead of the AI Data Center Invasion.' Put the unity in community to stay ahead. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Michigan Landowners: What You Need To Know Ahead of the AI Data Center
				Invasion
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Monday, Mar 2, 2026'}
				edited={'Monday, Mar 2, 2026'}
			/>

			<p className={`paragraph width-full block left-align`}>
				If you want to skip my life story and get straight into the details,{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="#eminent_domain"
				>
					Be My Guest
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I want to thank Michigan{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://gretchenwhitmer.com/"
				>
					Governor Gretchen Whitmer
				</Link>{' '}
				for reminding me that March is{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.rif.org/national-reading-month"
				>
					National Reading Month
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				(Before viewing the following - or any - video on my site, please
				familiarize yourself with my straightforward{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="/contact/#video"
				>
					privacy policy
				</Link>
				. Video shares involving people do not signal personal endorsement. It
				only signals the relevance of a given perspective to the content which
				is to follow. When I share political videos, I will try to be varied
				with my sources, although we are going to have to accept that the videos
				linked in this article have a left-leaning bias. Baby steps all
				around.){' '}
			</p>
			<iframe
				src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1288736793117233%2F&show_text=false&width=560&t=0"
				width="360"
				height="180"
				scrolling="no"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			<p className={`paragraph width-full block left-align`}>
				I also want to thank the sitting president of the United States for not
				allowing{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Elon_Musk"
				>
					Elon Musk
				</Link>{' '}
				to DOGE National Reading Month.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Thank you, the reader, for being patient with my politics. There is a
				lot going on in the world and in our country. I promise that there is a
				point to its inclusion here. It is in my DNA.
			</p>

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Looking Backward
			</h2>
			<p className={`paragraph width-full block left-align`}>
				I want to start this off by acknowledging some shortcomings from{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="/read/front_page/michigan_landowners_ai_data_centers_impact_you"
				>
					My Last Article
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Beyond intensity, I also struggle with{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://fiveable.me/key-terms/introduction-creative-writing/tone-modulation"
				>
					tone modulation
				</Link>
				, especially when hyperfocused. I sometimes come off as paranoid or
				passive aggressive. I do not mean to do that. My non-ai writing process
				involves a lot of emotional exploration, which I balance out with what I
				call &quot;frictional thought&quot; - which I will define in depth
				later, but for now can be understood straightforwardly as &quot;a slower
				and more intentional mode of thinking than is permitted in today&apos;s
				fast-paced world.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				In that article, I reference wanting to make up for past wrongs that I
				or my family have done. When I reference that, I want to be clear that I
				do not take the actions I take with the expectation of forgiveness.
				Rather, with the intention of repair - regardless of outcome.
			</p>
			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Living Up To A Legend
			</h3>
			<p className={`paragraph width-full block left-align`}>
				I am not only remorseful about past wrongs. I am doing my best to carve
				out my own lane within a family legacy going forward. My great uncle,{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://gfashof.org/inductee/yambrick-bill/"
				>
					Bill Yambrick
				</Link>{' '}
				was something of a legend. A hard worker, not a born athletic freak - a
				real{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Rudy_(film)"
				>
					Rudy
				</Link>{' '}
				type, he worked his way into the record books at{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Flint_Northern_High_School"
				>
					Flint Northern
				</Link>
				.
			</p>
			<div id={`disruptions`} className={`left-align`}>
				<Image
					src={bill_yambrick.src}
					height={250}
					width={200}
					alt={`Bill Yambrick. Photo credit to gfashof.org.`}
				/>
			</div>
			<p className={`paragraph width-full block left-align`}>
				From there, he went on to earn even more records at{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://wmubroncos.com/sports/2018/2/13/y.aspx"
				>
					Western Michigan University
				</Link>
				. With the 247th pick in the{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/1943_NFL_draft/"
				>
					1943 NFL Draft
				</Link>
				, Bill Yambrick was selected by the{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.steelers.com/"
				>
					Pittsburgh Steelers
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				However, his flashy pro football career was cut short by his service to
				the{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.navy.com/start?activity=1312758&cid=ppc_gg_b_stan_core&gclsrc=aw.ds&gad_source=1&gad_campaignid=897200098&gclid=CjwKCAiAh5XNBhAAEiwA_Bu8FS8L7o98bI3LBip0HrVxI8E5cYLYQcNJbW-fnUNXvkQHHGeEwXgFmhoCn8EQAvD_BwE"
				>
					US Navy
				</Link>{' '}
				during{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/World_War_II"
				>
					World War II
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Upon his return from World War II, my great uncle Bill - for whom I was
				given my middle name: William - dedicated himself to service and
				leadership within the Flint, Michigan community. Spending 30 years on
				the{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.flintschools.org/page/board-of-education"
				>
					Board of Education
				</Link>
				, including 14 years (with five years from 1972-1977 as the assistant
				director) with the{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.mott.org/"
				>
					Mott Foundation
				</Link>
				, he fought hard in the push for racial equality in sports.
			</p>
			<p className={`paragraph width-full block left-align`}>
				That push resulted in a local gymnasium&apos;s dedication in his honor,
				at a now-long-closed Flint school whose name I forget. If any of my
				older readers from the Flint, Michigan area happen to know which school
				that was, a comment on the social media site you found this article on
				would make you a hero.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I do not speak for my late, great uncle, Bill Yambrick - his spirit
				would find a way to kick my ass for putting words in his mouth, if the
				rest of my uncles are any indication of his influence - but I have spent
				30+ years of my own life trying to carry forth my own interpretation of
				the essence of the man I was, in part, named for. What I have learned
				during my short life, however divergent my path has been from his, is
				that good men do not fear their peers or view the other as lesser. They
				respect and uplift them into equality. Great men with strong competitive
				drives then succeed by outworking those now-elevated peers at every
				turn, thus proving their ethic and drive to be superior. There is no
				honor in defeating someone you view as lesser. That is abuse, and abuse
				is embodied weakness.
			</p>

			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Setting Things Straight
			</h3>
			<p className={`paragraph width-full block left-align`}>
				In my last post, I also called for resistance to eminent domain. I want
				to clarify that my position is always one of non-violent, legal
				resistance, with the intention of bettering outcomes for the hard
				working &apos;little guy.&apos; Sorry if I got the wrong noun.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I am not into anything anti-American.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I am also not willing to lend my family&apos;s name to any causes which
				do not meet our high standards and expectations, out of respect for my
				elders who came before me, and who paved the way for so many of our
				comparably cushy lives.
			</p>
			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Stopping Short of Stardom
			</h3>
			<p className={`paragraph width-full block left-align`}>
				I am proud of my great uncle Bill, and of his legacy. I am proud to
				share a surname with a man like him.
			</p>
			<p className={`paragraph width-full block left-align`}>
				But I am not Bill Yambrick.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I am Patrick Yambrick.
			</p>
			<p className={`paragraph width-full block left-align`}>
				It is not 1943. It is 2026.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Hitler is not in office.
			</p>
			<p className={`paragraph width-full block left-align`}>
				The sitting president of the United States is.
			</p>
			<p className={`paragraph width-full block left-align`}>
				My story so far is much funnier. I do not want it to remain that way. I
				am a former high achiever turned burnout, lazy drunk if you ask most who
				know me today. Acknowledging this isn&apos;t about self-deprecation. It
				is about indicating that I know a name isn&apos;t worth much if you
				don&apos;t live up to the values it represents. The same is true of a
				title. These things come with high standards and high expectations.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I have heard it said that &quot;smart people learn from their mistakes;
				wise people learn from the mistakes of others.&quot; In keeping with
				that, I like to offer up my own mistakes as wisdom for others. I make a
				lot of them.
			</p>

			<br />
			<h2
				id="eminent_domain"
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Beginning of Eminent Domain
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Speaking of mistakes - I was political going one way before. Let me
				balance things a bit. Whatever my opinions on the sitting president of
				the United States, I try to be fair, funny, and forgiving where
				possible. I abstained from voting during the last election. I
				didn&apos;t do so because I thought that Kamala Harris was evil, or that
				the other guy was a Nazi. I abstained from voting because I saw a trend:
				otherwise competent Americans letting themselves get blind-sided by
				something that many saw coming, then crying foul and expecting
				forgiveness for the cruelties they enacted while they felt empowered.
				Remember the &apos;deplorables&apos; thing?
			</p>
			<p className={`paragraph width-full block left-align`}>
				I worried that Kamala Harris would - not out of villainy, or racial, or
				gender-based incompetence, but instead out of an honorable desire to
				prove competence and to set the tone for underserved women and girls in
				a changing world - get us to &apos;the government is using eminent
				domain to forcibly build AI Data Centers&apos; slightly faster than the
				sitting president of the United States has gotten us there.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Anyway, I abstained, as unfortunate a decision as it was, because I
				worried that either candidate would inevitably get us to &quot;the
				government is using eminent domain to forcibly remove American
				landowners from their homes to build AI Data Centers,&quot; just at
				different speeds and for different reasons. In fact, this is about the
				same time that I worried Kamala Harris might prematurely start rolling
				out eminent domain for AI Data Centers. Oops. I seem to have been duped.
			</p>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is Eminent Domain?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					You likely already know what eminent domain is. If you are reading
					this, it is because you are a competent person who knows their stuff -
					or a curious one who wants to learn. Let&apos;s get a refresher
					together, just in case.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/rndEQbvPKhM?si=49BFqC-pIuZN7rzD"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>

				<p className={`paragraph width-full block left-align`}>
					Cornell Law defines{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://www.law.cornell.edu/wex/eminent_domain"
					>
						Eminent Domain
					</Link>{' '}
					as &quot;the power of the government to take private property and
					convert it into public use, referred to as a &apos;taking.&apos;&quot;
					They also point out that{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://www.law.cornell.edu/wex/fifth_amendment"
					>
						The Fifth Amendment
					</Link>{' '}
					establishes the requirement that the government, or utility company
					acting on government authority, must offer &quot;just payment&quot; at
					&quot;fair market value&quot; to landowners in any taking.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					That Sounds Fair. Why Are You So Worried About Just Payment At Fair
					Market Value?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Because some of these guys are <em>slick</em>.
				</p>

				<div id={`disruptions`} className={`left-align`}>
					<Image
						src={bill_clinton.src}
						height={250}
						width={200}
						alt={`Bill Clinton. Photo credit gettyimages.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Just compensation at fair market value can be based off of the sale
					price of a property which was recently sold locally, and it does not
					take into account your family history.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If someone recently sold a nicer house than yours - for example, a
					recently renovated house - for less than your house is worth in your
					area, they set your property up for a lower-than-you-might-expect
					eminent domain compensation appraisal and appropriation.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Developers whose intention is industrial or commercial can use the
					presence of a wet or soggy area on a property as justification for a
					lower than is fair evaluation.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Especially if your town is already lining up its zoning to favor
					business developments. Even if it is not, your property is now being
					reframed, and valued unfairly as less of an asset than it is. If your
					property meets those criteria, you are primed to receive a subprime
					offer that you can&apos;t refuse.
				</p>
				<p className={`paragraph width-full block left-align`}>
					According to
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://mostpolicyinitiative.org/wp-content/uploads/2022/02/Eminent-Domain-V2-1.pdf#:~:text=The%20public%20use%20of%20eminent%20domain%20can,racial%20minorities%2C%20the%20elderly%2C%20and%20low%2Dincome%20individuals."
					>
						The MOST Policy Initiative
					</Link>{' '}
					out of Missouri, the announcement of an eminent domain proceeding
					further decreases the assessed value of the property.
				</p>

				<p className={`paragraph width-full block left-align`}>
					So you could be offered $40,000 on a much more valuable asset.
				</p>
			</section>

			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Who Is Most At Risk Of Eminent Domain Targetings?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Anybody near a major run of{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://www.pewresearch.org/short-reads/2025/10/24/what-we-know-about-energy-use-at-us-data-centers-amid-the-ai-boom/"
					>
						high voltage power lines
					</Link>
					.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Small, working class towns with proximity to water and any sign of
					blight.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Remember{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://www.michbar.org/programs/milestone/milestones_PoletownEminentDomain"
					>
						Poletown
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Minorities and women who own land.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Check out what they&apos;re doing in{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://capitalbnews.org/georgia-railroad-eminent-domain-black-landowners/"
					>
						Georgia
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					People a lot like you and your neighbors - people who should be united
					in supporting one another, not divided by vitriol, race, and rhetoric.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In the face of an overwhelming threat, unity is our best defense. We
					are the <em>United</em> States, after all.
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					&quot;The Government Isn&apos;t Going to Take Anybody&apos;s Home To
					Build An AI Data Center&quot;
				</h3>

				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://abcnews.com/US/600-acre-ai-data-center-cost-wisconsin-residents/story?id=130153006"
					>
						About That...
					</Link>
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://www.hklaw.com/en/insights/publications/2020/04/eminent-domain-police-power-and-pandemics"
					>
						Oh, and if there is a big war going on...
					</Link>
				</p>
				<p className={`paragraph width-full block left-align`}>
					The short, synthesized version of those articles goes something like:
					&quot;They already are - and it is hitting aging farmers, women who
					own too much land, racial minorities, and hard working blue collar
					families just like mine. Maybe even a little like yours. And big wars
					make it easier to do. Especially when those wars establish AI
					infrastructure as something which is critical to national
					security.&quot;
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Can Michigan Landowners Do To Prepare And Protect Themselves?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					Michigan landowners have a few options if they move proactively.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Since blight is targeted, spring cleaning is critical. Nobody has to
					clean the whole place themselves. Encourage your neighbors to help
					each other out. Dispose of or organize waste piles. Walk around
					picking up litter{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="/read/journal/"
					>
						Like I Did Last Spring
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Be ready to push back. It is common in real estate development to come
					with a low-ball offer first. Eminent domain proceedings are designed
					with maximum government spending efficiency in mind, so they will go
					as low as they think they can get you to believe your property is
					valued at. You ultimately have to accept, but they will present you
					with a negotiation charade which makes you feel heard and respected.
					And then they will pressure and overwhelm you until you comply for as
					little money as they can give you to quietly leave.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sound familiar?
				</p>
				<div id={`disruptions`} className={`left-align`}>
					<Image
						src={pat_solo.src}
						height={250}
						width={200}
						alt={`Patrick Yambrick, cartoonized.`}
					/>
				</div>

				<p className={`paragraph width-full block left-align`}>
					Good thing I am not a coastal elite tech or real estate developer
					scouting small towns to flatten for AI Data Centers.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When Michigan landowners counter with their own terms of engagement,
					it forces a subtle rebalancing of the playing field in favor of those
					landowners - you might get a few more bucks to quietly leave if you
					turn down the first offer.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Unfortunately, without legal action, there is little landowners can do
					about eminent domain. However, with persistence, knowledgeability, and
					good documentation, landowners have a chance at balancing things and
					preventing abuse. Michigan landowners are not weak. As highlighted on
					the{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://ij.org/issues/private-property/eminent-domain/eminent-domain-success-stories/"
					>
						Institute for Justice website,
					</Link>{' '}
					various landowner coalitions across the country have been able to
					fight for fairer terms during eminent domain proceedings.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A brief, one-time Englewood resident, myself, I am especially fond of
					the results achieved by the city&apos;s small business owners in being
					so obstinate with the city with their threats to rezone and alter the
					charter themselves that the city gave up.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or, as one of my old{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://www.leagueoflegends.com/en-us/?gclsrc=aw.ds&gad_source=1&gad_campaignid=23159229260&gclid=CjwKCAiAh5XNBhAAEiwA_Bu8FUgAoSNjdaBcOIgGIGPE0kgjtVjy44fpi32zfR5FEbuwf7LHKYkPahoCKCUQAvD_BwE"
					>
						League of Legends
					</Link>{' '}
					acquaintances was fond of saying as our team rode an inevitable wave
					to victory: &quot;Make &apos;em FF (forfeit)!&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you think your small community is worth standing up for, or if you
					are tired of being treated as replaceable and easily displaceable,
					look into some of the references I linked to here. Nobody needs to
					become an eminent domain lawyer overnight, but anyone with skin in the
					game and the grit to stay (or at least get paid well if you&apos;re
					going to be forced out of your home) should be equipped to defend
					themselves - if put on the spot or pressured - with an understanding
					of the basics.
				</p>
			</section>

			<Footer
				title={
					"'Michigan Landowners: What You Need To Know Ahead of the AI Data Center Invasion'"
				}
			/>
		</main>
	);
}
