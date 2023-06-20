import React from 'react'
import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ className, hover, children, ...rest }: CardProps) {
  let hoverClasses: string = ''
  if (hover != null && hover) {
    hoverClasses =
      'hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-800 hover:dark:bg-neutral-800/30'
  }
  const classes = twMerge(
    cx(
      'group rounded-lg border border-neutral-800 px-5 py-4 transition-colors',
      'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-transparent',
      hoverClasses
    ),
    className
  )

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
