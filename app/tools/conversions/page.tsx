import ConversionButton from '@/app/components/buttons/ConversionButtons';
import D3Pie from '@/app/components/data_vis/D3Pie';
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
		<main className={`main left px-1`}>
			<section className={`width-full center margin-bottom-sm`}>
				<h1 id="top" className={`lowercase style-1`}>
					Patripples Conversion Tracker.
				</h1>
				<p className={`paragraph width-half block centered left-align`}>
					Thank you for using my conversion tracker tool. My intent with this
					tool is to provide you with an easy to use and easier to understand
					way to track, analyze, and view sales data, including hooks and
					conversions.
				</p>
			</section>
			<section className={`width-full center margin-bottom-sm`}>
				<h2 className={`lowercase style-1`}>Hooks.</h2>
				<div className="flex row gap-small width-half centered">
					<ConversionButton name="Passerby" />
					<ConversionButton name="Hook" />
				</div>
				<D3Pie
					title="Example Hook Data"
					data={[
						{ name: 'Passerby', value: 80 },
						{ name: 'Hook', value: 20 },
					]}
					width={250}
					height={250}
				/>
			</section>
			<section className={`width-full center margin-bottom-sm`}>
				<h2 className={`lowercase style-1`}>Conversions.</h2>
				<div className="flex row gap-small width-half centered">
					<ConversionButton name="Conversion" />
					<ConversionButton name="Lost" />
				</div>
				<D3Pie
					title="Example Hook Data"
					data={[
						{ name: 'Conversion', value: 92 },
						{ name: 'Lost', value: 8 },
					]}
					width={250}
					height={250}
				/>
			</section>
		</main>
	);
}
