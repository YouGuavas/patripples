import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import this_is_fine from '@/app/public/memes/this_is_fine.png';
import dark_modes from '@/app/public/universal/dark_modes.png';
import it_me from '@/app/public/universal/semicartoonselfie.png';
import spidermans from '@/app/public/memes/spidermans.png';

export const metadata: Metadata = {
	title: 'Patripples | Vibe Patrol',
	description:
		'Read a story about an afternoon spent finding a friend. Reported by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin spaced left width-full block left-align`}>
				Vibe Patrol.
			</h1>
			<ByLine date={'Wed, Apr 30, 2025'} />
			<blockquote
				className={`style-2 thin width-full block left-align`}
				cite="Caroline A. Shearer"
			>
				&quot;When we are in a centered, peaceful, &apos;available&apos; state,
				the vibration of all we are transforms to high energy.&quot;
			</blockquote>
			<p className={`paragraph width-full block left-align`}>
				{' '}
				-Caroline A. Shearer
			</p>
			<br />
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to stumble after a fall.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				The following is an anecdote from a past life. I do not recall the exact
				date, as I was, myself, just beginning a return to consciousness from an
				extended period of self-inflicted, alcohol-induced oblivion.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I know that policework is difficult. I won&apos;t pretend to be a
				professional. I only managed this by accident. Once. Everybody gets one.
			</p>
			<p className={`paragraph width-full block left-align`}>
				It was the early goin&apos; of the second comin&apos; of the
				roarin&apos; twenties. I was cosplayin&apos; a whiskey-sippin&apos;,
				smoke-rollin&apos; detective, down on his luck. Everywhere I walked, I
				imagined that the world quaked beneath my... Puma Legacy Dark Modes.
			</p>
			<div className="width-full block">
				<Image
					id="dark_modes"
					alt={`Puma Legacy Dark Modes`}
					height={333}
					width={400}
					src={dark_modes.src}
				/>
			</div>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to Find a Dragon.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				I don&apos;t know the guy&apos;s intentions. I don&apos;t think he was
				malicious. I think he somehow thought that I was an opp.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				I can&apos;t say I blame him. In a way, I was doing what some cop should
				have been doing.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				At the time, I was close with a long-lost friend of mine, who struggles
				with her mother. As a result of this - probably at tension with her
				obvious desire to be close to <em>some</em> mother who values her, and
				some father who does the same - plus a nasty bump to the head when she
				was a kid - or some other calculus involving{' '}
				<Link
					className={`no-deco lowercase thin spaced`}
					href="../../read/glossary/the_system"
				>
					The System
				</Link>
				, she experiences Borderline Personality Disorder.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				She still struggles with bitter liquids, though when I met her, they
				still bit her worse. It wasn&apos;t only fluid courage - the crystals
				which lined her purse have led a lode of brilliant nodes to an early
				hearse.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				She got upset with me one night for coming to her rescue, at her
				request. In that interaction, I failed my friend and let her short fuse
				get the best of me. She walked into the night, distraught, having
				threatened to call the cops on me for her boyfriend&apos;s
				misinterpretation of &quot;benevolence&quot; (read: violence, enacted by
				someone meant to be a benefactor) if I followed behind. So I did not.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				I did make note of her direction, and layered in past stories&apos;
				connections - however hazy these wavy recollections may be. Something
				called out and told me that we&apos;d cross paths again.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I would later discover that she had dropped her phone before slamming my
				dad&apos;s Prius door on me.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				Early the next morning, I set out on foot to earn my own redemption.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				I first braved the Dragon&apos;s Den - her mother&apos;s husband&apos;s
				well-built abode, wherein are contained absolutely no flaws, whatsoever.
				Despite the utter Perfection I witnessed within that home, I received no
				insights into the possible whereabouts of my friend from her mother -
				only reassurances that it was &apos;not your responsibility, but good
				luck.&apos;
			</p>
			<Link href="https://gunshowcomic.com/648">
				<div className="width-full block">
					<Image
						id="this_is_fine"
						alt={`This is fine. Meme.`}
						height={333}
						width={400}
						src={this_is_fine.src}
					/>
				</div>
			</Link>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to Look like Spiderman.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Up the next street I strolled, and mathed some mental nodes. Knowing
				dark crystals&apos; sinister intentions, I set out at tension - tall,
				grey, in showboat shoes, to boot.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				I nobly made note of which houses (and neighbor networks of them) looked
				likeliest to harbor either old or drug-afflicted people, both groups
				with which my friend had described interacting.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				Following a couple of entirely inconspicuous passes on my part, a Chad
				in aluminum armor spotted me side-eye spotting him, and we sort of did a
				psychic &quot;same spidermans&quot; meme moment. Speculatively.
				Scientifically -{' '}
				<Link
					className={`spaced no-deco lowercase thin`}
					href="../../read/glossary/mirror_neurons"
				>
					mirror neurons
				</Link>
				.
			</p>
			<div className="width-full block">
				<Image
					id="spidermans"
					alt={`Same spidermans meme.`}
					height={333}
					width={400}
					src={spidermans.src}
				/>
			</div>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to smell like a hawk.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				By that point, the jig was up. I could smell his chemical energy from
				half a block away, and just as well - I could tell by the way he was
				welding. There were a ton of juxtapositions of high hopes and
				underdelivered dreams, which seemed to me to scream, strewn throughout
				his boldly-displayed hopescape.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Right. So, we had acknowledged each other. Psychically, speculatively.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				Next, I waved to him with my empty right hand. At the time, I was
				experimenting with tonal authority, and I think I spooked him a little.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				We discussed the dropped phone dynamic, and he asked some reasonable
				questions about me and what I had told him. I mentioned during
				introductions my friend&apos;s storming off, and he drew from there a
				logical enough inference - that if this woman had forced herself out of
				my vehicle, I must have been behaving poorly toward her.
			</p>
			<p className={`paragraph width-full block left-align`}>
				In my open explanation, I described the personality disorder with which
				she has been diagnosed, and I alluded to knowledge about the local use
				of &quot;some substance.&quot; I made it clear that I was there for my
				friend, a woman of whose presence he would have been aware. We find out
				later that he and the hospitable older man with whom my friend had
				sought refuge were crystal-crossed lovers in a past life.
			</p>{' '}
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to win when outwitted.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Long story short, we open with a small, wiry man - who <em>really</em>{' '}
				enjoys welding, &quot;accidentally&quot; pulling a gun out from beneath
				the front seat of his truck. I was looking about haplessly, totally
				relaxed in my musculature. Whatever his intentions as he approached the
				truck, our exchange went about as follows:
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				&quot;Don&apos;t worry, this isn&apos;t for you.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				&quot;Huh?&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				&quot;The gun.&quot;
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				&quot;Huh?&quot;
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				&quot;Oh, nevermind. I had a gun there, and I was just letting you know
				I wasn&apos;t pulling it on you.&quot;
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				&quot;Oh, cool. I wasn&apos;t even thinking about that.&quot;
			</p>{' '}
			<div className="width-full block">
				<Image
					id="it_me"
					alt={`This is me.`}
					height={333}
					width={400}
					src={it_me.src}
				/>
			</div>
			<p className={`paragraph width-full block left-align`}>
				We went on to spend the next two hours in his driveway unpacking both
				the trials and the highs he had experienced with his ex, who he -
				flawless in character, himself - had lovingly dubbed &quot;Satan,&quot;
				before inviting me into his home.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				Once inside, he allowed me to jot down a note for my friend using his
				stationery. How kind.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				From there, he told me about his wolfdogs. I think he maybe was a furry,
				judging by the wolf plushy in the far corner of his living room, and
				other inferences about his proclivites. Interesting guy. No judgement.
			</p>
			<p className={`paragraph width-full block left-align`}>
				There is only so much thread one can untangle at once. He lamented the
				high prices web devs had quoted him in the past. He was shocked at my{' '}
				<Link
					className={`spaced no-deco lowercase thin`}
					href="https://patdesigns.online/hire/"
				>
					comparatively low rates
				</Link>
				. I ultimately reunited my friend with her phone, whereafter we
				experienced the sequence which includes an instance of psilocybin
				guiding I may have committed in a past life, and may describe in a
				future story.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Want to know what was going on under the hood during this experience?
				Tomorrow, we&apos;ll discuss the tactics I chose to employ, as well as
				spaces where I slipped up.
			</p>
		</main>
	);
}
