import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';

export const metadata: Metadata = {
	title: 'Patripples | A Tired Swamp',
	description:
		'Learn about how swamps get tired with Patripples. Catalyzed by Patrick Yambrick.',
};
export default function Home() {
	return (
		<GreenProviderWrapper>
			<main className={`main center`}>
				<h1
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Bald Watching
				</h1>
				<ByLine date={'Fri, May 2, 2025'} />
				<blockquote
					className={`style-2 thin width-full block left-align`}
					cite="Donkey, Shrek, (2002)"
				>
					&quot;Blue flower, red thorns. Blue flower, red thorns. Blue flower,
					red thorns. Man, this would be so much easier if I wasn&apos;t
					COLOR-BLIND!&quot;
				</blockquote>
				<p className={`paragraph width-full block left-align`}>
					{' '}
					-Donkey, <em>Shrek</em> (2002) - while seeking a specific flower.
				</p>
				<br />

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to Bare Witness.
				</h2>

				<p className={`paragraph width-full block left-align`}>
					Do you know how an ogre is like an onion, in that they have layers?
				</p>

				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to split a swamp.
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Envision some guy, or some she or some they, in deeper than all three
					of their heads in ecological slowdowns and economical log-jams. With
					the odds as stacked against them as the river&apos;s dam was wide, our
					now-ghostly ogres once dreamt to aspire. Their lives swept aside by an
					industry expired, these layered layers laid tires in lairs.
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How to re-tire a swamp.
				</h2>

				<iframe
					src="https://youtube.com/embed/fjoSHddOYb8?si=2YQl95CZ_zz3rs_o"
					allowFullScreen
				/>

				<p className={`paragraph width-full block left-align`}>
					If you haven&apos;t already, go{' '}
					<Link className={`no-deco spaced`} href="../../see/">
						see
					</Link>{' '}
					the visual companion for this post! Much of the content from here is
					meant to synergize with what you can find there.
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
