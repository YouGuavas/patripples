'use client';

import { createContext, useState, useEffect, useContext } from 'react';

import {
	queueOfflineTransaction,
	type CheckoutItem,
	type TransactionRecord,
} from '@/app/lib/db';
import { useSyncQueue } from '@/app/hooks/useSyncQueue'; // Import the hook here

type trafficRateType = number; // 0-10 scale from the UI slider

type TrafficType = {
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
	purchase: number;
	setPurchase: React.Dispatch<React.SetStateAction<number>>;
	total: number;
	setTotal: React.Dispatch<React.SetStateAction<number>>;
};

type UnsyncedTransactionType = {
	unsyncedTransactions: TransactionRecord[];
	unsyncedCount: number;
	isDbReady: boolean;
	executeCheckout: (
		items: CheckoutItem[],
		total: number,
		density: number,
	) => Promise<void>;
};

type SalesContextType = {
	unsyncedTransactions: UnsyncedTransactionType[];
	trafficRate: trafficRateType;
	traffic: TrafficType;
};

export const SalesContext = createContext<SalesContextType>({
	unsyncedTransactions: [],
	trafficRate: 0,
	traffic: {
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
		purchase: 0,
		setPurchase: () => {},
		total: 0,
		setTotal: () => {},
	},
});

export const SalesProvider = ({ children }: { children: React.ReactNode }) => {
	const [trafficRate, setTrafficRate] = useState<trafficRateType>(0);
	const [passerby, setPasserby] = useState(0);
	const [hook, setHook] = useState(0);
	const [loss, setLoss] = useState(0);
	const [impulse, setImpulse] = useState(0);
	const [core, setCore] = useState(0);
	const [premium, setPremium] = useState(0);
	const [purchase, setPurchase] = useState(0);
	const [total, setTotal] = useState(0);

	return (
		<SalesContext.Provider
			value={{
				trafficRate,
				unsyncedTransactions: useSyncQueue(), // Use the hook directly in the context provider
				traffic: {
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
					purchase,
					setPurchase,
					total,
					setTotal,
				},
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
