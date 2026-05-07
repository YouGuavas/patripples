import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Patripples | Barter',
	description:
		'Want Pat to make you a react/nextjs website, write you a story, or read your soul? Hire him here. Patripples | Patrick Other.',
};

export default function Home() {
	return (
		<main className={`main center flex column gap-medium`}>
			<section className={`width-full`}>
				<h1 className="lowercase style-1 thin">Want to barter with Pat?</h1>
				<p className={``}>
					I will expand upon this later. For now, it is a log of exchanges
					I&apos;ve made.
				</p>
				<p className={`style-1`}>
					Swapped a{' '}
					<Link
						href="../characters/emphatic_empaths"
						className={'lowercase spaced no-deco thin style-1'}
					>
						mythology page
					</Link>{' '}
					in exchange for a magical trinket, food, and shelter.
				</p>
			</section>
		</main>
	);
}
