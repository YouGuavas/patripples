import wilson from '@/public/site_screenshots/wilson.svg';
import patripples from '@/public/site_screenshots/patripples.svg';

export type servicesType = serviceTierType[];

export type serviceTierType = {
	title: string;
	description: string;
	services: serviceType[];
};

export type serviceType = {
	title: string;
	description: string;
	demo?: demoType;
};
export type demoType = {
	title: string;
	href: string;
	images?: string[]; // Updated to an array of strings for multiple images
};

export const projects = [
	{
		title: 'Developed Site',
		description:
			'A website composed for a local blue collar small business owner. Client requested a simple site with a free quote button, and without many dropdowns or extras.',
		demo: {
			title: 'Wilson Stump Grinding',
			href: 'https://wilson-stump-grinding.vercel.app/',
			images: [wilson.src],
		},
	},
	{
		title: 'Engineered Site',
		description:
			'My personal site. I use this to host my writing, creative, professional, and technical work in a lasting way, and (when I get some free time) to demonstrate capabilities not shown in my other projects.',
		demo: { title: 'This Site', href: './', images: [patripples.src] },
	},
];
