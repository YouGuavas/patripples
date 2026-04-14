'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import wand from '@/public/characters/wand.svg';

export default function Wand() {
	const [active, setActive] = useState('bio');
	const [portal, setPortal] = useState('standard');

	return (
		<div className={`jumbo-container centered`}>
			<p id="chat-box">Mrrrrao!</p>
			<Image src={wand.src} fill loading="lazy" alt="Wanderer" />
		</div>
	);
}
