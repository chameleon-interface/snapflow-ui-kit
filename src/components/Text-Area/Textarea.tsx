import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'

import s from './Textarea.module.css'

export type TextareaProps = {
  /** Отображать состояние ошибки */
  error?: boolean
  /** Сообщение об ошибки */
  errorMessage?: string
  /** Дополнительные классы */
  className?: string
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    error = false,
    errorMessage,
    className,
    placeholder = 'Text-area',
    disabled,
    ...rest
  } = props

  const textareaClasses = clsx(
    s.textarea,
    {
      [s.errorState]: error,
      [s.disabled]: disabled,
    },
    className,
  )

  return (
    <div className={s.textareaWrapper}>
      <label>Text-area</label>
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={textareaClasses}
        disabled={disabled}
        aria-invalid={error}
        aria-describedby="error-message"
        {...rest}
      />
      <span
        id="error-message"
        className={clsx(s.errorMessage, { [s.visible]: error })}
        role="alert"
      >
        {errorMessage || '\u00A0'}
      </span>
    </div>
  )
})

Textarea.displayName = 'Textarea'
