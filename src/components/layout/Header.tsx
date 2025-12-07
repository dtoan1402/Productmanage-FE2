import { Link } from 'react-router-dom'
import { Package } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">Product Management</span>
          </Link>
        </div>
      </div>
    </header>
  )
}