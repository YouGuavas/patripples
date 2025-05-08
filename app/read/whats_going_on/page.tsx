import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import { GreenProviderWrapper } from '../../ThemeProviderWrapper';

export const metadata: Metadata = {
	title: 'Patripples | What Is Happening',
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
					What Is Going On.
				</h1>
				<ByLine date={'Thu, May 8, 2025'} />

				<p className={`paragraph width-full block left-align`}>
					This may get heavy. My life just took a major turn for the worse. My
					aim here is to tell my story, just in case.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I do not like to speak this way - I would prefer to retain my dignity,
					and to overcome things silently. I am having a difficult time seeing
					into the future right now, though, so here goes.
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Growing Up.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Growing up in my family was <em>not</em> easy. Envision two
					codependent, narcissistic entities who have no business being in
					charge of themselves, let alone you, somehow controlling everything
					around you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Now, throw that into a blender - with constant movement due to
					financial instability, a favorite child (not me), a violent and
					unstable father with a need to claim credit for things he has not done
					(multi-domain valor thief!), and a mother who takes those stresses out
					on you.
				</p>

				<p className={`paragraph width-full block left-align`}>
					We had moved <em>seventeen</em> times by the time I was 17 years old.
				</p>
				<p className={`paragraph width-full block left-align`}>
					My mom worked, and my dad stayed home. He had a back injury, which
					should have healed with any physical therapy effort within weeks, but
					he managed - through persistence and laziness - to scam{' '}
					<Link
						className={`no-deco spaced lowercase`}
						href="./glossary/the_system"
					>
						The System
					</Link>
					, despite clear and warranted skepticism from all around. He secured
					his disability, and proceeded to lie down in comfort for the next 40
					years, using his disability status to garner sympathy.
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Being Born.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I was born post-term, and my youngest brother premature. That is two
					out of three born in unusual time.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Despite the fact that nearly all post-term births are managed and
					planned by doctors, my father was not in the room with us. He was
					somehwere else, with unclear details as to where. He always tells me a
					story about how he had to crawl through what he describes as one of
					the world&apos;s worst ice storms to get to me. How incredible of him.
					I wonder if my mom did any of the labor.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Without implying pre-birth certainty, I believe that both of these
					terms may have been influenced by my dad&apos;s violence toward my
					mother. As a result of my post-term birth, plus the intense and
					volatile dynamic into which I was born, I developed early cognition.
					My dad used to joke that when I was born, I read the label on the side
					of the machines to the doctor: "Made in Tay-wan."
				</p>
				<p className={`paragraph width-full block left-align`}>
					I do not recall that, and I doubt its veracity. What I do recall,
					however - one of my earliest memories - is the image of my dad
					violently tripping my mother, pregnant with my brother, by pinning her
					arm in the front door.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					The Mother.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					Not only was I regularly threatened by my father, but my mother as
					well - she was more comfortable with physical violence toward
					children. Her favorite pastime until I outsized her was to snatch me
					up by my head and neck, twist her face up into a mangled mess of
					facial features.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					The Father.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					The story of Marvin Gaye and his father - Marvin, Sr., who shot and
					killed Marvin with the gun Marvin had purchased for his father - was
					my dad&apos;s favorite way to re-skin &quot;I brought you into this
					world, and I can take you out.&quot;
				</p>

				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					The Self.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I am selfish and vile - an unlikable dick who never does anything for
					anyone. A real psycho.
				</p>
				<p className={`paragraph width-full block left-align`}>-or-</p>
				<p className={`paragraph width-full block left-align`}>
					I am a passionate and deeply principled autodidact, whose goal is to
					heal our land and its people for as near to free as I am able.
					Preferably with as little notoriety as possible.
				</p>
				<p className={`paragraph width-full block left-align`}>
					For the last decade, I have provided free value to all around me,
					deliberately doing so in the shadows. Consider these swamp restoration
					efforts. A friend healed herself from addiction while in my company.
					Thanks to what&apos;s going on, I have to start doing my work in the
					open - so that misinformed individuals may never again throw in my
					face my current place.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					The Current.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I am sitting in a McDonald&apos;s. During each of the last two nights,
					I have slept wrapped up in a shit coccoon on a lattice porch. A
					stranger saw me walking, and offered me shelter on his porch in
					exchange for a trip to the store.
				</p>
			</main>
		</GreenProviderWrapper>
	);
}
