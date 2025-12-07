import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}