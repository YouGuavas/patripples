import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Blog',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
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
				In crow betrayal, a tree where the decision to topple a treaty was made.
			</p>
		</main>
	);
}
