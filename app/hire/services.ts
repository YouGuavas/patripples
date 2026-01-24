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
		title: 'Websites',
		description: [
			'Patrick builds websites for small businesses, homesteaders, creative trend-setters, and other go-getters.',
		],
		services: [
			{
				title: 'Vibed',
				rate: '$300',
				description:
					'A single-page website dedicated to telling your story, selling your stuff, or sharing your information. A simple, straightforward way to keep your clients up to date.',
				demo: {
					title: 'Single-page Site',
					href: 'https://template-one-red.vercel.app/',
					image: homestead.src,
				},
			},
			{
				title: 'Typed',
				rate: '$500',
				description:
					'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Typed sites come with multi-page navigation and options available for additional features.',
				demo: {
					title: 'Rudi From Flint',
					href: 'https://rudi-from-flint.vercel.app/',
					image: rudi.src,
				},
			},
			{
				title: 'Developed',
				rate: '$750',
				description:
					'A developed website. Typed tier, plus three add-ons of your choosing.',
				demo: { title: 'TBD', href: './hire', image: ask.src },
			},
		],
	},
	/*{
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
	},*/
];
