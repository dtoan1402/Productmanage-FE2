import { useNavigate } from 'react-router-dom'
import { ProductForm } from './ProductForm'
import { Card } from '../components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import {DashboardLayout} from '../components/layout/DashboardLayout'

export default function CreateProductPage() {
  const navigate = useNavigate()

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold">Tạo sản phẩm mới</h1>
        </div>

        <Card>
          <ProductForm onSuccess={() => navigate('/')} />
        </Card>
      </div>
    </DashboardLayout>
  )
}