import { forwardRef, useId, useState } from 'react'
import { clsx } from 'clsx'

import s from './Input.module.css'
import { InputProps } from './Input.types'
import { EyeIcon } from '@/icons'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      errorMessage,
      startIcon,
      endIcon,
      onEndIconClick,
      allowPasswordToggle,
      disabled,
      type = 'text',
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = `${inputId}-error`

    const isError = Boolean(errorMessage)
    const isPassword = type === 'password' && allowPasswordToggle

    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={clsx(s.wrapper, className)}>
        {label && (
          <label htmlFor={inputId} className={s.label}>
            {label}
          </label>
        )}

        <div
          className={clsx(s.inputContainer, {
            [s.error]: isError,
            [s.disabled]: disabled,
            [s.withStartIcon]: Boolean(startIcon),
            [s.withEndIcon]: Boolean(endIcon) || isPassword,
          })}
        >
          {startIcon && <span className={s.startIcon}>{startIcon}</span>}

          <input
            ref={ref}
            id={inputId}
            className={s.input}
            type={isPassword && showPassword ? 'text' : type}
            disabled={disabled}
            aria-invalid={isError}
            aria-describedby={isError ? errorId : undefined}
            {...rest}
          />

          {isPassword && (
            <button
              type="button"
              className={s.endIcon}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            >
              <EyeIcon />
            </button>
          )}

          {endIcon && !isPassword && (
            <button type="button" className={s.endIcon} onClick={onEndIconClick}>
              {endIcon}
            </button>
          )}
        </div>

        {isError && (
          <span id={errorId} className={s.errorMessage} role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
