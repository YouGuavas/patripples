import homestead from '../../public/site_screenshots/homestead.png';
import rudi from '../../public/site_screenshots/rudi.png';

import the_cartographer from '../../public/characters/the_cartographer.svg';
import the_resurrectionist from '../../public/characters/the_resurrectionist.svg';

import ask from '../../public/universal/ask.svg';
export type servicesType = serviceTierType[];

export type serviceTierType = {
	title: string;
	description: string;
	services: serviceType[];
};

export type serviceType = {
	title: string;
	rate: string;
	description: string;
	demo: demoType;
};
export type demoType = {
	title: string;
	href: string;
	image: string;
};

export const services = [
	{
		title: 'Altarcrafting',
		description: [
			'(I will make you a website)',
			'Your story carries the weight of many myths, and deserves to be etched into the fossil record as part of the legendary, ongoing altar to humanity.',
			"I don't know much about fossils, so let me forge you a website fit for a legend and enhance your digital footprint, instead.",
		],
		services: [
			{
				title: 'Pedestal',
				rate: '$60',
				description:
					'A single-page website dedicated to telling your story or selling your wares. Simple, straightforward way to keep your clients informed or to tell your story.',
				demo: {
					title: 'Single-page Homesteader Site',
					href: 'https://template-one-red.vercel.app/',
					image: homestead.src,
				},
			},
			{
				title: 'Altar',
				rate: '$120',
				description:
					'A mid-sized (three-to-five pages) website designed with your myth in mind. This is a more functional site than pedestal tier, with multi-page navigation and options available for tools and functionality.',
				demo: {
					title: 'Rudi From Flint',
					href: 'https://rudi-from-flint.vercel.app/',
					image: rudi.src,
				},
			},
			{
				title: 'Temple',
				rate: '$225',
				description:
					'A legendary website. Altar Tier, plus three add-ons of your choosing.',
				demo: { title: 'TBD', href: './hire', image: ask.src },
			},
		],
	},
	{
		title: 'Mythmaking',
		description: [
			'(I will make you a myth)',

			"You are more than a selfie. I know it, you know it, and now the world can know it - all you've got to do is let me help you show it. Let me forge your myth:",
		],
		services: [
			{
				title: 'Mythic Spark',
				rate: '$30',
				description:
					'Stylized portrait with symbolic elements + one-line archetypal title.',
				demo: {
					title: 'The Cartographer',
					href: './characters/patrick',
					image: the_cartographer.src,
				},
			},

			{
				title: 'Mythic Core',
				rate: '$60',
				description:
					'Portrait + full poetic caption (archetype, transformation, elemental themes)',
				demo: {
					title: 'The Resurrectionist',
					href: './characters/morgan',
					image: the_resurrectionist.src,
				},
			},

			{
				title: 'Mythic Patron',
				rate: '$120',
				description:
					'Core Tier + Additional Variant Image + short voice note unpacking the meaning.',
				demo: {
					title: 'TBD',
					href: './hire',
					image: ask.src,
				},
			},
		],
	},
];
