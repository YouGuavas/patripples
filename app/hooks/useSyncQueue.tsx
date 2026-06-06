'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { db, type TransactionRecord } from '@/app/lib/db';

interface SyncQueueHookResult {
	unsyncedTransactions: TransactionRecord[];
	isHydrated: boolean;
	count: number;
}

export function useSyncQueue(): SyncQueueHookResult {
	// useLiveQuery monitors the database and automatically re-renders when data points mutate
	const unsyncedTransactions = useLiveQuery(
		() => db.transactions.where('syncStatus').equals(0).toArray(),
		[],
	);

	// If the query returns undefined, it indicates database loading/hydration status
	if (!unsyncedTransactions) {
		return {
			unsyncedTransactions: [],
			isHydrated: false,
			count: 0,
		};
	}

	return {
		unsyncedTransactions,
		isHydrated: true,
		count: unsyncedTransactions.length,
	};
}
