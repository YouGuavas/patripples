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
				How Patrick Builds A Website
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Friday, Jan 30, 2026'}
				edited={'Friday, Jan 30, 2026'}
			/>

			<br />
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is A Website
				</h2>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How Does a Website Help You
				</h2>
			</section>
		</main>
	);
}
