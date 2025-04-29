import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Vernal Pool',
	description:
		'Learn about Vernal Pools and the ecosystems they support with Patripples.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Vernal Pool</h1>
			<p className={`paragraph`}>
				A{' '}
				<Link
					className={`no-deco spaced`}
					href="https://en.wikipedia.org/wiki/Vernal_pool"
				>
					vernal pool
				</Link>{' '}
				is an ephemeral pool formation - a temporary wetland - which generally
				exists in the winter through the end of spring, at which time it
				evaporates, giving way to a drier dip or divot in the land.
			</p>
			<p className={`paragraph`}>
				Vernal pools and their inhabitants are valuable members of their larger
				ecosystems. While some of my actions do impact local vernal pools, I am
				taking some precautions in my cleaning and mending. Namely, I am
				catalyzing the evapotranspiration which should occur naturally within
				these spaces, but which has been impeded by improperly-disposed of
				non-biodegradables.
			</p>
			<h2 className={`style-1 thin lowercase`}>
				How To Learn About Vernal Pools.
			</h2>

			<p className={`paragraph`}>
				I am sorry to say that I do not recall specific citations for my sources
				here. I will credit the anon meme-maker from the Wild Green Memes for
				Ecological Fiends group on Facebook for initially introducing me to the
				idea. I have seen Vernal Pool Memes in that incredibly informative
				Facebook group a number of times. If you are one of those passionate
				vernal pool meme-makers, here&apos;s to you. From there, I have
				sporadically searched the concept on Wikipedia and Google to get a sense
				for how to spot them, and how to compensate for any potential artificial
				vernal pool evaporation I am doing.
			</p>
		</main>
	);
}
