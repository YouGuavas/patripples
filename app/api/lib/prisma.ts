import { PrismaClient } from '@/prisma/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
	connectionString: process.env.POSTGRES_URL,
});

// Initialize
const prisma = new PrismaClient({ adapter });
