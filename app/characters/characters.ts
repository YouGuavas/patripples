import morgan from '../../public/characters/Morgan.svg';
import morgan_photo from '../../public/Morgan_photo.svg';
import morgan_mythic from '../../public/characters/Morgan_mythic.svg';

import pat_full from '../../public/characters/pat_full.svg';
import pat_photo from '../../public/Pat_photo.svg';
import pat_wizard from '../../public/characters/pat_wizard.svg';

import jess_and_stephen from '../../public/characters/Jessica and Stephen.svg';
import jess_and_stephen_photo from '../../public/characters/Jessica and Stephen photo.svg';
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
		mythic: morgan_mythic.src,
		standard_bio: [
			"Morgan is a survivor. She's been put through the ringer, and she's stood at the brink. She has loved, and she has lost. She has seen entire lives taken away, and heard the abyss sing her name.",
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
		href: './characters/morgan',
		alt: 'Phase Morgan',
		tier: 'Core',
	},
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
		mythic: pat_wizard.src,
		standard_bio: ['Pat values ethicality and empathy.'],
		mythic_bio: [
			'The Cartographer is the progenitor of Patroglyphs. Little is known about him.',
			"It's said that wherever he goes, people grow.",
		],
		href: './characters/patrick',

		alt: 'Phase Three Pat',
		tier: 'Spark',
	},
];

const incomplete: characters = [
	{
		phase: glyph_1.src,
		title: `The Emphatic Empaths`,
		archetype: ['Ashwalking Emberwitch', 'Reconfiguring Phoenix'],
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
		mythic: ask.src,
		standard_bio: [
			'Have you ever met your mirror? This dynamic duo make forests feel like home. ',
		],
		mythic_bio: [''],
		href: './characters/emphatic_empaths/',
		alt: 'Phase Morgan',
		tier: 'Core',
	},
];

export { complete, incomplete };
