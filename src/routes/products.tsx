import { createFileRoute, Link } from '@tanstack/react-router'
import { getProducts } from '../utils'

export const Route = createFileRoute('/products')({
  component: RouteComponent,
  loader: async () => {
    const products = await getProducts()
    return { products }
  }
})


function RouteComponent() {
  const { products } = Route.useLoaderData()

  return <div>
    <h1 className="text-2xl font-bold p-6">Products:</h1>

    <ul>
      {products.map((product: { id: string; name: string; description?: string | null }) => (
        <li key={product.id} className="mb-2 px-6"> 
          <Link to={`/product/$id`} params={{ id: product.id }} className="font-bold text-blue-600">
            {product.name}
          </Link>
          {/* {product.description && <p className="text-sm text-gray-600">{product.description}</p>} */}
        </li>
      ))}
    </ul>

  </div>
}
