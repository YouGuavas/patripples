import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Mirror Neurons',
	description: 'A note on mirror neurons',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Mirror neurons</h1>
			<p className={`paragraph`}>
				Are neurons which fire both when we take an action, and when we observe
				another taking an action. They are part of the mechanism which allows us
				to predict the movements of a dance partner, through understanding their
				musculature and how that corresponds with our own.
			</p>
			<Link
				className={`no-deco lowercase spaced thin`}
				href="https://en.wikipedia.org/wiki/Mirror_neuron"
			>
				Wikipedia Link
			</Link>
		</main>
	);
}
