import Link from 'next/link';
import { services } from '../../services';

export default async function ProductPage({
	params,
}: {
	params: { category: string; id: string };
}) {
	const { category, id } = await params;

	const serviceTier = services.find((tier) => {
		return tier.category.toLowerCase() === category.toLowerCase();
	});

	if (!serviceTier) {
		return (
			<main className={`main center flex column gap-medium`}>
				<section className={`width-full`}>
					<h1 className="lowercase style-1 thin">Service Tier Not Found</h1>
				</section>
			</main>
		);
	}

	const pageData = serviceTier.services.find((service) => {
		return service.id.toLowerCase() === id.toLowerCase();
	});

	if (!pageData) {
		return (
			<main className={`main center flex column gap-medium`}>
				<section className={`width-full`}>
					<h1 className="lowercase style-1 thin">Page Data Not Found</h1>
				</section>
			</main>
		);
	}

	return (
		<main className={`main center flex column gap-medium`}>
			<section className={`width-full`}>
				<h1 className="lowercase style-1 thin">{pageData.title}</h1>
				<p className={`style-1`}>Price: {`$${pageData.rate.toFixed(2)}`}</p>
				<p className={`style-1`}>{`${pageData.description}`}</p>
				<button
					className={`snipcart-add-item shop-button`}
					data-item-id={pageData.title.toUpperCase()}
					data-item-name={pageData.title}
					data-item-price={(pageData.rate * 0.3).toFixed(2)}
					data-item-url={`https://patripples.com/market/${params.category}/${pageData.id}`}
				>
					{`Pay $${(pageData.rate * 0.3).toFixed(2)} Deposit`}
				</button>
			</section>
		</main>
	);
}
