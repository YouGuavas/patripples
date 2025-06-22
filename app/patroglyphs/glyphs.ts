import glyph_1 from '../../public/patroglyphs/glyph_1.svg';
import glyph_2 from '../../public/patroglyphs/glyph_2.svg';

type Glyph = {
	name: string;

	src: string;
};

const glyphs: Glyph[] = [
	{ name: 'Ascension', src: glyph_1.src },
	{ name: 'Ascension', src: glyph_2.src },
];

export default glyphs;
