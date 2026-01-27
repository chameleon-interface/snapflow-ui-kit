import { useEffect } from 'react'
import { clsx } from 'clsx'
import s from './Modal.module.css'
import { ModalProps } from './Modal.types'

export const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={s.overlay} onClick={onClose}>
      <div
        className={clsx(s.modal, className)}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className={s.header}>
          <h2 className={s.title}>{title}</h2>

          <button type="button" className={s.close} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <div className={s.body}>{children}</div>
      </div>
    </div>
  )
}
