'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type StackedBarChartProps<T extends Record<string, unknown>> = {
	title: string;
	data: T[];
	keys: (keyof T)[];
	categoryKey: keyof T;
	width?: number;
	height?: number;
};

export default function D3StackedBarPCT<T extends Record<string, unknown>>({
	title,
	data,
	keys,
	categoryKey,
	width = 450,
	height = 450,
}: StackedBarChartProps<T>) {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!svgRef.current || data.length === 0) return;

		const margin = { top: 20, right: 20, bottom: 20, left: 20 };

		const svg = d3
			.select(svgRef.current)
			.attr('width', width)
			.attr('height', height);

		svg.selectAll('*').remove();

		// X Scale
		const x = d3
			.scaleBand<string>()
			.domain(data.map((d) => String(d[categoryKey])))
			.range([margin.left, width - margin.right])
			.padding(0.2);

		// Y Scale
		const y = d3
			.scaleLinear()
			.domain([0, 100])
			.range([height - margin.bottom, margin.top]);

		// Color Scale
		const color = d3
			.scaleOrdinal<string>()
			.domain(keys.map(String))
			.range(d3.schemeTableau10);

		// Stack Generator
		const stack = d3.stack<T>().keys(keys as string[]);

		const stackedData = stack(data);

		// Bars
		svg
			.append('g')
			.selectAll('g')
			.data(stackedData)
			.join('g')
			.attr('fill', (d) => color(d.key as string))
			.selectAll('rect')
			.data((d) => d)
			.join('rect')
			.attr('x', (d) => x(String(d.data[categoryKey]))!)
			.attr('y', (d) => y(d[1]))
			.attr('height', (d) => y(d[0]) - y(d[1]))
			.attr('width', x.bandwidth());

		// X Axis
		svg
			.append('g')
			.attr('transform', `translate(0,${height - margin.bottom})`)
			.call(d3.axisBottom(x));

		// Y Axis
		svg
			.append('g')
			.attr('transform', `translate(${margin.left},0)`)
			.call(d3.axisLeft(y));
		svg
			.append('text')
			.attr('x', 0) // Position at the horizontal center
			.attr('y', -margin.top - 170) // Position above the chart area, within the top margin
			.attr('text-anchor', 'middle') // Center the text around the x coordinate
			.style('font-size', '24px') // Apply styling
			.style('fill', 'white')
			.text(title); // Set the title text
	}, [data, keys, categoryKey, width, height]);

	return <svg ref={svgRef} />;
}
