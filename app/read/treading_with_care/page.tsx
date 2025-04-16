import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import artifact from '../../../public/bog_finds/nameplate_artifact.png';
import moss from '../../../public/bog_finds/moss_reclamation.png';
import dke from '../../../public/bog_finds/dke.png';
import kip from '../../../public/memes/kip.png';

export const metadata: Metadata = {
	title: 'Patripples | Letting Things Breathe',
	description:
		'Learn to build swamp straws with Patripples as I toss logs into a long-forgotten bog. Facilitated by Patrick Yambrick.',
};
export default function Home() {
	return (
		<GreenProviderWrapper>
			<main className={`main center`}>
				<h1 className={`lowercase style-1 thin spaced left full left-align`}>
					Treading With Care.
				</h1>
				<ByLine date={'Fri, Apr 11, 2025'} />
				<blockquote
					className={`style-2 thin full left-align`}
					cite="https://www.brainyquote.com/topics/pollution-quotes"
				>
					&quot;Sooner or later, we will have to recognise that the Earth has
					rights, too, to live without pollution. What mankind must know is that
					human beings cannot live without Mother Earth, but the planet can live
					without humans.&quot;
				</blockquote>
				<p className={`paragraph full left-align`}> -Evo Morales</p>
				<br />
				<h2 className={`lowercase thin spaced left full left-align`}>
					How to find a bog.
				</h2>
				<p className={`paragraph full left-align`}>
					Nobody pays me to find anoxic sludge bogs.
				</p>

				<p className={`paragraph full left-align`}>
					If you haven&apos;t already, go{' '}
					<Link
						className={`no-deco spaced`}
						href="../../see/letting_things_breathe"
					>
						see
					</Link>{' '}
					the visual companion for this post! Much of the content from here is
					meant to synergize with what you can find there.
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
