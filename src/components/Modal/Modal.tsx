'use client'

import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { clsx } from 'clsx'
import { FocusTrap } from 'focus-trap-react'

import s from './Modal.module.css'
import { ModalProps } from './Modal.types'
import { CloseIcon } from '@/icons/CloseIcon'

export const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  const titleId = useId()
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  if (!open) return null
  if (typeof document === 'undefined') return null
  const modalRoot = document.getElementById('modal-root') ?? document.body

  return createPortal(
    <FocusTrap
      active={open}
      focusTrapOptions={{
        clickOutsideDeactivates: true,
        returnFocusOnDeactivate: true,
      }}
    >
      <div className={s.overlay} onClick={() => onCloseRef.current()}>
        <div
          className={clsx(s.modal, className)}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <header className={s.header}>
            <h2 id={titleId} className={s.title}>
              {title}
            </h2>

            <button
              type="button"
              className={s.close}
              aria-label="Close modal"
              onClick={() => onCloseRef.current()}
            >
              <CloseIcon />
            </button>
          </header>

          <div className={s.body}>{children}</div>
        </div>
      </div>
    </FocusTrap>,
    modalRoot,
  )
}
