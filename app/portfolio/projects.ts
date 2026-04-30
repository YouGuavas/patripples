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
			'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Developed sites come with multi-page navigation and options available for additional features.',
		demo: {
			title: 'Wilson Stump Grinding',
			href: 'https://wilson-stump-grinding.vercel.app/',
			images: [wilson.src],
		},
	},
	{
		title: 'Engineered Site',
		description:
			'A fully fledged website, plus initial SEO. Developed tier, plus three add-ons of your choosing.',
		demo: { title: 'This Site', href: './', images: [patripples.src] },
	},
];
