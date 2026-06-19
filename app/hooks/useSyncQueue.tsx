'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { db, type TransactionRecord } from '@/app/lib/db';

interface SyncQueueHookResult {
	unsyncedTransactions: TransactionRecord[];
	allTransactions: TransactionRecord[];
	isHydrated: boolean;
	count: number;
}

export function useSyncQueue(): SyncQueueHookResult {
	// useLiveQuery monitors the database and automatically re-renders when data points mutate
	const unsyncedTransactions = useLiveQuery(
		() => db.transactions.where('syncStatus').equals(0).toArray(),
		[],
	);
	const allTransactions = useLiveQuery(() => db.transactions.toArray(), []);

	// If either query returns undefined, the database is still hydrating
	if (!unsyncedTransactions || !allTransactions) {
		return {
			unsyncedTransactions: [],
			allTransactions: [],
			isHydrated: false,
			count: 0,
		};
	}

	return {
		unsyncedTransactions,
		allTransactions,
		isHydrated: true,
		count: unsyncedTransactions.length,
	};
}
