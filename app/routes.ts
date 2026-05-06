// routes.ts
import ripples from '@/public/logos/ripples.png';
import book from '@/public/universal/book.svg';
import dollar from '@/public/universal/dollar.svg';
import ask from '@/public/universal/ask.svg';
import eye from '@/public/universal/eye.svg';

const routes = [
	{ name: 'Home', path: '/', image: ripples },
	{ name: 'Read', path: '/read', image: book },

	{ name: 'Hire', path: '/hire', image: dollar },
	{ name: 'Portfolio', path: '/portfolio', image: eye },

	{ name: 'Contact', path: '/contact', image: ask },
];

export default routes;
