'use client';

import { useState, useEffect, useRef } from 'react';

export default function CrowdFlowCounter() {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);

	// Track the absolute starting time to remain perfectly accurate
	const startTimeRef = useRef<number>(0);
	const accumulatedTimeRef = useRef<number>(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isRunning) {
			// Record exactly when the timer started/resumed
			startTimeRef.current = Date.now();

			intervalRef.current = setInterval(() => {
				// Calculate precise elapsed time independent of JS thread delays
				const totalElapsed = Date.now() - startTimeRef.current;
				setTime(accumulatedTimeRef.current + totalElapsed);
			}, 10); // Updates every 10 milliseconds for smooth tracking
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			// Save progress so it can resume perfectly later
			accumulatedTimeRef.current = time;
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isRunning]);

	const handleStartPause = () => setIsRunning(!isRunning);

	const handleReset = () => {
		setIsRunning(false);
		setTime(0);
		accumulatedTimeRef.current = 0;
	};

	// Helper functions to format milliseconds into readable chunks
	const formatTime = () => {
		const minutes = Math.floor(time / 60000);
		const seconds = Math.floor((time % 60000) / 1000);
		const milliseconds = Math.floor((time % 1000) / 10);

		const pad = (num: number) => String(num).padStart(2, '0');

		return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
	};

	return (
		<div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-2xl shadow-xl w-72 mx-auto mt-10">
			<h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
				Time Counter
			</h2>
			<div className="text-4xl font-mono font-bold text-emerald-400 mb-6 tabular-nums">
				{formatTime()}
			</div>
			<div className="flex gap-4">
				<button
					onClick={handleStartPause}
					className={`px-4 py-2 rounded-lg font-medium transition-all ${
						isRunning
							? 'bg-amber-500 hover:bg-amber-600 text-black'
							: 'bg-emerald-500 hover:bg-emerald-600 text-white'
					}`}
				>
					{isRunning ? 'Pause' : 'Start'}
				</button>
				<button
					onClick={handleReset}
					className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition-all"
				>
					Reset
				</button>
			</div>
		</div>
	);
}
