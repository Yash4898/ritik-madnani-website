import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useScrollRestoration(key: string) {
  const router = useRouter()

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString())
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [key])

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(`scroll-${key}`)
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition))
        sessionStorage.removeItem(`scroll-${key}`)
      }, 0)
    }
  }, [key])
}
