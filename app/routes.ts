// routes.ts
import eye from '../public/universal/eye.svg';
import book from '../public/universal/book.svg';
import count from '../public/universal/count.svg';

import ask from '../public/universal/ask.svg';

const routes = [
	{ name: 'See', path: '/see', image: eye },
	{ name: 'Read', path: '/read', image: book },
	{ name: 'Count', path: '/count', image: count },
	{ name: 'Ask', path: '/contact', image: ask },
];

export default routes;
