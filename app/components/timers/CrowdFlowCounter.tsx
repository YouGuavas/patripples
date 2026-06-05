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
		const hours = Math.floor(time / 3600000);
		const minutes = Math.floor(time / 60000);
		const seconds = Math.floor((time % 60000) / 1000);

		const pad = (num: number) => String(num).padStart(2, '0');

		return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
	};

	return (
		<div className="flex column center  py-2 px-2 rounded gap-large">
			<h2 className="">Crowd Flow Counter</h2>
			<div className="">{formatTime()}</div>
			<div className="flex row gap-small">
				<button
					onClick={handleStartPause}
					className={`px-2 py-2 rounded darken bordered  ${isRunning ? '' : ''}`}
				>
					{isRunning ? 'Pause' : 'Start'}
				</button>
				<button
					onClick={handleReset}
					className="px-2 py-2 darken rounded bordered"
				>
					Reset
				</button>
			</div>
		</div>
	);
}
