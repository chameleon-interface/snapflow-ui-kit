import { useEffect, useRef, RefObject } from 'react'

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  onClose: () => void,
) => {
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null

      if (ref.current && target && !ref.current.contains(target)) {
        onCloseRef.current()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
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
  }, [isOpen, ref])
}
