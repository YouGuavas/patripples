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
};

export const services = [
	{
		title: 'Altarcrafting',
		description: [
			'Your story carries the weight of ancient myth, and deserves to be etched in the fossil record as part of the legendary, ongoing altar to humanity.',
			"I don't know much about fossils, so let me forge you a website fit for a legend, instead. When one can't do 'fossil record,' 'digital footprint' may do.",
		],
		services: [
			{
				title: 'Pedestal',
				rate: '$75',
				description:
					'A single-page website dedicated to telling your story or selling your wares.',
				demo: {
					title: 'Single-page Homesteader Site',
					href: 'https://template-one-red.vercel.app/',
				},
			},
			{
				title: 'Altar',
				rate: '$150',
				description:
					'A mid-sized (three-to-five pages) website designed with your myth in mind.',
				demo: {
					title: 'Rudi From Flint',
					href: 'https://rudi-from-flint.vercel.app/',
				},
			},
			{
				title: 'Temple',
				rate: '$250',
				description:
					'A legendary website. Altar Tier, plus three add-ons of your choosing.',
				demo: { title: 'TBD', href: './hire' },
			},
		],
	},
	{
		title: 'Mythmaking',
		description: [
			"You are more than a selfie. I know it, you know it, and now the world can know it - all you've got to do is let me help you show it. Let me forge your myth:",
		],
		services: [
			{
				title: 'Mythic Spark',
				rate: '$60',
				description:
					'Stylized portrait with symbolic elements + one-line archetypal title.',
				demo: { title: 'The Cartographer', href: './characters/patrick' },
			},

			{
				title: 'Mythic Core',
				rate: '$120',
				description:
					'Portrait + full poetic caption (archetype, transformation, elemental themes)',
				demo: { title: 'The Resurrectionist', href: './characters/morgan' },
			},

			{
				title: 'Mythic Patron',
				rate: '$200',
				description:
					'Core Tier + Additional Variant Image + short voice note unpacking the meaning.',
				demo: {
					title: 'The Emphatic Empaths',
					href: './characters/emphatic_empaths',
				},
			},
		],
	},
];
