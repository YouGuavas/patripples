import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Decision Tree',
	description: 'Learn about Decision Trees and crow betrayals with Patripples.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Decision Tree</h1>
			<p className={`paragraph`}>
				Typically, a visualization tool which helps to understand the potential
				outcomes of the various decisions one might make.
			</p>
			<p className={`paragraph`}>
				In{' '}
				<Link className="no-deco spaced" href="../a_walk_in_the_park">
					crow betrayal
				</Link>
				, a tree where the decision to topple a treaty was made.
			</p>
		</main>
	);
}
