'use client'

import { useEffect, type RefObject } from 'react'

type UseDismissParams<T extends HTMLElement = HTMLElement> = {
  ref: RefObject<T | null>
  isOpen: boolean
  onDismiss: () => void
}

export const useDismiss = <T extends HTMLElement = HTMLElement>({
  ref,
  isOpen,
  onDismiss,
}: UseDismissParams<T>) => {
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onDismiss()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onDismiss, ref])
}
