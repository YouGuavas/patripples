import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import it_me from '../../../public/universal/semicartoonselfie.png';
import styles from './styles.module.css';
export const metadata: Metadata = {
	title: 'Patripples | Vibe Patrol II',
	description:
		'Explore a framework for peacekeeping rooted in a multidisciplinary approach. Perceived by Patrick Yambrick.',
};
export default function Home() {
	return (
		<GreenProviderWrapper>
			<main className={`main center`}>
				<h1 className={`style-1 thin spaced left width-full block left-align`}>
					Vibe Patrol II.
				</h1>
				<ByLine date={'Fri, May 2, 2025'} />
				<blockquote
					className={`style-2 thin width-full block left-align`}
					cite="Holy Bible, KJV"
				>
					&quot;Yea, though I walk through the valley of the shadow of death, I
					shall fear no evil: for thou art with me; thy rod and thy staff they
					comfort me.&quot;
				</blockquote>
				<p className={`paragraph width-full block left-align`}>
					{' '}
					-Psalm 23:4, The Holy Bible - King James Version
				</p>
				<br />
				<p className={`paragraph width-full block left-align`}>
					I want to apologize to myself for my delay in posting this. I am
					working on improving my personal discipline - I procrastinated heavily
					during many of my yesterdays, and the result of that functions
					similarly to financial inertia - this is when past negative actions
					stack up and make it difficult to do anything but spin your wheels.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If action beats reaction, then what about pre-action? Think profiling,
					applied to the self, constructively.
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What is vibe patrol.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Vibe Patrol is a concept. It represents an ideal. Our world is often
					crazy, always maze-y, and <em>rarely</em> ideal. Many of us do not
					know that we are capable of impacting the world around us in any way -
					let alone for the better. Vibe Patrol distills that sense, refracts
					it, and reflects signal back to sender in a way which hopes to be
					constructive at its best, and non-destructive at its worst. I want to
					write this as a no-nonsense how-to guide for police, from my high
					horse, feeling that I know better.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead of that, I am going to write this as a friendly set of
					thoughts which may prove useful for any peacekeeper who still believes
					in change. Many of us find ourselves thrust, without consent, into
					positions which are full of chaotic energy - or which are unbeareable.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And yet, we navigate them - some have even borne the unbearable.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While I admire them their resilience, I have navigated my own chaos
					with the hope of curating a vibe shift which <em>forces</em>{' '}
					resilience less often, and instead <em>self-cultivates</em> in such a
					way that resilience is both prized and intrinsic.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Vibe Patrol is one wave in the Vibe Shift. It&apos;s choosing not to,
					even though you know you could - because you know that there must be a
					better way. Not necessarily an easier, or clearer way - but a better
					one.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to patrol - with vibes.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					When I was a kid, learning to play basketball, I would often find
					myself put in the post - relative to my local talent pool, I was a
					bigger player, and I had solid footwork. My dad would preach to me the
					value of putting in the work before the ball is in your hands,
					especially when you&apos;re on the block. You&apos;ve got to fight for
					position. Be a teammate.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In an ideal world, perhaps we would only ever operate in familiar,
					comfortable situations - and maybe this would lead us to a dull,
					stagnant form of existence; a low vibe state.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In this world, we must often operate in situations which are{' '}
					<em>nearly</em> familiar - reality comes with a set of chaotic
					wrinkles which are difficult to calculate for.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While we cannot control the fact that there is chaos in the world, we
					can shape it into some semi-coherent form through preparation and a
					deep understanding of the substrate of that chaos: the cultures which
					have shaped the people around us in our increasingly-connected,
					often-hostile world; the emotional temperature not just of a nation or
					of a state, but of a <em>neighborhood</em>; the condition of the
					economy; whether it is hot out; and so many other variables - you get
					the idea. Chaos.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Vibe Patrol involves operating on a drive to understand those facets
					of chaos which are comprehensible to us. It involves acting with
					empathy, and putting in work before the ball is in your hands - like
					you&apos;re the one on the block.
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to optimize a vibe&apos;s success rate.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Chaos within our world is probabilistic. This means that there is a
					set of mathematical formulae which can roughly approximate - through a
					series of &quot;maybes&quot; of different weights (Note:{' '}
					<Link className={`spaced no-deco lowercase`} href="../count">
						count
					</Link>
					) - what is going on. Life hack - it&apos;s not all random. Nope. In
					our world, fortunately for you and I alike, countless billions of
					minds - human, animal, and natural - have grappled with what seems
					like <em>every</em> corner of thought. Resultant of that, we have a
					set of fairly well-defined systems - currents - which underlie this
					chaos.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Observe the following image. During{' '}
					<Link
						className={`spaced no-deco lowercase thin`}
						href="./vibe_patrol_1/"
					>
						Vibe Patrol I
					</Link>
					, I was dressed in these clothes:
				</p>
				<Image
					id="it_me"
					alt={`This is me.`}
					height={333}
					width={425}
					src={it_me.src}
				/>
				<p className={`paragraph width-full block left-align`}>
					While I knew better than to keep my hands in my pockets, my body
					language was otherwise similar. I dress and carry myself in this way
					with the intention of projecting a vibe, in keeping with my
					understandings of{' '}
					<Link
						className={`no-deco spaced lowercase`}
						href="./glossary/color_theory"
					>
						Color Theory
					</Link>
					,{' '}
					<Link
						className={`no-deco spaced lowercase`}
						href="./glossary/body_language"
					>
						Body Language
					</Link>
					, and{' '}
					<Link
						className={`no-deco spaced lowercase`}
						href="./glossary/mirror_neurons"
					>
						Mirror Neurons
					</Link>
					, among others. When I clench my jaw in a particular way, I know that
					you know what that means. Similarly, when you look at the clothes I am
					wearing, you likely draw some inferences about what I was thinking
					when I put them on in the morning.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Note the layered greys, and the mid-tone blue; also my relaxed, open
					posture. My hope was to project a balance of intellectual authority
					and general competence, at balance with humility, and rooted in
					curiosity and a desire to do good. How did I do?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Take a moment to assess.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While you do, also consider whether it seems that I am someone who
					lives the vibe I cast sincerely - or whether it strikes you as a
					performance. Use your intuition. You are in control here.
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to keep it real.
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Speaking of control - do you know what that word means?
				</p>
				<p className={`paragraph width-full block left-align`}>
					It means: &quot;the ability to influence - especially others, and
					events.&quot; According to{' '}
					<Link
						className={`spaced lowercase no-deco`}
						href="https://www.developingexperts.com/glossary/control"
					>
						Developing Experts
					</Link>
					, the word &quot;control&quot; derives from the Latin root{' '}
					<em>controllare</em>, which means &quot;to check&quot; or &quot;to
					restrain.&quot; It is made up of the prefix <em>con-</em>, which means
					&quot;together,&quot; and the verb <em>tollere</em>, which means
					&quot;to bear&quot; or &quot;to support.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Many today are seeking exactly those things - togetherness and
					support. Some only need a little restraint and don&apos;t yet know it.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I have found in my life, as I am sure you have found in yours, that
					people look for those things in others who actively live and embody
					them. Talking the talk can be magnetic for a moment. Walking the walk
					represents stability. It is gravitational when these two forces meet
					and combine within one being.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We have all known people who were quietly solid, and thought to
					ourselves, &quot;wow, if they felt comfortable expressing this side of
					themselves more openly, the world would be a better place.&quot;
					We&apos;ve also met people who seem content to embody the
					&quot;eternal yapper&quot; archetype. While talking the talk can yield
					some <em>effects</em>, the actual <em>control</em> it yields is
					minimal. Talk is talk. Intonation, uniform color selection, whatever
					else - these things alone may <em>alter</em> the tone of any given
					interaction, true; over time, our collective intelligence adapts -
					just like with crows and orcas and countless other animals - and that
					falls flat if it isn&apos;t backed by something solid. It has no{' '}
					<em>currency</em>.
				</p>
				<p className={`paragraph width-full block left-align`}>
					How do we build currency? Internal stability over time is as good as
					gold (or{' '}
					<Link
						className={`no-deco spaced lowercase`}
						href="./glossary/tree_labor"
					>
						tree labor
					</Link>
					) here. We begin by building a deep sense of self - one rooted in a
					detective&apos;s or a healer&apos;s mind.{' '}
					<em>To Protect and Serve</em>, after all, requires that we be{' '}
					<em>able</em> to. We are only able to do that when we are physically,
					mentally, and emotionally equipped to handle high-stress,
					high-variable scenarios.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What did i do wrong.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					In the example below, the first row aligns with statistics for the{' '}
					<Link
						className={`lowercase no-deco spaced`}
						href="https://en.wikipedia.org/wiki/Police_uniforms_in_the_United_States"
					>
						Most Common Police Uniform Colors
					</Link>{' '}
					in the US.
				</p>
				<div className={`flex rectangle-large-horizontal ${styles.lightColor}`}>
					<div className={`${styles.copColor1} box-small center`}>
						<p className={`paragraph width-full block center`}>This color</p>
					</div>
					<div className={`${styles.copColor2} box-small`}></div>
					<div className={`${styles.copColor3} box-small`}></div>
				</div>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to finish strong.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					To maximize the probability of success within the Vibe Shift, one
					should strive to embody an ideal of: community-building renaissance
					thinker with boundless curiosity and empathy, who likes to serve as a
					shield - and <em>protect</em>. In a perfect world, no gun needed. This
					world isn&apos;t perfect, but wouldn&apos;t it be nice for the
					collective legacy of this intermingling of generations
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
