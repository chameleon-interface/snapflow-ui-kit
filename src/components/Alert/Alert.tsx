import { FC } from 'react'
import { clsx } from 'clsx'
import s from './Alert.module.css'

export type AlertProps = {
  /** Тип уведомления */
  variant?: 'error' | 'success'
  /** Текст уведомления */
  message: string
  /** Дополнительные классы */
  className?: string

  onClose: () => void
}

export const Alert: FC<AlertProps> = ({ variant = 'error', message, className, onClose }) => {
  const alertClasses = clsx(
    s.alert,
    {
      [s.error]: variant === 'error',
      [s.success]: variant === 'success',
    },
    className,
  )

  return (
    <div className={alertClasses}>
      {message}{' '}
      <button className={s.closeButton} onClick={onClose} aria-label="Close alert">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  )
}
