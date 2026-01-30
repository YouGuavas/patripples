import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';

export const metadata: Metadata = {
	title: "Patripples | 'What Is Patripples' by Patrick Yambrick",
	description: '. Written by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				What Is Patripples?
			</h1>
			<ByLine author={`Patrick Yambrick`} date={'Friday, Jan 30, 2026'} />
			<blockquote
				className={`style-2 thin width-full block left-align`}
				cite="Donkey, Shrek, (2002)"
			></blockquote>
			<p className={`paragraph width-full block left-align`}>
				{' '}
				-Donkey, <em>Shrek</em> (2002) - while seeking a specific flower.
			</p>
			<br />

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How a swamp gets tired.
			</h2>
			<p className={`paragraph style-1`}>
				Note:{' '}
				<Link
					className={`style-1 no-deco spaced lowercase`}
					href="/read/glossary/vernal_pool"
				>
					vernal pool
				</Link>
			</p>
			<p className={`paragraph width-full block left-align`}>
				Do you know how an ogre is like an onion, in that they have layers?
			</p>
		</main>
	);
}
