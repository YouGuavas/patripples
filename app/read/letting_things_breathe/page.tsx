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
					Letting Things Breathe.
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
					I just do. I whistle at crows, and then I walk where they fly.
					Somehow, I keep finding bogs. Sometimes, I also find long-hidden
					artifacts of humans&apos; recent history.
				</p>
				<div className={`flex gap-medium`}>
					<Image
						id="artifact"
						alt={`The rusted nameplate from some past person's lunchbox, toolbox, or similar.`}
						height={333}
						width={250}
						src={artifact.src}
					/>
					<Image
						id="artifact"
						alt={`The rusted nameplate from some past person's lunchbox, toolbox, or similar.`}
						height={333}
						width={250}
						src={moss.src}
					/>
				</div>
				<h2 className={`lowercase thin spaced left full left-align`}>
					How to navigate a bog.
				</h2>
				<p className={`paragraph full left-align`}>
					When I happen upon a bog or a swamp, I think something like:
					&quot;Hmm. This is a nice swamp. I like swamps.&quot; And then I
					leave. I have seen{' '}
					<Link
						className={`no-deco spaced`}
						href="https://en.wikipedia.org/wiki/Shrek"
					>
						Shrek
					</Link>
					, too.
				</p>
				<p className={`paragraph full left-align`}>
					This time, as I was leaving, something called me back.
				</p>
				<p className={`paragraph full left-align`}>&quot;Bloop.&quot;</p>
				<p className={`paragraph full left-align`}>
					I spun around, hoping to catch a glimpse, having made note of some
					previous{' '}
					<Link className={`no-deco spaced`} href="./journal/bird_dance">
						strange bird behavior
					</Link>{' '}
					while following my crow employers. Nothing. So I resumed my previously
					planned exit.
				</p>
				<p className={`paragraph full left-align`}>&quot;Bloop.&quot;</p>
				<p className={`paragraph full left-align`}>I spun around again.</p>
				<p className={`paragraph full left-align`}>
					&quot;Bloop.&quot; This time, the culprit allowed me to catch a
					glimpse before retreating to its hiding space in a tangle of fallen
					trees: a grackle.
				</p>
				<p className={`paragraph full left-align`}>
					To my knowledge, this is not a typical sound for grackles to make,
					though they are known to mimic their environment in fascinating ways.
					(See:{' '}
					<Link className={`spaced no-deco`} href="./journal/grackle_mimicry">
						Grackle Mimicry
					</Link>
					)
				</p>
				<p className={`paragraph full left-align`}>
					I do not yet have good rapport with the grackles. While tentative, I
					decided to entertain the idea that these crows, and this grackle may
					have been trying to show me something. So I crept forward, minding my
					step through the muck and the mud, as I had not planned to trek
					through a bog on this day.
				</p>
				<p className={`paragraph full left-align`}>&quot;Bloop.&quot;</p>
				<p className={`paragraph full left-align`}>Another step.</p>
				<p className={`paragraph full left-align`}>&quot;Bloop.&quot;</p>
				<p className={`paragraph full left-align`}>
					Not from the grackle, but from the mud underfoot. Gas was being forced
					up and through with each step that I took. Think of this as the Earth
					experiencing localized indigestion. Each <em>trepidatious</em> step,
					placed with all the weight of an uneasy cat seeking to slink through a
					space which was ready to sink - this time, sincerely - triggered a
					burp. Like a person, with <em>indigestion</em>, pounding on their
					chest to alleviate <em>built-up gas</em>.
				</p>
				<p className={`paragraph full left-align`}>Or something like that.</p>
				<h2 className={`lowercase thin spaced left full left-align`}>
					How to get to a bog.
				</h2>{' '}
				<p className={`paragraph full left-align`}>
					How did I even get here in the first place?
				</p>
				<p className={`paragraph full left-align`}>
					What an odd thing to ask. I look around me. I remember that I followed
					crows off the trail in a county park, local to a former industrial
					hotspot. One plus one.
				</p>
				<p className={`paragraph full left-align`}>
					For a time, we prospered behind the bulwark of industry. I am not
					ungrateful for what industry did for me - it laid us a bedrock - a
					framework on which to build and refine. I have <em>questions</em> -
					respectful ones - for any forebear who would be proud of the way
					things are now. All talons, hooves, and hooks aside, any author
					who&apos;d had a hand (or a few dozen sets of dozens of sets of them)
					in penning this sketchy setup would owe it to the rest of us to
					deliver a <em>powerful</em> punchline. Look at direwolves, and then
					look at pugs. Look at the lion, and then the housecat. Look at the
					sheep, and then the lamb.
				</p>
				<p className={`paragraph full left-align`}>
					As all ages leave an imprint on history, the age of industry left
					behind a footprint. A blueprint, certainly. Also a{' '}
					<em>colossal fossil</em> footprint, unlike any nature has yet seen. So
					colossal is this footprint that we can still <em>feel</em> its thud,
					echoing through time around us. Think about the last extreme weather
					event you experienced. This fossil&apos;s record is <em>still</em> not
					settled. It&apos;s still up for debate. It&apos;s setting itself in
					the sinking stones of industrial-grade footpaths beneath{' '}
					<em>each of our feet</em> - leaving shifting sand and infirm muck
					where solid stone should stand - what kind of legacy is that to leave?
					Remember, where we overlook, nature still sees. Anyone figured out
					dark matter yet?
				</p>
				<p className={`paragraph full left-align`}>
					I don&apos;t know about you, but this pug&apos;s ancient ancestors
					left behind a <em>hoofprint</em>. Did yours leave you a pawprint? It
					could be green, it could be blue, it does live within you. I
					don&apos;t mean to be boastful, but this bullshitter&apos;s horseshoed
					hoofprint was much simpler than that fossil&apos;s footprint. It
					didn&apos;t have to beat its chest and roar. You just knew it was
					there.
				</p>
				<p className={`paragraph full left-align`}>
					I grew up around these parts, so I know that the local county parks
					system has long struggled to stay ahead on cleanup efforts. Whether
					the blame here lies on oversight, underfunding, past decades of public
					misuse, or a cyclical compounding of those factors - I do not care to
					say - blame matters little today. What matters is that this occurred,
					and that it left the Earth hurt. And that we can <em>shift</em> the
					currents of unwritten history. Like a tattoo over an old scar. You
					know - be our own Band-aid?
				</p>
				<h2 className={`lowercase thin spaced left full left-align`}>
					How to weave a tale.
				</h2>
				<p className={`paragraph full left-align`}>
					It may seem like I&apos;m tugging at loose ends pinned on the back of
					a donkey&apos;s ass, but if you&apos;ll stick with me, I promise you
					can show me how to connect the dots.
				</p>
				<p className={`paragraph full left-align`}>
					What were you about to remind me of? Oh, yeah, I was looking around
					me.
				</p>
				<p className={`paragraph full left-align`}>
					I observed proximal erosion leading to an extra steep drop,
					threatening nearby tree roots, resultant of left-behind, abandoned
					drainage systems, now blocking nature&apos;s <em>expertly</em> made
					artisanal green tech drainage systems. How many Dale Earnhardt-fast
					laps of{' '}
					<Link className={`no-deco spaced`} href="">
						10,000 Hours
					</Link>{' '}
					does <em>Mother</em> Earth have to do on humanity before this species
					figures out this cosmic mystery: &quot;Where on the DKE slope are{' '}
					<em>we</em>?&quot;
				</p>
				<Image
					id="dke"
					alt={`Dunning-Kruger effect graph. Photo credit: Wikipedia.`}
					height={333}
					width={250}
					src={dke.src}
				/>
				<h2 className={`lowercase thin spaced left full left-align`}>
					How to do something about it.
				</h2>
				<p className={`paragraph full left-align`}>
					I was going to sit here and keep writing, but tonight is the night of
					a reclamation moon. I&apos;m choosing to observe it by gently guiding
					logs into a swamp, instead. This is called &quot;exercising
					agency.&quot; You know what that means.
				</p>
				<p className={`paragraph full left-align`}>
					I will make a map tool one of these days. Until then, if you want to
					help, walk around near you. You&apos;d be surprised at how many anoxic
					sludge pits you find, especially if you do something totally{' '}
					<em>wild</em>, like follow the crows. Oh, and pick up
					non-biodegradable trash you see, too. There&apos;s a whole post that
					needs to be made about mosquito blooms and the cyclicality of the
					water cycle. On the microclimate level, every piece matters. Yeah,
					someone should have picked up after themselves. Yeah, someone should
					be picking it up. We have a parks system. A lot of stuff is sludged up
					here, stretched thin there. You don&apos;t need me to over-explain.
					Make notes of spaces which are becoming degraded. Try to help nature
					sort itself out. I might be crazy, but it seems like nature is sending
					us signals. If you decide to attempt this yourself, use your legal
					wits: don&apos;t interfere with anybody&apos;s legally-protected
					domains or anything, but maybe see about long-forgotten spaces.
					Consider your own safety, and build with sustainable structural
					integrity in mind. Ladies love natural stability and consistency.
				</p>
				<Image
					id="kip"
					alt={`Kip. Photo credit: the anon meme-maker. A legend.`}
					height={333}
					width={250}
					src={kip.src}
				/>
				<p className={`paragraph full left-align`}>
					What happens when we don&apos;t let things breathe?
				</p>
				<p className={`paragraph full left-align`}>
					I&apos;m going to listen the spring moon whisper songs to herself
					while I shift a few handfuls of nature&apos;s weights.
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
