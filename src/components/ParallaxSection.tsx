import React, { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
}

export default function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}