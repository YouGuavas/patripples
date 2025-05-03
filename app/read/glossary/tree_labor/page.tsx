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
			<h1 className={`style-1 thin lowercase`}>Tree Labor</h1>
			<p className={`paragraph`}>
				Trees are happy servants who provide us joyous labour for free. They do
				this with minimal maintenance, and for an extended duration. A healthy
				mycorrhizal relationship between the trees and mycelia within a domain
				is literally free real estate.
			</p>
		</main>
	);
}
