import glyph_1 from '../../public/patroglyphs/glyph_1.svg';
import glyph_2 from '../../public/patroglyphs/glyph_2.svg';
import glyph_3 from '../../public/patroglyphs/glyph_3.svg';
import glyph_4 from '../../public/patroglyphs/glyph_4.svg';

type glyphs = {
	title: string;
	description: string;
	glyphs: Glyph[];
};

type Glyph = {
	name: string;

	src: string;
};

const glyphs_1 = {
	title: 'Base',
	glyphs: [
		{ name: 'Ascension', src: glyph_1.src },
		{ name: 'Descension', src: glyph_2.src },
		{ name: 'Flow Forward', src: glyph_3.src },
		{ name: 'Flow Backward', src: glyph_4.src },
	],
	description: 'The base four runes of Patroglyphics.',
};

export { glyphs_1 };
