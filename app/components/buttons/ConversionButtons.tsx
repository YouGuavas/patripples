'use client';

import { useSales } from '@/app/context/SalesContext';
type propsType = {
	name: string;
	type: string;
};
export default async function ConversionButton(props: propsType) {
	const context = useSales();

	const handleClick = (name: string) => {
		if (
			name.toLowerCase() === 'hook' ||
			name.toLowerCase() === 'loss' ||
			name.toLowerCase() === 'passerby'
		) {
			context[name.toLowerCase() as keyof typeof context] += 1;
		}
	};
	return (
		<button
			onClick={() => {
				handleClick(props.name);
			}}
			className={`${props.type.toLowerCase() + '-button'} left-align style-1 lowercase rounded bordered px-1 flex column centered center darken`}
		>
			{props.name}
		</button>
	);
}
