'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
interface DataItem {
	name: string;
	value: number;
}
interface PieChartProps {
	title: string;
	data: DataItem[];
	width?: number;
	height?: number;
	innerRadius?: number; // Optional inner radius for a donut chart
	outerRadius?: number;
}

const D3Pie: React.FC<PieChartProps> = ({
	title,
	data,
	width = 450,
	height = 450,
	innerRadius = 0,
	outerRadius,
}) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const radius = outerRadius || Math.min(width, height) / 2;
	const margin = { top: 20, right: 20, bottom: 20, left: 20 };

	useEffect(() => {
		// Clear any previous chart elements on update
		d3.select(svgRef.current).selectAll('*').remove();

		const svg = d3
			.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.append('g')
			// Move the center of the pie chart to the middle of the SVG container
			.attr('transform', `translate(${width / 2}, ${height / 2})`);

		// D3 pie generator: computes angles for each data item
		const pieGenerator = d3
			.pie<DataItem>()
			.value((d) => d.value)
			.sort(null); // Prevents D3 from sorting the slices

		// D3 arc generator: generates the "d" attribute for SVG paths
		const arcGenerator = d3
			.arc<d3.PieArcDatum<DataItem>>()
			.innerRadius(innerRadius as number)
			.outerRadius(radius);

		// Generate the arc data using the pie generator
		const arcs = pieGenerator(data);

		// Color scale
		const color = d3.scaleOrdinal(d3.schemeCategory10);

		// Draw the slices
		svg
			.selectAll('path')
			.data(arcs)
			.enter()
			.append('path')
			.attr('d', (d) => arcGenerator(d) as string)
			.attr('fill', (d) => color(d.data.name) as string)
			.attr('stroke', 'white')
			.style('stroke-width', '2px');

		// Add labels (optional)
		svg
			.selectAll('text')
			.data(arcs)
			.enter()
			.append('text')
			.text((d) => d.data.name)
			// Position labels at the centroid of the arc
			.attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`)
			.style('text-anchor', 'middle')
			.style('font-size', 12)
			.style('fill', 'white');
		// Add the chart title
		svg
			.append('text')
			.attr('x', 0) // Position at the horizontal center
			.attr('y', -margin.top - 170) // Position above the chart area, within the top margin
			.attr('text-anchor', 'middle') // Center the text around the x coordinate
			.style('font-size', '24px') // Apply styling
			.style('fill', 'white')
			.text(title); // Set the title text
	}, [data, width, height, innerRadius, outerRadius, radius]); // Redraw chart if data or dimensions change

	return <svg ref={svgRef} />;
};

export default D3Pie;
