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

      if (!ref.current || !target) return

      if (!ref.current.contains(target)) {
        onCloseRef.current()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, ref])
}
