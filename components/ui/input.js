import React from 'react'

export function Input(props) {
  return (
    <input
      className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  )
}