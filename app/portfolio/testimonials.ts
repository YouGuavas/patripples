import wilson_testimonial_1 from '@/public/testimonials/wilson_stump/testimonial_1.png';
import google_reviews from '@/public/testimonials/general/reviews.png';
import tally from '@/public/testimonials/general/tally.png';
//import ask from '@/public/universal/ask.svg';
export type servicesType = serviceTierType[];

export type serviceTierType = {
	title: string;
	description: string;
	services: serviceType[];
};

export type serviceType = {
	title: string;
	description: string;
};

export const testimonials = [
	{
		title: 'Wilson Stump Grinding',
		description:
			'A message exchange between myself and a satisfied client. Client was eager to launch his business, but got tripped up by logistics - I have retained the work I did for him as a portfolio piece, but also as a quickstart for if/when he decides to relaunch.',
		demo: {
			images: [wilson_testimonial_1.src],
		},
	},
	{
		title: 'Tally',
		description:
			"A tally that I took while working a niche sales job in a low traffic town on a Saturday. On that Saturday, I saw 38 customers walk in, and had 35 make purchases. Notes in the image refer to the fact that the total sale dollar amount would have been high but for inventory issues upstream of my role. That aside, this Saturday's tally represents a 92% conversion rate in face to face retail.",
		demo: {
			images: [tally.src],
		},
	},
	{
		title: 'Google Reviews',
		description:
			'A set of Google reviews, left by customers with no ask and no pressure, on the same Saturday from which my previous tally came. I am the Patrick they mention.',
		demo: {
			images: [google_reviews.src],
		},
	},
];
