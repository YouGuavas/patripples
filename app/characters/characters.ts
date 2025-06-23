import pat_full from '../../public/characters/pat_full.svg';
import kid_pat from '../../public/characters/kid_pat.svg';
import morgan from '../../public/characters/Morgan.svg';
import morgan_photo from '../../public/Morgan_photo.svg';
import pat_photo from '../../public/Pat_photo.svg';
import pat_wizard from '../../public/characters/pat_wizard.svg';
import ask from '../../public/universal/ask.svg';

import glyph_1 from '../../public/patroglyphs/glyph_1.svg';
import glyph_2 from '../../public/patroglyphs/glyph_2.svg';
import glyph_3 from '../../public/patroglyphs/glyph_3.svg';
import glyph_4 from '../../public/patroglyphs/glyph_4.svg';

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
			intelligence: 17,
			dexterity: 14,
			constitution: 13,
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
	},
];

const incomplete: characters = [
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
		mythic: ask.src,
		standard_bio: [
			"Morgan is a survivor. She's been put through the ringer, and she's stood at the brink. She has loved, and she has lost. She has seen entire lives taken away, and heard the abyss sing her name.",
			"Despite the pain of the flames, the currents of life, and the weight of her dead, she never sinks - she flows like water as she moves through the aether. Don't ever call her 'helpless' - her tongue is a whip that can snap like a firecracker.",
			"If you never make her snap it, she'll think about putting a cork in it, and trading sips of her favorite firewater with you, instead.",
			"She's still finding her wings, yet you can see them glowing and growing as she keeps going.",
		],
		mythic_bio: [
			'The Resurrectionist lets no loss stop her - and she forgets no fallen friend.',
		],
		href: './characters/morgan',
		alt: 'Phase Morgan',
	},
];

export { complete, incomplete };
