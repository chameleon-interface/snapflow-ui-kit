import { FC } from 'react'
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
}) => {
  return (
    <div className={clsx(s.alert, s[variant], className)}>
      <div className={s.content}>
        {title && <div className={s.title}>{title}</div>}
        <div className={s.message}>{message}</div>
      </div>

      {onClose && (
        <button type="button" className={s.closeButton} onClick={onClose} aria-label="Close alert">
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
