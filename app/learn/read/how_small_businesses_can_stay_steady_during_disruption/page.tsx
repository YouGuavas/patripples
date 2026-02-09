import Image from 'next/image';
import Link from 'next/link';
import salt_guy from '@/public/memes/salt_guy.svg';
import patrick_super_bowl from '@/public/characters/patrick_super_bowl.svg';
import D3StackedBarPCT from '@/app/components/data_vis/StackedBar';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

export const metadata: Metadata = {
	title:
		"Patripples | 'How Small Businesses Can Stay Steady During Disruption' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'How Small Businesses Can Stay Steady During Disruption.' Consistency and foresight are key. Written by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How Small Businesses Can Stay Steady During Disruption
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Thursday, Feb 9, 2026'}
				edited={'Thursday, Feb 9, 2026'}
			/>

			<br />
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is A Disruption?
				</h2>

				<p className={`paragraph width-full block left-align`}>Bad Bunny.</p>
				<p className={`paragraph width-full block left-align`}>Kid Rock.</p>
				<p className={`paragraph width-full block left-align`}>Greenland.</p>
				<p className={`paragraph width-full block left-align`}>ChatGPT.</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={patrick_super_bowl.src}
						fill
						alt={`Patrick attends the Super Bowl.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Hope that helps.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Perhaps you were seeking an escape from your small business anxiety,
					and hoped to do so by looking at your favorite news source ahead of
					Super Bowl Sunday.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or maybe you just wanted a distraction from the noise.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead, now you are here, reading my free Super Bowl ad, feeling like
					you&apos;re on the Patriots side of a Seahawks touchdown, asking
					yourself, &quot;What do you do when the world feels like it&apos;s
					falling apart?&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					You start by taking a deep breath. Society is not going to crumble on
					your head. You do not have to be Hercules or fix it all alone.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A disruption is any event that creates a significant shift in the
					energy or operation of a system.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Envision a tranquil pond, its surface placid, except for occasional
					rippling caused by dragonflies skimming and turtles nipping. The pond
					and its surroundings are content and happy, but maybe they get
					stagnant after a while. Then, someone comes along and tosses a huge
					boulder into the pond. The resultant splash disrupts the calm, but
					also brings much needed nutrients to the surface, which allows natural
					processes to resume.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How Disruptions Impact Small Businesses
				</h2>

				<p className={`paragraph width-full block left-align`}>
					It may not be immediately clear to all how the tension surrounding Kid
					Rock, Bad Bunny, and the Super Bowl Halftime show impacts small
					businesses the nation over. Let me explain.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We will begin with the obvious: Super Bowl ads. Many of us have fond
					memories of watching the Super Bowl, year in and year out, regardless
					of whether our team was even in the playoffs. We do this in part for
					the sense of community that comes with talking about the highlights
					with our friends the next day. We do it also because some of those ads
					are downright theatrical. Some of us are in it for the 2026 Super Bowl
					Halftime Show featuring Bad Bunny.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Now, I hear what most of you are thinking: &quot;That&apos;s all well
					and good, but how does that affect my small business? Super Bowl ads
					are way too expensive for me.&quot; You are likely right. At a
					shocking $7 million for a 30-second spot, Super Bowl ads are out of
					reach for many small businesses.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That does not mean you cannot make the most of the moment.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How Can Your Small Business Benefit From Super Bowl Search Traffic?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					&quot;Hey, Google, what is one percent of 127 million?&quot; It is
					1.27 million. That is a lot. You and I are unlikely to convert 1.27
					million people overnight. Think about that.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What would you even do if you could? Your site would probably crash.
					Then you&apos;d panic. You&apos;d call someone like me, and we&apos;d
					panic together. Then the moment would be gone.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead of trying to convert 1.27 million people overnight, you can
					try to convert an even smaller percentage. Like 0.0001%. That is 127
					people. Much more doable.
				</p>
				<p className={`paragraph width-full block left-align`}>
					&quot;But Patrick, Super Bowl ads cost $8-10 million. How does
					converting 127 people help me?&quot; It does not. But what if you
					weren&apos;t the one paying for the ad? What if you were simply the
					one benefiting, instead?
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you expected that &quot;SEO opportunism&quot; as the reason for my
					mentioning ChatGPT, Kid Rock, Bad Bunny, and that Budweiser Super Bowl
					commercial in the same breath, you guessed it!
				</p>
				<p className={`paragraph width-full block left-align`}>
					Consider this: if you are someone whose business runs in a lane
					parallel to anything featured in a Super Bowl ad, you are positioned
					to capitalize on the traffic that ad generates, whether or not you
					paid for it.
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What To Do About Super Bowl Search Traffic?
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Imagine that you are a small food truck operator, and you anticipate a
					sudden surge in craving for Latin food, or Caribbean food, following
					the Bad Bunny Super Bowl Halftime Show. Or that you are a small craft
					beer brewery, and you expect a little bump following that Budweiser
					Super Bowl commercial. You are already competent and established. You
					are alert, and paying attention. You are already doing your daily
					business effectively, and you are ready to step into more this spring,
					even (or especially) if the thought of that gives you chills.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Now you are positioned to act ahead of the curve, instead of reacting
					from your back foot. What would you do?
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you are the food truck operator, you might want to stock up on the
					ingredients for your jerk chicken, your oxtail, and maybe prep
					something special with a Puerto Rican flair. If you have a digital
					presence, you are going to want to create some content centered on the
					Super Bowl Halftime Show and its relevant keywords to ensure you
					capture any overflow traffic. If you are the mix master at the craft
					beer brewery, you might want to look into creating a new brew with a
					name that references that Budweiser ad, or the Bad Bunny Halftime
					Show, then promote it using the same keywords on social media. If you
					are a tattoo artist, maybe you read up on Latino-Caribbean indigenous
					tattoo styles and write a post about that.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Who knows? Maybe you will outperform your expectations and convert
					1,270 people instead. I was a basketball kid in high school, and my
					coaches and basketball community were fond of the saying, &quot;You
					miss 100% of the shots you don&apos;t take.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>Cliche? Yes.</p>
				<p className={`paragraph width-full block left-align`}>
					True? Also yes.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does All This Mean For Your Small Business And You?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					Remember that huge boulder from the section about{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="#disruptions"
					>
						disruptions
					</Link>
					? That boulder is the Super Bowl. You can&apos;t lift that. Neither
					can I. We are just some guys. Or you might be a she or a they. The
					point remains: even though we can&apos;t lift one boulder, we can drop
					a bunch of pebbles. Those pebbles are what steady business is about:
					small, consistent actions done well, compounding over time.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You are here because you are curious about the Bad Bunny Super Bowl
					Halftime Show, Kid Rock, Greenland, or{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="/hire"
					>
						Web Development and Design for your small business
					</Link>
					. You don&apos;t need me to tell you how to run your business. Keep
					doing what you know how to do, and use your adaptability and
					attunement to the moment the same way your ancestors taught you to
					season your food:
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image src={salt_guy.src} fill alt={`Just the right touch.`} />
				</div>
				<p className={`paragraph width-full block left-align`}>
					With just the right touch.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The Super Bowl is a boulder.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That idea you&apos;ve been sitting on is a pocket full of pebbles.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Drop that thing this week and watch the water ripple.
				</p>
			</section>

			<Footer
				title={"'How Small Businesses Can Stay Steady During Disruption'"}
			/>
		</main>
	);
}
