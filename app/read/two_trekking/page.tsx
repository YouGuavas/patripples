import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import chipmunk from '../../../public/memes/dramatic_chipmunk.png';

export const metadata: Metadata = {
	title: 'Patripples | Treading With Care',
	description:
		'Learn how to calculate chaos with Patripples as I describe how to walk in nature. Described by Patrick Yambrick.',
};
export default function Home() {
	return (
		<GreenProviderWrapper>
			<main className={`main center`}>
				<h1
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Two Trekking.
				</h1>
				<ByLine date={'Thu, May 15, 2025'} />
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
					Today, I was lucky to bring a (human) friend along on my trek - a
					first. It went well, and once he came to understand the scope of both
					the damage and the triage at play, his enthusiasm grew to rival my
					own.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Each of these encounters has enriched and rewarded me in ways even I
					struggle to describe. Whether in a religious sense, or in a personal,
					mythological, spiritual one, I have been blessed. For that, I am
					grateful.
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					how to scale gratitude.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Gratitude scales in a compounding way. As we share its seeds with
					those around us, they germinate and they bloom. We become pollinators
					of decency. I love the bees and the butterflies, but if you ask me,
					the world can always use more pollinators.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Have you ever seen a person come to life after life had given up on
					them?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Pollinating decency can do exactly that for the world, as well as for
					the unseen around us. After each of those seeds of gratitude blooms
					into a sapling, it sprouts into a tree - a spring of new life, and a
					peaceful place into which the old may fade.
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
