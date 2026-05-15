// components/EmailForm.tsx
import { Prisma } from '@/prisma/prisma/client';
import Link from 'next/link';

export async function CustomerList(props: propsType) {
	const customers = await Prisma.customer.findMany();

	return (
		<>
			<h3 className={`style-1 thin lowercase spaced`}>Customers: </h3>

			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{customers.map(({ name, path, tags, body, footer }) => (
					<li>
						<Link
							key={`${name}`}
							className={`no-deco width-full lowercase style-1 thin spaced color-2  darken `}
							scroll={false}
							href={`${path}`}
							id={name.toLowerCase()}
						>
							<Card
								title={name}
								subject={tags[0]}
								body={body}
								footer={footer}
							/>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
