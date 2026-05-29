'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type AdviceContextType = {
	breakpoints: object;
	setBreakpoints: React.Dispatch<React.SetStateAction<object>>;
	responses: object;
	setResponses: React.Dispatch<React.SetStateAction<object>>;
	calculate: Function;
	setCalculate: React.Dispatch<React.SetStateAction<Function>>;
};

export const AdviceContext = createContext<AdviceContextType>({
	breakpoints: {},
	setBreakpoints: () => {},
	responses: {},
	setResponses: () => {},
	calculate: () => {},
	setCalculate: () => {},
	
});

export const AdviceProvider = ({ children }: { children: React.ReactNode }) => {
	const [breakpoints, setBreakpoints] = useState(0);
	const [responses, setResponses] = useState(0);
	const [calculate, setCalculate] = useState(() => {});

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

				setHook,
				loss,
				setLoss,
				impulse,
				setImpulse,
				core,
				setCore,
				premium,
				setPremium,
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
