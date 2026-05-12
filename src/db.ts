// src/db.ts
import { PrismaClient } from '@prisma/client'

// Luodaan muuttuja globaaliin tilaan, jotta kehitysympäristö ei luo 
// uusia yhteyksiä joka kerta kun tallennat tiedoston.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Tämä auttaa näkemään terminaalissa, mitä Prisma tekee
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma