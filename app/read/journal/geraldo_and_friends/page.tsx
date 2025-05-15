import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Geraldo and Friends',
	description:
		'Read about a night with a friend and a raccoon. Recounted by Patrick Other.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Geraldo and Friends.
			</h1>
			<ByLine date={'Sun, May 11, 2025'} />
			<blockquote
				className={`style-2 thin width-full block left-align`}
				cite="https://genius.com/2pac-keep-ya-head-up-lyrics"
			>
				&quot;&quot;
			</blockquote>

			<p className={`paragraph width-full block left-align`}>-Tupac Shakur</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to make friends.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				It was late, and I was tired. I shouldn&apos;t have been out walking,
				but I was. A friend of mine was having a difficult time, and I didn't
				have a car to drive.
			</p>
		</main>
	);
}
