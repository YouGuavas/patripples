import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import this_is_fine from '../../../public/memes/this_is_fine.png';
import dark_modes from '../../../public/universal/dark_modes.png';
import it_me from '../../../public/universal/semicartoonselfie.png';
import spidermans from '../../../public/memes/spidermans.png';
import peter_thiel from '../../../public/memes/peter_thiel.png';

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
				<ByLine date={'Thur, May 1, 2025'} />
				<blockquote
					className={`style-2 thin width-full block left-align`}
					cite="Holy Bible, KJV"
				>
					&quot;Yea, though I walk through the valley of the shadow of death, I
					will fear no evil: for thou art with me; thy rod and thy staff they
					comfort me.&quot;
				</blockquote>
				<p className={`paragraph width-full block left-align`}>
					{' '}
					-Psalm 23:4, The Bible - King James Version
				</p>
				<br />

				<p className={`paragraph width-full block left-align`}>(incomplete)</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What is vibe patrol.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Vibe Patrol is a concept. It represents an ideal. The world is often
					crazy and always maze-y. Many of us do not know that we are capable of
					impacting the world around us in any way - let alone for the better.
					Vibe Patrol distills that sense, refracts it, and reflects signal back
					to sender in a way which hopes to be constructive at its best, and
					non-destructive at its worst. I want to write this as a no-nonsense
					how-to guide for police, from my high horse, feeling that I know
					better.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead of that, I am going to write this as a friendly set of
					thoughts which may prove useful for any peacekeeper. Many of us find
					ourselves thrust, without consent, into positions which are full of
					chaotic energy - or which are unbeareable.
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
					Vibe Patrol is one wave in the Vibe Shift.
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
					In this world, we have to operate, more often than not, in situations
					which are <em>nearly</em> familiar - reality comes with a set of
					chaotic wrinkles which are difficult to calculate for.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While we cannot control the fact that there is chaos in the world, we
					can attune
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to optimize a vibe&apos;s success rate.
				</h2>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What did i do wrong.
				</h2>
				<Image
					id="it_me"
					alt={`This is me.`}
					height={333}
					width={425}
					src={it_me.src}
				/>

				<Link className={`spaced no-deco lowercase thin`} href="./vibe_patrol/">
					Vibe Patrol I
				</Link>
			</main>
		</GreenProviderWrapper>
	);
}
