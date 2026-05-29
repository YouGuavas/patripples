'use client';

import { useSales } from '@/app/context/sales/SalesContext';
type propsType = {
	name: string;
	type: string;
};
export default function ConversionButton(props: propsType) {
	const { hook, setHook } = useSales();
	const { loss, setLoss } = useSales();
	const { passerby, setPasserby } = useSales();
	const { impulse, setImpulse } = useSales();
	const { core, setCore } = useSales();
	const { premium, setPremium } = useSales();

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
			case 'impulse purchase':
				setImpulse(impulse + 1);
				break;
			case 'core purchase':
				setCore(core + 1);
				break;
			case 'premium purchase':
				setPremium(premium + 1);
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
		case 'impulse purchase':
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
		case 'core purchase':
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
		case 'premium purchase':
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
