import homestead from '@/public/site_screenshots/homestead.png';
import rudi from '../../public/site_screenshots/rudi.png';
import the_cartographer from '@/public/characters/the_cartographer.svg';
import wilson from '@/public/site_screenshots/wilson.png';
import patripples from '@/public/site_screenshots/patripples.png';

//import ask from '@/public/universal/ask.svg';
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
		title: "Patrick's Websites",
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
				title: 'Developed',
				rate: '$500',
				description:
					'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Developed sites come with multi-page navigation and options available for additional features.',
				demo: {
					title: 'Wilson Stump Grinding',
					href: 'https://wilson-stump-grinding.vercel.app/',
					image: wilson.src,
				},
			},
			{
				title: 'Engineered',
				rate: '$750',
				description:
					'An engineered website. Developed tier, plus three add-ons of your choosing.',
				demo: { title: 'This Site', href: './', image: patripples.src },
			},
		],
	},

	{
		title: "Patrick's Bundles",
		description: [
			"Beyond websites, Patrick offers bundles. Looking for branding and alignment insights, clear content writing, scalable digital art, or SEO? Take a look at Patrick's Bundles below.",
		],
		services: [
			{
				title: 'Build a Brand',
				rate: '$750',
				description:
					'A customized Developed (3 page) website, unique to your brand/identity. Includes contact form. Options available.',
				demo: {
					title: 'Rudi From Flint (Paused)',
					href: 'https://rudi-from-flint.vercel.app/',
					image: rudi.src,
				},
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
	},
	
	{
		title: "Patrick's Storytelling",
		description: [
			'Patrick creates svg portraits for you in a style featured on patripples. Highly reusable, these portraits are designed with your digital essence in mind. Your portrait will be well suited for use in a variety of ways, from social media profile pictures, to website branding and storytelling. Patrick also writes poetic captions centered around your persona and portrait.',
		],
		services: [
			{
				title: 'Simple Story',
				rate: '$50',
				description:
					"A single svg portrait, styled after you, in the 'portrait' style found on the patripples characters page. Accompanied by a brief, poetic caption or story.",
				demo: {
					title: 'Patrick',
					href: './characters/the_cartographer',
					image: the_cartographer.src,
				},
			},
		],
	},*/
];
