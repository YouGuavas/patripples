import Dexie, { type Table } from 'dexie';

// Define strict types for the transactional layer
export interface CheckoutItem {
	id: string;
	name: string;
	quantity: number;
	price: number;
}

export interface SessionMetrics {
	boothDensity: number; // Values 1-10 from the event-driven UI slider
}

export interface TransactionRecord {
	uuid: string; // Generated via crypto.randomUUID()
	timestamp: number; // Date.now() Epoch format
	syncStatus: 0 | 1; // 0 = Offline Cache, 1 = Clouds Synced
	items: CheckoutItem[];
	total: number;
	metrics: SessionMetrics;
}

// Subclass Dexie to inject strict TypeScript interfaces
class FestivalDatabase extends Dexie {
	transactions!: Table<TransactionRecord, string>; // string matches the primary key type (uuid)

	constructor() {
		super('FestivalSalesDatabase');
		this.version(1).stores({
			transactions: 'uuid, timestamp, syncStatus, total',
		});
	}
}

// Global pattern to survive Next.js Fast Refresh cycles in development mode
const globalForDb = globalThis as unknown as {
	db: FestivalDatabase | undefined;
};
export const db = globalForDb.db ?? new FestivalDatabase();
if (process.env.NODE_ENV !== 'production') globalForDb.db = db;

/**
 * High-Velocity 0ms Client-Side Transaction Injection
 */
export async function queueOfflineTransaction(
	items: CheckoutItem[],
	totalAmount: number,
	densitySliderValue: number,
): Promise<TransactionRecord> {
	const transactionPayload: TransactionRecord = {
		uuid: crypto.randomUUID(),
		timestamp: Date.now(),
		syncStatus: 0,
		items,
		total: Number(totalAmount),
		metrics: {
			boothDensity: Math.floor(densitySliderValue),
		},
	};

	await db.transactions.add(transactionPayload);
	return transactionPayload;
}

/**
 * Fetch all cached rows waiting for external network pipelines
 */
export async function getUnsyncedTransactions(): Promise<TransactionRecord[]> {
	return await db.transactions.where('syncStatus').equals(0).toArray();
}

/**
 * Mutate synchronization state index following API response confirmation
 */
export async function markAsSynced(uuid: string): Promise<number> {
	return await db.transactions.update(uuid, { syncStatus: 1 });
}
