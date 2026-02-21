'use client';

import Image from 'next/image';
import { useState } from 'react';

type CarouselProps = {
	images: string[];
	className?: string;
};

export default function Carousel({ images, className = '' }: CarouselProps) {
	const [index, setIndex] = useState(0);

	const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

	const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

	return (
		<div className={`relative width-full overflow-hidden ${className}`}>
			{/* Slides */}
			<div
				className="flex image-container transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				{images.map((src, i) => (
					<Image
						key={i}
						src={src}
						fill
						alt={`Slide ${i}`}
						className="width-full flex-shrink-0 object-cover"
					/>
				))}
			</div>

			{/* Controls */}
			<button
				onClick={prev}
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
			>
				‹
			</button>

			<button
				onClick={next}
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
			>
				›
			</button>

			{/* Dots */}
			<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`h-2 w-2 rounded-full ${
							i === index ? 'bg-white' : 'bg-white/40'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
