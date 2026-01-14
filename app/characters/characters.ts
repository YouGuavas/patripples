import morgan from '../../public/characters/Morgan.svg';
import morgan_photo from '../../public/Morgan_photo.svg';
import the_resurrectionist from '../../public/characters/the_resurrectionist.svg';
//import morgan_mythic from '../../public/characters/Morgan_mythic.svg';

import pat_full from '../../public/characters/pat_full.svg';
import pat_photo from '../../public/Pat_photo.svg';
import the_cartographer from '../../public/characters/the_cartographer.svg';
//import pat_wizard from '../../public/characters/pat_wizard.svg';

import jess_and_stephen from '../../public/characters/Jessica and Stephen.svg';
import jess_and_stephen_photo from '../../public/characters/Jessica and Stephen photo.svg';
import empaths from '../../public/characters/emphatic_empaths.svg';

import donovan from '../../public/characters/Donovan.svg';
import the_fool from '../../public/characters/the_fool.svg';

import ask from '../../public/universal/ask.svg';
import glyph_1 from '../../public/patroglyphs/glyph_1.svg';

type characters = characterType[];
export type characterType = {
	phase: string;
	title: string;
	archetype: string[];
	stats: statsType;
	photo: string;
	portrait: string;
	mythic: string;
	standard_bio: string[];
	mythic_bio: string[];
	href: string;

	alt: string;
	tier: string;
};
type statsType = {
	strength: number;
	intelligence: number;
	dexterity: number;
	constitution: number;
	wisdom: number;
	charisma: number;
};

const complete: characters = [
	{
		phase: glyph_1.src,
		title: `The Cartographer`,
		archetype: ['Mirror-Walker', 'Explorer of Infinity'],
		stats: {
			strength: 13,
			dexterity: 14,
			constitution: 13,
			intelligence: 17,

			wisdom: 16,
			charisma: 15,
		},
		photo: pat_photo.src,
		portrait: pat_full.src,
		mythic: the_cartographer.src,
		standard_bio: ['Patrick values ethicality and empathy.'],
		mythic_bio: [
			'Little is known about The Cartographer. He appears when he is called, and delivers only the lessons you need most pressingly. Often, he seems more confused than you are.',
			"It's said that wherever he goes, people grow. What that means, I do not know.",
		],
		href: './characters/the_cartographer',

		alt: 'Phase Three Patrick',
		tier: 'Spark',
	},
	{
		phase: glyph_1.src,
		title: `The Resurrectionist`,
		archetype: ['Ashwalking Emberwitch', 'Reconfiguring Phoenix'],
		stats: {
			strength: 8,
			dexterity: 16,
			constitution: 10,
			intelligence: 12,

			wisdom: 15,
			charisma: 18,
		},
		photo: morgan_photo.src,
		portrait: morgan.src,
		mythic: the_resurrectionist.src,
		standard_bio: [
			"The Resurrectionist is a survivor. She's been put through the ringer, and she's stood at the brink. She has loved, and she has lost. She has seen entire lives taken away, and heard the abyss sing her name.",
			"Even when the currents of life are doing their best to drown her out, she never sinks - she flows like water as she moves through the aether. Don't ever call her 'helpless' - her tongue is a whip that can snap like a firecracker.",
			"If you never make her use it, and instead see right through it, she'll think about putting a cork in it, and trading sips of her favorite firewater with you, instead. If you're really lucky, she may even say a kind word or two about you.",
			"She's still finding her wings, yet you can see them glowing and growing as she keeps going.",
		],
		mythic_bio: [
			'The Resurrectionist lets no loss stop her - and she forgets no fallen friend. She carries the weight of the dead on her shoulders.',
			'Her skeletal hound never lets her down. Wherever she goes, he and her bats are soon to be found. Legend says she is able to call them from beyond the veil when she merges her inner elements - fire and water.',
			"The belt she wears is said to be inhabited by the souls of those who she's lost - they call to her when she is lost, and light her way as she traverses the night.",
			'Gained through ancient communion with forbidden crystals, the misty shroud which surrounds her serves many purposes - guiding her through the mazes she faces, serving as salve to her allies, yet noxious to those who would do her harm. Not even she can control it. It moves through her when she is at her most intuitive - or chaotic.',
			'Be mindful of the version of her you choose to summon.',
		],
		href: './characters/the_resurrectionist',
		alt: 'Phase Morgan',
		tier: 'Core',
	},

	{
		phase: glyph_1.src,
		title: `The Emphatic Empaths`,
		archetype: ['Chaotic Rootwitch', 'Alchemic Oathkeeper'],
		stats: {
			strength: 8,
			dexterity: 16,
			constitution: 10,
			intelligence: 12,

			wisdom: 15,
			charisma: 18,
		},
		photo: jess_and_stephen_photo.src,
		portrait: jess_and_stephen.src,
		mythic: empaths.src,
		standard_bio: [
			"Have you ever met your mirror? This dynamic duo could make a forest feel like home. Frankly, they frequently do! Meet these myths in an Electric Forest, and you're sure to feel it for life.",
			"Whether they're homesteading, going viral, or Making Things Happen (tm), these two Emotional Tens always consider your feelings and hope for your healing. They find themselves eternally guiding, even when they're internally reeling.",
			'Each once stood at their own brink - one swaying, the other shaking - and each refused to sink. Today, they stand together - two entwined trees, not entangled, but interwoven and embraced - while strong roots sprout down below.',
			'One bears eternal fire, while the other always tends the hearth.',
			"Oh, and I'm pretty sure their cat is a wizard.",
		],
		mythic_bio: [
			'The Emphatic Empaths - Having each arrived on this side of reality after emerging from a portal in a forest aglow with memories of fireflies and electricity, these legends in the making breathe redefinition into existence. One draws color from the roughshod, and the other smelts grit and refusal to quit into silver.',
			"The Bloomkeeper - Sprang forth from the water and swept straight into entanglement, The Bloomkeeper crafted a specialized set of gills from a strange weed she found growing on a rock at the edge of a nondescript lake. She did that once - on accident - and she has not been able to replicate it since. Anyway, now she has gills - and you most likely don't. So do not mess with her near water. And do not mess with anything she loves anywhere near a plant, or she will find a one-time way to ward you with it. She does not know what or how she will do, but she promises that she will figure it out, and that it will be very, very uncomfortable. For you. The Giggle at Your Funeral will love it.",
			"Where there might otherwise be scars, instead sprawl ivy and stars. She keeps regal rabbits that'd make Radagast grin. Wherever she plots to plant her roots, seeds sprout and sunshine spouts.",
			'In her dream field: she forms that sunshine into a shield, which she uses to repel the forces of darkness which would see her flowers wilt. A pillar wrapped in ivy stands strong behind her. Her shield cuts a path for the sprout she hopes to see bloom.',

			"The Alloy-sworn Alchemist - Forged from fire and scarred by silver, his vibe gives 'continuous transcendence,' his tone rings 'penance,' and his thoughts sound strong resonance. He carries no shield, since he became one. These are hallmarks of those who have transmuted pain.",
			'Behind the alloy spin the souls of a nearly-jaded teacher and a streetwise preacher, each propping the other up from opposing sides of the same coin. The nearly-nihilistic preacher takes a puff of a cigar as he leans back in his chair. The teacher sips from a half-empty bottle to stave off despair.',
			'Beneath this scene swirls a layered stew of dreams. A self-automating Alchemist exchanges energy for money in the name of transmuting a better future for his little homunculus. A child dreams of brighter days following a trying ordeal. A mother holds her baby.',
			"The Twig Sentinel - Bearing a bark shield, she is a walking hug with a drive to defend. She fears the roaring of thunder, because it reminds her of all the times she had to bark to keep her home safe - she hopes she never has to bite. Seriously. Could you please quiet down? You're stressing her out.",
			"The Giggle at Your Funeral - She may be all sunshine, all the time - despite her sore hip and rough history - but if you ever make her big sister bark (or spark misery), she'll lay down her chew toy and mark you up with a bright smile.",
			"The Foretold - If Vibes were currency, he would be King. He is silent abundance. His dish runneth over. When he meows, that means he's speaking, and you'd better listen up - he's been out slinking all night, and he brings urgent tidings.",
		],
		href: './characters/emphatic_empaths/',
		alt: 'Phase Married',
		tier: 'Patron',
	},
	{
		phase: glyph_1.src,
		title: `The Foolish Apprentice`,
		archetype: ['Friend of the Fae', "Magician's Apprentice"],
		stats: {
			strength: 8,
			dexterity: 16,
			constitution: 10,
			intelligence: 12,

			wisdom: 15,
			charisma: 18,
		},
		photo: donovan.src,
		portrait: donovan.src,
		mythic: the_fool.src,
		standard_bio: [
			"Some men just want to watch the world burn. Others know it will, wish it wouldn't, and watch it happen anyway, tired from trying to stop it.",
			"Never mistake this quick-witted, fleet-footed Fool for slow. It's not that he doesn't see enough, it's that he wishes he didn't see it all.",
			"Full to the brim with boundless potential and far from cooked, this goose's own silliness will determine whether the Fowl Fool flies far and fair, or foul.",
		],
		mythic_bio: [
			"A student of many and servant of none, the Foolish Apprentice departed the Mage's Academy years ago to become the master of his own mythos from atop a solemn tower standing tall before a dark and choppy sea.",
			'Tales of his travels are shrouded in mystery and myth. Thanks to Anish Kapoor, modernity struggles to measure the depth of the darkness he once faced. Consumed, he chose to perform alchemy, and now carries with him a strange little light.',
			'A great boon when not watered, the ever-burning ember rose drawing the gaze was begotten in a trade done in bygone days spent with never forgotten friends, family, and Fae. It serves as both:',
			'-A vessel for the energy stored by pondering the connection between love and pain, burning and blooming.',
			'and',
			'-A totem for the protection and portal spells he favors.',
			"No matter the source of the mystery at the root of the misery he faces, this lighthouse ember tender keeps his beacon glowing as a silly goose's doorway for his favored Fae, that they may drift back in from the fog one day.",
			'-Carries the influence of the Kybalion.',
			'-Manifested own heart into doorway for Fae.',
			'-Magic level rises as situations grow more dire.',
		],
		href: './characters/the_foolish_apprentice/',
		alt: 'Phase Carolina',
		tier: 'Spark',
	},
];

const incomplete: characters = [];

export { complete, incomplete };
