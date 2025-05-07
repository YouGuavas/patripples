import Image from 'next/image';
import Link from 'next/link';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';
import wetland from '../../public/universal/healthy_wetland.svg';
//import RippleGraph from '../components/RippleGraph';

import type { Metadata } from 'next';

import { SpaceProviderWrapper } from '../ThemeProviderWrapper';

export const metadata: Metadata = {
	title: 'Patripples | Currently',
	description:
		'See the visuals that drive the ripples behind Patripples! Envisioned by Patrick Yambrick.',
};
export default function Home() {
	return (
		<SpaceProviderWrapper>
			<main className={`main center height-full flex column`}>
				<h1 className={`style-1 lowercase thin`}>Hi, I&apos;m Patrick.</h1>
				<p className={`paragraph width-full block left-align`}>
					I&apos;m a community-minded problem solver with a deep respect for
					ecosystems, people, and public infrastructure.
				</p>
				<h1 className={`style-1 lowercase thin`}>
					What I&apos;ve been up to recently:
				</h1>
				<ul className="no-deco left-align width-full flex column gap-small">
					<li>
						{' '}
						Voluntarily restored portions of local wetlands and trail areas,
						removing litter, stabilizing soil, and observing mycorrhizal tree
						networks for erosion control.
					</li>
					<li>
						{' '}
						Shared knowledge of ecosystem dynamics and adaptive infrastructure
						with local residents and small business staff.
					</li>
					<li>
						{' '}
						Engaged respectfully with vulnerable or disabled
						individuals—offering dignity, discussion, and a willingness to help.
					</li>
					<li>
						{' '}
						Actively applying for roles in parks, public maintenance, and
						community enrichment.
					</li>
				</ul>
				<p className={`paragraph width-full block left-align`}>
					I&apos;m currently seeking work, mentorship, and a path
					forward—whether hands-on or hybrid, I&apos;m ready to show up. Feel
					free to reach out or follow along:
				</p>
				<p className="paragraph width-full block left-align flex column gap-small">
					<Link
						className=" lowercase spaced no-deco width-full block left-align"
						href="https://patripples.com/"
					>
						patripples.com
					</Link>{' '}
					<Link
						className={` no-deco spaced lowercase width-full block left-align`}
						href="mailto:pat@patripples.com"
					>
						pat@patripples.com
					</Link>{' '}
				</p>
			</main>
		</SpaceProviderWrapper>
	);
}
