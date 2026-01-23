// routes.ts
import ripples from '@/public/logos/ripples.png';
import book from '@/public/universal/book.svg';
import characters from '@/public/universal/characters.svg';
import dollar from '@/public/universal/dollar.svg';
import ask from '@/public/universal/ask.svg';

const routes = [
	{ name: 'Home', path: '/', image: ripples },
	{ name: 'Learn', path: '/learn', image: book },
	//{ name: 'Characters', path: '/characters', image: characters },

	{ name: 'Hire', path: '/hire', image: dollar },

	{ name: 'Ask', path: '/contact', image: ask },
];

export default routes;
