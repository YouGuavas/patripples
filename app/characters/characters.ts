//import morgan from '../../public/characters/Morgan.svg';
//import morgan_photo from '../../public/Morgan_photo.svg';
//import the_resurrectionist from '../../public/characters/the_resurrectionist.svg';
//import morgan_mythic from '../../public/characters/Morgan_mythic.svg';

import pat_full from '../../public/characters/pat_full.svg';
//import pat_photo from '../../public/Pat_photo.svg';
import the_cartographer from '../../public/characters/the_cartographer.svg';
//import pat_wizard from '../../public/characters/pat_wizard.svg';

import jess_and_stephen from '../../public/characters/Jessica and Stephen.svg';
//import jess_and_stephen_photo from '../../public/characters/Jessica and Stephen photo.svg';
import the_empaths from '../../public/characters/emphatic_empaths.svg';

//import donovan from '../../public/characters/Donovan.svg';
//import the_fool from '../../public/characters/the_fool.svg';

//import ask from '../../public/universal/ask.svg';
import glyph_1 from '../../public/patroglyphs/glyph_1.svg';

type characters = characterType[];
export type characterType = {
	phase: string;
	title: string;
	archetype?: string[];
	stats?: statsType;
	photo?: string;
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
		title: `The Empaths`,

		portrait: jess_and_stephen.src,
		mythic: the_empaths.src,
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
		title: `The Cartographer`,

		portrait: pat_full.src,
		mythic: the_cartographer.src,
		standard_bio: ['Patrick values ethicality and empathy.'],
		mythic_bio: [
			'Little is known about The Cartographer. He appears when he is called, and delivers only the lessons you need most pressingly. Often, he seems more confused than you are.',
			'It is said that wherever he goes, people grow.',
		],
		href: './characters/the_cartographer',

		alt: 'Phase Three Patrick',
		tier: 'Spark',
	},
];

const incomplete: characters = [];

export { complete, incomplete };
