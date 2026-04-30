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
			'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Developed sites come with multi-page navigation and options available for additional features.',
		demo: {
			images: [
				wilson_testimonial_1.src,
				/*wilson_testimonial_1.src,
						wilson_testimonial_2.src,*/
			],
		},
	},
	{
		title: 'Google Reviews',
		description:
			'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Developed sites come with multi-page navigation and options available for additional features.',
		demo: {
			images: [
				google_reviews.src,
				/*wilson_testimonial_1.src,
						wilson_testimonial_2.src,*/
			],
		},
	},
	{
		title: 'Tally',
		description:
			'A mid-sized (three-to-five pages) website designed with you in mind. With even more functionality than you get in Vibed tier, Developed sites come with multi-page navigation and options available for additional features.',
		demo: {
			images: [
				tally.src,
				/*wilson_testimonial_1.src,
						wilson_testimonial_2.src,*/
			],
		},
	},
];
