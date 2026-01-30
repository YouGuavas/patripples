import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';

export const metadata: Metadata = {
	title: 'Patripples | I Dream of Patripples',
	description:
		'Explore the future of patripples through a poetic lens as I cross-pollinates ideas. Composed by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main left-align`}>
			<h1 className={`lowercase style-1 thin spaced left`}>
				I Dream of Patripples.
			</h1>
			<ByLine date={'Sun, Apr 6, 2025'} />
			<blockquote
				className={`style-2 thin`}
				cite="https://www.poetryfoundation.org/poems/45123/hymn-to-intellectual-beauty"
			>
				<span className={`width-full block`}>
					&quot;The awful shadow of some unseen Power
				</span>
				<span className={`width-full block`}>
					Floats though unseen among us; visiting
				</span>{' '}
				<span className={`width-full block`}>
					This various world with as inconstant wing
				</span>{' '}
				<span className={`width-full block`}>
					{' '}
					As summer winds that creep from flower to flower;
				</span>{' '}
				<br />
				<span className={`width-full block`}>
					Like moonbeams that behind some piny mountain shower,
				</span>{' '}
				<span className={`width-full block`}>
					It visits with inconstant glance
				</span>{' '}
				<span className={`width-full block`}>
					Each human heart and countenance;
				</span>
				<span className={`width-full block`}>
					Like hues and harmonies of evening,
				</span>{' '}
				<span className={`width-full block`}>
					Like clouds in starlight widely spread,
				</span>
				<span className={`width-full block`}>Like memory of music fled,</span>
				<br />
				<span className={`width-full block`}>
					Like aught that for its grace may be Dear,
				</span>
				<span className={`width-full block`}>
					and yet dearer for its mystery.&quot;
				</span>
			</blockquote>
			<br />
			<span className={`width-full block`}>
				-an excerpt from &apos;Hymn to Intellectual Beauty,&apos; by Percy
				Blysshe Shelley
			</span>
			<br />

			<h2 className={`lowercase style-1 thin spaced left`}>
				Cultivating the Mind.
			</h2>
			<h3 className={`lowercase style-1 thin spaced left`}>
				An idea as a plant.
			</h3>
			<p className={`paragraph width-full block`}>
				When we tend to one and feed its tension, it tends to bloom with great
				intention. When we leave its fruit and flower on the vine to linger, it
				tends not to wait, rather to wilt and wither - or ferment like sour
				vinegar. Sometimes an idea takes root in the heart, and sometimes in the
				mind. Often, it only blooms in time. If an idea requires time, and yet
				not to be left to linger, then we may come to ask ourselves: &quot;How
				can I fan at the flames which surround me not so much as to snuff my own
				lights out, only just enough to stretch the seeds of my insights out of
				their own stiff shells?&quot;
			</p>
			<p className={`paragraph width-full block`}>
				A plant is only as healthy as its garden. This means that, beyond its
				own direct self interest, a plant benefits from developing strong roots
				- strong roots make for strong gardens, after all. How can this flower -
				this idea do a thing like this? It is a flower, after all, and flowers
				are not known for their agency. A plant strengthens its roots through
				patience, symbiosis, and biodiversity.
			</p>
			<h3 className={`lowercase style-1 thin spaced left`}>
				seeding a thought.
			</h3>
			<p className={`paragraph width-full block`}>
				If an idea is a plant, then it must have sprouted from a seed. From
				where did that seed spring? Was it born in the belly, between breaths -
				or did it blink itself into life like a bulb between our eyes?
			</p>
			<p className={`paragraph width-full block`}>
				I view each of us as embodying both a gardener and a pollinator of
				thought - a worldwide hive full of bees wishing to be their own keepers.
			</p>
			<p className={`paragraph width-full block`}>
				When we view the world in this way, it is easy to envision how an idea
				might first self-pollinate through some social interaction - picture a
				dandelion dancing in the wind, while from its head sips a dander-backed
				dancer: a nectar-drunk bumblebee, ready to buzz off to the next bulb,
				where it will drink more, dance more, and - more importantly - exchange
				plant matter.
			</p>
			<p className={`paragraph width-full block`}>
				When a bird or a bee does this, it is called pollination - when we do
				this, it is called conversation and collaboration.
			</p>
			<p className={`paragraph width-full block`}>
				Whenever we share an idea, or have one shared with us, we are engaging
				in a symbiotic resource exchange of the mind. As with the bee, who gets
				to buzz and vibe its way to solid status in the hive - or with the bird
				who exchanges seed for seeds - we are giving and receiving raw data,
				processed through a specially-wired natural supercomputer which has been
				specialized over millennia to engage in just this sort of exchange. We
				really are an incredible species - and part of an even more incredible
				ecosystem - when we&apos;re cooperating with one another.
			</p>
			<h3 className={`lowercase style-1 thin spaced left`}>
				A thinker as a gardener.
			</h3>
			<p className={`paragraph width-full block`}>
				If an idea is a flowering plant whose roots stem from seeds, then the
				thinker of the thought is a gardener. In order for any idea to have
				reached bloom: it first needed to be a seed, then someone had to buy it
				a bit of time, and give it some attention to boot. Only then could this
				seed - whose weeds needed weeding (
				<Link className="no-deco" href="./glossary/axonal_pruning">
					axonal pruning
				</Link>
				), whose time stood at tension - even think to become a thought.
			</p>
			<p className={`paragraph width-full block`}>
				A garden is only as good as its gardener. If the gardener never waters
				their garden, nor prunes any weeds, they won&apos;t have much of a
				garden. Wild tangles have their place, as does a sandy space, but it
				must not bog down the garden.
			</p>
			<p className={`paragraph width-full block`}>
				This is my first post, and I&apos;m making it as a promise to self-seed
				going forward. My aim with patripples is to create and share a mind
				garden. Each of us are pollinators and gardeners of ideas - cultivators
				of thought. Together, I believe we can foster a collective mind garden
				whose flowers bloom with such natural force that we are forced to reckon
				with ourselves - peacefully - and then spring forth smarter, wiser, and
				more collaborative than ever before.
			</p>
			<p className={`paragraph width-full block`}>
				If you haven&apos;t already, go{' '}
				<Link className={`no-deco spaced`} href="../../see">
					see
				</Link>{' '}
				the data visualization page! Much of the content from here is meant to
				synergize with what you can find there.
			</p>
		</main>
	);
}
