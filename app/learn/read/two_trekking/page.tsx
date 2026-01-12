import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import moan from '@/app/public/universal/moonlit.png';
import crow from '@/app/public/universal/crowfollow.png';

export const metadata: Metadata = {
	title: 'Patripples | Treading With Care',
	description:
		'Learn how to calculate chaos with Patripples as I describe how to walk in nature. Described by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Two Trekking.
			</h1>
			<ByLine date={'Thu, May 19, 2025'} />
			<blockquote className={`style-2 thin width-full block left-align`}>
				&quot;The only way to have a friend is to be one.&quot;
			</blockquote>
			<p className={`paragraph width-full block left-align`}>
				{' '}
				-Ralph Waldo Emerson
			</p>
			<br />
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				how to bring a friend.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				I have been rehabilitating a local set of swamps and false{' '}
				<Link
					className={`spaced no-deco lowercase`}
					href="/read/glossary/vernal_pool"
				>
					vernal pools
				</Link>{' '}
				using found materials and holistic land remediation methods for the
				better part of this spring. This has been an incredibly rewarding and
				fruitful experience, from which I have drawn a great deal of personal
				worth. I have encountered inspiring eagles; wise, old owls; chatty
				crows; intrepid mink; and even a couple clever chickadees.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Today, I was lucky to bring a (human) friend along on my trek - a first.
				It went well, and once he came to understand the scope of both the
				damage and the triage at play, his enthusiasm grew to rival my own.
			</p>
			<div className="width-full block">
				<Image
					id="crow"
					alt={`A crow through the trees.`}
					height={333}
					width={400}
					src={crow.src}
				/>
			</div>
			<p className={`paragraph width-full block`}>
				This is a crow. This is not my (human) friend.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Each of these encounters has enriched and rewarded me in ways I struggle
				to describe. Whether in a religious sense, or in a personal,
				mythological, spiritual one, I have been blessed. For that, I am
				grateful.
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				how to scale gratitude.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Gratitude scales in a compounding way. As we share its seeds with those
				around us, they germinate and they bloom. We become pollinators of
				decency. I love the bees and the butterflies, but if you ask me, the
				world can always use more pollinators.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Have you ever seen a person come to life after life had given up on
				them?
			</p>
			<p className={`paragraph width-full block left-align`}>
				Pollinating decency can do exactly that for the world, as well as for
				the unseen around us. After each of those seeds of gratitude blooms into
				a sapling, it sprouts into a tree - a spring of new life, and a peaceful
				place into which the old may fade.
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				how to bear witness.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				If you have ever witnessed a forgotten soul spring to light from a dark
				space, then you have experienced the sort of gratitude that I have
				experienced on this journey.
			</p>
			<div className="width-full block">
				<Image
					id="moan"
					alt={`The moon through trees.`}
					height={333}
					width={400}
					src={moan.src}
				/>
			</div>
			<p className={`paragraph width-full block left-align`}>
				Wherever it is that we each spring from, we are all part of the same
				system. Consciousness is vast and interconnected. Everything which
				surrounds us - from the birds, to the trees, and the mycelia and spores
				which flow between - represents <em>and</em> records a facet of reality.
				Each of us represents an expression of that vast network.
			</p>
			<p className={`paragraph width-full block left-align`}>
				To witness the expression of another is to give them power. Whether that
				power comes through confidence, or through the knowledge of one&apos;s
				ability to get under the skin of another is not always certain. Consider
				the strength you felt the last time you showed one of your pursuits to a
				friend or mentor, and received praise - or something as simple as an
				awestruck smile. Also consider interactions where you have felt that
				someone was taking an action with the intent of getting a rise out of
				you.
			</p>
			<p className={`paragraph width-full block left-align`}>
				In my mind, the best way to combat the latter is to embody the former.
				This world needs more witnesses to good deeds, and more good witnesses
				to all deeds. It can be nerve-wracking to begin a movement, certainly.
				Often just as difficult is to be the first to sign onto the vision of
				another.
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				how to echo sovereign.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Did you know that you can just do things? We don&apos;t have to wait for
				circumstances to get &quot;too bad.&quot; We can make a
				temporally-echoing difference <em>now</em>.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Every single action one takes toward healing - whether that be the
				healing of oneself, of one&apos;s world, or of some unnatural swamp -
				creates a ripple; an echo. This is true with or without witnesses. I am
				fortunate enough to have had a friend join me out of curiosity, but it
				took over a month of solo trekking (and talking about it) for that to
				come to bear.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Be your own witness. If you see an angle to improving the world around
				you, go out and live that. If your truth is true, witnesses will find
				their way to you.
			</p>
		</main>
	);
}
