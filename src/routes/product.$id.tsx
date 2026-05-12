import { createFileRoute } from '@tanstack/react-router'
import { getProductById } from '../utils'

export const Route = createFileRoute('/product/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const {id} = params
    const product = await getProductById({data:{id}})
    return { product }
  }
})

function RouteComponent() {
    const { product } = Route.useLoaderData()
  return <div>
          <h1 className='text-xl font-bold p-6'>{product.name}</h1>
          <p className="text-sm text-gray-500 italic mt-1 px-6">{product.description}</p>
        </div>
}
