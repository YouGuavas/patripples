import homestead from '@/public/site_screenshots/homestead.svg';
import rudi from '../../public/site_screenshots/rudi.svg';
import wilson from '@/public/site_screenshots/wilson.svg';
import patripples from '@/public/site_screenshots/patripples.svg';

//import ask from '@/public/universal/ask.svg';
export type servicesType = serviceTierType[];

export type serviceTierType = {
	title: string;
	category: string;
	description: string;
	services: serviceType[];
};

export type serviceType = {
	title: string;
	id: string;
	rate: number;
	description: string;
	demo?: demoType;
};
export type demoType = {
	title: string;
	href: string;
	images?: string[]; // Updated to an array of strings for multiple images
};

export const services = [
	{
		title: "Patrick's Websites",
		category: 'websites',
		description: [
			'Patrick builds websites for small businesses, homesteaders, creative trend-setters, and other go-getters.',
		],
		services: [
			{
				title: 'Vibed',
				id: 'vibed-tier',
				rate: 500,
				description:
					'A single-page website dedicated to telling your story, selling your stuff, or sharing your information. A simple, straightforward way to keep your clients up to date.',
				demo: {
					title: 'Single-page Site',
					href: 'https://template-one-red.vercel.app/',
					images: [homestead.src],
				},
			},
			{
				title: 'Developed',
				id: 'developed-tier',

				rate: 750,
				description:
					'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Developed sites come with multi-page navigation and options available for additional features.',
				demo: {
					title: 'Wilson Stump Grinding',
					href: 'https://wilson-stump-grinding.vercel.app/',
					images: [
						wilson.src,
						/*wilson_testimonial_1.src,
						wilson_testimonial_2.src,*/
					],
				},
			},
			{
				title: 'Engineered',
				id: 'engineered-tier',

				rate: 1500,
				description:
					'A fully fledged website, plus initial SEO. Developed tier, plus three add-ons of your choosing.',
				demo: { title: 'This Site', href: './', images: [patripples.src] },
			},
		],
	},

	{
		title: "Patrick's Bundles",
		category: 'bundles',
		description: [
			"Beyond websites, Patrick offers bundles. Looking for branding and alignment insights, clear content writing, scalable digital art, or SEO? Take a look at Patrick's Bundles below.",
		],
		services: [
			{
				title: 'Build a Brand',
				id: 'build-a-brand',

				rate: 2500,
				description:
					'A customized Engineered (5 page) website, unique to your brand/identity. Includes initial SEO and Google Business optimizations. Add-ons available.',
				demo: {
					title: 'Rudi From Flint (Paused)',
					href: 'https://rudi-from-flint.vercel.app/',
					images: [rudi.src],
				},
			},
		],
	},
	{
		title: "Patrick's Retainer Services",
		category: 'retainer',

		description: [
			'Patrick will update and maintain your sites for you, optimizing for Google and SEO.',
		],
		services: [
			{
				title: 'Basic',
				id: 'basic-retainer',

				rate: 500,
				description:
					'Patrick will keep your site hosted, optimized, safe, and basically functional each month.',
			},
			{
				title: 'Charting A Course',
				id: 'mid-retainer',

				rate: 1000,
				description:
					'On top of those features found in Basic tier, Patrick will write 5 social media posts, and 1-2 website blog posts per week. Includes bug fixes and basic style and content updates.',
			},
			{
				title: 'Getting Serious',
				id: 'advanced-retainer',

				rate: 2000,
				description:
					'Building on the Charting a Course tier, Patrick will also optimize your site for conversions and sales, and perform deep, personalized style and content updates.',
			},
		],
	},
	{
		title: "Patrick's Microservices",
		category: 'micro',
		description: [
			'Patrick offers a variety of microservices for those small business owners who only need a nudge here or a tweak there.',
		],
		services: [
			{
				title: 'Get You More Sales',
				id: 'sales-boost',

				rate: 150,
				description:
					"Sales numbers lower than you hoped? Let me look at what you\'ve got going on.",
			},
			{
				title: "Optimize Your Site's Performance",
				id: 'optimize-site-performance',

				rate: 150,
				description:
					'Slow loading speeds can ruin a great site, with 53% of users abandoning sites that take longer than 2 seconds to load. Let me speed you up to keep your cash flowing.',
			},
			{
				title: 'About Page Rewrite',
				id: 'about-rewrite',

				rate: 100,
				description:
					"Many small business owners are focused on their craft and on portraying humility. This is noble. But it doesn't sell your customer. Let me write you an About Page that tells your story.",
			},
			{
				title: 'Help You Get A Domain Name',
				id: 'domain-name',

				rate: 50,
				description:
					"I\'ve seen a lot of people operating on wixsite or wordpress subdomains. In the early going, this is fine. Established businesses who care about user trust want a custom domain. I'll help you find one.",
			},
			{
				title: 'Help You Get Hosted',
				id: 'host-site',

				rate: 50,
				description:
					"Got the code for a site? Don\'t know how to get it hosted, or which hosting platform is best for your case? I have you covered.",
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
