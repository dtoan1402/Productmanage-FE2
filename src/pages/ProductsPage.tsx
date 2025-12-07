import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../features/products/useProducts'
import { ProductList } from '../features/products/ProductList'
import { Card } from '../components/ui/Card'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { Plus } from 'lucide-react'

export default function ProductsPage() {
  const [filters] = useState({ page: 1, limit: 10 })
  const { data, isLoading, error } = useProducts(filters)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Product management</h1>
          <Link
            to="/create"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add a product
          </Link>
        </div>

        <Card>
          {isLoading && <p className="text-center py-8">Loading...</p>}
          {error && <p className="text-red-500 text-center py-8">Cannot load products</p>}
          {data && <ProductList products={data.items} />}
        </Card>
      </div>
    </DashboardLayout>
  )
}