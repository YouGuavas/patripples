'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface DataItem {
	name: string;
	value: number;
}

interface PieChartProps {
	title: string;
	data: DataItem[];
	width: number;
	height: number;
	innerRadius?: number;
	outerRadius?: number;
	colors?: string[];
}

const D3Pie: React.FC<PieChartProps> = ({
	title,
	data,
	width,
	height,
	innerRadius = 0,
	outerRadius,
	colors = d3.schemeCategory10,
}) => {
	const [hasMounted, setHasMounted] = useState(false);
	const svgRef = useRef<SVGSVGElement>(null);

	const radius = outerRadius || Math.min(width, height) / 2 - 40; // Increased spacing for titles
	const chartData = [{ name: 'No Data', value: 1 }];
	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		if (!hasMounted || !svgRef.current) return;

		// 1. CLEAR EVERYTHING inside the SVG to start fresh safely
		const svgElement = d3.select(svgRef.current);
		svgElement.selectAll('*').remove();

		// 2. Set base SVG attributes
		svgElement
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', `0 0 ${width} ${height}`)
			.attr('preserveAspectRatio', 'xMidYMid meet');

		// 3. Separate Title Group (keeps it at the top, independent of pie center)
		const titleGroup = svgElement.append('g');

		titleGroup
			.append('text')
			.attr('x', width / 2)
			.attr('y', 40) // Standard spacing from the top boundary
			.attr('text-anchor', 'middle')
			.style('font-size', '24px')
			.style('fill', 'white')
			.style('font-weight', 'bold')
			.text(title);

		// 4. Main Chart Group (Centered perfectly)
		const chartGroup = svgElement
			.append('g')
			.attr('transform', `translate(${width / 2}, ${height / 2 + 20})`); // Added offset for title clearance
		const isEmpty = data.every((d) => d.value === 0);
		const filteredData = data.filter((d) => d.value > 0);

		// D3 pie generator
		const pieGenerator = d3
			.pie<DataItem>()
			.value((d) => d.value) // Treat zero values as 1 for visualization
			.sort(null);

		// D3 arc generator
		const arcGenerator = d3
			.arc<d3.PieArcDatum<DataItem>>()
			.innerRadius(innerRadius)
			.outerRadius(radius);

		const arcs = pieGenerator(isEmpty ? chartData : filteredData);
		const color = d3.scaleOrdinal(colors);

		// Draw the slices
		chartGroup
			.selectAll('path')
			.data(arcs)
			.enter()
			.append('path')
			.attr('d', (d) => arcGenerator(d) as string)
			.attr('fill', (d) => {
				return d.value === 0 ? null : (color(d.data.name) as string);
			})
			.attr('stroke', 'white')
			.style('stroke-width', '2px');

		// Add labels (Guaranteed not to stack)
		chartGroup
			.selectAll('.slice-label')
			.data(arcs)
			.enter()
			.append('text')
			.attr('class', 'slice-label')
			.text((d) => d.data.name)
			.attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`)
			.style('text-anchor', 'middle')
			.style('font-size', '12px')
			.style('fill', 'white');

		// Added width, height, innerRadius, and radius to dependencies so it handles resize events perfectly
	}, [hasMounted, data, width, height, innerRadius, radius, title, colors]);

	if (!hasMounted) {
		// Return a matching visual placeholder container to prevent layout shifting
		return (
			<div
				style={{ width: `${width}px`, height: `${height}px` }}
				className="text-white"
			>
				Loading chart...
			</div>
		);
	}

	return <svg ref={svgRef} />;
};

export default D3Pie;
