'use client';
import { useState, useRef, useEffect } from 'react';

import { renderToStaticMarkup } from 'react-dom/server';

import Image from 'next/image';

import Wetland from '@/app/games/cartoons/backgrounds/Wetlands';
import Bee_Map from '@/app/games/cartoons/backgrounds/bee_map.svg';
import GameBoard from '../components/game/GameBoard';
import StatBar from '../components/stats/StatBar';
import Cartographer from '@/public/characters/heroes/cartographer.svg';
import Resurrectionist from '@/public/characters/heroes/M_mythic_basic.svg';
import TheGang from '@/public/characters/groups/the_gang.svg';
export default function Game() {
	let occupied = useRef({});
	let entityPos = useRef({});
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const [board, setBoard] = useState({
		dimensions: { x: 200, y: 150 },
	});

	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	const [stats, setStats] = useState({
		level: 1,
		health: 100,
		baseHealth: 100,
		weapon: 'tome_of_chaos',
		attack: 1,
		baseAttack: 1,
		itemAttack: 0,
		floor: 1,
		xp: 0,
		size: { x: 6, y: 4 },
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const background = renderToStaticMarkup(<Wetland />);
		const blob = new Blob([background], {
			type: 'image/svg+xml;charset=utf-8',
		});
		const url = URL.createObjectURL(blob);

		// Create a new HTMLImageElement
		const img = document.createElement('img');
		img.src = url;
		img.onload = () => {
			// Clear canvas before drawing
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw the SVG covering the full canvas
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		};
	}, []);

	return (
		<section className="flex column width-full center">
			<div className="flex row width-full between">
				<div className="flex row">
					<Image
						src={Resurrectionist.src}
						height={250}
						width={150}
						alt="The Resurrectionist"
					/>

					<Image
						src={Cartographer.src}
						height={250}
						width={150}
						alt="The Cartographer"
					/>
				</div>
				<h1 className="lowercase style-1">Dungeon</h1>
				<div>
					<Image src={TheGang.src} height={250} width={350} alt="The Gang" />
				</div>
			</div>
			<StatBar stats={stats} />
			<canvas
				ref={canvasRef}
				id="GameBoard"
				height={board.dimensions.y}
				className={`bordered rounded width-full centered`}
			/>{' '}
			<Image src={Bee_Map.src} height={450} width={650} alt="Bee Map" />
		</section>
	);
}
