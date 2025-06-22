import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import styles from '../page.module.css';

export const metadata: Metadata = {
	title: 'Patripples | Hire',
	description:
		'Want Pat to make you a react/nextjs website, write you a story, or read your soul? Hire him here. Patripples | Patrick Other.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className="lowercase style-1 thin">
				Want Pat to make you a website?
			</h1>
			<p className={`style-1`}>
				Pay me on{' '}
				<Link className={`no-deco style-1`} href="https://cash.app/$pyambrick">
					Cashapp
				</Link>
				.
			</p>

			<p className={`style-1`}>
				Hire me on{' '}
				<Link
					className={`no-deco style-1`}
					href="https://www.fiverr.com/s/YRlxwja/"
				>
					Fiverr
				</Link>
				.
			</p>
		</main>
	);
}
