import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import patrick_photo from '@/public/photos/Patrick_photo.svg';
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
					About Patrick
				</h2>

				<p className={`paragraph width-full block left-align`}>
					In order to understand patripples, you must first understand Patrick.
					Patrick is a{' '}
					<Link
						className={`style-1 no-deco spaced lowercase`}
						href="./../../characters"
					>
						character
					</Link>
				</p>
				<Image
					height={500}
					width={500}
					src={patrick_photo.src}
					alt={'Patrick standing outside during winter.'}
				/>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Who Is Patrick?
				</h3>
				<p className={`paragraph width-full block left-align`}>Coming soon!</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does Patrick Do?
				</h3>
				<p className={`paragraph width-full block left-align`}>Coming soon!</p>
			</section>
		</main>
	);
}
