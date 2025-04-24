import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import tall_tree from '../../../public/trees/tall_tree.png';
import owl_tree from '../../../public/trees/owl_tree.png';

export const metadata: Metadata = {
	title: 'Patripples | A Walk in the Park',
	description:
		"It's a walk in the park with Patripples through a poetic lens as I cross-pollinate ideas within an ecosystem at tension. Observed by Patrick Yambrick.",
};
export default function Home() {
	return (
		<GreenProviderWrapper>
			<main className={`main center`}>
				<h1
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					A tired swamp.
				</h1>
				<ByLine date={'Tue, Apr 8, 2025'} />
				<blockquote
					className={`style-2 thin width-full block left-align`}
					cite="Donna Haraway"
				>
					&quot;There is no such thing as a true wilderness untouched by
					politics.&quot;
				</blockquote>
				<p className={`paragraph width-full block left-align`}>
					{' '}
					-Donna Haraway
				</p>
				<br />
				<h2
					className={`lowercase thin spaced left width-full block left-align`}
				>
					How to sit down on a log.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Today, I saw three birds in a tree.
				</p>

				<iframe
					src="https://www.youtube.com/embed/JUGbctYivOY"
					allowFullScreen
				/>
				<p className={`paragraph width-full block left-align`}>
					If you haven&apos;t already, go{' '}
					<Link
						className={`no-deco spaced`}
						href="../../see/a_walk_in_the_park"
					>
						see
					</Link>{' '}
					the visual companion for this post! Much of the content from here is
					meant to synergize with what you can find there.
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
