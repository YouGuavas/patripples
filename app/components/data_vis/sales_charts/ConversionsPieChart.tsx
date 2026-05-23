'use client';

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

	const chartData = [
		{ name: 'Passerby', value: passerby },
		{ name: 'Hook', value: hook },
	];

	return (
		<D3Pie title="Hook Data" data={chartData} width={width} height={height} />
	);
}
