import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import tall_tree_toon from '../../../public/trees/tall_tree_toon.png';
import crow_tree from '../../../public/trees/crow_tree.png';
import crow_and_owl_tree from '../../../public/trees/crow_and_owl_tree.png';
import betrayal_tree from '../../../public/trees/betrayal_tree.png';

export const metadata: Metadata = {
	title: 'Patripples | A Walk in the Park',
	description:
		"It's a walk in the park with Patripples through a visual lens as I cross-pollinate ideas within an ecosystem at tension. Visualized by Patrick Yambrick.",
};
export default function Home() {
	return (
		<GreenProviderWrapper>
			<main className={`main center`}>
				<h1 className={`lowercase style-1 thin spaced left full left-align`}>
					A walk in the park.
				</h1>
				<ByLine date={'Tue, Apr 8, 2025'} />
				<blockquote
					className={`style-2 thin`}
					cite="https://www.poetryfoundation.org/poems/45123/hymn-to-intellectual-beauty"
				></blockquote>
				<br />
				<span className={`full`}></span>
				<br />
				<p className={`paragraph full center`}>
					Perched upon a dead tree (
					<Link
						className="no-deco spaced"
						href="../../read/glossary/decision_tree"
					>
						Decision Tree?
					</Link>
					).
				</p>

				<Image
					id="crow_tree"
					alt={`A tall tree with two crows`}
					height={333}
					width={250}
					src={crow_tree.src}
				/>
				<p className={`paragraph full center`}>They flew, unseen, from me.</p>

				<Image
					id="empty_tree"
					alt={`A tall tree, empty`}
					height={333}
					width={250}
					src={tall_tree_toon.src}
				/>
				<p className={`paragraph full center`}>&quot;CAW! CAW! CAW!&quot;</p>
				<Image
					id="crow_and_owl_tree"
					alt={`A tall tree with two crows and an owl`}
					height={333}
					width={250}
					src={crow_and_owl_tree.src}
				/>
				<p className={`paragraph full center`}>Back with a vengeance.</p>
				<Image
					id="crow_and_owl_tree"
					alt={`A tree of treachery`}
					height={333}
					width={250}
					src={betrayal_tree.src}
				/>
				<p className={`paragraph full center`}>
					If you haven&apos;t already, go{' '}
					<Link
						className={`no-deco spaced`}
						href="../../read/a_walk_in_the_park"
					>
						read
					</Link>{' '}
					the writeup for this post! Much of the content from here is meant to
					synergize with what you can find there.
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
