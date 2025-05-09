import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Vernal Pool',
	description:
		'Learn about Vernal Pools and the ecosystems they support with Patripples.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Occam&apos;s Razor</h1>
			<p className={`paragraph`}>
				<Link
					className={`no-deco spaced`}
					href="https://simple.wikipedia.org/wiki/Occam%27s_razor"
				>
					Occam&apos;s Razor
				</Link>{' '}
				is a mental tool which helps to sharpen thoughts by reducing their
				ambiguity. It achieves this through an application of probabilities,
				similar to ideas laid out in{' '}
				<Link className="no-deco spaced lowercase" href="../../count">
					count
				</Link>
				.
			</p>
		</main>
	);
}
