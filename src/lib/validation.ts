import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(1, 'Name requied').max(255),
  description: z.string().optional(),
  price: z.coerce.number().min(0, 'Price msut be greater 0'),
  stockQuantity: z.coerce.number().int().min(0, 'Amount must be greater 0'),
  status: z.enum(['active', 'inactive', 'discontinued']),
  categoryId: z.coerce.number().int().nullable().optional(),
})

export type ProductFormData = z.infer<typeof productSchema>