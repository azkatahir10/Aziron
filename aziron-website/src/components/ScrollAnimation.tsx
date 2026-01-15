import { ReactNode, useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right'
  delay?: number
  threshold?: number
  className?: string
}

const ScrollAnimation = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? `${animation} opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation