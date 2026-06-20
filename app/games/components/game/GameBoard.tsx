type propsType = {
	dimensions: {
		x: number;
		y: number;
	};
};

export default function GameBoard(props: propsType) {
	const { x, y } = props.dimensions;
	return (
		<canvas height={y} className={`bordered rounded width-full centered`} />
	);
}
