'use server';
// ...existing code...
import { prisma } from '../../../data/lib/prisma';
import Link from 'next/link';
import { Card } from '../../Carousel';

export async function CustomerList() {
	const products = await prisma.product.findMany();

	return (
		<>
			<h3 className={`style-1 thin lowercase spaced`}>Customers: </h3>

			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{products.map(({ title, price }) => (
					<li key={title}>
						{price}
						<Card title={title} description={[]} style="image" />
					</li>
				))}
			</ul>
		</>
	);
}
// ...existing code...
