import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Biodiversity',
	description: 'Learn about biodiversity with Patripples.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Biodiversity</h1>
			<p className={`paragraph`}>
				<Link
					className={`no-deco spaced`}
					href="https://en.wikipedia.org/wiki/biodiversity"
				>
					Biodiversity
				</Link>{' '}
			</p>
		</main>
	);
}
