import React from 'react';

type propsType = {
	ref: React.Ref<HTMLCanvasElement>;
	dimensions: {
		x: number;
		y: number;
	};
};

export default function GameBoard(props: propsType) {
	const { x, y } = props.dimensions;
	return (
		<canvas
			ref={props.ref}
			id="GameBoard"
			height={y}
			className={`bordered rounded width-full centered`}
		/>
	);
}
