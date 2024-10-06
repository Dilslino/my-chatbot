import React from 'react'

export function Button({ children, variant = 'default', size = 'default', ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-primary/5",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
  }
  const sizeStyles = {
    default: "px-4 py-2",
    icon: "p-2",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`} {...props}>
      {children}
    </button>
  )
}