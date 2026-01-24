import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import styles from '../page.module.css';

export const metadata: Metadata = {
	title: 'Patripples | Contact',
	description: 'You can contact Patrick by emailing pat@patripples.com',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`lowercase style-1 thin`}>
				Want to ask Patrick something?
			</h1>
			<p className={`style-1 lowercase`}>
				Email:{' '}
				<Link
					className={`no-deco style-1 spaced lowercase`}
					href="mailto:pat@patripples.com"
				>
					pat@patripples.com
				</Link>
			</p>

			<h2 className="lowercase style-1 thin">
				Want Patrick to make you a website?
			</h2>

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

			<h2 className="lowercase style-1 thin">
				Want to know about your privacy?
			</h2>
			<p className={`paragraph`}>
				Pat uses Vercel&apos;s web analytics to understand how this site is used
				and to improve your experience. This data is anonymous and does not
				include any personal or sensitive information.
			</p>
			<p className={`paragraph`}>
				Pat stores email addresses and first names, as provided in the email
				form on the home page, in a database for use in personal mailing lists.
				This allows me to keep my site free and clean, with minimal advertising
				to you.
			</p>
		</main>
	);
}
