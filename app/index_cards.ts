import cartographer from '@/public/characters/cartographer_calcified.svg';
import pat from '@/public/characters/pat_solo.svg';
export type card = {
	title: string;
	classes?: string;
	description: string[];
	image?: card_image;
	subtitle?: string;
};
type card_image = {
	src: string;
	alt: string;
	fill: boolean | undefined;
	loading: 'eager' | 'lazy' | undefined;
	fetchPriority: 'high' | 'low' | 'auto' | undefined;
};
const cards = [
	{
		title: "Hi, I'm Patrick",
		subtitle: "Here's What I Do.",
		image: {
			src: pat.src,
			alt: 'Patrick',
			fill: true,
			loading: 'lazy',
			fetchPriority: 'low',
		},
		description: [
			'I drive sales.',
			'I build websites with Nextjs.',
			'I build management tools with Python.',
			'I write and edit content that converts.',
			'I create logo and character SVGs in Inkscape.',
		],
	},
	{
		title: 'Hi, I Am Amazing',
		subtitle: 'Yes, I know.',
		image: {
			src: cartographer.src,
			alt: 'Cartographer',
			fill: true,
			loading: 'eager',
			fetchPriority: 'high',
		},
		description: [
			'I am The Cartographer, as you surely already know.',

			"You must be who they sent to help. I knew they'd send someone.",

			"As you can see, I've become calcified.",

			"Oh, you're not who they sent to help? You must be here to chat with the other guy.",

			"Anyway, I don't know what you're standing around here. He's right over there.",

			"I'll just... wait here.",
		],
	},
];

export { cards };
