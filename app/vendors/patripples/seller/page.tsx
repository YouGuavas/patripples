import { SalesProviderWrapper } from '../../SalesProviderWrapper';
import SalesList from '@/app/components/lists/SalesList';
import ConversionButton from '@/app/components/buttons/ConversionButtons';
import DownloadButton from '@/app/components/buttons/DownloadButton';
import { ConversionsPieChart } from '@/app/components/data_vis/sales_charts/ConversionsPieChart';
import { HooksPieChart } from '@/app/components/data_vis/sales_charts/HooksPieChart';
import itemData from './itemData.json';
import sellerData from './sellerData.json';
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
					<DownloadButton />

					<p className={`paragraph width-half block centered left-align`}>
						Thank you for using my conversion tracker tool. My intent with this
						tool is to provide you with an easy to use and easier to understand
						way to track, analyze, and view sales data, including hooks and
						conversions.
					</p>
				</section>

				<section
					className={`width-full center margin-bottom-sm flex column gap-large`}
				>
					<h2 className={`lowercase style-1`}>Visualization</h2>
					<div
						className={`width-full center margin-bottom-sm flex column gap-large`}
					>
						<p className={`paragraph width-half block centered center`}>
							Tap one of these buttons if someone walks away instead of buying.
						</p>
						<div className="flex row gap-small width-half centered">
							<ConversionButton name="Loss" type="Loss" />
						</div>
						<SalesList itemData={itemData} tax_rate={sellerData.tax} />

						<p className={`paragraph width-half block centered center`}>
							Passerby is for when they don&apos;t stop, Loss is for when they
							stopped but didn&apos;t buy anything. This will help you track and
							understand your sales funnel better.
						</p>
					</div>
					<div
						className={`width-full center margin-bottom-sm flex row gap-large`}
					>
						<div>
							<h3 className={`lowercase style-1`}>Hooks.</h3>

							<HooksPieChart width={250} height={250} />
						</div>

						<div>
							<h3 className={`lowercase style-1`}>Conversions.</h3>

							<ConversionsPieChart width={250} height={250} />
						</div>
					</div>
				</section>
			</main>
		</SalesProviderWrapper>
	);
}
