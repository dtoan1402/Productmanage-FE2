import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../api/client'
import { Product, PagedResult } from '../../type/product'

interface Filters {
  page?: number
  limit?: number
  search?: string
  categoryId?: number
  minPrice?: number
  maxPrice?: number
  status?: string
}

export const useProducts = (filters: Filters = {}) => {
  return useQuery<PagedResult<Product>>({
    queryKey: ['products', filters],
    queryFn: () => api.get('/api/products', { params: filters }).then(res => res.data),
    staleTime: 1000 * 60,
  })
}

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: any) => api.post('/api/products', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}