import { FC, useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'

import s from './Alert.module.css'
import { CloseIcon } from '@/icons'
import type { AlertProps } from './Alert.types'

export const Alert: FC<AlertProps> = ({
  variant = 'error',
  title,
  message,
  className,
  onClose,
  autoCloseMs,
}) => {
  const [visible, setVisible] = useState(true)

  const handleClose = useCallback(() => {
    setVisible(false)
    onClose?.()
  }, [onClose])

  useEffect(() => {
    if (!autoCloseMs) return
    const timerId = setTimeout(handleClose, autoCloseMs)
    return () => clearTimeout(timerId)
  }, [autoCloseMs, handleClose])

  if (!visible) return null

  return (
    <div className={clsx(s.alert, s[variant], className)}>
      <div className={s.content}>
        {title && <div className={s.title}>{title}</div>}
        <div className={s.message}>{message}</div>
      </div>

      <button
        type="button"
        className={s.closeButton}
        onClick={handleClose}
        aria-label="Close alert"
      >
        <CloseIcon />
      </button>
    </div>
  )
}
