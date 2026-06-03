// lib/db.ts
import Dexie, { type Table } from 'dexie';

export interface Sale {
	id?: number;
	name: string;
	tier: 'impulse' | 'core' | 'premium';
	time: string;
	price: number;
}

class MyDatabase extends Dexie {
	sales!: Table<Sale, number>;

	constructor() {
		super('SalesDatabase');
		this.version(1).stores({
			sales: '++id, name, tier, time, price', // '++id' auto-increments the primary key
		});
	}
}

export const db = new MyDatabase();
