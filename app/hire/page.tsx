import type { Metadata } from 'next';
import Link from 'next/link';
import Rates from '../components/Rates';

import { services } from './services';

export const metadata: Metadata = {
	title: 'Patripples | Hire',
	description:
		'Want Pat to make you a react/nextjs website, write you a story, or read your soul? Hire him here. Patripples | Patrick Other.',
};

export default function Home() {
	return (
		<main className={`main center flex column gap-medium`}>
			{services.map((service, index) => {
				return (
					<section key={index} className={`width-full`}>
						<Rates
							title={service.title}
							services={service.services}
							description={service.description}
						/>
					</section>
				);
			})}
			<section className={`width-full`}>
				<h2 className="lowercase style-1 thin">Want to work with Pat?</h2>
				<p className={`style-1`}>
					Tip me on{' '}
					<Link
						className={`no-deco style-1`}
						href="https://cash.app/$patripples"
					>
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
				<p>
					Email me for orders or further questions:{' '}
					<Link
						className={`no-deco style-1 spaced lowercase`}
						href="mailto:pat@patripples.com"
					>
						pat@patripples.com
					</Link>{' '}
					.
				</p>
				<p>Or DM me through the platform on which you found me.</p>
			</section>
		</main>
	);
}
