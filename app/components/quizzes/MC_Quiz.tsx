'use client';
import { useState } from 'react';

import MC_Question from './MC_Question';

interface propsType {
	questions: string;
	answers: string[];
	correct: number;
}
interface questionType {
	question: string;
	answers: answerType[];
}
interface answerType {
	answer: string;
	correct: boolean;
}

export function MC_Quiz(props: propsType) {
	const [correct, setCorrect] = useState(props.correct);
	async function handleFilter(e: React.FormEvent, index: number) {
		const chosen_answer = document.getElementById(`answer-${index + 1}`);
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
			<h3 className={`style-1 thin lowercase spaced`}>Filters: </h3>
			<p className={`paragraph width-full block`}>{props.question}</p>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{props.answers.map((answer, index) => (
					<li
						id={`answer-${index + 1}`}
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
