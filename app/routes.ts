// routes.ts
import ripples from '../public/logos/ripples.png';
import eye from '../public/universal/eye.svg';
import book from '../public/universal/book.svg';
import count from '../public/universal/count.svg';
import pat from '../public/universal/pat.svg';
import dollar from '../public/universal/dollar.svg';

import ask from '../public/universal/ask.svg';

const routes = [
	{ name: 'Home', path: '/', image: ripples },

	{ name: 'See', path: '/see', image: eye },
	{ name: 'Read', path: '/read', image: book },
	{ name: 'Count', path: '/count', image: count },
	{ name: 'Character', path: '/character', image: pat },
	{ name: 'Hire', path: '/hire', image: dollar },

	{ name: 'Ask', path: '/contact', image: ask },
];

export default routes;
