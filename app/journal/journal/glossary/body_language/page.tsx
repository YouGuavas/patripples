import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Body Language',
	description:
		'Learn about body language and the ecosystems they support with Patripples.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Body Language</h1>
			<p className={`paragraph`}>
				<Link
					className={`no-deco spaced`}
					href="https://en.wikipedia.org/wiki/body_language"
				>
					Body Language
				</Link>{' '}
			</p>
		</main>
	);
}
