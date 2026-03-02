import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import styles from '../page.module.css';

export const metadata: Metadata = {
	title: 'Patripples | Contact Patrick',
	description: 'Contact information for Patrick Yambrick at Patripples.',
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
					href="mailto:patrickyambrick@gmail.com"
				>
					patrickyambrick@gmail.com
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
				I use Vercel&apos;s web analytics to understand how this site is used
				and to improve your experience. This data is anonymous and does not
				include any personal or sensitive information.
			</p>
			<p className={`paragraph`}>
				I store email addresses and first names, as provided in the email form
				on the home page, in a database for use in personal mailing lists. This
				allows me to keep my site free and clean, with minimal advertising to
				you.
			</p>
			<h3 id="video" className="lowercase style-1 thin">
				Video Players
			</h3>
			<p className={`paragraph`}>
				Wherever you see an embedded video player from YouTube, Facebook, or
				similar video hosting sites, they can track your viewership. If this
				bothers you, pass on viewing the video. When you view a video from, say,
				Facebook, even on my website, that video impacts your Facebook
				algorithm. The way in which Facebook and YouTube track you is beneficial
				to my website, though I do not consume or view their data. It has the
				potential to alter your algorithmic suggestions on whatever platform,
				which can, in turn, either reinforce or weaken your held beliefs. From
				my understanding of the abstract of this{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10468141/"
				>
					NIH article
				</Link>
				, that effect is mild. How much you trust that take depends on how much
				you trust the source.
			</p>
		</main>
	);
}
