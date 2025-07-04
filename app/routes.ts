// routes.ts
import ripples from '../public/logos/ripples.png';
import eye from '../public/universal/eye.svg';
import book from '../public/universal/book.svg';
import count from '../public/universal/count.svg';
import characters from '../public/universal/characters.svg';
import dollar from '../public/universal/dollar.svg';
import glyph_1 from '../public/patroglyphs/glyph_1.svg';

import ask from '../public/universal/ask.svg';

const routes = [
	{ name: 'Home', path: '/', image: ripples },
	{ name: 'Read', path: '/read', image: book },
	{ name: 'Characters', path: '/characters', image: characters },

	{ name: 'Hire', path: '/hire', image: dollar },

	{ name: 'Ask', path: '/contact', image: ask },
];

export default routes;
