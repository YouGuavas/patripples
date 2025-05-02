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
			<h1 className={`style-1 thin lowercase`}>Color Theory</h1>
			<p className={`paragraph`}>
				<Link
					className={`no-deco spaced`}
					href="https://en.wikipedia.org/wiki/color_theory"
				>
					Color Theory
				</Link>{' '}
			</p>
		</main>
	);
}
