import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';
import tall_tree from '../../../public/trees/tall_tree.png';
import owl_tree from '../../../public/trees/owl_tree.png';

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
					A tired swamp.
				</h1>
				<ByLine date={'Wed, Apr 23, 2025'} />
				<blockquote
					className={`style-2 thin width-full block left-align`}
					cite="Donkey, Shrek, (2002)"
				>
					&quot;Blue flower, red thorns. Blue flower, red thorns. Blue flower,
					red thorns. Man, this would be so much easier if I wasn't
					COLOR-BLIND!&quot;
				</blockquote>
				<p className={`paragraph width-full block left-align`}>
					{' '}
					-Donkey, <em>Shrek</em> (2002) - while seeking a specific flower.
				</p>
				<br />

				<h2
					className={`lowercase thin spaced left width-full block left-align`}
				>
					How a swamp gets tired.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Do you know how an ogre is like an onion, in that they have layers?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Turns out, a bunch of things take the same shape - many masks for the
					same face. From storytelling to teaching, shading to grading, the
					concept of layering feathers its way in. We can even find it in our
					names.
				</p>
				<p className={`paragraph width-full block left-align`}>
					A swamp gets tired when a long line of people in a row get tired, or
					overhwelmed, or when the system does that. Or causes that. There are
					layers to this idea. It&apos;s very complex. You likely intuit it
					better than I can over-explain it. I&apos;ll give it a shot anyway,
					for my ego&apos;s sake. Note any mistakes.
				</p>
				<h3
					className={`lowercase thin spaced left width-full block left-align`}
				>
					How to split swamps.
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Envision some guy, or some she or some they, in deeper than all three
					of their heads in ecological slowdowns and economical log-jams. With
					the odds as stacked against them as the river&apos;s dam was wide, our
					now-ghostly ogres once dreamt to aspire. Their lives swept aside by an
					industry expired, these layered layers laid tires in lairs.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What happens next is precise - like splitting hair. As tires age and
					degrade, they begin to pollute. Microplastics and metals bleed down
					through the Earth and up into you. Have you ever experienced your own
					toxic loop? I don&apos;t have to tap into atoms to know that noxious
					exchange does the opposite of what a walk and one sliced apple a day
					may do for you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As water seeps through, those toxins leach in. They seed and they
					bleed. You don&apos;t need me to teach; you can see where that leads.
					If untreated, from deep-rooted trees and untreaded greens beside an
					old stream with some reeds - to muck pooled like pus, all stinking and
					mean.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It&apos;s not only water which gets trapped in this sauna - these
					tires mirror hoof-footed mooers in moving out methane. Only instead of
					manure, for this maneuver we&apos;ll use swamp stank instead.
					Synthetic rubbers are sort of like flammable gases which have been
					temporarily pressured into shaky stability. Have you seen that pattern
					expressed elsewhere?
				</p>
				<p className={`paragraph width-full block left-align`}>
					As if the stakes needed raising, these hoofless movers&apos; leftover
					shoe pit&apos;s changed the landscape through its carbon footprint,
					just to prove it could do it. Methane and swamp stank, water and muck,
					what more could these tires want, but a blueprint? Only the sun. They
					hold onto it tight - and in them it excites a long-linking chain which
					aspires to bring light, but instead just ignites.
				</p>

				<p className={`paragraph width-full block left-align`}>
					That got real dark. Remember those hairs - and what color their roots.
					I would not dare to split these entangling frayed ends, only give them
					a part.
				</p>
				<h2
					className={`lowercase thin spaced left width-full block left-align`}
				>
					How to re-tire a swamp.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					When I picture <em>green pastures</em> and <em>still waters</em> to
					boot, the image of ancient tires stagnating a stream into a steam
					swamp does not spring lightfooted to mind.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In an effort to protect against the rise of the stagnant swamp and
					mosquito overlord timeline, I have gently re-tired this space. I have
					done so with care to seed micro-habitats for small animals, brace
					trees and their root systems, mitigate further erosion, and{' '}
					<em>facilitate</em> air and water flows, instead of blocking them.
				</p>

				<p className={`paragraph width-full block left-align`}>
					There sit those tires, once discarded like boots - some now worn like
					shoes. Some even work in cahoots with the trees and the bees. I call
					those active re-tirees.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I will return later to take video of what changes I have done. The
					purpose of this post, aside from dancing around lyrically, is to set
					the scene for transformation. This is the &quot;Before&quot;. When
					working in harmony with nature and its cycles, a great many bountiful
					&quot;Afters&apos; exist. If you are capable of envisioning a better
					future, you are capable of taking a small step each day toward
					alchemizing a piece of that future.
				</p>

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
