'use client';

import { useSales } from '@/app/context/SalesContext';
type propsType = {
	name: string;
	type: string;
};
export default function ConversionButton(props: propsType) {
	const { hook, setHook } = useSales();
	const { loss, setLoss } = useSales();
	const { passerby, setPasserby } = useSales();

	const handleClick = (name: string) => {
		switch (name.toLowerCase()) {
			case 'hook':
				setHook(hook + 1);
				break;
			case 'loss':
				setLoss(loss + 1);
				break;
			case 'passerby':
				setPasserby(passerby + 1);
				break;
			default:
				break;
		}
	};
	switch (props.name.toLowerCase()) {
		case 'hook':
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

		case 'loss':
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
		case 'passerby':
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
		default:
			break;
	}
}
