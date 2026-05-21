import cartographer from '@/public/characters/cartographer_calcified.svg';
import patrick_solo from '@/public/characters/pat_solo.svg';

export type card = {
	title: string;
	classes?: string;
	description: string[];
	image?: card_image;
	subtitle?: string;
	style: 'image' | 'jumbo';
};
type card_image = {
	src: string;
	alt: string;
	fill: boolean | undefined;
	loading: 'eager' | 'lazy' | undefined;
	fetchPriority: 'high' | 'low' | 'auto' | undefined;
	priority: boolean | undefined;
};
const cards = [
	{
		title: 'Hi, I Am Patrick',
		subtitle: 'Here Is What I Do.',
		style: 'image',
		image: {
			src: patrick_solo.src,
			alt: 'Patrick',
			fill: true,
			loading: 'eager',
			fetchPriority: 'high',
		},
		description: [
			'I tell tales.',
			'I drive sales.',
			'I build websites with Nextjs.',
			'I write and edit content that converts.',
			'I create logo and character SVGs in Inkscape.',
			'I build inventory management tools with Python.',
			'I make people say "he makes me feel like Goku."',
		],
	},
	{
		title: 'Hi, I Am Amazing',
		subtitle: 'Yes, I know.',
		style: 'image',

		image: {
			src: cartographer.src,
			alt: 'Cartographer',
			fill: true,
			loading: 'lazy',
			fetchPriority: 'low',
		},
		description: [
			'I am The Cartographer, as you surely already know.',

			"You must be who they sent to help. I knew they'd send someone.",

			"As you can see, I've become calcified.",

			"Oh, you're not who they sent to help? You must be here to chat with the other guy.",

			"I don't know what you're standing around for. He's right over there.",

			"I'll just... wait here.",
		],
	},
];

export { cards };
