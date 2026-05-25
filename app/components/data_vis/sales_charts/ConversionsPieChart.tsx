'use client';

import { useEffect } from 'react';
import { useSales } from '@/app/context/SalesContext';
import D3Pie from '@/app/components/data_vis/D3Pie';

export function ConversionsPieChart({
	width,
	height,
}: {
	width: number;
	height: number;
}) {
	const { loss, impulse, core, premium } = useSales();

	let chartData = [
		{ name: 'Loss', value: 1 },
		{ name: 'Impulse', value: 1 },
		{ name: 'Core', value: 1 },
		{ name: 'Premium', value: 1 },
	];
	useEffect(() => {
		// This effect runs whenever passerby or hook changes, ensuring the chart updates
		chartData = [
			{ name: 'Loss', value: loss },
			{ name: 'Impulse', value: impulse },
			{ name: 'Core', value: core },
			{ name: 'Premium', value: premium },
		];
		console.log(chartData);
	}, [loss, impulse, core, premium]);

	return (
		<D3Pie
			title="Conversion Data"
			data={chartData}
			width={width}
			height={height}
		/>
	);
}
