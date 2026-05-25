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

	const chartData = [
		{ name: 'Lost', value: loss },
		{ name: 'Impulse', value: impulse },
		{ name: 'Core', value: core },
		{ name: 'Premium', value: premium },
	];

	return (
		<D3Pie
			title="Conversion Data"
			data={chartData}
			width={width}
			height={height}
		/>
	);
}
