import type { Metadata } from 'next';
import Collapsible from '@/app/components/blog/Collapsible';
import Link from 'next/link';
import vendors from './vendors';
import categories from './categories';
import { InteractiveSocialsList } from '@/app/components/lists/InteractiveSocialsList';
import ByLine from '@/app/components/blog/ByLine';
export const metadata: Metadata = {
	title: 'Patripples Blog | Intro Post by Patrick Yambrick',
	description:
		'Patripples blog is divided into categories and posts. This is the intro post written by Patrick Yambrick.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section
				className={`width-full center margin-bottom-sm flex column gap-medium`}
			>
				<h1 id="top" className={`lowercase style-1`}>
					Blissfest Vendors List.
				</h1>
				<p className={`paragraph centered width-half block left-align`}></p>
			</section>
			<Collapsible
				title="Blissfest 2026 Arts and Apparel Vendors List"
				orientation="center"
			>
				<p className={`paragraph centered width-half block left-align`}>
					As the section title suggests, here is the list of vendors set to
					participate in the 2026 Electric Forest arts and crafts showcase. It
					may be incomplete. If you know of additional vendors who I am missing
					here, do not hesitate to{' '}
					<Link href="/contact" className="style-1 no-deco lowercase">
						contact me
					</Link>
					.
				</p>
				<InteractiveSocialsList entries={vendors} categories={categories} />
			</Collapsible>
			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
