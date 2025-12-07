export interface CategoryDto {
  id: number
  name: string
}

export interface Product {
  id: number
  name: string
  description?: string
  price: number
  stockQuantity: number
  category?: CategoryDto
  status: string
  createdAt: string
  updatedAt: string
}

export interface PagedResult<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}