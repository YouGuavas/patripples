'use client';
import { useState, useRef } from 'react';
import GameBoard from '../components/game/GameBoard';
import StatBar from '../components/stats/StatBar';

export default function Game() {
	let occupied = useRef({});
	let entityPos = useRef({});

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
	return (
		<section className="flex column width-full">
			<StatBar stats={stats} />
			<GameBoard dimensions={board.dimensions} />
		</section>
	);
}
