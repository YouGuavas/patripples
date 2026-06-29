'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type AdviceContextType = {
	breakpoints: object;
	setBreakpoints: React.Dispatch<React.SetStateAction<object>>;
	responses: object;
	setResponses: React.Dispatch<React.SetStateAction<object>>;
	calculate: () => number;
	setCalculate: React.Dispatch<React.SetStateAction<() => number>>;
};

export const AdviceContext = createContext<AdviceContextType>({
	breakpoints: {},
	setBreakpoints: () => {},
	responses: {},
	setResponses: () => {},
	calculate: () => {
		return 0;
	},
	setCalculate: () => {},
});

export const AdviceProvider = ({ children }: { children: React.ReactNode }) => {
	const [breakpoints, setBreakpoints] = useState({});
	const [responses, setResponses] = useState({});
	const [calculate, setCalculate] = useState<() => number>(() => () => 0);

	return (
		<AdviceContext.Provider
			value={{
				breakpoints,
				setBreakpoints,
				responses,
				setResponses,
				calculate,
				setCalculate,
			}}
		>
			{children}
		</AdviceContext.Provider>
	);
};

export const useAdvice = () => {
	const context = useContext(AdviceContext);
	if (!context) {
		throw new Error('useSales must be used within a SalesProvider');
	}
	return context;
};
