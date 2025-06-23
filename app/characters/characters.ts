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
type characterType = {
	phase: string;
	title: string;
	archetype: string[];
	stats: statsType;
	photo: string;
	portrait: string;
	mythic: string;
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
		alt: 'Phase Three Pat',
	},
];

const incomplete: characters = [
	{
		phase: glyph_1.src,
		title: `The Resurrectionist`,
		archetype: ['Ashwalker', 'Reconfiguration Phoenix'],
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
		alt: 'Phase Morgan',
	},
];

export { complete, incomplete };
