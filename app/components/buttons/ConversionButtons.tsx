'use client';
type propsType = {
	name: string;
	type: string;
};
export default async function ConversionButton(props: propsType) {
	return (
		<button
			className={`${props.type.toLowerCase() + '-button'} left-align style-1 lowercase rounded bordered px-1 flex column centered center darken`}
		>
			{props.name}
		</button>
	);
}
