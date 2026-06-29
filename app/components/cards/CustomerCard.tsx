import { prisma } from '@/app/data/lib/prisma';
type propsType = {
	name: string;
};
export default async function CustomerCard(props: propsType) {
	const names = await prisma.customer.findMany();
	return (
		<div
			className={` left-align style-1 lowercase rounded bordered px-1 flex column`}
		>
			<div className={`flex row center gap-large`}>
				<h4 className={``}></h4>
			</div>
		</div>
	);
}
