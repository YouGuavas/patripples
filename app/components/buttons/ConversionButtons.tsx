'use server';
import { prisma } from '@/app/api/lib/prisma';

type propsType = {
	name: string;
};
export default async function ConversionButton(props: propsType) {
	return (
		<button
			className={`${props.name.toLowerCase() + '-button'} left-align style-1 lowercase rounded bordered px-1 flex column centered center darken`}
		>
			{props.name}
		</button>
	);
}
