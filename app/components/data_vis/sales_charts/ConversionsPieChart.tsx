'use client';

import { useEffect } from 'react';
import { useSales } from '@/app/context/sales/SalesContext';
import { useAdvice } from '@/app/context/sales/AdviceContext';
import D3Pie from '@/app/components/data_vis/D3Pie';

export function ConversionsPieChart({
	width,
	height,
	colors = [
		'red',
		'blue',
		'green',
		'orange',
		'purple',
		'cyan',
		'magenta',
		'yellow',
	],
}: {
	width: number;
	height: number;
	colors?: string[];
}) {
	const { loss, impulse, core, premium } = useSales();

	let chartData = [
		{ name: 'Loss', value: loss },
		{ name: 'Impulse', value: impulse },
		{ name: 'Core', value: core },
		{ name: 'Premium', value: premium },
	];
	useEffect(() => {
		// This effect runs whenever passerby or hook changes, ensuring the chart updates
		chartData = [
			{ name: 'Loss', value: loss },
			{ name: 'Impulse', value: impulse },
			{ name: 'Core', value: core },
			{ name: 'Premium', value: premium },
		];
	}, [loss, impulse, core, premium]);

	return (
		<D3Pie
			title="Conversion Data"
			data={chartData}
			width={width}
			height={height}
			colors={colors}
		/>
	);
}
