import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

import patrick_data_center from '@/public/scenes/patrick_data_center.svg';
import Pistons from '@/public/photos/Pistons.svg';
import raditz_goku from '@/public/memes/raditz_goku.jpeg';
import michigan from '@/public/scenes/michigan.svg';

export const metadata: Metadata = {
	title:
		"Patripples | 'Michigan Landowners: How AI Data Centers Impact You' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Michigan Landowners: How AI Data Centers Impact You.' Consistency and foresight are key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Michigan Landowners: How AI Data Centers Impact You
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Sunday, Mar 1, 2026'}
				edited={'Sunday, Mar 1, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>
				Welcome to March Madness, Michigan!
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Why I Care About Michigan Land As A Homeless Guy With Intensity Issues
			</h2>
			<p className={`paragraph width-full block left-align`}>
				If you want to skip my life story and get straight into the details,{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="#ai_centers"
				>
					Be My Guest
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Disclaimer before we get started: I am team unqualified. I have no
				degree. I am not always the smartest guy in the room. I am just a guy
				who has lived in Michigan for most of his life, except for a few years
				here, and a few years there - not by my choosing. My choice has always
				been Michigan and its people.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I used AI to generate an outline for this piece, though much of the
				content presented within represents knowledge that I already had,
				whether gained intuitively through life experiences, or trained and
				learned over the course of my life.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I use the free time that buys me to generate human content like this
				up-front section and to reach out to people who my skills may be of
				service to.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If I&apos;m so smart, why do I need AI? Because I am one guy who
				(allegedly - please don&apos;t come for me, student loan debt
				collectors) started his life out $15k in the hole on a promise from a
				trusted authority figure. Many of the people who want to put AI data
				centers down around us do not come from that kind of background. But
				many of you - the hard-working people of Michigan - do. I want to get a
				lot of stuff done to make up for mine and my family&apos;s past mistakes
				and to help the people around me stay ahead of the curve.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I don&apos;t want to see any of you good people get taken advantage of.
				And I want it to be clear to any outsiders coming in who we are. We are
				welcoming and hospitable, and we are not pushovers.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If you weren&apos;t standing outside{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.mlb.com/tigers/ballpark"
				>
					Comerica
				</Link>{' '}
				on that crisp night in October with your dad and two brothers, craning
				your neck to see what the crowd was going wild over when{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.baseball-reference.com/players/o/ordonma01.shtml"
				>
					Magglio Ordoñez
				</Link>{' '}
				sent the Tigers to the World Series, you don&apos;t know what you missed
				out on.
			</p>
			<p className={`paragraph width-full block left-align`}>Oh-ee-oh...</p>
			<iframe
				width="360"
				height="315"
				src="https://www.youtube.com/embed/fPcoFK8jem8?si=ybDLFQb0DTmSIL2_"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<p className={`paragraph width-full block left-align`}>
				We are &apos;04 Pistons fans around here.
			</p>{' '}
			<div id={`disruptions`} className={`jumbo-container centered`}>
				<Image src={Pistons.src} fill alt={`Patrick attends the Super Bowl.`} />
			</div>
			<p className={`paragraph width-full block left-align`}>
				We might not all run, but most of us watched Rip Hamilton run around all
				game when the guys were winning. Mr. Big Shot&apos;s low ego, despite
				the nickname, captured the sporting essence of what it meant to be a
				quietly competent blue collar worker. We respected Ben Wallace for his
				grit and his willingness to do the dirty work for the sake of the team,
				often playing the underdog to much bigger guys.
			</p>
			<iframe
				width="360"
				height="315"
				src="https://www.youtube.com/embed/O-AoTK2iRPY?si=_2lSTWzzcLIIA0VD"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<p className={`paragraph width-full block left-align`}>
				We have watched the Red Wings protect the Stanley Cup from China 11
				times (or 4 times within our lifetimes, for many of my readers). I am
				admittedly not a hockey guy - I did like to see my high school Geometry
				teacher connect with his students over Red Wings trivia at the beginning
				of class.
			</p>
			<p className={`paragraph width-full block left-align`}>
				It hasn&apos;t all been electrifying. We have also watched the Lions do
				what the Lions do, decade in and decade out.
			</p>
			<p className={`paragraph width-full block left-align`}>
				We have watched titans build themselves from granite, grit, and steel,
				and we have watched them fall into deep depressions.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Worse, we have watched them build our hopes up, only to leave us behind
				in their dust bowl.
			</p>
			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				What It&apos;s Like To Watch Something You Love Erode
			</h3>
			<p className={`paragraph width-full block left-align`}>
				Man, if you felt even a tinge of that growing up in Michigan, especially
				in Flint, especially in the &apos;90s and &apos;00s, you know what a
				time that was to be alive.
			</p>
			<p className={`paragraph width-full block left-align`}>
				When I was, uhh, &quot;taken on extended vacation to Colorado by my
				affluent parents&quot; from 2014-2018, I was forced to learn and to
				change a great deal.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I missed coneys so bad I spent days researching and working to nail a
				duplicate of the recipe for Flint style sauce (I can&apos;t remember if
				the source wound up being Angelo&apos;s or Gillie&apos;s - either way,
				there is no tomato sauce in the recipe; just lard, onions, meat, and
				straightforward seasoning). I missed the Tigers - even though most
				wouldn&apos;t know me as a baseball fan; I used to watch games with my
				family back in the{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Tiger_Stadium_(Detroit)"
				>
					Tiger Stadium
				</Link>{' '}
				days, when anyone could afford to get in.{' '}
			</p>
			<p className={`paragraph width-full block left-align`}>Get ya peanuts!</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				Let&apos;s go, Bobby (
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.baseball-reference.com/players/h/higgibo02.shtml"
				>
					Higginson
				</Link>
				)!
			</p>
			<p className={`paragraph width-full block left-align`}>
				I grew up watching the Tigers play in Tiger Stadium. I have played
				probably 800 games of pickup basketball against{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.abc12.com/news/local/mid-michigan-dad-catches-home-run-bare-handed-at-tigers-game-while-holding-baby/article_eeff5180-1b7f-11ee-bc3a-9faabda72677.html"
				>
					This Guy
				</Link>
				. Talk about history. Granted, the events from that article describe
				something which happened more recently, at Comerica Park. When I would
				visit its predecessor, Tiger Stadium, as a kid, I would always make note
				of its crumbling. Every piece of rubble in the walkway represented - to
				my young mind - a spot where a bygone slugger had put a ball.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Even as a kid, I knew things had to change. Looking back on it now: man,
				oh, man, do I wish we had found a way to prevent its getting steamrolled
				into oblivion.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				I care about the land in Michigan because I am a lifelong Michigander.
				Do I need any reason beyond that?
			</p>
			<br />
			<h3
				id="ai_centers"
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Begin AI-aided Content
			</h3>
			<p className={`paragraph width-full block left-align`}>
				How I used AI here: I generated a lot of this as boilerplate text
				following several evenings dedicated to researching on my own - stacked
				on top of knowledge gained from a bunch of adjacent fieldwork I began
				during{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="../journal"
				>
					Spring 2025,
				</Link>{' '}
				before my exile.
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				AI Works Against You
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Before we get started, let us answer the question: &quot;What is an AI
				data center?&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				According to{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://www.ibm.com/think/topics/ai-data-center"
				>
					IBM
				</Link>
				, an AI data center is &quot;a facility that houses the specific IT
				infrastructure needed to train, deploy, and deliver AI applications and
				services.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				Recently, a wave of proposals for AI data centers has swept across
				Michigan. They&apos;re trying to drop them in anywhere, in mass. Does
				that remind you of anything we&apos;ve seen before?
			</p>
			<div id={`disruptions`} className={`jumbo-container centered`}>
				<Image
					src={patrick_data_center.src}
					fill
					alt={`Patrick looks at a mass-produced AI data center.`}
				/>
			</div>
			<p className={`paragraph width-full block left-align`}>
				By my definition, an AI data center in 2026 is a short term cash grab
				from people who already have too much money, and who don&apos;t care
				about your health as much as they claim that they do.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If you are anything like me, you feel something like the same way.
			</p>
			<p className={`paragraph width-full block left-align`}>
				From rural-suburban township to farmland edges, to our peaceful forests,
				big tech is looking to suffocate the little guy and stomp flat local
				culture.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Make no mistake: AI is here to stay, and data centers likely will come
				to Michigan. We may not be able to control everything - we can control
				our efforts.
			</p>
			<p className={`paragraph width-full block left-align`}>
				While the technology may be here to stay, AI will never replace you, and
				big tech can never replace your favorite mitten. Especially if you do
				anything at all other than lie down.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If we, as a state, face an outside threat worth worrying about, it is
				less about immigrants - we are built on those, from Hamtramck to the
				Mighty Mac - and more about a different kind of outsider. It is coastal
				elites and would-be legacy developers, from both sides, pushing lung
				cancer center developments near you on the promise of quick cash. They
				will come wearing smiles, expecting you to hand over what&apos;s yours.
			</p>
			<p className={`paragraph width-full block left-align`}>
				My counter-proposal is this: instead of all my hard working friends
				breaking their backs like slaves every day while some lifelong nerd on a
				laptop sits on his ass and stacks wealth built from your health, you
				make him put his cancer-spreading money printers right where he lives.
				Then make him pay you for your water, and your produce.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Does that sound too good to be true?
			</p>
			<p className={`paragraph width-full block left-align`}>It&apos;s not.</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to Fight Back Against Big Tech Extraction When You Feel Small (But
				Are Actually A Sleeping Giant)
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Or a groggy bear just waking from hibernation and wondering what on
				earth is going on in your forest.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Developers will tout a bump to your bottom line.
			</p>
			<p className={`paragraph width-full block left-align`}>
				They will promise you fast cash.
			</p>
			<p className={`paragraph width-full block left-align`}>
				They may even convince you that they&apos;ll deliver.
			</p>
			<p className={`paragraph width-full block left-align`}>
				They do not mean one word.
			</p>
			<p className={`paragraph width-full block left-align`}>
				You are a data point. You are a segment of a graph.
			</p>
			<p className={`paragraph width-full block left-align`}>
				They allocate these data centers in alignment with a set of conditions:
				high local usage, lots of water nearby, and good airflow nearby. All of
				that impacts the graph they look at when they are plotting you as a data
				point.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Right now, that graph shows Michigan as one of the highest usage AI
				states (you&apos;re welcome - my dad taught me one thing: how to waste a
				telemarketer&apos;s time in such a way as eats at their bottom line).
			</p>
			<p className={`paragraph width-full block left-align`}>
				That means they are listening. To you. They are watching you.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Following the water crisis, and the way the recession in &apos;08 hit us
				especially hard, many are discounting our populace as aging,
				overwhelmed, and behind.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Some of that is true: we are getting older. With age comes wisdom.
			</p>
			<p className={`paragraph width-full block left-align`}>
				We are feeling overwhelmed. Overwhelmed people sometimes stand up and
				shout &quot;Enough!&quot;
			</p>
			<iframe
				width="360"
				height="315"
				src="https://www.youtube.com/embed/k3h5jcI-MFI?si=zCZIKerGxaZkoF80"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<p className={`paragraph width-full block left-align`}>
				(Not a Michigander, but carries the spirit well enough.)
			</p>
			<p className={`paragraph width-full block left-align`}>
				We damn sure ain&apos;t behind.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Michigan, for all its stubbornness, is a shockingly competent state.
				From Rosie the Riveter types like my late, great grandmother, to the
				young men and women just trying to get by in an ever-changing world, to
				our aging forebears who will need our patience and our help increasingly
				over the next decade - to the workers we lost to the construction of the
				Mighty Mac (some American heroes who fell to valorous bridge-building,
				if you ask me) - we are America&apos;s &quot;Now hold up just a
				minute.&quot; Sign.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If you are a developer: you don&apos;t have to stop. We aren&apos;t
				dumb. We get how money works. We understand how to stabilize a midgame.
			</p>
			<p className={`paragraph width-full block left-align`}>
				You just have to slow down, and put most of your cancer centers where
				your money&apos;s at, or find a better way to go about your business,
				and bring some of that back with you when you come to Michigan and
				inhale your big, beautiful center&apos;s totally clean air.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Guys like me are going to keep on extracting from big tech (or maybe
				we&apos;ll take a hiatus) while educating and working to serve our
				neighbors whose voices you won&apos;t hear.
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Pros and Cons of AI Data Centers
			</h2>
			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Pros
			</h3>
			<p className={`paragraph width-full block left-align`}>
				Some politicians near you might get as much as $1b (which is a high end
				estimate skimmed from an aggregation of sources). Hopefully they use
				that money well.
			</p>
			<p className={`paragraph width-full block left-align`}>
				They will not draw the tech elite or their bank accounts into your tax
				base. Quite the opposite, if I am qualified to make a projection on
				behalf of some hotshot tech jerk trying to step on a small town&apos;s
				way of life.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Don&apos;t let me tell you what to do - ask yourself whether your tiny
				slice of that $1b pie outweighs the following (many of the following
				will stick around forever unless some really persistent guy goes and
				cleans a lot of them for free).
			</p>
			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Cons (A List of Chemicals Spewed Into Your Air and Drinking Water by AI)
			</h3>
			<p className={`paragraph width-full block left-align`}>
				I am not going to write anything here. I am just going to list the
				chemicals that AI Data Centers put in the air, and what they will do to
				you and your loved ones.
			</p>
			<h4
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Environmental Gases
			</h4>
			<ul className={`flex column left-align gap-small pad-none no-deco`}>
				<li>
					Nitrogen Oxide (NOx) - even when they don&apos;t leech from the grid
					and drive your bills through the roof, these centers dump noxious NOx
					into the atmosphere via their generators; know any kids with asthma
					(like me when I was little)? They will love the new data centers.
				</li>
				<li>Formaldehyde - need I say more?</li>
				<li>
					VOCs - Volatile Organic Compounds - I just spent an autumn cooking
					these off from a local brush pile to make garden biochar; breathing
					them in made my thinking less clear and my fatigue levels much higher.
				</li>
				<li>
					Methane - A greenhouse gas; pretty bad for individual health in high
					concentrations, and not something we need more of.
				</li>
				<li>
					Carbon Dioxide - Another greenhouse gas; even if you are climate
					change agnostic - CO2 in high concentrations is bad for breathing and
					cognition, and many suspect its involvement in accelerating extreme
					weather events
				</li>
				<li>
					Sulfur Dioxide - Causes wheezing and gasping when breathed in;
					contributes to acid rain which will erode your land and other
					investments
				</li>
			</ul>
			<h4
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				PFAS
			</h4>
			<p className={`paragraph width-full block left-align`}>
				Don&apos;t you just love{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href={`/read/journal/letting_things_breathe`}
				>
					PFAS
				</Link>
				?
			</p>
			<p className={`paragraph width-full block left-align`}>
				I love PFAS so much, I spent last spring cleaning them up for free in
				anticipation of times like these - and was nearly killed for doing so
				instead of making money. Oops.
			</p>
			<p className={`paragraph width-full block left-align`}>
				According to{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://gizmodo.com/environmentalists-warn-ai-data-centers-forever-chemicals-this-issue-has-been-dangerously-understudied-2000668367"
				>
					Gizmodo
				</Link>
				, the EPA (not to point any fingers, but particularly the EPA under a
				particular president) does not require data center developers to
				disclose what PFAs their center would dump into your environment. Beyond
				being alarming due to a lack of transparency, this should raise all
				kinds of red flags.
			</p>
			<h4
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Heavy Metals and Others
			</h4>
			<p className={`paragraph width-full block left-align`}>
				According to{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://ketos.co/discharge-from-ai-data-centers-and-how-to-mitigate-contamination"
				>
					this article
				</Link>{' '}
				from ketos.co, AI Data Centers are likely to pollute our waterways with
				all manner of heavy metals and total dissolved solids (TDS) - from
				cadmium to mercury; zinc to lead.
			</p>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does All This Mean For You?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					It means that if you are a small business owner, landowner, blue
					collar worker, or random person on the street in Michigan, you have
					the megaphone. You have power, and you have influence. Tell them where
					you want them to stick their data centers (even if you disagree with
					my take that they should build most of them in and around northern
					California, where they are at).
				</p>
				<p className={`paragraph width-full block left-align`}>
					Use your voice. Threaten to fight back if they threaten to exercise{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Eminent_domain"
					>
						eminent domain
					</Link>{' '}
					to wrestle your home from you . Let &apos;em know you&apos;ve got a
					handful of hidden heathens breathing down their necks on your behalf.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you want to dig in and show them what Michigan grit is all about,
					anyway.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If not, and you&apos;re ready to cut and run, that&apos;s fine, too.
					Nobody would blame you. Many of us are going to stick around and keep
					fighting the good fight, come what may.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I know I will. And that I&apos;ll clean up as many PFAs swamps as I am
					able to clean for free during my lifetime to make up for the damage
					caused by my high usage.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I don&apos;t need AI.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I deleted all of the text it generated halfway through writing this.
				</p>
				<p className={`paragraph width-full block left-align`}>
					One day, AI may earn the place it currently occupies in our minds.
					That day has not yet come.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And it for sure hasn&apos;t earned the right to drink up or stink up
					our phenomenal lakes and waterways.
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image src={michigan.src} fill alt={`Michigan.`} />
				</div>
				<p className={`paragraph width-full block left-align`}>
					This diverged from my initial intent - it is something I have wanted
					to clarify for some time, though, and I am glad to have gotten it out.
					I may do another article later, which focuses on numbers, data,
					property values. You know - all the things people love to read about
					day in and day out. Thank you for reading.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When you see those posts about AI data centers coming near you,
					don&apos;t be afraid to weigh in, whatever your thinking. Those spaces
					are for experts. You are the expert on your own home. Nobody trumps
					you in that domain.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Seeing all those unknown towns pass their moratoriums on data centers
					encourages me. I like seeing the underdog stand up to the bully. If
					you&apos;re tired of seeing Raditz step on Goku (or you), speak up,
					and (metaphorically) punch back.
				</p>
				<div className={`centered`}>
					<Image
						src={raditz_goku.src}
						height={250}
						width={250}
						alt={`Raditz stands triumphantly over Goku.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Many of you are built more like Goku than you think (if you
					haven&apos;t seen Dragon Ball - Goku sacrifices a lot, but he comes
					all the way back from this type of moment, dozens of times over).
				</p>
			</section>
			<Footer title={"'Michigan Landowners: How AI Data Centers Impact You'"} />
		</main>
	);
}
