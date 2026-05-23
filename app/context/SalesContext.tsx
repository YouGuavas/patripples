'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type SalesContextType = {
	passerby: number;
	hook: number;
	loss: number;
	impulse: number;
	core: number;
	premium: number;
};

export const SalesContext = createContext<SalesContextType>({
	passerby: 0,
	hook: 0,
	loss: 0,
	impulse: 0,
	core: 0,
	premium: 0,
});

export const SalesProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SalesContext.Provider
			value={{
				passerby: 100,
				hook: 50,
				loss: 100,
				impulse: 30,
				core: 20,
				premium: 10,
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
