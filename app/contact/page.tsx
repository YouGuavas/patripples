import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import styles from '../page.module.css';
import { SpaceProviderWrapper } from '../ThemeProviderWrapper';

export const metadata: Metadata = {
	title: 'Patripples | Contact',
	description: 'You can contact Pat by emailing pat@patripples.com',
};
export default function Home() {
	return (
		<SpaceProviderWrapper>
			<main className={`main center`}>
				<h1 className={`lowercase style-1 thin`}>Want to ask me something?</h1>
				<p className={`style-1 uppercase`}>
					Email:{' '}
					<Link
						className={`no-deco style-1 uppercase`}
						href="mailto:pat@patripples.com"
					>
						pat@patripples.com
					</Link>
				</p>
				<h2 className="lowercase style-1 thin">Want to know more about me?</h2>
				<p className={`style-1`}>
					Check out{' '}
					<Link className={`no-deco style-1`} href="https://patdesigns.online/">
						patdesigns.online
					</Link>
				</p>
				<h2 className="lowercase style-1 thin">
					Want to know about your privacy?
				</h2>
				<p className={`style-1`}>
					I use Vercel&apos;s web analytics to understand how this site is used
					and to improve your experience. This data is anonymous and does not
					include any personal or sensitive information.
				</p>
				<p className={`style-1`}>
					I store email addresses and first names - as provided in the email
					form on the home page - in a database for use in personal mailing
					lists. This allows me to keep my site free and clean, with minimal
					advertising to you.
				</p>
			</main>
		</SpaceProviderWrapper>
	);
}
