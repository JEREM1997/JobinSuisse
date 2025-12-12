import React, { ReactNode } from 'react'

interface InteractiveCardProps {
  children: ReactNode
  className?: string
}

export default function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  return (
    <div className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}>
      {children}
    </div>
  )
}