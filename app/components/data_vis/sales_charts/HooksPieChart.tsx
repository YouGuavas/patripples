'use client';
import { useEffect } from 'react';
import { useSales } from '@/app/context/SalesContext';
import D3Pie from '@/app/components/data_vis/D3Pie'; // assuming D3Pie is your base chart component

export function HooksPieChart({
	width,
	height,
}: {
	width: number;
	height: number;
}) {
	const { passerby, hook } = useSales();

	let chartData = [
		{ name: 'Passerby', value: 1 },
		{ name: 'Hook', value: 1 },
	];
	useEffect(() => {
		// This effect runs whenever passerby or hook changes, ensuring the chart updates
		chartData = [
			{ name: 'Passerby', value: passerby },
			{ name: 'Hook', value: hook },
		];
	}, [passerby, hook]);

	return (
		<D3Pie title="Hook Data" data={chartData} width={width} height={height} />
	);
}
