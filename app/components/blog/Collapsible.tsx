'use client';
import React, { useState, useRef, useEffect } from 'react';

type propsType = {
	title: string;
	orientation?: 'center' | 'left' | 'right';
	id?: string;
	bg?: string;
	children: React.ReactNode;
};

export default function Collapsible(props: propsType) {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const contentRef = useRef<HTMLDivElement | null>(null); // Ref for the collapsible content

	// Toggle the collapsed state
	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	useEffect(() => {
		setIsCollapsed(true);
	}, []);
	return (
		<section
			id={`${props.id ? props.id : null}`}
			className={` ${
				props.orientation === 'center'
					? 'center'
					: props.orientation === 'left'
						? 'left-align'
						: 'right-align'
			} ${props.bg ? props.bg : null} py-2 px-1`}
		>
			{/* The collapsible title */}

			<h2
				className={`${
					props.orientation === 'center'
						? 'center'
						: props.orientation === 'left'
							? 'left-align'
							: 'right-align'
				} pointer lowercase style-1 thin spaced left width-full block left-align`}
				onClick={toggleCollapse}
			>
				{props.title}
			</h2>

			{/* Content with smooth height transition */}
			<div
				ref={contentRef}
				style={{
					maxHeight: isCollapsed
						? '0px'
						: `${contentRef.current?.scrollHeight}px`,
					overflow: 'hidden',
					transition: 'max-height 0.4s ease',
				}}
			>
				{props.children}
			</div>
			<div
				style={{
					display: isCollapsed === true ? 'initial' : `none`,
				}}
			>
				Click or tap the header to expand.
			</div>
		</section>
	);
}

export { Collapsible };
