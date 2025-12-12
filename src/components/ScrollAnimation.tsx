import React, { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeIn' | 'fadeInUp' | 'bounceIn' | 'slideBlur'
  delay?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  className = ''
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animate-in')
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    fadeIn: 'opacity-0 transition-opacity duration-1000',
    fadeInUp: 'opacity-0 translate-y-8 transition-all duration-1000',
    bounceIn: 'opacity-0 scale-95 transition-all duration-1000',
    slideBlur: 'opacity-0 translate-x-8 blur-sm transition-all duration-1000'
  }[animation]

  return (
    <div 
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={{
        '--tw-translate-y': '0',
        '--tw-translate-x': '0',
        '--tw-scale-x': '1',
        '--tw-scale-y': '1',
        '--tw-blur': '0'
      } as React.CSSProperties}
    >
      {children}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
          filter: blur(0) !important;
        }
      `}</style>
    </div>
  )
}