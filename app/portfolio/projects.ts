import wilson from '@/public/site_screenshots/wilson.svg';
import patripples from '@/public/site_screenshots/patripples.svg';
import sales_tracker from '@/public/site_screenshots/tools/sales_tracker.png';
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
	subtitle?: string;
};
export type demoType = {
	title: string;
	href: string;
	images?: string[]; // Updated to an array of strings for multiple images
};

export const projects = [
	{
		title: 'Offline First Ledger and Sales Tracker',
		description:
			'A sales conversion tracker for monitoring and analyzing sales performance, built with my 92% conversion rate methodology baked in. Free version available. Early stages.',
		demo: {
			title: 'Sales Conversion Tracker',
			href: './portfolio/sales/vendors/patripples/seller',
			images: [sales_tracker.src],
		},
		subtitle:
			'A Sales Conversion Tracker Tool. Free version available for non-registered users. Demo stages.',
	},
	{
		title: 'Developed Site',
		description:
			'A website composed for a local blue collar small business owner. Client requested a simple site with a free quote button, and without many dropdowns or extras.',
		demo: {
			title: 'Wilson Stump Grinding',
			href: 'https://wilson-stump-grinding.vercel.app/',
			images: [wilson.src],
		},
		subtitle: 'Wilson Stump Grinding',
	},
	{
		title: 'Engineered Site',
		description:
			'My personal site. I use this to host my writing, creative, professional, and technical work in a lasting way, and (when I get some free time) to demonstrate capabilities not shown in my other projects.',
		demo: { title: 'This Site', href: './', images: [patripples.src] },
		subtitle: 'Patripples',
	},
];
