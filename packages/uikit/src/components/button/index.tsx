import React from 'react'

interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button className="text-gray-800 dark:text-white">{children}</button>
}
