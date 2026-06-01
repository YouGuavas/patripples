import { SalesProviderWrapper } from './SalesProviderWrapper';
import SalesForm from '@/app/components/forms/SalesForm';
import ConversionButton from '@/app/components/buttons/ConversionButtons';
import DownloadButton from '@/app/components/buttons/DownloadButton';
import { ConversionsPieChart } from '@/app/components/data_vis/sales_charts/ConversionsPieChart';
import { HooksPieChart } from '@/app/components/data_vis/sales_charts/HooksPieChart';
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
					<SalesForm />
				</section>
				<section className={`width-full center margin-bottom-sm`}>
					<DownloadButton />

					<h2 className={`lowercase style-1`}>Hooks.</h2>
					<div className="flex row gap-small width-half centered">
						<ConversionButton name="Passerby" type="Passerby" />
						<ConversionButton name="Hook" type="Hook" />
					</div>
					<HooksPieChart width={250} height={250} />
				</section>
				<section className={`width-full center margin-bottom-sm`}>
					<h2 className={`lowercase style-1`}>Conversions.</h2>
					<div className="flex row gap-small width-half centered">
						<ConversionButton name="Loss" type="Lost" />
						<ConversionButton name="Impulse Purchase" type="Conversion" />
						<ConversionButton name="Core Purchase" type="Conversion" />
						<ConversionButton name="Premium Purchase" type="Conversion" />
					</div>
					<ConversionsPieChart width={250} height={250} />
				</section>
			</main>
		</SalesProviderWrapper>
	);
}
