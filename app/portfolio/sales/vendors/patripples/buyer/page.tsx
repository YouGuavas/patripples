import { SalesProviderWrapper } from '../../SalesProviderWrapper';
import SalesForm from '@/app/components/forms/SalesForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title:
		'Patripples | Web Development, Design, and Writing in Michigan by Patrick Yambrick',
	description:
		'Patripples: a learning and web development hub by Patrick Yambrick. Based in Flint, Michigan, Patrick offers personalized websites and writing, together with relevant educational resources.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<SalesProviderWrapper>
			<main className={`main left px-1`}>
				<section className={`width-full center margin-bottom-sm`}>
					<h1 id="top" className={`lowercase style-1`}>
						Sales Tracker.
					</h1>

					<p className={`paragraph width-half block centered left-align`}>
						Thank you for using my conversion tracker tool. My intent with this
						tool is to provide you with an easy to use and easier to understand
						way to track, analyze, and view sales data, including hooks and
						conversions.
					</p>
				</section>

				<section className={`width-full center margin-bottom-sm`}>
					<h2 className={`lowercase style-1`}>Sales Form</h2>
					<SalesForm />
				</section>
			</main>
		</SalesProviderWrapper>
	);
}
