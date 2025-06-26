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
			<section className={`width-full`}>
				<h1 className="lowercase style-1 thin">Want to work with Pat?</h1>
				<p className={`style-1`}>
					Pay me on{' '}
					<Link
						className={`no-deco style-1`}
						href="https://cash.app/$pyambrick"
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
					Once you&apos;ve figured out what you want - or if you have any
					questions - Email me:{' '}
					<Link
						className={`no-deco style-1 spaced lowercase`}
						href="mailto:pat@patripples.com"
					>
						pat@patripples.com
					</Link>{' '}
					or{' '}
					<Link
						className={`no-deco style-1 spaced lowercase`}
						href="mailto:patrickyambrick@gmail.com"
					>
						patrickyambrick@gmail.com
					</Link>
					.
				</p>
				<p>Or you can just dm me on whatever platform you found me on.</p>
			</section>
			{services.map((service) => {
				return (
					<section className={`width-full`}>
						<Rates
							title={service.title}
							services={service.services}
							description={service.description}
						/>
					</section>
				);
			})}
		</main>
	);
}
