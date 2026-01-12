import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import reclamation from '@/app/public/trees/reclamation_tree.png';
import trash from '@/app/public/bog_finds/trash_stack.png';

export const metadata: Metadata = {
	title: 'Patripples | Letting Things Breathe',
	description:
		'See Patripples teach you how nature lets things breathe through a visual lens as I cross-pollinate ideas within an ecosystem at tension. Orchestrated by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`lowercase style-1 thin spaced left full left-align`}>
				Letting Things Breathe.
			</h1>
			<ByLine date={'Fri, Apr 11, 2025'} />
			<blockquote
				className={`style-2 thin`}
				cite="https://www.poetryfoundation.org/poems/45123/hymn-to-intellectual-beauty"
			></blockquote>
			<br />
			<span className={`full`}></span>
			<br />
			<Image
				id="reclamation_tree"
				alt={`A tree growing through rubble.`}
				height={333}
				width={250}
				src={reclamation.src}
			/>
			<p className={`paragraph full center`}>
				An abundance of life springing up from <em>old</em> weights.
			</p>

			<Image
				id="trash"
				alt={`A breathable pile of trash. Stack responsibly.`}
				height={333}
				width={250}
				src={trash.src}
			/>
			<p className={`paragraph full center`}>
				A breathable and modestly-constructed stack of well-seasoned, artisanal
				relics.
			</p>

			<p className={`paragraph full center`}>
				If you haven&apos;t already, go{' '}
				<Link
					className={`no-deco spaced`}
					href="../../read/letting_things_breathe"
				>
					read
				</Link>{' '}
				the writeup for this post! Much of the content from here is meant to
				synergize with what you can find there.
			</p>
		</main>
	);
}
