import type { Metadata } from 'next';
import Collapsible from '@/app/components/blog/Collapsible';
import Link from 'next/link';
import vendors from './vendors';
import SocialsList from '@/app/components/lists/SocialsList';
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
					Electric Forest Vendors List.
				</h1>
				<p className={`paragraph centered width-half block left-align`}>
					While I did not attend Electric Forest 2026, I did observe it
					digitally from afar via the Electric Forest Facebook groups. I did so
					with the hope of building community rapport while trying my hand at
					fishing for a sales role with a vendor. I like to support small
					businesses, and I have found that leveraging my 92% walk-in conversion
					rate on a sales floor is a great way to gain firsthand experience with
					the pain points that small businesses and vendors experience on a
					daily basis - which serves as data that feeds into software and app
					ideas.
				</p>
			</section>
			<Collapsible
				title="Electric Forest 2026 Arts and Apparel Vendors List"
				orientation="center"
			>
				<p className={`paragraph centered width-half block left-align`}>
					As the section title suggests, here is the list of vendors who
					participated in the 2026 Electric Forest arts and crafts showcase. It
					may be incomplete. If you know of additional vendors who I am missing
					here, do not hesitata to{' '}
					<Link href="/contact" className="style-1 no-deco lowercase">
						contact me
					</Link>
					.
				</p>
				<SocialsList entries={vendors} />
			</Collapsible>
			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
