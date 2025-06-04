import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../../ThemeProviderWrapper';

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
					Razor Walking.
				</h1>
				<ByLine date={'Mon, Jun 2, 2025'} />
				<blockquote className={`style-2 thin width-full block left-align`}>
					&quot;You&apos;re beginning to dislike me, aren&apos;t you? Well,
					dislike me. It doesn't make any difference to me now.&quot;
				</blockquote>
				<p className={`paragraph width-full block left-align`}>
					{' '}
					― W. Somerset Maugham, <em>The Razor&apos;s Edge</em>
				</p>
				<br />
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					how to see it all.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Have you ever seen a tiny dancer prance upon a razor&apos;s edge? How
					about a white knight treading light, way up on a tight rope?
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you&apos;ve lived a life like mine, then you&apos;ve witnessed both
					of these circus acts - and then some.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I was born into chaos - perched on the cusp of nothing and greatness
					since the middle of January &apos;93, my birthday represents the
					center of several storms.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					how to stand tall.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					A 34-year-old man crawls through a storm.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					how not to lose sleep.
				</h2>
			</main>
		</GreenProviderWrapper>
	);
}
