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
					What Is A Website?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					A website is any collection of web pages which is hosted and
					accessible on the internet. When you click through{' '}
					<Link className={`style-1 no-deco spaced lowercase`} href={`./../..`}>
						patripples
					</Link>
					, you are navigating a website.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is A Web Page?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					A web page is a single page within a website. Defined independently of
					a website, a web page is a page of content, structured with HTML,
					which is hosted and accessible on the internet. Most frequently these
					days, web pages are styled with CSS. Often, they are made interactive
					with Javascript.
				</p>
			</section>
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
