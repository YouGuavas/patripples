'use client';

import { useState } from 'react';

interface propsType {
	question: string;
	answers: string[];
	correct: number;
}

export function MC_Question(props: propsType) {
	const [correct, setCorrect] = useState(props.correct);
	async function handleFilter(e: React.FormEvent, index: number) {
		const chosen_answer = document.getElementById(
			`${props.question}-answer-${index + 1}`,
		);
		if (chosen_answer) {
			if (index + 1 === correct) {
				chosen_answer.classList.add('correct');
			} else {
				chosen_answer.classList.add('wrong');
			}
		}
		return correct;
	}

	return (
		<>
			<p className={`paragraph width-full block left-align`}>
				{props.question}
			</p>
			<ul className={`flex gap-medium no-deco pad-none width-full left-align`}>
				{props.answers.map((answer, index) => (
					<li
						id={`${props.question}-answer-${index + 1}`}
						key={`${index}`}
						className={`no-deco lowercase style-1 spaced color-2 rounded darken px-1 py-1 pointer`}
						onClick={(e) => handleFilter(e, index)}
					>
						{answer}
					</li>
				))}
			</ul>
		</>
	);
}
