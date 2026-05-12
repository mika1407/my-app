import { prisma } from './db'
import { createServerFn } from '@tanstack/react-start'

export const getProducts = createServerFn().handler(async () => {
  const products = await prisma.product.findMany({
    orderBy: { name: 'asc' },
  })
  return products
})

export const getProductById = createServerFn().handler(async ({ data }) => {
  const { id } = data
  return prisma.product.findUnique({
    where: { id },
  })
})



// export async function getProductById(id: string) {
//   'use server'
//   return await (prisma as any).product.findUnique({
//     where: { id },
//   })
// }