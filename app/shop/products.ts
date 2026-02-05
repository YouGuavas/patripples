import book from '@/public/universal/book_bio.svg';

const products = [
	{ id: 1, image: book.src, price: 5, stock: 1, title: 'Home', url: '/' },
	{ id: 2, image: book.src, price: 5, stock: 1, title: 'Learn', url: '/learn' },
	{
		id: 3,
		image: book.src,
		price: 5,
		stock: 1,
		title: 'Characters',
		url: '/characters',
	},

	{ id: 4, image: book.src, price: 5, stock: 1, title: 'Hire', url: '/hire' },

	{ id: 5, image: book.src, price: 5, stock: 1, title: 'Ask', url: '/contact' },
];

export default products;
