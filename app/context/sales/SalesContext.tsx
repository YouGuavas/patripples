'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type SalesContextType = {
	passerby: number;
	setPasserby: React.Dispatch<React.SetStateAction<number>>;
	hook: number;
	setHook: React.Dispatch<React.SetStateAction<number>>;
	loss: number;
	setLoss: React.Dispatch<React.SetStateAction<number>>;
	impulse: number;
	setImpulse: React.Dispatch<React.SetStateAction<number>>;
	core: number;
	setCore: React.Dispatch<React.SetStateAction<number>>;
	premium: number;
	setPremium: React.Dispatch<React.SetStateAction<number>>;
};

export const SalesContext = createContext<SalesContextType>({
	passerby: 0,
	setPasserby: () => {},
	hook: 0,
	setHook: () => {},
	loss: 0,
	setLoss: () => {},
	impulse: 0,
	setImpulse: () => {},
	core: 0,
	setCore: () => {},
	premium: 0,
	setPremium: () => {},
});

export const SalesProvider = ({ children }: { children: React.ReactNode }) => {
	const [passerby, setPasserby] = useState(0);
	const [hook, setHook] = useState(0);
	const [loss, setLoss] = useState(0);
	const [impulse, setImpulse] = useState(0);
	const [core, setCore] = useState(0);
	const [premium, setPremium] = useState(0);

	return (
		<SalesContext.Provider
			value={{
				passerby,
				setPasserby,
				hook,
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
		</SalesContext.Provider>
	);
};

export const useSales = () => {
	const context = useContext(SalesContext);
	if (!context) {
		throw new Error('useSales must be used within a SalesProvider');
	}
	return context;
};
