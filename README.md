1. Project Structure: How do you organize and manage the components?
 src/
├── api/                  # set up APi
│   ├── client.ts
│
├── components/           # Reusable UI
│   ├── ui/              # Button, Input, Card...
│   ├── layout/          # Header
│
├── features/             # Feature modules, CRUD API
│   └── products/
│       ├── ProductList.tsx
│       └── useProducts.ts
│
├── hooks/                # Custom hooks
│   └── useDebounce.ts
│
├── lib/                  # Utilities
│   ├── validation.ts
│   └── utils.ts
│
├── pages/                # Route pages
│   ├── ProductsPage.tsx
│   ├── ProductForm.tsx
│   └── CreateProductPage.tsx
│
├── routes/               # Router
│   └── AppRoutes.tsx
│
├── types/                # TypeScript interfaces
│   └── product.ts
│
├── App.js
└── vite-env.d.ts

2. UI Layout: How do you build your UI? UI Framework: Tailwind CSS + Headless UI + Lucide Icons
3. Technology Stack Components
   - Vite + React + TypeScript
   - TanStack Query (React Query)
   - Axios + React Query
   - React Hook Form + Zod
   - Tailwind CSS + Headless UI
   - Lucide React
4. API and Data Handling
   - API Client (Axios + Interceptor) : clients.ts
   - React Query Hook: useProducts.ts
   - Form + Zod Validation: validation.ts
5. Performance. How do you optimize performance?
   - Suspense
