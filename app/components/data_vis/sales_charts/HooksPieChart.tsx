'use client';
import { useEffect } from 'react';
import { useSales } from '@/app/context/sales/SalesContext';
import { useAdvice } from '@/app/context/sales/AdviceContext';
import D3Pie from '@/app/components/data_vis/D3Pie'; // assuming D3Pie is your base chart component

export function HooksPieChart({
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
	const { passerby, hook } = useSales();

	let chartData = [
		{ name: 'Passerby', value: passerby },
		{ name: 'Hook', value: hook },
	];
	useEffect(() => {
		// This effect runs whenever passerby or hook changes, ensuring the chart updates
		chartData = [
			{ name: 'Passerby', value: passerby },
			{ name: 'Hook', value: hook },
		];
	}, [passerby, hook]);

	return (
		<D3Pie
			title="Hook Data"
			data={chartData}
			width={width}
			height={height}
			colors={colors}
		/>
	);
}
