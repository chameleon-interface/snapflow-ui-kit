'use client'

import { forwardRef, useId } from 'react'
import { clsx } from 'clsx'

import s from './Textarea.module.css'
import type { TextareaProps } from './Textarea.types'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorMessage, id, className, disabled, minHeight = 84, required, ...rest }, ref) => {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const errorId = errorMessage ? `${textareaId}-error` : undefined

    return (
      <div className={clsx(s.textareaWrapper, className)}>
        {label && (
          <label htmlFor={textareaId} className={clsx(s.label, { [s.disabled]: disabled })}>
            {label}
            {required && <sup className={s.required}> *</sup>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={clsx(s.textarea, { [s.errorState]: !!errorMessage })}
          aria-invalid={!!errorMessage}
          aria-describedby={errorId}
          required={required}
          disabled={disabled}
          style={{ minHeight }}
          {...rest}
        />

        {errorMessage && (
          <span id={errorId} role="alert" className={s.errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
