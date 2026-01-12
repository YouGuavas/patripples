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
			<p className={`paragraph`}>
				<Link
					className={`lowercase no-deco spaced`}
					href="https://naumd.com/aileens-uniform-atlas-the-impact-of-uniform-color-on-police-perception/"
				>
					A similar article I discovered while writing mine which is very
					informative and well-sourced.
				</Link>
			</p>
		</main>
	);
}
