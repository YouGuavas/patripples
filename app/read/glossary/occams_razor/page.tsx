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
			<h1 className={`style-1 thin lowercase`}>Vernal Pool</h1>
			<p className={`paragraph`}>
				A{' '}
				<Link
					className={`no-deco spaced`}
					href="https://en.wikipedia.org/wiki/Vernal_pool"
				>
					vernal pool
				</Link>{' '}
				is an ephemeral pool formation - a bit like a temporary wetland - which
				generally exists in the winter through the end of spring, at which time
				it evaporates, giving way to a drier dip or divot in the land.
			</p>
		</main>
	);
}
