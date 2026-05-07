'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { card } from '../index_cards';

type CarouselProps = {
	slides: card[];
	className?: string;
};

const Card = ({ title, description, image, subtitle, classes }: card) => {
	return (
		<div className={`${classes} width-half centered`}>
			<h2 className={`lowercase spaced style-1 thin`}>{title}</h2>
			<div className="flex centered image-container">
				{image ? (
					<Image
						src={image.src}
						alt={image.alt}
						fill={image.fill}
						loading={image['loading'] as 'eager' | 'lazy' | undefined}
						fetchPriority={
							image['fetchPriority'] as 'high' | 'low' | 'auto' | undefined
						}
						className={`width-half`}
					/>
				) : (
					<></>
				)}
			</div>
			<h3 className={`lowercase spaced style-1 thin ${classes}`}>{subtitle}</h3>
			{description.map((line, i) => {
				return (
					<p key={i} className={`paragraph left-align ${classes}`}>
						{line}
					</p>
				);
			})}
		</div>
	);
};

export default function Carousel({ slides, className = '' }: CarouselProps) {
	const [index, setIndex] = useState(0);

	const prev = () => setIndex(index === 0 ? 0 : index - 1);

	const next = () =>
		setIndex(index === slides.length - 1 ? slides.length - 1 : index + 1);

	return (
		<div className={`flex column width-full overflow-hidden ${className}`}>
			{/* Slides */}
			{slides.map((slide, i) => (
				<>
					{slide.image ? (
						<Card
							title={slide.title}
							image={{
								src: slide.image.src,
								alt: slide.image.alt,
								fill: slide.image.fill,
								loading: slide.image.loading,
								fetchPriority: slide.image.fetchPriority,
							}}
							key={i}
							classes={`${i === index ? 'hidden' : ''}`}
							description={slide.description}
							subtitle={slide.subtitle}
						/>
					) : (
						<></>
					)}
				</>
			))}

			{/* Controls */}
			<div className="flex row width-half between centered">
				<button onClick={next} className="px-2 py-1 rounded borderless">
					‹
				</button>
				{/* Dots */}
				<div className="flex gap-small center">
					{slides.map((_, i) => (
						<button
							key={i}
							onClick={() => setIndex(i)}
							className={`bg-2 height-half centered center rounded borderless ${i === index ? 'darkened' : ''}`}
						/>
					))}
				</div>
				<button onClick={prev} className="px-2 py-1 borderless rounded">
					›
				</button>
			</div>
		</div>
	);
}
