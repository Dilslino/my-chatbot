import React from 'react'

export function Avatar({ children }) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-black flex items-center justify-center">
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover"/>
}

export function AvatarFallback() {
  return <div className="w-full h-full bg-black"></div>
}