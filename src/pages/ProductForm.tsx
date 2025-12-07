import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema, ProductFormData } from '../lib/validation'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { useCreateProduct } from '../features/products/useProducts'

interface ProductFormProps {
  onSuccess?: () => void
}

export function ProductForm({ onSuccess }: ProductFormProps) {
  const { mutate, isPending } = useCreateProduct()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = (data: ProductFormData) => {
    mutate(data, {
      onSuccess: () => {
        reset()
        onSuccess?.()
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Tên sản phẩm *</label>
        <Input {...register('name')} placeholder="Nhập tên sản phẩm" />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <Input {...register('description')} placeholder="Description" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Price *</label>
          <Input type="number" step="0.01" {...register('price')} placeholder="0.00" />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Quantity *</label>
          <Input type="number" {...register('stockQuantity')} placeholder="0" />
          {errors.stockQuantity && <p className="text-red-500 text-sm mt-1">{errors.stockQuantity.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          {...register('status')}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="active">In stock</option>
          <option value="inactive">Out of stock</option>
          <option value="discontinued">Discontinued</option>
        </select>
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Pending...' : 'Add product'}
        </Button>
      </div>
    </form>
  )
}