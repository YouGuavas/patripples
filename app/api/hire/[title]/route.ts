import { NextResponse } from 'next/server';
import { PrismaClient } from '@/prisma/prisma/client';
export async function GET(req: Request) {
  const prisma = new PrismaClient();
  const clients = prisma.clients.find('');

  return NextResponse.json({});